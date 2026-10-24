const admin = require('../firebaseAdmin');

async function cleanupOldSem1() {
    if (!admin.apps.length) {
        console.error("Firebase Admin not initialized.");
        process.exit(1);
    }
    const db = admin.firestore();

    console.log("Checking Firestore for legacy 1st Semester notes...");
    try {
        const snap = await db.collection('documents')
            .where('category', '==', 'NOTES')
            .where('semester', '==', '1')
            .get();

        console.log(`Found ${snap.size} total docs in Semester 1.`);
        let deletedCount = 0;
        const batch = db.batch();

        snap.docs.forEach(docSnap => {
            const id = docSnap.id;
            // If it is NOT one of our newly uploaded deterministic IDs:
            if (!id.startsWith('folder_notes_') && !id.startsWith('note_')) {
                batch.delete(docSnap.ref);
                deletedCount++;
            }
        });

        if (deletedCount > 0) {
            await batch.commit();
            console.log(`Successfully deleted ${deletedCount} old legacy Semester 1 notes!`);
        } else {
            console.log("No legacy Semester 1 notes found to delete.");
        }
    } catch (err) {
        console.error("Error during cleanup (may be quota-limited if reads not reset):", err.message);
    }
    process.exit(0);
}

cleanupOldSem1();
