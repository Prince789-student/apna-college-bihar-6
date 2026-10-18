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

// Prevent process crash from unhandled async errors or puppeteer disconnects
process.on('uncaughtException', (err) => {
    console.error('[Global Uncaught Exception]:', err?.message || err);
});
process.on('unhandledRejection', (reason, promise) => {
    console.error('[Global Unhandled Rejection]:', reason?.message || reason);
});

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

// Start BEU Notification Scraper & AI Auto-Broadcaster (Gemini 2.5 Flash + WhatsApp)
const { initBeuBroadcaster, syncBeuAndBroadcast } = require('./cron/beuAutoBroadcaster');
initBeuBroadcaster();

// Start WhatsApp Bot Session (only starts headless browser if explicitly enabled or via Admin UI)
const whatsappBotService = require('./services/whatsappBotService');
if (process.env.ENABLE_WHATSAPP_BOT === 'true') {
    whatsappBotService.start().catch(err => console.warn('[WhatsApp Bot Auto-Start]:', err.message));
}

// Removed route to place it below CORS middleware

// 1. ABSOLUTE PRIORITY: APK DOWNLOAD ROUTE
// This must be BEFORE any other middleware to avoid SPA interception
app.get('/api/download-apk', (req, res) => {
    const v59Path = path.join(__dirname, 'public', 'apna-college-bihar-v59.apk');
    const v58Path = path.join(__dirname, 'public', 'apna-college-bihar-v58.apk');
    const stablePath = path.join(__dirname, 'public', 'ApnaCollegeBihar_Stable.apk');
    const apkPath = fs.existsSync(v59Path) ? v59Path : (fs.existsSync(v58Path) ? v58Path : (fs.existsSync(stablePath) ? stablePath : null));
    
    if (apkPath) {
        res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
        res.setHeader('Pragma', 'no-cache');
        res.setHeader('Expires', '0');
        res.setHeader('Content-Type', 'application/vnd.android.package-archive');
        res.setHeader('Content-Disposition', 'attachment; filename="apna-college-bihar-v59.apk"');
        return res.sendFile(apkPath);
    } else {
        res.status(404).send("APK file not found on server.");
    }
});

