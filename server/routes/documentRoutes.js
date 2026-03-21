const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Note = require('../models/Note');

// Configure Multer for local storage (Temporary until Firebase/AWS is ready)
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

const fs = require('fs');
const FILE_DB = path.join(__dirname, '../docs_fallback.json');

// Helper to save to local file if Mongo is down
const saveToLocal = (doc) => {
    let docs = [];
    if (fs.existsSync(FILE_DB)) {
        docs = JSON.parse(fs.readFileSync(FILE_DB, 'utf-8'));
    }
    // Add unique ID if not present
    if (!doc.id) doc.id = Date.now().toString();
    docs.unshift(doc);
    fs.writeFileSync(FILE_DB, JSON.stringify(docs, null, 2));
};

const mongoose = require('mongoose');

// @route   POST /api/documents/upload
router.post('/upload', upload.single('file'), async (req, res) => {
    const { title, subject, description, category } = req.body;
    if (!req.file) return res.status(400).json({ message: 'No file uploaded' });

    const docData = {
        title, subject, description, category,
        fileUrl: '/uploads/' + req.file.filename,
        createdAt: new Date()
    };

    // Fail Fast if DB is not connected
    if (mongoose.connection.readyState !== 1) {
        console.log("⚡ Fast Fallback: DB disconnected. Saving to Local JSON");
        saveToLocal(docData);
        return res.status(201).json(docData);
    }

    try {
        const newNote = await Note.create(docData);
        res.status(201).json(newNote);
    } catch (error) {
        saveToLocal(docData);
        res.status(201).json(docData);
    }
});

// @route   GET /api/documents
router.get('/', async (req, res) => {
    // Fail Fast if DB is not connected
    if (mongoose.connection.readyState !== 1) {
        if (fs.existsSync(FILE_DB)) {
            const docs = JSON.parse(fs.readFileSync(FILE_DB, 'utf-8'));
            return res.json(docs);
        }
        return res.json([]);
    }

    try {
        const documents = await Note.find().sort({ createdAt: -1 });
        res.json(documents);
    } catch (error) {
        if (fs.existsSync(FILE_DB)) {
            const docs = JSON.parse(fs.readFileSync(FILE_DB, 'utf-8'));
            return res.json(docs);
        }
        res.json([]);
    }
});

// @route   DELETE /api/documents
router.delete('/', async (req, res) => {
    const { id } = req.query; // Use query param for safety with slashes
    if (!id) return res.status(400).json({ message: 'ID required' });
    
    try {
        if (mongoose.connection.readyState === 1) {
            // Try as Mongo ID
            if (mongoose.Types.ObjectId.isValid(id)) {
                const doc = await Note.findById(id);
                if (doc) {
                    const filePath = path.join(__dirname, '..', doc.fileUrl);
                    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
                    await Note.findByIdAndDelete(id);
                    return res.json({ message: 'Deleted from DB' });
                }
            }
        }

        if (fs.existsSync(FILE_DB)) {
            let docs = JSON.parse(fs.readFileSync(FILE_DB, 'utf-8'));
            const doc = docs.find(d => d.id === id || d.fileUrl === id || d._id === id);
            if (doc) {
                const filePath = path.join(__dirname, '..', doc.fileUrl);
                if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
            }
            docs = docs.filter(d => d.id !== id && d.fileUrl !== id && d._id !== id);
            fs.writeFileSync(FILE_DB, JSON.stringify(docs, null, 2));
        }
        res.json({ message: 'Deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
