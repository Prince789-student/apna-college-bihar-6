const { z } = require('zod');

const updateMonthlyCollectionSchema = z.object({
    monthName: z.string().trim().min(1).max(100).optional().default('September 2026'),
    totalCollection: z.union([z.number(), z.string()]).transform(v => Number(v)).refine(v => !isNaN(v) && v >= 0 && v <= 1000000000, {
        message: 'Total collection must be a positive number'
    })
});

const generateCaptionSchema = z.object({
    noticeId: z.union([z.string(), z.number()]).transform(v => String(v).trim()).optional(),
    title: z.string().trim().min(1, 'Notice title is required').max(500),
    pdfUrl: z.string().trim().url('Invalid PDF URL').optional().or(z.literal('')).nullable(),
    date: z.string().trim().max(100).optional().nullable()
});

const updateCaptionSchema = z.object({
    noticeId: z.union([z.string(), z.number()]).transform(v => String(v).trim()),
    caption: z.string().trim().min(1, 'Caption cannot be empty').max(10000)
});

const dispatchWhatsAppSchema = z.object({
    noticeId: z.union([z.string(), z.number()]).transform(v => String(v).trim()).optional().nullable(),
    caption: z.string().trim().min(1, 'Caption cannot be empty').max(10000),
    pdfUrl: z.string().trim().url('Invalid PDF URL').optional().or(z.literal('')).nullable(),
    title: z.string().trim().max(500).optional().nullable()
});

module.exports = {
    updateMonthlyCollectionSchema,
    generateCaptionSchema,
    updateCaptionSchema,
    dispatchWhatsAppSchema
};
