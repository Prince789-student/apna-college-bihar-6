const { z } = require('zod');

const createTaskSchema = z.object({
    text: z.string().trim().min(1, 'Task text cannot be empty').max(500, 'Task text is too long')
});

const taskIdParamSchema = z.object({
    id: z.string().trim().regex(/^[0-9a-fA-F]{24}$/, 'Invalid task ID format')
});

module.exports = {
    createTaskSchema,
    taskIdParamSchema
};
