const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database with test data...\n");

  // Clear existing data
  await prisma.item.deleteMany();
  await prisma.user.deleteMany();
  console.log("✓ Cleared existing data\n");

  // Create Donors
  const donors = [
    {
      email: "keells@ecochain.lk",
      name: "Keells Super - Colombo 7",
      role: "DONOR",
      phone: "+94 11 234 5678",
      address: "No. 45, Galle Road, Colombo 03, Near Kollupitiya Junction",
      password: "password123",
    },
    {
      email: "peaborey@ecochain.lk",
      name: "Perera & Sons Bakery",
      role: "DONOR",
      phone: "+94 11 456 7890",
      address:
        "No. 123, Duplication Road, Colombo 04, Near Bambalapitiya Station",
      password: "password123",
    },
    {
      email: "shanmugas@ecochain.lk",
      name: "Shanmugas Restaurant",
      role: "DONOR",
      phone: "+94 77 123 4567",
      address: "No. 78, Main Street, Pettah, Colombo 11",
      password: "password123",
    },
  ];

  const createdDonors = [];
  for (const donor of donors) {
    const passwordHash = await bcrypt.hash(donor.password, 10);
    const user = await prisma.user.create({
      data: {
        email: donor.email,
        name: donor.name,
        role: donor.role,
        phone: donor.phone,
        address: donor.address,
        passwordHash,
      },
    });
    createdDonors.push(user);
    console.log(`✓ Created Donor: ${user.name} (${user.email})`);
  }

  // Create Receivers
  const receivers = [
    {
      email: "sarvodaya@ecochain.lk",
      name: "Sarvodaya Shramadana Movement",
      role: "RECEIVER",
      orgId: "ORG-SSM-001",
      phone: "+94 11 285 5255",
      password: "password123",
    },
    {
      email: "elders@ecochain.lk",
      name: "Colombo Elders Home - Nawaloka",
      role: "RECEIVER",
      orgId: "ORG-CEH-002",
      phone: "+94 77 890 1234",
      password: "password123",
    },
    {
      email: "helpage@ecochain.lk",
      name: "HelpAge Sri Lanka",
      role: "RECEIVER",
      orgId: "ORG-HA-003",
      phone: "+94 11 250 9950",
      password: "password123",
    },
  ];

  const createdReceivers = [];
  for (const receiver of receivers) {
    const passwordHash = await bcrypt.hash(receiver.password, 10);
    const user = await prisma.user.create({
      data: {
        email: receiver.email,
        name: receiver.name,
        role: receiver.role,
        orgId: receiver.orgId,
        phone: receiver.phone,
        passwordHash,
      },
    });
    createdReceivers.push(user);
    console.log(`✓ Created Receiver: ${user.name} (${user.email})`);
  }

  console.log("\n");

  // Create Food Items
  const now = new Date();
  const tomorrow = new Date(now.getTime() + 24 * 60 * 60 * 1000);
  const dayAfter = new Date(now.getTime() + 48 * 60 * 60 * 1000);
  const nextWeek = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);

  const items = [
    // Available items (not claimed)
    {
      name: "Fresh Kimbula Buns & Roast Paan",
      quantity: 40,
      expiry: tomorrow,
      status: "AVAILABLE",
      donorId: createdDonors[1].id, // Perera & Sons Bakery
      pickupNotes: "Available after 7pm at back entrance. Ask for Sunil.",
      photoUrl: null,
    },
    {
      name: "Mixed Vegetables - Carrots, Beans, Leeks",
      quantity: 15,
      expiry: dayAfter,
      status: "AVAILABLE",
      donorId: createdDonors[0].id, // Keells Super
      pickupNotes: "Ask for Manager Priyantha at Customer Service. Bring bags.",
      photoUrl: null,
    },
    {
      name: "Fish Buns & Egg Rolls",
      quantity: 25,
      expiry: tomorrow,
      status: "AVAILABLE",
      donorId: createdDonors[1].id, // Perera & Sons Bakery
      pickupNotes: "Morning pickup preferred. Call 30 mins before arrival.",
      photoUrl: null,
    },
    {
      name: "Rice Packets Bundle (Nadu Rice)",
      quantity: 20,
      expiry: nextWeek,
      status: "AVAILABLE",
      donorId: createdDonors[0].id, // Keells Super
      pickupNotes: "Collect from loading area near car park. Bring vehicle.",
      photoUrl: null,
    },
    {
      name: "Cooked Rice & Curry Meals",
      quantity: 30,
      expiry: tomorrow,
      status: "AVAILABLE",
      donorId: createdDonors[2].id, // Shanmugas
      pickupNotes: "Ready after 9pm closing. Bring insulated containers.",
      photoUrl: null,
    },

    // Reserved items (claimed by receivers)
    {
      name: "Fresh Fruits - Papaya & Bananas",
      quantity: 18,
      expiry: dayAfter,
      status: "RESERVED",
      donorId: createdDonors[0].id, // Keells Super
      receiverId: createdReceivers[0].id, // Sarvodaya
      pickupNotes: "Available during store hours 8am-9pm. Ask at counter.",
      photoUrl: null,
    },
    {
      name: "Kottu Roti & String Hoppers",
      quantity: 15,
      expiry: tomorrow,
      status: "RESERVED",
      donorId: createdDonors[2].id, // Shanmugas
      receiverId: createdReceivers[1].id, // Elders Home
      pickupNotes: "After lunch service ends at 2:30pm. Side entrance.",
      photoUrl: null,
    },
    {
      name: "Canned Fish & Dhal Collection",
      quantity: 50,
      expiry: nextWeek,
      status: "RESERVED",
      donorId: createdDonors[0].id, // Keells Super
      receiverId: createdReceivers[2].id, // HelpAge
      pickupNotes: "Heavy items - bring three-wheeler or van. Back entrance.",
      photoUrl: null,
    },

    // Completed items (successfully rescued)
    {
      name: "Wedding Cake (Surplus)",
      quantity: 3,
      expiry: new Date(now.getTime() - 12 * 60 * 60 * 1000), // yesterday
      status: "COMPLETED",
      donorId: createdDonors[1].id, // Perera & Sons Bakery
      receiverId: createdReceivers[0].id, // Sarvodaya
      pickupNotes: "Collected from main counter.",
      collectedAt: new Date(now.getTime() - 18 * 60 * 60 * 1000), // 18 hours ago
      photoUrl: null,
    },
    {
      name: "Samba Rice & Coconut Milk Bundle",
      quantity: 25,
      expiry: new Date(now.getTime() - 24 * 60 * 60 * 1000),
      status: "COMPLETED",
      donorId: createdDonors[0].id, // Keells Super
      receiverId: createdReceivers[2].id, // HelpAge
      pickupNotes: "Picked up from loading dock.",
      collectedAt: new Date(now.getTime() - 30 * 60 * 60 * 1000), // 30 hours ago
      photoUrl: null,
    },
  ];

  for (const item of items) {
    const created = await prisma.item.create({
      data: item,
      include: { donor: true, receiver: true },
    });
    const statusEmoji =
      item.status === "AVAILABLE"
        ? "🟢"
        : item.status === "RESERVED"
        ? "🟡"
        : "✅";
    const claimedBy = created.receiver
      ? ` → Claimed by: ${created.receiver.name}`
      : "";
    console.log(
      `${statusEmoji} ${item.status}: "${item.name}" (qty: ${item.quantity}) from ${created.donor.name}${claimedBy}`
    );
  }

  console.log("\n========================================");
  console.log("🎉 Seed completed successfully!");
  console.log("========================================\n");

  console.log("📊 Summary:");
  console.log(`   Donors: ${createdDonors.length}`);
  console.log(`   Receivers: ${createdReceivers.length}`);
  console.log(`   Items: ${items.length}`);
  console.log(
    `     - Available: ${items.filter((i) => i.status === "AVAILABLE").length}`
  );
  console.log(
    `     - Reserved: ${items.filter((i) => i.status === "RESERVED").length}`
  );
  console.log(
    `     - Completed: ${items.filter((i) => i.status === "COMPLETED").length}`
  );

  console.log("\n📝 Test Login Credentials (password for all: password123):");
  console.log("\n   DONORS:");
  donors.forEach((d) => console.log(`     - ${d.email}`));
  console.log("\n   RECEIVERS:");
  receivers.forEach((r) => console.log(`     - ${r.email}`));
  console.log("\n");
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
