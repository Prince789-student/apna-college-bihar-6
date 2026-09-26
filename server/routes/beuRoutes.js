const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const admin = require('../firebaseAdmin');
const { generateWhatsAppCaption, CHANNEL_URL } = require('../services/beuAiService');
const whatsappService = require('../services/whatsappService');
const { syncBeuAndBroadcast, loadLocalNotices } = require('../cron/beuAutoBroadcaster');

const LOCAL_STORAGE_PATH = path.join(__dirname, '..', 'data', 'beu_notices.json');

/**
 * GET /api/beu/notices
 * Fetch all notices with their AI WhatsApp captions (merges local cache & Firestore)
 */
router.get('/notices', async (req, res) => {
  try {
    const localNotices = loadLocalNotices();
    let noticesList = Object.values(localNotices);

    // If Firestore is available, attempt to merge
    if (admin && admin.apps && admin.apps.length > 0) {
      try {
        const snap = await admin.firestore().collection('beu_notifications').get();
        snap.forEach(doc => {
          const data = doc.data();
          const id = String(data.id || doc.id);
          if (!localNotices[id]) {
            localNotices[id] = { id, ...data };
          } else {
            // merge captions if present
            if (data.whatsappCaption && !localNotices[id].whatsappCaption) {
              localNotices[id].whatsappCaption = data.whatsappCaption;
            }
          }
        });
        noticesList = Object.values(localNotices);
      } catch (fsErr) {
        // Fallback to local cache seamlessly
      }
    }

    // Sort descending by noticedate / ID
    noticesList.sort((a, b) => {
      const idA = Number(a.id) || 0;
      const idB = Number(b.id) || 0;
      return idB - idA;
    });

    res.json({
      success: true,
      count: noticesList.length,
      channelUrl: CHANNEL_URL,
      notices: noticesList
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

/**
 * POST /api/beu/sync-and-broadcast
 * Trigger manual sync and AI auto-broadcast
 */
router.post('/sync-and-broadcast', async (req, res) => {
  try {
    const forceAll = req.body.forceAll === true;
    const result = await syncBeuAndBroadcast({ forceAll });
    if (result.success) {
      return res.json({
        success: true,
        message: `Sync successful! ${result.newCount} new notices found, ${result.aiCount} AI captions processed.`,
        data: result
      });
    } else {
      return res.status(500).json({ success: false, message: result.message || result.error });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

/**
 * POST /api/beu/generate-caption
 * Generate AI Caption for a specific notice on demand
 */
router.post('/generate-caption', async (req, res) => {
  const { noticeId, title, pdfUrl, date } = req.body;
  if (!title) {
    return res.status(400).json({ success: false, message: 'Notice title is required.' });
  }

  try {
    const aiResult = await generateWhatsAppCaption({ id: noticeId, title, pdfUrl, date });

    // Update local cache
    if (noticeId) {
      const localNotices = loadLocalNotices();
      const idStr = String(noticeId);
      if (!localNotices[idStr]) {
        localNotices[idStr] = { id: noticeId, title, pdfUrl, date };
      }
      localNotices[idStr].whatsappCaption = aiResult.caption;
      localNotices[idStr].aiProcessed = true;
      localNotices[idStr].updatedAt = new Date().toISOString();
      fs.writeFileSync(LOCAL_STORAGE_PATH, JSON.stringify(localNotices, null, 2), 'utf8');

      // Update Firestore if accessible
      if (admin && admin.apps && admin.apps.length > 0) {
        try {
          await admin.firestore().collection('beu_notifications').doc(idStr).set({
            whatsappCaption: aiResult.caption,
            aiProcessed: true,
            updatedAt: admin.firestore.FieldValue.serverTimestamp()
          }, { merge: true });
        } catch (fErr) {
          // ignore quota
        }
      }
    }

    res.json({
      success: true,
      caption: aiResult.caption,
      model: aiResult.model
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

/**
 * PUT /api/beu/update-caption
 * Update / Edit caption manually by Admin
 */
router.put('/update-caption', async (req, res) => {
  const { noticeId, caption } = req.body;
  if (!noticeId || !caption) {
    return res.status(400).json({ success: false, message: 'Notice ID and caption are required.' });
  }

  try {
    const localNotices = loadLocalNotices();
    const idStr = String(noticeId);
    if (localNotices[idStr]) {
      localNotices[idStr].whatsappCaption = caption;
      localNotices[idStr].updatedAt = new Date().toISOString();
      fs.writeFileSync(LOCAL_STORAGE_PATH, JSON.stringify(localNotices, null, 2), 'utf8');
    }

    if (admin && admin.apps && admin.apps.length > 0) {
      try {
        await admin.firestore().collection('beu_notifications').doc(idStr).update({
          whatsappCaption: caption,
          updatedAt: admin.firestore.FieldValue.serverTimestamp()
        });
      } catch (fErr) {
        // ignore quota
      }
    }

    res.json({ success: true, message: 'Caption updated successfully!' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

/**
 * POST /api/beu/dispatch-whatsapp
 * Send / Share to WhatsApp via Webhook on demand
 */
router.post('/dispatch-whatsapp', async (req, res) => {
  const { noticeId, caption, pdfUrl, title } = req.body;
  if (!caption) {
    return res.status(400).json({ success: false, message: 'Caption is required to dispatch.' });
  }

  try {
    const result = await whatsappService.sendMessage({ caption, pdfUrl, title, noticeId });

    if (noticeId) {
      const localNotices = loadLocalNotices();
      const idStr = String(noticeId);
      if (localNotices[idStr]) {
        localNotices[idStr].whatsappDispatched = result.status === 'SENT';
        localNotices[idStr].whatsappStatus = result.status;
        localNotices[idStr].lastDispatchedAt = new Date().toISOString();
        fs.writeFileSync(LOCAL_STORAGE_PATH, JSON.stringify(localNotices, null, 2), 'utf8');
      }

      if (admin && admin.apps && admin.apps.length > 0) {
        try {
          await admin.firestore().collection('beu_notifications').doc(idStr).update({
            whatsappDispatched: result.status === 'SENT',
            whatsappStatus: result.status,
            lastDispatchedAt: admin.firestore.FieldValue.serverTimestamp()
          });
        } catch (fErr) {}
      }
    }

    res.json({ success: true, result });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

const whatsappBotService = require('../services/whatsappBotService');

/**
 * GET /api/beu/whatsapp-session
 * Returns current status of the WhatsApp Bot (CONNECTED, SCAN_QR_NEEDED, INITIALIZING, DISCONNECTED)
 */
router.get('/whatsapp-session', (req, res) => {
  const sessionInfo = whatsappBotService.getStatus();
  res.json({
    success: true,
    ...sessionInfo
  });
});

/**
 * POST /api/beu/whatsapp-start
 * Starts the headless WhatsApp session to generate/refresh QR code
 */
router.post('/whatsapp-start', async (req, res) => {
  try {
    whatsappBotService.start();
    res.json({
      success: true,
      message: 'WhatsApp session initialization started.'
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

/**
 * POST /api/beu/whatsapp-test-post
 * Posts a test update to verify channel posting
 */
router.post('/whatsapp-test-post', async (req, res) => {
  try {
    if (!whatsappBotService.isConnected()) {
      return res.status(400).json({
        success: false,
        message: 'WhatsApp is not connected yet. Please scan the QR code first.'
      });
    }

    const testMessage = `🤖 *Apna College Bihar - Test Broadcast*\n\nWhatsApp Automation is successfully linked and active!\n🗓️ ${new Date().toLocaleString('en-IN')}\n\n#BEU #ApnaCollegeBihar`;
    const result = await whatsappBotService.sendChannelPost(testMessage);

    res.json({
      success: result.success,
      result
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

/**
 * GET /api/beu/config-status
 */
router.get('/config-status', (req, res) => {
  res.json({
    whatsappConfigured: whatsappService.isConfigured(),
    botConnected: whatsappBotService.isConnected(),
    botStatus: whatsappBotService.status,
    channelUrl: CHANNEL_URL,
    hasGeminiKey: !!process.env.GEMINI_API_KEY,
    hasTelegram: !!(process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID)
  });
});

/**
 * GET /api/beu/whatsapp-debug-screenshot
 * Returns a screenshot of the WhatsApp Web page for debugging
 */
router.get('/whatsapp-debug-screenshot', async (req, res) => {
  try {
    if (!whatsappBotService.page) {
      return res.status(400).send('No page open');
    }
    const buf = await whatsappBotService.page.screenshot();
    res.setHeader('Content-Type', 'image/png');
    res.send(buf);
  } catch (e) {
    res.status(500).send('Screenshot error: ' + e.message);
  }
});

router.get('/inspect-leftrail', async (req, res) => {
  try {
    if (!whatsappBotService.page) return res.send('No page');
    const result = await whatsappBotService.page.evaluate(() => {
      const all = Array.from(document.querySelectorAll('*'));
      const leftRailElements = all.filter(el => {
        const rect = el.getBoundingClientRect();
        return rect.width > 0 && rect.height > 0 && rect.right <= 70 && rect.top < 400;
      }).map(el => ({
        tag: el.tagName,
        ariaLabel: el.getAttribute('aria-label'),
        title: el.getAttribute('title'),
        dataIcon: el.getAttribute('data-icon'),
        dataTestid: el.getAttribute('data-testid'),
        role: el.getAttribute('role'),
        className: el.className ? String(el.className).substring(0, 40) : '',
        rect: { x: Math.round(el.getBoundingClientRect().x), y: Math.round(el.getBoundingClientRect().y), w: Math.round(el.getBoundingClientRect().width), h: Math.round(el.getBoundingClientRect().height) }
      }));
      return leftRailElements;
    });
    res.json(result);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

router.get('/test-tab-switch', async (req, res) => {
  try {
    const page = whatsappBotService.page;
    if (!page) return res.status(400).send('No page');

    await whatsappBotService.dismissAllModals();

    console.log('[Test Tab Switch] Moving mouse to (32, 162) and clicking...');
    await page.mouse.move(32, 162);
    await page.mouse.down();
    await new Promise(r => setTimeout(r, 150));
    await page.mouse.up();

    await new Promise(r => setTimeout(r, 2500));
    const shotPath = path.join(__dirname, '..', 'public', 'whatsapp_react_click_test.png');
    await page.screenshot({ path: shotPath });

    const isChannelsActive = await page.evaluate(() => {
      const btn = document.querySelector('button[aria-label="Channels"]');
      return btn ? btn.getAttribute('data-navbar-item-selected') : null;
    });

    res.json({ isChannelsActive });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

router.get('/inspect-cdp', async (req, res) => {
  try {
    const page = whatsappBotService.page;
    if (!page) return res.status(400).send('No page');

    await whatsappBotService.dismissAllModals();

    const btn = await page.$('button[aria-label="Channels"]');
    if (!btn) return res.status(400).json({ error: 'button not found' });

    const tree = await page.evaluate(() => {
      const btn = document.querySelector('button[aria-label="Channels"]');
      if (!btn) return { error: 'no btn' };
      
      const chain = [];
      let cur = btn;
      while (cur && cur !== document.body) {
        chain.push({
          tag: cur.tagName,
          id: cur.id,
          className: cur.className ? String(cur.className).substring(0, 50) : '',
          role: cur.getAttribute('role'),
          ariaLabel: cur.getAttribute('aria-label'),
          dataTab: cur.getAttribute('data-tab'),
          keys: Object.keys(cur).filter(k => k.startsWith('__'))
        });
        cur = cur.parentElement;
      }
      return chain;
    });

    res.json({ success: true, tree });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

router.get('/inspect-button-props', async (req, res) => {
  try {
    const page = whatsappBotService.page;
    if (!page) return res.status(400).send('No page');

    await whatsappBotService.dismissAllModals();

    const result = await page.evaluate(async () => {
      const btn = document.querySelector('button[aria-label="Channels"]');
      if (!btn) return { error: 'No button found' };

      const propsKey = Object.keys(btn).find(k => k.startsWith('__reactProps'));
      const fiberKey = Object.keys(btn).find(k => k.startsWith('__reactFiber'));
      
      const props = propsKey ? btn[propsKey] : null;
      const propNames = props ? Object.keys(props) : [];

      // Check inner children
      const innerSvg = btn.querySelector('svg');
      const innerSpan = btn.querySelector('span');

      return {
        tag: btn.tagName,
        ariaLabel: btn.getAttribute('aria-label'),
        dataNavbarItemSelected: btn.getAttribute('data-navbar-item-selected'),
        propNames,
        hasOnClick: typeof props?.onClick === 'function',
        hasOnPointerDown: typeof props?.onPointerDown === 'function',
        hasOnMouseDown: typeof props?.onMouseDown === 'function',
        innerSvg: !!innerSvg,
        innerSpan: !!innerSpan
      };
    });

    // Test click methods:
    // 1. Hardware CDP click
    await page.mouse.move(32, 162);
    await page.mouse.down({ button: 'left' });
    await new Promise(r => setTimeout(r, 100));
    await page.mouse.up({ button: 'left' });
    await new Promise(r => setTimeout(r, 1500));

    let check1 = await page.evaluate(() => {
      const btn = document.querySelector('button[aria-label="Channels"]');
      return btn ? btn.getAttribute('data-navbar-item-selected') : null;
    });

    let checkMethod = 'mouse.click';

    if (check1 !== 'true') {
      // 2. Try React props trigger
      await page.evaluate(() => {
        const btn = document.querySelector('button[aria-label="Channels"]');
        if (!btn) return;
        const pk = Object.keys(btn).find(k => k.startsWith('__reactProps'));
        if (pk && btn[pk]) {
          if (btn[pk].onClick) btn[pk].onClick({ preventDefault: () => {}, stopPropagation: () => {} });
          if (btn[pk].onPointerDown) btn[pk].onPointerDown({ preventDefault: () => {}, stopPropagation: () => {} });
        }
      });
      await new Promise(r => setTimeout(r, 1500));
      check1 = await page.evaluate(() => {
        const btn = document.querySelector('button[aria-label="Channels"]');
        return btn ? btn.getAttribute('data-navbar-item-selected') : null;
      });
      checkMethod = 'reactProps';
    }

    if (check1 !== 'true') {
      // 3. Try pointer events on button and its children
      await page.evaluate(() => {
        const btn = document.querySelector('button[aria-label="Channels"]');
        if (!btn) return;
        const targets = [btn, ...btn.querySelectorAll('*')];
        for (const t of targets) {
          t.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true, cancelable: true }));
          t.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, cancelable: true }));
          t.dispatchEvent(new PointerEvent('pointerup', { bubbles: true, cancelable: true }));
          t.dispatchEvent(new MouseEvent('mouseup', { bubbles: true, cancelable: true }));
          t.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
        }
      });
      await new Promise(r => setTimeout(r, 1500));
      check1 = await page.evaluate(() => {
        const btn = document.querySelector('button[aria-label="Channels"]');
        return btn ? btn.getAttribute('data-navbar-item-selected') : null;
      });
      checkMethod = 'dispatchedEvents';
    }

    const shotPath = path.join(__dirname, '..', 'public', 'whatsapp_click_diagnostic.png');
    await page.screenshot({ path: shotPath });

    res.json({
      initial: result,
      workingMethod: checkMethod,
      isChannelsActive: check1
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});


module.exports = router;
