const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// Get all available items
const getItems = async (req, res) => {
  try {
    const items = await prisma.item.findMany({
      where: { status: "AVAILABLE" },
      include: {
        donor: {
          select: { id: true, name: true, phone: true, address: true },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    res.json(items);
  } catch (error) {
    console.error("GetItems error:", error);
    res.status(500).json({ error: "Failed to fetch items." });
  }
};

// Create new item (Donor only)
const createItem = async (req, res) => {
  try {
    const { name, quantity, expiry, pickupNotes } = req.body;
    const donorId = req.user.id;

    // Validation
    if (!name || !quantity || !expiry) {
      return res
        .status(400)
        .json({ error: "Name, quantity, and expiry date are required." });
    }

    const expiryDate = new Date(expiry);
    if (expiryDate <= new Date()) {
      return res
        .status(400)
        .json({ error: "Expiry date must be in the future." });
    }

    if (parseInt(quantity) <= 0) {
      return res
        .status(400)
        .json({ error: "Quantity must be a positive number." });
    }

    // Handle photo upload
    let photoUrl = null;
    if (req.file) {
      photoUrl = `/uploads/${req.file.filename}`;
    }

    const item = await prisma.item.create({
      data: {
        name,
        quantity: parseInt(quantity),
        expiry: expiryDate,
        photoUrl,
        pickupNotes: pickupNotes || null,
        donorId,
      },
      include: {
        donor: {
          select: { id: true, name: true, phone: true, address: true },
        },
      },
    });

    // Emit socket event for real-time update
    const io = req.app.get("io");
    io.emit("item:new", item);

    res.status(201).json(item);
  } catch (error) {
    console.error("CreateItem error:", error);
    res.status(500).json({ error: "Failed to create item." });
  }
};

// Claim an item (Receiver only)
const claimItem = async (req, res) => {
  try {
    const { id } = req.params;
    const receiverId = req.user.id;

    // Find item
    const item = await prisma.item.findUnique({ where: { id } });

    if (!item) {
      return res.status(404).json({ error: "Item not found." });
    }

    if (item.status !== "AVAILABLE") {
      return res.status(400).json({ error: "Item is no longer available." });
    }

    // Update item
    const updatedItem = await prisma.item.update({
      where: { id },
      data: {
        status: "RESERVED",
        receiverId,
      },
      include: {
        donor: { select: { id: true, name: true, phone: true, address: true } },
        receiver: { select: { id: true, name: true, phone: true } },
      },
    });

    // Emit socket event
    const io = req.app.get("io");
    io.emit("item:claimed", { itemId: id });

    res.json(updatedItem);
  } catch (error) {
    console.error("ClaimItem error:", error);
    res.status(500).json({ error: "Failed to claim item." });
  }
};

// Get donor's posted items
const getMyPosts = async (req, res) => {
  try {
    const items = await prisma.item.findMany({
      where: { donorId: req.user.id },
      include: {
        receiver: { select: { id: true, name: true, phone: true } },
      },
      orderBy: { createdAt: "desc" },
    });

    res.json(items);
  } catch (error) {
    console.error("GetMyPosts error:", error);
    res.status(500).json({ error: "Failed to fetch your posts." });
  }
};

// Get receiver's claimed items
const getMyClaims = async (req, res) => {
  try {
    const items = await prisma.item.findMany({
      where: { receiverId: req.user.id },
      include: {
        donor: { select: { id: true, name: true, phone: true, address: true } },
      },
      orderBy: { createdAt: "desc" },
    });

    res.json(items);
  } catch (error) {
    console.error("GetMyClaims error:", error);
    res.status(500).json({ error: "Failed to fetch your claims." });
  }
};

// Cancel a reservation (Receiver only - can only cancel their own claims)
const cancelClaim = async (req, res) => {
  try {
    const { id } = req.params;
    const receiverId = req.user.id;

    // Find item
    const item = await prisma.item.findUnique({ where: { id } });

    if (!item) {
      return res.status(404).json({ error: "Item not found." });
    }

    if (item.receiverId !== receiverId) {
      return res
        .status(403)
        .json({ error: "You can only cancel your own claims." });
    }

    if (item.status !== "RESERVED") {
      return res
        .status(400)
        .json({ error: "Only reserved items can be cancelled." });
    }

    // Update item back to available
    const updatedItem = await prisma.item.update({
      where: { id },
      data: {
        status: "AVAILABLE",
        receiverId: null,
      },
      include: {
        donor: { select: { id: true, name: true, phone: true, address: true } },
      },
    });

    // Emit socket event - item is available again
    const io = req.app.get("io");
    io.emit("item:new", updatedItem);

    res.json({ message: "Claim cancelled successfully.", item: updatedItem });
  } catch (error) {
    console.error("CancelClaim error:", error);
    res.status(500).json({ error: "Failed to cancel claim." });
  }
};

// Mark item as completed/collected (Donor or Receiver can mark)
const completeItem = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    // Find item
    const item = await prisma.item.findUnique({ where: { id } });

    if (!item) {
      return res.status(404).json({ error: "Item not found." });
    }

    // Only donor or receiver of this item can mark it complete
    if (item.donorId !== userId && item.receiverId !== userId) {
      return res
        .status(403)
        .json({ error: "You are not authorized to complete this item." });
    }

    if (item.status !== "RESERVED") {
      return res
        .status(400)
        .json({ error: "Only reserved items can be marked as completed." });
    }

    // Update item to completed
    const updatedItem = await prisma.item.update({
      where: { id },
      data: {
        status: "COMPLETED",
        collectedAt: new Date(),
      },
      include: {
        donor: { select: { id: true, name: true } },
        receiver: { select: { id: true, name: true } },
      },
    });

    res.json({ message: "Item marked as collected!", item: updatedItem });
  } catch (error) {
    console.error("CompleteItem error:", error);
    res.status(500).json({ error: "Failed to complete item." });
  }
};

module.exports = {
  getItems,
  createItem,
  claimItem,
  cancelClaim,
  completeItem,
  getMyPosts,
  getMyClaims,
};
