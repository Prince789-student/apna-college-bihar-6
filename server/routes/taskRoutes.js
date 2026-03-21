const express = require('express');
const router = express.Router();
const Task = require('../models/Task');
const { protect } = require('../middleware/authMiddleware');

// @route   GET /api/tasks (Get logged in user's tasks)
router.get('/', protect, async (req, res) => {
    try {
        const tasks = await Task.find({ userId: req.user.id }).sort({ createdAt: -1 });
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// @route   POST /api/tasks
router.post('/', protect, async (req, res) => {
    try {
        const task = await Task.create({
            text: req.body.text,
            userId: req.user.id
        });
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// @route   PUT /api/tasks/:id (Toggle complete)
router.put('/:id', protect, async (req, res) => {
    try {
        let task = await Task.findById(req.params.id);
        if(!task) return res.status(404).json({ message: 'Task not found' });
        
        // Make sure user owns the task
        if (task.userId.toString() !== req.user.id) {
            return res.status(401).json({ message: 'Not authorized' });
        }

        task.completed = !task.completed;
        await task.save();
        res.json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// @route   DELETE /api/tasks/:id
router.delete('/:id', protect, async (req, res) => {
    try {
        let task = await Task.findById(req.params.id);
        if(!task) return res.status(404).json({ message: 'Task not found' });
        
        if (task.userId.toString() !== req.user.id) {
            return res.status(401).json({ message: 'Not authorized' });
        }
        
        await task.deleteOne();
        res.json({ id: req.params.id });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
