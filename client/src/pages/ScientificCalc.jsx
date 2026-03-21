import React, { useState, useEffect, useCallback, useRef } from 'react';
import { 
  Calculator, History, Settings, ChevronRight, 
  Trash2, Copy, Save, Table, Cpu, Zap, 
  RotateCcw, Info, Hash, Clock
} from 'lucide-react';
import { toast } from 'react-hot-toast';

// ══ MATH ENGINE ══════════════════════════════════════════════
const factorial = (n) => {
  n = Math.round(Math.abs(n));
  if (n > 170) return Infinity;
  if (n <= 1) return 1;
  let r = 1; for (let i = 2; i <= n; i++) r *= i; return r;
};
const nPr = (n, r) => factorial(n) / factorial(n - r);
const nCr = (n, r) => factorial(n) / (factorial(r) * factorial(n - r));

const fmtNum = (n) => {
  if (typeof n !== 'number') return String(n);
  if (isNaN(n)) return 'Error';
  if (!isFinite(n)) return n > 0 ? 'Infinity' : '-Infinity';
  if (Number.isInteger(n) && Math.abs(n) < 1e12) return String(n);
  const abs = Math.abs(n);
  if (abs >= 1e10 || (abs < 1e-5 && abs > 0)) {
    const exp = Math.floor(Math.log10(abs));
    const mant = parseFloat((n / Math.pow(10, exp)).toPrecision(8));
    return `${mant}×10^${exp}`;
  }
  return String(parseFloat(n.toPrecision(10)));
};

