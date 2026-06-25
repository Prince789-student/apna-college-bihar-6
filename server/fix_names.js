const admin = require('./firebaseAdmin');

async function fixTitles() {
    if (!admin.apps.length) {
        console.error("Firebase Admin not initialized.");
        process.exit(1);
    }
    const db = admin.firestore();

    const updates = [
        {
            url: "https://drive.google.com/file/d/1Hpts-LXtqkFITIkOD1Y1vqvRpxQtja60/view?usp=drive_link",
            title: "Unit 2 HTML Introduction"
        },
        {
            url: "https://drive.google.com/file/d/1T1RYEAGEVwYuu-Fy6Makpfk0LhGnVihQ/view?usp=drive_link",
            title: "Unit 3 HTML Form and Multimedia Integration"
        },
        {
            url: "https://drive.google.com/file/d/1qmyNm36OVqy9z2FH80Lo4xrYEltEXKGQ/view?usp=drive_link",
            title: "Unit 6 Advance Java Script"
        },
        {
            url: "https://drive.google.com/file/d/1pw5oYuOi5y-x_CY1Ab1SP4_9oZrccIqD/view?usp=drive_link",
            title: "Unit 5 Dictionaries Tupples and Set"
        },
        {
            url: "https://drive.google.com/file/d/1k3QYlqDAQiGEOZyln9XYzHXXHcEhE7D9/view?usp=drive_link",
            title: "Unit 6 Files"
        }
    ];

    let count = 0;
    for (const item of updates) {
        const query = await db.collection('documents').where('fileUrl', '==', item.url).get();
        for (const doc of query.docs) {
            await doc.ref.update({ title: item.title });
            count++;
        }
    }

    console.log(`Successfully updated ${count} document titles.`);
    process.exit(0);
}

fixTitles().catch(console.error);
