const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    name: {type: String, required: true},
    genre: {type: String},
    year: {type: Number},
    starring: [String]
}, {timestamps: true});

module.exports = mongoose.model('movie', movieSchema)