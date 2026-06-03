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

        {/* Security Warning */}
        <div className="p-4 bg-orange-50 border border-orange-200 rounded-2xl flex items-start gap-3">
          <AlertTriangle size={18} className="text-orange-500 shrink-0 mt-0.5" />
          <div className="leading-relaxed text-xs text-orange-800">
            <span className="font-black uppercase tracking-wide">Security Notice:</span> BEU University ne nayi security (Google ReCAPTCHA) lagayi hai taaki koi bot aapka result na dekh sake. Isliye hume directly official website hi embed karni padi hai. 
            <br/><br/>
            Apna Registration Number direct niche wale box me enter karke result dekhein!
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
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
          />
        </div>

        {/* Pro Tip */}
        <div className="p-4 bg-blue-50 border border-blue-100 rounded-2xl flex items-start gap-3 text-blue-800 text-xs shadow-sm">
          <Info size={18} className="text-blue-600 shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <span className="font-black uppercase tracking-wide">💡 Pro Tip for Students:</span> Select your course and semester from the list inside the portal above, enter your BEU Roll Number / Registration Number, and click <span className="font-black bg-blue-200/50 px-1.5 py-0.5 rounded">'Show Result'</span> to instantly view and download your marksheet PDF.
          </div>
        </div>
      </div>
    </div>
  );
}
