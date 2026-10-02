const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const admin = require('../firebaseAdmin');
const { generateWhatsAppCaption, explainSyllabusTopic, CHANNEL_URL } = require('../services/beuAiService');
const whatsappService = require('../services/whatsappService');
const { syncBeuAndBroadcast, loadLocalNotices, getLastAutoCheckTime } = require('../cron/beuAutoBroadcaster');
const { publicLimiter, authenticatedLimiter } = require('../middleware/rateLimiter');
const validate = require('../middleware/validate');
const { asyncHandler } = require('../middleware/errorHandler');
const {
  updateMonthlyCollectionSchema,
  generateCaptionSchema,
  updateCaptionSchema,
  dispatchWhatsAppSchema
} = require('../schemas/beuSchemas');

const LOCAL_STORAGE_PATH = path.join(__dirname, '..', 'data', 'beu_notices.json');
const SETTINGS_FILE_PATH = path.join(__dirname, '..', 'data', 'settings.json');

function loadLocalSettings() {
  try {
    if (fs.existsSync(SETTINGS_FILE_PATH)) {
      const data = JSON.parse(fs.readFileSync(SETTINGS_FILE_PATH, 'utf8'));
      return {
        monthlyCollection: data.monthlyCollection || { monthName: 'September 2026', totalCollection: 50 },
        autoDispatchWhatsApp: data.autoDispatchWhatsApp !== false && process.env.AUTO_DISPATCH_WHATSAPP !== 'false',
        autoDispatchCollegeNotices: data.autoDispatchCollegeNotices === true || process.env.AUTO_DISPATCH_COLLEGE_NOTICES === 'true'
      };
    }
  } catch (e) {
    console.error("Error reading settings.json:", e);
  }
  return {
    monthlyCollection: { monthName: 'September 2026', totalCollection: 50 },
    autoDispatchWhatsApp: process.env.AUTO_DISPATCH_WHATSAPP !== 'false',
    autoDispatchCollegeNotices: process.env.AUTO_DISPATCH_COLLEGE_NOTICES === 'true'
  };
}

function saveLocalSettings(data) {
  try {
    fs.writeFileSync(SETTINGS_FILE_PATH, JSON.stringify(data, null, 2), 'utf8');
  } catch (e) {
    console.error("Error writing settings.json:", e);
  }
}

/**
 * GET /api/beu/monthly-collection
 */
router.get('/monthly-collection', publicLimiter, asyncHandler(async (req, res) => {
  const settings = loadLocalSettings();
  let data = settings.monthlyCollection || { monthName: 'September 2026', totalCollection: 50 };

  if (admin && admin.apps && admin.apps.length > 0) {
    try {
      const docSnap = await admin.firestore().collection('settings').doc('monthlyCollection').get();
      if (docSnap.exists) {
        data = { ...data, ...docSnap.data() };
      }
    } catch (fErr) {}
  }

  res.json({ success: true, data });
}));

/**
 * POST /api/beu/update-monthly-collection
 */
router.post('/update-monthly-collection', authenticatedLimiter, validate({ body: updateMonthlyCollectionSchema }), asyncHandler(async (req, res) => {
  const { monthName, totalCollection } = req.body;
  const settings = loadLocalSettings();
  settings.monthlyCollection = {
    monthName: monthName || 'September 2026',
    totalCollection: Number(totalCollection) || 0,
    updatedAt: new Date().toISOString()
  };
  saveLocalSettings(settings);

  if (admin && admin.apps && admin.apps.length > 0) {
    try {
      await admin.firestore().collection('settings').doc('monthlyCollection').set({
        monthName: monthName || 'September 2026',
        totalCollection: Number(totalCollection) || 0,
        updatedAt: admin.firestore.FieldValue.serverTimestamp()
      }, { merge: true });
    } catch (fErr) {
      console.warn("Firestore Admin SDK write warning:", fErr.message);
    }
  }

  res.json({ success: true, message: 'Monthly collection updated successfully!', data: settings.monthlyCollection });
}));

/**
 * GET /api/beu/notices
 * Fetch all notices with their AI WhatsApp captions
 */
router.get('/notices', publicLimiter, asyncHandler(async (req, res) => {
  // LOCAL CACHE ONLY — Firestore reads disabled to protect free-tier quota (50k reads/day limit)
  const localNotices = loadLocalNotices();
  const noticesList = Object.entries(localNotices)
    .filter(([key]) => key !== '_meta')
    .map(([, val]) => val);

  noticesList.sort((a, b) => {
    const timeA = new Date(a.date || a.noticedate || a.createdAt || 0).getTime() || 0;
    const timeB = new Date(b.date || b.noticedate || b.createdAt || 0).getTime() || 0;
    if (timeB !== timeA) return timeB - timeA;
    const numA = Number(String(a.id).replace(/\D/g, '')) || 0;
    const numB = Number(String(b.id).replace(/\D/g, '')) || 0;
    return numB - numA;
  });

  res.json({
    success: true,
    count: noticesList.length,
    channelUrl: CHANNEL_URL,
    lastAutoCheck: getLastAutoCheckTime(),
    notices: noticesList
  });
}));

