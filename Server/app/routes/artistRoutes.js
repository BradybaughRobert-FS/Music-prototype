const router = require('express').Router();
const { getAllArtists, getArtistById, createArtist, updateArtist, deleteArtist } = require("../controller/artistController");


router.get("/", getAllArtists);

router.get("/:id", getArtistById);

router.post("/", createArtist );

router.put("/:id", updateArtist );

router.delete("/:id", deleteArtist );

module.exports = router;    