const mongoose = require('mongoose');

const SongSchema = new mongoose.Schema({
    title: { type: String, required: true }, // Song title
    duration: { type: String, required: true }, // Duration in MM:SS format
    artist: { type: mongoose.Schema.Types.ObjectId, ref: 'Artist', required: true } // Reference to the artist/band
});

const AlbumSchema = new mongoose.Schema({
    title: { type: String, required: true }, // Album title
    artist: { type: mongoose.Schema.Types.ObjectId, ref: 'Artist', required: true }, // Reference to the artist/band
    releaseYear: { type: Number }, // Optional release year
    genre: { type: String }, // Genre of the album
    songs: [SongSchema], // Array of songs in the album
    totalDuration: { type: String }, // Total playtime of the album in HH:MM:SS format (optional, can be calculated)
}, { timestamps: true });

module.exports = mongoose.model('Album', AlbumSchema);
