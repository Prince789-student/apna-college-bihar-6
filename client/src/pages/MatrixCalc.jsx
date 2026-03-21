import React, { useState } from 'react';
import { 
  Grid3X3, Layers, Settings, ChevronRight, 
  Trash2, Copy, Save, Table, Cpu, Zap, 
  RotateCcw, Info, Hash, Clock, Plus, Minus, X
} from 'lucide-react';
import { toast } from 'react-hot-toast';

export default function MatrixCalc() {
  const [matrixA, setMatrixA] = useState(Array(16).fill(0));
  const [matrixB, setMatrixB] = useState(Array(16).fill(0));
  const [result, setResult] = useState(null);
  const [activeMatrix, setActiveMatrix] = useState('A');
  const [op, setOp] = useState('');

  const updateCell = (idx, val) => {
    const newVal = parseFloat(val) || 0;
    if (activeMatrix === 'A') {
      const newM = [...matrixA];
      newM[idx] = newVal;
      setMatrixA(newM);
    } else {
      const newM = [...matrixB];
      newM[idx] = newVal;
      setMatrixB(newM);
    }
  };

  const multiply = () => {
    const res = Array(16).fill(0);
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        for (let k = 0; k < 4; k++) {
          res[i * 4 + j] += matrixA[i * 4 + k] * matrixB[k * 4 + j];
        }
      }
    }
    setResult(res);
    setOp('AxB');
    toast.success('Matrix Multiplication Complete');
  };

  const add = () => {
    const res = matrixA.map((v, i) => v + matrixB[i]);
    setResult(res);
    setOp('A+B');
    toast.success('Matrix Addition Complete');
  };

  const subtract = () => {
    const res = matrixA.map((v, i) => v - matrixB[i]);
    setResult(res);
    setOp('A-B');
    toast.success('Matrix Subtraction Complete');
  };

  const clear = () => {
    setMatrixA(Array(16).fill(0));
    setMatrixB(Array(16).fill(0));
    setResult(null);
    setOp('');
    toast.success('Matrices Purged');
  };

  return (
    <div className="max-w-7xl mx-auto space-y-12 animate-in fade-in duration-700 pb-20">
      
      {/* ─── HEADER ──────────────────────────────────────────────── */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-10">
         <div className="space-y-1.5">
            <h1 className="text-3xl md:text-5xl font-[1000] tracking-tighter uppercase text-white leading-none">
              Matrix <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-500 font-black">Laboratory</span>
            </h1>
            <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.4em]">Linear Algebra Engine / Multi-Vector Core v2.1</p>
         </div>
         <div className="flex bg-[#0d121f] p-1.5 rounded-3xl border border-slate-800">
            {['A','B'].map(m => (
               <button key={m} onClick={()=>setActiveMatrix(m)}
                 className={`px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${activeMatrix===m ? 'bg-orange-600 text-white shadow-xl shadow-orange-950/40' : 'text-slate-500 hover:text-white'}`}>
                  Buffer [{m}]
               </button>
            ))}
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
         
         {/* ─── INPUT PANEL ───────────────────────────────────────── */}
         <div className="lg:col-span-12 xl:col-span-8 space-y-8">
            <div className="bg-[#0d121f] rounded-[4rem] border border-slate-800/80 p-10 md:p-14 relative overflow-hidden shadow-2xl group">
               <div className="absolute top-0 right-0 w-80 h-80 bg-orange-600/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-orange-600/10 transition-all"></div>
               
               <div className="flex flex-col md:flex-row gap-14">
                  <div className="flex-1 space-y-8 text-center md:text-left">
                     <div>
                        <h2 className="text-2xl font-black text-white uppercase tracking-tighter leading-none">Active Vector Configuration</h2>
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-2">Buffer [{activeMatrix}] · 4×4 Normalized Grid</p>
                     </div>
                     
                     <div className="grid grid-cols-4 gap-3">
                        {(activeMatrix==='A'?matrixA:matrixB).map((v, i) => (
                           <input key={i} type="number" 
                             value={v} onFocus={e=>e.target.select()}
                             onChange={e => updateCell(i, e.target.value)}
                             className="w-full bg-[#1c263d] border-2 border-transparent focus:border-orange-500/50 rounded-2xl p-4 text-center text-sm font-black text-white outline-none transition-all shadow-xl" />
                        ))}
                     </div>
                  </div>

                  <div className="w-full md:w-48 flex flex-col gap-4">
                     <p className="text-[9px] font-black text-slate-600 uppercase tracking-widest text-center">Batch Operations</p>
                     <button onClick={add} className="w-full py-6 bg-[#02040a] border border-slate-800 hover:border-orange-500 text-slate-500 hover:text-white rounded-3xl transition-all shadow-xl group/btn flex flex-col items-center justify-center gap-2">
                        <Plus size={24} className="group-hover/btn:scale-110 transition-transform" />
                        <span className="text-[10px] font-black uppercase">Merge [A+B]</span>
                     </button>
                     <button onClick={subtract} className="w-full py-6 bg-[#02040a] border border-slate-800 hover:border-blue-500 text-slate-500 hover:text-white rounded-3xl transition-all shadow-xl group/btn flex flex-col items-center justify-center gap-2">
                        <Minus size={24} className="group-hover/btn:scale-110 transition-transform" />
                        <span className="text-[10px] font-black uppercase">Delta [A-B]</span>
                     </button>
                  </div>
               </div>

               <div className="mt-14 pt-10 border-t border-slate-800/50 flex flex-wrap gap-6">
                  <button onClick={multiply} className="px-12 py-6 bg-orange-600 hover:bg-orange-500 text-white rounded-3xl font-[1000] text-xs uppercase tracking-widest shadow-xl shadow-orange-950/40 active:scale-95 transition-all flex items-center gap-4">
                     <X size={18} /> Compute Vector Product [AxB]
                  </button>
                  <button onClick={clear} className="px-10 py-6 border border-red-500/20 hover:border-red-500 hover:bg-red-500/10 text-red-500/50 hover:text-red-500 rounded-3xl font-black text-[10px] uppercase tracking-widest transition-all">Emergency Purge</button>
               </div>
            </div>
         </div>

         {/* ─── RESULT PANEL ──────────────────────────────────────── */}
         <div className="lg:col-span-12 xl:col-span-4 space-y-8">
            <div className="bg-[#0d121f] rounded-[4.5rem] border border-slate-800/80 p-10 md:p-14 space-y-10 shadow-2xl relative overflow-hidden group min-h-full flex flex-col">
               <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-600/5 rounded-full blur-2xl"></div>
               
               <div className="flex items-center justify-between">
                  <h3 className="text-xl font-black text-white uppercase tracking-tighter">Computation Output</h3>
                  <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-600 transition-colors group-hover:text-emerald-500"><Cpu size={18}/></div>
               </div>

               <div className="flex-grow flex flex-col items-center justify-center">
                  {result ? (
                     <div className="space-y-8 w-full animate-in zoom-in-95 duration-500">
                        <div className="flex items-center justify-center gap-3">
                           <span className="px-4 py-1.5 bg-emerald-600/10 border border-emerald-500/20 text-emerald-400 text-[9px] font-black uppercase tracking-widest rounded-full">{op} Protocol</span>
                        </div>
                        <div className="grid grid-cols-4 gap-3 p-8 bg-black/40 rounded-[3rem] border border-slate-800 shadow-inner">
                           {result.map((v, i) => (
                              <div key={i} className="text-center">
                                 <p className="text-xs font-mono font-black text-white mb-0.5">{typeof v==='number'?v.toFixed(1):v}</p>
                                 <p className="text-[7px] text-slate-700 font-bold uppercase">{Math.floor(i/4)},{i%4}</p>
                              </div>
                           ))}
                        </div>
                        <button onClick={() => { navigator.clipboard.writeText(result.join(',')); toast.success('Vector Data Copied'); }} className="w-full py-4 text-slate-600 hover:text-white transition-colors text-[9px] font-black uppercase tracking-widest flex items-center justify-center gap-3">
                           <Save size={14} /> Commit Output to Memory
                        </button>
                     </div>
                  ) : (
                     <div className="text-center space-y-6 opacity-40 group-hover:opacity-60 transition-opacity py-20">
                        <div className="w-24 h-24 bg-slate-900 border border-slate-800 rounded-[3rem] flex items-center justify-center mx-auto text-slate-800"><Layers size={48} /></div>
                        <p className="text-[10px] font-black text-slate-700 uppercase tracking-[0.3em] leading-loose">Awaiting Vector Signal <br /> from Core Buffer</p>
                     </div>
                  )}
               </div>

               <div className="pt-8 border-t border-slate-800/50">
                  <div className="flex items-center justify-between text-[8px] font-black text-slate-600 uppercase tracking-widest px-4">
                     <span>Precision: IEEE 754</span>
                     <span>Status: Idle</span>
                  </div>
               </div>
            </div>
         </div>

      </div>
    </div>
  );
}
