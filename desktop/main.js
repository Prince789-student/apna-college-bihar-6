const {
  app, BrowserWindow, Menu, Tray, shell, session,
  ipcMain, Notification, dialog, globalShortcut, powerSaveBlocker
} = require('electron');
const path = require('path');
const fs = require('fs');
const http = require('http');
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

// ── Authentication Loopback & Deep Link System ──────────────────────────────────
let authLoopbackServer = null;
let authLoopbackPort = 0;

function applyDesktopAuth(userData) {
  if (!mainWindow || mainWindow.isDestroyed()) return;
  const { uid, email, name, role, idToken, accessToken, authData } = userData;
  console.log('[Auth] Applying auth for:', email || name, uid);
  
  const userPayload = {
    uid,
    email: email || '',
    name: name || 'Scholar',
    role: (email === 'prince8694@gmail.com' || email === 'prince86944@gmail.com') ? 'SUPER_ADMIN' : (role || 'STUDENT')
  };

  const script = `
    (async function() {
      try {
        const u = ${JSON.stringify(userPayload)};
        localStorage.setItem('acb_user_cache', JSON.stringify(u));
        ${authData ? `try { localStorage.setItem('firebase:authUser:AIzaSyBIvnhJLz_ucsxuFEnZeYSAq2L6vJ4DcKo:[DEFAULT]', decodeURIComponent("${encodeURIComponent(authData)}")); } catch (_) {}` : ''}
        if (typeof window.__acb_login_with_credential === 'function') {
          await window.__acb_login_with_credential(${JSON.stringify(idToken || '')}, ${JSON.stringify(accessToken || '')}, u);
        }
        window.location.href = '/';
      } catch (err) {
        console.error('[Desktop] Failed to set auth cache:', err);
        window.location.href = '/';
      }
    })();
  `;
  mainWindow.webContents.executeJavaScript(script);
  mainWindow.show();
  mainWindow.focus();

  if (Notification.isSupported()) {
    new Notification({
      title: 'Login Safal Raha! 🎉',
      body: 'Welcome back, ' + (name || 'Scholar') + '!',
      icon: path.join(__dirname, 'assets', 'icon.png')
    }).show();
  }
}

function handleAuthCallbackUrl(urlStr) {
  try {
    const parsed = new URL(urlStr);
    const uid = parsed.searchParams.get('uid');
    if (uid) {
      applyDesktopAuth({
        uid,
        email: parsed.searchParams.get('email') || '',
        name: parsed.searchParams.get('name') || 'Scholar',
        role: parsed.searchParams.get('role') || 'STUDENT',
        idToken: parsed.searchParams.get('idToken') || parsed.searchParams.get('token') || '',
        accessToken: parsed.searchParams.get('accessToken') || '',
        authData: parsed.searchParams.get('authData') || ''
      });
    }
  } catch (err) {
    console.error('[Auth] Failed to parse callback URL:', err);
  }
}

