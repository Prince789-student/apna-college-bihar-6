const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const admin = require('../firebaseAdmin');
const { generateWhatsAppCaption, CHANNEL_URL } = require('../services/beuAiService');
const whatsappService = require('../services/whatsappService');
const { syncBeuAndBroadcast, loadLocalNotices } = require('../cron/beuAutoBroadcaster');

const LOCAL_STORAGE_PATH = path.join(__dirname, '..', 'data', 'beu_notices.json');

/**
 * GET /api/beu/notices
 * Fetch all notices with their AI WhatsApp captions (merges local cache & Firestore)
 */
router.get('/notices', async (req, res) => {
  try {
    const localNotices = loadLocalNotices();
    let noticesList = Object.values(localNotices);

    // If Firestore is available, attempt to merge with a 2000ms timeout
    if (admin && admin.apps && admin.apps.length > 0) {
      try {
        const firestorePromise = admin.firestore().collection('beu_notifications').get();
        const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('Firestore timeout')), 2000));
        const snap = await Promise.race([firestorePromise, timeoutPromise]);
        snap.forEach(doc => {
          const data = doc.data();
          const id = String(data.id || doc.id);
          if (!localNotices[id]) {
            localNotices[id] = { id, ...data };
          } else {
            // merge captions if present
            if (data.whatsappCaption && !localNotices[id].whatsappCaption) {
              localNotices[id].whatsappCaption = data.whatsappCaption;
            }
          }
        });
        noticesList = Object.values(localNotices);
      } catch (fsErr) {
        // Fallback to local cache seamlessly without blocking
      }
    }

    // Sort descending by noticedate / ID
    noticesList.sort((a, b) => {
      const idA = Number(a.id) || 0;
      const idB = Number(b.id) || 0;
      return idB - idA;
    });

    res.json({
      success: true,
      count: noticesList.length,
      channelUrl: CHANNEL_URL,
      notices: noticesList
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

/**
 * POST /api/beu/sync-and-broadcast
 * Trigger manual sync and AI auto-broadcast
 */
router.post('/sync-and-broadcast', async (req, res) => {
  try {
    const forceAll = req.body.forceAll === true;
    const result = await syncBeuAndBroadcast({ forceAll });
    if (result.success) {
      return res.json({
        success: true,
        message: `Sync successful! ${result.newCount} new notices found, ${result.aiCount} AI captions processed.`,
        data: result
      });
    } else {
      return res.status(500).json({ success: false, message: result.message || result.error });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

/**
 * POST /api/beu/generate-caption
 * Generate AI Caption for a specific notice on demand
 */
router.post('/generate-caption', async (req, res) => {
  const { noticeId, title, pdfUrl, date } = req.body;
  if (!title) {
    return res.status(400).json({ success: false, message: 'Notice title is required.' });
  }

  try {
    const aiResult = await generateWhatsAppCaption({ id: noticeId, title, pdfUrl, date });

    // Update local cache
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

      // Update Firestore if accessible
      if (admin && admin.apps && admin.apps.length > 0) {
        try {
          await admin.firestore().collection('beu_notifications').doc(idStr).set({
            whatsappCaption: aiResult.caption,
            aiProcessed: true,
            updatedAt: admin.firestore.FieldValue.serverTimestamp()
          }, { merge: true });
        } catch (fErr) {
          // ignore quota
        }
      }
    }

    res.json({
      success: true,
      caption: aiResult.caption,
      model: aiResult.model
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

/**
 * PUT /api/beu/update-caption
 * Update / Edit caption manually by Admin
 */
router.put('/update-caption', async (req, res) => {
  const { noticeId, caption } = req.body;
  if (!noticeId || !caption) {
    return res.status(400).json({ success: false, message: 'Notice ID and caption are required.' });
  }

  try {
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
      } catch (fErr) {
        // ignore quota
      }
    }

    res.json({ success: true, message: 'Caption updated successfully!' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

/**
 * POST /api/beu/dispatch-whatsapp
 * Send / Share to WhatsApp via Webhook on demand
 */
router.post('/dispatch-whatsapp', async (req, res) => {
  const { noticeId, caption, pdfUrl, title } = req.body;
  if (!caption) {
    return res.status(400).json({ success: false, message: 'Caption is required to dispatch.' });
  }

  try {
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
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

const whatsappBotService = require('../services/whatsappBotService');

/**
 * GET /api/beu/whatsapp-session
 * Returns current status of the WhatsApp Bot (CONNECTED, SCAN_QR_NEEDED, INITIALIZING, DISCONNECTED)
 */
router.get('/whatsapp-session', (req, res) => {
  const sessionInfo = whatsappBotService.getStatus();
  res.json({
    success: true,
    ...sessionInfo
  });
});

/**
 * POST /api/beu/whatsapp-start
 * Starts the headless WhatsApp session to generate/refresh QR code
 */
router.post('/whatsapp-start', async (req, res) => {
  try {
    whatsappBotService.start();
    res.json({
      success: true,
      message: 'WhatsApp session initialization started.'
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

/**
 * POST /api/beu/whatsapp-test-post
 * Posts a test update with official visual notice card to verify channel posting
 */
router.post('/whatsapp-test-post', async (req, res) => {
  try {
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
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

/**
 * GET /api/beu/config-status
 */
router.get('/config-status', (req, res) => {
  res.json({
    whatsappConfigured: whatsappService.isConfigured(),
    botConnected: whatsappBotService.isConnected(),
    botStatus: whatsappBotService.status,
    channelUrl: CHANNEL_URL,
    hasGeminiKey: !!process.env.GEMINI_API_KEY,
    hasTelegram: !!(process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID)
  });
});

/**
 * GET /api/beu/whatsapp-debug-screenshot
 * Returns a screenshot of the WhatsApp Web page for debugging
 */
router.get('/whatsapp-debug-screenshot', async (req, res) => {
  try {
    if (!whatsappBotService.page) {
      return res.status(400).send('No page open');
    }
    const buf = await whatsappBotService.page.screenshot();
    res.setHeader('Content-Type', 'image/png');
    res.send(buf);
  } catch (e) {
    res.status(500).send('Screenshot error: ' + e.message);
  }
});

module.exports = router;
