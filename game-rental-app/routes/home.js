// routes/home.js

const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

// Save/Remove from Wishlist
router.put('/wishlist', homeController.saveRemoveFromWishlist);

module.exports = router;
