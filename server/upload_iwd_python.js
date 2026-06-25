const admin = require('./firebaseAdmin');

async function runTasks() {
    if (!admin.apps.length) {
        console.error("Firebase Admin not initialized.");
        process.exit(1);
    }
    const db = admin.firestore();

    const cseGroup = ['CSE', 'IT', 'CSE_DS', 'CSE_AIML', 'CSE_AI', 'CSE_CYBER', 'CSE_IOT', 'CSE_NETWORKS', 'CSE_IOT_CS_BC'];

    const newNotes = [
        // IWD Notes
        {
            subjectFolder: 'IWD',
            title: "Unit 2 HTML",
            url: "https://drive.google.com/file/d/1Hpts-LXtqkFITIkOD1Y1vqvRpxQtja60/view?usp=drive_link"
        },
        {
            subjectFolder: 'IWD',
            title: "Unit 3 CSS",
            url: "https://drive.google.com/file/d/1T1RYEAGEVwYuu-Fy6Makpfk0LhGnVihQ/view?usp=drive_link"
        },
        {
            subjectFolder: 'IWD',
            title: "Unit 6 Server Side Programming",
            url: "https://drive.google.com/file/d/1qmyNm36OVqy9z2FH80Lo4xrYEltEXKGQ/view?usp=drive_link"
        },
        // Python Notes
        {
            subjectFolder: 'PYTHON',
            title: "Unit 5 Dictionaries and Tuples",
            url: "https://drive.google.com/file/d/1pw5oYuOi5y-x_CY1Ab1SP4_9oZrccIqD/view?usp=drive_link"
        },
        {
            subjectFolder: 'PYTHON',
            title: "Unit 6",
            url: "https://drive.google.com/file/d/1k3QYlqDAQiGEOZyln9XYzHXXHcEhE7D9/view?usp=drive_link"
        }
    ];

    console.log("Uploading IWD and Python notes...");
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
