const mongoose = require('mongoose');

// Define the schema for the Product entity
const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        enum: ['game', 'controller', 'console'],
        required: true
    },
    // Add other fields as needed
}, { timestamps: true });

// Create a Product model using the schema
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
