const axios = require('axios');
const cron = require('node-cron');
const fs = require('fs');
const path = require('path');
const admin = require('../firebaseAdmin');
const { generateWhatsAppCaption } = require('../services/beuAiService');
const whatsappService = require('../services/whatsappService');

const BEU_API_URL = 'https://beu-bih.ac.in/backend/v1/notice/get-notice-board';
const LOCAL_STORAGE_PATH = path.join(__dirname, '..', 'data', 'beu_notices.json');
const SETTINGS_FILE_PATH = path.join(__dirname, '..', 'data', 'settings.json');

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

/**
 * Load Auto-Broadcast Configuration.
 * - BEU Central notices: default TRUE (automatically dispatched to WhatsApp Channel).
 * - College notices (38 Colleges): default FALSE (STRICTLY DISABLED from auto-dispatching to WhatsApp).
 */
function loadBroadcastSettings() {
  try {
    if (fs.existsSync(SETTINGS_FILE_PATH)) {
      const data = JSON.parse(fs.readFileSync(SETTINGS_FILE_PATH, 'utf8'));
      return {
        autoDispatchWhatsApp: data.autoDispatchWhatsApp !== false && process.env.AUTO_DISPATCH_WHATSAPP !== 'false',
        autoDispatchCollegeNotices: data.autoDispatchCollegeNotices === true || process.env.AUTO_DISPATCH_COLLEGE_NOTICES === 'true'
      };
    }
  } catch (e) {
    console.warn('[BEU Broadcaster] Error reading settings.json:', e.message);
  }
  return {
    autoDispatchWhatsApp: process.env.AUTO_DISPATCH_WHATSAPP !== 'false',
    autoDispatchCollegeNotices: process.env.AUTO_DISPATCH_COLLEGE_NOTICES === 'true'
  };
}

let isRunning = false;
let lastServerAutoCheckTimestamp = new Date().toISOString();

function getLastAutoCheckTime() {
  try {
    const localCache = loadLocalNotices();
    if (localCache._meta && localCache._meta.lastServerAutoCheck) {
      return localCache._meta.lastServerAutoCheck;
    }
  } catch (e) {}
  return lastServerAutoCheckTimestamp;
}

const { scrapeAll38CollegesNotices } = require('../services/collegeScraperService');

/**
 * Syncs BEU Notifications & 38 Bihar Engineering Colleges,
 * runs AI analysis via Gemini 2.5 Flash, and automatically dispatches to WhatsApp & App Push.
 */
