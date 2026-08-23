const admin = require('./firebaseAdmin');

async function checkCount() {
    if (!admin.apps.length) {
        console.log('Firebase not initialized.');
        process.exit(1);
    }
    const db = admin.firestore();
    const snapshot = await db.collection('beu_notifications').count().get();
    console.log(`Total notifications in database: ${snapshot.data().count}`);
    process.exit(0);
}
checkCount();
