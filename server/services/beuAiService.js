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
  'gemini-3.8-flash',
  'gemini-3.5-flash-lite',
  'gemini-3.1-pro-preview',
  'gemini-2.5-flash'
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

  const { title, pdfUrl, date, id, isCollegeNotice, collegeName, shortName, district, domain } = notice;
  const collegeHeaderName = shortName || (isCollegeNotice ? 'COLLEGE NOTICE' : 'BEU PATNA');
  const locationTag = district || 'BIHAR';
  
  console.log(`[BEU AI] Processing notice ID ${id || ''} [${collegeHeaderName}]: "${title}"`);

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
A new official notification has been published ${isCollegeNotice ? `by ${collegeName || collegeHeaderName} (${locationTag}, Bihar)` : 'by Bihar Engineering University (BEU), Patna'}.

Notice Title: "${title}"
Notice Date: "${date || 'Latest'}"
College / Authority: "${collegeName || 'BEU Patna'}" (${locationTag})
Official Attachment Link: "${pdfUrl || domain || 'https://apnacollegebihar.online/notifications'}"
Official WhatsApp Channel Link: "${CHANNEL_URL}"

TASK:
Analyze the attached official notification document (or the title if no attachment is readable) and compose a HIGH-ENGAGEMENT, FULLY DETAILED WhatsApp Channel message in clear, student-friendly Hinglish.

STRUCTURE & FORMAT FOR THE WHATSAPP MESSAGE:
1. HEADER:
   - High attention emoji headline (e.g. 🏛️ *${collegeHeaderName.toUpperCase()} [${locationTag.toUpperCase()}]: [Short Notice Title]* 📢)
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

6. OFFICIAL DOWNLOAD & ACB PORTAL LINKS (MANDATORY):
   - Apna College Bihar Portal: https://apnacollegebihar.online/notifications
   - Official Notice PDF / Link: ${pdfUrl || domain || 'https://apnacollegebihar.online/notifications'}

7. COMMUNITY SIGN-OFF & WHATSAPP CHANNEL JOIN LINK:
   - MUST include these exact links and call-to-action:
     "🌐 *Apna College Bihar Portal (All 38 Colleges Notices & Material):*"
     "https://apnacollegebihar.online/notifications"
     ""
     "📲 *Official WhatsApp Channel Join Karein (Daily Fast Updates):*"
     "${CHANNEL_URL}"
     ""
     "📢 *Apne sabhi college WhatsApp groups aur batchmates ke saath share karein!*"
     "🚀 *Team Apna College Bihar* | https://apnacollegebihar.online"
     "#${collegeHeaderName.replace(/\s+/g, '')} #BEU #BiharEngineering #ApnaCollegeBihar #CollegeNotice"

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
  const fallbackCaption = `🚨 *${collegeHeaderName.toUpperCase()} [${locationTag.toUpperCase()}]: Official Notice Update!* 📢\n\n` +
    `${isCollegeNotice ? (collegeName || collegeHeaderName) : 'Bihar Engineering University (BEU)'} has released a new notice:\n` +
    `📌 *${title}*\n` +
    `🗓️ *Date:* ${date || 'Latest'}\n\n` +
    `🌐 *Apna College Bihar Portal (All 38 Colleges Notices):*\n👉 https://apnacollegebihar.online/notifications\n\n` +
    `📄 *Official Notice Download / Link:*\n👉 ${pdfUrl || domain || 'https://apnacollegebihar.online/notifications'}\n\n` +
    `📲 *Official WhatsApp Channel Join Karein (Daily Updates):*\n👉 ${CHANNEL_URL}\n\n` +
    `📢 *Apne batchmates ke saath share karein!*\n` +
    `🚀 *Team Apna College Bihar* | https://apnacollegebihar.online\n` +
    `#${collegeHeaderName.replace(/\s+/g, '')} #BEU #BiharEngineering #ApnaCollegeBihar`;

  return {
    success: false,
    caption: fallbackCaption,
    error: 'All AI models exhausted, used high-fidelity template.'
  };
}

/**
 * Explains a syllabus topic or provides BEU exam answers using Gemini
 */
