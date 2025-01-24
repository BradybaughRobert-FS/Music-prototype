const mongoose = require('mongoose');

const ArtistSchema = new mongoose.Schema({
    bandName: { type: String }, // Name of the band (if applicable)
    members: [String], // Array of band members (if applicable)
    formedYear: { type: Number }, // Year the artist or band was formed
    bio: { type: String }, // Optional biography
    genres: [String], // Array of genres
   
}, { timestamps: true }); // Tracks createdAt and updatedAt

module.exports = mongoose.model('Artist', ArtistSchema);
