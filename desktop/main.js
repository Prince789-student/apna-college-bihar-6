const { app, BrowserWindow, Menu, Tray, shell, session, ipcMain, Notification, dialog } = require('electron');
const path = require('path');
const fs = require('fs');

// Target Web Portal URL
const DEFAULT_PORTAL_URL = 'https://apnacollegebihar.online';
const PORTAL_URL = process.env.PORTAL_URL || (process.argv.includes('--dev') ? 'http://localhost:5173' : DEFAULT_PORTAL_URL);

let mainWindow = null;
let splashWindow = null;
let tray = null;
let isQuitting = false;

// Uncaught Exception Handler
process.on('uncaughtException', (err) => {
  console.error('[CRITICAL] Uncaught exception:', err);
});

// Single Instance Lock: Only allow one desktop app instance
const gotTheLock = app.requestSingleInstanceLock();
if (!gotTheLock) {
  app.quit();
} else {
  app.on('second-instance', () => {
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore();
      mainWindow.show();
      mainWindow.focus();
    }
  });

  initApp();
}

// Window state management (remembers last size and position)
function getStateFilePath() {
  try {
    return path.join(app.getPath('userData'), 'window-state.json');
  } catch (e) {
    return null;
  }
}

function loadWindowState() {
  try {
    const file = getStateFilePath();
    if (file && fs.existsSync(file)) {
      return JSON.parse(fs.readFileSync(file, 'utf8'));
    }
  } catch (e) {
    console.error('Failed to load window state:', e);
  }
  return { width: 1280, height: 820, isMaximized: false };
}

function saveWindowState() {
  if (!mainWindow) return;
  try {
    const file = getStateFilePath();
    if (!file) return;
    const isMaximized = mainWindow.isMaximized();
    const bounds = mainWindow.getBounds();
    fs.writeFileSync(file, JSON.stringify({ ...bounds, isMaximized }));
  } catch (e) {
    console.error('Failed to save window state:', e);
  }
}

function getAppIcon() {
  const icoPath = path.join(__dirname, 'assets', 'icon.ico');
  const pngPath = path.join(__dirname, 'assets', 'icon.png');
  if (process.platform === 'win32' && fs.existsSync(icoPath)) return icoPath;
  if (fs.existsSync(pngPath)) return pngPath;
  return undefined;
}

