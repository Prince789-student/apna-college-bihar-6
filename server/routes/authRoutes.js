const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const User = require('../models/User');
const securityConfig = require('../config/securityConfig');
const validate = require('../middleware/validate');
const { asyncHandler } = require('../middleware/errorHandler');
const { authIpLimiter, accountExponentialBackoff } = require('../middleware/rateLimiter');
const {
    sendEmailOtpSchema,
    verifyEmailOtpSchema,
    registerSchema,
    loginSchema,
    socialLoginSchema,
    verifyOtpSchema
} = require('../schemas/authSchemas');

// Helper: Send OTP Email
const sendOTPEmail = async (email, otp) => {
    try {
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            console.warn('[Email Service] EMAIL_USER or EMAIL_PASS not configured.');
            return false;
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            },
            connectionTimeout: 8000,
            greetingTimeout: 8000,
            socketTimeout: 8000
        });

        const mailOptions = {
            from: `"Apna College Bihar Platform" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: `Action Required: Your Verification Code is ${otp}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #2563eb;">Verification OTP</h2>
                    <p>Your 6-digit verification code is:</p>
                    <h1 style="color: #ea580c; font-size: 40px; letter-spacing: 5px;">${otp}</h1>
                    <p>This code is valid for 10 minutes.</p>
                </div>
            `
        };

        await transporter.sendMail(mailOptions);
        console.log(`[Email Service] Verification OTP sent successfully to ${email.replace(/(?<=.{2}).(?=[^@]*?@)/g, '*')}`);
        return true;
    } catch (error) {
        console.error(`[Email Service Error]: ${error.message}`);
        return false;
    }
};

const generateToken = (id, role, name, email) => {
    return jwt.sign(
        { id, role, name, email },
        securityConfig.jwt.secret,
        { expiresIn: securityConfig.jwt.expiresIn }
    );
};

// Apply IP rate limit & lockout check across all auth routes
router.use(authIpLimiter);
router.use(accountExponentialBackoff.checkLockout);

// @route   POST /api/auth/send-email-otp
// Generates OTP and sends it hash back to frontend for verification
router.post('/send-email-otp', validate({ body: sendEmailOtpSchema }), asyncHandler(async (req, res) => {
    const { email } = req.body;
    const normalizedEmail = email.toLowerCase().trim();

    const otp = crypto.randomInt(100000, 999999).toString();

    // Send real email if configured
    await sendOTPEmail(normalizedEmail, otp);

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(otp, salt);

    res.status(200).json({
        success: true,
        message: 'Verification OTP dispatched to email.',
        hash,
        email: normalizedEmail
    });
}));

// @route   POST /api/auth/verify-email-otp
router.post('/verify-email-otp', validate({ body: verifyEmailOtpSchema }), asyncHandler(async (req, res) => {
    const { otp, hash, email } = req.body;
    const isValid = await bcrypt.compare(otp.toString(), hash);

    if (isValid) {
        if (email) accountExponentialBackoff.recordSuccess(email);
        return res.status(200).json({ success: true, message: 'OTP verified successfully.' });
    } else {
        if (email) accountExponentialBackoff.recordFailure(email);
        return res.status(400).json({ success: false, message: 'Invalid or expired OTP.' });
    }
}));

// @route   POST /api/auth/register
router.post('/register', validate({ body: registerSchema }), asyncHandler(async (req, res) => {
    const { name, email, password, mobile, role } = req.body;
    const normalizedEmail = email.toLowerCase().trim();

    const userExists = await User.findOne({ email: normalizedEmail });
    if (userExists) {
        return res.status(400).json({ success: false, message: 'An account with this email already exists.' });
    }

    const otp = crypto.randomInt(100000, 999999).toString();
    const otpExpires = new Date(Date.now() + 10 * 60 * 1000); // 10 mins

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    await User.create({
        name: name.trim(),
        email: normalizedEmail,
        mobile: mobile ? mobile.trim() : undefined,
        password: hashedPassword,
        role: role || 'STUDENT',
        otp,
        otpExpires,
        isVerified: false
    });

    await sendOTPEmail(normalizedEmail, otp);

    res.status(201).json({
        success: true,
        message: 'Account created. Verification code sent.',
        email: normalizedEmail,
        status: 'OTP_SENT'
    });
}));

// @route   POST /api/auth/social-login
router.post('/social-login', validate({ body: socialLoginSchema }), asyncHandler(async (req, res) => {
    const { email, name, provider, providerId } = req.body;
    const normalizedEmail = email.toLowerCase().trim();

    let user = await User.findOne({ email: normalizedEmail });

    if (!user) {
        user = await User.create({
            name: name.trim(),
            email: normalizedEmail,
            role: 'STUDENT',
            isVerified: true,
            googleId: provider === 'google' ? providerId : undefined,
            githubId: provider === 'github' ? providerId : undefined
        });
    }

    accountExponentialBackoff.recordSuccess(normalizedEmail);

    res.json({
        success: true,
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: generateToken(user._id, user.role, user.name, user.email)
    });
}));

// @route   POST /api/auth/verify-otp
router.post('/verify-otp', validate({ body: verifyOtpSchema }), asyncHandler(async (req, res) => {
    const { email, otp } = req.body;
    const normalizedEmail = email.toLowerCase().trim();

    const user = await User.findOne({ email: normalizedEmail });
    if (!user) {
        accountExponentialBackoff.recordFailure(normalizedEmail);
        return res.status(404).json({ success: false, message: 'Account not found.' });
    }

    if (user.otp === otp && user.otpExpires > Date.now()) {
        user.isVerified = true;
        user.otp = undefined;
        user.otpExpires = undefined;
        await user.save();

        accountExponentialBackoff.recordSuccess(normalizedEmail);

        res.json({
            success: true,
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            token: generateToken(user._id, user.role, user.name, user.email),
            verified: true
        });
    } else {
        accountExponentialBackoff.recordFailure(normalizedEmail);
        res.status(400).json({ success: false, message: 'Invalid or expired verification code.' });
    }
}));

// @route   POST /api/auth/login
router.post('/login', validate({ body: loginSchema }), asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const normalizedEmail = email.toLowerCase().trim();

    const user = await User.findOne({ email: normalizedEmail });

    if (user && (await bcrypt.compare(password, user.password))) {
        accountExponentialBackoff.recordSuccess(normalizedEmail);

        res.json({
            success: true,
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            token: generateToken(user._id, user.role, user.name, user.email)
        });
    } else {
        // Record failed attempt for exponential backoff lockout
        accountExponentialBackoff.recordFailure(normalizedEmail);
        res.status(401).json({ success: false, message: 'Invalid email or password.' });
    }
}));

// @route   POST /api/auth/custom-token
// Generates a Firebase Custom Token for Desktop App to authenticate with Firebase client SDK
router.post('/custom-token', asyncHandler(async (req, res) => {
    const { uid, email } = req.body;
    if (!uid) {
        return res.status(400).json({ success: false, message: 'User UID is required' });
    }
    const admin = require('../firebaseAdmin');
    if (!admin || !admin.apps || !admin.apps.length) {
        return res.status(503).json({ success: false, message: 'Firebase Admin unavailable' });
    }

    const cleanEmail = (email || '').toLowerCase().trim();
    const isFounder = cleanEmail === 'prince8694@gmail.com' || cleanEmail === 'prince86944@gmail.com';
    const role = isFounder ? 'SUPER_ADMIN' : 'STUDENT';

    try {
        const customToken = await admin.auth().createCustomToken(uid, {
            email: cleanEmail,
            role
        });
        return res.json({ success: true, customToken });
    } catch (err) {
        console.error('[Auth] Failed to generate custom token:', err.message);
        return res.status(500).json({ success: false, message: 'Token creation failed' });
    }
}));

module.exports = router;
