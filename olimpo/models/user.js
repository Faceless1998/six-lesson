const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    surname: {type: String, required: true},
    password: {type: String, required: true},
    mail: {type: String, required: true, unique: true},
    username: {type: String, required: true, unique: true},
    year: {type: Number},
    phone: {type: Number}
}, {timestamps: true});

module.exports = mongoose.model('user', userSchema)