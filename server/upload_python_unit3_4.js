const admin = require('./firebaseAdmin');

async function runTasks() {
    if (!admin.apps.length) {
        console.error("Firebase Admin not initialized.");
        process.exit(1);
    }
    const db = admin.firestore();

    const cseGroup = ['CSE', 'IT', 'CSE_DS', 'CSE_AIML', 'CSE_AI', 'CSE_CYBER', 'CSE_IOT', 'CSE_NETWORKS', 'CSE_IOT_CS_BC'];

    const newNotes = [
        {
            subjectFolder: 'PYTHON',
            title: "Unit 4 List",
            url: "https://drive.google.com/file/d/10gTKjY5BjCOG2iLX7uoZfSl3wZ6Bo8Uw/view?usp=drive_link"
        },
        {
            subjectFolder: 'PYTHON',
            title: "Unit 3 String",
            url: "https://drive.google.com/file/d/1UcpipmZXRh7f91JAxEesHPibkdFZKt7D/view?usp=drive_link"
        }
    ];

    console.log("Uploading Python Unit 3 and 4 notes...");
    let count = 0;
    for (const note of newNotes) {
        for (const branch of cseGroup) {
            await db.collection('documents').add({
                category: 'NOTES',
                branch: branch,
                semester: '2',
                subjectFolder: note.subjectFolder,
                title: note.title,
                fileUrl: note.url,
                uploadDate: new Date().toISOString(),
                type: 'file'
            });
            count++;
        }
    }
    console.log(`Uploaded ${count} note instances to CSE and specializations.`);
    process.exit(0);
}

runTasks().catch(console.error);
