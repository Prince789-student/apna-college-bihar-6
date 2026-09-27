const admin = require('../firebaseAdmin');

async function syncAuthUsers() {
  if (!admin || !admin.apps.length) {
    console.error('Firebase Admin not initialized');
    process.exit(1);
  }

  const db = admin.firestore();
  console.log('Fetching all users from Firebase Auth...');
  
  const authUsers = [];
  let pageToken;
  do {
    const result = await admin.auth().listUsers(1000, pageToken);
    authUsers.push(...result.users);
    pageToken = result.pageToken;
  } while (pageToken);

  console.log(`Found ${authUsers.length} total users in Firebase Authentication.`);

  // Write in batches of up to 400 (Firestore limit is 500 operations per batch)
  const batchSize = 400;
  let batch = db.batch();
  let count = 0;
  let totalBatches = 0;

  for (const u of authUsers) {
    const isFounder = u.email === 'prince8694@gmail.com' || u.email === 'prince86944@gmail.com';
    const userDocRef = db.collection('users').doc(u.uid);

    const data = {
      uid: u.uid,
      email: u.email || '',
      name: u.displayName || 'Scholar',
      phone: u.phoneNumber || '',
      role: isFounder ? 'SUPER_ADMIN' : 'STUDENT',
      createdAt: u.metadata.creationTime ? new Date(u.metadata.creationTime) : new Date(),
      lastLogin: u.metadata.lastSignInTime ? new Date(u.metadata.lastSignInTime) : new Date()
    };

    batch.set(userDocRef, data, { merge: true });
    count++;

    if (count % batchSize === 0) {
      await batch.commit();
      totalBatches++;
      console.log(`Committed batch ${totalBatches} (${count} users)`);
      batch = db.batch();
    }
  }

  if (count % batchSize !== 0) {
    await batch.commit();
    totalBatches++;
    console.log(`Committed final batch ${totalBatches} (${count} users)`);
  }

  console.log(`✅ SUCCESS: Synced ${count} Firebase Auth users to Firestore 'users' collection!`);
  process.exit(0);
}

syncAuthUsers().catch(err => {
  console.error('Sync failed:', err);
  process.exit(1);
});
