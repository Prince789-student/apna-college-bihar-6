const {
  app, BrowserWindow, Menu, Tray, shell, session,
  ipcMain, Notification, dialog, globalShortcut, powerSaveBlocker
} = require('electron');
const path = require('path');
const fs = require('fs');
const { execSync } = require('child_process');

const DEFAULT_PORTAL_URL = 'https://apnacollegebihar.online';
const PORTAL_URL = process.env.PORTAL_URL ||
  (process.argv.includes('--dev') ? 'http://localhost:5173' : DEFAULT_PORTAL_URL);

let mainWindow   = null;
let splashWindow = null;
let tray         = null;
let isQuitting   = false;

// Study Focus Blocker State
let focusActive           = false;
let focusEndTime          = null;
let focusTimerInterval    = null;
let processKillerInterval = null;
let powerSaveId           = null;

const BLOCKED_PROCESSES = [
  'Discord.exe', 'DiscordPTB.exe', 'DiscordCanary.exe',
  'Telegram.exe', 'WhatsApp.exe', 'Slack.exe', 'Teams.exe',
  'zoom.exe', 'Skype.exe', 'Signal.exe', 'Viber.exe',
  'steam.exe', 'EpicGamesLauncher.exe', 'GenshinImpact.exe',
  'VALORANT.exe', 'LeagueofLegends.exe', 'PUBG.exe',
  'Fortnite.exe', 'Minecraft.exe', 'Origin.exe', 'Battle.net.exe',
  'GameBar.exe', 'XboxApp.exe', 'GameBarPresenceWriter.exe',
  'Spotify.exe', 'vlc.exe', 'mpc-hc.exe', 'mpc-hc64.exe',
  'mpv.exe', 'PotPlayer.exe', 'PotPlayer64.exe',
  'Netflix.exe', 'HotstarApp.exe',
];

function killProcess(processName) {
  try {
    execSync('taskkill /F /IM ' + processName + ' /T', { stdio: 'ignore', windowsHide: true });
  } catch (_) {}
}

function killAllBlockedProcesses() {
  for (const proc of BLOCKED_PROCESSES) {
    killProcess(proc);
  }
}

function startFocusMode(durationSeconds) {
  if (focusActive) return;
  focusActive  = true;
  focusEndTime = Date.now() + durationSeconds * 1000;

  const stateFile = path.join(app.getPath('userData'), 'focus-state.json');
  fs.writeFileSync(stateFile, JSON.stringify({ focusEndTime }), 'utf8');

  if (mainWindow && !mainWindow.isDestroyed()) {
    mainWindow.setAlwaysOnTop(true, 'screen-saver');
    mainWindow.setFullScreen(true);
    mainWindow.setResizable(false);
    mainWindow.setClosable(false);
    mainWindow.setMinimizable(false);
    mainWindow.focus();
  }

  try { globalShortcut.register('Alt+F4',     () => {}); } catch (_) {}
  try { globalShortcut.register('Super',       () => {}); } catch (_) {}
  try { globalShortcut.register('Alt+Tab',     () => {}); } catch (_) {}
  try { globalShortcut.register('Ctrl+Escape', () => {}); } catch (_) {}

  powerSaveId = powerSaveBlocker.start('prevent-display-sleep');

  killAllBlockedProcesses();
  processKillerInterval = setInterval(killAllBlockedProcesses, 2000);

  focusTimerInterval = setInterval(() => {
    const remaining = Math.max(0, Math.ceil((focusEndTime - Date.now()) / 1000));
    if (mainWindow && !mainWindow.isDestroyed()) {
      mainWindow.webContents.send('focus-tick', { remaining, focusActive: true });
    }
    if (remaining <= 0) stopFocusMode('timer_ended');
  }, 1000);

  rebuildTrayMenu();

  if (mainWindow && !mainWindow.isDestroyed()) {
    mainWindow.webContents.send('focus-started', {
      remaining: Math.ceil(durationSeconds),
      focusEndTime
    });
  }
  console.log('[Focus] Started: ' + Math.ceil(durationSeconds / 60) + ' min');
}

