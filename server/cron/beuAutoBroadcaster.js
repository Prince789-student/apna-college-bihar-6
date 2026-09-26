const axios = require('axios');
const cron = require('node-cron');
const fs = require('fs');
const path = require('path');
const admin = require('../firebaseAdmin');
const { generateWhatsAppCaption } = require('../services/beuAiService');
const whatsappService = require('../services/whatsappService');

const BEU_API_URL = 'https://beu-bih.ac.in/backend/v1/notice/get-notice-board';
const LOCAL_STORAGE_PATH = path.join(__dirname, '..', 'data', 'beu_notices.json');

// Ensure data folder exists
const dataDir = path.dirname(LOCAL_STORAGE_PATH);
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

function loadLocalNotices() {
  try {
    if (fs.existsSync(LOCAL_STORAGE_PATH)) {
      return JSON.parse(fs.readFileSync(LOCAL_STORAGE_PATH, 'utf8'));
    }
  } catch (e) {
    console.warn('[BEU Storage] Error reading local store:', e.message);
  }
  return {};
}

function saveLocalNotices(data) {
  try {
    fs.writeFileSync(LOCAL_STORAGE_PATH, JSON.stringify(data, null, 2), 'utf8');
  } catch (e) {
    console.error('[BEU Storage] Error saving local store:', e.message);
  }
}

let isRunning = false;

/**
 * Syncs BEU Notifications, runs AI analysis via Gemini 2.5 Flash,
 * and automatically dispatches formatted updates to WhatsApp & App Push.
 */
