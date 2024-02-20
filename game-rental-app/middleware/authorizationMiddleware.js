// middleware/authorizationMiddleware.js

const authorizeUser = (req, res, next) => {
    // Check user's role or permissions
    if (req.user.role === 'admin') {
        // If user is authorized, proceed to the next middleware or route handler
        return next();
    } else {
        // If user is not authorized, send forbidden response
        res.status(403).send('Forbidden');
    }
};

module.exports = {
    authorizeUser
};
