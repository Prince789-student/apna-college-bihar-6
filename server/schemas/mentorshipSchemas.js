const { z } = require('zod');

const mentorshipSyncSchema = z.object({
    students: z.array(z.record(z.any())).min(0).max(5000),
    mentors: z.array(z.record(z.any())).optional().default([]),
    removedStudents: z.array(z.any()).optional().default([])
});

const sendChatMessageSchema = z.object({
    threadId: z.string().trim().min(1, 'Thread ID is required').max(150),
    text: z.string().trim().min(1, 'Message text cannot be empty').max(4000, 'Message is too long'),
    studentRoll: z.string().trim().max(100).optional().nullable(),
    studentName: z.string().trim().max(100).optional().nullable(),
    mentorId: z.string().trim().max(100).optional().nullable(),
    mentorName: z.string().trim().max(100).optional().nullable(),
    senderRole: z.enum(['student', 'mentor']).optional().default('student'),
    senderName: z.string().trim().max(100).optional().nullable()
});

const getChatMessagesQuerySchema = z.object({
    threadId: z.string().trim().min(1, 'Thread ID is required').max(150)
});

const markChatReadSchema = z.object({
    threadId: z.string().trim().min(1, 'Thread ID is required').max(150),
    role: z.enum(['student', 'mentor']).optional().default('student')
});

module.exports = {
    mentorshipSyncSchema,
    sendChatMessageSchema,
    getChatMessagesQuerySchema,
    markChatReadSchema
};