/**
 * POST /api/beu/sync-and-broadcast
 */
router.post('/sync-and-broadcast', authenticatedLimiter, asyncHandler(async (req, res) => {
  const forceAll = req.body?.forceAll === true;
  const result = await syncBeuAndBroadcast({ forceAll });
  if (result.success) {
    return res.json({
      success: true,
      message: `Sync successful! ${result.newCount} new notices found, ${result.aiCount} AI captions processed.`,
      data: result
    });
  } else {
    return res.status(500).json({ success: false, message: 'Sync failed to complete.' });
  }
}));

/**
 * POST /api/beu/generate-caption
 */
router.post('/generate-caption', authenticatedLimiter, validate({ body: generateCaptionSchema }), asyncHandler(async (req, res) => {
  const { noticeId, title, pdfUrl, date } = req.body;
  const aiResult = await generateWhatsAppCaption({ id: noticeId, title, pdfUrl, date });

  if (noticeId) {
    const localNotices = loadLocalNotices();
    const idStr = String(noticeId);
    if (!localNotices[idStr]) {
      localNotices[idStr] = { id: noticeId, title, pdfUrl, date };
    }
    localNotices[idStr].whatsappCaption = aiResult.caption;
    localNotices[idStr].aiProcessed = true;
    localNotices[idStr].updatedAt = new Date().toISOString();
    fs.writeFileSync(LOCAL_STORAGE_PATH, JSON.stringify(localNotices, null, 2), 'utf8');

    if (admin && admin.apps && admin.apps.length > 0) {
      try {
        await admin.firestore().collection('beu_notifications').doc(idStr).set({
          whatsappCaption: aiResult.caption,
          aiProcessed: true,
          updatedAt: admin.firestore.FieldValue.serverTimestamp()
        }, { merge: true });
      } catch (fErr) {}
    }
  }

  res.json({
    success: true,
    caption: aiResult.caption,
    model: aiResult.model
  });
}));

/**
 * PUT /api/beu/update-caption
 */
router.put('/update-caption', authenticatedLimiter, validate({ body: updateCaptionSchema }), asyncHandler(async (req, res) => {
  const { noticeId, caption } = req.body;
  const localNotices = loadLocalNotices();
  const idStr = String(noticeId);
  if (localNotices[idStr]) {
    localNotices[idStr].whatsappCaption = caption;
    localNotices[idStr].updatedAt = new Date().toISOString();
    fs.writeFileSync(LOCAL_STORAGE_PATH, JSON.stringify(localNotices, null, 2), 'utf8');
  }

  if (admin && admin.apps && admin.apps.length > 0) {
    try {
      await admin.firestore().collection('beu_notifications').doc(idStr).update({
        whatsappCaption: caption,
        updatedAt: admin.firestore.FieldValue.serverTimestamp()
      });
    } catch (fErr) {}
  }

  res.json({ success: true, message: 'Caption updated successfully!' });
}));

/**
 * POST /api/beu/dispatch-whatsapp
 */
router.post('/dispatch-whatsapp', authenticatedLimiter, validate({ body: dispatchWhatsAppSchema }), asyncHandler(async (req, res) => {
  const { noticeId, caption, pdfUrl, title } = req.body;
  const result = await whatsappService.sendMessage({ caption, pdfUrl, title, noticeId });

  if (noticeId) {
    const localNotices = loadLocalNotices();
    const idStr = String(noticeId);
    if (localNotices[idStr]) {
      localNotices[idStr].whatsappDispatched = result.status === 'SENT';
      localNotices[idStr].whatsappStatus = result.status;
      localNotices[idStr].lastDispatchedAt = new Date().toISOString();
      fs.writeFileSync(LOCAL_STORAGE_PATH, JSON.stringify(localNotices, null, 2), 'utf8');
    }

    if (admin && admin.apps && admin.apps.length > 0) {
      try {
        await admin.firestore().collection('beu_notifications').doc(idStr).update({
          whatsappDispatched: result.status === 'SENT',
          whatsappStatus: result.status,
          lastDispatchedAt: admin.firestore.FieldValue.serverTimestamp()
        });
      } catch (fErr) {}
    }
  }

  res.json({ success: true, result });
}));

const whatsappBotService = require('../services/whatsappBotService');

/**
 * GET /api/beu/whatsapp-session
 */
router.get('/whatsapp-session', publicLimiter, (req, res) => {
  const sessionInfo = whatsappBotService.getStatus();
  res.json({
    success: true,
    ...sessionInfo
  });
});

/**
 * POST /api/beu/whatsapp-start
 */
