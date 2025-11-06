const express = require('express');
const morgan = require('morgan');
const errorHandler = require('./errorHandler');

// Create Express app
const app = express();

// Get port from environment variable or default to 3000
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(morgan('combined')); // Request logging

// Basic health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// Test endpoint that throws an error (for testing error handler)
app.get('/test-error', (req, res, next) => {
  const error = new Error('This is a test error');
  error.status = 400;
  next(error);
});

// Error handling middleware (must be after all routes)
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;