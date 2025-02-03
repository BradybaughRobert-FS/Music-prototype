const Artist = require('../models/Artists');

const getAllArtists = async (req, res) => {
    try {
        console.log(`${req.method} Request to fetch all artists`);
        const artists = await Artist.find();
        console.log('Fetched artists:', artists);
        res.status(200).json({ 
            success: true, 
            artists,
            message: `${req.method} - All artists fetched`,
        });
    } catch (error) {
        console.error('Error fetching artists:', error.message);
        res.status(500).json({
            success: false,
            message: "Error fetching artists",
            error: error.message,
        });
    }
};

const getArtistById = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(`${req.method} Request to fetch artist with ID: ${id}`);
        const artist = await Artist.findById(id).populate("albums"); // Populate albums
        if (!artist) {
            return res.status(404).json({ 
                success: false, 
                message: "Artist not found",
            });
        }
        console.log('Fetched artist:', artist);
        res.status(200).json({ 
            success: true, 
            artist,
            message: `${req.method} - Artist fetched by ID`,
        });
    } catch (error) {
        console.error(`Error fetching artist with ID ${id}:`, error.message);
        res.status(500).json({
            success: false,
            message: "Error fetching artist by ID",
            error: error.message,
        });
    }
};

const createArtist = async (req, res) => {
    try {
        const artistData = req.body;
        console.log(`${req.method} Request to create a new artist with data:`, artistData);
        const newArtist = new Artist(artistData);
        await newArtist.save();
        console.log('Artist created successfully:', newArtist);
        res.status(201).json({ 
            success: true, 
            artist: newArtist,
            message: `${req.method} - New artist created`,
        });
    } catch (error) {
        console.error('Error creating artist:', error.message);
        res.status(500).json({
            success: false,
            message: "Error creating artist",
            error: error.message,
        });
    }
};

const updateArtist = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;
        console.log(`${req.method} Request to update artist with ID ${id}. Data:`, updatedData);
        const updatedArtist = await Artist.findByIdAndUpdate(id, updatedData, { new: true });
        if (!updatedArtist) {
            return res.status(404).json({
                success: false,
                message: "Artist not found",
            });
        }
        console.log('Artist updated successfully:', updatedArtist);
        res.status(200).json({
            success: true,
            updatedArtist,
            message: `${req.method} - Artist updated`,
        });
    } catch (error) {
        console.error(`Error updating artist with ID ${id}:`, error.message);
        res.status(500).json({
            success: false,
            message: "Error updating artist",
            error: error.message,
        });
    }
};

const deleteArtist = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(`${req.method} Request to delete artist with ID ${id}`);
        const deletedArtist = await Artist.findByIdAndDelete(id);
        if (!deletedArtist) {
            return res.status(404).json({
                success: false,
                message: "Artist not found",
            });
        }
        console.log('Artist deleted successfully:', deletedArtist);
        res.status(200).json({
            success: true,
            deletedArtist,
            message: `${req.method} - Artist deleted`,
        });
    } catch (error) {
        console.error(`Error deleting artist with ID ${id}:`, error.message);
        res.status(500).json({
            success: false,
            message: "Error deleting artist",
            error: error.message,
        });
    }
};

module.exports = {
    getAllArtists,
    getArtistById,
    createArtist,
    updateArtist,
    deleteArtist,
};
