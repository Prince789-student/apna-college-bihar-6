const admin = require('./firebaseAdmin');

async function updateOrAddUnit4() {
    if (!admin.apps.length) {
        console.error("Firebase Admin not initialized.");
        process.exit(1);
    }
    const db = admin.firestore();

    const newUrl = "https://drive.google.com/file/d/1AqQAF4hZV1DcsNWYMr1z9FH8fdjEAAY2/view?usp=drive_link";
    const targetTitle = "Unit 4 Introduction to css styling and layout";

    // Check if it already exists
    const query = await db.collection('documents')
        .where('subjectFolder', '==', 'IWD')
        .get();

    let found = false;
    let count = 0;
    
    // Some documents might just have "Unit 4" in the title, let's look for them
    for (const doc of query.docs) {
        const data = doc.data();
        if (data.title && data.title.toLowerCase().includes('unit 4')) {
            await doc.ref.update({ 
                title: targetTitle,
                fileUrl: newUrl 
            });
            count++;
            found = true;
        }
    }

    if (found) {
        console.log(`Successfully updated URL for ${count} existing Unit 4 documents.`);
    } else {
        console.log("No existing Unit 4 found. We need to add it to all branches that have IWD.");
        // Normally, IWD is in CSE and specializations semester 2
        // Find existing branches and semesters that have IWD
        const uniqueCombinations = new Set();
        for (const doc of query.docs) {
            const data = doc.data();
            uniqueCombinations.add(`${data.branch}_${data.semester}`);
        }
        
        for (const combo of uniqueCombinations) {
            const [branch, semester] = combo.split('_');
            await db.collection('documents').add({
                title: targetTitle,
                subjectFolder: 'IWD',
                fileUrl: newUrl,
                type: 'pdf',
                branch: branch,
                semester: semester,
                timestamp: admin.firestore.FieldValue.serverTimestamp(),
                downloads: 0
            });
            console.log(`Added Unit 4 for ${branch} sem ${semester}`);
        }
    }
    process.exit(0);
}

updateOrAddUnit4().catch(console.error);
