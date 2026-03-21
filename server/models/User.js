const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    mobile: {
        type: String,
        unique: true,
        sparse: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['STUDENT', 'ADMIN'],
        default: 'STUDENT'
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    googleId: String,
    githubId: String,
    otp: {
        type: String
    },
    otpExpires: {
        type: Date
    },
    studyStats: {
        totalStudyMinutes: { type: Number, default: 0 },
        lastActive: { type: Date }
    }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
