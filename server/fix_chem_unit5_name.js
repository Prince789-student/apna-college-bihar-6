const admin = require('./firebaseAdmin');

async function fixName() {
    if (!admin.apps.length) {
        console.error("Firebase Admin not initialized.");
        process.exit(1);
    }
    const db = admin.firestore();

    const query = await db.collection('documents')
        .where('subjectFolder', '==', 'CHEMISTRY')
        .where('title', '==', 'Unit 5')
        .get();

    let count = 0;
    for (const doc of query.docs) {
        await doc.ref.update({ title: 'Unit 5 Polymer' });
        count++;
    }

    console.log(`Successfully updated ${count} documents to 'Unit 5 Polymer'.`);
    process.exit(0);
}

fixName().catch(console.error);
