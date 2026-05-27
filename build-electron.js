const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const WORKSPACE = path.join(__dirname, 'electron-workspace');
const DIST_ELECTRON = path.join(__dirname, 'electron-workspace', 'dist-electron');

// 1. Clean workspace
if (fs.existsSync(WORKSPACE)) {
  fs.rmSync(WORKSPACE, { recursive: true, force: true });
}
fs.mkdirSync(WORKSPACE);

// 2. Copy compiled frontend to workspace
console.log('Copying client/dist...');
const clientDist = path.join(__dirname, 'client', 'dist');
const workspaceClient = path.join(WORKSPACE, 'client');
fs.mkdirSync(workspaceClient);
fs.cpSync(clientDist, path.join(workspaceClient, 'dist'), { recursive: true });

// 3. Copy public assets (like logo)
console.log('Copying public assets...');
const publicDir = path.join(__dirname, 'client', 'public');
fs.cpSync(publicDir, path.join(workspaceClient, 'public'), { recursive: true });

// 4. Copy electron main script
console.log('Copying electron main script...');
fs.copyFileSync(
  path.join(__dirname, 'electron-main.js'),
  path.join(WORKSPACE, 'electron-main.js')
);

// 5. Create minimal package.json for the app
console.log('Generating minimal package.json...');
const packageJson = {
  name: "apna-college-bihar",
  productName: "Apna College Bihar",
  version: "1.0.0",
  main: "electron-main.js",
  dependencies: {}
};
fs.writeFileSync(
  path.join(WORKSPACE, 'package.json'),
  JSON.stringify(packageJson, null, 2)
);

console.log('Workspace prepared successfully!');

// 6. Skip npm install since no production dependencies exist
console.log('No production dependencies to install.');

// 7. Run electron-packager
console.log('Packaging App...');
// We use npx to run electron-packager installed globally or locally
try {
  execSync('npx electron-packager . "Apna College Bihar" --platform=win32 --arch=x64 --out=dist-electron --overwrite --icon=client/public/logo-acb.png', { cwd: WORKSPACE, stdio: 'inherit' });
  console.log('Packaging successful!');
} catch (e) {
  console.error('Packaging failed:', e.message);
  process.exit(1);
}

// 8. Zip the output using powershell
console.log('Zipping the final app...');
const appFolder = path.join(DIST_ELECTRON, 'Apna College Bihar-win32-x64');
const serverZipFile = path.join(__dirname, 'server', 'public', 'Apna-College-Bihar-Windows.zip');

if (fs.existsSync(serverZipFile)) fs.unlinkSync(serverZipFile);

try {
  execSync(`powershell -Command "Compress-Archive -Path '${appFolder}' -DestinationPath '${serverZipFile}' -Force"`, { stdio: 'inherit' });
  console.log('Zipping complete! File located at:', serverZipFile);
} catch (e) {
  console.error('Zipping failed:', e.message);
}
