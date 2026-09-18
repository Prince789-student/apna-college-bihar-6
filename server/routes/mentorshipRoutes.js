const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const admin = require('../firebaseAdmin');

const dataDir = path.join(__dirname, '..', 'data');
const dataFile = path.join(dataDir, 'mentorship.json');

// Ensure data directory exists
if (!fs.existsSync(dataDir)) {
  try {
    fs.mkdirSync(dataDir, { recursive: true });
  } catch (e) {}
}

// Helper to read cached mentorship data
function readLocalData() {
  try {
    if (fs.existsSync(dataFile)) {
      const raw = fs.readFileSync(dataFile, 'utf8');
      return JSON.parse(raw);
    }
  } catch (err) {
    console.error('[Mentorship API] Error reading local data:', err.message);
  }
  return null;
}

// Helper to save mentorship data
function saveLocalData(data) {
  try {
    fs.writeFileSync(dataFile, JSON.stringify(data, null, 2), 'utf8');
  } catch (err) {
    console.error('[Mentorship API] Error saving local data:', err.message);
  }
}

// GET /api/mentorship/data - Fetch latest mentorship data for any device (mobile or desktop)
router.get('/data', async (req, res) => {
  try {
    // 1. Try Firebase Firestore first if initialized
    if (admin && admin.firestore) {
      try {
        const firestore = admin.firestore();
        const docSnap = await firestore.collection('mentorship').doc('data').get();
        if (docSnap.exists) {
          const cloudData = docSnap.data();
          if (cloudData && Array.isArray(cloudData.students) && cloudData.students.length > 0) {
            saveLocalData(cloudData);
            return res.json({ success: true, source: 'firestore', ...cloudData });
          }
        }
      } catch (fErr) {
        console.warn('[Mentorship API] Firestore read fallback to local JSON:', fErr.message);
      }
    }

    // 2. Fallback to local server JSON
    const localData = readLocalData();
    if (localData) {
      return res.json({ success: true, source: 'server_cache', ...localData });
    }

    // 3. Fallback: return null so client uses default bundle
    return res.json({ success: true, source: 'default', students: null, mentors: null });
  } catch (err) {
    console.error('[Mentorship API] GET /data error:', err);
    res.status(500).json({ success: false, message: err.message });
  }
});

// POST /api/mentorship/sync - Save updated students and mentors from Admin Panel
router.post('/sync', async (req, res) => {
  try {
    const { students, mentors } = req.body;
    if (!Array.isArray(students)) {
      return res.status(400).json({ success: false, message: 'Invalid students array' });
    }

    const payload = {
      students,
      mentors: Array.isArray(mentors) ? mentors : [],
      updatedAt: new Date().toISOString()
    };

    // 1. Save locally on server
    saveLocalData(payload);

    // 2. Sync to Firebase Firestore if available
    if (admin && admin.firestore) {
      try {
        const firestore = admin.firestore();
        await firestore.collection('mentorship').doc('data').set(payload, { merge: true });
      } catch (fErr) {
        console.warn('[Mentorship API] Firestore write error:', fErr.message);
      }
    }

    res.json({
      success: true,
      message: 'Mentorship data synced successfully across all devices!',
      count: students.length,
      updatedAt: payload.updatedAt
    });
  } catch (err) {
    console.error('[Mentorship API] POST /sync error:', err);
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
