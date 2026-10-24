const admin = require('../firebaseAdmin');
const fs = require('fs');
const path = require('path');

const CSE_GROUP = [
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

const GROUP_B = [
    'EE',
    'EEE',
    'ECE',
    'ECE_VLSI'
];

const GROUP_C = [
    'CIVIL',
    'CIVIL_CA',
    'ME',
    'MINING',
    'CHEMICAL',
    'BIOMEDICAL',
    'FOOD',
    'AERONAUTICAL',
    'ROBOTICS',
    'FIRE',
    'MECHATRONICS'
];

// All branches for 1st sem AI
const ALL_SEM1_BRANCHES = [...new Set([...CSE_GROUP, ...GROUP_B, ...GROUP_C])];
const PHYSICS_BRANCHES = [...new Set([...CSE_GROUP, ...GROUP_B])];
const CHEMISTRY_BRANCHES = [...new Set(GROUP_C)];

// Content specifications from Google Drive
const DIGITAL_ELECTRONICS_NOTES = [
    {
        unit: 1,
        title: "Unit 1: Fundamentals of Digital Systems and Logic Families",
        fileId: "1vMX4dDaFx1xUwJw2NpYs-tiLHZpuv0qC",
        url: "https://drive.google.com/file/d/1vMX4dDaFx1xUwJw2NpYs-tiLHZpuv0qC/view"
    },
    {
        unit: 2,
        title: "Unit 2: Combinational and Digital Circuits",
        fileId: "1QzsPZFUno-1vmwGS2wMI0pQokeChotkw",
        url: "https://drive.google.com/file/d/1QzsPZFUno-1vmwGS2wMI0pQokeChotkw/view"
    },
    {
        unit: 3,
        title: "Unit 3: Sequential Circuit and System",
        fileId: "1JsLWK8DF2TDOtoFgf8L6WyFMHzt0LOsH",
        url: "https://drive.google.com/file/d/1JsLWK8DF2TDOtoFgf8L6WyFMHzt0LOsH/view"
    },
    {
        unit: 4,
        title: "Unit 4: A/D and D/A Converters",
        fileId: "1UB3LfAfPaUqduh4DUMgEppD213iEj8Yx",
        url: "https://drive.google.com/file/d/1UB3LfAfPaUqduh4DUMgEppD213iEj8Yx/view"
    },
    {
        unit: 5,
        title: "Unit 5: Semiconductor Memories",
        fileId: "1uLKI5k9--PJOWYQQZzgzfiLePwVP4p3i",
        url: "https://drive.google.com/file/d/1uLKI5k9--PJOWYQQZzgzfiLePwVP4p3i/view"
    },
    {
        unit: 6,
        title: "Unit 6: Programmable Logic Devices",
        fileId: "1Fp7YIYHW_XgG1NBbBE82yUZZvrkLf1uv",
        url: "https://drive.google.com/file/d/1Fp7YIYHW_XgG1NBbBE82yUZZvrkLf1uv/view"
    }
];

const PHYSICS_NOTES = [
    {
        unit: 1,
        title: "Unit 1: Wave Optics",
        fileId: "1abdecj6J-hn1Iv4TxXeH__yplT3kp5Xv",
        url: "https://drive.google.com/file/d/1abdecj6J-hn1Iv4TxXeH__yplT3kp5Xv/view"
    },
    {
        unit: 2,
        title: "Unit 2: Laser and Optical Fiber",
        fileId: "1cqBu7wmuskQPJLbcUpwMOroFRNZUgEHU",
        url: "https://drive.google.com/file/d/1cqBu7wmuskQPJLbcUpwMOroFRNZUgEHU/view"
    },
    {
        unit: 3,
        title: "Unit 3: Electromagnetism & Propagation of Waves",
        fileId: "160YAuRaVfFC51REA9QVMCy7Zrt738gm_",
        url: "https://drive.google.com/file/d/160YAuRaVfFC51REA9QVMCy7Zrt738gm_/view"
    },
    {
        unit: 4,
        title: "Unit 4: Electromagnetic & Propagation of Waves (Advanced)",
        fileId: "1iPl5TrucoUhZhUdQsiEcQhWc8POjZGTc",
        url: "https://drive.google.com/file/d/1iPl5TrucoUhZhUdQsiEcQhWc8POjZGTc/view"
    },
    {
        unit: 5,
        title: "Unit 5: Semiconductor and Nano Material",
        fileId: "1kj45CzjKjXaReR7w92eGKihJRiQqPh2q",
        url: "https://drive.google.com/file/d/1kj45CzjKjXaReR7w92eGKihJRiQqPh2q/view"
    },
    {
        unit: "questions",
        title: "Most Important Physics Questions & Solutions",
        fileId: "12IH4Nr007J9KwdxYwQrKC75xf_yDFzzb",
        url: "https://drive.google.com/file/d/12IH4Nr007J9KwdxYwQrKC75xf_yDFzzb/view"
    }
];

const CHEMISTRY_NOTES = [
    {
        unit: 1,
        title: "Unit 1: Quantum Mechanics & Molecular Structure",
        fileId: "1rvy8N8GxeBTWulvmOB7DElP0VncoSzEH",
        url: "https://drive.google.com/file/d/1rvy8N8GxeBTWulvmOB7DElP0VncoSzEH/view"
    },
    {
        unit: 2,
        title: "Unit 2: Spectroscopy & Smart Materials",
        fileId: "1dPzA9t8Hhi2no7XJC16fS8A9Ph8Zw9Jb",
        url: "https://drive.google.com/file/d/1dPzA9t8Hhi2no7XJC16fS8A9Ph8Zw9Jb/view"
    },
    {
        unit: 3,
        title: "Unit 3: Industrial Polymer & Advance Material",
        fileId: "1AQS87dG76_z-zyohaQqrApyn2h0gR9Vd",
        url: "https://drive.google.com/file/d/1AQS87dG76_z-zyohaQqrApyn2h0gR9Vd/view"
    },
    {
        unit: 4,
        title: "Unit 4: Electrochemistry, Corrosion & Colloidal",
        fileId: "1Ertbuf_-3PidiWvqbdwAXtx5SNc5SymV",
        url: "https://drive.google.com/file/d/1Ertbuf_-3PidiWvqbdwAXtx5SNc5SymV/view"
    }
];

const AI_NOTES = [
    {
        unit: 1,
        title: "Unit 1: Introduction to Artificial Intelligence",
        fileId: "1O4Tg25H9PVpT1tM3rO3hOeSCBOu5jtl6",
        url: "https://drive.google.com/file/d/1O4Tg25H9PVpT1tM3rO3hOeSCBOu5jtl6/view"
    },
    {
        unit: 2,
        title: "Unit 2: Problem Solving by Search",
        fileId: "16zzLFJt2yF6zyVSkedTyizW7QWYH7R7d",
        url: "https://drive.google.com/file/d/16zzLFJt2yF6zyVSkedTyizW7QWYH7R7d/view"
    },
    {
        unit: 3,
        title: "Unit 3: Knowledge Representation and Reasoning",
        fileId: "1VmTHmc3xHFJIJokeG5MmUTzksyPKodeR",
        url: "https://drive.google.com/file/d/1VmTHmc3xHFJIJokeG5MmUTzksyPKodeR/view"
    },
    {
        unit: 4,
        title: "Unit 4: Reasoning Under Uncertainty",
        fileId: "1KMtcjt2YabU7lfbRR9ChtmDQwq4hQxGE",
        url: "https://drive.google.com/file/d/1KMtcjt2YabU7lfbRR9ChtmDQwq4hQxGE/view"
    },
    {
        unit: 5,
        title: "Unit 5: Introduction to Machine Learning & AI Applications",
        fileId: "1Mr8-VCZ_EtQGwOqjWUey3tKt-v0GfQds",
        url: "https://drive.google.com/file/d/1Mr8-VCZ_EtQGwOqjWUey3tKt-v0GfQds/view"
    }
];

// OOPS notes for CSE 3rd sem (to keep existing 3rd sem complete)
const OOPS_NOTES = [
    {
        unit: 1,
        title: "Unit 1: OOP Concepts & Java Programming",
        fileId: "1GzQFYs66MDy9QZU5NocnrMdgGRepXih4",
        url: "https://drive.google.com/file/d/1GzQFYs66MDy9QZU5NocnrMdgGRepXih4/view"
    },
    {
        unit: 2,
        title: "Unit 2: Objects, Classes and Construction in Java",
        fileId: "1sDfuLIa-X4loO4F49VEZkh80_PQrWamZ",
        url: "https://drive.google.com/file/d/1sDfuLIa-X4loO4F49VEZkh80_PQrWamZ/view?usp=sharing"
    },
    {
        unit: 3,
        title: "Unit 3: Inheritance, Interfaces and Packages",
        fileId: "1qWe5ksdPyxbAhSs43rwZ8QXbd2QCFJ-L",
        url: "https://drive.google.com/file/d/1qWe5ksdPyxbAhSs43rwZ8QXbd2QCFJ-L/view?usp=sharing"
    },
    {
        unit: 4,
        title: "Unit 4: Exception Handling",
        fileId: "1C67nxpoy1TtBaokzk9hnf5dnd90J8thX",
        url: "https://drive.google.com/file/d/1C67nxpoy1TtBaokzk9hnf5dnd90J8thX/view?usp=drive_link"
    },
    {
        unit: 5,
        title: "Unit 5: Multithreading in Java",
        fileId: "1OmXaRRWB9UtmaNsXubC3GcTrXk9ncP_T",
        url: "https://drive.google.com/file/d/1OmXaRRWB9UtmaNsXubC3GcTrXk9ncP_T/view?usp=sharing"
    },
    {
        unit: 6,
        title: "Unit 6: Collection Framework & Database Connection",
        fileId: "1WTQQgEE8sGLWsEMoQVS50PzaJ6YIezlU",
        url: "https://drive.google.com/file/d/1WTQQgEE8sGLWsEMoQVS50PzaJ6YIezlU/view?usp=sharing"
    }
];

function generateAllDocuments() {
    const docs = [];
    const timestamp = new Date().toISOString();

    // 1. Digital Electronics for CSE 3rd Semester
    for (const branch of CSE_GROUP) {
        const folderId = `folder_notes_${branch.toLowerCase()}_sem3_digital_electronics`;
        docs.push({
            id: folderId,
            category: 'NOTES',
            parentId: 'root',
            type: 'folder',
            verified: true,
            subject: 'DIGITAL ELECTRONICS',
            subjectFolder: 'DIGITAL ELECTRONICS',
            title: 'DIGITAL ELECTRONICS',
            branch: branch,
            semester: '3',
            fileUrl: '',
            createdAt: timestamp
        });

        for (const item of DIGITAL_ELECTRONICS_NOTES) {
            docs.push({
                id: `note_${branch.toLowerCase()}_sem3_de_u${item.unit}`,
                category: 'NOTES',
                branch: branch,
                semester: '3',
                subject: 'DIGITAL ELECTRONICS',
                subjectFolder: 'DIGITAL ELECTRONICS',
                title: item.title,
                fileUrl: item.url,
                verified: true,
                type: 'file',
                parentId: folderId,
                uploadDate: timestamp,
                createdAt: timestamp
            });
        }
    }

    // 2. Engineering Physics for Sem 1 (Group A & Group B)
    for (const branch of PHYSICS_BRANCHES) {
        const folderId = `folder_notes_${branch.toLowerCase()}_sem1_physics`;
        docs.push({
            id: folderId,
            category: 'NOTES',
            parentId: 'root',
            type: 'folder',
            verified: true,
            subject: 'ENGINEERING PHYSICS',
            subjectFolder: 'ENGINEERING PHYSICS',
            title: 'ENGINEERING PHYSICS',
            branch: branch,
            semester: '1',
            fileUrl: '',
            createdAt: timestamp
        });

        for (const item of PHYSICS_NOTES) {
            docs.push({
                id: `note_${branch.toLowerCase()}_sem1_physics_u${item.unit}`,
                category: 'NOTES',
                branch: branch,
                semester: '1',
                subject: 'ENGINEERING PHYSICS',
                subjectFolder: 'ENGINEERING PHYSICS',
                title: item.title,
                fileUrl: item.url,
                verified: true,
                type: 'file',
                parentId: folderId,
                uploadDate: timestamp,
                createdAt: timestamp
            });
        }
    }

    // 3. Engineering Chemistry for Sem 1 (Group C)
    for (const branch of CHEMISTRY_BRANCHES) {
        const folderId = `folder_notes_${branch.toLowerCase()}_sem1_chemistry`;
        docs.push({
            id: folderId,
            category: 'NOTES',
            parentId: 'root',
            type: 'folder',
            verified: true,
            subject: 'ENGINEERING CHEMISTRY',
            subjectFolder: 'ENGINEERING CHEMISTRY',
            title: 'ENGINEERING CHEMISTRY',
            branch: branch,
            semester: '1',
            fileUrl: '',
            createdAt: timestamp
        });

        for (const item of CHEMISTRY_NOTES) {
            docs.push({
                id: `note_${branch.toLowerCase()}_sem1_chemistry_u${item.unit}`,
                category: 'NOTES',
                branch: branch,
                semester: '1',
                subject: 'ENGINEERING CHEMISTRY',
                subjectFolder: 'ENGINEERING CHEMISTRY',
                title: item.title,
                fileUrl: item.url,
                verified: true,
                type: 'file',
                parentId: folderId,
                uploadDate: timestamp,
                createdAt: timestamp
            });
        }
    }

    // 4. Introduction to AI for Sem 1 (All Branches)
    for (const branch of ALL_SEM1_BRANCHES) {
        const folderId = `folder_notes_${branch.toLowerCase()}_sem1_ai`;
        docs.push({
            id: folderId,
            category: 'NOTES',
            parentId: 'root',
            type: 'folder',
            verified: true,
            subject: 'INTRODUCTION TO AI',
            subjectFolder: 'INTRODUCTION TO AI',
            title: 'INTRODUCTION TO AI',
            branch: branch,
            semester: '1',
            fileUrl: '',
            createdAt: timestamp
        });

        for (const item of AI_NOTES) {
            docs.push({
                id: `note_${branch.toLowerCase()}_sem1_ai_u${item.unit}`,
                category: 'NOTES',
                branch: branch,
                semester: '1',
                subject: 'INTRODUCTION TO AI',
                subjectFolder: 'INTRODUCTION TO AI',
                title: item.title,
                fileUrl: item.url,
                verified: true,
                type: 'file',
                parentId: folderId,
                uploadDate: timestamp,
                createdAt: timestamp
            });
        }
    }

    return docs;
}

async function main() {
    const allDocs = generateAllDocuments();
    console.log(`Generated ${allDocs.length} total note and folder documents.`);

    // 1. Save locally in client as static default dataset
    const clientDataPath = path.join(__dirname, '../../client/src/data/notesDefaultData.json');
    fs.writeFileSync(clientDataPath, JSON.stringify(allDocs, null, 2), 'utf-8');
    console.log(`Saved static fallback to ${clientDataPath}`);

    // 2. Upload to Firestore using Batches (chunks of 400 docs)
    if (!admin.apps.length) {
        console.error("Firebase Admin not initialized.");
        process.exit(1);
    }
    const db = admin.firestore();

    const CHUNK_SIZE = 400;
    for (let i = 0; i < allDocs.length; i += CHUNK_SIZE) {
        const chunk = allDocs.slice(i, i + CHUNK_SIZE);
        const batch = db.batch();

        for (const docData of chunk) {
            const { id, ...data } = docData;
            const docRef = db.collection('documents').doc(id);
            batch.set(docRef, data);
        }

        console.log(`Committing batch ${Math.floor(i / CHUNK_SIZE) + 1} (${chunk.length} docs)...`);
        await batch.commit();
        console.log(`Batch ${Math.floor(i / CHUNK_SIZE) + 1} committed successfully!`);
    }

    console.log("All documents written to Firestore successfully!");
    process.exit(0);
}

main().catch(err => {
    console.error("Upload error:", err);
    process.exit(1);
});
