/**
 * Centralized Error Handling & Information Leakage Prevention Middleware
 * Ensures users never see stack traces, internal paths, or raw database errors.
 * Logs full error details server-side for debugging.
 */

// Helper to wrap async route handlers
const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};

// Global Express Error Handler Middleware
const errorHandler = (err, req, res, next) => {
    const timestamp = new Date().toISOString();
    const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

    // Log full detailed error server-side for debugging
    console.error(`[${timestamp}] [ERROR] ${req.method} ${req.originalUrl} - IP: ${clientIp}`);
    console.error(`Name: ${err.name || 'Error'} | Message: ${err.message}`);
    if (err.stack) {
        console.error(err.stack);
    }

    // Determine status code
    let statusCode = res.statusCode && res.statusCode >= 400 ? res.statusCode : 500;
    let safeMessage = 'An unexpected internal error occurred. Please try again later.';

    // Handle known error types cleanly without leaking internal structures
    if (err.name === 'ZodError') {
        statusCode = 400;
        return res.status(400).json({
            success: false,
            message: 'Input validation failed',
            errors: err.errors ? err.errors.map(e => ({
                field: e.path.join('.'),
                message: e.message
            })) : []
        });
    }

    if (err.name === 'ValidationError') {
        // Mongoose validation error
        statusCode = 400;
        safeMessage = 'Invalid data provided. Please verify all required fields.';
    } else if (err.code === 11000) {
        // Mongoose duplicate key error
        statusCode = 409;
        safeMessage = 'A record with this information already exists.';
    } else if (err.name === 'CastError') {
        // Mongoose invalid ObjectId
        statusCode = 400;
        safeMessage = 'Invalid resource identifier format.';
    } else if (err.name === 'JsonWebTokenError' || err.name === 'TokenExpiredError') {
        statusCode = 401;
        safeMessage = 'Authentication token is invalid or has expired.';
    } else if (err.status && err.status < 500) {
        statusCode = err.status;
        safeMessage = err.message;
    } else if (statusCode < 500) {
        safeMessage = err.message;
    }

    return res.status(statusCode).json({
        success: false,
        message: safeMessage
    });
};

module.exports = {
    errorHandler,
    asyncHandler
};
