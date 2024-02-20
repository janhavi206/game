const Product = require('../models/product');

const getProductDetails = async (req, res) => {
    const productId = req.params.productId;

    try {
        // Find the product in the database by productId
        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).send('Product not found');
        }

        // Return product details
        res.json(product);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
};

const saveRemoveFromWishlist = async (req, res) => {
    const { productId, action } = req.body;
    const userId = req.user.id;

    try {
        // Implement logic to save or remove product from wishlist
        // Example: Find the user by userId and add/remove the product from their wishlist based on the action
        res.send(`${action} from Wishlist`);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
};

module.exports = {
    getProductDetails,
    saveRemoveFromWishlist
};
