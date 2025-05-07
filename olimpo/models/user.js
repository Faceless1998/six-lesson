const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    surname: {type: String, required: true},
    password: {type: String, required: true},
    mail: {type: String, required: true, unique: true},
    username: {type: String, required: true, unique: true},
    year: {type: Number, required: true},
    phone: {type: Number, required: true},
    status: {type: String, enum:['admin', 'editor', 'contributor'], default:'contributor' }
}, {timestamps: true});

module.exports = mongoose.model('user', userSchema)