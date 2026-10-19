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
  '/colleges',
  '/mentorship',
  '/hackathons',
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

// Add all 5 Branch Hub Pages
['cse', 'civil', 'me', 'ee', 'ece'].forEach(b => {
  urls.add(`/branch/${b}`);
});

// Add all Blog Posts
if (Array.isArray(blogPosts)) {
  blogPosts.forEach(post => {
    if (post.slug) {
      urls.add(`/blog/${post.slug}`);
    }
  });
}

// Add all 38 College Pages from collegeData object
if (collegeData && typeof collegeData === 'object') {
  Object.keys(collegeData).forEach(slug => {
    urls.add(`/college/${slug}`);
  });
}

// Add curated static HTML pages from public/, explicitly EXCLUDING programmatic doorway pages (cutoff-rank, colleges-at-*)
// This ensures Google AdSense audits only high-value, unique editorial and tool pages.
const publicDir = path.join(__dirname, 'public');
if (fs.existsSync(publicDir)) {
  const publicFiles = fs.readdirSync(publicDir);
  publicFiles.forEach(file => {
    if (
      file.endsWith('.html') &&
      !file.startsWith('google') &&
      file !== 'index.html' &&
      file !== 'offline.html' &&
      !file.includes('-cutoff-rank-') &&
      !file.startsWith('colleges-at-') &&
      !file.includes('cutoff') &&
      !file.includes('compare') &&
      !file.includes('search')
    ) {
      const slug = file.replace(/\.html$/, '');
      urls.add(`/${slug}`);
    }
  });
}


let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

for (const url of urls) {
  let changefreq = url === '/' || url === '/blog' || url === '/notes' ? 'daily' : 'weekly';
  let priority;
  if (url === '/') priority = '1.0';
  else if (['/notes', '/pyq', '/syllabus', '/blog', '/ugeac-predictor', '/cgpa'].includes(url)) priority = '0.9';
  else if (url.startsWith('/blog/')) priority = '0.8';
  else if (url.includes('-cutoff-rank-') || url.includes('colleges-at-')) priority = '0.8';
  else if (url.startsWith('/college/') || url.startsWith('/compare/')) priority = '0.7';
  else priority = '0.6';
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
