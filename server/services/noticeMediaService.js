const axios = require('axios');
const fs = require('fs');
const path = require('path');
const https = require('https');

const client = axios.create({
  timeout: 30000,
  httpsAgent: new https.Agent({ rejectUnauthorized: false }),
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
  }
});

const DOWNLOADS_DIR = path.join(__dirname, '..', 'downloads');
if (!fs.existsSync(DOWNLOADS_DIR)) {
  fs.mkdirSync(DOWNLOADS_DIR, { recursive: true });
}

/**
 * Generates or downloads a notice visual asset (image) for WhatsApp Channel posting.
 */
async function getNoticeMediaAsset(notice, browser = null) {
  const { id, title, pdfUrl, date, isimportant } = notice;
  const noticeId = String(id || Date.now());
  const imagePath = path.join(DOWNLOADS_DIR, `notice_${noticeId}.png`);
  const pdfPath = path.join(DOWNLOADS_DIR, `notice_${noticeId}.pdf`);

  // If already generated, return cached asset
  if (fs.existsSync(imagePath)) {
    return { imagePath, pdfPath: fs.existsSync(pdfPath) ? pdfPath : null };
  }

  // 1. Download official notice file
  if (pdfUrl) {
    try {
      console.log(`[Notice Media] Downloading notice from ${pdfUrl}...`);
      const res = await client.get(pdfUrl, { responseType: 'arraybuffer' });
      const contentType = res.headers['content-type'] || '';
      
      if (contentType.includes('image') || pdfUrl.match(/\.(png|jpe?g|webp)$/i)) {
        fs.writeFileSync(imagePath, res.data);
        console.log(`[Notice Media] Direct image notice saved: ${imagePath}`);
        return { imagePath, pdfPath: null };
      } else {
        fs.writeFileSync(pdfPath, res.data);
        console.log(`[Notice Media] Official PDF saved: ${pdfPath}`);
      }
    } catch (err) {
      console.warn(`[Notice Media] Download error (${err.message}). Will generate announcement banner.`);
    }
  }

  // 2. Generate crisp official announcement card using Puppeteer browser
  if (browser) {
    try {
      console.log(`[Notice Media] Generating official notice card for Notice #${noticeId}...`);
      const page = await browser.newPage();
      await page.setViewport({ width: 1200, height: 675, deviceScaleFactor: 2 });

      const safeTitle = (title || 'Official BEU Notification').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      const safeDate = date || new Date().toISOString().split('T')[0];
      const isUrgent = isimportant === 1 || isimportant === '1';

      const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800;900&family=JetBrains+Mono:wght@700&display=swap" rel="stylesheet">
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Plus Jakarta Sans', sans-serif; }
          body {
            width: 1200px;
            height: 675px;
            background: linear-gradient(135deg, #090d16 0%, #0f172a 40%, #1e1b4b 100%);
            color: #ffffff;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 56px 64px;
            position: relative;
            overflow: hidden;
          }
          .bg-glow {
            position: absolute;
            width: 500px;
            height: 500px;
            border-radius: 50%;
            filter: blur(120px);
            pointer-events: none;
          }
          .glow-1 { top: -100px; right: -100px; background: rgba(99, 102, 241, 0.25); }
          .glow-2 { bottom: -150px; left: -100px; background: rgba(239, 68, 68, 0.2); }
          
          .header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: relative;
            z-index: 10;
          }
          .brand-badge {
            display: flex;
            align-items: center;
            gap: 16px;
          }
          .logo-box {
            width: 52px;
            height: 52px;
            border-radius: 16px;
            background: linear-gradient(135deg, #6366f1, #4338ca);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 26px;
            box-shadow: 0 10px 25px rgba(99, 102, 241, 0.4);
          }
          .brand-text h3 {
            font-size: 20px;
            font-weight: 900;
            letter-spacing: -0.5px;
            text-transform: uppercase;
            background: linear-gradient(to right, #ffffff, #cbd5e1);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .brand-text p {
            font-size: 11px;
            font-weight: 700;
            color: #818cf8;
            letter-spacing: 2px;
            text-transform: uppercase;
          }
          .meta-pill {
            padding: 10px 22px;
            border-radius: 999px;
            font-size: 13px;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 1px;
            display: flex;
            align-items: center;
            gap: 10px;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255,255,255,0.15);
          }
          .pill-urgent {
            background: rgba(239, 68, 68, 0.2);
            color: #fca5a5;
            border-color: rgba(239, 68, 68, 0.4);
          }
          .pill-normal {
            background: rgba(99, 102, 241, 0.2);
            color: #c7d2fe;
            border-color: rgba(99, 102, 241, 0.4);
          }

          .content {
            margin: auto 0;
            position: relative;
            z-index: 10;
          }
          .notice-tag {
            font-family: 'JetBrains Mono', monospace;
            font-size: 14px;
            font-weight: 700;
            color: #fbbf24;
            background: rgba(251, 191, 36, 0.1);
            border: 1px solid rgba(251, 191, 36, 0.25);
            display: inline-block;
            padding: 6px 14px;
            border-radius: 8px;
            margin-bottom: 20px;
          }
          .notice-title {
            font-size: 38px;
            font-weight: 900;
            line-height: 1.25;
            letter-spacing: -1px;
            color: #f8fafc;
            max-height: 195px;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
          }

          .footer {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-top: 24px;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            position: relative;
            z-index: 10;
          }
          .footer-info {
            display: flex;
            align-items: center;
            gap: 28px;
          }
          .info-item {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 13px;
            font-weight: 700;
            color: #94a3b8;
          }
          .info-item b {
            color: #f1f5f9;
          }
          .portal-link {
            font-size: 14px;
            font-weight: 800;
            color: #38bdf8;
            background: rgba(56, 189, 248, 0.1);
            padding: 8px 18px;
            border-radius: 12px;
            border: 1px solid rgba(56, 189, 248, 0.25);
          }
        </style>
      </head>
      <body>
        <div class="bg-glow glow-1"></div>
        <div class="bg-glow glow-2"></div>

        <div class="header">
          <div class="brand-badge">
            <div class="logo-box">🎓</div>
            <div class="brand-text">
              <h3>Apna College Bihar</h3>
              <p>Official Academic Alert</p>
            </div>
          </div>
          <div class="meta-pill ${isUrgent ? 'pill-urgent' : 'pill-normal'}">
            <span>${isUrgent ? '🚨 URGENT' : '🔔 OFFICIAL'}</span>
            <span>•</span>
            <span>BEU PATNA</span>
          </div>
        </div>

        <div class="content">
          <div class="notice-tag">NOTICE #${noticeId} &nbsp;|&nbsp; 🗓️ ${safeDate}</div>
          <h1 class="notice-title">${safeTitle}</h1>
        </div>

        <div class="footer">
          <div class="footer-info">
            <div class="info-item">🏛️ <b>Bihar Engineering University</b></div>
            <div class="info-item">📱 <b>Live WhatsApp Channel Broadcast</b></div>
          </div>
          <div class="portal-link">🌐 apnacollegebihar.online/notifications</div>
        </div>
      </body>
      </html>
      `;

      await page.setContent(html, { waitUntil: 'networkidle0' });
      await page.screenshot({ path: imagePath, type: 'png' });
      await page.close();
      console.log(`[Notice Media] Notice card saved successfully: ${imagePath}`);
      return { imagePath, pdfPath: fs.existsSync(pdfPath) ? pdfPath : null };
    } catch (genErr) {
      console.warn(`[Notice Media] Failed to generate card image:`, genErr.message);
    }
  }

  return { imagePath: null, pdfPath: fs.existsSync(pdfPath) ? pdfPath : null };
}

module.exports = {
  getNoticeMediaAsset,
  DOWNLOADS_DIR
};
