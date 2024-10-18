const mongoose = require('mongoose');

// MongoDB connection URL
const mongoURI = 'mongodb://localhost:27017/mongoosedb';

// Connect to MongoDB
const connectDB = () => {
    const connectDB = mongoose.connect(mongoURI)
        .then((con) => {
            console.log('Connected to MongoDB');
        })
        .catch((err) => {
            console.error('Error connecting to MongoDB:', err);
        });
}

module.exports = connectDB