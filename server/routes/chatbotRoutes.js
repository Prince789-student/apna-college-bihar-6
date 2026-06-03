const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');

// @route   POST /api/ai/chat
// @desc    Process a chat message using Gemini API (with fallback indicator)
router.post('/chat', async (req, res) => {
    try {
        const apiKey = process.env.GEMINI_API_KEY;
        const { messages, isSyllabusQuery, topicText, subjectName } = req.body;

        if (!messages || !Array.isArray(messages) || messages.length === 0) {
            return res.status(400).json({ success: false, message: 'Messages array is required' });
        }

        if (!apiKey) {
            return res.json({
                success: false,
                isFallback: true,
                message: 'GEMINI_API_KEY is not configured on the server. Running in local assistant mode.'
            });
        }

        const geminiContents = messages.map(msg => {
            const role = msg.sender === 'user' ? 'user' : 'model';
            return {
                role: role,
                parts: [{ text: msg.text }]
            };
        });

        let systemInstructionText = `
You are the official "Apna College Bihar AI Assistant" (also known as ACB AI).
Your purpose is to help Bihar engineering college students (especially from BEU - Bihar Engineering University, formerly AKU) and candidates preparing for UGEAC (Bihar Engineering Counselling) or BCECE.

Guidelines:
1. Speak in a friendly, supportive, and motivating Hinglish (Hindi + English) tone, as preferred by students in Bihar.
2. Be brief, to the point, and format responses cleanly using Markdown (bold text, bullet points).
3. If asked about UGEAC/BCECE college cutoffs, tell them they can predict their colleges exactly using the "UGEAC 2025 Predictor" tool on Apna College Bihar.
4. If asked about exam preparation or syllabus, mention that BEU syllabus is available in the "BEU Syllabus" section, and handwritten notes/PYQs are in the "Notes & PYQs" section.
5. If they ask about CGPA/SGPA, mention that they can calculate their BEU grades using the "SGPA CalC" tool on our platform.
6. Do not generate code unless specifically asked by the student.
7. Always sign off or reference yourself as "Apna College Bihar AI Assistant" when appropriate.
`;

        if (isSyllabusQuery && topicText) {
            systemInstructionText = `Act as a senior Bihar Engineering University (BEU) professor and expert teacher.

Explain the topic: "${topicText}"

Instructions:

1. Explain in VERY EASY ENGLISH and Hinglish mix using simple words that a first-year engineering student can understand.

2. Start from ZERO BASIC LEVEL.
   - Assume the student knows nothing about the topic.
   - Explain every important term before using it.

3. Follow this structure:

   A. Introduction
      - What is the topic?
      - Why is it important?
      - Where is it used in engineering and real life?

   B. Basic Concepts
      - Define every important term.
      - Explain each concept with simple examples.

   C. Deep Theory
      - Explain the complete theory step-by-step.
      - Explain the logic behind every formula.
      - Explain why the formula works.

   D. Mathematical Derivations (if any)
      - Show complete derivation from beginning to end.
      - Explain each mathematical step.

   E. Diagrams & Graphs
      - Create neat text-based diagrams or explain axes and curves.
      - Describe exactly what should be drawn in an exam.

   F. Important Formulas & Worked Examples
      - List all formulas and symbols.
      - Solve easy to university-level numericals step-by-step.

   G. Real-Life Applications & Advantages/Disadvantages
      - Practical uses and point-wise pros/cons.

   H. Common Mistakes & FAQs
      - Mistakes to avoid and important viva/interview questions.

   I. BEU University Exam Preparation
      - 2-mark, 5-mark, 10-mark questions.
      - Most important theory and numerical questions.

   J. Short Notes & Memory Tricks
      - Exam revision notes, mnemonics, and shortcuts.

4. Use tables wherever useful.
5. Use bullet points for better understanding.
6. Explain every formula, derivation, theorem, law, and concept in detail.
7. Include historical background and inventor/scientist information if relevant.
8. Explain all symbols, units, assumptions, limitations, and conditions.
9. Make the explanation as detailed as a complete chapter from an engineering textbook.
10. Do not summarize too early. Give maximum depth and detail.
11. Write in teacher style, as if teaching a BEU classroom student.
12. Use headings, subheadings, examples, diagrams, derivations, tables, notes, warnings, and exam tips.
13. Explain according to university exam standards.
14. End with:
    - Complete chapter summary
    - Formula sheet
    - Last-minute exam revision sheet
    - Top 20 expected BEU exam questions`;
        }

        const https = require('https');

        const payload = {
            contents: geminiContents,
            systemInstruction: {
                parts: [{ text: systemInstructionText }]
            },
            generationConfig: {
                maxOutputTokens: 2048,
                temperature: 0.7
            }
        };

        const payloadString = JSON.stringify(payload);
        const options = {
            hostname: 'generativelanguage.googleapis.com',
            path: `/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(payloadString)
            }
        };

        const geminiPromise = new Promise((resolve, reject) => {
            const reqUrl = https.request(options, (resObj) => {
                let dataChunks = '';
                resObj.on('data', chunk => { dataChunks += chunk; });
                resObj.on('end', () => {
                    try {
                        const parsed = JSON.parse(dataChunks);
                        if (resObj.statusCode >= 400) {
                            return reject(parsed);
                        }
                        const text = parsed.candidates?.[0]?.content?.parts?.[0]?.text;
                        resolve(text);
                    } catch (e) {
                        reject(e);
                    }
                });
            });
            reqUrl.on('error', reject);
            reqUrl.write(payloadString);
            reqUrl.end();
        });

        let ytPromise = Promise.resolve(null);
        if (isSyllabusQuery && topicText && subjectName) {
            const ytQuery = encodeURIComponent(`${topicText} ${subjectName} BEU B.Tech in Hindi`);
            ytPromise = new Promise((resolve) => {
                https.get(`https://www.youtube.com/results?search_query=${ytQuery}`, resObj => {
                    let d = '';
                    resObj.on('data', c => d += c);
                    resObj.on('end', () => {
                        const match = d.match(/"videoId":"([^"]+)"/);
                        resolve(match ? match[1] : null);
                    });
                }).on('error', () => resolve(null));
            });
        }

        const [botResponseText, videoId] = await Promise.all([geminiPromise, ytPromise]);

        if (!botResponseText) {
            return res.status(500).json({
                success: false,
                message: 'AI did not return any readable content.'
            });
        }

        return res.json({
            success: true,
            reply: botResponseText,
            videoId: videoId
        });
    } catch (error) {
        console.error('Chatbot API Route Error:', error);
        return res.status(500).json({ 
            success: false, 
            message: 'Internal server error in Chatbot',
            details: error.message || error.error?.message || JSON.stringify(error)
        });
    }
});

// @route   GET /api/ai/status
// @desc    Check if Gemini AI key is configured
router.get('/status', (req, res) => {
    res.json({
        configured: !!process.env.GEMINI_API_KEY
    });
});

module.exports = router;
