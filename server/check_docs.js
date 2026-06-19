const admin = require('./firebaseAdmin');

async function checkDocs() {
    if (!admin.apps.length) {
        console.error("Firebase Admin not initialized.");
        process.exit(1);
    }
    const db = admin.firestore();
    
    const docs = await db.collection('documents').where('subjectFolder', '==', 'CHEMISTRY').get();
    console.log(`Found ${docs.size} docs in CHEMISTRY folder:`);
    docs.forEach(doc => {
        console.log(doc.data().title);
    });

    const docs2 = await db.collection('documents').where('subjectFolder', '==', 'IWD').get();
    console.log(`Found ${docs2.size} docs in IWD folder`);
    process.exit(0);
}

checkDocs().catch(console.error);
