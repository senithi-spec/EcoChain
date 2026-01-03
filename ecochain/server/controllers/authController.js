const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const prisma = new PrismaClient();

// Register new user
const register = async (req, res) => {
  try {
    const { email, name, role, orgId, phone, address, password } = req.body;

    // Validation
    if (!email || !name || !role || !password) {
      return res.status(400).json({ error: "All fields are required." });
    }

    if (!phone) {
      return res.status(400).json({ error: "Phone number is required." });
    }

    if (role === "DONOR" && !address) {
      return res
        .status(400)
        .json({ error: "Collection address is required for donors." });
    }

    if (!["DONOR", "RECEIVER"].includes(role)) {
      return res.status(400).json({ error: "Role must be DONOR or RECEIVER." });
    }

    if (role === "RECEIVER" && !orgId) {
      return res
        .status(400)
        .json({ error: "Organization ID is required for receivers." });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ error: "Password must be at least 6 characters." });
    }

    // Check if email exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: "Email already registered." });
    }

    // Hash password
    const passwordHash = await bcrypt.hash(password, 10);

    // Create user
    const user = await prisma.user.create({
      data: {
        email,
        name,
        role,
        orgId: role === "RECEIVER" ? orgId : null,
        phone,
        address: role === "DONOR" ? address : null,
        passwordHash,
      },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        orgId: true,
        phone: true,
        address: true,
        createdAt: true,
      },
    });

    // Generate JWT
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.status(201).json({ user, token });
  } catch (error) {
    console.error("Register error:", error);
    res.status(500).json({ error: "Registration failed. Please try again." });
  }
};

// Login user
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ error: "Email and password are required." });
    }

    // Find user
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: "Invalid email or password." });
    }

    // Check password
    const validPassword = await bcrypt.compare(password, user.passwordHash);
    if (!validPassword) {
      return res.status(401).json({ error: "Invalid email or password." });
    }

    // Generate JWT
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.json({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
        orgId: user.orgId,
        phone: user.phone,
        address: user.address,
      },
      token,
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Login failed. Please try again." });
  }
};

// Get current user
const getMe = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        orgId: true,
        phone: true,
        address: true,
        createdAt: true,
      },
    });

    res.json(user);
  } catch (error) {
    console.error("GetMe error:", error);
    res.status(500).json({ error: "Failed to get user info." });
  }
};

module.exports = { register, login, getMe };
