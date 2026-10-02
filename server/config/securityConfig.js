/**
 * Security Configuration
 * Configurable thresholds for rate limiting, account lockout, and JWT.
 * Values can be configured via environment variables (.env).
 */

const parseNumber = (value, fallback) => {
    const parsed = Number(value);
    return !isNaN(parsed) && parsed > 0 ? parsed : fallback;
};

const securityConfig = {
    // JWT Configuration
    jwt: {
        secret: process.env.JWT_SECRET || (process.env.NODE_ENV === 'production' ? null : 'acb-dev-insecure-secret-key-change-in-prod'),
        expiresIn: process.env.JWT_EXPIRES_IN || '30d'
    },

    // Rate Limiting Configuration
    rateLimits: {
        // Strict limits for Authentication endpoints (login, register, otp, password reset)
        auth: {
            windowMs: parseNumber(process.env.AUTH_RATE_LIMIT_WINDOW_MS, 15 * 60 * 1000), // 15 minutes
            maxRequests: parseNumber(process.env.AUTH_RATE_LIMIT_MAX, 15), // Max 15 requests per IP
            message: "Too many authentication requests from this IP. Please try again later."
        },

        // Per-account exponential backoff limits for failed logins/verifications
        accountLockout: {
            maxFailedAttempts: parseNumber(process.env.AUTH_ACCOUNT_MAX_ATTEMPTS, 5), // 5 failed attempts before backoff
            baseLockoutSeconds: parseNumber(process.env.AUTH_BACKOFF_BASE_SECONDS, 60), // Start with 60s
            maxLockoutSeconds: parseNumber(process.env.AUTH_BACKOFF_MAX_SECONDS, 1800), // Max 30 minutes
        },

        // Moderate limits for Public endpoints (notices, read-only content, search)
        public: {
            windowMs: parseNumber(process.env.PUBLIC_RATE_LIMIT_WINDOW_MS, 1 * 60 * 1000), // 1 minute
            maxRequests: parseNumber(process.env.PUBLIC_RATE_LIMIT_MAX, 120), // 120 requests per minute
            message: "Too many requests to public endpoints. Please slow down."
        },

        // Looser limits for Authenticated User endpoints (tasks, chat, profile updates)
        authenticated: {
            windowMs: parseNumber(process.env.AUTHED_RATE_LIMIT_WINDOW_MS, 15 * 60 * 1000), // 15 minutes
            maxRequests: parseNumber(process.env.AUTHED_RATE_LIMIT_MAX, 300), // 300 requests per 15 minutes
            message: "Rate limit exceeded for user actions. Please try again later."
        }
    }
};

if (!process.env.JWT_SECRET && process.env.NODE_ENV === 'production') {
    console.error('FATAL: JWT_SECRET environment variable is missing in production!');
}

module.exports = securityConfig;