function startAuthLoopbackServer() {
  return new Promise((resolve, reject) => {
    if (authLoopbackServer) {
      try { authLoopbackServer.close(); } catch (_) {}
      authLoopbackServer = null;
    }

    authLoopbackServer = http.createServer((req, res) => {
      try {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

        if (req.method === 'OPTIONS') {
          res.writeHead(204);
          res.end();
          return;
        }

        const parsedUrl = new URL(req.url, `http://127.0.0.1:${authLoopbackPort}`);

        if (parsedUrl.pathname === '/callback' || parsedUrl.pathname === '/auth-callback') {
          const uid = parsedUrl.searchParams.get('uid');
          const email = parsedUrl.searchParams.get('email') || '';
          const name = parsedUrl.searchParams.get('name') || 'Scholar';
          const role = parsedUrl.searchParams.get('role') || 'STUDENT';
          const idToken = parsedUrl.searchParams.get('idToken') || parsedUrl.searchParams.get('token') || '';
          const accessToken = parsedUrl.searchParams.get('accessToken') || '';
          const authData = parsedUrl.searchParams.get('authData') || '';

          if (uid) {
            applyDesktopAuth({ uid, email, name, role, idToken, accessToken, authData });

            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(`
              <!DOCTYPE html>
              <html>
              <head>
                <meta charset="utf-8">
                <title>Login Successful</title>
                <style>
                  body { background: #0a0f1d; color: #fff; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; }
                  .card { background: #0f172a; border: 1px solid #3b82f6; border-radius: 16px; padding: 32px; text-align: center; max-width: 400px; box-shadow: 0 20px 40px rgba(0,0,0,0.6); }
                  h2 { color: #10b981; margin-bottom: 8px; }
                  p { color: #94a3b8; font-size: 14px; line-height: 1.5; }
                </style>
              </head>
              <body>
                <div class="card">
                  <h2>✓ Login Kamyab Hua!</h2>
                  <p>Welcome back, <b>${name}</b>!</p>
                  <p style="margin-top: 12px; font-size: 12px; color: #64748b;">Apna College Bihar Desktop App ab active ho chuki hai. Yeh tab band kar sakte hain.</p>
                </div>
                <script>setTimeout(() => { try { window.close(); } catch(_) {} }, 2200);</script>
              </body>
              </html>
            `);

            setTimeout(() => {
              if (authLoopbackServer) {
                authLoopbackServer.close();
                authLoopbackServer = null;
              }
            }, 3000);
            return;
          }
        }

        res.writeHead(404);
        res.end('Not found');
      } catch (err) {
        console.error('[Auth Loopback] Request error:', err);
        res.writeHead(500);
        res.end('Error');
      }
    });

    authLoopbackServer.listen(0, '127.0.0.1', () => {
      authLoopbackPort = authLoopbackServer.address().port;
      console.log('[Auth Loopback] Running on http://127.0.0.1:' + authLoopbackPort);
      resolve(authLoopbackPort);
    });

    authLoopbackServer.on('error', (err) => {
      console.error('[Auth Loopback] Server error:', err);
      reject(err);
    });
  });
}

// IPC Handlers
ipcMain.handle('start-desktop-google-login', async () => {
  try {
    const port = await startAuthLoopbackServer();
    const loginUrl = `${PORTAL_URL}/desktop-auth.html?port=${port}`;
    shell.openExternal(loginUrl);
    return { success: true, port };
  } catch (err) {
    console.error('[IPC] start-desktop-google-login error:', err);
    return { success: false, error: err.message };
  }
});

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

// Register deep link protocol scheme: apnacollege://
if (process.defaultApp) {
  if (process.argv.length >= 2) {
    app.setAsDefaultProtocolClient('apnacollege', process.execPath, [path.resolve(process.argv[1])]);
  }
} else {
  app.setAsDefaultProtocolClient('apnacollege');
}

const gotTheLock = app.requestSingleInstanceLock();
if (!gotTheLock) {
  app.quit();
} else {
  app.on('second-instance', (event, commandLine) => {
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore();
      mainWindow.show();
      mainWindow.focus();
    }
    const deepLinkUrl = commandLine.find(arg => typeof arg === 'string' && arg.startsWith('apnacollege://'));
    if (deepLinkUrl) {
      handleAuthCallbackUrl(deepLinkUrl);
    }
  });
  initApp();
}

app.on('open-url', (event, url) => {
  event.preventDefault();
  handleAuthCallbackUrl(url);
});

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

const CHROME_UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36';

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

  mainWindow.webContents.setUserAgent(CHROME_UA);

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

  // Handle window.open() calls — in-app popups
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    if (isExternalUrl(url)) {
      shell.openExternal(url);
      return { action: 'deny' };
    }

    return {
      action: 'allow',
      overrideBrowserWindowOptions: {
        width: 520,
        height: 680,
        center: true,
        title: 'Sign in with Google',
        resizable: true,
        webPreferences: {
          contextIsolation: true,
          nodeIntegration: false
        }
      }
    };
  });

  mainWindow.webContents.on('did-create-window', (childWin) => {
    childWin.webContents.setUserAgent(CHROME_UA);
  });

  mainWindow.webContents.on('will-navigate', (event, url) => {
    if (isExternalUrl(url)) {
      event.preventDefault();
      shell.openExternal(url);
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

function isExternalUrl(urlStr) {
  try {
    const urlObj = new URL(urlStr);
    const host = urlObj.hostname.toLowerCase();
    if (
      host === 'apnacollegebihar.online' || host.endsWith('.apnacollegebihar.online') ||
      host === 'localhost' || host === '127.0.0.1' ||
      host.includes('google.') || host.includes('googleapis.') ||
      host.includes('gstatic.') || host.includes('googleusercontent.') ||
      host.includes('firebase')
    ) {
      return false;
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
    session.defaultSession.setUserAgent(CHROME_UA);

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
