import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;
const app = express();
app.use(express.static(path.join(__dirname, 'dist')));

app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const server = app.listen(PORT, async () => {
  console.log(`Server running for prerendering on port ${PORT}`);
  
  try {
    const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');
    if (!fs.existsSync(sitemapPath)) {
      console.error('Sitemap not found!');
      process.exit(1);
    }

    const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
    const urls = [...sitemapContent.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
    
    console.log(`Found ${urls.length} URLs in sitemap.`);

    const browser = await puppeteer.launch({ 
      headless: "new",
      args: ['--no-sandbox', '--disable-setuid-sandbox'] 
    });

    const BATCH_SIZE = 10;
    for (let i = 0; i < urls.length; i += BATCH_SIZE) {
      const batch = urls.slice(i, i + BATCH_SIZE);
      await Promise.all(batch.map(async (url) => {
        try {
          const urlObj = new URL(url);
          let pathname = urlObj.pathname;
          if (pathname === '/') pathname = '/index';
          
          const page = await browser.newPage();
          await page.goto(`http://localhost:${PORT}${urlObj.pathname}`, { waitUntil: 'domcontentloaded', timeout: 30000 });
          
          await page.waitForFunction(() => {
            const root = document.querySelector('#root');
            return root && root.children.length > 0 && !root.innerHTML.includes('INITIALIZING STUDY HUB');
          }, { timeout: 15000 }).catch(() => console.log(`Timeout waiting for React on ${urlObj.pathname}`));
          
          let content = await page.content();
          
          if (!content.startsWith('<!DOCTYPE html>')) {
            content = '<!DOCTYPE html>\n' + content;
          }

          let dirPath = path.join(__dirname, 'dist');
          let fileName = `${pathname}.html`;
          
          if (pathname.includes('/')) {
            const parts = pathname.split('/');
            fileName = parts.pop() + '.html';
            const subDir = parts.join('/');
            dirPath = path.join(__dirname, 'dist', subDir);
            if (!fs.existsSync(dirPath)) {
              fs.mkdirSync(dirPath, { recursive: true });
            }
          }
          
          fs.writeFileSync(path.join(dirPath, fileName), content);
          console.log(`Prerendered: ${pathname}`);
          
          await page.close();
        } catch (err) {
          console.error(`Failed to prerender ${url}:`, err.message);
        }
      }));
    }

    await browser.close();
    server.close();
    console.log('Prerendering complete!');
    process.exit(0);
  } catch (error) {
    console.error('Fatal error during prerendering:', error);
    server.close();
    process.exit(1);
  }
});
