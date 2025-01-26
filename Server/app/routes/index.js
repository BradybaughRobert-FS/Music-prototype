const express = require('express');
const router = express.Router();
const artistRoutes = require("./artistRoutes");
const albumRoutes = require("./albumRoutes");  // Import album routes

// Basic test route
router.get("/", (req, res) => {
    res.status(200).json({ success: true, message: `${req.method} - Request made` });
});

// Use artist routes
router.use("/artist", artistRoutes);

// Use album routes
router.use("/album", albumRoutes);  // Add album routes here

module.exports = router;
