const fs = require('fs');
const path = require('path');
const admin = require('../firebaseAdmin');
const db = admin.firestore();

async function restore() {
  const usersSnap = await db.collection('users').get();
  console.log('Total users in DB:', usersSnap.size);

  const phoneLookup = new Map();

  // From mentorship.json
  const mJsonPath = path.join(__dirname, '..', 'data', 'mentorship.json');
  if (fs.existsSync(mJsonPath)) {
    const mData = JSON.parse(fs.readFileSync(mJsonPath, 'utf8'));
    (mData.students || []).forEach(s => {
      if (s.whatsapp) {
        if (s.email) phoneLookup.set(s.email.toLowerCase().trim(), s.whatsapp.trim());
        if (s.name) phoneLookup.set('name:' + s.name.toLowerCase().trim(), s.whatsapp.trim());
      }
    });
  }

  // From CSV files in acb mentorship
  const csvDir = path.join(__dirname, '..', '..', 'acb mentorship');
  const csvFiles = ['Free Mentorship for 1st Year Students (BEU - Batch 2026-2030).csv', 'Google_Contacts_Import.csv'];
  csvFiles.forEach(f => {
    const fPath = path.join(csvDir, f);
    if (fs.existsSync(fPath)) {
      const content = fs.readFileSync(fPath, 'utf8');
      const lines = content.split('\n');
      lines.forEach(line => {
        const emailMatch = line.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
        const phoneMatch = line.match(/(?:\+91|91)?([6-9]\d{9})/);
        if (emailMatch && phoneMatch) {
          phoneLookup.set(emailMatch[0].toLowerCase().trim(), phoneMatch[1]);
        }
      });
    }
  });

  // From VCF files in acb mentorship
  const vcfFiles = ['BEU_Mentorship_Contacts.vcf', 'New_11_Contacts.vcf', 'New_2_Contacts.vcf', 'Kishan_Kumar.vcf'];
  vcfFiles.forEach(f => {
    const fPath = path.join(csvDir, f);
    if (fs.existsSync(fPath)) {
      const content = fs.readFileSync(fPath, 'utf8');
      const cards = content.split('BEGIN:VCARD');
      cards.forEach(card => {
        const emailMatch = card.match(/EMAIL[^:]*:(.*)/i);
        const telMatch = card.match(/TEL[^:]*:(.*)/i);
        const fnMatch = card.match(/FN[^:]*:(.*)/i);
        let phone = '';
        if (telMatch) {
          const digits = telMatch[1].replace(/\D/g, '');
          if (digits.length >= 10) phone = digits.slice(-10);
        }
        if (phone) {
          if (emailMatch) phoneLookup.set(emailMatch[1].toLowerCase().trim(), phone);
          if (fnMatch) phoneLookup.set('name:' + fnMatch[1].toLowerCase().trim(), phone);
        }
      });
    }
  });

  console.log('Total known phone records in lookup:', phoneLookup.size);

  let restored = 0;
  const batch = db.batch();

  usersSnap.forEach(d => {
    const u = d.data();
    const email = (u.email || '').toLowerCase().trim();
    const name = (u.name || '').toLowerCase().trim();

    if (!u.phone || u.phone.trim() === '') {
      let foundPhone = phoneLookup.get(email) || phoneLookup.get('name:' + name);
      if (!foundPhone) {
        const numInEmail = email.match(/[6-9]\d{9}/);
        if (numInEmail) foundPhone = numInEmail[0];
      }
      if (foundPhone) {
        restored++;
        console.log('Restoring phone for: ' + u.name + ' (' + u.email + ') -> ' + foundPhone);
        batch.update(d.ref, { phone: foundPhone });
      }
    }
  });

  if (restored > 0) {
    await batch.commit();
    console.log('Successfully restored phone numbers for ' + restored + ' users in Firestore!');
  } else {
    console.log('No phone numbers to restore.');
  }

  process.exit(0);
}

restore();
