/**
 * Rate Limiting & Account Exponential Backoff Middleware
 * Implements:
 * 1. Strict per-IP rate limiting on Auth endpoints.
 * 2. Per-account rate limiting with exponential backoff for authentication routes.
 * 3. Moderate rate limiting for public endpoints.
 * 4. Looser rate limiting for authenticated user actions.
 * All thresholds are configurable via securityConfig and environment variables.
 */

const rateLimit = require('express-rate-limit');
const securityConfig = require('../config/securityConfig');

// 1. Strict Rate Limiter for Auth Routes (per IP)
const authIpLimiter = rateLimit({
    windowMs: securityConfig.rateLimits.auth.windowMs,
    max: securityConfig.rateLimits.auth.maxRequests,
    standardHeaders: true,
    legacyHeaders: false,
    message: {
        success: false,
        message: securityConfig.rateLimits.auth.message
    }
});

// 2. Moderate Rate Limiter for Public Routes
const publicLimiter = rateLimit({
    windowMs: securityConfig.rateLimits.public.windowMs,
    max: securityConfig.rateLimits.public.maxRequests,
    standardHeaders: true,
    legacyHeaders: false,
    message: {
        success: false,
        message: securityConfig.rateLimits.public.message
    }
});

// 3. Looser Rate Limiter for Authenticated User Routes
const authenticatedLimiter = rateLimit({
    windowMs: securityConfig.rateLimits.authenticated.windowMs,
    max: securityConfig.rateLimits.authenticated.maxRequests,
    standardHeaders: true,
    legacyHeaders: false,
    keyGenerator: (req) => {
        return req.user?.id || req.ip;
    },
    message: {
        success: false,
        message: securityConfig.rateLimits.authenticated.message
    }
});

// 4. Per-Account Exponential Backoff Tracker
// Key: normalized email or account identifier
// Value: { failedAttempts: number, unlockTime: number | null, lastAttemptTime: number }
const accountAttempts = new Map();

// Periodic cleanup to avoid memory leak (every 10 minutes)
setInterval(() => {
    const now = Date.now();
    for (const [key, data] of accountAttempts.entries()) {
        // If expired for more than 1 hour, clean up
        if (now - data.lastAttemptTime > 60 * 60 * 1000) {
            accountAttempts.delete(key);
        }
    }
}, 10 * 60 * 1000);

const getAccountKey = (req) => {
    const rawKey = req.body?.email || req.body?.username || req.body?.phone || req.body?.roll;
    return rawKey ? String(rawKey).trim().toLowerCase() : null;
};

const accountExponentialBackoff = {
    // Middleware to check if account is currently undergoing backoff lockout
    checkLockout: (req, res, next) => {
        const key = getAccountKey(req);
        if (!key) return next();

        const data = accountAttempts.get(key);
        if (data && data.unlockTime && data.unlockTime > Date.now()) {
            const remainingSeconds = Math.ceil((data.unlockTime - Date.now()) / 1000);
            res.setHeader('Retry-After', remainingSeconds);
            return res.status(429).json({
                success: false,
                message: `Account is temporarily rate-limited due to repeated attempts. Please try again in ${remainingSeconds} seconds.`,
                retryAfterSeconds: remainingSeconds
            });
        }
        next();
    },

    // Record a failed attempt and apply exponential backoff if threshold exceeded
    recordFailure: (accountIdentifier) => {
        if (!accountIdentifier) return;
        const key = String(accountIdentifier).trim().toLowerCase();
        const { maxFailedAttempts, baseLockoutSeconds, maxLockoutSeconds } = securityConfig.rateLimits.accountLockout;

        const current = accountAttempts.get(key) || { failedAttempts: 0, unlockTime: null, lastAttemptTime: Date.now() };
        current.failedAttempts += 1;
        current.lastAttemptTime = Date.now();

        if (current.failedAttempts >= maxFailedAttempts) {
            // Exponential backoff: base * 2^(attempts - max)
            const exponent = current.failedAttempts - maxFailedAttempts;
            const lockoutSecs = Math.min(baseLockoutSeconds * Math.pow(2, exponent), maxLockoutSeconds);
            current.unlockTime = Date.now() + (lockoutSecs * 1000);
            console.warn(`[RateLimit Backoff] Account '${key}' locked for ${lockoutSecs}s (${current.failedAttempts} failed attempts)`);
        }

        accountAttempts.set(key, current);
    },

    // Reset attempts on successful auth
    recordSuccess: (accountIdentifier) => {
        if (!accountIdentifier) return;
        const key = String(accountIdentifier).trim().toLowerCase();
        accountAttempts.delete(key);
    }
};

module.exports = {
    authIpLimiter,
    publicLimiter,
    authenticatedLimiter,
    accountExponentialBackoff
};
