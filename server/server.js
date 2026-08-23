require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const compression = require('compression');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');

const app = express();

// Connect Mongoose
if (process.env.MONGO_URI) {
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('✅ MongoDB Connected'))
    .catch(err => console.log('❌ MongoDB Connect Error:', err));
}
// Start daily cron job for class notifications
const startDailyCron = require('./cron/dailyNotifier');
startDailyCron();

// Start daily cron job to fetch hackathons
const { startHackathonCron } = require('./cron/hackathonFetcher');
startHackathonCron();

// Start BEU Notification Scraper
const scrapeBEUNotifications = require('./cron/beuNotificationFetcher');
// Set up cron for BEU Scraper (runs every 6 hours)
const cron = require('node-cron');
cron.schedule('0 */6 * * *', () => {
    console.log('[Cron] Running BEU Scraper...');
    scrapeBEUNotifications();
});
// Initial run
scrapeBEUNotifications();

// Removed route to place it below CORS middleware

// 1. ABSOLUTE PRIORITY: APK DOWNLOAD ROUTE
// This must be BEFORE any other middleware to avoid SPA interception
app.get('/api/download-apk', (req, res) => {
    const apkPath = path.join(__dirname, 'public', 'ApnaCollegeBihar_Stable.apk');
    
    if (fs.existsSync(apkPath)) {
        res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
        res.setHeader('Pragma', 'no-cache');
        res.setHeader('Expires', '0');
        res.setHeader('Content-Type', 'application/vnd.android.package-archive');
        res.setHeader('Content-Disposition', 'attachment; filename="ApnaCollegeBihar_Stable.apk"');
        return res.sendFile(apkPath);
    } else {
        res.status(404).send("APK file not found on server.");
    }
});

// Route for specific APK file names to prevent SPA interception
app.get('/:filename.apk', (req, res, next) => {
    const filename = req.params.filename;
    const apkPath = path.join(__dirname, 'public', `${filename}.apk`);
    if (fs.existsSync(apkPath)) {
        res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
        res.setHeader('Pragma', 'no-cache');
        res.setHeader('Expires', '0');
        res.setHeader('Content-Type', 'application/vnd.android.package-archive');
        res.setHeader('Content-Disposition', `attachment; filename="${filename}.apk"`);
        return res.sendFile(apkPath);
    }
    next();
});

// 2. Middleware
app.use(helmet({
  crossOriginOpenerPolicy: { policy: "same-origin-allow-popups" }
}));
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(compression());
app.use(express.json());
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 1000,
  message: "Too many requests, please try again later."
});
app.use('/api/', limiter);

// 3. Static Files
const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));

// 4. API Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/documents', require('./routes/documentRoutes'));

