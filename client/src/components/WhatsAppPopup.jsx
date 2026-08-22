import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Zap, MessageCircle } from 'lucide-react';
import { Capacitor } from '@capacitor/core';

export default function WhatsAppPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (Capacitor.isNativePlatform()) return;

    const userAgent = navigator.userAgent || "";
    const isBot = userAgent.indexOf('Mediapartners-Google') !== -1 || userAgent.indexOf('Googlebot') !== -1;
    if (isBot) return;

    const hasSeen = sessionStorage.getItem('whatsappPopupSeen');
    if (!hasSeen) {
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
    <div className="fixed inset-0 z-[99998] bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4 font-['Inter'] animate-fadeIn">
      <div className="bg-white p-0 rounded-[2rem] shadow-2xl max-w-[420px] w-full relative overflow-hidden group border border-white/20">
        
        {/* Header Section with Gradient */}
        <div className="bg-gradient-to-br from-[#128C7E] to-[#25D366] p-8 pt-10 text-center relative overflow-hidden">
          {/* Background decorative circles */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-black/10 rounded-full blur-2xl"></div>
          
          <button onClick={handleClose} className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-white/20 rounded-full text-white hover:bg-white/30 hover:scale-105 transition-all z-20">
            <X size={16} strokeWidth={3} />
          </button>

          <div className="relative z-10 w-20 h-20 mx-auto bg-white rounded-[1.25rem] shadow-xl flex items-center justify-center mb-5 rotate-3 hover:rotate-0 transition-transform duration-300 border-[6px] border-white/20">
            <svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor" className="text-[#25D366]">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>
          </div>
          
          <h2 className="text-xl md:text-[22px] font-[900] text-white leading-tight relative z-10 drop-shadow-md">
            Apna College Bihar<br/>
            <span className="text-green-100 font-extrabold tracking-wide">WhatsApp Channel</span>
          </h2>
        </div>
        
        {/* Content Section */}
        <div className="p-6 md:p-8 bg-slate-50/50">
          <div className="text-slate-700 text-sm mb-6 space-y-3 font-medium">
            <p className="font-[900] text-slate-800 text-[11px] uppercase tracking-[0.15em] mb-4 flex items-center gap-2">
              <Zap size={14} className="text-amber-500 fill-amber-500" /> यहाँ आपको मिलेगा:
            </p>
            <ul className="space-y-4">
              {[
                { bold: 'Notes & PYQs', text: 'Important study materials' },
                { bold: 'Updates', text: 'Exam & College notifications' },
                { bold: 'Guidance', text: 'Free help for engineering' },
                { bold: 'Career', text: 'Scholarships & Placements' }
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 group/item">
                  <div className="mt-0.5 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                    <CheckCircle2 size={14} className="text-[#25D366]" strokeWidth={3} />
                  </div>
                  <span className="leading-tight text-[13.5px]">
                    <b className="text-slate-900 block md:inline mb-0.5 md:mb-0">{item.bold}</b> 
                    <span className="hidden md:inline"> - </span>
                    <span className="text-slate-500">{item.text}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          
          <button 
            onClick={handleJoin}
            className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-[900] py-4 rounded-[1.25rem] shadow-[0_8px_30px_rgba(37,211,102,0.4)] transition-all active:scale-95 text-[13px] tracking-[0.1em] uppercase flex items-center justify-center gap-2 relative overflow-hidden group"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
            <MessageCircle size={18} className="fill-white/20" />
            Join Channel Now
          </button>
          
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.1em] mt-5 text-center flex items-center justify-center gap-1.5">
            <span className="text-sm">🎯</span> बिल्कुल Free! अभी जुड़ें
          </p>
        </div>
      </div>
    </div>
  );
}
