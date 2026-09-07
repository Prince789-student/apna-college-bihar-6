const { contextBridge, ipcRenderer } = require('electron');

// Expose safe desktop bridge API to portal window
contextBridge.exposeInMainWorld('desktopBridge', {
  isDesktop: true,
  appVersion: '2.0.0',
  platform: process.platform,
  retryConnection: () => ipcRenderer.send('retry-portal'),
  openExternalUrl: (url) => ipcRenderer.send('open-external', url),
  minimize: () => ipcRenderer.send('window-minimize'),
  maximize: () => ipcRenderer.send('window-maximize'),
  close: () => ipcRenderer.send('window-close')
});
