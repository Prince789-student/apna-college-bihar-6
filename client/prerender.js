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
          
          // Inject prerender flag to tell React to bypass Firebase and loading delays
          await page.evaluateOnNewDocument(() => {
            window.__PRERENDER_INJECTED = true;
          });

          // Use networkidle2 so we give Firebase/Firestore time to settle if needed
          await page.goto(`http://localhost:${PORT}${urlObj.pathname}`, { waitUntil: 'networkidle2', timeout: 30000 });
          
          // STRICT SEO RENDER VERIFICATION
          await page.waitForFunction(() => {
            const root = document.querySelector('#root');
            if (!root) return false;
            
            // 1. Check that React is done with ALL loading screens
            const html = root.innerHTML;
            if (
              html.includes('INITIALIZING STUDY HUB') ||
              html.includes('Initializing Hub...') ||
              html.includes('Loading Interface...') ||
              html.includes('Loading...') ||
              html.includes('animate-spin') // Wait for spinners to disappear
            ) {
              return false; // Still loading
            }
            
            // 2. Check that Helmet has successfully injected tags into <head>
            const title = document.title;
            const desc = document.querySelector('meta[name="description"]');
            const canonical = document.querySelector('link[rel="canonical"]');
            
            // 3. Ensure content actually exists inside root
            const hasContent = root.children.length > 0 && root.innerText.trim().length > 50;

            // IF all conditions are met, we are SEO ready
            return title.length > 5 && desc && canonical && hasContent;
          }, { timeout: 20000 }).catch(() => console.log(`[TIMEOUT] React/Helmet failed to fully mount on ${urlObj.pathname}`));
          
          // Verify one last time before saving to prevent writing blank HTML
          const isValidSEO = await page.evaluate(() => {
             const title = document.title;
             const desc = document.querySelector('meta[name="description"]');
             const canonical = document.querySelector('link[rel="canonical"]');
             const root = document.querySelector('#root');
             const hasContent = root && root.children.length > 0 && !root.innerHTML.includes('Initializing Hub...');
             return !!(title && desc && canonical && hasContent);
          });

          if (!isValidSEO) {
             console.error(`[SKIP] Missing SEO tags or content for ${pathname}. Skipping save to prevent indexing blank page.`);
             await page.close();
             return;
          }

          let content = await page.content();
          
          // Ensure HTML format
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
          console.log(`[SUCCESS] Prerendered: ${pathname}`);
          
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
