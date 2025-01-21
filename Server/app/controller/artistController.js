const getAllArtists = async (req, res) => {
    res.status(200).json({ 
        success: true, 
        message: `${req.method} - Request to fetch all artists`,
    });
};

const getArtistById = async (req, res) => {
    const id = req.params.id; // Declare 'id' properly with 'const'
    res.status(200).json({ 
        id,
        success: true, 
        message: `${req.method} - Request to fetch artist by ID`,
    });
};

const createArtist = async (req, res) => {
    const artistData = req.body; // Use body data for creating a new artist
    res.status(201).json({ 
        success: true, 
        artist: artistData,
        message: `${req.method} - New artist created`,
    });
};

const updateArtist = async (req, res) => {
    const id = req.params.id; // Declare 'id' properly with 'const'
    const updatedData = req.body; // Use body data for updating the artist
    res.status(200).json({ 
        id,
        updatedArtist: updatedData,
        success: true, 
        message: `${req.method} - Artist updated`,
    });
};

const deleteArtist = async (req, res) => {
    const id = req.params.id; // Declare 'id' properly with 'const'
    res.status(200).json({ 
        id,
        success: true, 
        message: `${req.method} - Artist deleted`,
    });
};

module.exports = {
    getAllArtists,
    getArtistById,
    createArtist,
    updateArtist,
    deleteArtist
};
