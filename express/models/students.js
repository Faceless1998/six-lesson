const mongoose = require('mongoose');

const studentScheme = new mongoose.Schema({
    name: String,
    surname: String,
    year: Number,
    username: String,
    grade: [Number],
}, {timestamps: true}); //createdAt და updatedAt

module.exports = mongoose.model('student', studentScheme);