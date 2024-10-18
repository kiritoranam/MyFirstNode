const mongoose = require("mongoose");

const AccSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: ["First Name is Mandatory !!!"]
    },
    lastName: {
        type: String,
        require: ["Last Name is Mandatory !!!"]
    },
    mobileNo: {
        type: Number,
        require: ["Mobile No. is Mandatory !!!"]
    },
    emailId: {
        type: String,
        require: ["Email Id is Mandatory !!!"]
    },
    address: {
        type: String,
        require: ["Address is Mandatory !!!"]
    },
    status: {
        type: String,
    },
    lastUpdatedTimeStamp: {
        type: Date,
    },
    userId: {
        type: String,
    },
    password: {
        type: String,
    },
})

const AccDetails = new mongoose.model('DemoAccDetails', AccSchema);

module.exports = AccDetails