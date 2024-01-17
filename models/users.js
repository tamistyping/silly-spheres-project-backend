const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userEmail: {
        type: String,
        required: true
    },
    lastLogin: {
        type: Date,
        required: true
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User;