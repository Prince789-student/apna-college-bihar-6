import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Zap, MessageCircle, Sparkles, Users, ArrowRight } from 'lucide-react';
import { Capacitor } from '@capacitor/core';

export default function WhatsAppPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    if (Capacitor.isNativePlatform()) return;

    const userAgent = navigator.userAgent || "";
    const isBot = userAgent.indexOf('Mediapartners-Google') !== -1 || userAgent.indexOf('Googlebot') !== -1;
    if (isBot) return;

    // Do NOT auto-interrupt mobile users with an intrusive modal on page load
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    if (isMobile) return;

    const hasSeen = sessionStorage.getItem('whatsappPopupSeen');
    if (!hasSeen) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2500);
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

  return (
    <>
      {/* ── PERSISTENT FLOATING WHATSAPP BUTTON ── */}
      {/* Positioned safely above MobileBottomNav on mobile, bottom-right on desktop */}
      <aside 
        aria-label="WhatsApp Community"
        className="fixed bottom-[calc(4.85rem+env(safe-area-inset-bottom,0px))] right-3 md:bottom-7 md:right-7 z-[170] flex items-end gap-2.5 select-none pointer-events-auto"
      >
        {/* Animated Speech Bubble / Pill Tooltip (Desktop/Tablet only) */}
        {showTooltip && (
          <div 
            onClick={() => setIsOpen(true)}
            className="hidden sm:flex items-center gap-2.5 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.12),0_0_15px_rgba(37,211,102,0.25)] border border-emerald-200/80 cursor-pointer animate-wa-float group hover:scale-105 transition-all duration-200"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>

            <div className="flex flex-col text-left">
              <span className="text-[11px] font-black text-slate-800 tracking-tight flex items-center gap-1 leading-none">
                <Sparkles size={11} className="text-amber-500 fill-amber-500" />
                BEU Notes & Updates
              </span>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="text-[9.5px] font-bold text-emerald-700">Join WhatsApp</span>
                <span className="flex items-center gap-0.5">
                  <span className="w-1 h-1 rounded-full bg-emerald-500 animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1 h-1 rounded-full bg-emerald-500 animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1 h-1 rounded-full bg-emerald-500 animate-bounce" style={{ animationDelay: '300ms' }} />
                </span>
              </div>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip(false);
              }}
              aria-label="Dismiss message"
              className="text-slate-400 hover:text-slate-600 p-0.5 rounded-full ml-1"
            >
              <X size={12} />
            </button>
          </div>
        )}

        {/* Floating Button with Touch-Optimized Target */}
        <div className="relative group cursor-pointer" onClick={() => setIsOpen(true)}>
          {/* Continuous Concentric Radar Waves (Desktop only to prevent mobile touch interception) */}
          <div className="hidden md:block absolute inset-0 rounded-full bg-emerald-500/35 animate-wa-radar-1 pointer-events-none" />
          <div className="hidden md:block absolute inset-0 rounded-full bg-emerald-500/25 animate-wa-radar-2 pointer-events-none" />
          <div className="hidden md:block absolute inset-0 rounded-full bg-teal-400/20 animate-wa-radar-3 pointer-events-none" />

          {/* Main Floating Action Button */}
          <button
            type="button"
            aria-label="Open Official WhatsApp Channel"
            className="relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-tr from-[#059669] via-[#10B981] to-[#25D366] text-white flex items-center justify-center shadow-[0_8px_20px_rgba(37,211,102,0.4),0_0_15px_rgba(16,185,129,0.3)] border-2 border-white/70 transition-all duration-300 hover:scale-105 active:scale-90"
          >
            {/* Shimmer light sweep */}
            <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
              <div className="w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-wa-sweep" />
            </div>

            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="md:w-[30px] md:h-[30px] drop-shadow-md group-hover:rotate-12 transition-transform duration-300">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>

            {/* Glowing Live Badge */}
            <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-[7.5px] md:text-[8.5px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded-full border-2 border-white shadow-sm flex items-center gap-0.5 md:gap-1">
              <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-white animate-ping" />
              LIVE
            </span>
          </button>
        </div>
      </aside>

      {/* ── FULL MOTION MODAL DIALOG ── */}
      {isOpen && (
        <div className="fixed inset-0 z-[99998] bg-slate-950/75 backdrop-blur-md flex items-center justify-center p-4 font-['Inter'] transition-all duration-300">
          {/* Click outside to close backdrop */}
          <div className="fixed inset-0 -z-10" onClick={handleClose} aria-hidden="true" />

          {/* Main Animated Modal Card */}
          <div 
            className="bg-white rounded-[2.25rem] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35),0_0_50px_rgba(37,211,102,0.3)] max-w-[430px] w-full relative overflow-hidden border border-emerald-400/30 animate-wa-pop"
            role="dialog"
            aria-modal="true"
            aria-labelledby="wa-modal-title"
          >
            {/* Animated Glow Halo Background Layer */}
            <div className="absolute -top-24 -left-24 w-56 h-56 bg-emerald-400/25 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-56 h-56 bg-teal-400/20 rounded-full blur-3xl pointer-events-none" />

            {/* Header Section with Rich Animated Green Mesh */}
            <div className="bg-gradient-to-br from-[#064E3B] via-[#047857] to-[#10B981] p-7 pt-9 pb-8 text-center relative overflow-hidden text-white">
              {/* Subtle Ambient Background Ring */}
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-wa-float" />
              <div className="absolute -bottom-10 -left-10 w-36 h-36 bg-black/15 rounded-full blur-xl animate-wa-float-rev" />

              {/* Close Button with Pop & Rotate Hover */}
              <button 
                onClick={handleClose} 
                aria-label="Close WhatsApp Popup"
                className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center bg-white/15 hover:bg-white/30 backdrop-blur-md rounded-full text-white hover:rotate-90 hover:scale-110 active:scale-95 transition-all duration-200 z-30 shadow-sm"
              >
                <X size={17} strokeWidth={2.8} />
              </button>

              {/* Central 3D Animated WhatsApp Icon with Radar Waves */}
              <div className="relative w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                {/* Concentric Broadcasting Radar Waves */}
                <div className="absolute w-24 h-24 rounded-full border-2 border-emerald-300/40 animate-wa-radar-1 pointer-events-none" />
                <div className="absolute w-24 h-24 rounded-full border-2 border-emerald-300/30 animate-wa-radar-2 pointer-events-none" />
                <div className="absolute w-24 h-24 rounded-full border border-white/20 animate-wa-radar-3 pointer-events-none" />

                {/* 3D Floating Emblem */}
                <div className="relative z-10 w-20 h-20 bg-white rounded-3xl shadow-[0_12px_28px_rgba(0,0,0,0.22),0_0_20px_rgba(37,211,102,0.4)] flex items-center justify-center border-4 border-white/30 animate-wa-float group hover:scale-105 transition-transform">
                  <svg viewBox="0 0 24 24" width="44" height="44" fill="currentColor" className="text-[#25D366] drop-shadow-md">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                  </svg>

                  {/* Floating "LIVE" badge on top of emblem */}
                  <span className="absolute -top-2 -right-2 bg-rose-500 text-white text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full shadow-md flex items-center gap-1 border border-white">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                    LIVE
                  </span>
                </div>
              </div>
              
              {/* Main Titles */}
              <h2 id="wa-modal-title" className="text-xl md:text-[23px] font-[900] text-white leading-tight relative z-10 drop-shadow-md">
                Apna College Bihar
              </h2>
              <div className="inline-flex items-center gap-1.5 mt-1 px-3 py-1 bg-white/15 backdrop-blur-md rounded-full text-emerald-100 font-extrabold text-xs tracking-wider uppercase border border-white/20">
                <Sparkles size={12} className="text-amber-300" /> WhatsApp Channel
              </div>

              <p className="text-[11.5px] font-semibold text-emerald-100/95 mt-2 flex items-center justify-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-300 animate-ping inline-block" />
                Bihar Engineering (BEU) Students Ka Official Hub
              </p>
            </div>
            
            {/* Content Section with Animated Benefit Items */}
            <div className="p-6 md:p-7 bg-gradient-to-b from-white to-slate-50/70">
              <div className="text-slate-700 text-sm mb-6 space-y-2.5 font-medium">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-[900] text-slate-800 text-[11px] uppercase tracking-[0.16em] flex items-center gap-1.5">
                    <Zap size={14} className="text-amber-500 fill-amber-500 animate-pulse" />
                    यहाँ आपको तुरंत मिलेगा:
                  </span>
                  <span className="text-[10px] font-extrabold px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-md uppercase tracking-wider">
                    100% Free
                  </span>
                </div>

                {/* Interactive Feature List */}
                <div className="space-y-2.5">
                  {[
                    { bold: 'Notes & PYQs', text: 'BEU Previous Years Solutions & PDF', badge: 'BEU 2026' },
                    { bold: 'Exam Notifications', text: 'Form Fillup, Results & College Routine', badge: 'FAST ⚡' },
                    { bold: 'Free Guidance', text: 'Engineering Semesters & Lab VIVA Help', badge: 'TOP' },
                    { bold: 'Career & Internships', text: 'Govt Scholarships & Placement Drives', badge: 'NEW' }
                  ].map((item, i) => (
                    <div 
                      key={i} 
                      className="flex items-center justify-between gap-3 p-2.5 px-3 rounded-2xl bg-slate-50/80 hover:bg-emerald-50/70 border border-slate-100 hover:border-emerald-200/60 transition-all duration-200 group/item cursor-default hover:translate-x-1"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="w-7 h-7 rounded-full bg-emerald-100/80 text-emerald-600 flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 group-hover/item:bg-emerald-500 group-hover/item:text-white transition-all duration-200 shadow-sm">
                          <CheckCircle2 size={15} strokeWidth={3} />
                        </div>
                        <div className="leading-snug truncate">
                          <b className="text-slate-900 text-[13px] font-bold block">{item.bold}</b> 
                          <span className="text-slate-500 text-[11px] block truncate">{item.text}</span>
                        </div>
                      </div>
                      <span className="text-[9.5px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-white text-slate-600 border border-slate-200/80 shrink-0 group-hover/item:bg-emerald-600 group-hover/item:text-white group-hover/item:border-emerald-600 transition-colors">
                        {item.badge}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Animated Glowing Pulsing CTA Button */}
              <button 
                onClick={handleJoin}
                className="w-full bg-gradient-to-r from-[#25D366] via-[#1ebd5a] to-[#059669] hover:from-[#1ebd5a] hover:to-[#047857] text-white font-[900] py-4 rounded-2xl shadow-[0_10px_28px_rgba(37,211,102,0.45)] transition-all duration-300 active:scale-95 hover:scale-[1.02] text-[13.5px] tracking-[0.08em] uppercase flex items-center justify-center gap-2.5 relative overflow-hidden group animate-wa-btn-glow"
              >
                {/* Shimmer Light Beam Effect */}
                <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/35 to-transparent animate-wa-sweep pointer-events-none" />

                <MessageCircle size={20} className="fill-white/30 group-hover:scale-110 group-hover:rotate-12 transition-transform" />
                <span>Join WhatsApp Channel</span>
                <ArrowRight size={17} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              {/* Bottom Trust Micro-Copy - Zero spam mention */}
              <p className="text-[11px] text-slate-500 font-bold tracking-wide mt-4 text-center flex items-center justify-center gap-1.5">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                बिल्कुल FREE • 100% Verified Community • 1-Click Instant Join
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
