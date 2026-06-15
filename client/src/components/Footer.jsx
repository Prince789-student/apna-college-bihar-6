import React from 'react';
import { Capacitor } from '@capacitor/core';
import { Link } from 'react-router-dom';
import { Send, Youtube, Mail, Heart, MessageCircle } from 'lucide-react';

export default function Footer() {
  const isNative = Capacitor.isNativePlatform();

  if (isNative) {
    return (
      <footer className="shrink-0 bg-transparent text-slate-500 py-8 px-6 mt-4 w-full">
        <div className="flex flex-wrap justify-center gap-4 px-4 mb-6">
          <Link to="/about" className="text-[10px] font-black uppercase tracking-widest hover:text-blue-600 transition-colors">About</Link>
          <Link to="/author" className="text-[10px] font-black uppercase tracking-widest hover:text-blue-600 transition-colors">Author</Link>
          <Link to="/contact" className="text-[10px] font-black uppercase tracking-widest hover:text-blue-600 transition-colors">Contact</Link>
          <Link to="/privacy-policy" className="text-[10px] font-black uppercase tracking-widest hover:text-blue-600 transition-colors">Privacy</Link>
          <Link to="/terms" className="text-[10px] font-black uppercase tracking-widest hover:text-blue-600 transition-colors">Terms</Link>
          <Link to="/dmca" className="text-[10px] font-black uppercase tracking-widest hover:text-blue-600 transition-colors">DMCA</Link>
          <Link to="/disclaimer" className="text-[10px] font-black uppercase tracking-widest hover:text-blue-600 transition-colors">Disclaimer</Link>
        </div>
        <div className="text-center flex flex-col items-center justify-center gap-2">
          <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">&copy; {new Date().getFullYear()} Apna College Bihar.</p>
          <p className="text-[10px] font-bold text-slate-500 tracking-wider">Made with <span className="text-red-500">❤️</span> for BEU STUDENTS</p>
        </div>
      </footer>
    );
  }

  return (
    <footer className="relative bg-white pt-20 pb-8 px-6 md:px-16 mt-auto">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
      <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
        
        {/* Brand Column */}
        <div className="lg:col-span-2 space-y-6">
           <div className="flex items-center gap-3">
              <img src="/logo-acb.png?v=99" alt="Apna College Bihar Logo" className="w-12 h-12 rounded-xl shadow-sm" />
              <div>
                <span className="text-xl font-[1000] tracking-tighter uppercase text-slate-900 block leading-none">APNA COLLEGE BIHAR</span>
                <span className="text-[8px] text-blue-600 font-bold uppercase tracking-[0.4em] mt-1.5 block">Official Study Engine</span>
              </div>
           </div>
           <p className="text-slate-500 font-medium text-sm leading-relaxed max-w-sm">
             The largest academic platform dedicated to Bihar engineering students. Free notes, PYQs, syllabus, and counselling tools.
           </p>
           
           <div className="flex gap-3 pt-2">
              <a href="https://whatsapp.com/channel/0029VbC6FsH3wtb5UEDvrW0a" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-emerald-600 hover:bg-emerald-600 hover:text-white hover:-translate-y-1 border border-slate-200 transition-all shadow-sm hover:shadow-lg group">
                <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://t.me/apnacollegebihar" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#0088cc] hover:bg-[#0088cc] hover:text-white hover:-translate-y-1 border border-slate-200 transition-all shadow-sm hover:shadow-lg group">
                <Send size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://youtube.com/@apnacollegebihar" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-red-600 hover:bg-red-600 hover:text-white hover:-translate-y-1 border border-slate-200 transition-all shadow-sm hover:shadow-lg group">
                <Youtube size={20} className="group-hover:scale-110 transition-transform" />
              </a>
           </div>
        </div>

        {/* Links Column 1 */}
        <div className="space-y-6">
           <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-900">Resources</h4>
           <div className="flex flex-col gap-4">
              <Link to="/notes" className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors">B.Tech Notes</Link>
              <Link to="/pyq" className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors">PYQ Papers</Link>
              <Link to="/syllabus" className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors">BEU Syllabus</Link>
              <Link to="/cgpa" className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors">CGPA Calculator</Link>
           </div>
        </div>

        {/* Links Column 2 */}
        <div className="space-y-6">
           <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-900">Company</h4>
           <div className="flex flex-col gap-4">
              <Link to="/about" className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors">About Us</Link>
              <Link to="/author" className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors">Creator & Author</Link>
              <Link to="/contact" className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors">Contact Us</Link>
              <Link to="/directory" className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors">Sitemap</Link>
           </div>
        </div>

        {/* Links Column 3 */}
        <div className="space-y-6">
           <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-900">Legal</h4>
           <div className="flex flex-col gap-4">
              <Link to="/privacy-policy" className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors">Terms & Conditions</Link>
              <Link to="/dmca" className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors">DMCA Policy</Link>
              <Link to="/disclaimer" className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors">Disclaimer</Link>
              <Link to="/delete-account" className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors">Delete Account</Link>
           </div>
        </div>
      </div>

      <div className="container mx-auto mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
         <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest">© {new Date().getFullYear()} APNA COLLEGE BIHAR. ALL RIGHTS RESERVED.</p>
         <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1">
           Made with <Heart size={12} className="text-rose-500 fill-rose-500" /> in Bihar
         </p>
      </div>
    </footer>
  );
}
