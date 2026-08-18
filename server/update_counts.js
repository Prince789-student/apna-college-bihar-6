const admin = require('./firebaseAdmin');

async function updateCounts() {
    if (!admin.apps.length) {
        console.error("Firebase Admin not initialized.");
        process.exit(1);
    }
    const db = admin.firestore();
    
    console.log("Fetching all documents...");
    const snapshot = await db.collection('documents').get();
    
    const notesUrls = new Set();
    const pyqsUrls = new Set();
    
    snapshot.forEach(doc => {
        const data = doc.data();
        if (data.type === 'file' && data.fileUrl) {
            if (data.category === 'NOTES') {
                notesUrls.add(data.fileUrl);
            } else if (data.category === 'PYQ') {
                pyqsUrls.add(data.fileUrl);
            }
        }
    });
    
    console.log(`Found ${notesUrls.size} unique notes and ${pyqsUrls.size} unique PYQs.`);
    
    await db.collection('documents').doc('unique_counts_metadata').set({
        uniqueNotesCount: notesUrls.size,
        uniquePyqsCount: pyqsUrls.size,
        lastUpdated: new Date()
    }, { merge: true });
    
    console.log("Updated unique_counts_metadata successfully.");
    process.exit(0);
}

updateCounts().catch(console.error);
