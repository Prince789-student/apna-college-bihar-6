const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const files = fs.readdirSync(publicDir);

files.forEach(file => {
  if (file.endsWith('.html')) {
    let newFileName = file.replace(/2024/g, '2026').replace(/2025/g, '2026');
    const oldPath = path.join(publicDir, file);
    const newPath = path.join(publicDir, newFileName);
    
    // Rename file if name contains 2024/2025
    if (file !== newFileName) {
      if (fs.existsSync(newPath)) {
         fs.unlinkSync(newPath); // Remove existing to avoid conflict
      }
      fs.renameSync(oldPath, newPath);
      console.log(`Renamed: ${file} -> ${newFileName}`);
    } else {
      newFileName = file; 
    }

    // Update contents
    let content = fs.readFileSync(newPath, 'utf8');
    let newContent = content.replace(/2024/g, '2026').replace(/2025/g, '2026');
    if (content !== newContent) {
      fs.writeFileSync(newPath, newContent, 'utf8');
      console.log(`Updated contents of: ${newFileName}`);
    }
  }
});
