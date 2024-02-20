// routes/cart.js

const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

// Route to add a product to the cart
router.post('/add', cartController.addToCart);

// Route to remove a product from the cart
router.post('/remove', cartController.removeFromCart);

// Other routes related to cart functionality can be added here

module.exports = router;
