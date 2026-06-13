const axios = require('axios');
const cron = require('node-cron');
const admin = require('../firebaseAdmin');

const BEU_API_URL = 'https://beu-bih.ac.in/backend/v1/notice/get-notice-board';

async function fetchAndSaveNotices() {
    console.log('[BEU Scraper] Fetching latest notifications...');
    try {
        const response = await axios.get(BEU_API_URL);
        const notices = response.data;
        
        if (!Array.isArray(notices)) {
            console.error('[BEU Scraper] Invalid response format');
            return;
        }

        // Make sure Firebase is initialized properly
        if (!admin.apps || admin.apps.length === 0) {
            console.warn('[BEU Scraper] Firebase Admin not initialized. Skipping.');
            return;
        }

        const db = admin.firestore();
        const batch = db.batch();
        let addedCount = 0;

        // Process only the latest 20 notices to save writes
        const latestNotices = notices.slice(0, 20);

        for (const notice of latestNotices) {
            const docRef = db.collection('beu_notifications').doc(notice.id.toString());
            
            // Check if exists
            const docSnap = await docRef.get();
            if (!docSnap.exists) {
                batch.set(docRef, {
                    id: notice.id,
                    board: notice.board,
                    isimportant: notice.isimportant,
                    noticedate: notice.noticedate,
                    link: notice.link,
                    createdAt: admin.firestore.FieldValue.serverTimestamp(),
                    // Save standard pdf link directly
                    pdfUrl: `https://beu-bih.ac.in/backend/${encodeURIComponent(notice.link)}`
                });
                addedCount++;
            }
        }

        if (addedCount > 0) {
            await batch.commit();
            console.log(`[BEU Scraper] Successfully added ${addedCount} new notices to Firestore.`);
        } else {
            console.log('[BEU Scraper] No new notices found.');
        }

    } catch (error) {
        console.error('[BEU Scraper] Error fetching notifications:', error.message);
    }
}

function initScraper() {
    // Run immediately on startup
    fetchAndSaveNotices();

    // Schedule to run every 30 minutes
    cron.schedule('*/30 * * * *', () => {
        fetchAndSaveNotices();
    });
    
    console.log('✅ BEU Notification Scraper Scheduled (Every 30 mins)');
}

module.exports = { initScraper };
