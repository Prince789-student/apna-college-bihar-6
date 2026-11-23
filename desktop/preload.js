const { contextBridge, ipcRenderer } = require('electron');

// Directly expose native desktop flags
try {
  contextBridge.exposeInMainWorld('__ACB_DESKTOP__', true);
  contextBridge.exposeInMainWorld('isDesktopApp', true);
} catch (_) {}

// Expose safe desktop bridge API to portal window
contextBridge.exposeInMainWorld('desktopBridge', {
  isDesktop: true,
  appVersion: '2.1.0',
  platform: process.platform,

  // Window controls
  retryConnection: () => ipcRenderer.send('retry-portal'),
  openExternalUrl: (url) => ipcRenderer.send('open-external', url),
  minimize: () => ipcRenderer.send('window-minimize'),
  maximize: () => ipcRenderer.send('window-maximize'),
  close:    () => ipcRenderer.send('window-close'),
  startGoogleLogin: () => ipcRenderer.invoke('start-desktop-google-login'),

  // ── Study Focus Blocker API ────────────────────────────────────────────────

  /**
   * Start a focus session that locks the app fullscreen and kills distracting processes.
   * @param {number} durationSeconds - e.g. 1500 for 25 min, 3600 for 60 min
   */
  startFocus: (durationSeconds) => {
    ipcRenderer.send('focus-start', { durationSeconds });
  },

  /** Stop the active focus session (emergency / manual). */
  stopFocus: () => {
    ipcRenderer.send('focus-stop');
  },

  /** Returns a Promise resolving to { focusActive, remaining, focusEndTime } */
  getFocusStatus: () => ipcRenderer.invoke('focus-status'),

  /**
   * Register a callback that fires every second with { remaining, focusActive }.
   * Returns an unsubscribe function.
   */
  onFocusTick: (callback) => {
    const handler = (_, data) => callback(data);
    ipcRenderer.on('focus-tick', handler);
    return () => ipcRenderer.removeListener('focus-tick', handler);
  },

  /**
   * Register a callback fired when a focus session starts.
   * Receives { remaining, focusEndTime }.
   */
  onFocusStarted: (callback) => {
    const handler = (_, data) => callback(data);
    ipcRenderer.on('focus-started', handler);
    return () => ipcRenderer.removeListener('focus-started', handler);
  },

  /**
   * Register a callback fired when a focus session ends.
   * Receives { reason } — 'timer_ended' | 'manual' | 'portal_request' | 'tray_manual'
   */
  onFocusStopped: (callback) => {
    const handler = (_, data) => callback(data);
    ipcRenderer.on('focus-stopped', handler);
    return () => ipcRenderer.removeListener('focus-stopped', handler);
  },

  onDesktopAuthPayload: (callback) => {
    const handler = (_, payload) => callback(payload);
    ipcRenderer.on('desktop-auth-payload', handler);
    return () => ipcRenderer.removeListener('desktop-auth-payload', handler);
  }
});

// Listen for secure IPC auth payload from main process
ipcRenderer.on('desktop-auth-payload', async (_, payload) => {
  try {
    if (!payload || typeof payload !== 'object') return;
    const { userPayload, idToken, accessToken, customToken, authData } = payload;
    if (userPayload) {
      localStorage.setItem('acb_user_cache', JSON.stringify(userPayload));
    }
    if (authData) {
      try {
        for (let i = 0; i < localStorage.length; i++) {
          const k = localStorage.key(i);
          if (k && k.startsWith('firebase:authUser:')) {
            localStorage.setItem(k, authData);
          }
        }
      } catch (_) {}
    }
    if (typeof window.__acb_login_with_credential === 'function') {
      await window.__acb_login_with_credential(idToken || '', accessToken || '', userPayload, customToken || '');
    }
    window.location.href = '/';
  } catch (err) {
    console.error('[Desktop] Failed to apply IPC auth payload:', err);
    window.location.href = '/';
  }
});
