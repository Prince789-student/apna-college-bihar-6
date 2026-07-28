const admin = require('./firebaseAdmin');

async function updateLink() {
    if (!admin.apps.length) {
        console.error("Firebase Admin not initialized.");
        process.exit(1);
    }
    const db = admin.firestore();

    const newUrl = "https://drive.google.com/file/d/1inVZ2GMQJyI0Nnrt6YDaOIOxmUVt3iWE/view?usp=drive_link";
    const targetTitle = "Unit 6 Advance Java Script";

    const query = await db.collection('documents')
        .where('subjectFolder', '==', 'IWD')
        .where('title', '==', targetTitle)
        .get();

    let count = 0;
    for (const doc of query.docs) {
        await doc.ref.update({ fileUrl: newUrl });
        count++;
    }

    console.log(`Successfully updated URL for ${count} documents of '${targetTitle}'.`);
    
    if (count === 0) {
        console.log("No documents found with the exact title. You might need to add it as a new note instead.");
    }
    process.exit(0);
}

updateLink().catch(console.error);