const safeCalc = (expr, deg, ans, mem) => {
  if (!expr || !expr.trim()) return { val: '', num: null, err: false };
  try {
    const R = Math.PI / 180, D = 180 / Math.PI;
    let e = expr
      .replace(/×/g, '*').replace(/÷/g, '/').replace(/−/g, '-')
      .replace(/π/g, `(${Math.PI})`).replace(/Ans/g, `(${ans ?? 0})`)
      .replace(/\^/g, '**')
      .replace(/sin⁻¹\s*\(/g,'__AS(').replace(/cos⁻¹\s*\(/g,'__AC(').replace(/tan⁻¹\s*\(/g,'__AT(')
      .replace(/sinh\s*\(/g,'Math.sinh(').replace(/cosh\s*\(/g,'Math.cosh(').replace(/tanh\s*\(/g,'Math.tanh(')
      .replace(/sin\s*\(/g,'__S(').replace(/cos\s*\(/g,'__C(').replace(/tan\s*\(/g,'__T(')
      .replace(/log\s*\(/g,'Math.log10(').replace(/ln\s*\(/g,'Math.log(')
      .replace(/√\s*\(/g,'Math.sqrt(').replace(/∛\s*\(/g,'Math.cbrt(')
      .replace(/abs\s*\(/g,'Math.abs(').replace(/ceil\s*\(/g,'Math.ceil(')
      .replace(/floor\s*\(/g,'Math.floor(').replace(/round\s*\(/g,'Math.round(')
      .replace(/(\d+\.?\d*)!/g, (_, n) => `__F(${n})`)
      .replace(/(\d+)nPr(\d+)/gi, (_, n, r) => `__NPR(${n},${r})`)
      .replace(/(\d+)nCr(\d+)/gi, (_, n, r) => `__NCR(${n},${r})`)
      .replace(/\be\b/g, `(${Math.E})`)
      .replace(/\bA\b/g, `(${mem?.A??0})`).replace(/\bB\b/g, `(${mem?.B??0})`)
      .replace(/\bX\b/g, `(${mem?.X??0})`).replace(/\bM\b/g, `(${mem?.M??0})`)
      .replace(/(\d)(\()/g,'$1*$2').replace(/\)(\d)/g,')*$1').replace(/\)\(/g,')*(' );

    const __S = deg ? x => Math.sin(x*R) : Math.sin;
    const __C = deg ? x => Math.cos(x*R) : Math.cos;
    const __T = deg ? x => Math.tan(x*R) : Math.tan;
    const __AS = deg ? x => Math.asin(x)*D : Math.asin;
    const __AC = deg ? x => Math.acos(x)*D : Math.acos;
    const __AT = deg ? x => Math.atan(x)*D : Math.atan;
    const __F = factorial, __NPR = nPr, __NCR = nCr;
    
    // eslint-disable-next-line no-new-func
    const fn = new Function('__S','__C','__T','__AS','__AC','__AT','__F','__NPR','__NCR','Math',
      `"use strict"; return (${e});`);
    const num = fn(__S,__C,__T,__AS,__AC,__AT,__F,__NPR,__NCR,Math);
    if (num === undefined || num === null) return { val:'Error', num:null, err:true };
    return { val: fmtNum(num), num, err: false };
  } catch { return { val:'Syntax Error', num:null, err:true }; }
};

export default function ScientificCalc() {
  const [deg, setDeg] = useState(true);
  const [expr, setExpr] = useState('');
  const [ans, setAns] = useState(0);
  const [res, setRes] = useState('');
  const [mem] = useState({ A: 0, B: 0, X: 0, M: 0 });
  const [history, setHistory] = useState([]);

  const add = (v) => setExpr(p => p + v);
  
  const handleEqual = () => {
    const r = safeCalc(expr, deg, ans, mem);
    if (r.err) { toast.error(r.val); setRes(r.val); }
    else {
      setRes(r.val);
      setAns(r.num);
      setHistory(p => [{e:expr, v:r.val}, ...p].slice(0,20));
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-10 animate-in fade-in duration-700 pb-20 px-4 md:px-0">
      
      {/* ─── HEADER ──────────────────────────────────────────────── */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
         <div className="space-y-1.5 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-[1000] tracking-tighter uppercase text-white leading-none">
              Scientific <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 font-black">Processor</span>
            </h1>
            <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.4em]">Integrated Computation Hub / Engine v4.2</p>
         </div>
         <div className="bg-[#0d121f] p-4 rounded-3xl border border-slate-800 shadow-2xl flex items-center gap-4 group">
            <div className="p-3 bg-blue-600/10 text-blue-500 rounded-2xl group-hover:scale-110 transition-transform"><Cpu size={24}/></div>
            <div>
               <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest leading-none">Status</p>
               <p className="text-sm font-black text-white mt-1 uppercase">Ready for Sync</p>
            </div>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
         
         {/* ─── MAIN INTERFACE ───────────────────────────────────── */}
         <div className="lg:col-span-8 space-y-8 order-2 lg:order-1">
            <div className="bg-[#0d121f] rounded-[4rem] border border-slate-800/80 overflow-hidden shadow-2xl relative">
                  <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>
                  
                  {/* Display Section */}
                  <div className="p-10 md:p-14 bg-black/40 border-b border-slate-800/80 space-y-4">
                     <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                           <button className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest transition-all ${deg ? 'bg-blue-600/20 text-blue-400 border border-blue-500/20 shadow-lg' : 'bg-slate-900 text-slate-600 hover:text-white'}`} onClick={()=>setDeg(true)}>Deg</button>
                           <button className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest transition-all ${!deg ? 'bg-indigo-600/20 text-indigo-400 border border-indigo-500/20 shadow-lg' : 'bg-slate-900 text-slate-600 hover:text-white'}`} onClick={()=>setDeg(false)}>Rad</button>
                        </div>
                        <p className="text-[10px] text-slate-600 font-black uppercase tracking-[0.3em]">Module Active: Sci-Calc</p>
                     </div>
                     <div className="space-y-2 text-right">
                        <div className="h-10 text-slate-500 font-mono text-xl md:text-2xl overflow-x-auto whitespace-nowrap custom-scrollbar">{expr || '0'}</div>
                        <div className="h-20 text-white font-[1000] text-5xl md:text-7xl tracking-tighter overflow-x-auto whitespace-nowrap custom-scrollbar">{res || '0'}</div>
                     </div>
                  </div>

                  {/* Buttons Section */}
                  <div className="p-8 md:p-14 grid grid-cols-4 md:grid-cols-7 gap-3 md:gap-4 lg:gap-5">
                    {/* Science Ops */}
                    {[
                      { l: 'sin', v: 'sin(' }, { l: 'cos', v: 'cos(' }, { l: 'tan', v: 'tan(' },
                      { l: 'log', v: 'log(' }, { l: 'ln', v: 'ln(' }, { l: '√', v: '√(' }, { l: '^', v: '^' },
                      { l: '!', v: '!' }, { l: 'π', v: 'π' }, { l: 'e', v: 'e' },
                      { l: '(', v: '(' }, { l: ')', v: ')' }, { l: 'Ans', v: 'Ans' }, { l: ',', v: ',' }
                    ].map(b => (
                      <button key={b.l} onClick={()=>add(b.v)} className="p-4 md:p-5 bg-slate-900/50 hover:bg-slate-800 border border-slate-800/80 rounded-2xl text-[10px] md:text-xs font-black text-slate-400 transition-all active:scale-90">{b.l}</button>
                    ))}
                    
                    {[7,8,9,'÷', 4,5,6,'×', 1,2,3,'−', 0,'.','AC','+'].map(b => (
                      <button key={b} onClick={() => {
                        if(b==='AC') { setExpr(''); setRes(''); }
                        else if(typeof b==='number'||b==='.') add(String(b));
                        else add(b);
                      }} className={`p-5 md:p-6 rounded-[1.8rem] text-sm md:text-lg font-black transition-all active:scale-95 shadow-lg ${typeof b==='number' ? 'bg-[#1c263d] text-white hover:bg-[#253252] border border-blue-900/20' : b==='AC' ? 'bg-red-600/10 text-red-500 border border-red-500/20' : 'bg-blue-600/10 text-blue-400 border border-blue-500/20'}`}>{b}</button>
                    ))}
                    
                    <button onClick={handleEqual} className="col-span-2 md:col-span-3 p-6 bg-blue-600 hover:bg-blue-500 text-white rounded-[2rem] font-[1000] uppercase tracking-[0.3em] shadow-xl shadow-blue-900/40 active:scale-95 transition-all text-sm md:text-lg">=</button>
                    <button onClick={()=>setExpr(p=>p.slice(0,-1))} className="p-6 bg-slate-800 text-slate-300 rounded-[1.8rem] flex items-center justify-center hover:bg-slate-700 transition-all shadow-xl active:scale-95"><RotateCcw size={20}/></button>
                  </div>
               </div>
         </div>

         {/* ─── SIDEBAR / ANALYTICS ──────────────────────────────── */}
         <div className="lg:col-span-4 space-y-8 order-1 lg:order-2">
            <div className="p-10 bg-slate-900/40 backdrop-blur-md border border-slate-800/80 rounded-[3.5rem] space-y-8 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full blur-2xl"></div>
               <div className="flex items-center justify-between">
                  <h3 className="text-xl font-black text-white uppercase tracking-tighter">Stack History</h3>
                  <div className="p-2 bg-blue-600/10 text-blue-500 rounded-lg"><History size={18} /></div>
               </div>
               
               <div className="space-y-4 max-h-[400px] overflow-y-auto custom-scrollbar pr-2">
                 {history.length ? history.map((h, i) => (
                   <div key={i} className="group p-5 bg-[#02040a]/80 border border-slate-800 rounded-3xl hover:border-blue-500/30 transition-all cursor-pointer shadow-lg" onClick={()=>setExpr(h.e)}>
                      <p className="text-[10px] font-mono text-slate-500 uppercase tracking-tighter mb-1 truncate">{h.e}</p>
                      <p className="text-lg font-black text-white truncate group-hover:text-blue-400 transition-colors">{h.v}</p>
                   </div>
                 )) : (
                   <div className="py-20 text-center space-y-6">
                      <div className="w-16 h-16 bg-slate-900 border border-slate-800 rounded-3xl flex items-center justify-center mx-auto text-slate-800"><Clock size={32}/></div>
                      <p className="text-[10px] font-black text-slate-700 uppercase tracking-[0.3em] leading-loose">Computation Stack <br /> Empty</p>
                   </div>
                 )}
               </div>
               {history.length > 0 && <button onClick={()=>setHistory([])} className="w-full py-5 border border-red-500/10 hover:border-red-500/30 rounded-3xl font-black text-[9px] uppercase tracking-widest text-red-500/50 hover:text-red-500 transition-all">Flush History Buffer</button>}
            </div>

            <div className="p-10 bg-gradient-to-br from-indigo-900/10 to-blue-900/10 border border-indigo-500/20 rounded-[3rem] space-y-6 relative overflow-hidden group shadow-2xl">
               <div className="relative z-10 space-y-4">
                  <div className="p-4 bg-indigo-600/20 text-indigo-400 rounded-2xl inline-block group-hover:scale-110 transition-transform shadow-lg"><Zap size={24}/></div>
                  <h4 className="text-2xl font-black text-white uppercase tracking-tight">Constants Hub</h4>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.3em] leading-relaxed">BEU verified physical & atomic values</p>
                  <div className="grid grid-cols-2 gap-3 pt-4">
                     {['Grav G','Avog NA','Speed c','Elect e'].map(c => (
                        <button key={c} className="p-4 bg-indigo-900/20 border border-indigo-500/10 rounded-2xl text-[8px] font-black text-indigo-400 uppercase tracking-widest hover:border-indigo-500/40 hover:bg-indigo-900/40 transition-all">{c}</button>
                     ))}
                  </div>
               </div>
               <div className="absolute top-[-20%] right-[-20%] w-32 h-32 bg-indigo-500/15 rounded-full blur-3xl"></div>
            </div>
         </div>
      </div>
    </div>
  );
}
