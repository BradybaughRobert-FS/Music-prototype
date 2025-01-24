const router = require('express').Router();
const {
    getAllArtists,
    getArtistById,
    createArtist,
    updateArtist,
    deleteArtist
} = require("../controller/artistController");

router.get("/", getAllArtists);

router.get("/:id", getArtistById);

router.post("/", createArtist);

router.patch("/:id", updateArtist);  // Use PATCH for partial updates

router.delete("/:id", deleteArtist);

module.exports = router;
