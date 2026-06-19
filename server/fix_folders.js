const admin = require('./firebaseAdmin');

async function fixFolders() {
    if (!admin.apps.length) {
        console.error("Firebase Admin not initialized.");
        process.exit(1);
    }
    const db = admin.firestore();
    
    // Find all files that have a subjectFolder but no parentId (or parentId == 'root')
    const filesQuery = await db.collection('documents')
        .where('type', '==', 'file')
        .get();
        
    let count = 0;

    for (const doc of filesQuery.docs) {
        const data = doc.data();
        
        // If it has a subjectFolder and is either loose or has parentId root
        if (data.subjectFolder && (!data.parentId || data.parentId === 'root')) {
            const folderTitle = data.subjectFolder;
            const branch = data.branch;
            const semester = String(data.semester);
            const category = data.category || 'NOTES';

            if (!branch || !semester) continue; // safety check

            // Look for existing folder
            const folderQuery = await db.collection('documents')
                .where('type', '==', 'folder')
                .where('title', '==', folderTitle)
                .where('branch', '==', branch)
                .where('semester', '==', semester)
                .where('category', '==', category)
                .get();
                
            let folderId;
            if (folderQuery.empty) {
                // Create the folder
                const newFolderRef = await db.collection('documents').add({
                    type: 'folder',
                    title: folderTitle,
                    branch: branch,
                    semester: semester,
                    category: category,
                    createdAt: new Date().toISOString()
                });
                folderId = newFolderRef.id;
                console.log(`Created new folder '${folderTitle}' for ${branch} Sem ${semester}`);
            } else {
                folderId = folderQuery.docs[0].id;
            }

            // Move the file into this folder
            await doc.ref.update({
                parentId: folderId
            });
            count++;
        }
    }

    console.log(`Successfully moved ${count} files into their respective folders.`);
    process.exit(0);
}

fixFolders().catch(console.error);
