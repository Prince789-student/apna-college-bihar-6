import React from 'react';
import { Mail, Phone, MapPin, Globe, Instagram, Github, Send, Youtube, ArrowRight } from 'lucide-react';

export default function ContactUs() {
  return (
    <div className="max-w-4xl mx-auto p-6 md:p-12 text-slate-700 space-y-12 animate-in fade-in duration-500">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-[1000] text-slate-900 tracking-widest uppercase">Contact Us</h1>
        <p className="text-lg text-emerald-400 font-black uppercase tracking-widest">Connect with our support team</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-[3rem] border border-slate-200 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-emerald-600/5 rounded-full blur-[80px] pointer-events-none transition-all group-hover:bg-emerald-600/10"></div>
          <h2 className="text-2xl font-black text-slate-900 uppercase mb-6 flex items-center gap-3"><Globe size={20} className="text-emerald-400"/> General Support</h2>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Mail className="text-slate-500" size={24}/>
              <div className="flex flex-col">
                <span className="text-[9px] font-black uppercase text-slate-500 tracking-widest">Email</span>
                <span className="text-lg font-bold text-slate-900 uppercase">apnacollegebihar@gmail.com</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-slate-500" size={24}/>
              <div className="flex flex-col">
                <span className="text-[9px] font-black uppercase text-slate-500 tracking-widest">Phone</span>
                <span className="text-lg font-bold text-slate-900 uppercase">+91 99999 00000</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-slate-500" size={24}/>
              <div className="flex flex-col">
                <span className="text-[9px] font-black uppercase text-slate-500 tracking-widest">Address</span>
                <span className="text-lg font-bold text-slate-900 uppercase">Patna, Bihar, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-[3rem] border border-slate-200 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-blue-600/5 rounded-full blur-[80px] pointer-events-none transition-all group-hover:bg-blue-600/10"></div>
          <h2 className="text-2xl font-black text-slate-900 uppercase mb-6 flex items-center gap-3"><Send size={20} className="text-blue-400"/> Social Presence</h2>
          <div className="space-y-6">
            <a href="https://t.me/apnacollegebihar" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:bg-slate-100 p-2 rounded-xl transition-all">
              <Send className="text-slate-500" size={24}/>
              <div className="flex flex-col">
                <span className="text-[9px] font-black uppercase text-slate-500 tracking-widest">Telegram Channel</span>
                <span className="text-lg font-bold text-slate-900 uppercase">/apnacollegebihar</span>
              </div>
            </a>
            <a href="https://youtube.com/@appne-h8p?si=0xA0suRWTouLWP3i" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:bg-slate-100 p-2 rounded-xl transition-all">
              <Youtube className="text-slate-500" size={24}/>
              <div className="flex flex-col">
                <span className="text-[9px] font-black uppercase text-slate-500 tracking-widest">YouTube Channel</span>
                <span className="text-lg font-bold text-slate-900 uppercase">Apne-H8P</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white p-10 rounded-[4rem] border border-blue-500/30 text-center space-y-8 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="relative z-10 space-y-4">
           <h2 className="text-3xl font-[1000] text-slate-900 uppercase tracking-tighter">Submit Enquiry</h2>
           <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest leading-relaxed">Have a specific question? Fill out our formal enquiry form and we'll get back to you.</p>
           <div className="pt-6">
              <a href="https://forms.gle/xAcLLgAGy4mXaQ4Y6" target="_blank" rel="noopener noreferrer" 
                 className="inline-flex items-center gap-4 px-12 py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-[2rem] font-black text-xs uppercase tracking-widest transition-all shadow-2xl shadow-blue-900/40 active:scale-95">
                <Globe size={18} /> Open Google Form <ArrowRight size={18} />
              </a>
           </div>
        </div>
      </div>
    </div>
  );
}
