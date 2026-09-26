import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { blogPosts } from './src/data/blogPosts.js';
import { collegeData } from './src/data/collegeData.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DOMAIN = "https://www.apnacollegebihar.online";
const TODAY = new Date().toISOString().split('T')[0];

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

const urls = new Set(staticRoutes);

// Add all Blog Posts
if (Array.isArray(blogPosts)) {
  blogPosts.forEach(post => {
    if (post.slug) {
      urls.add(`/blog/${post.slug}`);
    }
  });
}

// Add all College Pages
if (Array.isArray(collegeData)) {
  collegeData.forEach(college => {
    if (college.slug) {
      urls.add(`/college/${college.slug}`);
    }
  });
}

// Add static HTML pages from public/ (e.g. cutoff rank pages, percentile guides)
const publicDir = path.join(__dirname, 'public');
if (fs.existsSync(publicDir)) {
  const publicFiles = fs.readdirSync(publicDir);
  publicFiles.forEach(file => {
    if (
      file.endsWith('.html') &&
      !file.startsWith('google') &&
      file !== 'index.html' &&
      file !== 'offline.html'
    ) {
      urls.add(`/${file}`);
    }
  });
}

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

for (const url of urls) {
  let changefreq = url === '/' || url === '/blog' || url === '/notes' ? 'daily' : 'weekly';
  let priority = url === '/' ? '1.0' : url.startsWith('/blog') || url === '/notes' || url === '/pyq' ? '0.8' : '0.7';
  const loc = url === '/' ? `${DOMAIN}/` : `${DOMAIN}${url}`;

  xml += `  <url>
    <loc>${loc}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>\n`;
}

xml += `</urlset>`;

// Write to client/public/sitemap.xml
const clientPublicPath = path.join(publicDir, 'sitemap.xml');
fs.writeFileSync(clientPublicPath, xml, 'utf8');
console.log(`[Sitemap] Generated ${urls.size} URLs at ${clientPublicPath}`);

// Also write to dist/sitemap.xml if dist exists
const distPath = path.join(__dirname, 'dist', 'sitemap.xml');
if (fs.existsSync(path.dirname(distPath))) {
  fs.writeFileSync(distPath, xml, 'utf8');
  console.log(`[Sitemap] Synced to ${distPath}`);
}

// Also write to server/public/sitemap.xml if server/public exists
const serverPublicPath = path.join(__dirname, '..', 'server', 'public', 'sitemap.xml');
if (fs.existsSync(path.dirname(serverPublicPath))) {
  fs.writeFileSync(serverPublicPath, xml, 'utf8');
  console.log(`[Sitemap] Synced to ${serverPublicPath}`);
}
