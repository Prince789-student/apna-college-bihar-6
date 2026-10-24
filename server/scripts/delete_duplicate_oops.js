const admin = require('../firebaseAdmin');

async function removeOops() {
    if (!admin.apps.length) {
        console.error("Firebase Admin not initialized.");
        process.exit(1);
    }
    const db = admin.firestore();
    const cseGroup = ['CSE', 'IT', 'CSE_DS', 'CSE_AIML', 'CSE_AI', 'CSE_CYBER', 'CSE_IOT', 'CSE_NETWORKS', 'CSE_IOT_CS_BC'];
    const batch = db.batch();
    let count = 0;

    for (const b of cseGroup) {
        // Delete the duplicate oops folder and notes we generated earlier
        const oopsFolderRef = db.collection('documents').doc('folder_notes_' + b.toLowerCase() + '_sem3_oops');
        batch.delete(oopsFolderRef);
        count++;

        for (let u = 1; u <= 6; u++) {
            const noteRef = db.collection('documents').doc('note_' + b.toLowerCase() + '_sem3_oops_u' + u);
            batch.delete(noteRef);
            count++;
        }
    }

    await batch.commit();
    console.log(`Successfully deleted ${count} duplicate oops items from Firestore!`);
    process.exit(0);
}

removeOops().catch(err => {
    console.error('Delete error:', err.message);
    process.exit(1);
});
