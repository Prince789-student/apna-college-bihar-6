const { app, BrowserWindow, shell } = require('electron');
const path = require('path');
const isDev = !app.isPackaged;

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    title: "Apna College Bihar",
    icon: path.join(__dirname, 'client/public/logo-acb.png'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
    autoHideMenuBar: true,
  });

  // Load the app
  // In production, we'd load the index.html from dist
  // In dev, we load the vite dev server
  if (isDev) {
    win.loadURL('http://localhost:5173?standalone=true');
  } else {
    win.loadFile(path.join(__dirname, 'client/dist/index.html'), { query: { standalone: 'true' } });
  }

  // Handle external links (like YouTube, Telegram)
  win.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: 'deny' };
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
