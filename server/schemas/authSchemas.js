const { z } = require('zod');

// Schema for sending Email OTP
const sendEmailOtpSchema = z.object({
    email: z.string().trim().email('Invalid email address format').max(254, 'Email is too long')
});

// Schema for verifying Email OTP (hash verification)
const verifyEmailOtpSchema = z.object({
    otp: z.union([z.string(), z.number()]).transform(v => String(v).trim()).refine(v => /^\d{6}$/.test(v), {
        message: 'OTP must be exactly a 6-digit number'
    }),
    hash: z.string().trim().min(20, 'Invalid OTP verification hash').max(256)
});

// Schema for user registration
const registerSchema = z.object({
    name: z.string().trim().min(2, 'Name must be at least 2 characters').max(100, 'Name is too long'),
    email: z.string().trim().email('Invalid email address format').max(254),
    password: z.string().min(6, 'Password must be at least 6 characters').max(128, 'Password cannot exceed 128 characters'),
    mobile: z.string().trim().regex(/^(\+91[\-\s]?)?[0-9]{10}$/, 'Invalid mobile phone number format').optional().nullable(),
    role: z.enum(['STUDENT', 'ADMIN', 'SUPER_ADMIN']).optional().default('STUDENT')
});

// Schema for standard email + password login
const loginSchema = z.object({
    email: z.string().trim().email('Invalid email address format').max(254),
    password: z.string().min(1, 'Password is required').max(128)
});

// Schema for social login (Google / GitHub)
const socialLoginSchema = z.object({
    email: z.string().trim().email('Invalid email address format').max(254),
    name: z.string().trim().min(1, 'Name is required').max(100),
    provider: z.enum(['google', 'github']),
    providerId: z.string().trim().min(1, 'Provider ID is required').max(256),
    avatar: z.string().url('Invalid avatar URL').optional().nullable()
});

// Schema for database OTP verification
const verifyOtpSchema = z.object({
    email: z.string().trim().email('Invalid email address format').max(254),
    otp: z.string().trim().regex(/^\d{6}$/, 'OTP must be a 6-digit code')
});

module.exports = {
    sendEmailOtpSchema,
    verifyEmailOtpSchema,
    registerSchema,
    loginSchema,
    socialLoginSchema,
    verifyOtpSchema
};
