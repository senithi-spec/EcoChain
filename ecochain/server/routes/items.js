const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();
const {
  getItems,
  createItem,
  claimItem,
  cancelClaim,
  completeItem,
  getMyPosts,
  getMyClaims,
} = require("../controllers/itemController");
const { authMiddleware, requireRole } = require("../middleware/authMiddleware");

// Multer configuration for photo uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../uploads"));
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only JPG and PNG images are allowed"), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
});

// Routes
router.get("/", authMiddleware, getItems);
router.post(
  "/",
  authMiddleware,
  requireRole("DONOR"),
  upload.single("photo"),
  createItem
);
router.patch("/:id/claim", authMiddleware, requireRole("RECEIVER"), claimItem);
router.patch(
  "/:id/cancel",
  authMiddleware,
  requireRole("RECEIVER"),
  cancelClaim
);
router.patch("/:id/complete", authMiddleware, completeItem);
router.get("/my-posts", authMiddleware, requireRole("DONOR"), getMyPosts);
router.get("/my-claims", authMiddleware, requireRole("RECEIVER"), getMyClaims);

module.exports = router;
