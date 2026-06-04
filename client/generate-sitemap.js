import fs from 'fs';
import path from 'path';

const DOMAIN = "https://www.apnacollegebihar.online";

const branches = [
  'cse', 'civil', 'me', 'ee', 'ece', 'eee', 'it', 'mining', 'chemical', 'biomedical', 'food', 'aeronautical', 'robotics', 'fire', 'mechatronics',
  'cse_ds', 'cse_aiml', 'cse_ai', 'cse_cyber', 'cse_iot', 'cse_networks', 'ece_vlsi', 'cse_iot_cs_bc', 'civil_ca'
];

const semesters = [1, 2, 3, 4, 5, 6, 7, 8];

const colleges = [
  'mit-muzaffarpur',
  'bce-bhagalpur',
  'gce-gaya',
  'dce-darbhanga',
  'mce-motihari',
  'lnjpit-chapra',
  'nce-chandi',
  'rce-saharsa',
  'sce-sasaram',
  'pce-purnea',
  'bce-bakhtiyarpur',
  'sit-sitamarhi',
  'rrsdce-begusarai',
  'jmit-jamui',
  'mita-aurangabad',
  'gwc-buxar',
  'bce-buxar',
  'spce-siwan',
  'kmc-katihar',
  'sm-muzaffarpur',
  'mwec-madhepura',
  'sgp-patna',
  'gec-sheikhpura',
  'gec-munger',
  'gec-jamui',
  'gec-banka',
  'gec-nawada',
  'gec-kishanganj',
  'gec-araria',
  'gec-supaul',
  'gec-saharsa',
  'gec-madhubani',
  'gec-samastipur',
  'gec-vaishali',
  'gec-gopalganj',
  'gec-siwan',
  'gec-bhojpur',
  'gec-rohtas',
  'gec-buxar',
  'gec-kaimur',
  'gec-jehanabad',
  'gec-arwal',
  'gec-lakhisarai',
  'gec-khagaria',
  'gec-begusarai'
];

const commonSubjects = [
  'engineering-mathematics-1', 'engineering-mathematics-2', 'engineering-mathematics-3', 
  'engineering-physics', 'engineering-chemistry', 'basic-electrical-engineering', 
  'basic-electronics-engineering', 'programming-for-problem-solving', 'engineering-graphics', 
  'workshop-manufacturing-practices', 'english', 'data-structures-and-algorithms', 
  'object-oriented-programming-using-cpp', 'computer-organization-and-architecture', 
  'database-management-systems', 'operating-systems', 'design-and-analysis-of-algorithms', 
  'formal-language-and-automata-theory', 'computer-networks', 'software-engineering', 
  'compiler-design', 'artificial-intelligence', 'machine-learning', 'internet-of-things', 
  'thermodynamics', 'fluid-mechanics', 'strength-of-materials', 'theory-of-machines', 
  'heat-and-mass-transfer', 'engineering-mechanics', 'surveying', 'building-materials', 
  'concrete-technology', 'structural-analysis', 'geotechnical-engineering', 
  'environmental-engineering', 'transportation-engineering', 'water-resources-engineering', 
  'power-systems', 'control-systems', 'electrical-machines', 'power-electronics', 
  'signals-and-systems', 'digital-electronics', 'analog-electronic-circuits', 
  'electromagnetic-waves', 'microprocessors-and-microcontrollers', 'communication-systems', 
  'vlsi-design', 'data-science', 'cyber-security', 'cloud-computing', 'block-chain', 
  'biology-for-engineers', 'indian-constitution', 'environmental-science'
];

const urls = [];

// Static Pages
urls.push('/');
urls.push('/hub');
urls.push('/dashboard/ugeac-predictor');
urls.push('/dashboard/notes');
urls.push('/dashboard/pyq');
urls.push('/dashboard/syllabus');

// Dynamic Notes & PYQ Pages
for (const branch of branches) {
  urls.push(`/notes/${branch}`);
  urls.push(`/pyq/${branch}`);
  urls.push(`/syllabus/${branch}`);
  for (const sem of semesters) {
    urls.push(`/notes/${branch}/${sem}`);
    urls.push(`/pyq/${branch}/${sem}`);
  }
}

// College Pages
for (const col of colleges) {
  urls.push(`/college/${col}`);
}

// Programmatic SEO Keywords (Search routes)
for (const subject of commonSubjects) {
  urls.push(`/search/${subject}`);
  urls.push(`/search/${subject}-notes`);
  urls.push(`/search/${subject}-pyq`);
}

// ── BEU Tool SEO Keywords ──────────────────────────────────────────

// Static Tool Pages
urls.push('/beu/attendance');
urls.push('/beu/timetable');
urls.push('/beu/cgpa');
urls.push('/beu/result');

