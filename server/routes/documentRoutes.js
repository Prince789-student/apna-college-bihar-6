const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');
const Note = require('../models/Note');
const { protect, adminOnly } = require('../middleware/authMiddleware');
const { publicLimiter, authenticatedLimiter } = require('../middleware/rateLimiter');
const validate = require('../middleware/validate');
const { asyncHandler } = require('../middleware/errorHandler');
const { uploadDocumentSchema, deleteDocumentQuerySchema } = require('../schemas/documentSchemas');

// Configure Multer for local storage with filename sanitization
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadDir = path.join(__dirname, '../uploads');
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        // Sanitize original filename: remove dangerous characters and path traversal
        const sanitized = file.originalname.replace(/[^a-zA-Z0-9.\-_]/g, '_');
        cb(null, `${Date.now()}-${sanitized}`);
    }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 25 * 1024 * 1024 }, // 25MB limit
    fileFilter: (req, file, cb) => {
        const allowedExtensions = ['.pdf', '.doc', '.docx', '.ppt', '.pptx', '.txt', '.png', '.jpg', '.jpeg'];
        const ext = path.extname(file.originalname).toLowerCase();
        if (allowedExtensions.includes(ext)) {
            cb(null, true);
        } else {
            cb(new Error('Unsupported file extension. Only documents and images are allowed.'));
        }
    }
});

const FILE_DB = path.join(__dirname, '../docs_fallback.json');

// Helper to save to local file if Mongo is down
const saveToLocal = (doc) => {
    let docs = [];
    if (fs.existsSync(FILE_DB)) {
        try {
            docs = JSON.parse(fs.readFileSync(FILE_DB, 'utf-8'));
        } catch (e) {
            docs = [];
        }
    }
    if (!doc.id) doc.id = Date.now().toString();
    docs.unshift(doc);
    fs.writeFileSync(FILE_DB, JSON.stringify(docs, null, 2));
};

// @route   POST /api/documents/upload
router.post('/upload', protect, adminOnly, authenticatedLimiter, upload.single('file'), validate({ body: uploadDocumentSchema }), asyncHandler(async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ success: false, message: 'File is required for upload' });
    }

    const { title, subject, description, category } = req.body;
    const docData = {
        title,
        subject,
        description: description || '',
        category: category || '',
        fileUrl: '/uploads/' + req.file.filename,
        createdAt: new Date()
    };

    if (mongoose.connection.readyState !== 1) {
        saveToLocal(docData);
        return res.status(201).json({ success: true, data: docData });
    }

    try {
        const newNote = await Note.create(docData);
        return res.status(201).json({ success: true, data: newNote });
    } catch (error) {
        saveToLocal(docData);
        return res.status(201).json({ success: true, data: docData });
    }
}));

// @route   GET /api/documents
router.get('/', publicLimiter, asyncHandler(async (req, res) => {
    if (mongoose.connection.readyState !== 1) {
        if (fs.existsSync(FILE_DB)) {
            const docs = JSON.parse(fs.readFileSync(FILE_DB, 'utf-8'));
            return res.json(docs);
        }
        return res.json([]);
    }

    const documents = await Note.find().sort({ createdAt: -1 });
    res.json(documents);
}));

// @route   DELETE /api/documents
router.delete('/', protect, adminOnly, authenticatedLimiter, validate({ query: deleteDocumentQuerySchema }), asyncHandler(async (req, res) => {
    const { id } = req.query;

    if (mongoose.connection.readyState === 1 && mongoose.Types.ObjectId.isValid(id)) {
        const doc = await Note.findById(id);
        if (doc) {
            const filePath = path.join(__dirname, '..', doc.fileUrl);
            if (fs.existsSync(filePath)) {
                try { fs.unlinkSync(filePath); } catch (e) {}
            }
            await Note.findByIdAndDelete(id);
            return res.json({ success: true, message: 'Document deleted successfully' });
        }
    }

    if (fs.existsSync(FILE_DB)) {
        let docs = JSON.parse(fs.readFileSync(FILE_DB, 'utf-8'));
        const doc = docs.find(d => d.id === id || d.fileUrl === id || d._id === id);
        if (doc) {
            const filePath = path.join(__dirname, '..', doc.fileUrl);
            if (fs.existsSync(filePath)) {
                try { fs.unlinkSync(filePath); } catch (e) {}
            }
        }
        docs = docs.filter(d => d.id !== id && d.fileUrl !== id && d._id !== id);
        fs.writeFileSync(FILE_DB, JSON.stringify(docs, null, 2));
    }

    res.json({ success: true, message: 'Document deleted successfully' });
}));

module.exports = router;
