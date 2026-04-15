require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const compression = require('compression');
const rateLimit = require('express-rate-limit');

const app = express();

// 1. Max Output Performance: Gzip Compression
app.use(compression());

// 2. Load Control: Prevent server crash from too many requests
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again after 15 minutes"
});
app.use('/api/', limiter);

app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
    res.setHeader('Content-Security-Policy', "default-src * 'unsafe-inline' 'unsafe-eval' data: blob:; script-src * 'unsafe-inline' 'unsafe-eval'; style-src * 'unsafe-inline'; font-src * data:;");
    next();
});

// 1. Database Connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/edu-platform', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('✅ DB Connected')).catch(err => console.log('❌ DB Error: ', err.message));

// 2. Static File Serving (Crucial for Render)
// This looks for the "public" folder right next to server.js
const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));

// 3. API Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/documents', require('./routes/documentRoutes'));
app.use('/api/tasks', require('./routes/taskRoutes'));

// 4. Health Check
app.get('/_health', (req, res) => res.json({ status: 'ok', timestamp: new Date() }));

// 5. Catch-all for SPA (Always returns index.html)
app.get('*', (req, res) => {
    const indexPath = path.join(publicPath, 'index.html');
    if (fs.existsSync(indexPath)) {
        res.sendFile(indexPath);
    } else {
        res.status(404).send(`Frontend not found in server/public. Looking at: ${indexPath}`);
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server on port ${PORT}`));
