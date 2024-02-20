const express = require('express');
const mongoose = require('mongoose');
const homeRoutes = require('./routes/home');
const cartRoutes = require('./routes/cart');

// Import middleware functions
const { logRequest } = require('./middleware/loggingMiddleware');
const { handleErrors } = require('./middleware/errorHandlingMiddleware');
const { compressResponse } = require('./middleware/compressionMiddleware');
const { configureCors } = require('./middleware/corsMiddleware');
const { apiLimiter } = require('./middleware/rateLimitingMiddleware');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/game_rental_db', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

// Use middleware functions
app.use(logRequest); // Logging middleware
app.use(compressResponse); // Compression middleware
app.use(configureCors); // CORS middleware
app.use(apiLimiter); // Rate limiting middleware

// Use routes
app.use('/', homeRoutes);

// Error handling middleware
app.use(handleErrors);


// Use cart routes
app.use('/cart', cartRoutes);

app.get('/', (req, res) => {
    res.send('Hello, World!'); // Or render a HTML page or redirect to another route
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));




