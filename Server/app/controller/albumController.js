const Album = require('../models/Album');

const getAllAlbums = async (req, res) => {
    try {
        console.log(`${req.method} Request to fetch all albums`); // Log the request
        const albums = await Album.find(); // Fetch all albums
        console.log(`Fetched albums:`, albums); // Log the fetched albums
        res.status(200).json({
            success: true,
            albums,
            message: `${req.method} - All albums fetched`,
        });
    } catch (error) {
        console.error(`Error fetching albums:`, error.message); // Log the error
        res.status(500).json({
            success: false,
            message: "Error fetching albums",
            error: error.message,
        });
    }
};

const getAlbumById = async (req, res) => {
    try {
        const { id } = req.params; // Extract `id` from request parameters
        console.log(`${req.method} Request to fetch album with ID: ${id}`); // Log the request
        const album = await Album.findById(id); // Fetch album by ID
        if (!album) {
            console.warn(`Album with ID ${id} not found`); // Log if not found
            return res.status(404).json({
                success: false,
                message: "Album not found",
            });
        }
        console.log(`Fetched album:`, album); // Log the fetched album
        res.status(200).json({
            success: true,
            album,
            message: `${req.method} - Album fetched`,
        });
    } catch (error) {
        console.error(`Error fetching album by ID:`, error.message); // Log the error
        res.status(500).json({
            success: false,
            message: "Error fetching album",
            error: error.message,
        });
    }
};

const createAlbum = async (req, res) => {
    try {
        const albumData = req.body; // Extract album data from request body
        console.log(`${req.method} Request to create a new album with data:`, albumData); // Log the incoming data
        const newAlbum = new Album(albumData); // Create a new album instance
        await newAlbum.save(); // Save to the database
        console.log('Album created successfully:', newAlbum); // Log the created album
        res.status(201).json({
            success: true,
            album: newAlbum,
            message: `${req.method} - Album created`,
        });
    } catch (error) { // Corrected syntax for catch block
        console.error('Error creating album:', error.message); // Log the error
        res.status(500).json({
            success: false,
            message: "Error creating album",
            error: error.message,
        });
    }
};

const updateAlbum = async (req, res) => {
    try {
        const { id } = req.params; // Extract album ID from request params
        const updatedData = req.body; // Extract updated data from request body
        console.log(`${req.method} Request to update album with ID ${id}. Data:`, updatedData); // Log the request
        const updatedAlbum = await Album.findByIdAndUpdate(id, updatedData, { new: true }); // Update album
        if (!updatedAlbum) {
            console.warn(`Album with ID ${id} not found for update`); // Log if not found
            return res.status(404).json({
                success: false,
                message: "Album not found",
            });
        }
        console.log('Album updated successfully:', updatedAlbum); // Log the updated album
        res.status(200).json({
            success: true,
            updatedAlbum,
            message: `${req.method} - Album updated`,
        });
    } catch (error) {
        console.error(`Error updating album with ID ${id}:`, error.message); // Log the error
        res.status(500).json({
            success: false,
            message: "Error updating album",
            error: error.message,
        });
    }
};

const deleteAlbum = async (req, res) => {
    try {
        const { id } = req.params; // Extract album ID from request params
        console.log(`${req.method} Request to delete album with ID ${id}`); // Log the request
        const deletedAlbum = await Album.findByIdAndDelete(id); // Delete album
        if (!deletedAlbum) {
            console.warn(`Album with ID ${id} not found for deletion`); // Log if not found
            return res.status(404).json({
                success: false,
                message: "Album not found",
            });
        }
        console.log('Album deleted successfully:', deletedAlbum); // Log the deleted album
        res.status(200).json({
            success: true,
            deletedAlbum,
            message: `${req.method} - Album deleted`,
        });
    } catch (error) {
        console.error(`Error deleting album with ID ${id}:`, error.message); // Log the error
        res.status(500).json({
            success: false,
            message: "Error deleting album",
            error: error.message,
        });
    }
};


module.exports = { getAllAlbums, getAlbumById, createAlbum, updateAlbum, deleteAlbum };