// Manual Sync Endpoint for BEU Scraper (Moved here to use CORS)
app.post('/api/admin/sync-beu', async (req, res) => {
    try {
        const result = await scrapeBEUNotifications();
        if (result && result.success) {
            res.json({ success: true, message: `Synced successfully. Added ${result.added} notices out of ${result.totalFound} found.` });
        } else {
            res.status(500).json({ success: false, message: result?.error || result?.message || 'Sync failed.' });
        }
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});
app.use('/api/tasks', require('./routes/taskRoutes'));


// 5. Health Check & Debug
app.get('/_health', (req, res) => res.json({ status: 'ok', serverTime: new Date() }));
app.get('/_debug', (req, res) => {
    const downloadsExist = fs.existsSync(path.join(__dirname, 'downloads'));
    const apkExists = fs.existsSync(path.join(__dirname, 'downloads', 'ACB.apk'));
    res.json({ downloadsExist, apkExists, dirname: __dirname });
});

// 5.1 Dynamic 10/10 Sitemap Generator
const admin = require('./firebaseAdmin');
let cachedSitemap = null;
let sitemapCacheTime = 0;

app.get('/sitemap.xml', async (req, res) => {
    res.header('Content-Type', 'application/xml');
    
    // Serve from cache if it is less than 12 hours old
    if (cachedSitemap && (Date.now() - sitemapCacheTime < 12 * 60 * 60 * 1000)) {
        return res.send(cachedSitemap);
    }

    try {
        let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Core Pages -->
  <url><loc>https://apnacollegebihar.online/</loc><changefreq>daily</changefreq><priority>1.0</priority></url>
  <url><loc>https://apnacollegebihar.online/notes</loc><changefreq>daily</changefreq><priority>0.9</priority></url>
  <url><loc>https://apnacollegebihar.online/pyq</loc><changefreq>daily</changefreq><priority>0.9</priority></url>
  <url><loc>https://apnacollegebihar.online/syllabus</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>
  <url><loc>https://apnacollegebihar.online/cgpa</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://apnacollegebihar.online/ugeac-predictor</loc><changefreq>yearly</changefreq><priority>0.9</priority></url>
  <url><loc>https://apnacollegebihar.online/hackathons</loc><changefreq>daily</changefreq><priority>0.9</priority></url>`;

        // Fetch dynamic routes from Firestore
        if (admin && admin.firestore) {
            const db = admin.firestore();
            const docsSnap = await db.collection('documents').get();
            
            const branches = new Set();
            const branchSemesters = new Set();
            
            docsSnap.forEach(doc => {
                const data = doc.data();
                if (data.branch) {
                    const b = data.branch.toLowerCase();
                    branches.add(b);
                    if (data.semester) {
                        branchSemesters.add(`${b}/${data.semester}`);
                    }
                }
            });

            // Add branch pages
            branches.forEach(branch => {
                sitemap += `\n  <url><loc>https://apnacollegebihar.online/notes/${branch}</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>`;
                sitemap += `\n  <url><loc>https://apnacollegebihar.online/pyq/${branch}</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>`;
                sitemap += `\n  <url><loc>https://apnacollegebihar.online/syllabus/${branch}</loc><changefreq>weekly</changefreq><priority>0.7</priority></url>`;
            });

            // Add branch+semester pages
            branchSemesters.forEach(bs => {
                sitemap += `\n  <url><loc>https://apnacollegebihar.online/notes/${bs}</loc><changefreq>weekly</changefreq><priority>0.7</priority></url>`;
                sitemap += `\n  <url><loc>https://apnacollegebihar.online/pyq/${bs}</loc><changefreq>weekly</changefreq><priority>0.7</priority></url>`;
            });
        }

        sitemap += `\n</urlset>`;
        
        cachedSitemap = sitemap;
        sitemapCacheTime = Date.now();
        
        res.send(sitemap);
    } catch (err) {
        console.error("Sitemap generation error:", err);
        // Fallback to basic static sitemap
        res.send(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>https://apnacollegebihar.online/</loc><priority>1.0</priority></url></urlset>`);
    }
});

// 6. SPA Catch-all with Dynamic SEO
let cachedHtml = null;
app.get('*', (req, res) => {
    const indexPath = path.join(publicPath, 'index.html');
    if (!cachedHtml && fs.existsSync(indexPath)) {
        cachedHtml = fs.readFileSync(indexPath, 'utf8');
    }
    
    if (cachedHtml) {
        let html = cachedHtml;
        const urlPath = req.path;

        let title = 'Apna College Bihar | The Largest Engineering Hub';
        let description = "Join Bihar's largest engineering community. Free B.Tech Notes, PYQs, BEU Syllabus, CGPA Calculator, and UGEAC Predictor.";
        let keywords = 'Apna College Bihar, BEU Notes, BEU PYQ, Bihar Engineering, B.Tech syllabus, CGPA Calculator, UGEAC';

        if (urlPath.startsWith('/search/')) {
            let keyword = urlPath.replace('/search/', '').replace(/-/g, ' ').trim();
            if (keyword) {
                keyword = decodeURIComponent(keyword).toUpperCase();
                title = `${keyword} B.Tech Notes & PYQ Download | Apna College Bihar`;
                description = `Download free ${keyword} study material, previous year questions (PYQ), and notes for Bihar Engineering University (BEU) students.`;
                keywords = `${keyword}, ${keyword} BEU, ${keyword} notes, ${keyword} PYQ, Bihar Engineering`;
            }
        } else if (urlPath.startsWith('/notes')) {
            title = 'BEU B.Tech Notes (All Branches & Semesters) | Apna College Bihar';
            description = 'Download free handwritten and digital B.Tech notes for all branches (CSE, Civil, Mechanical, EE) and semesters of Bihar Engineering University.';
            keywords = 'BEU notes, B.Tech notes pdf, Bihar engineering notes, CSE notes, Civil notes';
        } else if (urlPath.startsWith('/pyq')) {
            title = 'BEU Previous Year Questions (PYQ) Bank | Apna College Bihar';
            description = 'Access the largest collection of BEU Previous Year Question papers (PYQs) for all B.Tech semesters and subjects.';
            keywords = 'BEU PYQ, Bihar Engineering Question Bank, B.Tech previous year questions, AKU PYQ';
        } else if (urlPath.startsWith('/syllabus')) {
            title = 'BEU B.Tech Latest Syllabus 2026 | Apna College Bihar';
            description = 'Check and download the latest revised B.Tech syllabus for Bihar Engineering University (BEU/AKU) for all branches and semesters.';
            keywords = 'BEU syllabus, B.Tech syllabus Bihar, CSE syllabus BEU, Civil syllabus BEU';
        } else if (urlPath.startsWith('/cgpa')) {
            title = 'BEU CGPA to Percentage Calculator | Apna College Bihar';
            description = 'Calculate your BEU B.Tech CGPA and convert it to percentage instantly with our accurate BEU CGPA Calculator.';
            keywords = 'BEU CGPA calculator, CGPA to percentage BEU, Bihar Engineering CGPA';
        } else if (urlPath.startsWith('/ugeac-predictor')) {
            title = 'UGEAC College Predictor 2026 | Apna College Bihar';
            description = 'Predict your Bihar Engineering College based on your JEE Main Rank/Percentile using the UGEAC Counsellor and Predictor tool.';
            keywords = 'UGEAC Predictor, Bihar Engineering College Predictor, BCECE UGEAC, JEE Main Bihar';
        } else if (urlPath.startsWith('/hackathons')) {
            title = 'Live Hackathons & Tech Events | Apna College Bihar';
            description = 'Discover the latest live hackathons, coding competitions, and tech events happening across India and globally for engineering students.';
            keywords = 'Hackathons, coding competitions, tech events, engineering hackathon';
        }

        // Inject into HTML
        html = html.replace(/<title>.*?<\/title>/i, `<title>${title}</title>`);
        html = html.replace(/<meta name="description" content=".*?"/i, `<meta name="description" content="${description}"`);
        
        if (!html.includes('<meta name="description"')) {
            html = html.replace('</title>', `</title>\n   <meta name="description" content="${description}" />\n   <meta name="keywords" content="${keywords}" />`);
        } else {
            html = html.replace('</title>', `</title>\n   <meta name="keywords" content="${keywords}" />`);
        }

        res.send(html);
    } else {
        res.status(404).send("Frontend assets missing.");
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
    
    // Initialize Scrapers (Others)
    try {
        // any other scrapers if needed
    } catch (err) {
        console.error('Failed to initialize scrapers:', err.message);
    }
    
    // Render Keep-Alive
    const APP_URL = process.env.APP_URL;
    if (APP_URL) {
        setInterval(() => {
            const https = require('https');
            https.get(`${APP_URL}/_health`, (res) => {}).on('error', (err) => {});
        }, 14 * 60 * 1000);
    }
});
