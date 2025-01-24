const Artist = require('../models/Artists');

const getAllArtists = async (req, res) => {
    try {
        console.log(`${req.method} Request to fetch all artists`); // Log the request
        const artists = await Artist.find(); // Fetch all artists
        console.log('Fetched artists:', artists); // Log the fetched artists
        res.status(200).json({ 
            success: true, 
            artists,
            message: `${req.method} - All artists fetched`,
        });
    } catch (error) {
        console.error('Error fetching artists:', error.message); // Log the error
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
        console.log(`${req.method} Request to fetch artist with ID: ${id}`); // Log the request
        const artist = await Artist.findById(id); // Fetch artist by ID
        if (!artist) {
            console.warn(`Artist with ID ${id} not found`); // Log if not found
            return res.status(404).json({ 
                success: false, 
                message: "Artist not found",
            });
        }
        console.log('Fetched artist:', artist); // Log the fetched artist
        res.status(200).json({ 
            success: true, 
            artist,
            message: `${req.method} - Artist fetched by ID`,
        });
    } catch (error) {
        console.error(`Error fetching artist with ID ${id}:`, error.message); // Log the error
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
        console.log(`${req.method} Request to create a new artist with data:`, artistData); // Log the incoming data
        const newArtist = new Artist(artistData); // Create a new artist instance
        await newArtist.save(); // Save to the database
        console.log('Artist created successfully:', newArtist); // Log the created artist
        res.status(201).json({ 
            success: true, 
            artist: newArtist,
            message: `${req.method} - New artist created`,
        });
    } catch (error) {
        console.error('Error creating artist:', error.message); // Log the error
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
        console.log(`${req.method} Request to update artist with ID ${id}. Data:`, updatedData); // Log the request
        const updatedArtist = await Artist.findByIdAndUpdate(id, updatedData, { new: true }); // Update artist
        if (!updatedArtist) {
            console.warn(`Artist with ID ${id} not found for update`); // Log if not found
            return res.status(404).json({
                success: false,
                message: "Artist not found",
            });
        }
        console.log('Artist updated successfully:', updatedArtist); // Log the updated artist
        res.status(200).json({
            success: true,
            updatedArtist,
            message: `${req.method} - Artist updated`,
        });
    } catch (error) {
        console.error(`Error updating artist with ID ${id}:`, error.message); // Log the error
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
        console.log(`${req.method} Request to delete artist with ID ${id}`); // Log the request
        const deletedArtist = await Artist.findByIdAndDelete(id); // Delete artist
        if (!deletedArtist) {
            console.warn(`Artist with ID ${id} not found for deletion`); // Log if not found
            return res.status(404).json({
                success: false,
                message: "Artist not found",
            });
        }
        console.log('Artist deleted successfully:', deletedArtist); // Log the deleted artist
        res.status(200).json({
            success: true,
            deletedArtist,
            message: `${req.method} - Artist deleted`,
        });
    } catch (error) {
        console.error(`Error deleting artist with ID ${id}:`, error.message); // Log the error
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
