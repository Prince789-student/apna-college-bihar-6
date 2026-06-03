import React, { useState, useEffect, useRef } from 'react';
import { Send, Bot, User, Sparkles, X, MessageSquare, HelpCircle, CornerDownLeft, AlertCircle } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

// Local Smart Knowledge Base for offline/fallback mode
const FALLBACK_KNOWLEDGE = {
  cgpa: `**Bihar Engineering University (BEU) CGPA & SGPA Guidelines:**

* **SGPA to Percentage Formula:**
  $$\\text{Percentage (\\%)} = (\\text{CGPA} - 0.75) \\times 10$$
  
* **Example:** Agar aapka CGPA **8.5** hai, to aapki overall percentage hogi: 
  $(8.5 - 0.75) \\times 10 = 77.5\\%$.

* **SGPA calculation:** SGPA = $\\sum(\\text{Subject Credits} \\times \\text{Grade Points}) / \\sum(\\text{Total Credits})$.

Aap hamare **SGPA CalC** section me jaakar Semester wise SGPA details aasaani se count kar sakte hain!`,

  cutoff: `**Bihar Engineering UGEAC Cutoff & Admission:**

* **Admission Process:** Bihar ke engineering colleges me B.Tech admission JEE Mains ke CRL rank aur category ke basis par **UGEAC counselling** ke through hota hai.
* **Top Colleges:** MIT Muzaffarpur, BCE Bhagalpur, GCE Gaya, MCE Motihari, DCE Darbhanga.
* **Predictor:** Apna College Bihar par Category-wise cutoffs par based **UGEAC Predictor** active hai.

Aap side menu me **UGEAC Predictor** par click karke college check kar sakte hain!`,

  notes: `**Notes, Syllabus & PYQs:**

* **Notes & PYQs Hub:** Page par sabhi semesters aur branches (CSE, Civil, Mechanical, ECE, EEE, EE) ke handwritten notes aur BEU के original PYQ papers PDFs available hain.
* **Syllabus:** New syllabus copy direct **BEU Syllabus** section me dekhein.

Aap unhe local mobile storage me download kar sakte hain!`,

  counselling: `**UGEAC counselling updates:**

* **Schedule:** UGEAC registration generally JEE Main ke results ke baad (June/July) me start hoti hai.
* **Docs:** JEE Score Card, 10th & 12th Marks Sheet, Category Certificate, Resident Certificate, UGEAC Part A & B.

Updates ke liye WhatsApp channel join karein!`,

  default: `Pranam! Main hoon **Apna College Bihar AI Assistant** (ACB AI).

Aap mujhse BEU syllabus, CGPA calculations, Notes aur PYQs ya UGEAC counselling ke baare me pooch sakte hain. Niche suggestion chips tap karein ya details type karein.`
};

