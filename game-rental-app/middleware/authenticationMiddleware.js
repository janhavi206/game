// middleware/authenticationMiddleware.js

const authenticateUser = (req, res, next) => {
    // Check if user is authenticated
    if (req.isAuthenticated()) {
        // If authenticated, proceed to the next middleware or route handler
        return next();
    } else {
        // If not authenticated, redirect to login page or send unauthorized response
        res.status(401).send('Unauthorized');
    }
};

module.exports = {
    authenticateUser
};
