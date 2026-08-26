import fs from 'fs';
import path from 'path';

const DOMAIN = "https://www.apnacollegebihar.online";

const urls = [];

// Static Pages
urls.push('/');

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

for (const url of urls) {
  let changefreq = 'daily';
  let priority = '1.0';

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
