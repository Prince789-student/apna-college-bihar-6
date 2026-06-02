import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Send, Bot, User, Sparkles, RefreshCw, ChevronLeft, HelpCircle, AlertCircle, Info } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { useAuth } from '../context/AuthContext';

// Local Smart Knowledge Base for offline/fallback mode
const FALLBACK_KNOWLEDGE = {
  cgpa: `**Bihar Engineering University (BEU) CGPA & SGPA Guidelines:**

* **SGPA to Percentage Formula:** BEU follows this official conversion formula:
  $$\\text{Percentage (\\%)} = (\\text{CGPA} - 0.75) \\times 10$$
  
* **Example:** Agar aapka CGPA **8.5** hai, to aapki overall percentage hogi: 
  $(8.5 - 0.75) \\times 10 = 7.75 \\times 10 = 77.5\\%$.

* **SGPA calculation:** SGPA = $\\sum(\\text{Subject Credits} \\times \\text{Grade Points}) / \\sum(\\text{Total Credits})$.

Aap hamare **SGPA CalC** (sidebar/hub me) section me jaakar Semester wise SGPA details aasaani se count kar sakte hain!`,

  cutoff: `**Bihar Engineering UGEAC Cutoff & Admission Guidelines:**

* **Admission Process:** Bihar ke engineering colleges me B.Tech admission JEE Mains ke CRL (Common Rank List) aur category rank ke aadhar par **UGEAC (Under Graduate Engineering Admission Counselling)** ke dwara hota hai.
* **Top Colleges:** MIT Muzaffarpur, BCE Bhagalpur, GCE Gaya, MCE Motihari, DCE Darbhanga.
* **Predictor Tool:** Apna College Bihar par 2024 aur 2025 ke exact official category-wise cutoffs (UR, EBC, BC, SC, ST, EWS, RCG) par based **UGEAC 2025 Predictor** already activated hai.

Aap side menu ya app hub me **UGEAC 2025** predictor link par click karke apni rank se college details check kar sakte hain!`,

  notes: `**Notes, Syllabus & Previous Year Question Papers (PYQs) download process:**

* **Notes & PYQs Hub:** Hamari application me **Notes & PYQs** page par sabhi semesters aur branches (CSE, Civil, Mechanical, ECE, EEE, Electrical) ke handwritten notes aur BEU ke original PYQ question papers PDFs free me available hain.
* **BEU Syllabus:** New syllabus copy direct download karne ke liye **BEU Syllabus** section ko open karein.

Aap unhe local mobile storage me bhi dynamic PDF ke form me save ya print kar sakte hain!`,

  counselling: `**UGEAC 2025 Counselling Schedule & Updates:**

* **Kab shuru hoga?** UGEAC 2025 counselling registration generally JEE Main ke dono session ke results declare hone ke baad — approx **June ya July month** me BCECEB board dwara start ki jati hai.
* **Docs Required:** JEE Main Admit Card, JEE Score Card, 10th & 12th Marks Sheet, Category Certificate, Resident Certificate, UGEAC Part A & B form.

Counselling ka live notification sabse pehle pane ke liye humare official WhatsApp Channel ko zaroor join karein!`,

  default: `Pranam! Main hoon **Apna College Bihar AI Assistant** (ACB AI).

Aap mujhse Bihar engineering colleges, admissions, BEU syllabus, CGPA calculations, Notes aur PYQs ke baare me pooch sakte hain.

Niche diye gaye kuch common sawalon ko tap karein ya apni query type karein.`
};

export default function AiChatbot() {
  const { user } = useAuth();
  const navigate = useNavigate();
  
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      sender: 'bot',
      text: `Pranam **${user?.name || 'Scholar'}**! Main aapka Apna College Bihar AI Assistant hoon. 

Aap mujhse Bihar Engineering University (BEU) syllabus, CGPA rules, UGEAC college cutoff predictor ya notes download karne ke baare me koi bhi doubt pooch sakte hain. 

Aapki kya madad karu?`,
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isFallbackMode, setIsFallbackMode] = useState(false);
  const messagesEndRef = useRef(null);

  const suggestedQuestions = [
    { label: 'BEU CGPA kaise nikalein?', query: 'cgpa' },
    { label: 'UGEAC College Predictor & Cutoff', query: 'cutoff' },
    { label: 'Notes aur PYQs kahan milenge?', query: 'notes' },
    { label: 'UGEAC 2025 Counselling kab hogi?', query: 'counselling' }
  ];

  // Auto-scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  // Check if AI endpoint is active and what mode it is
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

