import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, FileText, CheckCircle2, AlertTriangle, Scale } from 'lucide-react';

export default function Terms() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0a0f1d] text-white font-['Inter'] selection:bg-blue-500/30 pb-24">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-[#0a0f1d]/90 backdrop-blur-xl border-b border-white/10 px-6 py-4 flex items-center justify-between shadow-2xl">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group">
          <div className="p-2 bg-white/5 group-hover:bg-blue-600/20 border border-white/10 rounded-xl transition-all">
            <ChevronLeft size={20} className="text-blue-400" />
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest">Back</span>
        </button>
        <div className="flex items-center gap-3">
          <img src="/logo-acb.png?v=99" alt="ACB Logo" className="w-8 h-8 rounded-xl border border-white/10 shadow-lg object-cover" />
          <span className="text-[10px] font-black tracking-tighter uppercase text-slate-200">ACB Hub</span>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 pt-12 space-y-12 animate-in fade-in duration-500">
        {/* Title Section */}
        <div className="text-center space-y-4">
          <div className="inline-flex p-4 bg-emerald-600/10 border border-emerald-500/20 text-emerald-400 rounded-3xl shadow-2xl mb-2">
            <FileText size={36} />
          </div>
          <p className="text-[10px] font-black text-emerald-400 uppercase tracking-[0.4em]">Apna College Bihar</p>
          <h1 className="text-3xl md:text-5xl font-[1000] text-white tracking-tighter uppercase leading-none">Terms of Service</h1>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest max-w-lg mx-auto leading-relaxed pt-2">
            Effective Date: May 2026 • Student Conduct & Platform Guidelines
          </p>
        </div>

        {/* Policy Cards */}
        <div className="space-y-6">
          <div className="bg-[#0d1526] border border-white/10 rounded-[2.5rem] p-8 md:p-10 shadow-2xl space-y-4">
            <div className="flex items-center gap-3 text-emerald-400">
              <CheckCircle2 size={24} />
              <h2 className="text-lg font-[1000] uppercase tracking-tight text-white">1. Acceptance of Terms</h2>
            </div>
            <p className="text-xs font-medium text-slate-300 leading-relaxed">
              By accessing and utilizing the Apna College Bihar (ACB) web platform or mobile application, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may discontinue use of the platform immediately.
            </p>
          </div>

          <div className="bg-[#0d1526] border border-white/10 rounded-[2.5rem] p-8 md:p-10 shadow-2xl space-y-4">
            <div className="flex items-center gap-3 text-blue-400">
              <Scale size={24} />
              <h2 className="text-lg font-[1000] uppercase tracking-tight text-white">2. Academic Integrity & Conduct</h2>
            </div>
            <p className="text-xs font-medium text-slate-300 leading-relaxed">
              Apna College Bihar is designed exclusively for educational assistance, study organization, and academic networking. Users agree to:
            </p>
            <ul className="space-y-2 text-xs text-slate-400 pl-4 list-disc font-medium">
              <li>Maintain respectful communication within study network groups and community channels.</li>
              <li>Refrain from uploading unlawful, harmful, or inappropriate material in shared notes or group chats.</li>
              <li>Use tools like the UGEAC Predictor and CGPA Calculator for informational guidance only.</li>
            </ul>
          </div>

          <div className="bg-[#0d1526] border border-white/10 rounded-[2.5rem] p-8 md:p-10 shadow-2xl space-y-4">
            <div className="flex items-center gap-3 text-orange-400">
              <AlertTriangle size={24} />
              <h2 className="text-lg font-[1000] uppercase tracking-tight text-white">3. Disclaimer of Warranties</h2>
            </div>
            <p className="text-xs font-medium text-slate-300 leading-relaxed">
              All tools, notes, calculators, and counseling predictions are provided on an "as-is" basis. While we strive for extreme accuracy, Apna College Bihar does not guarantee official university outcomes or absolute correctness of prediction data.
            </p>
            <p className="text-xs font-medium text-slate-400 leading-relaxed">
              Official university decisions (BEU/BCECEB) will always supersede platform estimates.
            </p>
          </div>
        </div>

        {/* Footer info */}
        <div className="text-center pt-8 border-t border-white/10 space-y-3">
          <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">GEC SHEIKHPURA - APNA COLLEGE BIHAR</p>
          <p className="text-[9px] font-bold text-slate-600">By continuing to use ACB Hub, you acknowledge and accept these platform guidelines.</p>
        </div>
      </div>
    </div>
  );
}
