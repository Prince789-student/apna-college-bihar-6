const admin = require('./firebaseAdmin');

async function updateCounts() {
    if (!admin.apps.length) {
        console.error("Firebase Admin not initialized.");
        process.exit(1);
    }
    const db = admin.firestore();
    
    console.log("Fetching real aggregation counts from Firestore...");
    const [usersSnap, notesSnap, pyqsSnap, docsSnap] = await Promise.all([
        db.collection('users').count().get(),
        db.collection('documents').where('category', '==', 'NOTES').count().get(),
        db.collection('documents').where('category', '==', 'PYQ').count().get(),
        db.collection('documents').count().get()
    ]);
    
    const notesCount = notesSnap.data().count;
    const pyqsCount = pyqsSnap.data().count;
    const usersCount = usersSnap.data().count;
    const totalDocs = docsSnap.data().count;
    
    console.log(`Real counts: Notes=${notesCount}, PYQs=${pyqsCount}, Users=${usersCount}, TotalDocs=${totalDocs}`);
    
    await db.collection('documents').doc('unique_counts_metadata').set({
        uniqueNotesCount: notesCount,
        uniquePyqsCount: pyqsCount,
        totalUsersCount: usersCount,
        totalDocumentsCount: totalDocs,
        collegesCount: 38,
        lastUpdated: new Date()
    }, { merge: true });
    
    console.log("Updated unique_counts_metadata successfully.");
    process.exit(0);
}

updateCounts().catch(console.error);
