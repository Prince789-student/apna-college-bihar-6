const admin = require('../firebaseAdmin');

async function inspectNotes() {
    const db = admin.firestore();
    const snap = await db.collection('documents').where('category', '==', 'NOTES').get();
    console.log('Total NOTES docs:', snap.size);
    const bySem = {};
    snap.docs.forEach(d => {
        const data = d.data();
        const sem = String(data.semester || 'none');
        if (!bySem[sem]) bySem[sem] = [];
        bySem[sem].push({
            id: d.id,
            title: data.title,
            branch: data.branch,
            type: data.type,
            subject: data.subject,
            subjectFolder: data.subjectFolder,
            parentId: data.parentId,
            fileUrl: data.fileUrl
        });
    });

    for (const [s, items] of Object.entries(bySem)) {
        console.log(`\n================ Semester ${s}: ${items.length} items ================`);
        const folders = items.filter(x => x.type === 'folder');
        console.log(`  Folders (${folders.length}):`, [...new Set(folders.map(f => f.title))]);
        const files = items.filter(x => x.type !== 'folder');
        console.log(`  Files count: ${files.length}`);
        const subjects = [...new Set(files.map(f => f.subject || f.subjectFolder || 'Unknown'))];
        console.log(`  Distinct subjects in files:`, subjects);
        console.log(`  Sample files:`);
        files.slice(0, 10).forEach(f => {
            console.log(`    - [${f.branch}] [${f.subject}] "${f.title}" (${f.fileUrl})`);
        });
    }
    process.exit(0);
}

inspectNotes().catch(err => {
    console.error(err);
    process.exit(1);
});
