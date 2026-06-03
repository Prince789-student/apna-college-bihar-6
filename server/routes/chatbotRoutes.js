const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');

// @route   POST /api/ai/chat
// @desc    Process a chat message using Gemini API (with fallback indicator)
router.post('/chat', async (req, res) => {
    try {
        const apiKey = process.env.GEMINI_API_KEY;
        const { messages, isSyllabusQuery, topicText, subjectName, language, mode } = req.body;

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
            const langInstruction = language === 'english'
                ? "Use VERY EASY NORMAL ENGLISH."
                : "Use VERY EASY ENGLISH and Hinglish mix (Bihar Style).";

            const forcedModeInstruction = mode === 'exam'
                ? "The user has explicitly requested the EXAM ANSWER MODE. You MUST ignore the Topic Explanation Mode and strictly generate a COMPLETE 25-MARK UNIVERSITY EXAM ANSWER."
                : "The user has explicitly requested the TOPIC EXPLANATION MODE. You MUST ignore the Exam Answer Mode and strictly generate a COMPLETE CONCEPT EXPLANATION.";

            systemInstructionText = `Role: You are a Senior Bihar Engineering University (BEU) Professor, Engineering Subject Expert, Senior Examiner, Question Paper Setter, and University Topper Answer-Sheet Writer.

Task:
If the input is a TOPIC, explain it from ZERO BASIC LEVEL to ADVANCED LEVEL like a BEU professor.
If the input is a QUESTION, generate a COMPLETE 25-MARK UNIVERSITY EXAM ANSWER exactly as a university topper would write in the answer booklet.

Input: "${topicText}"

Instructions:

STEP 1: Identify the input type.
IMPORTANT: ${forcedModeInstruction}

═══════════════════════════════
FOR TOPIC EXPLANATION MODE
═══════════════════════════════

1. ${langInstruction}
2. Assume the student knows nothing.
3. Explain every technical term before using it.
4. Teach like a BEU classroom professor.
5. Explain every concept step-by-step.
6. Explain the logic behind formulas and derivations.
7. Use examples frequently.

Include:
* Introduction
* Basic Concepts
* Complete Theory
* Mathematical Derivations
* Diagrams
* Graphs
* Important Formulas
* Solved Examples
* Applications
* Advantages
* Disadvantages
* Common Mistakes
* Viva Questions
* Important BEU Questions
* Revision Notes
* Formula Sheet
* Memory Tricks
* Chapter Summary
* Top 20 Expected Exam Questions

═══════════════════════════════
FOR EXAM ANSWER MODE
═══════════════════════════════

1. Write exactly as a university topper writes.
2. Start directly with the answer.
3. ${langInstruction}
4. Cover all examiner-expected points.
5. Use proper headings and subheadings.
6. Use point-wise format wherever suitable.
7. Bold important keywords.
8. Include complete theoretical explanation.
9. Write enough content for maximum marks.
10. Maintain university answer-sheet style.

Include wherever applicable:
* Definition
* Introduction
* Principle
* Theory
* Working
* Classification
* Types
* Features
* Characteristics
* Components
* Methods
* Algorithms
* Examples
* Comparison Tables
* Applications
* Advantages
* Disadvantages

For Derivations:
* Complete step-by-step derivation
* No skipped steps

For Numericals:
* Given
* Formula Used
* Calculation
* Final Answer

For Diagrams:
> [Draw Neat Labelled Diagram]
Explain all labels.

For Formulas:
* Formula
* Symbol Meaning
* Units
* Usage

═══════════════════════════════
UNIVERSAL RULES
═══════════════════════════════

* Never skip important concepts.
* Never give short answers.
* Use tables wherever useful.
* Explain all symbols, assumptions, units, and conditions.
* Include examiner keywords.
* Follow BEU university standards.
* Use simple and understandable English.
* If the topic permits, generate detailed content equivalent to a complete textbook chapter or a full 25-mark answer.
* End with:
  • Quick Revision Notes
  • Formula Sheet
  • Important Viva Questions
  • Top Expected BEU Exam Questions

Output Format:

# ${topicText}

# Answer

(Generate the appropriate content automatically based on whether the input is a Topic or a Question, and the forced mode.)`;
        }

        const https = require('https');

        const payload = {
            contents: geminiContents,
            systemInstruction: {
                parts: [{ text: systemInstructionText }]
            },
            generationConfig: {
                maxOutputTokens: 8192,
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
