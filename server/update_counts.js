const admin = require('./firebaseAdmin');

async function updateCounts() {
    if (!admin.apps.length) {
        console.error("Firebase Admin not initialized.");
        process.exit(1);
    }
    const db = admin.firestore();
    
    console.log("Computing deduplicated unique file counts across branches...");
    const [docsSnap, usersSnap] = await Promise.all([
        db.collection('documents').where('type', '==', 'file').select('category', 'fileUrl').get(),
        db.collection('users').count().get()
    ]);
    
    const notesUrls = new Set();
    const pyqsUrls = new Set();
    
    docsSnap.forEach(doc => {
        const data = doc.data();
        if (data.fileUrl) {
            if (data.category === 'NOTES') {
                notesUrls.add(data.fileUrl.trim());
            } else if (data.category === 'PYQ') {
                pyqsUrls.add(data.fileUrl.trim());
            }
        }
    });
    
    const usersCount = (usersSnap && usersSnap.data) ? usersSnap.data().count : 272;
    
    console.log(`Deduplicated: Unique Notes=${notesUrls.size}, Unique PYQs=${pyqsUrls.size}, Total Users=${usersCount}`);
    
    await db.collection('documents').doc('unique_counts_metadata').set({
        uniqueNotesCount: notesUrls.size,
        uniquePyqsCount: pyqsUrls.size,
        totalUsersCount: usersCount,
        collegesCount: 38,
        lastUpdated: new Date()
    }, { merge: true });
    
    console.log("Updated unique_counts_metadata successfully.");
    process.exit(0);
}

updateCounts().catch(console.error);
