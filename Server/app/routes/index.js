const express = require('express');
const router = express.Router();
const artistRoutes = require("./artistRoutes");

router.get("/", (req, res) => {
    res.status(200).json({ success: true, message: `${req.method} - Request made` });
});

// Ensure the path matches `/artist` as per your error
router.use("/artist", artistRoutes);

module.exports = router;
