import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, FileText, CheckCircle2, AlertTriangle, Scale } from 'lucide-react';
import SEO from '../components/SEO';

export default function Terms() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-['Inter'] selection:bg-blue-500/30 pb-24">
      <SEO title="Terms | Apna College Bihar" />
      {/* Header */}
      <div className="sticky top-0 z-50 bg-[#f8fafc]/90 backdrop-blur-xl border-b border-slate-200 px-6 py-4 flex items-center justify-between shadow-sm">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors group">
          <div className="p-2 bg-slate-100 group-hover:bg-blue-600/10 border border-slate-200 rounded-xl transition-all">
            <ChevronLeft size={20} className="text-blue-600" />
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest">Back</span>
        </button>
        <div className="flex items-center gap-3">
          <img src="/logo-acb.png?v=99" alt="ACB Logo" className="w-8 h-8 rounded-xl border border-slate-200 shadow-sm object-cover" />
          <span className="text-[10px] font-black tracking-tighter uppercase text-slate-800">ACB Hub</span>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 pt-12 space-y-12 animate-in fade-in duration-500">
        {/* Title Section */}
        <div className="text-center space-y-4">
          <div className="inline-flex p-4 bg-emerald-600/10 border border-emerald-500/20 text-emerald-600 rounded-3xl shadow-sm mb-2">
            <FileText size={36} />
          </div>
          <p className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.4em]">Apna College Bihar</p>
          <h1 className="text-3xl md:text-5xl font-[1000] text-slate-905 tracking-tighter uppercase leading-none">Terms of Service</h1>
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest max-w-lg mx-auto leading-relaxed pt-2">
            Effective Date: May 2026 • Student Conduct & Platform Guidelines
          </p>
        </div>

        {/* Policy Cards */}
        <div className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-10 shadow-sm space-y-4">
            <div className="flex items-center gap-3 text-emerald-600">
              <CheckCircle2 size={24} />
              <h2 className="text-lg font-[1000] uppercase tracking-tight text-slate-900">1. Acceptance of Terms</h2>
            </div>
            <p className="text-xs font-medium text-slate-700 leading-relaxed">
              By accessing and utilizing the Apna College Bihar (ACB) web platform or mobile application, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may discontinue use of the platform immediately.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-10 shadow-sm space-y-4">
            <div className="flex items-center gap-3 text-blue-600">
              <Scale size={24} />
              <h2 className="text-lg font-[1000] uppercase tracking-tight text-slate-900">2. Academic Integrity & Conduct</h2>
            </div>
            <p className="text-xs font-medium text-slate-700 leading-relaxed">
              Apna College Bihar is designed exclusively for educational assistance, study organization, and academic networking. Users agree to:
            </p>
            <ul className="space-y-2 text-xs text-slate-600 pl-4 list-disc font-medium">
              <li>Maintain respectful communication within study network groups and community channels.</li>
              <li>Refrain from uploading unlawful, harmful, or inappropriate material in shared notes or group chats.</li>
              <li>Use tools like the UGEAC Predictor and CGPA Calculator for informational guidance only.</li>
            </ul>
          </div>

          <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-10 shadow-sm space-y-4">
            <div className="flex items-center gap-3 text-orange-600">
              <AlertTriangle size={24} />
              <h2 className="text-lg font-[1000] uppercase tracking-tight text-slate-900">3. Disclaimer of Warranties</h2>
            </div>
            <p className="text-xs font-medium text-slate-700 leading-relaxed">
              All tools, notes, calculators, and counseling predictions are provided on an "as-is" basis. While we strive for extreme accuracy, Apna College Bihar does not guarantee official university outcomes or absolute correctness of prediction data.
            </p>
            <p className="text-xs font-medium text-slate-500 leading-relaxed">
              Official university decisions (BEU/BCECEB) will always supersede platform estimates.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-10 shadow-sm space-y-4">
            <div className="flex items-center gap-3 text-purple-600">
              <FileText size={24} />
              <h2 className="text-lg font-[1000] uppercase tracking-tight text-slate-900">4. License</h2>
            </div>
            <p className="text-xs font-medium text-slate-700 leading-relaxed">
              Unless otherwise stated, Apna College Bihar and/or its licensors own the intellectual property rights for all material on Apna College Bihar. All intellectual property rights are reserved. You may access this from Apna College Bihar for your own personal use subjected to restrictions set in these terms and conditions.
            </p>
            <ul className="space-y-2 text-xs text-slate-600 pl-4 list-disc font-medium">
              <li>Republish material from Apna College Bihar</li>
              <li>Sell, rent or sub-license material from Apna College Bihar</li>
              <li>Reproduce, duplicate or copy material from Apna College Bihar</li>
              <li>Redistribute content from Apna College Bihar</li>
            </ul>
          </div>

          <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-10 shadow-sm space-y-4">
            <div className="flex items-center gap-3 text-red-600">
              <AlertTriangle size={24} />
              <h2 className="text-lg font-[1000] uppercase tracking-tight text-slate-900">5. Content Liability</h2>
            </div>
            <p className="text-xs font-medium text-slate-700 leading-relaxed">
              We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.
            </p>
          </div>
        </div>

        {/* Footer info */}
        <div className="text-center pt-8 border-t border-slate-200 space-y-3">
          <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">BEU - APNA COLLEGE BIHAR</p>
          <p className="text-[9px] font-bold text-slate-500">By continuing to use ACB Hub, you acknowledge and accept these platform guidelines.</p>
        </div>
      </div>
    </div>
  );
}
