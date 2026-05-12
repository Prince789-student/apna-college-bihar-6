require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const compression = require('compression');
const rateLimit = require('express-rate-limit');

const app = express();

// 1. ABSOLUTE PRIORITY: APK DOWNLOAD ROUTE
// This must be BEFORE any other middleware to avoid SPA interception
app.get('/api/download-apk', (req, res) => {
    const apkPath = path.join(__dirname, 'downloads', 'ACB.apk');
    if (fs.existsSync(apkPath)) {
        res.setHeader('Content-Type', 'application/vnd.android.package-archive');
        res.setHeader('Content-Disposition', 'attachment; filename="ApnaCollegeBihar_Stable.apk"');
        return res.sendFile(apkPath);
    } else {
        res.status(404).send("APK file not found on server.");
    }
});

// 2. Middleware
app.use(compression());
app.use(express.json());
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many requests, please try again later."
});
app.use('/api/', limiter);

// 3. Static Files
const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));

// 4. API Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/documents', require('./routes/documentRoutes'));
app.use('/api/tasks', require('./routes/taskRoutes'));

// 5. Health Check & Debug
app.get('/_health', (req, res) => res.json({ status: 'ok', serverTime: new Date() }));
app.get('/_debug', (req, res) => {
    const downloadsExist = fs.existsSync(path.join(__dirname, 'downloads'));
    const apkExists = fs.existsSync(path.join(__dirname, 'downloads', 'ACB.apk'));
    res.json({ downloadsExist, apkExists, dirname: __dirname });
});

// 6. SPA Catch-all
app.get('*', (req, res) => {
    const indexPath = path.join(publicPath, 'index.html');
    if (fs.existsSync(indexPath)) {
        res.sendFile(indexPath);
    } else {
        res.status(404).send("Frontend assets missing.");
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
    
    // Render Keep-Alive
    const APP_URL = process.env.APP_URL;
    if (APP_URL) {
        setInterval(() => {
            const https = require('https');
            https.get(`${APP_URL}/_health`, (res) => {}).on('error', (err) => {});
        }, 14 * 60 * 1000);
    }
});
