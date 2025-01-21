const express = require('express');
const router = express.Router();
const artistRoutes = require("./artistRoutes");

router.get("/", (req, res) => {
    res.status(200).json({ success: true, message: `${req.method} - Request made` });
});

router.use("/artist", artistRoutes);

module.exports = router;