router.post('/whatsapp-start', authenticatedLimiter, asyncHandler(async (req, res) => {
  whatsappBotService.start();
  res.json({
    success: true,
    message: 'WhatsApp session initialization started.'
  });
}));

/**
 * POST /api/beu/whatsapp-test-post
 */
router.post('/whatsapp-test-post', authenticatedLimiter, asyncHandler(async (req, res) => {
  if (!whatsappBotService.isConnected()) {
    return res.status(400).json({
      success: false,
      message: 'WhatsApp is not connected yet. Please scan the QR code first.'
    });
  }

  const testTitle = 'B.Tech 8th Semester Exam Form Fill-Up & Project Viva Schedule 2026';
  const testNoticeId = 'TEST_' + Date.now();
  const testMessage = `🚨 *BEU PATNA: Official Academic Notification* 📢\n\n` +
    `📌 *${testTitle}*\n` +
    `🗓️ *Date:* ${new Date().toLocaleDateString('en-IN')}\n\n` +
    `🌐 *Apna College Bihar Portal (All Notices & Study Material):*\n👉 https://apnacollegebihar.online/notifications\n\n` +
    `📄 *Official Notice PDF Download:*\n👉 https://beu-bih.ac.in/notification\n\n` +
    `📲 *Official WhatsApp Channel Join Karein (Daily Updates):*\n👉 ${CHANNEL_URL}\n\n` +
    `📢 *Apne college batchmates aur WhatsApp groups ke saath share karein!*\n` +
    `🚀 *Team Apna College Bihar* | https://apnacollegebihar.online\n` +
    `#BEU #BiharEngineering #ApnaCollegeBihar #AcademicUpdate`;

  const result = await whatsappService.sendMessage({
    caption: testMessage,
    title: testTitle,
    noticeId: testNoticeId,
    pdfUrl: 'https://beu-bih.ac.in/notification'
  });

  res.json({
    success: result.status === 'SENT',
    result
  });
}));

/**
 * GET /api/beu/config-status
 */
router.get('/config-status', publicLimiter, (req, res) => {
  const settings = loadLocalSettings();
  res.json({
    whatsappConfigured: whatsappService.isConfigured(),
    botConnected: whatsappBotService.isConnected(),
    botStatus: whatsappBotService.status,
    channelUrl: CHANNEL_URL,
    hasGeminiKey: !!process.env.GEMINI_API_KEY,
    hasTelegram: !!(process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID),
    autoDispatchWhatsApp: settings.autoDispatchWhatsApp,
    autoDispatchCollegeNotices: settings.autoDispatchCollegeNotices
  });
});

/**
 * GET /api/beu/broadcast-settings
 */
router.get('/broadcast-settings', publicLimiter, (req, res) => {
  const settings = loadLocalSettings();
  res.json({
    success: true,
    autoDispatchWhatsApp: settings.autoDispatchWhatsApp,
    autoDispatchCollegeNotices: settings.autoDispatchCollegeNotices
  });
});

/**
 * POST /api/beu/update-broadcast-settings
 */
router.post('/update-broadcast-settings', authenticatedLimiter, asyncHandler(async (req, res) => {
  const { autoDispatchWhatsApp, autoDispatchCollegeNotices } = req.body || {};
  const settings = loadLocalSettings();
  if (typeof autoDispatchWhatsApp === 'boolean') {
    settings.autoDispatchWhatsApp = autoDispatchWhatsApp;
  }
  if (typeof autoDispatchCollegeNotices === 'boolean') {
    settings.autoDispatchCollegeNotices = autoDispatchCollegeNotices;
  }
  saveLocalSettings(settings);

  res.json({
    success: true,
    message: 'Broadcast settings updated successfully!',
    settings: {
      autoDispatchWhatsApp: settings.autoDispatchWhatsApp,
      autoDispatchCollegeNotices: settings.autoDispatchCollegeNotices
    }
  });
}));

/**
 * GET /api/beu/whatsapp-debug-screenshot
 */
router.get('/whatsapp-debug-screenshot', authenticatedLimiter, asyncHandler(async (req, res) => {
  if (!whatsappBotService.page) {
    return res.status(400).send('No page open');
  }
  const buf = await whatsappBotService.page.screenshot();
  res.setHeader('Content-Type', 'image/png');
  res.send(buf);
}));

/**
 * POST /api/beu/ask-ai
 * In-app AI Study Tutor for BEU Syllabus Topics
 */
router.post('/ask-ai', publicLimiter, asyncHandler(async (req, res) => {
  const { topic, subject, unitName, branch, semester, mode, customQuestion } = req.body || {};
  if (!topic && !customQuestion) {
    return res.status(400).json({ success: false, message: 'Topic or question is required' });
  }

  const result = await explainSyllabusTopic({
    topic: topic || 'Engineering Concept',
    subject,
    unitName,
    branch,
    semester,
    mode: mode || 'explain',
    customQuestion
  });

  res.json({
    success: true,
    ...result
  });
}));

module.exports = router;