async function syncBeuAndBroadcast(options = { forceAll: false }) {
  if (isRunning) {
    console.log('[BEU Broadcaster] Sync already in progress, skipping concurrent run.');
    return { success: false, message: 'Sync already in progress.' };
  }

  isRunning = true;
  console.log('[BEU Broadcaster] Starting BEU notice sync & AI WhatsApp pipeline...');

  try {
    const response = await axios.get(BEU_API_URL, { timeout: 30000 });
    const notices = response.data;

    if (!Array.isArray(notices) || notices.length === 0) {
      console.log('[BEU Broadcaster] No notices returned by BEU API.');
      isRunning = false;
      return { success: false, message: 'No notices found from BEU API.' };
    }

    console.log(`[BEU Broadcaster] Fetched ${notices.length} notices from BEU.`);

    const localCache = loadLocalNotices();
    const recentNotices = notices.slice(0, 10);
    let newNoticesCount = 0;
    let aiProcessedCount = 0;
    const processedResults = [];

    // Optional Firestore DB handle
    let db = null;
    let beuRef = null;
    if (admin && admin.apps && admin.apps.length > 0) {
      try {
        db = admin.firestore();
        beuRef = db.collection('beu_notifications');
      } catch (fErr) {
        console.warn('[BEU Broadcaster] Firestore unavailable, using local cache:', fErr.message);
      }
    }

    for (const notice of recentNotices) {
      const noticeId = String(notice.id);
      let existingData = localCache[noticeId];

      // Check Firestore if local cache is empty for this notice (with 1500ms timeout)
      if (!existingData && beuRef) {
        try {
          const docSnap = await Promise.race([
            beuRef.doc(noticeId).get(),
            new Promise((_, r) => setTimeout(() => r(new Error('timeout')), 1500))
          ]);
          if (docSnap && docSnap.exists) existingData = docSnap.data();
        } catch (qErr) {
          // Firestore quota, timeout or network error; proceed with local cache
        }
      }

      const isNew = !existingData;
      const needsAi = isNew || !existingData?.whatsappCaption || options.forceAll;

      const fullPdfUrl = notice.link 
        ? `https://beu-bih.ac.in/backend/${encodeURIComponent(notice.link.trim())}`
        : '';
      
      const title = (notice.board || 'BEU Notice').trim();
      const noticeDate = notice.noticedate || new Date().toISOString().split('T')[0];

      if (needsAi) {
        console.log(`[BEU Broadcaster] Processing Notice #${noticeId}: "${title}"`);

        // 1. Generate Full Detailed WhatsApp caption using Gemini 2.5 Flash
        const aiResult = await generateWhatsAppCaption({
          id: noticeId,
          title: title,
          pdfUrl: fullPdfUrl,
          date: noticeDate
        });

        const whatsappCaption = aiResult.caption;

        // 2. Dispatch to WhatsApp
        const dispatchResult = await whatsappService.sendMessage({
          caption: whatsappCaption,
          pdfUrl: fullPdfUrl,
          title: title,
          noticeId: noticeId
        });

        // 3. Save into local persistent cache
        const payload = {
          id: notice.id,
          board: title,
          title: title,
          link: notice.link,
          pdfUrl: fullPdfUrl,
          noticedate: noticeDate,
          date: noticeDate,
          isimportant: notice.isimportant,
          whatsappCaption: whatsappCaption,
          aiProcessed: true,
          aiProcessedAt: new Date().toISOString(),
          whatsappDispatched: dispatchResult.status === 'SENT',
          whatsappStatus: dispatchResult.status,
          updatedAt: new Date().toISOString()
        };

        if (isNew) {
          payload.createdAt = new Date().toISOString();
          newNoticesCount++;
        }

        localCache[noticeId] = payload;
        saveLocalNotices(localCache);

        // 4. Try syncing to Firestore (guarded against quota errors)
        if (beuRef) {
          try {
            await beuRef.doc(noticeId).set(payload, { merge: true });
          } catch (fsWriteErr) {
            console.warn('[BEU Broadcaster] Firestore write skipped (quota/offline):', fsWriteErr.message);
          }
        }

        aiProcessedCount++;

        processedResults.push({
          id: noticeId,
          title,
          isNew,
          caption: whatsappCaption,
          whatsappStatus: dispatchResult.status
        });

        // 5. Try sending FCM Push for new notice
        if (isNew && admin && admin.messaging) {
          try {
            if (db) {
              const usersSnapshot = await db.collection('users').limit(100).get();
              const tokens = [];
              usersSnapshot.forEach(userDoc => {
                const uData = userDoc.data();
                if (uData.fcmToken) tokens.push(uData.fcmToken);
              });

              if (tokens.length > 0) {
                const message = {
                  notification: {
                    title: notice.isimportant === 1 ? '🚨 URGENT: New BEU Notice!' : '🔔 BEU Notification Update',
                    body: title
                  },
                  data: {
                    type: 'beu_notice',
                    id: noticeId,
                    link: fullPdfUrl
                  },
                  tokens: tokens.slice(0, 500)
                };
                await admin.messaging().sendEachForMulticast(message);
                console.log(`[BEU Broadcaster] FCM Push sent to ${tokens.length} app users.`);
              }
            }
          } catch (fcmErr) {
            console.warn('[BEU Broadcaster] FCM Push error:', fcmErr.message);
          }
        }

        // Delay between AI requests to respect rate limits
        await new Promise(r => setTimeout(r, 2000));
      } else if (!existingData?.whatsappDispatched && existingData?.whatsappCaption && whatsappService.isConfigured()) {
        console.log(`[BEU Broadcaster] Retrying WhatsApp dispatch for pending Notice #${noticeId}: "${title}"`);
        const dispatchResult = await whatsappService.sendMessage({
          caption: existingData.whatsappCaption,
          pdfUrl: fullPdfUrl,
          title: title,
          noticeId: noticeId
        });

        if (dispatchResult.status === 'SENT') {
          existingData.whatsappDispatched = true;
          existingData.whatsappStatus = 'SENT';
          existingData.updatedAt = new Date().toISOString();
          localCache[noticeId] = existingData;
          saveLocalNotices(localCache);

          if (beuRef) {
            try {
              await beuRef.doc(noticeId).set(existingData, { merge: true });
            } catch (fsWriteErr) {}
          }

          processedResults.push({
            id: noticeId,
            title,
            isNew: false,
            caption: existingData.whatsappCaption,
            whatsappStatus: 'SENT'
          });
        } else {
          console.warn(`[BEU Broadcaster] Dispatch failed for notice #${noticeId}. Will retry in next scheduled run.`);
          break;
        }
      }
    }

    console.log(`[BEU Broadcaster] Sync finished. ${newNoticesCount} new notices, ${aiProcessedCount} AI captions generated.`);
    isRunning = false;

    return {
      success: true,
      newCount: newNoticesCount,
      aiCount: aiProcessedCount,
      results: processedResults
    };

  } catch (error) {
    isRunning = false;
    console.error('[BEU Broadcaster] Pipeline Error:', error.message);
    return { success: false, error: error.message };
  }
}

/**
 * Initialize automatic periodic cron job (every 2 minutes for real-time alerts)
 */
function initBeuBroadcaster() {
  const whatsappBotService = require('../services/whatsappBotService');
  // Auto-start WhatsApp Bot session if saved session exists
  setTimeout(() => {
    whatsappBotService.start().catch(err => {
      console.warn('[WhatsApp Bot Auto-Start]:', err.message);
    });
  }, 1000);

  // Run initial sync after 6s to allow WhatsApp session to initialize
  setTimeout(() => {
    syncBeuAndBroadcast().catch(err => console.error('[BEU Broadcaster Startup Error]:', err.message));
  }, 6000);

  // Run every 2 minutes: '*/2 * * * *'
  cron.schedule('*/2 * * * *', () => {
    console.log('[BEU Cron] Continuous 2-min check for new notices...');
    syncBeuAndBroadcast();
  });

  console.log('✅ BEU Auto-Broadcaster Scheduled (Every 2 mins - Realtime Mode)');
}

module.exports = {
  syncBeuAndBroadcast,
  initBeuBroadcaster,
  loadLocalNotices
};