Mujhe offline library me iski jankari nahi mili. Kripya system administrator se request karein ki backend me **GEMINI_API_KEY** set karein taki main Google Gemini AI model ke through advance query ka answer de saku! 

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

    // If local/offline fallback mode is forced or active
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
      }, 700);
      return;
    }

    try {
      const res = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          messages: [...messages, userMessage]
        })
      });

      if (!res.ok) {
        throw new Error('API communication error');
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
          text: data.reply || "Kuch problem hui details generate karne me.",
          timestamp: new Date()
        }]);
      }
    } catch (error) {
      console.error("Chat error:", error);
      // Fallback locally upon network or routing error
      const botReply = getLocalResponse(query);
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: `⚠️ **Server connection issue! Showing local smart answer:**\n\n${botReply}`,
        timestamp: new Date()
      }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[85vh] flex flex-col bg-[#0a0f1d] border border-white/10 rounded-[2.5rem] shadow-2xl relative overflow-hidden font-['Inter'] max-w-4xl mx-auto">
      {/* Glow Effects */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none"></div>

      {/* Chat Header */}
      <div className="bg-[#10192d]/80 backdrop-blur-xl border-b border-white/10 p-5 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate('/hub')} 
            className="p-2.5 bg-white/5 hover:bg-white/10 border border-white/5 text-slate-300 rounded-xl transition-all active:scale-95 flex items-center justify-center"
          >
            <ChevronLeft size={18} />
          </button>
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/10 relative">
              <Bot size={22} className="text-white" />
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-[#0a0f1d] rounded-full"></div>
            </div>
            <div>
              <h2 className="text-sm font-black text-white uppercase tracking-wider flex items-center gap-1.5">
                ACB Doubts Solver
                <span className="animate-pulse flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </h2>
              <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest flex items-center gap-1">
                {isFallbackMode ? (
                  <>
                    <Info size={10} className="text-yellow-500" /> Local Assistant (Instant)
                  </>
                ) : (
                  <>
                    <Sparkles size={10} className="text-blue-400" /> Gemini AI Engine Active
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
        
        {isFallbackMode && (
          <div className="hidden md:flex items-center gap-1.5 px-3 py-1 bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-[8px] font-black uppercase tracking-widest rounded-lg">
            <AlertCircle size={10} /> Local Mode
          </div>
        )}
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 relative z-10 min-h-[350px] max-h-[500px] custom-scrollbar">
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`flex items-start gap-3.5 max-w-[85%] ${msg.sender === 'user' ? 'ml-auto flex-row-reverse' : ''}`}
          >
            {/* Avatar */}
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 shadow-md ${
              msg.sender === 'user' 
                ? 'bg-blue-600 text-white' 
                : 'bg-[#152036] border border-white/10 text-blue-400'
            }`}>
              {msg.sender === 'user' ? <User size={14} /> : <Bot size={14} />}
            </div>

            {/* Bubble */}
            <div className={`p-4 rounded-2xl text-[13px] leading-relaxed font-medium shadow-sm transition-all animate-in fade-in duration-200 ${
              msg.sender === 'user'
                ? 'bg-blue-600 text-white rounded-tr-none'
                : 'bg-[#121b2d] border border-white/5 text-slate-200 rounded-tl-none prose prose-invert prose-sm max-w-none'
            }`}>
              {msg.sender === 'user' ? (
                <p className="whitespace-pre-wrap">{msg.text}</p>
              ) : (
                <ReactMarkdown>{msg.text}</ReactMarkdown>
              )}
              
              <span className={`block text-[7px] mt-2 text-right ${msg.sender === 'user' ? 'text-blue-200' : 'text-slate-500'}`}>
                {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          </div>
        ))}
        
        {loading && (
          <div className="flex items-start gap-3.5 max-w-[80%]">
            <div className="w-8 h-8 rounded-lg bg-[#152036] border border-white/10 text-blue-400 flex items-center justify-center shrink-0">
              <Bot size={14} />
            </div>
            <div className="bg-[#121b2d] border border-white/5 p-4 rounded-2xl rounded-tl-none flex items-center gap-2">
              <div className="flex space-x-1.5">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Questions */}
      {messages.length === 1 && (
        <div className="p-6 pt-0 space-y-2 relative z-10">
          <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-1">
            <HelpCircle size={10} /> Suggested Doubts:
          </p>
          <div className="flex flex-wrap gap-2">
            {suggestedQuestions.map((q, i) => (
              <button
                key={i}
                onClick={() => handleSend(q.label)}
                className="px-4 py-2.5 bg-[#152036]/60 hover:bg-[#1a2948] border border-white/5 text-slate-300 hover:text-white rounded-xl text-[10px] font-bold transition-all active:scale-95 text-left shadow-sm"
              >
                {q.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Chat Input */}
      <div className="p-6 bg-[#0f182c]/60 backdrop-blur-md border-t border-white/10 relative z-10 flex items-center gap-3">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Apna doubt likhein..."
          disabled={loading}
          className="flex-1 bg-[#152036] border border-white/5 focus:border-blue-500/50 rounded-2xl px-5 py-4 text-[12px] font-medium text-white outline-none placeholder:text-slate-500 transition-all disabled:opacity-50"
        />
        <button
          onClick={() => handleSend()}
          disabled={loading || !input.trim()}
          className="p-4 bg-blue-600 hover:bg-blue-500 disabled:opacity-40 text-white rounded-2xl shadow-lg shadow-blue-500/10 transition-all active:scale-95 flex items-center justify-center shrink-0"
        >
          <Send size={16} />
        </button>
      </div>
    </div>
  );
}
