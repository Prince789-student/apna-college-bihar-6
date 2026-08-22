import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Capacitor } from '@capacitor/core';

export default function WhatsAppPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // 1. Do not show on native apps
    if (Capacitor.isNativePlatform()) return;

    // 2. Do not show for Googlebots / AdSense to prevent issues
    const userAgent = navigator.userAgent || "";
    const isBot = userAgent.indexOf('Mediapartners-Google') !== -1 || userAgent.indexOf('Googlebot') !== -1;
    if (isBot) return;

    // 3. Show popup only if they haven't seen it in this session
    const hasSeen = sessionStorage.getItem('whatsappPopupSeen');
    if (!hasSeen) {
      // Delay slightly for better UX
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    sessionStorage.setItem('whatsappPopupSeen', 'true');
    setIsOpen(false);
  };

  const handleJoin = () => {
    sessionStorage.setItem('whatsappPopupSeen', 'true');
    setIsOpen(false);
    window.open('https://whatsapp.com/channel/0029VbC6FsH3wtb5UEDvrW0a', '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[99998] bg-[#0a0f1d]/80 backdrop-blur-sm flex items-center justify-center p-4 font-['Inter'] animate-in fade-in duration-300">
      <div className="bg-white border border-slate-200/50 p-6 md:p-8 rounded-[2rem] shadow-2xl max-w-[500px] w-full relative overflow-hidden group">
        <button onClick={handleClose} className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-slate-100 rounded-full text-slate-500 hover:bg-slate-200 hover:text-slate-900 transition-colors z-20 font-black text-lg">
          <X size={18} />
        </button>
        <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 blur-[50px] rounded-full pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 border-4 border-green-50">
            <MessageCircle className="w-8 h-8 text-green-500" />
          </div>
          
          <h2 className="text-xl md:text-2xl font-[900] text-center text-slate-900 mb-4">
            📚 Apna College Bihar WhatsApp Channel से जुड़ें!
          </h2>
          
          <div className="text-slate-600 text-sm md:text-base mb-6 w-full text-left space-y-2 font-medium">
            <p className="font-bold text-slate-800 mb-3">यहाँ आपको मिलेगा:</p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-2"><span className="text-green-500">✅</span> <span>Important <b>Notes</b></span></li>
              <li className="flex items-start gap-2"><span className="text-green-500">✅</span> <span><b>PYQs & Solutions</b></span></li>
              <li className="flex items-start gap-2"><span className="text-green-500">✅</span> <span>Exam & College <b>Updates</b></span></li>
              <li className="flex items-start gap-2"><span className="text-green-500">✅</span> <span>Study Materials</span></li>
              <li className="flex items-start gap-2"><span className="text-green-500">✅</span> <span>Scholarships & Opportunities</span></li>
              <li className="flex items-start gap-2"><span className="text-green-500">✅</span> <span><b>Free Guidance</b> for Engineering Students</span></li>
              <li className="flex items-start gap-2"><span className="text-green-500">✅</span> <span>Career & Placement Updates</span></li>
              <li className="flex items-start gap-2"><span className="text-green-500">✅</span> <span>Useful Resources & Announcements</span></li>
            </ul>
            
            <p className="text-center bg-blue-50 text-blue-800 p-3 rounded-xl border border-blue-100 text-[13px] font-bold mt-4">
              🎯 एक ही जगह पर पढ़ाई से जुड़ी सभी जरूरी जानकारी — बिल्कुल Free!
            </p>
          </div>
          
          <button 
            onClick={handleJoin}
            className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-[900] py-4 rounded-[1.5rem] shadow-[0_10px_40px_rgba(37,211,102,0.4)] transition-all active:scale-95 text-sm tracking-wide uppercase flex items-center justify-center gap-2"
          >
            <MessageCircle size={20} />
            Join WhatsApp Channel
          </button>
          
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-4 text-center">
            👉 अभी जुड़ें और अपने दोस्तों के साथ भी शेयर करें।
          </p>
        </div>
      </div>
    </div>
  );
}
