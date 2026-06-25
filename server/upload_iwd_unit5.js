const admin = require('./firebaseAdmin');

async function runTasks() {
    if (!admin.apps.length) {
        console.error("Firebase Admin not initialized.");
        process.exit(1);
    }
    const db = admin.firestore();

    const cseGroup = ['CSE', 'IT', 'CSE_DS', 'CSE_AIML', 'CSE_AI', 'CSE_CYBER', 'CSE_IOT', 'CSE_NETWORKS', 'CSE_IOT_CS_BC'];

    const newNote = {
        subjectFolder: 'IWD',
        title: "Unit 5 Introduction to Java Script",
        url: "https://drive.google.com/file/d/1iBc6gNrRWskgDdoJFHeM1Rj98hlyrypI/view?usp=drive_link"
    };

    console.log("Uploading IWD Unit 5 note...");
    let count = 0;
    for (const branch of cseGroup) {
        await db.collection('documents').add({
            category: 'NOTES',
            branch: branch,
            semester: '2',
            subjectFolder: newNote.subjectFolder,
            title: newNote.title,
            fileUrl: newNote.url,
            uploadDate: new Date().toISOString(),
            type: 'file'
        });
        count++;
    }
    
    console.log(`Uploaded ${count} note instances to CSE and specializations.`);
    process.exit(0);
}

runTasks().catch(console.error);
