// middleware/errorHandlingMiddleware.js

const handleErrors = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
};

module.exports = {
    handleErrors
};
