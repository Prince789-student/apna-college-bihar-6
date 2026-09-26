require('dotenv').config();
const axios = require('axios');
const admin = require('../firebaseAdmin');
const whatsappBotService = require('./whatsappBotService');

/**
 * WhatsApp Dispatcher Service
 * Integrates WhatsApp Web automated bot (1-time QR scan) and external Webhooks.
 */
const { getNoticeMediaAsset } = require('./noticeMediaService');

class WhatsAppService {
  constructor() {
    this.apiUrl = process.env.WHATSAPP_API_URL || process.env.WHATSAPP_WEBHOOK_URL || '';
    this.apiToken = process.env.WHATSAPP_API_TOKEN || '';
    this.target = process.env.WHATSAPP_TO || process.env.WHATSAPP_CHANNEL_ID || '0029VbC6FsH3wtb5UEDvrW0a';
  }

  isConfigured() {
    return whatsappBotService.isConnected() || !!(this.apiUrl || process.env.WHATSAPP_WEBHOOK_URL);
  }

  /**
   * Automatically send message to WhatsApp
   * Prioritizes the free WhatsApp Web Bot, then falls back to Webhook / Manual.
   */
  async sendMessage({ caption, pdfUrl, title, noticeId, filePath }) {
    console.log(`[WhatsApp Dispatcher] Dispatching notice ${noticeId || ''}: "${title}"`);

    const result = {
      noticeId,
      title,
      sentAt: new Date().toISOString(),
      method: 'MANUAL',
      status: 'PENDING',
      error: null
    };

    // If no media filePath provided, generate or download official notice asset
    let mediaPath = filePath;
    if (!mediaPath && (noticeId || title)) {
      try {
        console.log(`[WhatsApp Dispatcher] Generating/retrieving official visual asset for notice #${noticeId || 'new'}...`);
        const asset = await getNoticeMediaAsset({ id: noticeId, title, pdfUrl }, whatsappBotService.browser);
        if (asset && asset.imagePath) {
          mediaPath = asset.imagePath;
          console.log(`[WhatsApp Dispatcher] Visual notice card ready: ${mediaPath}`);
        }
      } catch (assetErr) {
        console.warn(`[WhatsApp Dispatcher] Could not generate visual asset:`, assetErr.message);
      }
    }

    // 1. PRIMARY: Automated WhatsApp Web Bot (Scan QR Once - 100% Free)
    if (whatsappBotService.isConnected()) {
      console.log(`[WhatsApp Dispatcher] 🤖 Posting directly to WhatsApp Channel via connected session (media: ${mediaPath ? 'YES' : 'NO'})...`);
      const botRes = await whatsappBotService.sendChannelPost(caption, { filePath: mediaPath });
      if (botRes.success) {
        result.status = 'SENT';
        result.method = 'WHATSAPP_BOT_AUTO';
        result.response = botRes;
        result.hasMedia = !!mediaPath;
        console.log(`[WhatsApp Dispatcher] ✅ Message successfully posted to channel via Bot!`);
        return result;
      } else {
        console.warn(`[WhatsApp Dispatcher] Bot post returned error:`, botRes.error);
        result.error = botRes.error;
      }
    }

    // 2. SECONDARY: External Webhook (if configured)
    if (this.apiUrl) {
      try {
        console.log(`[WhatsApp Dispatcher] Posting to configured webhook: ${this.apiUrl}`);
        const headers = { 'Content-Type': 'application/json' };
        if (this.apiToken) {
          headers['Authorization'] = `Bearer ${this.apiToken}`;
          headers['apikey'] = this.apiToken;
        }

        const postData = {
          to: this.target,
          message: caption,
          text: caption,
          caption: caption,
          pdfUrl: pdfUrl,
          document: pdfUrl,
          source: 'Apna College Bihar - BEU Notifier'
        };

        const res = await axios.post(this.apiUrl, postData, { headers, timeout: 20000 });
        result.status = 'SENT';
        result.method = 'AUTOMATED_WEBHOOK';
        result.response = res.data;
        return result;
      } catch (err) {
        console.error(`[WhatsApp Dispatcher] ❌ Webhook post failed:`, err.message);
        result.status = 'FAILED_WEBHOOK';
        result.error = err.response?.data || err.message;
      }
    }

    // 3. FALLBACK: Saved in queue, ready for 1-click share
    if (result.status !== 'SENT') {
      result.status = 'READY_TO_SHARE';
      result.method = 'WEB_SHARE_READY';
      console.log(`[WhatsApp Dispatcher] ℹ️ Ready for 1-click broadcast or awaiting WhatsApp QR connection.`);
    }

    return result;
  }

  generateShareUrl(caption) {
    return `https://api.whatsapp.com/send?text=${encodeURIComponent(caption)}`;
  }
}

module.exports = new WhatsAppService();
