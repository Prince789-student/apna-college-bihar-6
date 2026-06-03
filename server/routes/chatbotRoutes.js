const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');

// @route   POST /api/ai/chat
// @desc    Process a chat message using Gemini API (with fallback indicator)
router.post('/chat', async (req, res) => {
    try {
        const apiKey = process.env.GEMINI_API_KEY;
        const { messages } = req.body;

        if (!messages || !Array.isArray(messages) || messages.length === 0) {
            return res.status(400).json({ success: false, message: 'Messages array is required' });
        }

        // If API key is not configured, inform client so it can use fallback local answers
        if (!apiKey) {
            return res.json({
                success: false,
                isFallback: true,
                message: 'GEMINI_API_KEY is not configured on the server. Running in local assistant mode.'
            });
        }

        // Format history for Gemini API
        // Gemini expects: { role: 'user'|'model', parts: [{ text: string }] }
        const geminiContents = messages.map(msg => {
            const role = msg.sender === 'user' ? 'user' : 'model';
            return {
                role: role,
                parts: [{ text: msg.text }]
            };
        });

        const systemInstructionText = `
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

        const https = require('https');

        const payload = {
            contents: geminiContents,
            systemInstruction: {
                parts: [{ text: systemInstructionText }]
            },
            generationConfig: {
                maxOutputTokens: 800,
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

        const botResponseText = await new Promise((resolve, reject) => {
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

        if (!botResponseText) {
            return res.status(500).json({
                success: false,
                message: 'AI did not return any readable content.'
            });
        }

        return res.json({
            success: true,
            reply: botResponseText
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
