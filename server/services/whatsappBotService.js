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
            return ['continue', 'ok', 'done', 'close', 'get started', 'agree'].includes(txt);
          });
          if (target) {
            target.click();
            return;
          }
        }
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
  sendChannelPost(caption, options = {}) {
    return new Promise((resolve) => {
      this.queue = this.queue.then(async () => {
        try {
          const res = await this._executeSendChannelPost(caption, options);
          resolve(res);
        } catch (err) {
          resolve({ success: false, error: err.message });
        }
      }).catch((err) => {
        resolve({ success: false, error: err.message });
      });
    });
  }

  async _executeSendChannelPost(caption, options = {}) {
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
      let isChannelsActive = await this.page.evaluate(() => {
        const btn = document.querySelector('button[aria-label="Channels"]');
        return btn && (btn.getAttribute('data-navbar-item-selected') === 'true' || btn.getAttribute('aria-pressed') === 'true');
      });

      if (!isChannelsActive) {
        console.log('[WhatsApp Bot] Channels tab is not active. Switching to Channels tab...');
        const btn = await this.page.$('button[aria-label="Channels"]');
        if (btn) {
          const box = await btn.boundingBox();
          if (box) {
            await this.page.mouse.click(box.x + box.width / 2, box.y + box.height / 2);
          } else {
            await btn.click();
          }
        } else {
          // Fallback to coordinates
          await this.page.mouse.click(32, 162);
        }
        await new Promise(r => setTimeout(r, 2000));
        await this.dismissAllModals();
      }

      // Wait for Channels panel header to appear
      await this.page.waitForFunction(() => {
        const btn = document.querySelector('button[aria-label="Channels"]');
        return btn && btn.getAttribute('data-navbar-item-selected') === 'true';
      }, { timeout: 5000 }).catch(() => {});

      // 3. Find and click channel "Apna College Bihar" in the channels list
      console.log(`[WhatsApp Bot] Locating and clicking channel "${CHANNEL_NAME}"...`);
      const targetPos = await this.page.evaluate((targetName) => {
        // Find exact title match first
        const allSpans = Array.from(document.querySelectorAll('span[title], div[title], [aria-label]'));
        const exactMatch = allSpans.find(el => {
          const t = (el.getAttribute('title') || el.getAttribute('aria-label') || '').trim();
          const rect = el.getBoundingClientRect();
          return t.toLowerCase() === targetName.toLowerCase() && rect.x > 40 && rect.x < 450 && rect.y > 70 && rect.y < 700;
        });

        if (exactMatch) {
          const rect = exactMatch.getBoundingClientRect();
          const row = exactMatch.closest('div[role="listitem"], div[role="row"], div[role="button"], div[tabindex]') || exactMatch;
          row.click();
          return { x: Math.round(rect.x + rect.width / 2), y: Math.round(rect.y + rect.height / 2), matchedText: exactMatch.getAttribute('title') };
        }

        // Fallback: look for text that strictly equals targetName
        const all = Array.from(document.querySelectorAll('span, div, p'));
        for (const el of all) {
          const rect = el.getBoundingClientRect();
          if (rect.x >= 50 && rect.x <= 400 && rect.y >= 80 && rect.y <= 650 && rect.width > 20 && rect.height > 15) {
            const text = (el.innerText || el.textContent || '').trim();
            if (text.toLowerCase() === targetName.toLowerCase()) {
              const row = el.closest('div[role="listitem"], div[role="row"], div[role="button"], div[tabindex]') || el;
              row.click();
              return { x: Math.round(rect.x + rect.width / 2), y: Math.round(rect.y + rect.height / 2), matchedText: text };
            }
          }
        }

        // Fallback: First item in channels list (x=200, y=205)
        return { x: 200, y: 205, isFallback: true };
      }, CHANNEL_NAME);

      if (targetPos) {
        console.log(`[WhatsApp Bot] Found "${CHANNEL_NAME}" (matched: ${targetPos.matchedText || 'fallback'}) at (${targetPos.x}, ${targetPos.y}). Clicking...`);
        await this.page.mouse.click(targetPos.x, targetPos.y);
      }

      await new Promise(r => setTimeout(r, 2500));
      await this.dismissAllModals();

      // Diagnostic screenshot after clicking channel
      try {
        const afterClickPath = path.join(__dirname, '..', 'public', 'whatsapp_after_channel_click.png');
        await this.page.screenshot({ path: afterClickPath });
      } catch (e) {}

      // 4. Locate message composer input area in channel
      console.log('[WhatsApp Bot] Locating message input area in channel...');
      let composerHandle = null;
      try {
        composerHandle = await this.page.waitForFunction(() => {
          const editables = Array.from(document.querySelectorAll('div[contenteditable="true"], footer [contenteditable], div[role="textbox"]'));
          const valid = editables.filter(el => {
            const rect = el.getBoundingClientRect();
            const isSearch = el.getAttribute('data-tab') === '3' || !!el.closest('[data-testid="chat-list-search"]') || !!el.closest('div[role="search"]');
            return rect.x > 300 && !isSearch && rect.width > 50;
          });
          return valid[valid.length - 1] || null;
        }, { timeout: 15000 });
      } catch (waitErr) {
        try {
          const debugPath = path.join(__dirname, '..', 'public', 'whatsapp_composer_debug.png');
          await this.page.screenshot({ path: debugPath });
        } catch (sErr) {}
        throw new Error(`Message composer not found in "${CHANNEL_NAME}". Check if channel opened properly: ${waitErr.message}`);
      }

      // Check if media file is requested to be attached
      let isMediaUploaded = false;
      if (options && options.filePath && fs.existsSync(options.filePath)) {
        console.log(`[WhatsApp Bot] Attaching media file to post: ${options.filePath}`);
        try {
          // Click attach paperclip button to ensure menu/fileInput is initialized
          const attachBtn = await this.page.$('footer button[aria-label="Attach"], footer [title="Attach"], span[data-icon="clip"]');
          if (attachBtn) {
            await attachBtn.click();
            await new Promise(r => setTimeout(r, 600));
          }

          const fileInput = await this.page.$('input[type="file"][accept*="image"], footer input[type="file"], input[type="file"]');
          if (fileInput) {
            console.log('[WhatsApp Bot] Uploading media asset to WhatsApp Web...');
            await fileInput.uploadFile(options.filePath);
            // Wait for WhatsApp media preview dialog to appear
            await new Promise(r => setTimeout(r, 2500));
            isMediaUploaded = true;
            console.log('[WhatsApp Bot] Media file uploaded, caption editor modal is active.');
          }
        } catch (uploadErr) {
          console.warn('[WhatsApp Bot] Media upload failed, falling back to text post:', uploadErr.message);
        }
      }

      // 5. Focus the active caption/composer box
      await this.page.evaluate((hasMedia) => {
        const editables = Array.from(document.querySelectorAll('div[contenteditable="true"], div[role="textbox"]'));
        const valid = editables.filter(el => {
          const rect = el.getBoundingClientRect();
          const isSearch = el.getAttribute('data-tab') === '3' || !!el.closest('[data-testid="chat-list-search"]') || !!el.closest('div[role="search"]');
          return rect.x > 250 && !isSearch;
        });
        const target = valid[valid.length - 1];
        if (target) {
          target.focus();
          target.click();
        }
      }, isMediaUploaded);

      await new Promise(r => setTimeout(r, 400));

      // 6. Insert formatted text preserving clean newlines and emojis
      const lines = caption.split('\n');
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (line.length > 0) {
          await this.page.evaluate((l) => {
            document.execCommand('insertText', false, l);
          }, line);
        }
        if (i < lines.length - 1) {
          await this.page.keyboard.down('Shift');
          await this.page.keyboard.press('Enter');
          await this.page.keyboard.up('Shift');
        }
      }

      await this.page.evaluate(() => {
        const editables = Array.from(document.querySelectorAll('div[contenteditable="true"], div[role="textbox"]'));
        const valid = editables.filter(el => el.getAttribute('data-tab') !== '3');
        const target = valid[valid.length - 1];
        if (target) {
          target.dispatchEvent(new Event('input', { bubbles: true }));
          target.dispatchEvent(new Event('change', { bubbles: true }));
        }
      });

      await new Promise(r => setTimeout(r, 800));

      // 7. Click Send button or press Enter
      console.log('[WhatsApp Bot] Clicking Send button for caption...');
      const sendPos = await this.page.evaluate(() => {
        // Priority 1: Send icon inside media modal or composer
        const sendIcon = document.querySelector('span[data-icon="send"], span[data-icon="wds-ic-send-filled"], [data-icon*="send"]');
        if (sendIcon) {
          const r = sendIcon.getBoundingClientRect();
          return { x: Math.round(r.x + r.width / 2), y: Math.round(r.y + r.height / 2), type: 'icon' };
        }

        // Priority 2: Button with aria-label "Send"
        const sendAria = document.querySelector('button[aria-label="Send"], button[aria-label="send"], [data-testid="send"], [data-testid="compose-btn-send"]');
        if (sendAria) {
          const r = sendAria.getBoundingClientRect();
          return { x: Math.round(r.x + r.width / 2), y: Math.round(r.y + r.height / 2), type: 'aria' };
        }

        // Priority 3: The last button in the footer (which replaces mic with send when text is present)
        const footerBtns = Array.from(document.querySelectorAll('footer button, [data-testid="conversation-footer"] button'));
        for (let i = footerBtns.length - 1; i >= 0; i--) {
          const b = footerBtns[i];
          const aria = (b.getAttribute('aria-label') || '').toLowerCase();
          const r = b.getBoundingClientRect();
          if (!aria.includes('attach') && !aria.includes('emoji') && r.x > 800) {
            return { x: Math.round(r.x + r.width / 2), y: Math.round(r.y + r.height / 2), type: 'lastFooter' };
          }
        }

        return null;
      });

      if (sendPos) {
        console.log(`[WhatsApp Bot] Found send button (${sendPos.type}) at (${sendPos.x}, ${sendPos.y}). Clicking...`);
        await this.page.mouse.click(sendPos.x, sendPos.y);
      } else {
        console.log('[WhatsApp Bot] Send button not found by selector, pressing Enter...');
        await this.page.keyboard.press('Enter');
      }

      await new Promise(r => setTimeout(r, 2000));

      // Check if text is still in composer, press Enter as fail-safe
      const isStillInComposer = await this.page.evaluate(() => {
        const editables = Array.from(document.querySelectorAll('div[contenteditable="true"], div[role="textbox"]'));
        const valid = editables.filter(el => el.getAttribute('data-tab') !== '3');
        const target = valid[valid.length - 1];
        return target && target.innerText && target.innerText.trim().length > 0;
      });

      if (isStillInComposer) {
        console.log('[WhatsApp Bot] Text still in composer, pressing Enter key to submit...');
        await this.page.keyboard.press('Enter');
        await new Promise(r => setTimeout(r, 1500));
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
