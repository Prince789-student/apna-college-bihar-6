import React, { useState } from 'react';
import { Capacitor } from '@capacitor/core';
import DonateModal from './DonateModal';
import { Link, useLocation } from 'react-router-dom';
import { Send, Youtube, Heart, MessageCircle } from 'lucide-react';

export default function Footer() {
  const [showDonate, setShowDonate] = useState(false);
  const location = useLocation();
  const isNative = Boolean(
    Capacitor.isNativePlatform() ||
    (typeof window !== 'undefined' && (
      !!window.Capacitor?.isNative ||
      window.location.protocol === 'file:' ||
      (window.location.hostname === 'localhost' && !window.location.port)
    ))
  );
  const isStandaloneApp = Boolean(
    isNative ||
    location.pathname === '/hub' ||
    (typeof window !== 'undefined' && (
      new URLSearchParams(window.location.search).get('standalone') === 'true' ||
      sessionStorage.getItem('standalone') === 'true'
    ))
  );

  const [isMobileScreen, setIsMobileScreen] = React.useState(() => {
    if (typeof window === 'undefined') return false;
    return Boolean(
      isNative ||
      window.innerWidth < 768 ||
      /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent || '')
    );
  });

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(
        Boolean(
          isNative ||
          window.innerWidth < 768 ||
          /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent || '')
        )
      );
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isNative]);

  // Official Native Android App Footer (Matches v64 APK)
  if (isStandaloneApp) {
    return (
      <footer className="shrink-0 bg-transparent text-slate-500 py-8 px-6 mt-4 w-full">
        <div className="flex flex-wrap justify-center gap-4 px-4 mb-6 text-xs font-semibold">
          <Link to="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
          <Link to="/author" className="hover:text-blue-600 transition-colors">Developer</Link>
          <Link to="/privacy-policy" className="hover:text-blue-600 transition-colors">Privacy</Link>
          <Link to="/terms" className="hover:text-blue-600 transition-colors">Terms</Link>
          <Link to="/dmca" className="hover:text-blue-600 transition-colors">DMCA</Link>
          <Link to="/disclaimer" className="hover:text-blue-600 transition-colors">Disclaimer</Link>
          <Link to="/delete-account" className="hover:text-blue-600 transition-colors">Delete Account</Link>
          <button type="button" onClick={() => setShowDonate(true)} className="text-rose-600 hover:text-rose-700 font-bold transition-colors cursor-pointer">Donate Us ❤️</button>
        </div>
        <DonateModal isOpen={showDonate} mode="SUPPORT" onClose={() => setShowDonate(false)} />
        <div className="text-center flex flex-col items-center justify-center gap-2 text-xs">
          <p className="text-slate-400">&copy; {new Date().getFullYear()} Apna College Bihar. All rights reserved.</p>
          <p className="text-slate-500 font-medium">
            Developed by <Link to="/author" className="text-blue-600 font-bold hover:underline">Prince Kumar</Link> • 100% Free Mission for All BEU Students ❤️
          </p>
        </div>
      </footer>
    );
  }

  // Mobile Web Screen Compact Footer
  if (isMobileScreen) {
    return (
      <footer className="shrink-0 bg-white/80 backdrop-blur-md border-t border-slate-200/90 text-slate-600 pt-7 pb-28 px-4 mt-6 w-full select-none">
        <div className="max-w-md mx-auto space-y-4 text-center">
          {/* Logo & Subtitle */}
          <div className="flex items-center justify-center gap-2.5">
            <div className="w-8 h-8 rounded-xl overflow-hidden border border-slate-200 shadow-2xs">
              <img src="/logo-acb.png?v=99" alt="ACB Logo" className="w-full h-full object-cover" />
            </div>
            <div className="text-left">
              <span className="font-heading font-black text-xs tracking-tight text-slate-900 block leading-none">
                Apna College <span className="text-blue-600">Bihar</span>
              </span>
              <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block mt-0.5">
                #1 Study Hub for BEU Students
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-1.5 text-[11px] font-semibold text-slate-600">
            <Link to="/notes" className="px-2 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-blue-600 transition-colors">Notes</Link>
            <Link to="/pyq" className="px-2 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-blue-600 transition-colors">PYQs</Link>
            <Link to="/syllabus" className="px-2 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-blue-600 transition-colors">Syllabus</Link>
            <Link to="/mentorship" className="px-2 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-blue-600 transition-colors">Mentorship</Link>
            <Link to="/contact" className="px-2 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-blue-600 transition-colors">Contact</Link>
            <Link to="/privacy-policy" className="px-2 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-blue-600 transition-colors">Privacy</Link>
            <Link to="/terms" className="px-2 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-blue-600 transition-colors">Terms</Link>
            <Link to="/dmca" className="px-2 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-blue-600 transition-colors">DMCA</Link>
          </div>

          {/* Social Channels */}
          <div className="flex items-center justify-center gap-2.5 pt-1">
            <a
              href="https://whatsapp.com/channel/0029VbC6FsH3wtb5UEDvrW0a"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-xl flex items-center justify-center text-emerald-600 bg-emerald-50 border border-emerald-200/80 active:scale-95 transition-all shadow-2xs"
              aria-label="WhatsApp Channel"
            >
              <MessageCircle size={15} />
            </a>
            <a
              href="https://t.me/apnacollegebihar"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-xl flex items-center justify-center text-sky-600 bg-sky-50 border border-sky-200/80 active:scale-95 transition-all shadow-2xs"
              aria-label="Telegram Channel"
            >
              <Send size={15} />
            </a>
            <a
              href="https://youtube.com/@apnacollegebihar"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-xl flex items-center justify-center text-rose-600 bg-rose-50 border border-rose-200/80 active:scale-95 transition-all shadow-2xs"
              aria-label="YouTube Channel"
            >
              <Youtube size={15} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-[10px] text-slate-500 pt-2 border-t border-slate-200/70 space-y-0.5">
            <p>&copy; {new Date().getFullYear()} Apna College Bihar. All rights reserved.</p>
            <p className="font-medium text-slate-500 flex items-center justify-center gap-1">
              Made with <Heart size={11} className="text-rose-500 fill-rose-500 inline" /> in Bihar for BEU Students
            </p>
          </div>
        </div>
      </footer>
    );
  }

  // Desktop Web Footer
  return (
    <footer className="relative bg-transparent pt-12 sm:pt-16 pb-10 px-4 sm:px-6 md:px-12 mt-auto border-t border-white/10 text-slate-200 z-10">
      <div className="container mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-8">
        
        {/* Brand Column */}
        <div className="sm:col-span-2 lg:col-span-2 space-y-5">
           <div className="flex items-center gap-3">
              <img src="/logo-acb.png?v=99" alt="Apna College Bihar Logo" className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl shadow-sm border border-white/15" />
              <div>
                <span className="text-lg sm:text-xl font-heading font-black tracking-tight text-white block leading-none">Apna College Bihar</span>
                <span className="text-xs text-cyan-400 font-bold tracking-wider mt-1 block">Official Study Engine</span>
              </div>
           </div>
           <p className="text-slate-300 font-medium text-xs sm:text-sm leading-relaxed max-w-sm">
             The largest academic platform dedicated to Bihar engineering students. Free notes, PYQs, syllabus, and counselling tools.
           </p>
           
           <div className="flex gap-2.5 pt-1">
              <a href="https://whatsapp.com/channel/0029VbC6FsH3wtb5UEDvrW0a" target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center text-emerald-400 bg-emerald-500/20 hover:bg-emerald-600 hover:text-white hover:-translate-y-0.5 transition-all shadow-sm border border-emerald-500/30 group" aria-label="WhatsApp Channel">
                <MessageCircle size={18} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://t.me/apnacollegebihar" target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center text-sky-400 bg-sky-500/20 hover:bg-[#0088cc] hover:text-white hover:-translate-y-0.5 transition-all shadow-sm border border-sky-500/30 group" aria-label="Telegram Channel">
                <Send size={18} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://youtube.com/@apnacollegebihar" target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center text-rose-400 bg-rose-500/20 hover:bg-rose-600 hover:text-white hover:-translate-y-0.5 transition-all shadow-sm border border-rose-500/30 group" aria-label="YouTube Channel">
                <Youtube size={18} className="group-hover:scale-110 transition-transform" />
              </a>
           </div>
        </div>

        {/* Links Column 1 */}
        <div className="space-y-3 sm:space-y-4">
           <h4 className="text-xs font-heading font-bold text-white tracking-wider uppercase">Resources</h4>
           <div className="flex flex-col gap-2.5 sm:gap-3">
              <Link to="/mentorship" className="text-xs sm:text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">Free Senior Mentorship</Link>
              <Link to="/notes" className="text-xs sm:text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">B.Tech Notes</Link>
              <Link to="/pyq" className="text-xs sm:text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">PYQ Papers</Link>
              <Link to="/syllabus" className="text-xs sm:text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">BEU Syllabus</Link>
              <Link to="/cgpa" className="text-xs sm:text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">CGPA Calculator</Link>
              <Link to="/download" className="text-xs sm:text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors">Download Apps (Windows, Mac, Linux &amp; Android)</Link>
           </div>
        </div>

        {/* Links Column 2 */}
        <div className="space-y-3 sm:space-y-4">
           <h4 className="text-xs font-heading font-bold text-white tracking-wider uppercase">Company</h4>
           <div className="flex flex-col gap-2.5 sm:gap-3">
              <Link to="/about" className="text-xs sm:text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">About Us</Link>
              <Link to="/author" className="text-xs sm:text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">Developer (Prince Kumar)</Link>
              <Link to="/blog" className="text-xs sm:text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">Engineering Blog</Link>
              <Link to="/contact" className="text-xs sm:text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">Contact Us</Link>
              <Link to="/directory" className="text-xs sm:text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">Sitemap</Link>
           </div>
        </div>

        {/* Links Column 3 */}
        <div className="space-y-3 sm:space-y-4">
           <h4 className="text-xs font-heading font-bold text-white tracking-wider uppercase">Legal</h4>
           <div className="flex flex-col gap-2.5 sm:gap-3">
              <Link to="/privacy-policy" className="text-xs sm:text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-xs sm:text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">Terms &amp; Conditions</Link>
              <Link to="/dmca" className="text-xs sm:text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">DMCA Policy</Link>
              <Link to="/disclaimer" className="text-xs sm:text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">Disclaimer</Link>
              <Link to="/delete-account" className="text-xs sm:text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">Delete Account</Link>
           </div>
        </div>
      </div>

      <div className="container mx-auto mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-medium text-center sm:text-left">
         <p className="text-slate-400">&copy; {new Date().getFullYear()} Apna College Bihar. All rights reserved.</p>
         <p className="text-slate-400 flex items-center gap-1 justify-center sm:justify-start">
           Developed with <Heart size={14} className="text-rose-500 fill-rose-500" /> by{' '}
           <Link to="/author" className="text-cyan-400 font-bold hover:underline">Prince Kumar</Link> - Mission: 100% Free Education for All
         </p>
      </div>
    </footer>
  );
}
