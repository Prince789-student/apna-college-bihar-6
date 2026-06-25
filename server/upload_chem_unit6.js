const admin = require('./firebaseAdmin');

async function runTasks() {
    if (!admin.apps.length) {
        console.error("Firebase Admin not initialized.");
        process.exit(1);
    }
    const db = admin.firestore();

    const groupA = ['CIVIL', 'ME', 'MINING', 'CHEMICAL', 'BIOMEDICAL', 'FOOD', 'AERONAUTICAL', 'ROBOTICS', 'FIRE', 'MECHATRONICS', 'CIVIL_CA'];
    const groupB = ['CSE', 'EE', 'ECE', 'EEE', 'IT', 'CSE_DS', 'CSE_AIML', 'CSE_AI', 'CSE_CYBER', 'CSE_IOT', 'CSE_NETWORKS', 'ECE_VLSI', 'CSE_IOT_CS_BC'];

    const note = {
        title: "Unit 6 Organic reaction and synthesis of drug molecules",
        url: "https://drive.google.com/file/d/1cZe11yEHn2uyKj8T2oLRVjV7cHBsvJWB/view?usp=drive_link"
    };

    console.log("Uploading Chemistry Unit 6 note...");
    let count = 0;
    
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
        count++;
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
        count++;
    }

    console.log(`Uploaded ${count} note instances to Chemistry.`);
    process.exit(0);
}

runTasks().catch(console.error);
