import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcDir = path.join(__dirname, 'dist');
const destDir = path.join(__dirname, '..', 'server', 'public');

function copyRecursiveSync(src, dest) {
    const exists = fs.existsSync(src);
    const stats = exists && fs.statSync(src);
    const isDirectory = exists && stats.isDirectory();
    if (isDirectory) {
        if (!fs.existsSync(dest)) {
            fs.mkdirSync(dest, { recursive: true });
        }
        fs.readdirSync(src).forEach((childItemName) => {
            copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
        });
    } else {
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

function syncBuild() {
    try {
        console.log('Syncing build assets...');
        // Then copy from dist to public
        if (!fs.existsSync(destDir)) {
            fs.mkdirSync(destDir, { recursive: true });
        }
        copyRecursiveSync(srcDir, destDir);
        console.log('Build assets synced to server/public successfully!');

        // Removed API index.html copy as serverless function is deleted
    } catch (err) {
        console.error('Error syncing build:', err);
        process.exit(1);
    }
}

syncBuild();