async function explainSyllabusTopic({ topic, subject, unitName, branch, semester, mode = 'explain', customQuestion }) {
  const apiKey = process.env.GEMINI_API_KEY;

  let taskPrompt = '';
  if (customQuestion && customQuestion.trim()) {
    taskPrompt = `The student has a specific question regarding this topic:
"${customQuestion.trim()}"
Provide a clear, detailed, technically accurate answer tailored for a B.Tech student.`;
  } else if (mode === 'exam_qa') {
    taskPrompt = `Generate a high-probability BEU (Bihar Engineering University) Semester Exam Question (7-Mark or 14-Mark question) on this topic with a model answer.
Structure the answer exactly how students should write in their answer booklet to get maximum marks:
1. Expected Exam Question (7 Marks)
2. Definition & Core Principle (with neat bullet points)
3. Step-by-Step Derivation / Process / Architecture
4. ASCII Diagram or Flowchart layout (if applicable)
5. Practical Application / Example
6. Examiner Scoring Tips (what key terms BEU evaluators look for)`;
  } else if (mode === 'formula') {
    taskPrompt = `Generate a rapid revision cheat sheet for this topic:
1. Key Definitions & Laws (1-2 sentences each)
2. All Vital Formulas, Equations, and SI Units
3. Important Constants & Values
4. 3 Quick Flashcard Points for last-minute exam revision`;
  } else {
    taskPrompt = `Provide a comprehensive yet easy-to-understand explanation for an engineering student:
1. High-Level Overview (What is it and why does it exist?)
2. Core Working Principle / Theory
3. Real-world Engineering Application
4. Key Concepts & Terminology you must remember
5. Quick Summary`;
  }

  const prompt = `You are the lead academic professor and AI Study Mentor at Apna College Bihar (ACB), assisting B.Tech engineering students affiliated with Bihar Engineering University (BEU), Patna.

Subject: ${subject || 'Engineering Subject'}
Module / Unit: ${unitName || 'Curriculum Module'}
Target Topic: "${topic}"
${branch ? `Branch: ${branch}` : ''}
${semester ? `Semester: ${semester}` : ''}

TASK:
${taskPrompt}

GUIDELINES:
- Use clean, structured Markdown (headers ##, ###, bullet points, bold keywords, and code blocks if code/math is needed).
- Tone: Encouraging, academic, authoritative yet student-friendly.
- Write in English with occasional relatable Hindi/Hinglish pro-tips if helpful.
- Keep formatting clean and readable on mobile screens.`;

  if (apiKey) {
    const payload = {
      contents: [{ parts: [{ text: prompt }] }]
    };

    for (const model of CANDIDATE_MODELS) {
      try {
        console.log(`[BEU AI Tutor] Asking model ${model} for topic: "${topic}"`);
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
        const response = await axios.post(url, payload, { timeout: 35000 });
        const candidate = response.data?.candidates?.[0];
        const text = candidate?.content?.parts?.[0]?.text;
        if (text && text.trim().length > 30) {
          return {
            success: true,
            text: text.trim(),
            model
          };
        }
      } catch (err) {
        console.warn(`[BEU AI Tutor] Model ${model} failed (${err.message}), trying next...`);
      }
    }
  }

  // Fallback response if Gemini API key is missing or models are busy
  const fallback = `### 📘 ${topic} — Study Guide\n\n` +
    `**Subject:** ${subject || 'Engineering Subject'}\n` +
    `**Unit:** ${unitName || 'Core Module'}\n\n` +
    `#### 📌 Key Conceptual Overview\n` +
    `The topic **${topic}** is a foundational concept in the BEU syllabus. To master this topic for your examinations:\n\n` +
    `- **Fundamental Concept:** Understand the governing principles and definitions underlying this topic.\n` +
    `- **Exam Weightage:** In BEU End-Semester exams, questions on this topic are typically asked as 7-mark direct theoretical questions or numerical problems.\n` +
    `- **Standard Answer Strategy:**\n` +
    `  1. Always start your answer with an exact definition.\n` +
    `  2. Draw a neat labelled diagram (BEU evaluators award 2-3 marks for diagrams).\n` +
    `  3. Write step-by-step explanations or mathematical formulations.\n` +
    `  4. Mention at least one engineering application.\n\n` +
    `> 💡 *Pro Tip:* Check the Previous Year Questions (PYQs) section in Apna College Bihar app to see how BEU has framed questions on this topic over the last 5 years!`;

  return {
    success: true,
    text: fallback,
    model: 'offline_template'
  };
}

module.exports = {
  generateWhatsAppCaption,
  explainSyllabusTopic,
  CHANNEL_URL
};

