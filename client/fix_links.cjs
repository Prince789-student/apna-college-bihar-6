const fs = require('fs');
const path = require('path');

function processDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDir(fullPath);
        } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let original = content;
            // Replace /dashboard/ (except /dashboard/admin) with /
            content = content.replace(/\/dashboard\/(?!admin)/g, '/');
            // Also replace exact matches of "/dashboard" (like Navigate to="/dashboard") with "/"
            // But exclude '/dashboard/admin'
            content = content.replace(/(['"`])\/dashboard(?!\/)(['"`])/g, '$1/$2');
            
            if (content !== original) {
                fs.writeFileSync(fullPath, content);
                console.log(`Updated ${fullPath}`);
            }
        }
    }
}

processDir(path.join(__dirname, 'src'));
console.log('Done!');
