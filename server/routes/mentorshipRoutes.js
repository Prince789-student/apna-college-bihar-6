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
    const { students, mentors, removedStudents } = req.body;
    if (!Array.isArray(students)) {
      return res.status(400).json({ success: false, message: 'Invalid students array' });
    }

    const payload = {
      students,
      removedStudents: Array.isArray(removedStudents) ? removedStudents : [],
      mentors: Array.isArray(mentors) ? mentors : [],
      updatedAt: new Date().toISOString()
    };

    // 1. Save locally on server
    saveLocalData(payload);

    // 2. Sync to Firebase Firestore if available
    if (admin && admin.firestore) {
      try {
        const firestore = admin.firestore();
        await firestore.collection('mentorship').doc('data').set(payload, { merge: false });
      } catch (fErr) {
        console.warn('[Mentorship API] Firestore write error:', fErr.message);
      }
    }

    res.json({
      success: true,
      message: 'Mentorship data synced successfully across all devices!',
      count: students.length,
      removedCount: (payload.removedStudents || []).length,
      updatedAt: payload.updatedAt
    });
  } catch (err) {
    console.error('[Mentorship API] POST /sync error:', err);
    res.status(500).json({ success: false, message: err.message });
  }
});

// ═══════════════════════════════════════════════════════════════════════════
// REAL-TIME 1-ON-1 MENTORSHIP CHAT ENDPOINTS (POWERED BY FIREBASE ADMIN SDK)
// ═══════════════════════════════════════════════════════════════════════════

const chatsFile = path.join(dataDir, 'mentorship_chats.json');

function readChatsData() {
  try {
    if (fs.existsSync(chatsFile)) {
      const raw = fs.readFileSync(chatsFile, 'utf8');
      return JSON.parse(raw);
    }
  } catch (e) {}
  return {};
}

function saveChatsData(data) {
  try {
    fs.writeFileSync(chatsFile, JSON.stringify(data, null, 2), 'utf8');
  } catch (e) {}
}

// POST /api/mentorship/chat/send - Send a chat message
router.post('/chat/send', async (req, res) => {
  try {
    const {
      threadId,
      studentRoll,
      studentName,
      mentorId,
      mentorName,
      senderRole,
      senderName,
      text
    } = req.body;

    if (!threadId || !text || !text.trim()) {
      return res.status(400).json({ success: false, message: 'threadId and text are required' });
    }

    const now = Date.now();
    const messageData = {
      threadId,
      studentRoll: studentRoll || '',
      studentName: studentName || 'Student',
      mentorId: mentorId || '',
      mentorName: mentorName || 'Senior Mentor',
      senderRole: senderRole || 'student',
      senderName: senderName || (senderRole === 'student' ? studentName : mentorName),
      text: text.trim(),
      timestamp: now,
      read: false,
      createdAt: new Date().toISOString()
    };

    // 1. Save to local server file cache
    const chats = readChatsData();
    if (!Array.isArray(chats[threadId])) {
      chats[threadId] = [];
    }
    const localId = `srv_${now}_${Math.random().toString(36).substr(2, 6)}`;
    const fullMsg = { id: localId, ...messageData };
    chats[threadId].push(fullMsg);
    saveChatsData(chats);

    // 2. Save to Firestore using Firebase Admin SDK (bypasses all security rules)
    if (admin && admin.firestore) {
      try {
        const firestore = admin.firestore();
        const docRef = await firestore.collection('MentorshipMessages').add({
          ...messageData,
          serverTimestamp: admin.firestore.FieldValue.serverTimestamp()
        });
        fullMsg.id = docRef.id;
      } catch (fErr) {
        console.warn('[Mentorship Chat API] Firestore write warning:', fErr.message);
      }
    }

    res.json({ success: true, message: fullMsg });
  } catch (err) {
    console.error('[Mentorship Chat API] send error:', err);
    res.status(500).json({ success: false, message: err.message });
  }
});

// GET /api/mentorship/chat/messages - Fetch all messages for a thread
router.get('/chat/messages', async (req, res) => {
  try {
    const { threadId } = req.query;
    if (!threadId) {
      return res.status(400).json({ success: false, message: 'threadId is required' });
    }

    let messages = [];

    // 1. Try Firebase Admin Firestore first
    const baseThread = threadId.replace(/__deepak|__subhash/g, '');
    const candidateIds = Array.from(new Set([
      threadId,
      baseThread,
      `${baseThread}__deepak`,
      `${baseThread}__subhash`
    ]));

    if (admin && admin.firestore) {
      try {
        const firestore = admin.firestore();
        const snap = await firestore
          .collection('MentorshipMessages')
          .where('threadId', 'in', candidateIds)
          .get();

        if (!snap.empty) {
          snap.forEach(docSnap => {
            const d = docSnap.data();
            messages.push({
              id: docSnap.id,
              ...d,
              timestamp: d.timestamp || (d.serverTimestamp?.toMillis ? d.serverTimestamp.toMillis() : Date.now())
            });
          });
        }
      } catch (fErr) {
        console.warn('[Mentorship Chat API] Firestore read warning:', fErr.message);
      }
    }

    // 2. Merge with local file cache
    const chats = readChatsData();
    let localMsgs = [];
    candidateIds.forEach(cid => {
      if (Array.isArray(chats[cid])) {
        localMsgs = localMsgs.concat(chats[cid]);
      }
    });

    const map = new Map();
    localMsgs.forEach(m => {
      const key = `${m.timestamp}_${m.text}`;
      map.set(key, m);
    });
    messages.forEach(m => {
      const key = `${m.timestamp}_${m.text}`;
      map.set(key, m);
    });

    const combined = Array.from(map.values()).sort((a, b) => (a.timestamp || 0) - (b.timestamp || 0));

    res.json({ success: true, messages: combined });
  } catch (err) {
    console.error('[Mentorship Chat API] get messages error:', err);
    res.status(500).json({ success: false, message: err.message });
  }
});

// POST /api/mentorship/chat/mark-read - Mark messages as read
router.post('/chat/mark-read', async (req, res) => {
  try {
    const { threadId, role } = req.body;
    if (!threadId) {
      return res.status(400).json({ success: false, message: 'threadId is required' });
    }

    const oppositeRole = role === 'student' ? 'mentor' : 'student';

    // Update local cache
    const chats = readChatsData();
    if (Array.isArray(chats[threadId])) {
      chats[threadId].forEach(m => {
        if (m.senderRole === oppositeRole) m.read = true;
      });
      saveChatsData(chats);
    }

    // Update in Firestore via Admin SDK
    if (admin && admin.firestore) {
      try {
        const firestore = admin.firestore();
        const snap = await firestore
          .collection('MentorshipMessages')
          .where('threadId', '==', threadId)
          .where('senderRole', '==', oppositeRole)
          .where('read', '==', false)
          .get();

        if (!snap.empty) {
          const batch = firestore.batch();
          snap.forEach(docSnap => {
            batch.update(docSnap.ref, { read: true });
          });
          await batch.commit();
        }
      } catch (fErr) {}
    }

    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;

