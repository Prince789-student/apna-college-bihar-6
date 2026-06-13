const admin = require('firebase-admin'); 
const serviceAccount = require('./firebase-service-account.json'); 

admin.initializeApp({ 
  credential: admin.credential.cert(serviceAccount) 
}); 

const db = admin.firestore(); 

async function fix() { 
  const snapshot = await db.collection('beu_notifications').get(); 
  let count = 0; 
  const batch = db.batch(); 
  snapshot.forEach(doc => { 
    const data = doc.data(); 
    if(data.pdfUrl && data.pdfUrl.includes('uploads/notice')) { 
      const newUrl = `https://beu-bih.ac.in/backend/${encodeURIComponent(data.link)}`; 
      batch.update(doc.ref, { pdfUrl: newUrl }); 
      count++; 
    } 
  }); 
  await batch.commit(); 
  console.log('Fixed', count, 'documents'); 
} 

fix().then(() => process.exit(0)).catch(console.error);
