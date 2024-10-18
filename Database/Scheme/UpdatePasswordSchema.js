const mongoose = require("mongoose");

const upPass = new mongoose.Schema({
    userId: {
        type: String,
        required: [true, "User Id is required field !!!"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Old Password is required field !!!"],
    },
    newPassword: {
        type: String,
        required: [true, "New Password is required field !!!"],
    }
})

const updatePass = mongoose.model("Login", upPass)

module.exports = updatePass