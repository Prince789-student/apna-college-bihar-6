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
