// middleware/requestValidationMiddleware.js

const validateRequest = (req, res, next) => {
    // Validate request data
    // Example: Check if request body contains required fields
    if (!req.body.username || !req.body.password) {
        return res.status(400).send('Username and password are required');
    }
    next();
};

module.exports = {
    validateRequest
};