function stopFocusMode(reason) {
  if (!reason) reason = 'manual';
  if (!focusActive) return;
  focusActive  = false;
  focusEndTime = null;

  if (focusTimerInterval)    { clearInterval(focusTimerInterval);    focusTimerInterval    = null; }
  if (processKillerInterval) { clearInterval(processKillerInterval); processKillerInterval = null; }
  if (powerSaveId !== null)  { powerSaveBlocker.stop(powerSaveId);   powerSaveId           = null; }

  try {
    const stateFile = path.join(app.getPath('userData'), 'focus-state.json');
    if (fs.existsSync(stateFile)) fs.unlinkSync(stateFile);
  } catch (_) {}

  if (mainWindow && !mainWindow.isDestroyed()) {
    mainWindow.setAlwaysOnTop(false);
    mainWindow.setFullScreen(false);
    mainWindow.setResizable(true);
    mainWindow.setClosable(true);
    mainWindow.setMinimizable(true);
  }

  globalShortcut.unregisterAll();
  setupAllowedShortcuts();

  if (mainWindow && !mainWindow.isDestroyed()) {
    mainWindow.webContents.send('focus-stopped', { reason });
  }

  if (Notification.isSupported()) {
    new Notification({
      title: reason === 'timer_ended' ? 'Focus Session Complete!' : 'Focus Mode Stopped',
      body: reason === 'timer_ended'
        ? 'Bahut badhiya! Padhai complete hui. Ab thoda rest karo!'
        : 'Focus mode stopped.',
      icon: path.join(__dirname, 'assets', 'icon.png')
    }).show();
  }

  rebuildTrayMenu();
  console.log('[Focus] Stopped: ' + reason);
}

function restoreFocusFromCrash() {
  try {
    const stateFile = path.join(app.getPath('userData'), 'focus-state.json');
    if (!fs.existsSync(stateFile)) return;
    const saved = JSON.parse(fs.readFileSync(stateFile, 'utf8'));
    const remaining = Math.ceil((saved.focusEndTime - Date.now()) / 1000);
    if (remaining > 10) {
      console.log('[Focus] Restoring crashed session: ' + remaining + 's');
      startFocusMode(remaining);
    } else {
      fs.unlinkSync(stateFile);
    }
  } catch (_) {}
}

function setupAllowedShortcuts() {
  try { globalShortcut.register('F5',  () => { if (mainWindow) mainWindow.reload(); }); } catch (_) {}
  try {
    globalShortcut.register('F11', () => {
      if (mainWindow && !focusActive) mainWindow.setFullScreen(!mainWindow.isFullScreen());
    });
  } catch (_) {}
}

// IPC Handlers
ipcMain.on('focus-start', (event, payload) => {
  const secs = (payload && payload.durationSeconds) ? payload.durationSeconds : 1500;
  startFocusMode(secs);
});

ipcMain.on('focus-stop', () => stopFocusMode('portal_request'));

ipcMain.handle('focus-status', () => ({
  focusActive,
  remaining: focusEndTime ? Math.max(0, Math.ceil((focusEndTime - Date.now()) / 1000)) : 0,
  focusEndTime
}));

ipcMain.on('retry-portal',    () => { if (mainWindow) mainWindow.loadURL(PORTAL_URL); });
ipcMain.on('open-external',   (_, url) => shell.openExternal(url));
ipcMain.on('window-minimize', () => { if (mainWindow && !focusActive) mainWindow.minimize(); });
ipcMain.on('window-maximize', () => {
  if (mainWindow && !focusActive) {
    if (mainWindow.isMaximized()) mainWindow.unmaximize(); else mainWindow.maximize();
  }
});
ipcMain.on('window-close', () => { if (mainWindow && !focusActive) mainWindow.close(); });

process.on('uncaughtException', (err) => {
  console.error('[CRITICAL] Uncaught exception:', err);
});

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

