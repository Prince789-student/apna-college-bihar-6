const admin = require('./firebaseAdmin');

async function fixPythonFolder() {
    if (!admin.apps.length) {
        console.error("Firebase Admin not initialized.");
        process.exit(1);
    }
    const db = admin.firestore();

    const titlesToFix = [
        "unit 1 input and output",
        "unit 2 control flow statement function's and loop"
    ];

    let count = 0;
    for (const t of titlesToFix) {
        const query = await db.collection('documents').where('title', '==', t).get();
        for (const doc of query.docs) {
            // Remove parentId so fix_folders.js can pick it up again
            await doc.ref.update({ 
                subjectFolder: 'PYTHON',
                parentId: admin.firestore.FieldValue.delete() 
            });
            count++;
        }
    }

    console.log(`Successfully updated subjectFolder to PYTHON for ${count} documents.`);
    process.exit(0);
}

fixPythonFolder().catch(console.error);
