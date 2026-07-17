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

        let newNotices = [];

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
                newNotices.push(notice);
            }
        }

        if (addedCount > 0) {
            await batch.commit();
            console.log(`[BEU Scraper] Successfully added ${addedCount} new notices to Firestore.`);
            
            // Send push notifications for new notices
            try {
                const messaging = admin.messaging();
                const usersSnapshot = await db.collection('users').get();
                const tokens = [];
                
                usersSnapshot.forEach(doc => {
                    const data = doc.data();
                    if (data.fcmToken) {
                        tokens.push(data.fcmToken);
                    }
                });

                if (tokens.length > 0) {
                    for (const notice of newNotices) {
                        for (let i = 0; i < tokens.length; i += 500) {
                            const chunk = tokens.slice(i, i + 500);
                            const message = {
                                notification: {
                                    title: notice.isimportant === "1" ? '🚨 URGENT: New BEU Notice!' : '🔔 New BEU Notice Update',
                                    body: notice.board || 'A new official notice has been published by BEU. Tap to view details.'
                                },
                                data: {
                                    type: 'beu_notice',
                                    id: notice.id.toString(),
                                    link: `https://beu-bih.ac.in/backend/${notice.link || ''}`
                                },
                                tokens: chunk
                            };
                            
                            const response = await messaging.sendEachForMulticast(message);
                            console.log(`[BEU Scraper] Push sent. Success: ${response.successCount}, Failed: ${response.failureCount}`);
                        }
                    }
                }
            } catch (pushError) {
                console.error('[BEU Scraper] Error sending push notifications:', pushError.message);
            }
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
        // Add random jitter delay (0 to 5 minutes) to avoid IP ban
        const jitterMs = Math.floor(Math.random() * 5 * 60 * 1000);
        console.log(`[BEU Scraper] Scheduled to run in ${Math.round(jitterMs/1000)}s...`);
        setTimeout(() => {
            fetchAndSaveNotices();
        }, jitterMs);
    });
    
    console.log('✅ BEU Notification Scraper Scheduled (Every 30 mins with jitter)');
}

module.exports = { initScraper };
