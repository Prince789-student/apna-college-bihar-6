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

        const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

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

        const response = await fetch(geminiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            const errData = await response.json().catch(() => ({}));
            console.error('Gemini API Error Status:', response.status, errData);
            return res.status(500).json({
                success: false,
                message: 'Failed to communicate with AI model',
                details: errData
            });
        }

        const data = await response.json();
        
        // Extract content from Gemini response
        const botResponseText = data.candidates?.[0]?.content?.parts?.[0]?.text;
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
        return res.status(500).json({ success: false, message: 'Internal server error in Chatbot' });
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
