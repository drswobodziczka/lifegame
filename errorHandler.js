/**
 * Centralized Error Handling Middleware for Express
 * 
 * This middleware:
 * - Logs stack traces for debugging
 * - Normalizes all error responses to { error: message } format
 * - Handles different types of errors (validation, authentication, server errors)
 */

const errorHandler = (err, req, res, next) => {
  // Log the full error with stack trace for debugging
  console.error('Error occurred:');
  console.error('Path:', req.method, req.path);
  console.error('Time:', new Date().toISOString());
  console.error('Stack trace:', err.stack);
  
  // Default error response
  let statusCode = 500;
  let message = 'Internal Server Error';
  
  // Handle specific error types
  if (err.name === 'ValidationError') {
    statusCode = 400;
    message = err.message;
  } else if (err.name === 'UnauthorizedError' || err.status === 401) {
    statusCode = 401;
    message = 'Unauthorized';
  } else if (err.name === 'ForbiddenError' || err.status === 403) {
    statusCode = 403;
    message = 'Forbidden';
  } else if (err.name === 'NotFoundError' || err.status === 404) {
    statusCode = 404;
    message = 'Not Found';
  } else if (err.status && err.message) {
    // Handle errors with explicit status and message
    statusCode = err.status;
    message = err.message;
  }
  
  // In development, include more error details
  if (process.env.NODE_ENV === 'development') {
    console.error('Full error object:', err);
  }
  
  // Send normalized error response
  res.status(statusCode).json({
    error: message
  });
};

module.exports = errorHandler;
