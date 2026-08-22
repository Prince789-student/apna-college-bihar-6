const admin = require('../firebaseAdmin');
const puppeteer = require('puppeteer');

async function scrapeBEUNotifications() {
    console.log('[BEU Scraper] Starting fetch process...');
    
    // Check if Firebase is initialized
    if (!admin.apps.length) {
        console.error('⚠️ Firebase is not initialized. Skipping BEU scrape. Please provide firebase-service-account.json');
        return { success: false, message: 'Firebase not initialized on server.' };
    }
    
    const db = admin.firestore();
    
    let browser = null;
    try {
        // Launch Puppeteer browser with memory-saving flags
        browser = await puppeteer.launch({
            headless: 'new',
            args: [
                '--no-sandbox', 
                '--disable-setuid-sandbox',
                '--disable-dev-shm-usage',
                '--disable-gpu',
                '--no-zygote',
                '--single-process'
            ]
        });
        const page = await browser.newPage();
        
        // Block images, CSS, and fonts to save RAM on Render Free Tier
        await page.setRequestInterception(true);
        page.on('request', (req) => {
            const resourceType = req.resourceType();
            if (resourceType === 'image' || resourceType === 'stylesheet' || resourceType === 'font' || resourceType === 'media') {
                req.abort();
            } else {
                req.continue();
            }
        });
        
        // Set user agent to avoid basic bot blocks
        await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36');
        
        console.log('[BEU Scraper] Navigating to BEU notifications page...');
        await page.goto('https://beu-bih.ac.in/notification', { waitUntil: 'networkidle2', timeout: 60000 });
        
        // Wait for the notification table/list to load
        // BEU uses Angular, so we wait for some content to be rendered
        await page.waitForSelector('.table, table, .mat-table', { timeout: 15000 }).catch(() => console.log('Timeout waiting for table, proceeding anyway'));
        
        // Extract notifications
        console.log('[BEU Scraper] Extracting notification links...');
        const notifications = await page.evaluate(() => {
            const items = [];
            
            // Try to find links that look like notices/circulars/pdfs
            document.querySelectorAll('a').forEach(a => {
                const href = a.href;
                const text = a.innerText.trim();
                
                if (href && text && (href.toLowerCase().includes('.pdf') || text.toLowerCase().includes('notice'))) {
                    // Try to find a date in the text or nearby elements (Optional depending on DOM)
                    // For now, we will use the current date if we can't parse one
                    let dateMatch = text.match(/\d{2}[-/]\d{2}[-/]\d{4}/);
                    
                    items.push({
                        title: text.replace(/\s+/g, ' ').trim(), // Clean up whitespace
                        link: href,
                        date: dateMatch ? dateMatch[0] : new Date().toLocaleDateString('en-GB') // DD/MM/YYYY
                    });
                }
            });
            return items;
        });
        
        if (notifications.length === 0) {
            console.log('[BEU Scraper] No notifications found. DOM might have changed or page was empty.');
            return { success: false, message: 'No notifications found' };
        }
        
        // Remove duplicates and clean up
        const uniqueNotifications = [];
        const seenLinks = new Set();
        for (const notif of notifications) {
            if (!seenLinks.has(notif.link) && notif.title.length > 5) {
                seenLinks.add(notif.link);
                uniqueNotifications.push(notif);
            }
        }
        
        console.log(`[BEU Scraper] Found ${uniqueNotifications.length} valid notifications.`);
        
        // Save to Firestore
        let addedCount = 0;
        const beuRef = db.collection('beu_notifications');
        
        for (const notif of uniqueNotifications) {
            // Check if it already exists to avoid duplicates
            const snapshot = await beuRef.where('link', '==', notif.link).limit(1).get();
            
            if (snapshot.empty) {
                await beuRef.add({
                    title: notif.title,
                    link: notif.link,
                    date: notif.date,
                    timestamp: admin.firestore.FieldValue.serverTimestamp(),
                    isNew: true,
                    autoSynced: true
                });
                addedCount++;
            }
        }
        
        console.log(`[BEU Scraper] Sync complete. Added ${addedCount} new notifications.`);
        return { success: true, added: addedCount, totalFound: uniqueNotifications.length };
        
    } catch (error) {
        console.error('[BEU Scraper] Error during scraping:', error);
        return { success: false, error: error.message };
    } finally {
        if (browser) {
            await browser.close();
        }
    }
}

// Allow running directly from command line for testing
if (require.main === module) {
    scrapeBEUNotifications().then(() => process.exit(0));
}

module.exports = scrapeBEUNotifications;
