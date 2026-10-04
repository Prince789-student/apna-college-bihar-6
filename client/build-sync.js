import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcDir = path.join(__dirname, 'dist');
const destDir = path.join(__dirname, '..', 'server', 'public');

function copyRecursiveSync(src, dest, filterFn) {
    const exists = fs.existsSync(src);
    const stats = exists && fs.statSync(src);
    const isDirectory = exists && stats.isDirectory();
    if (isDirectory) {
        if (!fs.existsSync(dest)) {
            fs.mkdirSync(dest, { recursive: true });
        }
        fs.readdirSync(src).forEach((childItemName) => {
            const childSrc = path.join(src, childItemName);
            if (filterFn && !filterFn(childSrc, childItemName)) return;
            copyRecursiveSync(childSrc, path.join(dest, childItemName), filterFn);
        });
    } else {
        if (filterFn && !filterFn(src, path.basename(src))) return;
        fs.copyFileSync(src, dest);
    }
}

function cleanDir(dir) {
    if (!fs.existsSync(dir)) return;
    fs.readdirSync(dir).forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            cleanDir(filePath);
            if (fs.readdirSync(filePath).length === 0) {
                fs.rmdirSync(filePath);
            }
        } else {
            const isProtected = file.endsWith('.apk') || 
                                file.endsWith('.aab') || 
                                file.endsWith('.pdf') || 
                                file === '.htaccess' || 
                                file === '_redirects';
            if (!isProtected) {
                fs.unlinkSync(filePath);
            }
        }
    });
}

const assetsDestDir = path.join(destDir, 'assets');

const androidAssetsDir = path.join(__dirname, 'android', 'app', 'src', 'main', 'assets', 'public');

function syncBuild() {
    try {
        console.log('Syncing build assets...');


        // 1. Clean conflicting directories in server/public so Vercel cleanUrls maps cleanly to flat .html files without directory collision
        const conflictingDirs = ['about', 'contact', 'privacy-policy', 'terms', 'disclaimer', 'dmca', 'notes', 'pyq', 'syllabus', 'ugeac-predictor', 'cgpa'];
        conflictingDirs.forEach(dir => {
            const p = path.join(destDir, dir);
            if (fs.existsSync(p)) fs.rmSync(p, { recursive: true, force: true });
        });
        const serverBlogHtml = path.join(destDir, 'blog.html');
        if (fs.existsSync(serverBlogHtml)) {
            fs.unlinkSync(serverBlogHtml);
        }
        const serverBlogDir = path.join(destDir, 'blog');
        if (fs.existsSync(serverBlogDir)) {
            fs.readdirSync(serverBlogDir).forEach(item => {
                const p = path.join(serverBlogDir, item);
                if (fs.statSync(p).isDirectory()) {
                    fs.rmSync(p, { recursive: true, force: true });
                }
            });
        }

        // Clean stale assets in server/public/assets to remove old unused hash bundles
        if (fs.existsSync(assetsDestDir)) {
            fs.rmSync(assetsDestDir, { recursive: true, force: true });
            console.log('Cleaned old asset bundles from server/public/assets');
        }

        // 2. Copy from dist to server/public
        if (!fs.existsSync(destDir)) {
            fs.mkdirSync(destDir, { recursive: true });
        }
        copyRecursiveSync(srcDir, destDir);
        console.log('Build assets synced to server/public successfully!');

        // 2. Also sync to android/app/src/main/assets/public if present (excluding apk/zip/exe/aab)
        if (fs.existsSync(path.dirname(androidAssetsDir))) {
            const androidAssetsSubdir = path.join(androidAssetsDir, 'assets');
            if (fs.existsSync(androidAssetsSubdir)) {
                fs.rmSync(androidAssetsSubdir, { recursive: true, force: true });
                console.log('Cleaned old asset bundles from android/app/src/main/assets/public/assets');
            }
            if (!fs.existsSync(androidAssetsDir)) {
                fs.mkdirSync(androidAssetsDir, { recursive: true });
            }
            copyRecursiveSync(srcDir, androidAssetsDir, (p, name) => !name.endsWith('.apk') && !name.endsWith('.zip') && !name.endsWith('.aab') && !name.endsWith('.exe'));
            
            // Clean Android index.html so it NEVER has pre-rendered desktop website HTML in <div id="root">
            const androidIndexHtmlPath = path.join(androidAssetsDir, 'index.html');
            if (fs.existsSync(androidIndexHtmlPath)) {
                let androidHtml = fs.readFileSync(androidIndexHtmlPath, 'utf8');
                // Replace everything from <div id="root"> up to <noscript> with clean <div id="root"></div>
                androidHtml = androidHtml.replace(/<div id="root">[\s\S]*?(?=\s*<noscript>)/i, '<div id="root"></div>\n\n');
                fs.writeFileSync(androidIndexHtmlPath, androidHtml, 'utf8');
            }
            console.log('Build assets synced to Android Capacitor assets successfully (Clean Root)!');
        }
    } catch (err) {
        console.error('Error syncing build:', err);
        process.exit(1);
    }
}

syncBuild();
