const admin = require('./firebaseAdmin');

async function runTasks() {
    if (!admin.apps.length) {
        console.error("Firebase Admin not initialized.");
        process.exit(1);
    }
    const db = admin.firestore();
    
    // TASK 1 & 2: Rename existing Chemistry notes
    console.log("Renaming existing Chemistry notes...");
    const chemQuery1 = await db.collection('documents')
        .where('category', '==', 'NOTES')
        .where('subjectFolder', '==', 'CHEMISTRY')
        .where('title', '==', 'Atomic and Molecular Structure')
        .get();
        
    for (const doc of chemQuery1.docs) {
        await doc.ref.update({ title: 'Unit 1 Atomic and molecular structure' });
    }
    console.log(`Renamed ${chemQuery1.size} copies of Atomic and Molecular Structure.`);

    const chemQuery2 = await db.collection('documents')
        .where('category', '==', 'NOTES')
        .where('subjectFolder', '==', 'CHEMISTRY')
        .where('title', '==', 'Spectroscopy')
        .get();
        
    for (const doc of chemQuery2.docs) {
        await doc.ref.update({ title: 'Unit 2 Spectroscopy' });
    }
    console.log(`Renamed ${chemQuery2.size} copies of Spectroscopy.`);

    // TASK 3 & 4: Upload new Chemistry notes
    const groupA = ['CIVIL', 'ME', 'MINING', 'CHEMICAL', 'BIOMEDICAL', 'FOOD', 'AERONAUTICAL', 'ROBOTICS', 'FIRE', 'MECHATRONICS', 'CIVIL_CA'];
    const groupB = ['CSE', 'EE', 'ECE', 'EEE', 'IT', 'CSE_DS', 'CSE_AIML', 'CSE_AI', 'CSE_CYBER', 'CSE_IOT', 'CSE_NETWORKS', 'ECE_VLSI', 'CSE_IOT_CS_BC'];

    const newChemNotes = [
        {
            title: "Unit 3 Electrochemistry and fuels",
            url: "https://drive.google.com/file/d/1kLeSGefW4rApgrWmfAO4hg2ASuOU9k7e/view?usp=drive_link"
        },
        {
            title: "Unit 4 Water Chemistry",
            url: "https://drive.google.com/file/d/1y40qjJfWX1SEtBzrcfJyE3YOZXJV96Nl/view?usp=drive_link"
        }
    ];

    console.log("Uploading new Chemistry notes...");
    for (const note of newChemNotes) {
        // Upload for Group A (Semester 1)
        for (const branch of groupA) {
            await db.collection('documents').add({
                category: 'NOTES',
                branch: branch,
                semester: '1',
                subjectFolder: 'CHEMISTRY',
                title: note.title,
                fileUrl: note.url,
                uploadDate: new Date().toISOString(),
                type: 'file'
            });
        }
        // Upload for Group B (Semester 2)
        for (const branch of groupB) {
            await db.collection('documents').add({
                category: 'NOTES',
                branch: branch,
                semester: '2',
                subjectFolder: 'CHEMISTRY',
                title: note.title,
                fileUrl: note.url,
                uploadDate: new Date().toISOString(),
                type: 'file'
            });
        }
    }
    console.log("Uploaded new Chemistry notes.");

    // TASK 5: Upload IWD notes
    const cseGroup = ['CSE', 'IT', 'CSE_DS', 'CSE_AIML', 'CSE_AI', 'CSE_CYBER', 'CSE_IOT', 'CSE_NETWORKS', 'CSE_IOT_CS_BC'];
    const iwdNote = {
        title: "Unit 1 Fundamental of Internet and Web Technologies",
        url: "https://drive.google.com/file/d/1BMIhh_LP_pE9Jp2QCk2KUUnNsZgS6k-g/view?usp=drive_link"
    };

    console.log("Uploading IWD note...");
    for (const branch of cseGroup) {
        await db.collection('documents').add({
            category: 'NOTES',
            branch: branch,
            semester: '2',
            subjectFolder: 'IWD',
            title: iwdNote.title,
            fileUrl: iwdNote.url,
            uploadDate: new Date().toISOString(),
            type: 'file'
        });
    }
    console.log("Uploaded IWD note to CSE and specializations.");

    console.log("All tasks completed successfully.");
    process.exit(0);
}

runTasks().catch(console.error);
