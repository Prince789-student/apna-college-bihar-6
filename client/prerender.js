import puppeteer from 'puppeteer';
import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.join(__dirname, 'dist');
const port = 4173;

const routes = [
    '/',
    '/pyq',
    '/notes',
    '/syllabus',
    '/directory',
    '/colleges',
    '/blog',
    '/ugeac-predictor',
    '/study-resources',
    '/timetable',
    '/hackathons',
    '/timer',
    '/calculator',
    '/matrix',
    '/about',
    '/privacy-policy',
    '/terms',
    '/disclaimer'
];

async function prerender() {
    console.log('Starting prerendering process...');
    
    // Start static server
    const app = express();
    app.use(express.static(distPath));
    // Fallback for SPA routing
    app.use((req, res) => {
        res.sendFile(path.join(distPath, 'index.html'));
    });
    
    const server = app.listen(port);
    console.log(`Server started on port ${port}`);

    try {
        const browser = await puppeteer.launch({
            headless: 'new',
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });

        for (const route of routes) {
            console.log(`Prerendering ${route}...`);
            const page = await browser.newPage();
            
            // Go to the route and wait for DOM load
            await page.goto(`http://localhost:${port}${route}`, {
                waitUntil: 'domcontentloaded',
                timeout: 30000
            });
            
            // Wait 3 seconds for React to fully render any animations/data from Firebase cache
            await new Promise(resolve => setTimeout(resolve, 3000));

            let html = await page.content();
            
            // Add a flag so the client app knows it was prerendered
            html = html.replace('</head>', '<script>window.__PRERENDER_INJECTED = true;</script></head>');

            // Determine where to save the file
            let savePath = distPath;
            if (route !== '/') {
                const routeDir = path.join(distPath, route.substring(1));
                if (!fs.existsSync(routeDir)) {
                    fs.mkdirSync(routeDir, { recursive: true });
                }
                savePath = path.join(routeDir, 'index.html');
            } else {
                savePath = path.join(distPath, 'index.html');
            }

            fs.writeFileSync(savePath, html);
            console.log(`Saved ${savePath}`);
            await page.close();
        }

        await browser.close();
        console.log('Prerendering completed successfully!');
    } catch (err) {
        console.error('Error during prerendering:', err);
        process.exit(1);
    } finally {
        server.close();
    }
}

prerender();
