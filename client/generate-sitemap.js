import fs from 'fs';
import path from 'path';
import { blogPosts } from './src/data/blogPosts.js';
import { collegeData } from './src/data/collegeData.js';

const DOMAIN = "https://www.apnacollegebihar.online";

const staticRoutes = [
  '/',
  '/notes',
  '/pyq',
  '/syllabus',
  '/lecture-finder',
  '/cgpa',
  '/beu-result',
  '/attendance',
  '/timetable',
  '/calculator',
  '/study-resources',
  '/ugeac-predictor',
  '/blog',
  '/directory',
  '/about',
  '/contact',
  '/privacy-policy',
  '/terms',
  '/disclaimer',
  '/dmca'
];

const urls = [...staticRoutes];

// Add all Blog Posts
if (Array.isArray(blogPosts)) {
  blogPosts.forEach(post => {
    if (post.slug) {
      urls.push(`/blog/${post.slug}`);
    }
  });
}

// Add all College Pages
if (Array.isArray(collegeData)) {
  collegeData.forEach(college => {
    if (college.slug) {
      urls.push(`/college/${college.slug}`);
    }
  });
}

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

for (const url of urls) {
  let changefreq = url === '/' || url === '/blog' || url === '/notes' ? 'daily' : 'weekly';
  let priority = url === '/' ? '1.0' : url.startsWith('/blog') ? '0.8' : '0.7';

  xml += `  <url>
    <loc>${DOMAIN}${url === '/' ? '' : url}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>\n`;
}

xml += `</urlset>`;

const filePath = path.join(process.cwd(), 'public', 'sitemap.xml');
fs.writeFileSync(filePath, xml, 'utf8');

console.log(`Generated sitemap.xml with ${urls.length} URLs at ${filePath}`);

