const admin = require('./firebaseAdmin');

async function fixDocs() {
    if (!admin.apps.length) {
        console.error("Firebase Admin not initialized.");
        process.exit(1);
    }
    const db = admin.firestore();
    
    // Fix Atomic
    const atomicDocs = await db.collection('documents').where('title', '==', 'Atomic and Molecular Structure').get();
    for (const doc of atomicDocs.docs) {
        await doc.ref.update({
            title: 'Unit 1 Atomic and molecular structure',
            subjectFolder: 'CHEMISTRY'
        });
    }
    console.log(`Fixed ${atomicDocs.size} docs for Atomic`);

    // Fix Spectroscopy
    const specDocs = await db.collection('documents').where('title', '==', 'Spectroscopy').get();
    for (const doc of specDocs.docs) {
        await doc.ref.update({
            title: 'Unit 2 Spectroscopy',
            subjectFolder: 'CHEMISTRY'
        });
    }
    console.log(`Fixed ${specDocs.size} docs for Spectroscopy`);

    process.exit(0);
}

fixDocs().catch(console.error);
