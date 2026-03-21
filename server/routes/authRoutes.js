const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const nodemailer = require('nodemailer');

// Helper: Send OTP Email
const sendOTPEmail = async (email, otp) => {
    return new Promise(async (resolve, reject) => {
        try {
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS
                },
                // Set explicitly short timeouts to catch server blocking quickly
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
            console.log(`✅ REAL EMAIL SENT TO ${email}`);
            resolve(true);
        } catch (error) {
            console.log(`❌ EMAIL SEND FAILED (Check .env or SMTP block): ${error.message}`);
            resolve(false); // resolve false instead of rejecting to handle gracefully
        }
    });
};

// @route   POST /api/auth/send-email-otp
// Generates OTP and sends it hash back to frontend for hybrid Firebase verification
router.post('/send-email-otp', async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) return res.status(400).json({ message: 'Email required' });

        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        
        // Log it to console so developer can see it during local testing without real email
        console.log(`✨ OTP GENERATED FOR ${email}: ${otp}`);

        // We try to send real email, if it fails gracefully, the console log string is still there.
        await sendOTPEmail(email, otp);

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(otp, salt);

        // SENDING OTP IN RESPONSE JUST FOR PRINCE BHAI'S TESTING
        res.status(200).json({ 
            message: 'OTP Generated successfully!', 
            hash, 
            email
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// @route   POST /api/auth/verify-email-otp
router.post('/verify-email-otp', async (req, res) => {
    try {
        const { otp, hash } = req.body;
        const isValid = await bcrypt.compare(otp.toString(), hash);
        
        if (isValid) {
            res.status(200).json({ success: true, message: 'OTP Verified' });
        } else {
            res.status(400).json({ success: false, message: 'Invalid OTP' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

const generateToken = (id, role, name, email) => {
    return jwt.sign({ id, role, name, email }, process.env.JWT_SECRET || 'fallback-secret', { expiresIn: '30d' });
};

// @route   POST /api/auth/register
router.post('/register', async (req, res) => {
    try {
        const { name, email, password, mobile, role } = req.body;
        const userExists = await User.findOne({ email });
        if (userExists) return res.status(400).json({ message: 'User already exists' });

        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        const otpExpires = new Date(Date.now() + 10 * 60 * 1000); // 10 mins

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await User.create({ 
            name, email, mobile, password: hashedPassword, 
            role: role || 'STUDENT',
            otp, otpExpires, isVerified: false
        });

        // Try sending real email (will fail gracefully if no keys)
        await sendOTPEmail(email, otp);
        
        // Always log to console as fallback for developer
        console.log(`✨ SECURITY OTP FOR ${email}: ${otp}`);

        res.status(201).json({ message: 'OTP Sent to Email/Mobile', email, status: 'OTP_SENT' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// @route   POST /api/auth/social-login
router.post('/social-login', async (req, res) => {
    const { email, name, provider, providerId, avatar } = req.body;
    try {
        let user = await User.findOne({ email });
        
        if (!user) {
            // Create user automatically from social account
            user = await User.create({
                name, email, 
                role: 'STUDENT', 
                isVerified: true,
                googleId: provider === 'google' ? providerId : undefined,
                githubId: provider === 'github' ? providerId : undefined
            });
        }
        
        res.json({
            _id: user._id, name: user.name, email: user.email, role: user.role,
            token: generateToken(user._id, user.role, user.name, user.email)
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// @route   POST /api/auth/verify-otp
router.post('/verify-otp', async (req, res) => {
    const { email, otp } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: 'User not found' });
        
        if (user.otp === otp && user.otpExpires > Date.now()) {
            user.isVerified = true;
            user.otp = undefined;
            user.otpExpires = undefined;
            await user.save();
            
            res.json({
                _id: user._id, name: user.name, email: user.email, role: user.role,
                token: generateToken(user._id, user.role, user.name, user.email),
                verified: true
            });
        } else {
            res.status(400).json({ message: 'Invalid or Expired OTP' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// @route   POST /api/auth/login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (user && (await bcrypt.compare(password, user.password))) {
            res.json({
                _id: user._id, name: user.name, email: user.email, role: user.role,
                token: generateToken(user._id, user.role, user.name, user.email)
            });
        } else {
            res.status(401).json({ message: 'Invalid email or password' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
