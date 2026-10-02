const { z } = require('zod');

const uploadDocumentSchema = z.object({
    title: z.string().trim().min(1, 'Title is required').max(200),
    subject: z.string().trim().min(1, 'Subject is required').max(100),
    description: z.string().trim().max(2000).optional().default(''),
    category: z.string().trim().max(100).optional().default('')
});

const deleteDocumentQuerySchema = z.object({
    id: z.string().trim().min(1, 'Document ID is required').max(256)
});

module.exports = {
    uploadDocumentSchema,
    deleteDocumentQuerySchema
};
