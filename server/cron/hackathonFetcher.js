const cron = require('node-cron');
const axios = require('axios');
const admin = require('../firebaseAdmin');

// Fallback curated list of major hackathons to ensure we always have quality data
const fallbackHackathons = [
  {
    id: "sih-2026",
    title: "Smart India Hackathon (SIH) 2026",
    host: "Ministry of Education & AICTE",
    date: "Aug - Dec 2026",
    prize: "₹1,00,000 per problem statement",
    url: "https://sih.gov.in",
    logo: "https://sih.gov.in/img/logo.png",
    source: "BCECEB / National",
    type: "Hybrid"
  },
  {
    id: "google-solution-challenge-2026",
    title: "Google Developer Groups Solution Challenge 2026",
    host: "Google Developers",
    date: "Jan - May 2026",
    prize: "$3,000 - $12,000 USD",
    url: "https://developers.google.com/community/gdsc-solution-challenge",
    logo: "https://developers.google.com/community/images/gdsc-logo.png",
    source: "Global",
    type: "Online"
  },
  {
    id: "hackindia-2026",
    title: "HackIndia 2026 National Hackathon",
    host: "HackIndia Organization",
    date: "Sep - Oct 2026",
    prize: "₹15,00,000 Prize Pool",
    url: "https://unstop.com/hackathons?query=hackindia",
    logo: "",
    source: "National",
    type: "Hybrid"
  },
  {
    id: "iit-patna-celesta-2026",
    title: "Celesta Hackathon 2026 | IIT Patna",
    host: "IIT Patna Techfest Cell",
    date: "Oct 2026",
    prize: "₹50,000 Prize Pool",
    url: "https://unstop.com/college-fests?search=celesta",
    logo: "",
    source: "IIT Patna",
    type: "Offline"
  },
  {
    id: "nit-patna-corona-2026",
    title: "Corona TechFest Hackathon 2026 | NIT Patna",
    host: "NIT Patna Student Council",
    date: "Nov 2026",
    prize: "₹30,000 Prize Pool",
    url: "https://unstop.com/college-fests?search=nit+patna",
    logo: "",
    source: "NIT Patna",
    type: "Offline"
  }
];

const fetchHackathons = async () => {
  if (!admin || admin.apps.length === 0) {
    console.warn('⚠️ Hackathon Fetcher not started: Firebase Admin not initialized.');
    return;
  }

  const db = admin.firestore();
  console.log('⏳ Running automated hackathon fetcher job...');

  let fetchedList = [];

  try {
    // Attempt to fetch from Devpost's public API
    // User-agent added to avoid cloudflare/bot blocks
    const response = await axios.get('https://devpost.com/api/v1/challenges', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      },
      timeout: 10000
    });

    if (response.data && response.data.challenges) {
      fetchedList = response.data.challenges.map((c, idx) => ({
        id: `devpost-${c.id || idx}`,
        title: c.title,
        host: c.hosts && c.hosts[0] ? c.hosts[0].name : "Devpost Host",
        date: c.submission_period_dates || "Ongoing",
        prize: c.prize_value ? `$${c.prize_value} USD` : "Swags & Glory",
        url: c.url || "https://devpost.com",
        logo: c.thumbnail_url || "",
        source: "Devpost",
        type: "Online"
      })).slice(0, 15); // limit to 15 items
      console.log(`✅ Successfully fetched ${fetchedList.length} hackathons from Devpost.`);
    }
  } catch (error) {
    console.warn('⚠️ Devpost API fetch failed. Using standard curated list.', error.message);
  }

  // Merge fetched items with our curated fallback list
  const mergedList = [...fallbackHackathons];
  
  fetchedList.forEach(item => {
    // Prevent duplicate titles
    if (!mergedList.some(f => f.title.toLowerCase() === item.title.toLowerCase())) {
      mergedList.push(item);
    }
  });

  try {
    const batch = db.batch();
    const hackathonsCol = db.collection('hackathons');
    
    // Clear old records first to avoid stale entries
    const snap = await hackathonsCol.get();
    snap.docs.forEach(doc => {
      batch.delete(doc.ref);
    });

    // Write new items
    mergedList.forEach(item => {
      const docRef = hackathonsCol.doc(item.id);
      batch.set(docRef, {
        ...item,
        updatedAt: admin.firestore.FieldValue.serverTimestamp()
      });
    });

    await batch.commit();
    console.log(`✅ Firestore updated with ${mergedList.length} active hackathons successfully.`);
  } catch (err) {
    console.error('❌ Failed to save hackathons to Firestore:', err);
  }
};

const startHackathonCron = () => {
  // Run once immediately on server startup to seed the database
  fetchHackathons();

  // Schedule to run every day at 3:00 AM IST (Asia/Kolkata)
  cron.schedule('0 3 * * *', fetchHackathons, {
    scheduled: true,
    timezone: "Asia/Kolkata"
  });
  console.log('✅ Daily Hackathon Fetcher Cron Scheduled for 3:00 AM IST');
};

module.exports = { startHackathonCron, fetchHackathons };
