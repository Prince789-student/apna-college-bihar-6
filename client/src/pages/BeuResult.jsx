import React, { useState, useRef } from 'react';
import { Search, AlertTriangle, CheckCircle, Loader2, ExternalLink, RefreshCw, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const COURSES = [
  'B.Tech', 'B.Tech (Lateral Entry)', 'MBA', 'MCA', 'M.Tech', 'B.Pharma', 'M.Pharma'
];

const API_BASE = import.meta.env.VITE_API_BASE || '';

export default function BeuResult() {
  const [regno, setRegno] = useState('');
  const [course, setCourse] = useState('B.Tech');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null); // { hasResult, hasError, html }
  const [error, setError] = useState('');
  const iframeRef = useRef(null);

  const fetchResult = async () => {
    if (!regno.trim()) {
      setError('Registration Number dalo pehle!');
      return;
    }
    setLoading(true);
    setError('');
    setResult(null);

    try {
      const res = await fetch(`${API_BASE}/api/beu-result/fetch`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ regno: regno.trim().toUpperCase(), course })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Server error');
      setResult(data);
    } catch (err) {
      setError(err.message || 'Result fetch karne mein error aaya. BEU server busy ho sakta hai.');
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e) => {
    if (e.key === 'Enter') fetchResult();
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-20 animate-in fade-in duration-300">

      {/* Header */}
      <div>
        <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tight">BEU Exam Result</h1>
        <p className="text-[11px] text-slate-500 mt-1">Bihar Engineering University · Apna Registration Number dalo aur result dekho</p>
      </div>

      {/* Input Card */}
      <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm p-6 space-y-5">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center font-black text-xs text-blue-600 border border-blue-500/20">BEU</div>
          <div>
            <p className="text-sm font-black text-slate-900 uppercase tracking-tight">Result Checker</p>
            <p className="text-[11px] text-slate-500">Apna BEU Registration Number enter karo</p>
          </div>
        </div>

        {/* Course Selector */}
        <div>
          <p className="text-[9px] font-black uppercase tracking-widest text-slate-500 mb-2">Course</p>
          <div className="flex flex-wrap gap-2">
            {COURSES.map(c => (
              <button
                key={c}
                onClick={() => setCourse(c)}
                className={`px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wide transition-all ${
                  course === c
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20'
                    : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Registration Number Input */}
        <div>
          <p className="text-[9px] font-black uppercase tracking-widest text-slate-500 mb-2">Registration Number</p>
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="e.g. 21XXXXXXXX or REG/XXXX/XXXXX"
              value={regno}
              onChange={e => { setRegno(e.target.value); setError(''); }}
              onKeyDown={handleKey}
              className="flex-1 bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 font-black uppercase text-sm outline-none focus:border-blue-500 focus:bg-white transition-all placeholder:normal-case placeholder:font-normal placeholder:text-slate-400"
              autoFocus
            />
            <button
              onClick={fetchResult}
              disabled={loading}
              className="px-6 py-4 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white rounded-2xl font-black text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg shadow-blue-900/20 active:scale-95"
            >
              {loading
                ? <><Loader2 size={16} className="animate-spin" /> Searching...</>
                : <><Search size={16} /> Get Result</>
              }
            </button>
          </div>
        </div>

        {/* Error */}
        {error && (
          <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-2xl">
            <AlertTriangle size={16} className="text-red-500 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-black text-red-700">{error}</p>
              <p className="text-[10px] text-red-500 mt-1">
                Agar problem continue kare to directly{' '}
                <a href="https://beu-bih.ac.in/result-one" target="_blank" rel="noreferrer" className="underline font-black">
                  BEU website
                </a>
                {' '}pe try karo.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Result Display */}
      {loading && (
        <div className="bg-white rounded-[2rem] border border-slate-200 p-16 flex flex-col items-center justify-center gap-4">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
          <div className="text-center">
            <p className="font-black text-slate-900 uppercase tracking-wide text-sm">BEU Server se Result fetch ho raha hai...</p>
            <p className="text-[11px] text-slate-500 mt-1">Registration: <span className="font-black text-blue-600">{regno.toUpperCase()}</span></p>
          </div>
        </div>
      )}

      {result && !loading && (
        <div className="space-y-4 animate-in fade-in duration-300">
          {/* Status Banner */}
          {result.hasError ? (
            <div className="flex items-center gap-3 p-4 bg-orange-50 border border-orange-200 rounded-2xl">
              <AlertTriangle size={18} className="text-orange-500 shrink-0" />
              <div>
                <p className="font-black text-orange-800 text-sm">Registration Number nahi mila!</p>
                <p className="text-[11px] text-orange-600">Sahi registration number check karo ya BEU website directly visit karo.</p>
              </div>
            </div>
          ) : result.hasResult ? (
            <div className="flex items-center gap-3 p-4 bg-emerald-50 border border-emerald-200 rounded-2xl">
              <CheckCircle size={18} className="text-emerald-500 shrink-0" />
              <div>
                <p className="font-black text-emerald-800 text-sm">Result Mila! ✅</p>
                <p className="text-[11px] text-emerald-600">Registration: <span className="font-black">{result.regno}</span></p>
              </div>
              <div className="ml-auto flex gap-2">
                <button
                  onClick={fetchResult}
                  className="p-2 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all"
                  title="Refresh"
                >
                  <RefreshCw size={14} className="text-slate-600" />
                </button>
                <a
                  href="https://beu-bih.ac.in/result-one"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all"
                  title="BEU Website"
                >
                  <ExternalLink size={14} className="text-slate-600" />
                </a>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-3 p-4 bg-blue-50 border border-blue-200 rounded-2xl">
              <AlertTriangle size={18} className="text-blue-500 shrink-0" />
              <p className="text-sm font-black text-blue-800">
                BEU ne kuch return kiya hai — neeche dekho. Result na mile to{' '}
                <a href="https://beu-bih.ac.in/result-one" target="_blank" rel="noreferrer" className="underline">
                  directly BEU website
                </a>{' '}try karo.
              </p>
            </div>
          )}

          {/* Result HTML Iframe */}
          <div className="bg-white rounded-[2rem] border border-slate-200 shadow-xl overflow-hidden relative" style={{ minHeight: '500px' }}>
            <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
              <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
            </div>
            <iframe
              ref={iframeRef}
              srcDoc={result.html}
              title="BEU Result"
              className="w-full relative z-10 border-0 bg-white"
              style={{ minHeight: '500px', height: '700px' }}
              sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
            />
          </div>

          {/* Try Again */}
          <button
            onClick={() => { setResult(null); setRegno(''); }}
            className="flex items-center gap-2 text-[11px] font-black text-slate-500 hover:text-slate-900 transition-colors uppercase tracking-widest"
          >
            <ArrowLeft size={12} /> Naya Registration Number Try Karo
          </button>
        </div>
      )}

      {/* Info Box */}
      {!result && !loading && (
        <div className="p-5 bg-blue-50 border border-blue-100 rounded-2xl">
          <p className="text-[10px] font-black uppercase tracking-widest text-blue-600 mb-2">💡 Kaise kaam karta hai?</p>
          <ul className="text-[11px] text-blue-800 space-y-1.5 list-disc list-inside font-medium">
            <li>Apna BEU Registration Number dalo (e.g. 21CE1001 ya REG/2021/XXXXX)</li>
            <li>Course select karo (B.Tech, MBA, etc.)</li>
            <li>"Get Result" button dabao</li>
            <li>Aapka result seedha yahan dikhai dega!</li>
          </ul>
        </div>
      )}
    </div>
  );
}
