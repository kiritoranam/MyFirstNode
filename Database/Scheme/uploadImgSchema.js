const mongoose = require('mongoose');

const uploadImgSchema = new mongoose.Schema({
    name: String,
    data: String,
    contentType: String
});

const UploadImg = mongoose.model('Images', uploadImgSchema);

module.exports = UploadImg