// 1. Create Splash Screen
function createSplashWindow() {
  splashWindow = new BrowserWindow({
    width: 460,
    height: 320,
    transparent: true,
    frame: false,
    alwaysOnTop: true,
    center: true,
    show: false,
    resizable: false,
    icon: getAppIcon(),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  splashWindow.loadFile(path.join(__dirname, 'splash.html'));
  splashWindow.once('ready-to-show', () => {
    splashWindow.show();
  });
}

// 2. Create Main Window
function createMainWindow() {
  const state = loadWindowState();

  mainWindow = new BrowserWindow({
    x: state.x,
    y: state.y,
    width: state.width || 1280,
    height: state.height || 820,
    minWidth: 960,
    minHeight: 600,
    title: 'Apna College Bihar - Desktop Portal',
    icon: getAppIcon(),
    show: false,
    backgroundColor: '#0a0f1d',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: false,
      spellcheck: true
    }
  });

  // Custom User-Agent tag
  const defaultUA = mainWindow.webContents.getUserAgent();
  mainWindow.webContents.setUserAgent(`${defaultUA} ApnaCollegeBihar-Desktop/2.0`);

  if (state.isMaximized) {
    mainWindow.maximize();
  }

  // Load portal
  mainWindow.loadURL(PORTAL_URL);

  // When portal finishes loading, reveal main window and close splash
  mainWindow.webContents.once('did-finish-load', () => {
    setTimeout(() => {
      if (splashWindow && !splashWindow.isDestroyed()) {
        splashWindow.destroy();
        splashWindow = null;
      }
      if (mainWindow && !mainWindow.isDestroyed()) {
        mainWindow.show();
        mainWindow.focus();
      }
    }, 600);
  });

  // Handle Offline / Network Failures
  mainWindow.webContents.on('did-fail-load', (event, errorCode, errorDescription, validatedURL) => {
    console.warn(`[Portal Load Error] Code: ${errorCode}, Description: ${errorDescription}, URL: ${validatedURL}`);
    
    // Ignore cancelled loads or subframe loads
    if (errorCode === -3) return; // ABORTED

    const offlineFile = path.join(__dirname, 'offline.html');
    if (fs.existsSync(offlineFile)) {
      mainWindow.loadFile(offlineFile);
    }
    
    if (splashWindow && !splashWindow.isDestroyed()) {
      splashWindow.destroy();
      splashWindow = null;
    }
    mainWindow.show();
  });

  // Handle External Links (open in user's default browser)
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    if (isExternalUrl(url)) {
      shell.openExternal(url);
      return { action: 'deny' };
    }
    return { action: 'allow' };
  });

  mainWindow.webContents.on('will-navigate', (event, url) => {
    if (isExternalUrl(url)) {
      event.preventDefault();
      shell.openExternal(url);
    }
  });

  // Window State Persistence
  mainWindow.on('resize', saveWindowState);
  mainWindow.on('move', saveWindowState);

  mainWindow.on('close', (event) => {
    if (!isQuitting) {
      saveWindowState();
    }
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

function isExternalUrl(urlStr) {
  try {
    const parsed = new URL(urlStr);
    const host = parsed.hostname.toLowerCase();
    // Keep portal internal links inside the desktop app
    if (host.includes('apnacollegebihar.online') || host === 'localhost' || host === '127.0.0.1') {
      return false;
    }
    // External links (YouTube, Telegram, Google drive, WhatsApp, etc.)
    return true;
  } catch (e) {
    return false;
  }
}

// 3. Application Menu Setup
function buildAppMenu() {
  const navigateTo = (route) => {
    if (mainWindow && !mainWindow.isDestroyed()) {
      mainWindow.loadURL(`${DEFAULT_PORTAL_URL}${route}`);
    }
  };

  const template = [
    {
      label: 'Apna College Bihar',
      submenu: [
        {
          label: 'About Apna College Bihar',
          click: () => {
            dialog.showMessageBox(mainWindow, {
              type: 'info',
              title: 'Apna College Bihar Desktop',
              message: 'Apna College Bihar Desktop Portal v2.0',
              detail: 'The premier desktop hub for Bihar Engineering University (BEU) students.\nAccess Notes, PYQs, Syllabus, CGPA Calculator, and UGEAC Predictor directly from your laptop.',
              buttons: ['OK']
            });
          }
        },
        { type: 'separator' },
        {
          label: 'Hide to System Tray',
          accelerator: 'CmdOrCtrl+H',
          click: () => {
            if (mainWindow) mainWindow.hide();
          }
        },
        { type: 'separator' },
        {
          label: 'Exit',
          accelerator: 'CmdOrCtrl+Q',
          click: () => {
            isQuitting = true;
            app.quit();
          }
        }
      ]
    },
    {
      label: 'Portal Hub',
      submenu: [
        { label: '🏠 Home Overview', accelerator: 'CmdOrCtrl+1', click: () => navigateTo('/') },
        { label: '📚 Notes Bank', accelerator: 'CmdOrCtrl+2', click: () => navigateTo('/notes') },
        { label: '📝 Previous Year Questions (PYQs)', accelerator: 'CmdOrCtrl+3', click: () => navigateTo('/pyq') },
        { label: '📋 BEU Syllabus', accelerator: 'CmdOrCtrl+4', click: () => navigateTo('/syllabus') },
        { label: '🎯 UGEAC College Predictor', accelerator: 'CmdOrCtrl+5', click: () => navigateTo('/ugeac-predictor') },
        { label: '⏱️ Study Dashboard & Timer', accelerator: 'CmdOrCtrl+6', click: () => navigateTo('/study') },
        { label: '📊 CGPA to Percentage Calculator', accelerator: 'CmdOrCtrl+7', click: () => navigateTo('/cgpa') },
        { label: '🏆 Live Hackathons', accelerator: 'CmdOrCtrl+8', click: () => navigateTo('/hackathons') },
        { type: 'separator' },
        {
          label: 'Back',
          accelerator: 'Alt+Left',
          click: () => {
            if (mainWindow && mainWindow.webContents.canGoBack()) mainWindow.webContents.goBack();
          }
        },
        {
          label: 'Forward',
          accelerator: 'Alt+Right',
          click: () => {
            if (mainWindow && mainWindow.webContents.canGoForward()) mainWindow.webContents.goForward();
          }
        },
        {
          label: 'Reload Page',
          accelerator: 'CmdOrCtrl+R',
          click: () => {
            if (mainWindow) mainWindow.reload();
          }
        }
      ]
    },
    {
      label: 'View',
      submenu: [
        { role: 'reload', accelerator: 'F5' },
        { role: 'forceReload' },
        { type: 'separator' },
        { role: 'togglefullscreen', accelerator: 'F11' },
        { role: 'resetZoom' },
        { role: 'zoomIn' },
        { role: 'zoomOut' },
        { type: 'separator' },
        { role: 'toggleDevTools', accelerator: 'F12' }
      ]
    },
    {
      label: 'Window',
      submenu: [
        { role: 'minimize' },
        { role: 'close' }
      ]
    },
    {
      label: 'Help & Community',
      submenu: [
        {
          label: 'Visit Official Website',
          click: () => shell.openExternal('https://apnacollegebihar.online')
        },
        {
          label: 'Student Telegram Group',
          click: () => shell.openExternal('https://t.me/apnacollegebihar')
        },
        {
          label: 'Contact Support',
          click: () => navigateTo('/contact')
        }
      ]
    }
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}

// 4. System Tray Setup
function setupSystemTray() {
  const trayIconPath = path.join(__dirname, 'assets', 'tray-icon.png');
  if (!fs.existsSync(trayIconPath)) return;

  try {
    tray = new Tray(trayIconPath);
    const contextMenu = Menu.buildFromTemplate([
      {
        label: 'Open Apna College Bihar',
        click: () => {
          if (mainWindow) {
            mainWindow.show();
            mainWindow.focus();
          }
        }
      },
      {
        label: 'Study Dashboard',
        click: () => {
          if (mainWindow) {
            mainWindow.loadURL(`${DEFAULT_PORTAL_URL}/study`);
            mainWindow.show();
            mainWindow.focus();
          }
        }
      },
      { type: 'separator' },
      {
        label: 'Quit Desktop App',
        click: () => {
          isQuitting = true;
          app.quit();
        }
      }
    ]);

    tray.setToolTip('Apna College Bihar - Desktop Portal');
    tray.setContextMenu(contextMenu);

    tray.on('double-click', () => {
      if (mainWindow) {
        if (mainWindow.isVisible()) {
          mainWindow.hide();
        } else {
          mainWindow.show();
          mainWindow.focus();
        }
      }
    });
  } catch (err) {
    console.warn('Tray setup skipped:', err.message);
  }
}

// 5. Smart Download Manager for Notes, PYQs, and Syllabi
function setupDownloadManager() {
  session.defaultSession.on('will-download', (event, item, webContents) => {
    const downloadsFolder = path.join(app.getPath('downloads'), 'Apna College Bihar');
    if (!fs.existsSync(downloadsFolder)) {
      fs.mkdirSync(downloadsFolder, { recursive: true });
    }

    const fileName = item.getFilename();
    const savePath = path.join(downloadsFolder, fileName);
    item.setSavePath(savePath);

    item.once('done', (event, state) => {
      if (state === 'completed') {
        if (Notification.isSupported()) {
          const notif = new Notification({
            title: 'Download Complete',
            body: `Saved: ${fileName}\nClick to view file in folder.`,
            icon: path.join(__dirname, 'assets', 'icon.png')
          });
          notif.on('click', () => {
            shell.showItemInFolder(savePath);
          });
          notif.show();
        }
      } else {
        console.warn(`Download failed: ${state}`);
      }
    });
  });
}

// IPC Handlers
ipcMain.on('retry-portal', () => {
  if (mainWindow) {
    mainWindow.loadURL(PORTAL_URL);
  }
});

ipcMain.on('open-external', (event, url) => {
  shell.openExternal(url);
});

ipcMain.on('window-minimize', () => {
  if (mainWindow) mainWindow.minimize();
});

ipcMain.on('window-maximize', () => {
  if (mainWindow) {
    if (mainWindow.isMaximized()) mainWindow.unmaximize();
    else mainWindow.maximize();
  }
});

ipcMain.on('window-close', () => {
  if (mainWindow) mainWindow.close();
});

// App Lifecycle
function initApp() {
  app.whenReady().then(() => {
    buildAppMenu();
    setupDownloadManager();
    createSplashWindow();
    createMainWindow();
    setupSystemTray();

    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) {
        createMainWindow();
      }
    });
  });

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  app.on('before-quit', () => {
    isQuitting = true;
  });
}