async function syncBeuAndBroadcast(options = { forceAll: false }) {
  if (isRunning) {
    console.log('[BEU Broadcaster] Sync already in progress, skipping concurrent run.');
    return { success: false, message: 'Sync already in progress.' };
  }

  isRunning = true;
  lastServerAutoCheckTimestamp = new Date().toISOString();
  const broadcastSettings = loadBroadcastSettings();
  console.log(`[BEU Broadcaster] Starting notice sync pipeline (Auto-WhatsApp: ${broadcastSettings.autoDispatchWhatsApp ? 'ON' : 'OFF'}, College Auto-WhatsApp: ${broadcastSettings.autoDispatchCollegeNotices ? 'ON' : 'OFF'})...`);

  try {
    let centralNotices = [];
    try {
      const response = await axios.get(BEU_API_URL, { timeout: 30000 });
      if (Array.isArray(response.data)) centralNotices = response.data;
    } catch (apiErr) {
      console.warn('[BEU Broadcaster] Central BEU API fetch warning:', apiErr.message);
    }

    // Crawl 38 BEU Engineering Colleges notice boards
    let collegeNotices = [];
    try {
      collegeNotices = await scrapeAll38CollegesNotices();
    } catch (colErr) {
      console.warn('[BEU Broadcaster] 38 Colleges scrape warning:', colErr.message);
    }

    const localCache = loadLocalNotices();
    localCache._meta = {
      ...(localCache._meta || {}),
      lastServerAutoCheck: lastServerAutoCheckTimestamp
    };
    saveLocalNotices(localCache);

    const formattedCentral = centralNotices.slice(0, 10).map(n => ({
      id: String(n.id),
      title: (n.board || 'BEU Notice').trim(),
      rawTitle: (n.board || 'BEU Notice').trim(),
      pdfUrl: n.link ? `https://beu-bih.ac.in/backend/${encodeURIComponent(n.link.trim())}` : '',
      date: n.noticedate || new Date().toISOString().split('T')[0],
      isimportant: n.isimportant,
      isCollegeNotice: false,
      shortName: 'BEU PATNA',
      district: 'PATNA'
    }));

    const combinedNotices = [...formattedCentral, ...collegeNotices];

    if (combinedNotices.length === 0) {
      console.log('[BEU Broadcaster] No notices returned from BEU API or Colleges.');
      isRunning = false;
      return { success: false, message: 'No notices found.' };
    }

    console.log(`[BEU Broadcaster] Checking ${combinedNotices.length} candidates (${formattedCentral.length} BEU Central, ${collegeNotices.length} 38 Colleges)...`);
    let newNoticesCount = 0;
    let aiProcessedCount = 0;
    const processedResults = [];

    // NOTE: Firestore READS are disabled to stay within free-tier quota limits.
    // All notice data is read from local JSON cache ONLY.
    // Firestore WRITES only happen for new notices.
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

    for (const notice of combinedNotices) {
      const noticeId = String(notice.id);
      // LOCAL CACHE ONLY — no Firestore reads to protect free quota
      const existingData = localCache[noticeId];

      const isNew = !existingData;
      const needsAi = isNew || !existingData?.whatsappCaption || options.forceAll;
      const isCollege = !!(notice.isCollegeNotice || String(noticeId).startsWith('col_') || notice.collegeId);

      const fullPdfUrl = notice.pdfUrl || (notice.link ? `https://beu-bih.ac.in/backend/${encodeURIComponent(notice.link.trim())}` : '');
      const title = (notice.title || notice.board || 'BEU Notice').trim();
      const noticeDate = notice.date || notice.noticedate || new Date().toISOString().split('T')[0];

      if (needsAi) {
        console.log(`[BEU Broadcaster] Processing Notice #${noticeId} [${notice.shortName || 'BEU'}]: "${title}" (College: ${isCollege ? 'YES' : 'NO'})`);

        // 1. Generate Full Detailed WhatsApp caption using Gemini 2.5 Flash
        const aiResult = await generateWhatsAppCaption({
          id: noticeId,
          title: title,
          pdfUrl: fullPdfUrl,
          date: noticeDate,
          isCollegeNotice: notice.isCollegeNotice,
          collegeName: notice.collegeName,
          shortName: notice.shortName,
          district: notice.district,
          domain: notice.domain
        });

        const whatsappCaption = aiResult.caption;

        // 2. Dispatch to WhatsApp Channel (AUTO-NOTIFICATION CHECK)
        // - College notices: DISABLED by default (band kiya gaya hai - user request).
        // - Main BEU notices: ENABLED by default (auto-dispatched to WhatsApp Channel).
        const shouldAutoDispatch = isCollege
          ? (broadcastSettings.autoDispatchCollegeNotices === true)
          : (broadcastSettings.autoDispatchWhatsApp !== false);

        let dispatchResult = {
          status: 'READY_TO_SHARE',
          method: 'MANUAL_SHARE_READY'
        };

        if (shouldAutoDispatch && whatsappService.isConfigured()) {
          console.log(`[BEU Broadcaster] 🚀 Auto-dispatching Notice #${noticeId} [${notice.shortName || 'BEU'}] to WhatsApp...`);
          dispatchResult = await whatsappService.sendMessage({
            caption: whatsappCaption,
            pdfUrl: fullPdfUrl,
            title: title,
            noticeId: noticeId,
            date: noticeDate,
            isimportant: notice.isimportant,
            shortName: notice.shortName,
            district: notice.district,
            collegeName: notice.collegeName,
            isCollegeNotice: notice.isCollegeNotice
          });
        } else {
          const skipReason = isCollege 
            ? 'College notices auto-notification to WhatsApp is TURNED OFF (band hai).' 
            : 'Auto-dispatch to WhatsApp is OFF (1-Click Share mode).';
          console.log(`[BEU Broadcaster] 🛑 WhatsApp auto-dispatch skipped for #${noticeId}: ${skipReason}`);
          dispatchResult = {
            status: 'READY_TO_SHARE',
            method: 'AUTO_DISPATCH_OFF',
            reason: skipReason
          };
        }

        // 3. Save into local persistent cache
        const payload = {
          id: notice.id,
          board: title,
          title: title,
          link: notice.link || notice.pdfUrl,
          pdfUrl: fullPdfUrl,
          noticedate: noticeDate,
          date: noticeDate,
          isimportant: notice.isimportant,
          isCollegeNotice: isCollege,
          collegeName: notice.collegeName || 'Bihar Engineering University',
          shortName: notice.shortName || 'BEU PATNA',
          district: notice.district || 'PATNA',
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

        // 4. Sync to Firestore ONLY for new notices (saves quota — no writes for updates)
        if (isNew && beuRef) {
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

        // 5. Try sending FCM Push for new notice (only for BEU Central notices, skip 38 colleges spam)
        if (isNew && !isCollege && admin && admin.messaging) {
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
        const isCollege = !!(existingData.isCollegeNotice || String(noticeId).startsWith('col_') || existingData.collegeId);
        const shouldAutoRetry = isCollege
          ? (broadcastSettings.autoDispatchCollegeNotices === true)
          : (broadcastSettings.autoDispatchWhatsApp !== false);

        if (!shouldAutoRetry) {
          // Auto-dispatch is disabled; do not auto-send pending notices to WhatsApp!
          continue;
        }

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
          // No Firestore write on retry — local cache is source of truth

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
  // Auto-start WhatsApp Bot session if saved session exists (and not explicitly disabled)
  if (process.env.ENABLE_WHATSAPP_BOT !== 'false') {
    setTimeout(() => {
      whatsappBotService.start().catch(err => {
        console.warn('[WhatsApp Bot Auto-Start]:', err.message);
      });
    }, 1000);
  } else {
    console.log('[BEU Broadcaster] WhatsApp Bot auto-start is disabled via ENABLE_WHATSAPP_BOT=false.');
  }

  // Run initial sync after 6s to allow WhatsApp session to initialize
  setTimeout(() => {
    syncBeuAndBroadcast().catch(err => console.error('[BEU Broadcaster Startup Error]:', err.message));
  }, 6000);

  // Run every 2 minutes: '*/2 * * * *' for 24/7 background sync
  cron.schedule('*/2 * * * *', () => {
    console.log('[BEU Cron] Continuous 2-min 24/7 background check for new BEU notices...');
    syncBeuAndBroadcast();
  });

  console.log('✅ BEU Auto-Broadcaster Scheduled (Every 2 mins - 24/7 Server Background Sync)');
}

module.exports = {
  syncBeuAndBroadcast,
  initBeuBroadcaster,
  loadLocalNotices,
  getLastAutoCheckTime
};