// WINDOWS DESKTOP APP DOWNLOAD ROUTE
app.get('/api/download-windows', (req, res) => {
    const zipPath = path.join(__dirname, 'public', 'Apna-College-Bihar-Windows.zip');
    
    if (fs.existsSync(zipPath)) {
        res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
        res.setHeader('Pragma', 'no-cache');
        res.setHeader('Expires', '0');
        res.setHeader('Content-Type', 'application/zip');
        res.setHeader('Content-Disposition', 'attachment; filename="Apna-College-Bihar-Windows.zip"');
        return res.sendFile(zipPath);
    } else {
        res.status(404).send("Windows application package not found on server.");
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

// GOOGLE ADSENSE & SEARCH ENGINE CRAWLER ROUTES (HIGHEST PRIORITY)
app.get('/ads.txt', (req, res) => {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=86400');
    res.send('google.com, pub-4005389118070865, DIRECT, f08c47fec0942fa0\n');
});

app.get('/robots.txt', (req, res) => {
    const robotsPath = path.join(__dirname, 'public', 'robots.txt');
    if (fs.existsSync(robotsPath)) {
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        return res.sendFile(robotsPath);
    }
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.send("User-agent: *\nAllow: /\nDisallow: /p/\nDisallow: /dashboard/\nDisallow: /admin\nDisallow: /api/\nDisallow: /search/\nDisallow: /*?*\n\nUser-agent: Googlebot\nAllow: /\nDisallow: /p/\nDisallow: /dashboard/\nDisallow: /api/\nDisallow: /search/\nDisallow: /*?*\n\nUser-agent: Mediapartners-Google\nAllow: /\n\nSitemap: https://www.apnacollegebihar.online/sitemap.xml\n");
});

const { publicLimiter, authenticatedLimiter } = require('./middleware/rateLimiter');
const { protect, adminOnly } = require('./middleware/authMiddleware');
const { errorHandler, asyncHandler } = require('./middleware/errorHandler');

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

// Apply moderate public rate limiting by default on API endpoints
app.use('/api/', publicLimiter);

// 3. Static Files
const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));

// SHORTLINK REDIRECT ROUTE (Direct & Fast 302 Redirect to YouTube / target)
app.get('/p/:shortId', async (req, res, next) => {
    try {
        const { shortId } = req.params;
        if (!shortId || !/^[a-zA-Z0-9_\-]{1,64}$/.test(shortId)) {
            return next();
        }
        const adminSdk = require('./firebaseAdmin');
        if (adminSdk && adminSdk.apps && adminSdk.apps.length) {
            const db = adminSdk.firestore();
            const docSnap = await db.collection('shortlinks').doc(shortId).get();
            if (docSnap.exists && docSnap.data().longUrl) {
                return res.redirect(302, docSnap.data().longUrl);
            }
        }
    } catch (err) {
        console.error('Error resolving shortlink redirect:', err.message);
    }
    next();
});

// SHORTLINK API LOOKUP (For Client SPA / fallback)
app.get('/api/shortlinks/:shortId', asyncHandler(async (req, res) => {
    const { shortId } = req.params;
    if (!shortId || !/^[a-zA-Z0-9_\-]{1,64}$/.test(shortId)) {
        return res.status(400).json({ success: false, message: 'Invalid shortlink identifier format' });
    }
    const adminSdk = require('./firebaseAdmin');
    if (!adminSdk || !adminSdk.apps || !adminSdk.apps.length) {
        return res.status(503).json({ success: false, message: 'Service temporarily unavailable' });
    }
    const db = adminSdk.firestore();
    const docSnap = await db.collection('shortlinks').doc(shortId).get();
    if (docSnap.exists && docSnap.data().longUrl) {
        return res.json({ success: true, longUrl: docSnap.data().longUrl });
    }
    return res.status(404).json({ success: false, message: 'Shortlink not found' });
}));

// 4. API Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/documents', require('./routes/documentRoutes'));
app.use('/api/mentorship', require('./routes/mentorshipRoutes'));
app.use('/api/beu', require('./routes/beuRoutes'));

// Manual Sync Endpoint for BEU Scraper (with AI WhatsApp pipeline)
app.post('/api/admin/sync-beu', protect, adminOnly, authenticatedLimiter, asyncHandler(async (req, res) => {
    const result = await syncBeuAndBroadcast();
    if (result && result.success) {
        res.json({ success: true, message: `Synced successfully! Found ${result.newCount} new notices, processed ${result.aiCount} AI captions.` });
    } else {
        res.status(500).json({ success: false, message: 'Sync failed to complete' });
    }
}));
app.use('/api/tasks', require('./routes/taskRoutes'));

// 5. Health Check & Debug (Without Information Leakage)
app.get('/_health', (req, res) => res.json({ status: 'ok', serverTime: new Date() }));
app.get('/_debug', (req, res) => {
    const downloadsExist = fs.existsSync(path.join(__dirname, 'downloads'));
    const apkExists = fs.existsSync(path.join(__dirname, 'downloads', 'ACB.apk'));
    // Never leak __dirname or internal paths
    res.json({ downloadsExist, apkExists, status: 'operational' });
});


// 5.1 Dynamic 10/10 Sitemap Generator
const admin = require('./firebaseAdmin');
let cachedSitemap = null;
let sitemapCacheTime = 0;

app.get('/sitemap.xml', async (req, res) => {
    res.header('Content-Type', 'application/xml');
    const staticSitemapPath = path.join(__dirname, 'public', 'sitemap.xml');
    if (fs.existsSync(staticSitemapPath)) {
        return res.sendFile(staticSitemapPath);
    }
    
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
  <url><loc>https://apnacollegebihar.online/blog</loc><changefreq>daily</changefreq><priority>0.95</priority></url>
  <url><loc>https://apnacollegebihar.online/about</loc><changefreq>monthly</changefreq><priority>0.85</priority></url>
  <url><loc>https://apnacollegebihar.online/contact</loc><changefreq>monthly</changefreq><priority>0.85</priority></url>
  <url><loc>https://apnacollegebihar.online/privacy-policy</loc><changefreq>monthly</changefreq><priority>0.85</priority></url>
  <url><loc>https://apnacollegebihar.online/terms</loc><changefreq>monthly</changefreq><priority>0.75</priority></url>
  <url><loc>https://apnacollegebihar.online/disclaimer</loc><changefreq>monthly</changefreq><priority>0.75</priority></url>`;

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

// 5.3 PUBLIC CACHED HOME DATA (Eliminates 95% of client Firestore reads)
let homeDataCache = null;
let homeDataCacheTime = 0;
const HOME_CACHE_TTL = 10 * 60 * 1000; // 10 minutes in-memory cache

app.get('/api/public/home-stats', asyncHandler(async (req, res) => {
    const now = Date.now();
    if (homeDataCache && (now - homeDataCacheTime < HOME_CACHE_TTL)) {
        return res.json({ success: true, ...homeDataCache, cached: true });
    }

    try {
        const adminSdk = require('./firebaseAdmin');
        let localNoticesList = [];
        try {
            const { loadLocalNotices } = require('./cron/beuAutoBroadcaster');
            const localNotices = loadLocalNotices();
            localNoticesList = Object.entries(localNotices)
                .filter(([key]) => key !== '_meta')
                .map(([, val]) => val);
            localNoticesList.sort((a, b) => {
                const timeA = new Date(a.date || a.noticedate || a.createdAt || 0).getTime() || 0;
                const timeB = new Date(b.date || b.noticedate || b.createdAt || 0).getTime() || 0;
                if (timeB !== timeA) return timeB - timeA;
                const numA = Number(String(a.id).replace(/\D/g, '')) || 0;
                const numB = Number(String(b.id).replace(/\D/g, '')) || 0;
                return numB - numA;
            });
        } catch (e) {
            console.warn('Error reading local notices for home-stats:', e.message);
        }

        if (!adminSdk || !adminSdk.apps.length) {
            if (homeDataCache) return res.json({ success: true, ...homeDataCache, cached: true });
            return res.json({
                success: true,
                stats: { notes: 520, pyqs: 340, users: 166, groups: 24 },
                donors: [],
                notices: localNoticesList.slice(0, 15)
            });
        }
        const db = adminSdk.firestore();

        const [metaSnap, donorsSnap, noticesSnap, usersCountSnap, groupsCountSnap] = await Promise.all([
            db.collection('documents').doc('unique_counts_metadata').get().catch(() => null),
            db.collection('donors').orderBy('amount', 'desc').limit(4).get().catch(() => ({ docs: [] })),
            db.collection('beu_notifications').limit(15).get().catch(() => ({ docs: [] })),
            db.collection('users').count().get().catch(() => null),
            db.collection('groups').count().get().catch(() => null)
        ]);

        const metaData = (metaSnap && metaSnap.exists) ? metaSnap.data() : {};
        const donors = donorsSnap.docs.map(d => ({ id: d.id, ...d.data() }));
        const fsNotices = noticesSnap.docs.map(d => ({ id: d.id, ...d.data() }));
        const notices = localNoticesList.length > 0 ? localNoticesList.slice(0, 15) : fsNotices;
        const usersCount = (usersCountSnap && usersCountSnap.data) ? usersCountSnap.data().count : 166;
        const groupsCount = (groupsCountSnap && groupsCountSnap.data) ? groupsCountSnap.data().count : 24;

        homeDataCache = {
            stats: {
                notes: metaData.uniqueNotesCount || 520,
                pyqs: metaData.uniquePyqsCount || 340,
                users: usersCount,
                groups: groupsCount
            },
            donors,
            notices
        };
        homeDataCacheTime = now;

        res.json({ success: true, ...homeDataCache, cached: false });
    } catch (err) {
        console.error('Home stats caching error:', err.message);
        if (homeDataCache) {
            return res.json({ success: true, ...homeDataCache, cached: true });
        }
        let fallbackNotices = [];
        try {
            const { loadLocalNotices } = require('./cron/beuAutoBroadcaster');
            const localNotices = loadLocalNotices();
            fallbackNotices = Object.entries(localNotices)
                .filter(([key]) => key !== '_meta')
                .map(([, val]) => val)
                .slice(0, 15);
        } catch (_) {}
        res.json({
            success: true,
            stats: { notes: 520, pyqs: 340, users: 166, groups: 24 },
            donors: [],
            notices: fallbackNotices
        });
    }
}));

// 5.4 ADMIN STATS & HUB API (Direct Firestore Admin SDK)
app.get('/api/admin/stats', protect, adminOnly, authenticatedLimiter, asyncHandler(async (req, res) => {
    const adminSdk = require('./firebaseAdmin');
    if (!adminSdk || !adminSdk.apps.length) {
        return res.status(503).json({ success: false, message: 'Authentication service temporarily unavailable' });
    }
    const db = adminSdk.firestore();

    const [usersSnap, groupsSnap, GroupsSnap, docsSnap] = await Promise.all([
        db.collection('users').get().catch(() => ({ size: 0, docs: [] })),
        db.collection('groups').get().catch(() => ({ size: 0, docs: [] })),
        db.collection('Groups').get().catch(() => ({ size: 0, docs: [] })),
        db.collection('documents').get().catch(() => ({ size: 0, docs: [] }))
    ]);

    const users = usersSnap.docs.map(d => ({ id: d.id, ...d.data() }));
    const groupMap = new Map();
    groupsSnap.docs.forEach(d => groupMap.set(d.id, { id: d.id, ...d.data() }));
    GroupsSnap.docs.forEach(d => {
        const dData = d.data();
        groupMap.set(d.id, {
            id: d.id,
            ...dData,
            name: dData.name || dData.groupName || 'Study Hub',
            code: dData.code || dData.groupCode || 'N/A',
            memberCount: dData.memberCount || (Array.isArray(dData.members) ? dData.members.length : 1)
        });
    });
    const groups = Array.from(groupMap.values());

    const totalUsers = users.length;
    const adminsCount = users.filter(u => u.role === 'ADMIN' || u.role === 'SUPER_ADMIN').length;
    const scholarsCount = users.filter(u => u.role !== 'ADMIN' && u.role !== 'SUPER_ADMIN').length;

    res.json({
        success: true,
        stats: {
            scholars: scholarsCount || totalUsers,
            totalUsers,
            groups: groups.length,
            docs: docsSnap.size,
            admins: Math.max(1, adminsCount)
        },
        users,
        groups
    });
}));

app.get('/api/admin/groups', protect, adminOnly, authenticatedLimiter, asyncHandler(async (req, res) => {
    const adminSdk = require('./firebaseAdmin');
    if (!adminSdk || !adminSdk.apps.length) {
        return res.status(503).json({ success: false, message: 'Service unavailable' });
    }
    const db = adminSdk.firestore();
    const [groupsSnap, GroupsSnap] = await Promise.all([
        db.collection('groups').get().catch(() => ({ docs: [] })),
        db.collection('Groups').get().catch(() => ({ docs: [] }))
    ]);

    const groupMap = new Map();
    groupsSnap.docs.forEach(d => groupMap.set(d.id, { id: d.id, ...d.data() }));
    GroupsSnap.docs.forEach(d => {
        const dData = d.data();
        groupMap.set(d.id, {
            id: d.id,
            ...dData,
            name: dData.name || dData.groupName || 'Study Hub',
            code: dData.code || dData.groupCode || 'N/A',
            memberCount: dData.memberCount || (Array.isArray(dData.members) ? dData.members.length : 1)
        });
    });
    res.json({ success: true, count: groupMap.size, groups: Array.from(groupMap.values()) });
}));

// 5.5 ADMIN USERS MANAGEMENT API (Protected - Admin Only)
app.get('/api/admin/users', protect, adminOnly, authenticatedLimiter, asyncHandler(async (req, res) => {
    const adminSdk = require('./firebaseAdmin');
    if (!adminSdk || !adminSdk.apps.length) {
        return res.status(503).json({ success: false, message: 'Authentication service temporarily unavailable' });
    }
    const db = adminSdk.firestore();

    const userMap = new Map();

    // 1. Fetch Firestore user documents
    const firestoreUsersSnap = await db.collection('users').get().catch(() => null);
    if (firestoreUsersSnap && !firestoreUsersSnap.empty) {
        firestoreUsersSnap.docs.forEach(d => {
            const data = d.data();
            const email = (data.email || '').toLowerCase();
            const isFounder = email === 'prince8694@gmail.com' || email === 'prince86944@gmail.com';
            const userObj = {
                id: d.id,
                uid: data.uid || d.id,
                ...data,
                role: isFounder ? 'SUPER_ADMIN' : (data.role || 'STUDENT')
            };
            userMap.set(d.id, userObj);
            if (data.uid) userMap.set(data.uid, userObj);
            if (email) userMap.set(email, userObj);
        });
    }

    // 2. Fetch Firebase Auth users to catch any new user whose document wasn't created yet
    try {
        const authUsers = [];
        let pageToken;
        do {
            const result = await adminSdk.auth().listUsers(1000, pageToken);
            authUsers.push(...result.users);
            pageToken = result.pageToken;
        } while (pageToken);

        const missingInFirestore = [];
        for (const u of authUsers) {
            const email = (u.email || '').toLowerCase();
            const existing = userMap.get(u.uid) || (email ? userMap.get(email) : null);
            const isFounder = email === 'prince8694@gmail.com' || email === 'prince86944@gmail.com';

            if (!existing) {
                const newUserObj = {
                    id: u.uid,
                    uid: u.uid,
                    email: u.email || '',
                    name: u.displayName || (u.email ? u.email.split('@')[0] : 'Scholar'),
                    role: isFounder ? 'SUPER_ADMIN' : 'STUDENT',
                    createdAt: u.metadata?.creationTime ? new Date(u.metadata.creationTime) : new Date(),
                    lastLogin: u.metadata?.lastSignInTime ? new Date(u.metadata.lastSignInTime) : new Date()
                };
                if (u.phoneNumber) {
                    newUserObj.phone = u.phoneNumber;
                }
                userMap.set(u.uid, newUserObj);
                missingInFirestore.push(newUserObj);
            } else {
                if (!existing.createdAt && u.metadata?.creationTime) {
                    existing.createdAt = new Date(u.metadata.creationTime);
                }
                if (!existing.lastLogin && u.metadata?.lastSignInTime) {
                    existing.lastLogin = new Date(u.metadata.lastSignInTime);
                }
            }
        }

        // Auto-persist missing users to Firestore in background
        if (missingInFirestore.length > 0) {
            (async () => {
                try {
                    const batch = db.batch();
                    missingInFirestore.slice(0, 450).forEach(u => {
                        batch.set(db.collection('users').doc(u.uid), u, { merge: true });
                    });
                    await batch.commit();
                } catch (bErr) {
                    console.warn('[Auto-Sync Missing Users Warning]:', bErr.message);
                }
            })();
        }
    } catch (authErr) {
        console.warn('[Admin SDK listUsers error]:', authErr.message);
    }

    // Deduplicate by UID
    const finalMap = new Map();
    userMap.forEach((u) => {
        finalMap.set(u.uid || u.id, u);
    });

    const usersList = Array.from(finalMap.values());
    res.json({ success: true, count: usersList.length, users: usersList });
}));

app.post('/api/admin/sync-users', protect, adminOnly, authenticatedLimiter, asyncHandler(async (req, res) => {
    const adminSdk = require('./firebaseAdmin');
    if (!adminSdk || !adminSdk.apps.length) {
        return res.status(503).json({ success: false, message: 'Authentication service temporarily unavailable' });
    }
    const db = adminSdk.firestore();
    const authUsers = [];
    let pageToken;
    do {
        const result = await adminSdk.auth().listUsers(1000, pageToken);
        authUsers.push(...result.users);
        pageToken = result.pageToken;
    } while (pageToken);

    const batchSize = 400;
    let batch = db.batch();
    let count = 0;

    for (const u of authUsers) {
        const isFounder = u.email === 'prince8694@gmail.com' || u.email === 'prince86944@gmail.com';
        const userDocRef = db.collection('users').doc(u.uid);
        const data = {
            uid: u.uid,
            email: u.email || '',
            name: u.displayName || 'Scholar',
            role: isFounder ? 'SUPER_ADMIN' : 'STUDENT',
            createdAt: u.metadata.creationTime ? new Date(u.metadata.creationTime) : new Date(),
            lastLogin: u.metadata.lastSignInTime ? new Date(u.metadata.lastSignInTime) : new Date()
        };
        // Only set phone if Firebase Auth actually has a phone number,
        // otherwise preserve the phone number the user entered in their profile
        if (u.phoneNumber) {
            data.phone = u.phoneNumber;
        }
        batch.set(userDocRef, data, { merge: true });
        count++;
        if (count % batchSize === 0) {
            await batch.commit();
            batch = db.batch();
        }
    }
    if (count % batchSize !== 0) {
        await batch.commit();
    }

    res.json({ success: true, message: `Synced ${count} users successfully!`, count });
}));

// 5.6 Admin Direct Phone Update (Bypasses any client Firestore permissions/quota)
app.post('/api/admin/update-user-phone', protect, adminOnly, authenticatedLimiter, asyncHandler(async (req, res) => {
    const { uid, phone } = req.body;
    if (!uid) {
        return res.status(400).json({ success: false, message: 'UID is required' });
    }
    const adminSdk = require('./firebaseAdmin');
    if (!adminSdk || !adminSdk.apps.length) {
        return res.status(503).json({ success: false, message: 'Firebase Admin SDK unavailable' });
    }
    const cleanPhone = String(phone || '').replace(/\D/g, '').trim();
    await adminSdk.firestore().collection('users').doc(uid).set({
        phone: cleanPhone,
        updatedAt: new Date()
    }, { merge: true });

    res.json({ success: true, message: 'Phone updated successfully', phone: cleanPhone });
}));

// Unhandled API routes catch-all to prevent falling through to SPA HTML
app.all('/api/*', (req, res) => {
    res.status(404).json({ success: false, message: 'Requested API endpoint not found.' });
});

// 5.9 Permanently Purge Legacy Cutoff / Doorway Pages (HTTP 410 Gone Signals Google to Drop Them Immediately)
app.use((req, res, next) => {
    const p = req.path.toLowerCase();
    if (
        p.includes('cutoff') ||
        p.startsWith('/colleges-at-') ||
        p.startsWith('/bihar-engineering-college-list') ||
        p.startsWith('/bihar-engineering-counselling') ||
        p.startsWith('/beu-patna-syllabus') ||
        p.startsWith('/beu-notes-download') ||
        p.startsWith('/beu-sgpa-cgpa-calculator')
    ) {
        return res.status(410).set({
            'Content-Type': 'text/html; charset=utf-8',
            'X-Robots-Tag': 'noindex, nofollow'
        }).send(`<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>410 Gone - Page Permanently Removed</title><meta name="robots" content="noindex, nofollow" /></head><body style="font-family:sans-serif;text-align:center;padding:50px;"><h1>410 Gone</h1><p>This legacy doorway page has been permanently removed.</p><p><a href="/">Return to Apna College Bihar Homepage</a></p></body></html>`);
    }
    next();
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

// Centralized Error Handling Middleware (Catches all sync/async errors and prevents data leakage)
app.use(errorHandler);

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
