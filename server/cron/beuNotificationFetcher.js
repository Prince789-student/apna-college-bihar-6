const admin = require('../firebaseAdmin');
const axios = require('axios');

async function scrapeBEUNotifications() {
    console.log('[BEU Scraper] Starting fetch process via API...');
    
    // Check if Firebase is initialized
    if (!admin.apps.length) {
        console.error('⚠️ Firebase is not initialized. Skipping BEU scrape.');
        return { success: false, message: 'Firebase not initialized on server.' };
    }
    
    const db = admin.firestore();
    
    try {
        console.log('[BEU Scraper] Fetching from BEU API...');
        // BEU API endpoint for notice board
        const response = await axios.get('https://beu-bih.ac.in/backend/v1/notice/get-notice-board');

        const notifications = response.data;

        if (!Array.isArray(notifications) || notifications.length === 0) {
            console.log('[BEU Scraper] No notifications found in API response.');
            return { success: false, message: 'No notifications found' };
        }
        
        console.log(`[BEU Scraper] Found ${notifications.length} valid notifications in API.`);
        
        // Save to Firestore (only latest 30 to avoid timeout on Render)
        let addedCount = 0;
        const beuRef = db.collection('beu_notifications');
        
        const recentNotifs = notifications.slice(0, 30);
        
        // Process concurrently for speed
        const processNotification = async (notif) => {
            // Construct the full PDF link
            const fullLink = notif.link ? `https://beu-bih.ac.in/backend/${notif.link.trim()}` : '';
            if (!fullLink) return 0;

            const title = notif.board ? notif.board.trim() : 'BEU Notice';
            
            // Convert 'YYYY-MM-DD' to 'DD/MM/YYYY' for consistency with previous format
            let displayDate = new Date().toLocaleDateString('en-GB');
            if (notif.noticedate) {
                const parts = notif.noticedate.split('-');
                if (parts.length === 3) {
                    displayDate = `${parts[2]}/${parts[1]}/${parts[0]}`;
                }
            }

            // Check if it already exists to avoid duplicates
            const snapshot = await beuRef.where('link', '==', fullLink).limit(1).get();
            
            if (snapshot.empty) {
                await beuRef.add({
                    title: title,
                    link: fullLink,
                    date: displayDate,
                    timestamp: admin.firestore.FieldValue.serverTimestamp(),
                    isNew: true,
                    autoSynced: true
                });
                return 1;
            }
            return 0;
        };

        const promises = recentNotifs.map(notif => processNotification(notif));
        const results = await Promise.all(promises);
        addedCount = results.reduce((a, b) => a + b, 0);
        
        console.log(`[BEU Scraper] Sync complete. Added ${addedCount} new notifications.`);
        return { success: true, added: addedCount, totalFound: notifications.length };
        
    } catch (error) {
        console.error('[BEU Scraper] Error during API fetch:', error.message);
        return { success: false, error: error.message };
    }
}

// Allow running directly from command line for testing
if (require.main === module) {
    scrapeBEUNotifications().then(() => process.exit(0));
}

module.exports = scrapeBEUNotifications;
