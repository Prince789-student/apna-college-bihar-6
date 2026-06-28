import React from 'react';
import { AlertTriangle, Globe, Info, ExternalLink } from 'lucide-react';

export default function BeuResult() {
  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-20 animate-in fade-in duration-300">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tight">BEU Exam Result</h1>
        <p className="text-[11px] text-slate-500 mt-1">Bihar Engineering University · Official Results Portal (Direct Access)</p>
      </div>

      <div className="space-y-4">
        {/* Info Box */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 flex flex-wrap items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-500/10 text-blue-600 rounded-xl flex items-center justify-center font-black text-xs border border-blue-500/20 shrink-0">
              <Globe size={20} />
            </div>
            <div>
              <p className="text-sm font-black text-slate-900 uppercase tracking-tight">Official BEU Portal</p>
              <p className="text-[11px] text-slate-500 font-medium">Neeche box mein apna details daalein. Aapka data directly BEU ko jata hai.</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => window.open('https://beu-bih.ac.in/result-one', '_blank')}
              className="flex items-center gap-1.5 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-[11px] font-black uppercase tracking-wider transition-all"
            >
              <ExternalLink size={14} /> Open in New Tab
            </button>
          </div>
        </div>


        {/* Official Portal Iframe */}
        <div className="bg-white rounded-[2rem] border border-slate-200 shadow-xl overflow-hidden relative" style={{ height: '700px' }}>
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-50 z-0 pointer-events-none">
            <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-3"></div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Connecting to BEU Patna Server...</p>
          </div>
          <iframe 
            src="https://beu-bih.ac.in/result-one" 
            title="BEU Official Results Portal"
            className="w-full h-full relative z-10 border-0 bg-white"
          />
        </div>

        {/* Pro Tip */}
        <div className="p-4 bg-blue-50 border border-blue-100 rounded-2xl flex items-start gap-3 text-blue-800 text-xs shadow-sm">
          <Info size={18} className="text-blue-600 shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <span className="font-black uppercase tracking-wide">👉 Kaise Check Karein:</span> Neeche list mein se pehle apna <span className="font-black text-blue-900">Exam / Semester select karein</span> (jaise "B.Tech 1st Semester..."). Uspe click karne ke baad Registration Number dalne ka option aayega!
          </div>
        </div>
      </div>

      {/* ── Educational SEO Content ── */}
      <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-200/50 mt-12 max-w-4xl mx-auto prose prose-slate max-w-none shadow-sm mb-12 relative z-20">
        <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter mb-4">How to Check BEU Semester Results?</h2>
        <p>
          Checking your semester results quickly and securely is important for every engineering student. We provide direct access to the official <strong>Bihar Engineering University (BEU) Result Portal</strong> right here, eliminating the need to navigate through multiple confusing university pages.
        </p>

        <h3 className="text-xl font-bold mt-8 mb-4">Step-by-Step Guide to Check Your BEU Result</h3>
        <ol>
          <li>Wait for the official notification from BEU that your semester results have been declared.</li>
          <li>In the portal window above, click on the dropdown menu and select your specific course and semester (e.g., <em>B.Tech 1st Semester Examination 2026</em>).</li>
          <li>Enter your official University Registration Number.</li>
          <li>Click the <strong>Show Result</strong> button. Your mark sheet will be generated instantly.</li>
        </ol>

        <h3 className="text-xl font-bold mt-8 mb-4">Understanding BEU Grading System (SGPA & CGPA)</h3>
        <p>
          BEU follows a choice-based credit system. Your result will display both an <strong>SGPA (Semester Grade Point Average)</strong> for the current semester and a <strong>CGPA (Cumulative Grade Point Average)</strong> for your overall performance. If you want to calculate your exact percentage from the CGPA, you can use our dedicated <a href="/beu-cgpa-calculator">BEU CGPA to Percentage Calculator</a>.
        </p>

        <h3 className="text-xl font-bold mt-8 mb-4">What to do in case of a Backlog or Pending Result?</h3>
        <p>
          If your result shows "Pending" or if you receive a backlog (fail) in any subject, do not panic. BEU conducts special scrutiny and supplementary exams. You can apply for re-evaluation (scrutiny) within the stipulated timeframe announced by the university. Always contact your college's examination controller for the exact dates and fee submission process.
        </p>
      </div>

    </div>
  );
}