export default function FloatingChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      sender: 'bot',
      text: `Pranam! Main aapka Apna College Bihar AI Assistant hoon. 

Aap mujhse Bihar Engineering University (BEU) syllabus, CGPA rules, college cutoff ya notes ke baare me koi bhi doubt pooch sakte hain. 

Aapki kya madad karu papa?`,
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isFallbackMode, setIsFallbackMode] = useState(false);
  const messagesEndRef = useRef(null);

  const suggestedQuestions = [
    { label: 'BEU CGPA to Percentage?', query: 'cgpa' },
    { label: 'UGEAC College Predictor', query: 'cutoff' },
    { label: 'Notes & Syllabus PDF', query: 'notes' },
    { label: 'Counselling Docs Required', query: 'counselling' }
  ];

  // Auto-scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, loading, isOpen]);

  // Check if AI endpoint is configured on mount
  useEffect(() => {
    const checkStatus = async () => {
      try {
        const res = await fetch('/api/ai/status');
        if (res.ok) {
          const data = await res.json();
          if (!data.configured) {
            setIsFallbackMode(true);
          }
        } else {
          setIsFallbackMode(true);
        }
      } catch (err) {
        setIsFallbackMode(true);
      }
    };
    checkStatus();
  }, []);

  const getLocalResponse = (queryText) => {
    const q = queryText.toLowerCase();
    if (q.includes('cgpa') || q.includes('sgpa') || q.includes('percentage') || q.includes('marks') || q.includes('grade')) {
      return FALLBACK_KNOWLEDGE.cgpa;
    }
    if (q.includes('cutoff') || q.includes('cut off') || q.includes('rank') || q.includes('predict') || q.includes('college') || q.includes('mit') || q.includes('bce')) {
      return FALLBACK_KNOWLEDGE.cutoff;
    }
    if (q.includes('notes') || q.includes('pyq') || q.includes('book') || q.includes('question paper') || q.includes('pdf') || q.includes('syllabus')) {
      return FALLBACK_KNOWLEDGE.notes;
    }
    if (q.includes('counselling') || q.includes('counseling') || q.includes('ugeac') || q.includes('registration') || q.includes('bceceb')) {
      return FALLBACK_KNOWLEDGE.counselling;
    }
    if (q.includes('hello') || q.includes('hi') || q.includes('hey') || q.includes('namaste') || q.includes('pranam') || q.includes('kaise ho')) {
      return FALLBACK_KNOWLEDGE.default;
    }
    
    return `Aapne pucha: "${queryText}"

Mujhe local library me iski jankari nahi mili. System administrator ne backend me **GEMINI_API_KEY** set nahi kiya hai.

Tab tak aap ye sawal pooch sakte hain:
* **BEU CGPA calculation**
* **UGEAC counselling updates**
* **Notes & Syllabus access**`;
  };

  const handleSend = async (textToSend) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    if (isFallbackMode) {
      setTimeout(() => {
        const botReply = getLocalResponse(query);
        setMessages(prev => [...prev, {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: botReply,
          timestamp: new Date()
        }]);
        setLoading(false);
      }, 600);
      return;
    }

    try {
      const cleanHistory = messages.slice(-10).map(m => ({
        sender: m.sender,
        text: m.text
      }));

      const res = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          messages: [...cleanHistory, { sender: 'user', text: query }]
        })
      });

      if (!res.ok) {
        throw new Error('API connection failure');
      }

      const data = await res.json();

      if (data.isFallback) {
        setIsFallbackMode(true);
        const botReply = getLocalResponse(query);
        setMessages(prev => [...prev, {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: botReply,
          timestamp: new Date()
        }]);
      } else {
        setMessages(prev => [...prev, {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: data.reply || "Aapke query ka response process nahi ho paya.",
          timestamp: new Date()
        }]);
      }
    } catch (error) {
      console.error("Chat error:", error);
      const botReply = getLocalResponse(query);
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: `⚠️ **Server down! Smart Offline Answer:**\n\n${botReply}`,
        timestamp: new Date()
      }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[140] w-14 h-14 bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 hover:scale-110 active:scale-95 text-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(79,70,229,0.4)] hover:shadow-[0_15px_40px_rgba(79,70,229,0.6)] transition-all duration-300 group"
        aria-label="Chat with AI"
      >
        {isOpen ? (
          <X className="w-6 h-6 animate-in spin-in-90 duration-200" />
        ) : (
          <div className="relative">
            <MessageSquare className="w-6 h-6 animate-in zoom-in duration-200 group-hover:rotate-6 transition-transform" />
            <span className="absolute -top-1.5 -right-1.5 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
          </div>
        )}
      </button>

      {/* Chat Window Panel */}
      {isOpen && (
        <div className="fixed inset-0 md:inset-auto md:bottom-28 md:right-10 w-full h-full md:w-[380px] md:h-[550px] bg-[#0a0f1d] md:bg-[#0a0f1d]/95 md:backdrop-blur-xl border border-white/10 md:rounded-[2rem] shadow-2xl flex flex-col z-[150] overflow-hidden animate-in slide-in-from-bottom duration-300">
          
          {/* Glow Effect */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/10 blur-[80px] rounded-full pointer-events-none"></div>
          
          {/* Header */}
          <div className="bg-[#10192d]/90 backdrop-blur-xl border-b border-white/10 p-4 flex items-center justify-between shrink-0 relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/15 relative">
                <Bot size={18} className="text-white" />
                <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 border-2 border-[#10192d] rounded-full"></div>
              </div>
              <div>
                <h3 className="text-xs font-black text-white uppercase tracking-wider flex items-center gap-1.5">
                  ACB Doubts Solver
                </h3>
                <p className="text-[8px] text-slate-400 font-bold uppercase tracking-widest flex items-center gap-1 mt-0.5">
                  <Sparkles size={8} className="text-blue-400" />
                  {isFallbackMode ? 'Local Assistant' : 'Gemini AI Engine'}
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-white/5 text-slate-400 hover:text-white rounded-xl transition-all"
            >
              <X size={16} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar relative z-10">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex items-start gap-2.5 max-w-[85%] ${
                  msg.sender === 'user' ? 'ml-auto flex-row-reverse' : ''
                }`}
              >
                {/* Avatar */}
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 shadow ${
                    msg.sender === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-[#152036] border border-white/10 text-blue-400'
                  }`}
                >
                  {msg.sender === 'user' ? <User size={12} /> : <Bot size={12} />}
                </div>

                {/* Bubble */}
                <div
                  className={`p-3 rounded-2xl text-[11px] leading-relaxed font-medium shadow-sm transition-all ${
                    msg.sender === 'user'
                      ? 'bg-blue-600 text-white rounded-tr-none'
                      : 'bg-[#121b2d] border border-white/5 text-slate-200 rounded-tl-none prose prose-invert prose-xs max-w-none'
                  }`}
                >
                  {msg.sender === 'user' ? (
                    <p className="whitespace-pre-wrap">{msg.text}</p>
                  ) : (
                    <ReactMarkdown>{msg.text}</ReactMarkdown>
                  )}
                  
                  <span
                    className={`block text-[6px] mt-1.5 text-right ${
                      msg.sender === 'user' ? 'text-blue-200' : 'text-slate-500'
                    }`}
                  >
                    {new Date(msg.timestamp).toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </span>
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex items-start gap-2.5 max-w-[80%]">
                <div className="w-7 h-7 rounded-lg bg-[#152036] border border-white/10 text-blue-400 flex items-center justify-center shrink-0">
                  <Bot size={12} />
                </div>
                <div className="bg-[#121b2d] border border-white/5 p-3 rounded-2xl rounded-tl-none flex items-center gap-1.5">
                  <div className="flex space-x-1">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestions Chips */}
          {messages.length === 1 && (
            <div className="p-3 pt-0 space-y-1.5 relative z-10 shrink-0 border-t border-white/5 bg-[#0a0f1d]/50">
              <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-1 px-1">
                <HelpCircle size={8} /> Suggested questions:
              </p>
              <div className="flex gap-1.5 overflow-x-auto pb-1 no-scrollbar scroll-smooth">
                {suggestedQuestions.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => handleSend(q.label)}
                    className="flex-shrink-0 px-2.5 py-1.5 bg-[#152036]/60 hover:bg-[#1a2948] border border-white/5 text-slate-300 hover:text-white rounded-lg text-[9px] font-bold transition-all active:scale-95"
                  >
                    {q.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Chat Input */}
          <div className="p-3 bg-[#0f182c]/85 border-t border-white/10 relative z-10 flex items-center gap-2 shrink-0">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask me anything..."
              disabled={loading}
              className="flex-1 bg-[#152036] border border-white/5 focus:border-blue-500/50 rounded-xl px-3.5 py-2.5 text-xs text-white outline-none placeholder:text-slate-500 transition-all disabled:opacity-50"
            />
            <button
              onClick={() => handleSend()}
              disabled={loading || !input.trim()}
              className="p-2.5 bg-blue-600 hover:bg-blue-500 disabled:opacity-40 text-white rounded-xl shadow-lg transition-all active:scale-95 flex items-center justify-center shrink-0"
            >
              <Send size={12} />
            </button>
          </div>

        </div>
      )}
    </>
  );
}
