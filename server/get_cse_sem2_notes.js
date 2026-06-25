const admin = require('./firebaseAdmin');

async function getNotes() {
    if (!admin.apps.length) {
        console.error("Firebase Admin not initialized.");
        process.exit(1);
    }
    const db = admin.firestore();

    const query = await db.collection('documents')
        .where('category', '==', 'NOTES')
        .where('branch', '==', 'CSE')
        .where('semester', '==', '2')
        .where('type', '==', 'file')
        .get();

    const notes = {};

    query.docs.forEach(doc => {
        const data = doc.data();
        const subject = data.subjectFolder || 'General';
        if (!notes[subject]) {
            notes[subject] = [];
        }
        notes[subject].push({
            title: data.title,
            url: data.fileUrl
        });
    });

    // Sort subjects and their notes
    const result = {};
    Object.keys(notes).sort().forEach(sub => {
        result[sub] = notes[sub].sort((a, b) => a.title.localeCompare(b.title));
    });

    console.log(JSON.stringify(result, null, 2));
    process.exit(0);
}

getNotes().catch(console.error);
