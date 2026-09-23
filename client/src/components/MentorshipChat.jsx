import React, { useState, useEffect, useRef } from 'react';
import { 
  Send, MessageCircle, ShieldCheck, Sparkles, Check, 
  CheckCheck, Clock, X, User, GraduationCap, ChevronDown, 
  Smile, CornerDownLeft, RefreshCw 
} from 'lucide-react';
import { 
  getChatThreadId, 
  subscribeThreadMessages, 
  sendChatMessage, 
  markThreadAsRead,
  updatePresence,
  subscribePresence
} from '../services/mentorshipChatService';

export default function MentorshipChat({
  student,
  mentor,
  currentUserRole = 'student', // 'student' | 'mentor'
  onClose,
  isModal = false
}) {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isPartnerOnline, setIsPartnerOnline] = useState(false);
  const messagesEndRef = useRef(null);
  const messagesContainerRef = useRef(null);
  const inputRef = useRef(null);

  const studentRoll = student?.roll || student?.whatsapp || '';
  const mentorId = mentor?.id || (mentor?.name?.toLowerCase().includes('subhash') ? 'mentor-cse-subhash' : (mentor?.name?.toLowerCase().includes('shivam') ? 'mentor-cse-shivam' : 'mentor-cse-deepak'));
  const threadId = getChatThreadId(student, mentor);

  const isStudent = currentUserRole === 'student';
  const partnerName = isStudent ? (mentor?.name || 'Senior Academic Mentor') : (student?.name || 'Student');
  const partnerRole = isStudent ? (mentor?.role || 'Senior BEU Mentor') : `${student?.branchCode || 'BEU'} 1st Year (Roll: ${student?.roll || ''})`;
  const partnerCollege = isStudent ? (mentor?.college || 'Bihar Engineering University') : (student?.college || '');

  // Auto-scroll to bottom inside chat container ONLY (never scroll outer window/page)
  const scrollToBottom = (smooth = true) => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTo({
        top: messagesContainerRef.current.scrollHeight,
        behavior: smooth ? 'smooth' : 'auto'
      });
    }
  };

  // Real-time message subscription & read receipt
  useEffect(() => {
    if (!threadId) return;

    const unsubscribe = subscribeThreadMessages(threadId, (updatedMsgs) => {
      setMessages(updatedMsgs);
      if (updatedMsgs.length > 0) {
        setTimeout(() => scrollToBottom(true), 100);
      }
      // Mark as read for this role
      markThreadAsRead(threadId, currentUserRole);
    });

    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, [threadId, currentUserRole]);

  // Real-time Presence Tracking (Green if Online/Live, Red if Offline)
  useEffect(() => {
    const myId = isStudent ? (student?.roll || student?.whatsapp) : (mentor?.id || mentor?.name);
    const partnerRole = isStudent ? 'mentor' : 'student';
    const partnerId = isStudent ? (mentor?.id || mentor?.name) : (student?.roll || student?.whatsapp);

    if (myId) {
      updatePresence(currentUserRole, myId);
      const interval = setInterval(() => {
        updatePresence(currentUserRole, myId);
      }, 25000);

      const unsubPresence = subscribePresence(partnerRole, partnerId, (online) => {
        setIsPartnerOnline(online);
      });

      return () => {
        clearInterval(interval);
        if (unsubPresence) unsubPresence();
      };
    }
  }, [isStudent, currentUserRole, student?.roll, student?.whatsapp, mentor?.id, mentor?.name]);

  // Initial scroll inside container only when messages exist
  useEffect(() => {
    if (messages.length > 0) {
      scrollToBottom(false);
    }
  }, [messages.length]);

  // Handle Send Message
  const handleSend = async (textToSend) => {
    const text = (textToSend || inputText).trim();
    if (!text || isSending) return;

    setIsSending(true);
    setInputText('');

    const now = Date.now();
    const optimisticMsg = {
      id: `local_${now}_${Math.random().toString(36).substr(2, 6)}`,
      threadId,
      studentRoll,
      studentName: student?.name || 'Student',
      mentorId,
      mentorName: mentor?.name || 'Senior Mentor',
      senderRole: currentUserRole,
      senderName: isStudent ? (student?.name || 'Student') : (mentor?.name || 'Mentor'),
      text,
      timestamp: now,
      read: false
    };

    // 1. Immediately update UI state so user sees it right away!
    setMessages(prev => {
      if (prev.some(m => m.id === optimisticMsg.id || (m.text === text && Math.abs((m.timestamp || 0) - now) < 1000))) {
        return prev;
      }
      return [...prev, optimisticMsg];
    });

    setTimeout(() => scrollToBottom(true), 50);

    try {
      await sendChatMessage({
        threadId,
        studentRoll,
        studentName: student?.name || 'Student',
        mentorId,
        mentorName: mentor?.name || 'Senior Mentor',
        senderRole: currentUserRole,
        senderName: isStudent ? (student?.name || 'Student') : (mentor?.name || 'Mentor'),
        text
      });

      setTimeout(() => scrollToBottom(true), 80);
      if (inputRef.current) {
        inputRef.current.focus({ preventScroll: true });
      }
    } catch (err) {
      console.error('Error sending message:', err);
    } finally {
      setIsSending(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Format message time
  const formatTime = (ts) => {
    if (!ts) return '';
    const d = new Date(ts);
    return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // Quick Prompt Chips
  const studentQuickPrompts = [
    'Bhaiya, BEU PYQs ke questions kahan se solve karein?',
    '1st semester me 9+ CGPA score karne ka best roadmap kya hai?',
    'Engineering Mathematics-I ke high-weightage topics kaun se hain?',
    'College syllabus ke sath coding kahan se shuru karein?'
  ];

  const mentorQuickPrompts = [
    'Module 1 & 2 ke formula derivations complete kar lo pehle.',
    'BEU ke last 5 saal ke PYQs daily 2 ghante solve karo.',
    'Study tracker me apna daily topic log karte raho.',
    'Is weekend hum Live Google Meet pe doubt session karenge.'
  ];

  const quickPrompts = isStudent ? studentQuickPrompts : mentorQuickPrompts;

  const chatContent = (
    <div className={`flex flex-col bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-2xl ${isModal ? 'w-full h-[88vh] max-h-[720px]' : 'w-full h-[540px]'}`}>
      {/* ── Chat Header ── */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-950 p-4 sm:p-5 text-white flex items-center justify-between gap-3 shrink-0 shadow-sm border-b border-indigo-900/50">
        <div className="flex items-center gap-3">
          <div className="relative">
            {isStudent && mentor?.avatar && !mentor.avatar.includes('unsplash') ? (
              <img 
                src={mentor.avatar} 
                alt={partnerName} 
                className="w-11 h-11 rounded-2xl object-cover border-2 border-indigo-400 shadow-md"
              />
            ) : (
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-600 text-white font-black text-sm flex items-center justify-center border-2 border-indigo-300 shadow-md uppercase">
                {partnerName.split(' ').map(w => w[0]).join('').slice(0, 2) || (isStudent ? 'SM' : 'ST')}
              </div>
            )}
            {isPartnerOnline ? (
              <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 rounded-full ring-2 ring-slate-900 animate-pulse" title="Online Live Now" />
            ) : (
              <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-rose-500 rounded-full ring-2 ring-slate-900" title="Offline" />
            )}
          </div>

          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-sm sm:text-base font-black tracking-tight text-white leading-tight">
                {partnerName}
              </h3>
              {isPartnerOnline ? (
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[9px] font-black uppercase tracking-wider flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" /> Live Online
                </span>
              ) : (
                <span className="px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 text-[9px] font-black uppercase tracking-wider flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500" /> Offline
                </span>
              )}
            </div>
            <p className="text-[11px] text-indigo-200 font-bold leading-tight mt-0.5">
              {partnerRole}
            </p>
            {partnerCollege && (
              <p className="text-[10px] text-slate-400 font-medium truncate max-w-[260px] sm:max-w-md">
                🏛️ {partnerCollege}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2">
          {isModal && onClose && (
            <button 
              onClick={onClose}
              className="p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-xl transition-all"
              title="Close Chat"
            >
              <X size={18} />
            </button>
          )}
        </div>
      </div>

      {/* ── Message Stream ── */}
      <div 
        ref={messagesContainerRef}
        className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 bg-slate-50/60"
      >
        {/* Welcome Banner */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-indigo-100 text-center space-y-1.5 shadow-2xs">
          <span className="text-[10px] font-black uppercase tracking-widest text-indigo-700 bg-white px-2.5 py-0.5 rounded-full border border-indigo-200 shadow-2xs inline-flex items-center gap-1">
            <Sparkles size={11} className="text-amber-500" /> Official BEU Mentorship 1-on-1 Chat
          </span>
          <p className="text-xs text-slate-700 font-bold">
            {isStudent ? (
              <>Aap apne Senior Academic Mentor <strong>{partnerName}</strong> ke sath direct live guidance session me hain.</>
            ) : (
              <>Aap apne 1st-year mentee <strong>{partnerName}</strong> ke sath direct live guidance session me hain.</>
            )}
          </p>
          <p className="text-[10px] text-slate-500 font-medium">
            Semester exams, syllabus derivations, study consistency, ya career queries yahan direct pooch sakte hain.
          </p>
        </div>

        {/* Empty State */}
        {messages.length === 0 && (
          <div className="text-center py-8 space-y-3">
            <div className="w-14 h-14 rounded-3xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto border border-indigo-100 shadow-sm">
              <MessageCircle size={28} />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-black text-slate-800">Abhi koi messages nahi hain</h4>
              <p className="text-xs text-slate-500 font-medium max-w-sm mx-auto">
                {isStudent 
                  ? "Niche diye gaye suggested questions par click karke ya apna sawal type karke baat shuru karein!"
                  : "Student ko pehla guidance message ya daily study reminder bhejein!"}
              </p>
            </div>
          </div>
        )}

        {/* Messages List */}
        {messages.map((msg, idx) => {
          const isMe = msg.senderRole === currentUserRole;
          const isSenderStudent = msg.senderRole === 'student';

          return (
            <div 
              key={msg.id || idx} 
              className={`flex flex-col ${isMe ? 'items-end' : 'items-start'} space-y-1 animate-in fade-in slide-in-from-bottom-2 duration-150`}
            >
              {/* Sender Subtitle */}
              <div className="flex items-center gap-1.5 px-1 text-[10px] text-slate-400 font-bold">
                {!isMe && (
                  <span>
                    {isSenderStudent ? '🎓 Student' : '👨‍🏫 Senior Mentor'}: {msg.senderName}
                  </span>
                )}
              </div>

              {/* Message Bubble */}
              <div className="flex items-end gap-2 max-w-[85%] sm:max-w-[75%]">
                <div 
                  className={`p-3.5 sm:p-4 rounded-3xl text-xs sm:text-sm font-medium leading-relaxed shadow-sm break-words whitespace-pre-wrap ${
                    isMe 
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-br-xs shadow-indigo-500/10' 
                      : 'bg-white text-slate-900 border border-slate-200/90 rounded-bl-xs shadow-slate-200/40'
                  }`}
                >
                  <p>{msg.text}</p>
                  
                  <div className={`flex items-center justify-end gap-1 text-[9px] font-bold mt-1.5 ${isMe ? 'text-indigo-200' : 'text-slate-400'}`}>
                    <span>{formatTime(msg.timestamp)}</span>
                    {isMe && (
                      msg.read ? (
                        <CheckCheck size={14} className="text-emerald-300 font-bold stroke-[2.5] drop-shadow-xs" title="Seen (Hara Double Tick)" />
                      ) : msg.id?.startsWith('local_') ? (
                        <Check size={13} className="text-indigo-200/70 font-medium" title="Sent" />
                      ) : (
                        <CheckCheck size={14} className="text-indigo-200/90 font-medium" title="Delivered" />
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        <div ref={messagesEndRef} />
      </div>

      {/* ── Quick Prompt Suggestions ── */}
      <div className="p-2.5 bg-slate-100/70 border-t border-slate-200/60 overflow-x-auto shrink-0 flex items-center gap-2 no-scrollbar">
        <span className="text-[10px] font-black uppercase text-indigo-700 shrink-0 flex items-center gap-1 pl-1">
          <Sparkles size={11} /> Quick:
        </span>
        {quickPrompts.map((prompt, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => handleSend(prompt)}
            className="px-3 py-1.5 bg-white hover:bg-indigo-50 hover:text-indigo-700 text-slate-700 rounded-full text-[11px] font-bold border border-slate-200 transition-all shrink-0 active:scale-95 shadow-2xs"
          >
            {prompt}
          </button>
        ))}
      </div>

      {/* ── Input Box & Actions ── */}
      <div className="p-3 sm:p-4 bg-white border-t border-slate-200 shrink-0">
        <form 
          onSubmit={(e) => { e.preventDefault(); handleSend(); }} 
          className="flex items-center gap-2"
        >
          {/* Quick Reaction Emojis */}
          <div className="hidden sm:flex items-center gap-1 shrink-0">
            {['👍', '🙏', '🔥', '📚'].map((emoji) => (
              <button
                key={emoji}
                type="button"
                onClick={() => handleSend(emoji)}
                className="w-8 h-8 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 flex items-center justify-center text-sm transition-transform active:scale-90"
                title={`Send ${emoji}`}
              >
                {emoji}
              </button>
            ))}
          </div>

          <div className="relative flex-1">
            <input
              ref={inputRef}
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={isStudent ? `Ask ${partnerName} a doubt or question...` : `Reply to ${partnerName}...`}
              className="w-full px-4 py-3 sm:py-3.5 bg-slate-50 border-2 border-slate-200 rounded-2xl text-xs sm:text-sm font-bold text-slate-900 placeholder:font-medium placeholder:text-slate-400 focus:outline-none focus:border-indigo-600 focus:bg-white transition-all shadow-2xs"
            />
          </div>

          <button
            type="submit"
            disabled={!inputText.trim() || isSending}
            className="px-4 sm:px-6 py-3 sm:py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 active:scale-95 text-white rounded-2xl font-black text-xs sm:text-sm uppercase tracking-wider transition-all disabled:opacity-40 flex items-center justify-center gap-2 shadow-md shadow-indigo-600/20 shrink-0"
          >
            {isSending ? (
              <RefreshCw size={16} className="animate-spin" />
            ) : (
              <>
                <span className="hidden sm:inline">Send</span>
                <Send size={15} />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );

  if (isModal) {
    return (
      <div 
        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200"
        onClick={(e) => {
          if (e.target === e.currentTarget && onClose) onClose();
        }}
      >
        <div className="w-full max-w-2xl animate-in zoom-in-95 duration-200">
          {chatContent}
        </div>
      </div>
    );
  }

  return chatContent;
}
