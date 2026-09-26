const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const SESSION_DIR = path.join(__dirname, '..', '.wpp_session');
const PUBLIC_QR_PATH = path.join(__dirname, '..', 'public', 'whatsapp_qr.png');
const CHANNEL_NAME = 'Apna College Bihar';
const CHANNEL_INVITE_CODE = '0029VbC6FsH3wtb5UEDvrW0a';

function getExecutablePath() {
  const candidates = [
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
  ];
  return candidates.find(p => fs.existsSync(p)) || null;
}

function cleanStaleSessionLocks() {
  try {
    const lockfilePath = path.join(SESSION_DIR, 'lockfile');
    if (fs.existsSync(lockfilePath)) {
      fs.unlinkSync(lockfilePath);
      console.log('[WhatsApp Bot] Removed stale lockfile.');
    }
  } catch (e) {}
}

class WhatsAppBotService {
  constructor() {
    this.browser = null;
    this.page = null;
    this.status = 'DISCONNECTED';
    this.qrImage = null;
    this.isStarting = false;
    this.queue = Promise.resolve();
  }

  async start() {
    if (this.status === 'CONNECTED' || this.isStarting) return;
    this.isStarting = true;
    this.status = 'INITIALIZING';
    console.log('[WhatsApp Bot] Starting automated WhatsApp Web session...');

    try {
      const execPath = getExecutablePath();
      if (!execPath) {
        throw new Error('System browser not found on host machine.');
      }

      if (!fs.existsSync(SESSION_DIR)) {
        fs.mkdirSync(SESSION_DIR, { recursive: true });
      }

      cleanStaleSessionLocks();

      this.browser = await puppeteer.launch({
        executablePath: execPath,
        headless: 'new',
        userDataDir: SESSION_DIR,
        args: [
          '--no-sandbox',
          '--disable-setuid-sandbox',
          '--disable-dev-shm-usage',
          '--disable-gpu',
          '--window-size=1366,768'
        ]
      });

      this.page = await this.browser.newPage();
      await this.page.setViewport({ width: 1366, height: 768 });
      await this.page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36');

      console.log('[WhatsApp Bot] Loading WhatsApp Web...');
      await this.page.goto('https://web.whatsapp.com', { waitUntil: 'load', timeout: 60000 });

      this.monitorSession();
      this.isStarting = false;
    } catch (err) {
      this.isStarting = false;
      this.status = 'DISCONNECTED';
      console.error('[WhatsApp Bot] Launch error:', err.message);
    }
  }

  async dismissAllModals() {
    if (!this.page || this.page.isClosed()) return;
    try {
      await this.page.keyboard.press('Escape');
    } catch (e) {}

    try {
      await this.page.evaluate(() => {
        const dialogs = document.querySelectorAll('div[role="dialog"], [data-animate-modal-popup="true"]');
        for (const dialog of dialogs) {
          const closeBtn = dialog.querySelector('button[aria-label="Close"], button[aria-label="close"], span[data-icon="x"], span[data-icon="close"]');
          if (closeBtn) {
            (closeBtn.closest('button') || closeBtn).click();
            return;
          }
          const btns = Array.from(dialog.querySelectorAll('button, div[role="button"]'));
          const target = btns.find(b => {
            const txt = (b.innerText || '').trim().toLowerCase();
            return ['continue', 'ok', 'cancel', 'done', 'close', 'get started', 'agree'].includes(txt);
          });
          if (target) {
            target.click();
            return;
          }
        }

        const allBtns = Array.from(document.querySelectorAll('button, div[role="button"]'));
        const cont = allBtns.find(b => {
          const txt = (b.innerText || '').trim().toLowerCase();
          return txt === 'continue' || txt === 'ok' || txt === 'cancel';
        });
        if (cont) cont.click();
      });
    } catch (e) {}
  }

