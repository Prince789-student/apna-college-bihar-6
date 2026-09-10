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
        const conflictingDirs = ['about', 'contact', 'privacy-policy', 'terms', 'disclaimer', 'dmca'];
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

        // 2. Copy from dist to server/public
        if (!fs.existsSync(destDir)) {
            fs.mkdirSync(destDir, { recursive: true });
        }
        copyRecursiveSync(srcDir, destDir);
        console.log('Build assets synced to server/public successfully!');

        // 2. Also sync to android/app/src/main/assets/public if present (excluding apk/zip)
        if (fs.existsSync(path.dirname(androidAssetsDir))) {
            if (!fs.existsSync(androidAssetsDir)) {
                fs.mkdirSync(androidAssetsDir, { recursive: true });
            }
            copyRecursiveSync(srcDir, androidAssetsDir, (p, name) => !name.endsWith('.apk') && !name.endsWith('.zip') && !name.endsWith('.aab'));
            console.log('Build assets synced to Android Capacitor assets successfully!');
        }
    } catch (err) {
        console.error('Error syncing build:', err);
        process.exit(1);
    }
}

syncBuild();
