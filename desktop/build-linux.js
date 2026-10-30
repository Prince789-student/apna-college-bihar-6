const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

console.log('====================================================');
console.log('  Building Apna College Bihar Linux Desktop Package ');
console.log('====================================================');

const DESKTOP_DIR = __dirname;
const DIST_DIR = path.join(DESKTOP_DIR, 'dist');
const LINUX_OUTPUT_DIR = path.join(DIST_DIR, 'Apna-College-Bihar-linux-x64');
const PUBLIC_DIR = path.join(DESKTOP_DIR, '..', 'client', 'public');
const TAR_DEST = path.join(PUBLIC_DIR, 'Apna-College-Bihar-Linux-x64.tar.gz');

const ICON_PATH = fs.existsSync(path.join(DESKTOP_DIR, 'assets', 'icon.png'))
  ? path.join(DESKTOP_DIR, 'assets', 'icon.png')
  : path.join(DESKTOP_DIR, 'assets', 'icon.ico');

console.log('[1/4] Packaging Electron application for Linux x64...');
const packCmd = `npx -y electron-packager . "Apna-College-Bihar" --platform=linux --arch=x64 --out=dist --overwrite --icon="${ICON_PATH}"`;

try {
  execSync(packCmd, { cwd: DESKTOP_DIR, stdio: 'inherit' });
} catch (err) {
  console.error('Packaging failed:', err.message);
  process.exit(1);
}

console.log('[2/4] Generating Linux desktop entry and launcher...');
const desktopEntry = `[Desktop Entry]
Name=Apna College Bihar
Comment=Official Study Engine for Bihar Engineering University (BEU)
Exec=./Apna-College-Bihar %U
Icon=icon
Terminal=false
Type=Application
Categories=Education;Development;
`;
fs.writeFileSync(path.join(LINUX_OUTPUT_DIR, 'apna-college-bihar.desktop'), desktopEntry);

// Copy icon into dist
if (fs.existsSync(path.join(DESKTOP_DIR, 'assets', 'icon.png'))) {
  fs.copyFileSync(
    path.join(DESKTOP_DIR, 'assets', 'icon.png'),
    path.join(LINUX_OUTPUT_DIR, 'icon.png')
  );
}

// Generate run.sh launcher with universal distro & sandbox compatibility
const runSh = `#!/bin/bash
DIR="$(cd "$(dirname "\${BASH_SOURCE[0]}")" && pwd)"
chmod +x "$DIR/Apna-College-Bihar" 2>/dev/null || true
chmod +x "$DIR/chrome-sandbox" 2>/dev/null || true
exec "$DIR/Apna-College-Bihar" --no-sandbox "$@"
`;
fs.writeFileSync(path.join(LINUX_OUTPUT_DIR, 'run.sh'), runSh);

// Prune dev node_modules and extra locales to keep archive under GitHub 100MB limit
const appNodeModules = path.join(LINUX_OUTPUT_DIR, 'resources', 'app', 'node_modules');
if (fs.existsSync(appNodeModules)) {
  fs.rmSync(appNodeModules, { recursive: true, force: true });
}

const localesDir = path.join(LINUX_OUTPUT_DIR, 'locales');
if (fs.existsSync(localesDir)) {
  const allowedLocales = ['en-US.pak', 'en-GB.pak', 'hi.pak'];
  fs.readdirSync(localesDir).forEach(file => {
    if (!allowedLocales.includes(file)) {
      try { fs.unlinkSync(path.join(localesDir, file)); } catch (_) {}
    }
  });
}

console.log('[3/4] Creating tar.gz archive for portable Linux distribution...');
try {
  execSync(`tar -czvf "${TAR_DEST}" -C "${DIST_DIR}" "Apna-College-Bihar-linux-x64"`, { stdio: 'inherit' });
  console.log('[4/4] Archive created successfully in client/public!');
  console.log(`Destination: ${TAR_DEST}`);
} catch (err) {
  console.error('Archive creation failed:', err.message);
  process.exit(1);
}

console.log('\n====================================================');
console.log('SUCCESS: Linux Desktop App package ready!');
console.log('File available at: /Apna-College-Bihar-Linux-x64.tar.gz');
console.log('====================================================\n');
