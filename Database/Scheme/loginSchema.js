const mongoose = require("mongoose")

const imageSchema = new mongoose.Schema({
    name: String,
    data: String,
    contentType: String,
    _id:false
})

const userSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: [true, "User Id is required field !!!"],
        // unique: true
    },
    password: {
        type: String,
        required: [true, "Password is required field !!!"],
    },
    image: [imageSchema]
});
const User = mongoose.model('sample', userSchema);

module.exports = User