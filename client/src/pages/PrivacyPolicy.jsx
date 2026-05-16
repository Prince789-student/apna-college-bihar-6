import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, Shield, Lock, Eye, FileText, Database } from 'lucide-react';

export default function PrivacyPolicy() {
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
          <div className="inline-flex p-4 bg-blue-600/10 border border-blue-500/20 text-blue-400 rounded-3xl shadow-2xl mb-2">
            <Shield size={36} />
          </div>
          <p className="text-[10px] font-black text-blue-400 uppercase tracking-[0.4em]">Apna College Bihar</p>
          <h1 className="text-3xl md:text-5xl font-[1000] text-white tracking-tighter uppercase leading-none">Privacy Policy</h1>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest max-w-lg mx-auto leading-relaxed pt-2">
            Effective Date: May 2026 • Official Study Engine & Exam Hub
          </p>
        </div>

        {/* Policy Cards */}
        <div className="space-y-6">
          <div className="bg-[#0d1526] border border-white/10 rounded-[2.5rem] p-8 md:p-10 shadow-2xl space-y-4">
            <div className="flex items-center gap-3 text-blue-400">
              <Database size={24} />
              <h2 className="text-lg font-[1000] uppercase tracking-tight text-white">1. Information We Collect</h2>
            </div>
            <p className="text-xs font-medium text-slate-300 leading-relaxed">
              When you register or interact with Apna College Bihar (ACB), we collect the minimal necessary information to provide a seamless academic experience:
            </p>
            <ul className="space-y-2 text-xs text-slate-400 pl-4 list-disc font-medium">
              <li><strong className="text-slate-200">Account Data:</strong> Email address, display name, and profile picture provided via Google Authentication (Firebase).</li>
              <li><strong className="text-slate-200">Academic & Study Data:</strong> Study timer durations, subjects selected, CGPA calculations, and task lists stored securely in Firestore.</li>
              <li><strong className="text-slate-200">Device & Usage Metrics:</strong> Basic crash reports and performance analytics to ensure stable app operations.</li>
            </ul>
          </div>

          <div className="bg-[#0d1526] border border-white/10 rounded-[2.5rem] p-8 md:p-10 shadow-2xl space-y-4">
            <div className="flex items-center gap-3 text-emerald-400">
              <Lock size={24} />
              <h2 className="text-lg font-[1000] uppercase tracking-tight text-white">2. How We Use Your Data</h2>
            </div>
            <p className="text-xs font-medium text-slate-300 leading-relaxed">
              Your data is strictly utilized for enhancing your educational workflow and maintaining platform integrity:
            </p>
            <ul className="space-y-2 text-xs text-slate-400 pl-4 list-disc font-medium">
              <li>To synchronize your study sessions, streak counts, and notes across web and mobile devices.</li>
              <li>To provide personalized UGEAC counselling predictions and BEU CGPA tracking.</li>
              <li>To ensure secure student authentication and prevent unauthorized access.</li>
            </ul>
          </div>

          <div className="bg-[#0d1526] border border-white/10 rounded-[2.5rem] p-8 md:p-10 shadow-2xl space-y-4">
            <div className="flex items-center gap-3 text-orange-400">
              <Eye size={24} />
              <h2 className="text-lg font-[1000] uppercase tracking-tight text-white">3. Data Sharing & Security</h2>
            </div>
            <p className="text-xs font-medium text-slate-300 leading-relaxed">
              We take your privacy seriously. Apna College Bihar does <strong className="text-slate-200">NOT</strong> sell, rent, or trade student personal information to any commercial third parties.
            </p>
            <p className="text-xs font-medium text-slate-400 leading-relaxed">
              All data is encrypted in transit and at rest using industry-standard Firebase Security infrastructure provided by Google Cloud.
            </p>
          </div>

          <div className="bg-[#0d1526] border border-white/10 rounded-[2.5rem] p-8 md:p-10 shadow-2xl space-y-4">
            <div className="flex items-center gap-3 text-rose-400">
              <FileText size={24} />
              <h2 className="text-lg font-[1000] uppercase tracking-tight text-white">4. Your Rights & Account Deletion</h2>
            </div>
            <p className="text-xs font-medium text-slate-300 leading-relaxed">
              In strict accordance with Google Play Data Safety guidelines, you have total ownership of your account and personal data.
            </p>
            <p className="text-xs font-medium text-slate-400 leading-relaxed">
              You can instantly delete your account, study history, and associated data at any time by visiting our dedicated <Link to="/delete-account" className="text-blue-400 underline hover:text-blue-300 font-bold">Account Deletion Portal</Link> or via the "My Profile" menu inside the mobile application.
            </p>
          </div>
        </div>

        {/* Footer info */}
        <div className="text-center pt-8 border-t border-white/10 space-y-3">
          <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">GEC SHEIKHPURA - APNA COLLEGE BIHAR</p>
          <p className="text-[9px] font-bold text-slate-600">For privacy inquiries or support, contact us via our official channels.</p>
        </div>
      </div>
    </div>
  );
}
