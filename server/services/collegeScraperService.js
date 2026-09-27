const axios = require('axios');
const cheerio = require('cheerio');
const https = require('https');
const fs = require('fs');
const path = require('path');

const COLLEGES_PATH = path.join(__dirname, '..', 'data', 'beu_38_colleges.json');

const client = axios.create({
  timeout: 6000,
  httpsAgent: new https.Agent({ rejectUnauthorized: false }),
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
  }
});

function loadCollegesList() {
  try {
    if (fs.existsSync(COLLEGES_PATH)) {
      return JSON.parse(fs.readFileSync(COLLEGES_PATH, 'utf8'));
    }
  } catch (e) {
    console.warn('[College Scraper] Error reading colleges JSON:', e.message);
  }
  return [];
}

/**
 * Crawls notice board of a single college via fast Axios HTTP request
 */
async function scrapeCollegeNoticeBoard(college) {
  const { id, name, shortName, district, domain } = college;
  const targetUrls = [
    domain,
    `${domain.replace(/\/$/, '')}/notice-board/`,
    `${domain.replace(/\/$/, '')}/notices/`
  ];

  const extractedNotices = [];

  for (const url of targetUrls) {
    try {
      const res = await client.get(url);
      const $ = cheerio.load(res.data);

      $('a').each((_, el) => {
        const text = $(el).text().trim().replace(/\s+/g, ' ');
        const href = $(el).attr('href');
        if (!href) return;

        const lowerText = text.toLowerCase();
        const lowerHref = href.toLowerCase();

        // Exclude generic navigation items
        const isNavIgnore = lowerText.includes('former principal') || 
                            lowerText.includes('inquiry form') || 
                            lowerText === 'information technology' || 
                            lowerText === 'academic notices' ||
                            lowerText === 'notice from govt.' ||
                            lowerHref.includes('wp-admin');

        const isRealNotice = !isNavIgnore && (
          lowerHref.match(/\.pdf$/i) || 
          lowerHref.includes('wp-content/uploads') || 
          lowerText.includes('notice') || 
          lowerText.includes('exam') || 
          lowerText.includes('schedule') || 
          lowerText.includes('fee') ||
          lowerText.includes('hostel') ||
          lowerText.includes('form') ||
          lowerText.includes('b.tech') ||
          lowerText.includes('semester') ||
          lowerText.includes('circular') ||
          lowerText.includes('order')
        );

        if (isRealNotice && text.length >= 10 && text.length <= 150) {
          let fullUrl = href;
          if (!href.startsWith('http')) {
            fullUrl = `${domain.replace(/\/$/, '')}/${href.replace(/^\//, '')}`;
          }

          const noticeId = `col_${id}_${Buffer.from(text.substring(0, 30)).toString('hex').substring(0, 10)}`;
          if (!extractedNotices.some(n => n.rawTitle === text || n.pdfUrl === fullUrl)) {
            extractedNotices.push({
              id: noticeId,
              collegeId: id,
              collegeName: name,
              shortName: shortName,
              district: district,
              title: `[${shortName}] ${text}`,
              rawTitle: text,
              pdfUrl: fullUrl,
              link: fullUrl,
              date: new Date().toISOString().split('T')[0],
              noticedate: new Date().toISOString().split('T')[0],
              source: 'COLLEGE_NOTICE_BOARD',
              isCollegeNotice: true
            });
          }
        }
      });

      if (extractedNotices.length > 0) {
        break; // Successfully extracted from primary URL
      }
    } catch (err) {
      // Continue to next path
    }
  }

  return extractedNotices.slice(0, 5); // Return top 5 recent notices per college
}

/**
 * Scrapes all 38 BEU Colleges Notice Boards in parallel batches
 */
async function scrapeAll38CollegesNotices() {
  const colleges = loadCollegesList();
  console.log(`[College Scraper] Fast parallel check across ${colleges.length} BEU Engineering Colleges...`);

  const allNotices = [];
  const BATCH_SIZE = 10; // Process 10 colleges at a time for high speed

  for (let i = 0; i < colleges.length; i += BATCH_SIZE) {
    const batch = colleges.slice(i, i + BATCH_SIZE);
    const results = await Promise.allSettled(batch.map(c => scrapeCollegeNoticeBoard(c)));

    for (const res of results) {
      if (res.status === 'fulfilled' && Array.isArray(res.value)) {
        allNotices.push(...res.value);
      }
    }
  }

  console.log(`[College Scraper] Fast crawl completed! Extracted ${allNotices.length} notices across 38 colleges.`);
  return allNotices;
}

module.exports = {
  scrapeAll38CollegesNotices,
  scrapeCollegeNoticeBoard,
  loadCollegesList
};
