import React from 'react';
import { Capacitor } from '@capacitor/core';
import { Link } from 'react-router-dom';
import { Send, Youtube, Mail, Heart, MessageCircle } from 'lucide-react';

export default function Footer() {
  const isNative = Capacitor.isNativePlatform();

  if (isNative) {
    return (
      <footer className="shrink-0 bg-transparent text-slate-500 py-8 px-6 mt-4 w-full">
        <div className="flex flex-wrap justify-center gap-4 px-4 mb-6 text-xs font-semibold">
          <Link to="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
          <Link to="/privacy-policy" className="hover:text-blue-600 transition-colors">Privacy</Link>
          <Link to="/terms" className="hover:text-blue-600 transition-colors">Terms</Link>
          <Link to="/dmca" className="hover:text-blue-600 transition-colors">DMCA</Link>
          <Link to="/disclaimer" className="hover:text-blue-600 transition-colors">Disclaimer</Link>
        </div>
        <div className="text-center flex flex-col items-center justify-center gap-2 text-xs">
          <p className="text-slate-400">&copy; {new Date().getFullYear()} Apna College Bihar. All rights reserved.</p>
          <p className="text-slate-500 font-medium">Made with <span className="text-red-500">❤️</span> for BEU Students</p>
        </div>
      </footer>
    );
  }

  return (
    <footer className="relative bg-white pt-12 sm:pt-16 pb-10 px-4 sm:px-6 md:px-12 mt-auto border-t border-slate-200/80">
      <div className="container mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-8">
        
        {/* Brand Column */}
        <div className="sm:col-span-2 lg:col-span-2 space-y-5">
           <div className="flex items-center gap-3">
              <img src="/logo-acb.png?v=99" alt="Apna College Bihar Logo" className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl shadow-sm border border-slate-100" />
              <div>
                <span className="text-lg sm:text-xl font-heading font-black tracking-tight text-slate-900 block leading-none">Apna College Bihar</span>
                <span className="text-xs text-blue-600 font-bold tracking-wider mt-1 block">Official Study Engine</span>
              </div>
           </div>
           <p className="text-slate-500 font-medium text-xs sm:text-sm leading-relaxed max-w-sm">
             The largest academic platform dedicated to Bihar engineering students. Free notes, PYQs, syllabus, and counselling tools.
           </p>
           
           <div className="flex gap-2.5 pt-1">
              <a href="https://whatsapp.com/channel/0029VbC6FsH3wtb5UEDvrW0a" target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center text-emerald-600 bg-emerald-50 hover:bg-emerald-600 hover:text-white hover:-translate-y-0.5 transition-all shadow-sm border border-emerald-100 group" aria-label="WhatsApp Channel">
                <MessageCircle size={18} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://t.me/apnacollegebihar" target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center text-[#0088cc] bg-sky-50 hover:bg-[#0088cc] hover:text-white hover:-translate-y-0.5 transition-all shadow-sm border border-sky-100 group" aria-label="Telegram Channel">
                <Send size={18} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://youtube.com/@apnacollegebihar" target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center text-rose-600 bg-rose-50 hover:bg-rose-600 hover:text-white hover:-translate-y-0.5 transition-all shadow-sm border border-rose-100 group" aria-label="YouTube Channel">
                <Youtube size={18} className="group-hover:scale-110 transition-transform" />
              </a>
           </div>
        </div>

        {/* Links Column 1 */}
        <div className="space-y-3 sm:space-y-4">
           <h4 className="text-xs font-heading font-bold text-slate-900 tracking-wider">Resources</h4>
           <div className="flex flex-col gap-2.5 sm:gap-3">
              <Link to="/mentorship" className="text-xs sm:text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors">Free Senior Mentorship</Link>
              <Link to="/notes" className="text-xs sm:text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors">B.Tech Notes</Link>
              <Link to="/pyq" className="text-xs sm:text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors">PYQ Papers</Link>
              <Link to="/syllabus" className="text-xs sm:text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors">BEU Syllabus</Link>
              <Link to="/cgpa" className="text-xs sm:text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors">CGPA Calculator</Link>
           </div>
        </div>

        {/* Links Column 2 */}
        <div className="space-y-3 sm:space-y-4">
           <h4 className="text-xs font-heading font-bold text-slate-900 tracking-wider">Company</h4>
           <div className="flex flex-col gap-2.5 sm:gap-3">
              <Link to="/about" className="text-xs sm:text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors">About Us</Link>
              <Link to="/blog" className="text-xs sm:text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors">Engineering Blog</Link>
              <Link to="/contact" className="text-xs sm:text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors">Contact Us</Link>
              <Link to="/directory" className="text-xs sm:text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors">Sitemap</Link>
           </div>
        </div>

        {/* Links Column 3 */}
        <div className="space-y-3 sm:space-y-4">
           <h4 className="text-xs font-heading font-bold text-slate-900 tracking-wider">Legal</h4>
           <div className="flex flex-col gap-2.5 sm:gap-3">
              <Link to="/privacy-policy" className="text-xs sm:text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-xs sm:text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors">Terms & Conditions</Link>
              <Link to="/dmca" className="text-xs sm:text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors">DMCA Policy</Link>
              <Link to="/disclaimer" className="text-xs sm:text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors">Disclaimer</Link>
              <Link to="/delete-account" className="text-xs sm:text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors">Delete Account</Link>
           </div>
        </div>
      </div>

      <div className="container mx-auto mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-medium text-center sm:text-left">
         <p className="text-slate-400">© {new Date().getFullYear()} Apna College Bihar. All rights reserved.</p>
         <p className="text-slate-500 flex items-center gap-1 justify-center sm:justify-start">
           Made with <Heart size={14} className="text-rose-500 fill-rose-500" /> in Bihar
         </p>
      </div>
    </footer>
  );
}
