const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

console.log('====================================================');
console.log('  Building Apna College Bihar Desktop Application   ');
console.log('====================================================');

const DESKTOP_DIR = __dirname;
const DIST_DIR = path.join(DESKTOP_DIR, 'dist');
const ICON_PATH = fs.existsSync(path.join(DESKTOP_DIR, 'assets', 'icon.ico'))
  ? path.join(DESKTOP_DIR, 'assets', 'icon.ico')
  : path.join(DESKTOP_DIR, 'assets', 'icon.png');

console.log('[1/2] Running Electron Packager for Windows x64...');
const command = `npx -y electron-packager . "Apna College Bihar" --platform=win32 --arch=x64 --out=dist --overwrite`;

try {
  execSync(command, { cwd: DESKTOP_DIR, stdio: 'inherit' });
  console.log('[2/2] Packaging complete!');
  
  const outputDir = path.join(DIST_DIR, 'Apna College Bihar-win32-x64');
  console.log('\n====================================================');
  console.log('SUCCESS: Desktop App generated successfully!');
  console.log('Executable Location:');
  console.log(path.join(outputDir, 'Apna College Bihar.exe'));
  console.log('====================================================\n');
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}
