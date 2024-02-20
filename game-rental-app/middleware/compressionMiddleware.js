// middleware/compressionMiddleware.js

const compression = require('compression');

const compressResponse = compression();

module.exports = {
    compressResponse
};