  async monitorSession() {
    if (!this.page) return;

    const checkInterval = setInterval(async () => {
      if (!this.page || this.page.isClosed()) {
        clearInterval(checkInterval);
        this.status = 'DISCONNECTED';
        return;
      }

      try {
        await this.dismissAllModals();

        const loggedIn = await this.page.$('#pane-side, [data-testid="chat-list"], header [data-testid="menu-bar"]');
        if (loggedIn) {
          if (this.status !== 'CONNECTED') {
            console.log('[WhatsApp Bot] 🎉 WhatsApp Web is CONNECTED & Authenticated!');
            this.status = 'CONNECTED';
            this.qrImage = null;
            if (fs.existsSync(PUBLIC_QR_PATH)) {
              try { fs.unlinkSync(PUBLIC_QR_PATH); } catch (e) {}
            }
          }
          return;
        }

        const canvas = await this.page.$('canvas');
        if (canvas) {
          this.status = 'SCAN_QR_NEEDED';
          const buffer = await canvas.screenshot();
          const base64 = buffer.toString('base64');
          this.qrImage = `data:image/png;base64,${base64}`;

          try {
            fs.writeFileSync(PUBLIC_QR_PATH, buffer);
          } catch (e) {}
          return;
        }

        const reloadBtn = await this.page.$('div[role="button"][data-ref], span[data-icon="refresh"]');
        if (reloadBtn) {
          await reloadBtn.click();
        }
      } catch (e) {}
    }, 3000);
  }

  getStatus() {
    return {
      status: this.status,
      qrImage: this.qrImage,
      qrUrl: '/whatsapp_qr.png',
      channelInviteCode: CHANNEL_INVITE_CODE,
      channelName: CHANNEL_NAME,
      channelUrl: `https://whatsapp.com/channel/${CHANNEL_INVITE_CODE}`
    };
  }

  isConnected() {
    return this.status === 'CONNECTED';
  }

  /**
   * Post message directly to the official WhatsApp Channel (strictly queued)
   */
  sendChannelPost(caption) {
    return new Promise((resolve) => {
      this.queue = this.queue.then(async () => {
        try {
          const res = await this._executeSendChannelPost(caption);
          resolve(res);
        } catch (err) {
          resolve({ success: false, error: err.message });
        }
      }).catch((err) => {
        resolve({ success: false, error: err.message });
      });
    });
  }

