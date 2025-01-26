const router = require('express').Router();
const {
    getAllAlbums,
    getAlbumById,
    createAlbum,
    updateAlbum,
    deleteAlbum
} = require("../controller/albumController");

router.get("/", getAllAlbums);

router.get("/:id", getAlbumById);

router.post("/", createAlbum);

router.patch("/:id", updateAlbum);  // Use PATCH for partial updates

router.delete("/:id", deleteAlbum);

module.exports = router;