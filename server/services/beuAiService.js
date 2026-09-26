require('dotenv').config();
const axios = require('axios');
const https = require('https');

const client = axios.create({
  timeout: 45000,
  httpsAgent: new https.Agent({ rejectUnauthorized: false }),
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  }
});

const CHANNEL_URL = process.env.WHATSAPP_CHANNEL_URL || 'https://whatsapp.com/channel/0029VbC6FsH3wtb5UEDvrW0a';

// List of fallback models to ensure 100% uptime even if one model experiences high demand
const CANDIDATE_MODELS = [
  'gemini-2.5-flash',
  'gemini-2.5-flash-lite',
  'gemini-flash-latest',
  'gemini-2.5-pro'
];

/**
 * Downloads a notice PDF/Image from BEU and analyzes it using Gemini.
 * Generates an engaging, comprehensive WhatsApp broadcast message for Bihar Engineering students.
 */
async function generateWhatsAppCaption(notice) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY is not configured in .env');
  }

  const { title, pdfUrl, date, id } = notice;
  console.log(`[BEU AI] Processing notice ID ${id || ''}: "${title}"`);

  let base64Data = null;
  let mimeType = 'application/pdf';

  // 1. Download attachment if available
  if (pdfUrl) {
    try {
      console.log(`[BEU AI] Downloading notice file from: ${pdfUrl}`);
      const res = await client.get(pdfUrl, { responseType: 'arraybuffer' });
      const contentType = res.headers['content-type'] || '';
      
      if (contentType.includes('image')) {
        mimeType = contentType.includes('png') ? 'image/png' : 'image/jpeg';
      } else {
        mimeType = 'application/pdf';
      }

      base64Data = Buffer.from(res.data).toString('base64');
      console.log(`[BEU AI] File downloaded successfully (${Math.round(base64Data.length / 1024)} KB)`);
    } catch (downloadErr) {
      console.warn(`[BEU AI] Could not download attachment (${downloadErr.message}). Generating caption from title.`);
    }
  }

  // 2. Build Prompt for Gemini
  const prompt = `You are the lead academic coordinator at 'Apna College Bihar' (ACB), Bihar's largest student education community.
A new official notification has been published by Bihar Engineering University (BEU), Patna.

Notice Title: "${title}"
Notice Date: "${date || 'Latest'}"
Official Attachment Link: "${pdfUrl || 'https://beu-bih.ac.in/notification'}"
Official WhatsApp Channel Link: "${CHANNEL_URL}"

TASK:
Analyze the attached official notification document (or the title if no attachment is readable) and compose a HIGH-ENGAGEMENT, FULLY DETAILED WhatsApp Channel message in clear, student-friendly Hinglish.

STRUCTURE & FORMAT FOR THE WHATSAPP MESSAGE:
1. HEADER:
   - High attention emoji headline (e.g. 🚨 *BEU PATNA: [Short Notice Title]* 📢)
   - Short explanation of what has been announced.

2. TARGET AUDIENCE:
   - Clearly specify which students this affects (e.g. B.Tech Semester, Branch, Batch 2023-27, Regular / Backlog candidates).

3. IMPORTANT DATES (SCHEDULE):
   - Form fill-up / submission start date.
   - Last date WITHOUT fine.
   - Last date WITH fine (if mentioned).
   - Hard copy submission to college / approval date (if mentioned).
   - Examination date (if mentioned).

4. FEE & FINANCIAL DETAILS:
   - State exact fees if mentioned in the notice (Regular, SC/ST, Late fine). If fee is not mentioned, clearly advise students to check their portal/college.

5. ACTIONABLE STEPS (Kya karna hai?):
   - 3 to 4 clear numbered steps on how students should proceed (e.g., login, select papers carefully, pay fee, submit receipt to examination cell).

6. OFFICIAL DOWNLOAD LINK:
   - Link: ${pdfUrl || 'https://beu-bih.ac.in/notification'}

7. COMMUNITY SIGN-OFF & WHATSAPP CHANNEL JOIN LINK:
   - MUST include this exact channel join call-to-action:
     "📲 *Official WhatsApp Channel Join Karein (Daily Updates):*"
     "${CHANNEL_URL}"
     ""
     "📢 *Apne sabhi college WhatsApp groups aur batchmates ke saath share karein!*"
     "🚀 *Team Apna College Bihar* | apnacollegebihar.online"
     "#BEU #BiharEngineering #ApnaCollegeBihar #BEUNotice"

GUIDELINES:
- Output ONLY the ready-to-send WhatsApp formatted message with bold (*text*), italic (_text_), and emojis.
- Do NOT make up dates or fees not in the document.`;

  // 3. Prepare payload for Gemini
  const parts = [];
  if (base64Data) {
    parts.push({
      inlineData: {
        mimeType: mimeType,
        data: base64Data
      }
    });
  }
  parts.push({ text: prompt });

  const payload = {
    contents: [{ parts }]
  };

  // 4. Try candidate models with fallback
  for (const model of CANDIDATE_MODELS) {
    try {
      console.log(`[BEU AI] Trying model: ${model}...`);
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
      const response = await axios.post(url, payload, { timeout: 35000 });

      const candidate = response.data?.candidates?.[0];
      const generatedCaption = candidate?.content?.parts?.[0]?.text;

      if (generatedCaption && generatedCaption.trim().length > 50) {
        console.log(`[BEU AI] ✅ Successfully generated caption with ${model}!`);
        return {
          success: true,
          caption: generatedCaption.trim(),
          model: model,
          hasAttachment: !!base64Data
        };
      }
    } catch (modelErr) {
      const msg = modelErr.response?.data?.error?.message || modelErr.message;
      console.warn(`[BEU AI] Model ${model} failed (${msg}), trying next model...`);
    }
  }

  // Fallback template if all AI models are unreachable
  const fallbackCaption = `🚨 *BEU PATNA: New Official Notice Update!* 📢\n\n` +
    `Bihar Engineering University (BEU) has released a new notice:\n` +
    `📌 *${title}*\n` +
    `🗓️ *Date:* ${date || 'Latest'}\n\n` +
    `📄 *Official Notice PDF Download:*\n👉 ${pdfUrl || 'https://beu-bih.ac.in/notification'}\n\n` +
    `📲 *Official WhatsApp Channel Join Karein:*\n👉 ${CHANNEL_URL}\n\n` +
    `📢 *Apne batchmates ke saath share karein!*\n` +
    `🚀 *Team Apna College Bihar* | apnacollegebihar.online\n` +
    `#BEU #BiharEngineering #ApnaCollegeBihar`;

  return {
    success: false,
    caption: fallbackCaption,
    error: 'All AI models exhausted, used high-fidelity template.'
  };
}

module.exports = {
  generateWhatsAppCaption,
  CHANNEL_URL
};
