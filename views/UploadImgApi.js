const express = require('express');
const uploadImg = express.Router()
const multer = require('multer');
const fs = require('fs');
const imageSchema = require('../Database/Scheme/uploadImgSchema')

// Multer middleware for file uploads

// Route for uploading images

uploadImgApi = async (req, res) => {

    try {
        // Read the uploaded file
        const image = fs.readFileSync(req.file.path);
        // Create a new document in the database
        const newImage = new imageSchema({
            name: req.file.originalname,
            data: image,
            contentType: req.file.mimetype
        });
        // Save the document
        await newImage.save();
        // Delete the temporary file
        fs.unlinkSync(req.file.path);
        res.send('Image uploaded successfully');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error uploading image');
    }
}
// how to send image from database to user using express js

getUploadImgApi = async (req, res) => {

    try {
        // Read the uploaded file
        let image = await imageSchema.find({})
        console.log(123, image);
        if (image) {
            let img = image.data
            res.status(200).json({
                status: "Success",
                data: image
            })
            
        } else {
            res.send("No Data Found !!!")
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Error uploading image');
    }
}

// uploadImg.post('/', upload.single('image'), async (req, res) => {
// });


module.exports = { uploadImgApi, getUploadImgApi }
