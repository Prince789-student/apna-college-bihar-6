const admin = require('./firebaseAdmin');

async function checkDocs() {
    if (!admin.apps.length) {
        console.error("Firebase Admin not initialized.");
        process.exit(1);
    }
    const db = admin.firestore();
    
    // Find all notes mentioning 'Atomic'
    const docs = await db.collection('documents').get();
    docs.forEach(doc => {
        const title = doc.data().title;
        if (title && (title.includes('Atomic') || title.includes('Spectroscopy'))) {
            console.log("Title:", title);
            console.log("Folder:", doc.data().subjectFolder);
        }
    });

    process.exit(0);
}

checkDocs().catch(console.error);
