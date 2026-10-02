const jwt = require('jsonwebtoken');
const securityConfig = require('../config/securityConfig');

const protect = (req, res, next) => {
    let token = req.headers.authorization;
    if (token && token.startsWith('Bearer ')) {
        try {
            token = token.split(' ')[1];
            const decoded = jwt.verify(token, securityConfig.jwt.secret);
            req.user = decoded;
            return next();
        } catch (error) {
            return res.status(401).json({ success: false, message: 'Authentication failed. Invalid or expired token.' });
        }
    }
    return res.status(401).json({ success: false, message: 'Authorization required. No Bearer token provided.' });
};

const adminOnly = (req, res, next) => {
    if (req.user && (req.user.role === 'ADMIN' || req.user.role === 'SUPER_ADMIN')) {
        return next();
    }
    return res.status(403).json({ success: false, message: 'Access denied. Administrator privileges required.' });
};

module.exports = { protect, adminOnly };