  async _executeSendChannelPost(caption) {
    if (!this.isConnected() || !this.page) {
      console.warn('[WhatsApp Bot] Cannot send: WhatsApp is not connected.');
      return { success: false, reason: 'NOT_CONNECTED' };
    }

    console.log(`[WhatsApp Bot] Preparing to post to channel: "${CHANNEL_NAME}"...`);

    try {
      // 1. Dismiss any open modal dialog
      await this.dismissAllModals();
      await new Promise(r => setTimeout(r, 600));

      // 2. Ensure Channels tab is selected
      console.log('[WhatsApp Bot] Ensuring Channels tab is active in WhatsApp Web...');
      const isChannelsActive = await this.page.evaluate(() => {
        const btn = document.querySelector('button[aria-label="Channels"]');
        return btn && (btn.getAttribute('data-navbar-item-selected') === 'true' || btn.getAttribute('aria-pressed') === 'true');
      });

      if (!isChannelsActive) {
        console.log('[WhatsApp Bot] Channels tab is not active. Switching to Channels tab via hardware mouse click...');
        await this.page.mouse.move(32, 162);
        await this.page.mouse.down({ button: 'left' });
        await new Promise(r => setTimeout(r, 120));
        await this.page.mouse.up({ button: 'left' });
        await new Promise(r => setTimeout(r, 2000));
        await this.dismissAllModals();
      }

      // 3. Find and click channel "Apna College Bihar" in the channels list
      console.log(`[WhatsApp Bot] Locating and clicking channel "${CHANNEL_NAME}"...`);
      const targetPos = await this.page.evaluate((targetName) => {
        const elements = Array.from(document.querySelectorAll('*'));
        for (const el of elements) {
          const rect = el.getBoundingClientRect();
          if (rect.x >= 50 && rect.x <= 400 && rect.y >= 80 && rect.y <= 650 && rect.width > 20 && rect.height > 15) {
            const text = (el.innerText || el.textContent || '').trim().toLowerCase();
            const title = (el.getAttribute('title') || '').trim().toLowerCase();
            if (title.includes(targetName.toLowerCase()) || text.includes(targetName.toLowerCase())) {
              return { x: Math.round(rect.x + rect.width / 2), y: Math.round(rect.y + rect.height / 2) };
            }
          }
        }
        return null;
      }, CHANNEL_NAME);

      if (targetPos) {
        console.log(`[WhatsApp Bot] Found "${CHANNEL_NAME}" at (${targetPos.x}, ${targetPos.y}). Clicking...`);
        await this.page.mouse.move(targetPos.x, targetPos.y);
        await this.page.mouse.down({ button: 'left' });
        await new Promise(r => setTimeout(r, 100));
        await this.page.mouse.up({ button: 'left' });
      } else {
        console.log(`[WhatsApp Bot] "${CHANNEL_NAME}" fallback click at (200, 205)...`);
        await this.page.mouse.move(200, 205);
        await this.page.mouse.down({ button: 'left' });
        await new Promise(r => setTimeout(r, 100));
        await this.page.mouse.up({ button: 'left' });
      }

      await new Promise(r => setTimeout(r, 2500));
      await this.dismissAllModals();

      // 4. Locate message composer input area in channel
      console.log('[WhatsApp Bot] Locating message input area in channel...');
      const composerHandle = await this.page.waitForFunction(() => {
        const editables = Array.from(document.querySelectorAll('div[contenteditable="true"], footer [contenteditable], div[role="textbox"]'));
        const valid = editables.filter(el => {
          const rect = el.getBoundingClientRect();
          const isSearch = el.getAttribute('data-tab') === '3' || !!el.closest('[data-testid="chat-list-search"]') || !!el.closest('div[role="search"]');
          return rect.x > 350 && !isSearch;
        });
        return valid[valid.length - 1] || null;
      }, { timeout: 15000 });

      if (!composerHandle) {
        throw new Error(`Message composer not found in "${CHANNEL_NAME}". Make sure this logged-in WhatsApp account is an Admin of the channel.`);
      }

      const inputEl = composerHandle.asElement();
      if (inputEl) {
        await inputEl.click();
      }
      await new Promise(r => setTimeout(r, 400));

      // 5. Insert formatted text preserving newlines
      await this.page.evaluate((text) => {
        const editables = Array.from(document.querySelectorAll('div[contenteditable="true"], footer [contenteditable], div[role="textbox"]'));
        const target = editables.filter(el => {
          const rect = el.getBoundingClientRect();
          return rect.x > 350 && el.getAttribute('data-tab') !== '3';
        }).pop();

        if (target) {
          target.focus();
          document.execCommand('insertText', false, text);
          target.dispatchEvent(new Event('input', { bubbles: true }));
          target.dispatchEvent(new Event('change', { bubbles: true }));
        }
      }, caption);

      await new Promise(r => setTimeout(r, 1000));

      // 6. Click Send button or press Enter
      const sendSuccess = await this.page.evaluate(() => {
        const sendIcon = document.querySelector('span[data-icon="send"], span[data-icon="wds-ic-send-filled"]');
        if (sendIcon) {
          const btn = sendIcon.closest('button') || sendIcon.closest('div[role="button"]') || sendIcon;
          btn.click();
          return true;
        }
        const footerBtns = Array.from(document.querySelectorAll('footer button, [data-testid="compose-btn-send"], footer div[role="button"]'));
        const lastBtn = footerBtns[footerBtns.length - 1];
        if (lastBtn) {
          lastBtn.click();
          return true;
        }
        return false;
      });

      if (!sendSuccess) {
        console.log('[WhatsApp Bot] Send button not clicked directly, pressing Enter...');
        await this.page.keyboard.press('Enter');
      }

      await new Promise(r => setTimeout(r, 2000));
      console.log(`[WhatsApp Bot] ✅ Message successfully posted to channel "${CHANNEL_NAME}"!`);

      // Save success screenshot for confirmation
      try {
        const successPath = path.join(__dirname, '..', 'public', 'whatsapp_last_success.png');
        await this.page.screenshot({ path: successPath });
      } catch (e) {}

      return {
        success: true,
        postedAt: new Date().toISOString()
      };
    } catch (err) {
      console.error('[WhatsApp Bot] Error posting to channel:', err.message);
      
      try {
        const debugPath = path.join(__dirname, '..', 'public', 'whatsapp_error_debug.png');
        await this.page.screenshot({ path: debugPath });
      } catch (sErr) {}

      return {
        success: false,
        error: err.message
      };
    }
  }

  async close() {
    if (this.browser) {
      try {
        await this.browser.close();
      } catch (e) {}
      this.browser = null;
      this.page = null;
      this.status = 'DISCONNECTED';
    }
  }
}

const botService = new WhatsAppBotService();
module.exports = botService;
