const express = require('express');
const router = express.Router();
const Task = require('../models/Task');
const { protect } = require('../middleware/authMiddleware');
const { authenticatedLimiter } = require('../middleware/rateLimiter');
const validate = require('../middleware/validate');
const { asyncHandler } = require('../middleware/errorHandler');
const { createTaskSchema, taskIdParamSchema } = require('../schemas/taskSchemas');

// Apply auth protection & authenticated rate limiting
router.use(protect);
router.use(authenticatedLimiter);

// @route   GET /api/tasks (Get logged in user's tasks)
router.get('/', asyncHandler(async (req, res) => {
    const tasks = await Task.find({ userId: req.user.id }).sort({ createdAt: -1 });
    res.json({ success: true, tasks });
}));

// @route   POST /api/tasks
router.post('/', validate({ body: createTaskSchema }), asyncHandler(async (req, res) => {
    const task = await Task.create({
        text: req.body.text,
        userId: req.user.id
    });
    res.status(201).json({ success: true, task });
}));

// @route   PUT /api/tasks/:id (Toggle complete)
router.put('/:id', validate({ params: taskIdParamSchema }), asyncHandler(async (req, res) => {
    const task = await Task.findById(req.params.id);
    if (!task) {
        return res.status(404).json({ success: false, message: 'Task not found' });
    }

    // Make sure user owns the task
    if (task.userId.toString() !== req.user.id) {
        return res.status(403).json({ success: false, message: 'Not authorized to modify this task' });
    }

    task.completed = !task.completed;
    await task.save();
    res.json({ success: true, task });
}));

// @route   DELETE /api/tasks/:id
router.delete('/:id', validate({ params: taskIdParamSchema }), asyncHandler(async (req, res) => {
    const task = await Task.findById(req.params.id);
    if (!task) {
        return res.status(404).json({ success: false, message: 'Task not found' });
    }

    if (task.userId.toString() !== req.user.id) {
        return res.status(403).json({ success: false, message: 'Not authorized to delete this task' });
    }

    await task.deleteOne();
    res.json({ success: true, id: req.params.id, message: 'Task deleted successfully' });
}));

module.exports = router;
