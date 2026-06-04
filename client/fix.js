import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, updateDoc, doc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBIvnhJLz_ucsxuFEnZeYSAq2L6vJ4DcKo",
  authDomain: "apna-college-bihar.firebaseapp.com",
  projectId: "apna-college-bihar",
  storageBucket: "apna-college-bihar.firebasestorage.app",
  messagingSenderId: "818059891079",
  appId: "1:818059891079:web:395df6af749da04ae80322"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function checkOrphans() {
  const snap = await getDocs(collection(db, 'documents'));
  const docs = snap.docs.map(d => ({ id: d.id, ...d.data() }));
  
  const folders = docs.filter(d => d.type === 'folder').map(d => d.id);
  const orphans = docs.filter(d => d.type !== 'folder' && d.parentId && d.parentId !== 'root' && !folders.includes(d.parentId));
  
  console.log('Orphaned files found:', orphans.length);
  for (let o of orphans) {
    console.log(`- ${o.title} (Subject: ${o.subject}, Category: ${o.category})`);
    // Fix: create a new folder for it, or just put it in root
    console.log(`Setting parentId to root for ${o.id}`);
    await updateDoc(doc(db, 'documents', o.id), { parentId: 'root' });
  }
}

checkOrphans().then(() => process.exit(0)).catch(console.error);
