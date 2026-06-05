const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../client/public');
const serverPublicDir = path.join(__dirname, '../server/public');

console.log("Scanning public directory to generate standard XML sitemap...");

// Base URL of the website
const baseUrl = 'https://www.apnacollegebihar.online';

// Read all HTML files in publicDir recursively (or flat as generated)
const files = fs.readdirSync(publicDir);

const urls = [
  '/',
  '/directory',
  '/compare',
  '/percentile-predictor'
];

files.forEach(file => {
  if (file.endsWith('.html') && file !== 'index.html') {
    urls.push(`/${file}`);
  }
});

// Also scan subfolders like publicDir/compare
if (fs.existsSync(path.join(publicDir, 'compare'))) {
  const compFiles = fs.readdirSync(path.join(publicDir, 'compare'));
  compFiles.forEach(file => {
    if (file.endsWith('.html')) {
      urls.push(`/compare/${file}`);
    }
  });
}

// Construct XML content
let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

urls.forEach(url => {
  xml += '  <url>\n';
  xml += `    <loc>${baseUrl}${url}</loc>\n`;
  xml += '    <changefreq>weekly</changefreq>\n';
  xml += '    <priority>0.80</priority>\n';
  xml += '  </url>\n';
});

xml += '</urlset>\n';

// Write sitemap.xml to both client/public and server/public
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), xml, 'utf8');
fs.writeFileSync(path.join(serverPublicDir, 'sitemap.xml'), xml, 'utf8');

console.log(`Successfully compiled sitemap.xml with ${urls.length} URLs!`);