function getStateFilePath() {
  try { return path.join(app.getPath('userData'), 'window-state.json'); }
  catch (_) { return null; }
}

function loadWindowState() {
  try {
    const file = getStateFilePath();
    if (file && fs.existsSync(file)) return JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch (_) {}
  return { width: 1280, height: 820, isMaximized: false };
}

function saveWindowState() {
  if (!mainWindow) return;
  try {
    const file = getStateFilePath();
    if (!file) return;
    fs.writeFileSync(file, JSON.stringify({
      ...mainWindow.getBounds(),
      isMaximized: mainWindow.isMaximized()
    }));
  } catch (_) {}
}

function getAppIcon() {
  const icoPath = path.join(__dirname, 'assets', 'icon.ico');
  const pngPath = path.join(__dirname, 'assets', 'icon.png');
  if (process.platform === 'win32' && fs.existsSync(icoPath)) return icoPath;
  if (fs.existsSync(pngPath)) return pngPath;
  return undefined;
}

function createSplashWindow() {
  splashWindow = new BrowserWindow({
    width: 460, height: 320,
    transparent: true, frame: false,
    alwaysOnTop: true, center: true,
    show: false, resizable: false,
    icon: getAppIcon(),
    webPreferences: { nodeIntegration: false, contextIsolation: true }
  });
  splashWindow.loadFile(path.join(__dirname, 'splash.html'));
  splashWindow.once('ready-to-show', () => splashWindow.show());
}

function createMainWindow() {
  const state = loadWindowState();

  mainWindow = new BrowserWindow({
    x: state.x, y: state.y,
    width:  state.width  || 1280,
    height: state.height || 820,
    minWidth: 960, minHeight: 600,
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

  // Use a real Chrome UA — hiding "Electron" prevents Google from blocking auth
  const CHROME_UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 ApnaCollegeBihar-Desktop/2.1';
  mainWindow.webContents.setUserAgent(CHROME_UA);
  mainWindow.webContents.session.setUserAgent(CHROME_UA);


  if (state.isMaximized) mainWindow.maximize();
  mainWindow.loadURL(PORTAL_URL);

  mainWindow.webContents.once('did-finish-load', () => {
    setTimeout(() => {
      if (splashWindow && !splashWindow.isDestroyed()) { splashWindow.destroy(); splashWindow = null; }
      if (mainWindow  && !mainWindow.isDestroyed()) {
        mainWindow.show();
        mainWindow.focus();
        restoreFocusFromCrash();
      }
    }, 600);
  });

  mainWindow.webContents.on('did-fail-load', (event, errorCode) => {
    if (errorCode === -3) return;
    const offlineFile = path.join(__dirname, 'offline.html');
    if (fs.existsSync(offlineFile)) mainWindow.loadFile(offlineFile);
    if (splashWindow && !splashWindow.isDestroyed()) { splashWindow.destroy(); splashWindow = null; }
    mainWindow.show();
  });

  // Handle window.open() calls — Firebase signInWithPopup triggers this
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    // Truly external links (YouTube, Telegram, etc.) → open in browser
    if (isExternalUrl(url)) {
      shell.openExternal(url);
      return { action: 'deny' };
    }

    // Auth popup (Google / Firebase) → open as Electron popup
    // CRITICAL: Do NOT use sandbox or separate partition — Google blocks embedded browsers.
    // We spoof the User-Agent to look like real Chrome so Google allows the popup.
    return {
      action: 'allow',
      overrideBrowserWindowOptions: {
        width: 500,
        height: 650,
        center: true,
        title: 'Sign in with Google',
        resizable: true,
        webPreferences: {
          contextIsolation: true,
          nodeIntegration: false,
          // No sandbox — Google blocks sandboxed embedded browsers
          // No separate partition — use same session/cookies as main window
        }
      }
    };
  });

  // As soon as auth popup is created, override its User-Agent to hide Electron
  // Google detects "Electron" in the UA string and shows a blank error page
  mainWindow.webContents.on('did-create-window', (childWin) => {
    // Spoof to real Chrome 120 — Google will allow the OAuth flow
    const spoofedUA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';
    childWin.webContents.setUserAgent(spoofedUA);
    childWin.webContents.session.setUserAgent(spoofedUA);
  });


  // Intercept auth popup child windows so firebaseapp.com never leaks to Chrome
  app.on('browser-window-created', (_, childWin) => {
    if (childWin === mainWindow || childWin === splashWindow) return;

    // Watch where the auth popup navigates
    childWin.webContents.on('will-navigate', (event, url) => {
      if (isExternalUrl(url)) {
        event.preventDefault();
        shell.openExternal(url);
      }
    });

    // When Firebase auth completes it redirects back to our portal — close popup
    childWin.webContents.on('did-navigate', (event, url) => {
      if (url.includes('apnacollegebihar.online')) {
        // Auth done — focus main window and close popup
        if (mainWindow && !mainWindow.isDestroyed()) {
          mainWindow.show();
          mainWindow.focus();
          // Reload main window so React picks up the new auth state
          mainWindow.webContents.reload();
        }
        setTimeout(() => { if (!childWin.isDestroyed()) childWin.close(); }, 800);
      }
    });

    // Auto-close popup if it lands on firebaseapp auth handler (no blank page)
    childWin.webContents.on('did-finish-load', () => {
      const childUrl = childWin.webContents.getURL();
      if (childUrl.includes('firebaseapp.com/__/auth/handler')) {
        // Let Firebase process, then watch for redirect back to portal
        setTimeout(() => {
          if (!childWin.isDestroyed() && childWin.webContents.getURL().includes('apnacollegebihar.online')) {
            if (mainWindow && !mainWindow.isDestroyed()) { mainWindow.show(); mainWindow.focus(); mainWindow.webContents.reload(); }
            childWin.close();
          }
        }, 2000);
      }
    });
  });

  mainWindow.webContents.on('will-navigate', (event, url) => {
    if (isExternalUrl(url)) { event.preventDefault(); shell.openExternal(url); }
  });

  // Ensure main window is focused after auth callback
  mainWindow.webContents.on('did-navigate', (event, url) => {
    if (url.includes('apnacollegebihar.online') && mainWindow && !mainWindow.isDestroyed()) {
      if (!mainWindow.isVisible()) { mainWindow.show(); mainWindow.focus(); }
    }
  });

  mainWindow.on('close', (event) => {
    if (focusActive) { event.preventDefault(); mainWindow.focus(); return; }
    if (!isQuitting) saveWindowState();
  });

  mainWindow.on('resize',  saveWindowState);
  mainWindow.on('move',    saveWindowState);
  mainWindow.on('closed',  () => { mainWindow = null; });
}

// Domains that must stay inside the Electron window (portal + auth providers)
const INTERNAL_DOMAINS = [
  'apnacollegebihar.online',
  'localhost',
  '127.0.0.1',
  // Google OAuth flow
  'accounts.google.com',
  'oauth2.googleapis.com',
  'googleapis.com',
  'google.com',
  // Firebase Auth callback domains (apna-college-bihar.firebaseapp.com etc.)
  'firebaseapp.com',
  'firebase.com',
  'firebasestorage.googleapis.com',
];

function isExternalUrl(urlStr) {
  try {
    const host = new URL(urlStr).hostname.toLowerCase();
    for (const domain of INTERNAL_DOMAINS) {
      if (host === domain || host.endsWith('.' + domain)) return false;
    }
    return true;
  } catch (_) { return false; }
}

function buildAppMenu() {
  const nav = (route) => {
    if (mainWindow && !mainWindow.isDestroyed()) mainWindow.loadURL(DEFAULT_PORTAL_URL + route);
  };

  Menu.setApplicationMenu(Menu.buildFromTemplate([
    {
      label: 'Apna College Bihar',
      submenu: [
        {
          label: 'About Apna College Bihar',
          click: () => dialog.showMessageBox(mainWindow, {
            type: 'info', title: 'Apna College Bihar Desktop',
            message: 'Apna College Bihar Desktop Portal v2.1',
            detail: 'BEU students ka premier desktop hub.\nStudy Focus Blocker included!',
            buttons: ['OK']
          })
        },
        { type: 'separator' },
        {
          label: 'Hide to System Tray', accelerator: 'CmdOrCtrl+H',
          click: () => { if (mainWindow && !focusActive) mainWindow.hide(); }
        },
        { type: 'separator' },
        {
          label: 'Exit', accelerator: 'CmdOrCtrl+Q',
          click: () => {
            if (focusActive) {
              dialog.showMessageBox(mainWindow, {
                type: 'warning', title: 'Focus Mode Active!',
                message: 'Study chal rahi hai! Pehle focus session complete karo.',
                buttons: ['OK, Padhai Karta Hoon']
              });
              return;
            }
            isQuitting = true;
            app.quit();
          }
        }
      ]
    },
    {
      label: 'Focus Mode',
      submenu: [
        { label: 'Start 25-min Focus', accelerator: 'CmdOrCtrl+Shift+F', click: () => { if (!focusActive) startFocusMode(1500); } },
        { label: 'Start 45-min Focus', click: () => { if (!focusActive) startFocusMode(2700); } },
        { label: 'Start 60-min Focus', click: () => { if (!focusActive) startFocusMode(3600); } },
        { label: 'Start 90-min Focus', click: () => { if (!focusActive) startFocusMode(5400); } },
        { type: 'separator' },
        {
          label: 'Stop Focus Mode', accelerator: 'CmdOrCtrl+Shift+S',
          click: () => {
            if (!focusActive) return;
            dialog.showMessageBox(mainWindow, {
              type: 'warning', title: 'Focus Mode Band Karo?',
              message: 'Kya focus mode band karna chahte ho?',
              detail: 'Sirf emergency me karo!',
              buttons: ['Haan, Band Karo', 'Nahi, Padhai Jari Rakho'],
              defaultId: 1
            }).then(({ response }) => { if (response === 0) stopFocusMode('manual'); });
          }
        }
      ]
    },
    {
      label: 'Portal Hub',
      submenu: [
        { label: 'Home Overview',           accelerator: 'CmdOrCtrl+1', click: () => nav('/') },
        { label: 'Notes Bank',              accelerator: 'CmdOrCtrl+2', click: () => nav('/notes') },
        { label: 'Previous Year Questions', accelerator: 'CmdOrCtrl+3', click: () => nav('/pyq') },
        { label: 'BEU Syllabus',            accelerator: 'CmdOrCtrl+4', click: () => nav('/syllabus') },
        { label: 'UGEAC College Predictor', accelerator: 'CmdOrCtrl+5', click: () => nav('/ugeac-predictor') },
        { label: 'Study Dashboard & Timer', accelerator: 'CmdOrCtrl+6', click: () => nav('/study') },
        { label: 'CGPA to % Calculator',    accelerator: 'CmdOrCtrl+7', click: () => nav('/cgpa') },
        { label: 'Live Hackathons',         accelerator: 'CmdOrCtrl+8', click: () => nav('/hackathons') },
        { type: 'separator' },
        { label: 'Back',    accelerator: 'Alt+Left',     click: () => { if (mainWindow && mainWindow.webContents.canGoBack())    mainWindow.webContents.goBack(); } },
        { label: 'Forward', accelerator: 'Alt+Right',    click: () => { if (mainWindow && mainWindow.webContents.canGoForward()) mainWindow.webContents.goForward(); } },
        { label: 'Reload',  accelerator: 'CmdOrCtrl+R', click: () => { if (mainWindow) mainWindow.reload(); } }
      ]
    },
    {
      label: 'View',
      submenu: [
        { role: 'reload', accelerator: 'F5' }, { role: 'forceReload' },
        { type: 'separator' },
        {
          label: 'Toggle Fullscreen', accelerator: 'F11',
          click: () => { if (mainWindow && !focusActive) mainWindow.setFullScreen(!mainWindow.isFullScreen()); }
        },
        { role: 'resetZoom' }, { role: 'zoomIn' }, { role: 'zoomOut' },
        { type: 'separator' },
        { role: 'toggleDevTools', accelerator: 'F12' }
      ]
    },
    {
      label: 'Window',
      submenu: [{ role: 'minimize' }, { role: 'close' }]
    },
    {
      label: 'Help & Community',
      submenu: [
        { label: 'Visit Official Website', click: () => shell.openExternal('https://apnacollegebihar.online') },
        { label: 'Student Telegram Group', click: () => shell.openExternal('https://t.me/apnacollegebihar') },
        { label: 'Contact Support',        click: () => nav('/contact') }
      ]
    }
  ]));
}

function rebuildTrayMenu() {
  if (!tray) return;
  const items = focusActive
    ? [
        { label: 'FOCUS MODE ACTIVE', enabled: false },
        { type: 'separator' },
        { label: 'Stop Focus (Emergency)', click: () => stopFocusMode('tray_manual') },
        { type: 'separator' },
        { label: 'Cannot Quit During Focus', enabled: false }
      ]
    : [
        { label: 'Open Apna College Bihar', click: () => { if (mainWindow) { mainWindow.show(); mainWindow.focus(); } } },
        { label: 'Study Dashboard',         click: () => { if (mainWindow) { mainWindow.loadURL(DEFAULT_PORTAL_URL + '/study'); mainWindow.show(); mainWindow.focus(); } } },
        { type: 'separator' },
        { label: 'Start 25-min Focus', click: () => startFocusMode(1500) },
        { label: 'Start 45-min Focus', click: () => startFocusMode(2700) },
        { label: 'Start 60-min Focus', click: () => startFocusMode(3600) },
        { type: 'separator' },
        { label: 'Quit', click: () => { isQuitting = true; app.quit(); } }
      ];
  tray.setContextMenu(Menu.buildFromTemplate(items));
  tray.setToolTip(focusActive ? 'ACB Focus Mode Active' : 'Apna College Bihar - Desktop Portal');
}

function setupSystemTray() {
  const trayIconPath = path.join(__dirname, 'assets', 'tray-icon.png');
  if (!fs.existsSync(trayIconPath)) return;
  try {
    tray = new Tray(trayIconPath);
    tray.on('double-click', () => {
      if (mainWindow) {
        if (mainWindow.isVisible() && !focusActive) mainWindow.hide();
        else { mainWindow.show(); mainWindow.focus(); }
      }
    });
    rebuildTrayMenu();
  } catch (err) {
    console.warn('Tray setup skipped:', err.message);
  }
}

function setupDownloadManager() {
  session.defaultSession.on('will-download', (event, item) => {
    const downloadsFolder = path.join(app.getPath('downloads'), 'Apna College Bihar');
    if (!fs.existsSync(downloadsFolder)) fs.mkdirSync(downloadsFolder, { recursive: true });
    const savePath = path.join(downloadsFolder, item.getFilename());
    item.setSavePath(savePath);
    item.once('done', (event, state) => {
      if (state === 'completed' && Notification.isSupported()) {
        const notif = new Notification({
          title: 'Download Complete',
          body: 'Saved: ' + item.getFilename(),
          icon: path.join(__dirname, 'assets', 'icon.png')
        });
        notif.on('click', () => shell.showItemInFolder(savePath));
        notif.show();
      }
    });
  });
}

function initApp() {
  app.whenReady().then(() => {
    buildAppMenu();
    setupAllowedShortcuts();
    setupDownloadManager();
    createSplashWindow();
    createMainWindow();
    setupSystemTray();

    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createMainWindow();
    });
  });

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
  });

  app.on('before-quit', () => {
    if (focusActive) stopFocusMode('app_quit');
    isQuitting = true;
  });

  app.on('will-quit', () => {
    globalShortcut.unregisterAll();
  });
}
