const admin = require('./firebaseAdmin');

async function uploadOopsNotes() {
    if (!admin.apps.length) {
        console.error("Firebase Admin not initialized.");
        process.exit(1);
    }
    const db = admin.firestore();

    const cseGroup = [
        'CSE',
        'IT',
        'CSE_DS',
        'CSE_AIML',
        'CSE_AI',
        'CSE_CYBER',
        'CSE_IOT',
        'CSE_NETWORKS',
        'CSE_IOT_CS_BC'
    ];

    const notes = [
        {
            unit: 1,
            title: "unit 1 oop concepts and java programing",
            fileId: "1GzQFYs66MDy9QZU5NocnrMdgGRepXih4",
            url: "https://drive.google.com/file/d/1GzQFYs66MDy9QZU5NocnrMdgGRepXih4/view"
        },
        {
            unit: 2,
            title: "java unit 2 objects , classes and construction in java",
            fileId: "1sDfuLIa-X4loO4F49VEZkh80_PQrWamZ",
            url: "https://drive.google.com/file/d/1sDfuLIa-X4loO4F49VEZkh80_PQrWamZ/view?usp=sharing"
        },
        {
            unit: 3,
            title: "java unit 3 inheritance, interfaces and packages",
            fileId: "1qWe5ksdPyxbAhSs43rwZ8QXbd2QCFJ-L",
            url: "https://drive.google.com/file/d/1qWe5ksdPyxbAhSs43rwZ8QXbd2QCFJ-L/view?usp=sharing"
        },
        {
            unit: 4,
            title: "java unit 4 exception handling",
            fileId: "1C67nxpoy1TtBaokzk9hnf5dnd90J8thX",
            url: "https://drive.google.com/file/d/1C67nxpoy1TtBaokzk9hnf5dnd90J8thX/view?usp=drive_link"
        },
        {
            unit: 5,
            title: "java unit 5 introduction to multithreading",
            fileId: "1OmXaRRWB9UtmaNsXubC3GcTrXk9ncP_T",
            url: "https://drive.google.com/file/d/1OmXaRRWB9UtmaNsXubC3GcTrXk9ncP_T/view?usp=sharing"
        },
        {
            unit: 6,
            title: "java unit 6 the collection framework and connecting to database",
            fileId: "1WTQQgEE8sGLWsEMoQVS50PzaJ6YIezlU",
            url: "https://drive.google.com/file/d/1WTQQgEE8sGLWsEMoQVS50PzaJ6YIezlU/view?usp=sharing"
        }
    ];

    console.log("Starting OOPS with Java notes upload for CSE and specializations (Semester 3)...");

    for (const branch of cseGroup) {
        console.log(`\nProcessing branch: ${branch}`);

        // 1. Find or create OOPS folder for this branch
        let folderQuery = await db.collection('documents')
            .where('category', '==', 'NOTES')
            .where('branch', '==', branch)
            .where('type', '==', 'folder')
            .where('title', '==', 'OOPS USING JAVA')
            .get();

        let folderId;
        if (folderQuery.empty) {
            const newFolder = await db.collection('documents').add({
                category: 'NOTES',
                parentId: 'root',
                type: 'folder',
                verified: true,
                subject: 'OOPS USING JAVA',
                title: 'OOPS USING JAVA',
                branch: branch,
                semester: '3',
                fileUrl: '',
                createdAt: admin.firestore.FieldValue.serverTimestamp()
            });
            folderId = newFolder.id;
            console.log(`Created new folder for ${branch}: ${folderId}`);
        } else {
            folderId = folderQuery.docs[0].id;
            console.log(`Found existing folder for ${branch}: ${folderId}`);
        }

        // 2. Process each note
        for (const note of notes) {
            // Check if note already exists for this branch by fileId
            const existingQuery = await db.collection('documents')
                .where('branch', '==', branch)
                .where('category', '==', 'NOTES')
                .get();

            const match = existingQuery.docs.find(d => {
                const data = d.data();
                return data.fileUrl && data.fileUrl.includes(note.fileId);
            });

            if (match) {
                // Update title, parentId, subjectFolder to ensure accuracy
                await match.ref.update({
                    title: note.title,
                    parentId: folderId,
                    subject: 'OOPS USING JAVA',
                    subjectFolder: 'OOPS USING JAVA',
                    semester: '3',
                    fileUrl: note.url,
                    verified: true
                });
                console.log(`  Updated Unit ${note.unit} (${match.id}) -> "${note.title}"`);
            } else {
                // Add new note
                const newDoc = await db.collection('documents').add({
                    category: 'NOTES',
                    branch: branch,
                    semester: '3',
                    subject: 'OOPS USING JAVA',
                    subjectFolder: 'OOPS USING JAVA',
                    title: note.title,
                    fileUrl: note.url,
                    verified: true,
                    type: 'file',
                    parentId: folderId,
                    uploadDate: new Date().toISOString(),
                    createdAt: admin.firestore.FieldValue.serverTimestamp()
                });
                console.log(`  Added Unit ${note.unit} (${newDoc.id}) -> "${note.title}"`);
            }
        }
    }

    console.log("\nAll notes uploaded and updated successfully!");
    process.exit(0);
}

uploadOopsNotes().catch(err => {
    console.error("Error during upload:", err);
    process.exit(1);
});
