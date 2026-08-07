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
urls.push('/hackathons');
urls.push('/ugeac-predictor');
urls.push('/notes');
urls.push('/pyq');
urls.push('/syllabus');

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

// College Pages & Sub-pages
for (const col of colleges) {
  urls.push(`/college/${col}`);
  urls.push(`/college/${col}/fees`);
  urls.push(`/college/${col}/placement`);
  urls.push(`/college/${col}/cutoff`);
  urls.push(`/college/${col}/hostel`);
  urls.push(`/college/${col}/review`);
  urls.push(`/college/${col}/branches`);
}

// Branch Hub Pages & Sub-pages
for (const branch of branches) {
  urls.push(`/branch/${branch}`);
  urls.push(`/branch/${branch}/career`);
  urls.push(`/branch/${branch}/salary`);
  urls.push(`/branch/${branch}/skills`);
  urls.push(`/branch/${branch}/placement`);
  urls.push(`/branch/${branch}/internship`);
}

// UGEAC Deep Pages
const ugeacPages = [
  'cutoff-2025',
  'choice-filling-guide',
  'seat-allotment',
  'merit-list',
  'counselling-process',
  'document-verification'
];
for (const page of ugeacPages) {
  urls.push(`/ugeac/${page}`);
}

// Subject Pages
for (const subject of commonSubjects) {
  urls.push(`/subject/${subject}`);
  urls.push(`/subject/${subject}/notes`);
  urls.push(`/subject/${subject}/pyq`);
  urls.push(`/subject/${subject}/syllabus`);
}

// Static Tool Pages
urls.push('/beu/attendance');
urls.push('/beu/timetable');
urls.push('/beu/cgpa');
urls.push('/beu/result');

// Static Feature Pages
urls.push('/feature/focus-timer');
urls.push('/feature/study-groups');
urls.push('/feature/study-resources');
urls.push('/feature/calculator');
urls.push('/feature/personal-manager');

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

for (const url of urls) {
  let changefreq = 'weekly';
  let priority = '0.6';

  if (url === '/') {
    changefreq = 'daily';
    priority = '1.0';
  } else if (url.startsWith('/hub') || url.startsWith('/hackathons') || url.startsWith('/ugeac-predictor')) {
    changefreq = 'daily';
    priority = '0.9';
  } else if (url.startsWith('/college/')) {
    changefreq = 'weekly';
    priority = '0.8';
  } else if (url.startsWith('/subject/') || url.startsWith('/notes/') || url.startsWith('/pyq/') || url.startsWith('/syllabus/')) {
    changefreq = 'monthly';
    priority = '0.7';
  }

  xml += `  <url>
    <loc>${DOMAIN}${url}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>\n`;
}

xml += `</urlset>`;

const filePath = path.join(process.cwd(), 'public', 'sitemap.xml');
fs.writeFileSync(filePath, xml, 'utf8');

console.log(`Generated sitemap.xml with ${urls.length} URLs at ${filePath}`);
