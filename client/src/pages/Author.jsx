import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, User, Heart, Sparkles, Code, GraduationCap } from 'lucide-react';
import SEO from '../components/SEO';

export default function Author() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-['Inter'] selection:bg-blue-500/30 pb-24">
      <SEO title="About the Author | Apna College Bihar" />
      {/* Header */}
      <div className="sticky top-0 z-50 bg-[#f8fafc]/90 backdrop-blur-xl border-b border-slate-200 px-6 py-4 flex items-center justify-between shadow-sm">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors group">
          <div className="p-2 bg-slate-100 group-hover:bg-blue-600/10 border border-slate-200 rounded-xl transition-all">
            <ChevronLeft size={20} className="text-blue-600" />
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest">Back</span>
        </button>
      </div>

      <div className="max-w-4xl mx-auto px-6 pt-12 space-y-12 animate-in fade-in duration-500">
        <div className="text-center space-y-6">
          <div className="inline-flex p-4 bg-blue-600/10 border border-blue-500/20 text-blue-600 rounded-3xl shadow-sm mb-2">
            <User size={40} />
          </div>
          <div className="space-y-2">
            <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.4em]">Founder & Creator</p>
            <h1 className="text-3xl md:text-6xl font-[1000] text-slate-900 tracking-tighter uppercase leading-none">
              Prince
            </h1>
          </div>
          <p className="text-sm md:text-base font-medium text-slate-600 max-w-2xl mx-auto leading-relaxed pt-2">
            The visionary developer and engineering student behind Apna College Bihar. Dedicated to solving the genuine academic hurdles faced by Bihar Engineering University students through technology.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-[3rem] p-10 shadow-sm space-y-8">
           <div className="flex items-center gap-3 text-blue-600 border-b border-slate-100 pb-4">
             <Code size={28} />
             <h2 className="text-2xl font-[1000] uppercase tracking-tight text-slate-900">The Journey</h2>
           </div>
           <p className="text-sm font-medium text-slate-600 leading-relaxed">
             Being an engineering student in Bihar, Prince realized the lack of organized academic resources, proper counselling tools, and an active peer network. What started as a simple idea to compile PYQs and notes quickly transformed into the ultimate study engine for all BEU students. By writing thousands of lines of code and building complex systems, Prince created this entire platform to ensure no junior ever struggles like the batches before them.
           </p>

           <div className="flex items-center gap-3 text-emerald-600 border-b border-slate-100 pb-4 pt-4">
             <GraduationCap size={28} />
             <h2 className="text-2xl font-[1000] uppercase tracking-tight text-slate-900">Mission & Vision</h2>
           </div>
           <p className="text-sm font-medium text-slate-600 leading-relaxed">
             Prince's mission is to democratize engineering education in Bihar. The vision is to build a massive, free, and open ecosystem where every student from the 38+ engineering colleges in Bihar has access to high-quality study materials, intelligent AI tools, and predictive algorithms to excel in their careers.
           </p>

           <div className="flex items-center gap-3 text-red-500 border-b border-slate-100 pb-4 pt-4">
             <Heart size={28} />
             <h2 className="text-2xl font-[1000] uppercase tracking-tight text-slate-900">Get in Touch</h2>
           </div>
           <p className="text-sm font-medium text-slate-600 leading-relaxed">
             If you appreciate the effort put into Apna College Bihar, or if you have suggestions for improvements, feel free to reach out via the Contact section. We are building this community together!
           </p>
        </div>
      </div>
    </div>
  );
}
