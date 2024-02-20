const mongoose = require('mongoose');

// Define the schema for the Order entity
const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    products: [{
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        rentedAtPrice: {
            type: String,
            required: true
        },
        bookingStartDate: {
            type: Date,
            required: true
        },
        bookingEndDate: {
            type: Date,
            required: true
        }
    }],
    totalPrice: {
        type: Number,
        required: true
    },
    // Add other fields as needed
}, { timestamps: true });

// Create an Order model using the schema
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
