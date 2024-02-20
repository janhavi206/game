const mongoose = require('mongoose');


// Define the schema for the Cart entity
const cartSchema = new mongoose.Schema({
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
            required: true,
            default: 1
        }
    }],
    // Add other fields as needed
}, { timestamps: true });

// Create a Cart model using the schema
const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
