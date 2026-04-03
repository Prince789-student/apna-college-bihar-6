require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(express.json());
app.use(cors());

// Explicit Homepage route (Highest Priority)
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

// Make uploads folder if it doesnt exist
const dir = './uploads';
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

// Serve uploaded files statically
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Serve static frontend files (from server local public with diagnostic check)
const publicPath = path.resolve(__dirname, 'public');
console.log(`[SYSTEM] Current __dirname: ${__dirname}`);
console.log(`[SYSTEM] Attempting to serve static from: ${publicPath}`);

if (fs.existsSync(publicPath)) {
    console.log(`[SUCCESS] Public folder found! Files: ${fs.readdirSync(publicPath)}`);
    app.use(express.static(publicPath));
} else {
    console.error(`[ERROR] Public folder NOT found at ${publicPath}`);
}

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/edu-platform', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB Connected Successfully'))
.catch(err => console.log('❌ MongoDB Connection Error: ', err.message));

// API Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/documents', require('./routes/documentRoutes'));
app.use('/api/tasks', require('./routes/taskRoutes'));

// Basic Info Route
app.get('/api', (req, res) => {
    res.send('EduPlatform API is running with Mongoose...');
});

// Catch-all route to serve React app for non-API requests (Must be last)
app.get('/_health', (req, res) => res.json({ status: 'ok', timestamp: new Date() }));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

// Setup Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
