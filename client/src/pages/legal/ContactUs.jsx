import React from 'react';
import { Mail, Phone, MapPin, Globe, Instagram, Github } from 'lucide-react';

export default function ContactUs() {
  return (
    <div className="max-w-4xl mx-auto p-6 md:p-12 text-slate-300 space-y-12 animate-in fade-in duration-500">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-[1000] text-white tracking-widest uppercase">Contact Us</h1>
        <p className="text-lg text-emerald-400 font-black uppercase tracking-widest">Connect with our support team</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-[#0d121f] p-8 rounded-[3rem] border border-slate-800 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-emerald-600/5 rounded-full blur-[80px] pointer-events-none transition-all group-hover:bg-emerald-600/10"></div>
          <h2 className="text-2xl font-black text-white uppercase mb-6 flex items-center gap-3"><Globe size={20} className="text-emerald-400"/> General Support</h2>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Mail className="text-slate-500" size={24}/>
              <div className="flex flex-col">
                <span className="text-[9px] font-black uppercase text-slate-500 tracking-widest">Email</span>
                <span className="text-lg font-bold text-white uppercase">apnacollegebihar@gmail.com</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-slate-500" size={24}/>
              <div className="flex flex-col">
                <span className="text-[9px] font-black uppercase text-slate-500 tracking-widest">Phone</span>
                <span className="text-lg font-bold text-white uppercase">+91 99999 00000</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-slate-500" size={24}/>
              <div className="flex flex-col">
                <span className="text-[9px] font-black uppercase text-slate-500 tracking-widest">Address</span>
                <span className="text-lg font-bold text-white uppercase">Patna, Bihar, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#0d121f] p-8 rounded-[3rem] border border-slate-800 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-blue-600/5 rounded-full blur-[80px] pointer-events-none transition-all group-hover:bg-blue-600/10"></div>
          <h2 className="text-2xl font-black text-white uppercase mb-6 flex items-center gap-3"><Instagram size={20} className="text-blue-400"/> Social Presence</h2>
          <div className="space-y-6">
            <a href="https://instagram.com" className="flex items-center gap-4 hover:bg-slate-800 p-2 rounded-xl transition-all">
              <Instagram className="text-slate-500" size={24}/>
              <div className="flex flex-col">
                <span className="text-[9px] font-black uppercase text-slate-500 tracking-widest">Instagram</span>
                <span className="text-lg font-bold text-white uppercase">@apnacollegebihar</span>
              </div>
            </a>
            <a href="https://github.com" className="flex items-center gap-4 hover:bg-slate-800 p-2 rounded-xl transition-all">
              <Github className="text-slate-500" size={24}/>
              <div className="flex flex-col">
                <span className="text-[9px] font-black uppercase text-slate-500 tracking-widest">Github</span>
                <span className="text-lg font-bold text-white uppercase">/apnacollegebihar</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="text-center p-8 bg-blue-600/5 border border-dashed border-blue-500/20 rounded-3xl">
        <p className="text-slate-500 font-black uppercase tracking-[0.2em] text-sm italic">Response time is usually within 24-48 hours.</p>
      </div>
    </div>
  );
}