// Attendance Keywords
const attendanceKeywords = [
  'beu-attendance-calculator',
  'attendance-percentage-calculator',
  'bihar-engineering-attendance',
  '75-percent-attendance-calculator',
  'attendance-shortfall-calculator',
  'engineering-attendance-calculator',
  'beu-attendance-tracker',
  'minimum-attendance-beu',
  'how-to-calculate-attendance-beu',
  'beu-attendance-rules',
  'cse-attendance-calculator',
  'civil-attendance-calculator',
  'mechanical-attendance-calculator',
  'electrical-attendance-calculator',
  'ece-attendance-calculator',
  'it-attendance-calculator-beu',
  'ece-vlsi-attendance-beu',
  'cse-aiml-attendance-beu',
  'cse-ds-attendance-beu',
  'cse-cyber-attendance-beu',
  'beu-attendance-sem1', 'beu-attendance-sem2', 'beu-attendance-sem3',
  'beu-attendance-sem4', 'beu-attendance-sem5', 'beu-attendance-sem6',
  'beu-attendance-sem7', 'beu-attendance-sem8',
  'attendance-calculator-2025',
  'beu-attendance-shortage-calculator',
  'mit-muzaffarpur-attendance-calculator',
  'bce-bhagalpur-attendance-calculator',
  'gce-gaya-attendance-calculator',
];

// Timetable Keywords
const timetableKeywords = [
  'beu-timetable-2025',
  'beu-exam-schedule-2025',
  'beu-class-timetable',
  'bihar-engineering-timetable',
  'beu-semester-schedule',
  'beu-timetable-cse',
  'beu-timetable-civil',
  'beu-timetable-mechanical',
  'beu-timetable-electrical',
  'beu-timetable-ece',
  'beu-sem1-timetable', 'beu-sem2-timetable', 'beu-sem3-timetable',
  'beu-sem4-timetable', 'beu-sem5-timetable', 'beu-sem6-timetable',
  'beu-sem7-timetable', 'beu-sem8-timetable',
  'beu-exam-date-sheet-2025',
  'beu-practical-schedule',
  'beu-internal-exam-timetable',
  'bihar-engineering-university-exam-schedule',
  'beu-back-exam-schedule',
];

// CGPA Keywords
const cgpaKeywords = [
  'beu-cgpa-calculator',
  'beu-sgpa-calculator',
  'sgpa-to-cgpa-converter',
  'beu-grade-calculator',
  'beu-marks-to-cgpa',
  'bihar-engineering-cgpa',
  'beu-gpa-calculator',
  'beu-cgpa-cse',
  'beu-cgpa-civil',
  'beu-cgpa-mechanical',
  'beu-cgpa-electrical',
  'beu-cgpa-ece',
  'beu-sem1-cgpa', 'beu-sem2-cgpa', 'beu-sem3-cgpa',
  'beu-sem4-cgpa', 'beu-sem5-cgpa', 'beu-sem6-cgpa',
  'beu-sem7-cgpa', 'beu-sem8-cgpa',
  'beu-cgpa-2025',
  'beu-sgpa-2025',
  'how-to-calculate-cgpa-beu',
  'beu-grade-point-average',
  'beu-percentage-to-cgpa',
  'beu-cgpa-to-percentage',
  'bihar-engineering-grading-system',
  'beu-distinction-cgpa',
  'beu-first-division-cgpa',
];

// Result Keywords
const resultKeywords = [
  'beu-result-2025',
  'bihar-engineering-result',
  'beu-exam-result',
  'beu-result-marksheet',
  'beu-result-sem1', 'beu-result-sem2', 'beu-result-sem3',
  'beu-result-sem4', 'beu-result-sem5', 'beu-result-sem6',
  'beu-result-sem7', 'beu-result-sem8',
  'beu-result-cse', 'beu-result-civil', 'beu-result-mechanical',
  'beu-result-electrical', 'beu-result-ece',
  'bihar-engineering-university-result-2025',
  'beu-back-result-2025',
  'beu-supplementary-result',
  'beu-result-link-2025',
  'beu-marksheet-download',
  'mit-muzaffarpur-result-2025',
  'bce-bhagalpur-result-2025',
  'gce-gaya-result-2025',
  'beu-rank-list-2025',
  'beu-merit-list-2025',
];

for (const kw of attendanceKeywords) urls.push(`/beu/attendance/${kw}`);
for (const kw of timetableKeywords) urls.push(`/beu/timetable/${kw}`);
for (const kw of cgpaKeywords) urls.push(`/beu/cgpa/${kw}`);
for (const kw of resultKeywords) urls.push(`/beu/result/${kw}`);


let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

for (const url of urls) {
  xml += `  <url>
    <loc>${DOMAIN}${url}</loc>
    <changefreq>daily</changefreq>
    <priority>${url === '/' ? '1.0' : '0.8'}</priority>
  </url>\n`;
}

xml += `</urlset>`;

const filePath = path.join(process.cwd(), 'public', 'sitemap.xml');
fs.writeFileSync(filePath, xml, 'utf8');

console.log(`Generated sitemap.xml with ${urls.length} URLs at ${filePath}`);
