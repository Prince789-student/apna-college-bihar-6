import React, { useState } from 'react';
import { AlertTriangle, Search, X, Loader2, Globe, ExternalLink, GraduationCap, ChevronDown } from 'lucide-react';

const COURSES = ['B.Tech', 'B.Tech (Lateral Entry)', 'MBA', 'MCA', 'M.Tech', 'B.Pharma'];
const SEMESTERS = ['1st Semester', '2nd Semester', '3rd Semester', '4th Semester', '5th Semester', '6th Semester', '7th Semester', '8th Semester'];

export default function BeuResult() {
  const [regno, setRegno] = useState('');
  const [course, setCourse] = useState('B.Tech');
  const [semester, setSemester] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState('');

  const handleShowResult = () => {
    if (!regno.trim()) {
      setError('Registration Number dalna zaroori hai!');
      return;
    }
    if (!semester) {
      setError('Apna Semester select karein!');
      return;
    }
    setError('');
    setIsModalOpen(true);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-20 animate-in fade-in duration-300">
      
      {/* Header */}
      <div>
        <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tight">BEU Result Portal</h1>
        <p className="text-[11px] text-slate-500 mt-1">Apna College Bihar · Official Marks & CGPA System</p>
      </div>

      {/* Input Form Card */}
      <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm p-6 md:p-8 space-y-6 relative overflow-hidden">
        {/* BG Decoration */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-[100px] pointer-events-none" />
        
        <div className="flex items-center gap-4 mb-2">
          <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center font-black text-white shadow-lg shadow-blue-900/20">
            <GraduationCap size={24} />
          </div>
          <div>
            <p className="text-lg font-black text-slate-900 uppercase tracking-tight">Student Details</p>
            <p className="text-xs text-slate-500 font-medium">Result check karne ke liye apne details confirm karein</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          
          {/* Registration Number */}
          <div className="md:col-span-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2 block">Registration Number</label>
            <input
              type="text"
              placeholder="E.g. 21XXXXXXXX or REG/XXXX/XXXXX"
              value={regno}
              onChange={e => { setRegno(e.target.value); setError(''); }}
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 font-black uppercase text-sm outline-none focus:border-blue-500 focus:bg-white transition-all placeholder:normal-case placeholder:font-medium placeholder:text-slate-400 shadow-inner"
            />
          </div>

          {/* Course */}
          <div>
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2 block">Course</label>
            <div className="relative">
              <select
                value={course}
                onChange={e => setCourse(e.target.value)}
                className="w-full appearance-none bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 font-bold text-sm outline-none focus:border-blue-500 focus:bg-white transition-all shadow-inner"
              >
                {COURSES.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
              <ChevronDown size={16} className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            </div>
          </div>

          {/* Semester */}
          <div>
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2 block">Semester</label>
            <div className="relative">
              <select
                value={semester}
                onChange={e => { setSemester(e.target.value); setError(''); }}
                className="w-full appearance-none bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 font-bold text-sm outline-none focus:border-blue-500 focus:bg-white transition-all shadow-inner"
              >
                <option value="" disabled>Select Semester</option>
                {SEMESTERS.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
              <ChevronDown size={16} className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            </div>
          </div>

        </div>

        {error && (
          <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 text-red-600 rounded-xl text-xs font-bold animate-in zoom-in duration-200">
            <AlertTriangle size={14} /> {error}
          </div>
        )}

        <button
          onClick={handleShowResult}
          className="w-full mt-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl py-4 font-black text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-xl shadow-blue-900/20 active:scale-[0.98]"
        >
          <Search size={18} /> View Marksheet
        </button>
      </div>

      {/* Info Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
         <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex items-start gap-3">
          <Globe size={18} className="text-slate-400 shrink-0 mt-0.5" />
          <div className="leading-relaxed text-[11px] text-slate-600 font-medium">
            <span className="font-black text-slate-800 uppercase tracking-wide">Direct BEU Link: </span> 
            Aapka data directly Bihar Engineering University (BEU) servers se fetch kiya jata hai. 
          </div>
        </div>
        <div className="p-4 bg-orange-50 border border-orange-200 rounded-2xl flex items-start gap-3">
          <AlertTriangle size={18} className="text-orange-500 shrink-0 mt-0.5" />
          <div className="leading-relaxed text-[11px] text-orange-800 font-medium">
            <span className="font-black uppercase tracking-wide">Bot Protection Active: </span> 
            Google ReCAPTCHA ki vajah se aapko officially captcha tick karna hoga jab popup khulega.
          </div>
        </div>
      </div>

      {/* RESULT MODAL (Iframe Popup) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-4xl bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-300" style={{ height: '85vh' }}>
            
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 px-6 border-b border-slate-100 bg-slate-50">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-emerald-500/10 text-emerald-600 flex items-center justify-center rounded-lg">
                  <AlertTriangle size={16} />
                </div>
                <div>
                  <p className="text-xs font-black text-slate-900 uppercase tracking-tight">Security Check</p>
                  <p className="text-[10px] text-slate-500 font-bold hidden sm:block">Apna registration number aur captcha ek aakhri baar BEU portal me confirm karein</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => window.open('https://beu-bih.ac.in/result-one', '_blank')}
                  className="hidden sm:flex items-center gap-1 px-3 py-1.5 bg-white border border-slate-200 hover:bg-slate-100 text-slate-600 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all"
                >
                  <ExternalLink size={12} /> New Tab
                </button>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="w-8 h-8 flex items-center justify-center bg-white border border-slate-200 hover:bg-slate-100 text-slate-600 rounded-lg transition-all"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Modal Body / Iframe */}
            <div className="flex-1 relative bg-slate-100">
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <Loader2 size={32} className="text-blue-500 animate-spin mb-4" />
                <p className="text-[11px] font-black text-slate-500 uppercase tracking-widest">Loading Official Portal...</p>
                <p className="text-[9px] font-bold text-slate-400 mt-1">Please select "{course} {semester}" from the list inside.</p>
              </div>
              
              <iframe 
                src="https://beu-bih.ac.in/result-one" 
                title="BEU Official Results Portal"
                className="w-full h-full relative z-10 border-0 bg-white"
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
