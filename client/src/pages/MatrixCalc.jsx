import React, { useState } from 'react';
import { Home, Settings, ChevronUp, ChevronDown, ChevronLeft, ChevronRight, Menu } from 'lucide-react';

export default function MatrixCalc() {
  const [matrixA, setMatrixA] = useState(Array(16).fill(0));
  const [matrixB, setMatrixB] = useState(Array(16).fill(0));
  const [result, setResult] = useState(null);
  const [activeMatrix, setActiveMatrix] = useState('A');

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
  };

  const add = () => {
    const res = matrixA.map((v, i) => v + matrixB[i]);
    setResult(res);
  };

  const clear = () => {
    setMatrixA(Array(16).fill(0));
    setMatrixB(Array(16).fill(0));
    setResult(null);
  };

  return (
    <div className="flex justify-center items-center py-10 min-h-screen bg-slate-950">
      {/* Casio ClassWiz Shell */}
      <div className="w-[400px] bg-[#1a1a1a] p-5 rounded-[4rem] shadow-[0_45px_100px_rgba(0,0,0,1)] border-[8px] border-slate-900 border-b-[20px] relative">
        
        {/* Solar Panel & Logo Area */}
        <div className="flex justify-between items-center mb-6 px-4">
           <div className="flex flex-col">
             <span className="text-white font-bold text-xl tracking-widest">CASIO</span>
             <span className="text-slate-400 text-[10px] uppercase">fx-991CW</span>
           </div>
           <div className="w-16 h-8 bg-[#3d2621] rounded border border-slate-800 shadow-inner flex flex-col justify-center px-1 overflow-hidden opacity-80">
              <div className="w-full h-1 bg-white/10 my-0.5"></div>
              <div className="w-full h-1 bg-white/10 my-0.5"></div>
              <div className="w-full h-1 bg-white/10 my-0.5"></div>
           </div>
        </div>

        {/* High-Res Screen Area */}
        <div className="bg-[#c2d3c9] rounded-lg p-4 border-[10px] border-[#222] shadow-[inset_0_5px_15px_rgba(0,0,0,0.5)] mb-8 min-h-[160px] flex flex-col justify-between">
          <div className="flex justify-between items-center text-[#222]/50 text-[10px] font-bold border-b border-[#222]/20 pb-1">
            <span>{activeMatrix === 'A' ? 'MatA 4×4' : 'MatB 4×4'}</span>
            <div className="flex space-x-2">
              <span>MATRIX</span>
              <span>DEG</span>
            </div>
          </div>
          
          <div className="flex-grow flex items-center justify-center">
            {result ? (
              <div className="grid grid-cols-4 gap-1 w-full">
                {result.map((v, i) => (
                  <div key={i} className="text-[#111] font-mono text-center text-xs bg-black/5 p-1 rounded">
                    {v.toFixed(1)}
                  </div>
                ))}
              </div>
            ) : (
                <div className="text-center">
                   <p className="text-[#333] font-bold text-sm mb-2">{activeMatrix} Matrix Inputs</p>
                   <p className="text-[#333]/60 text-[10px]">Fill cells below</p>
                </div>
            )}
          </div>

          <div className="text-right text-[#111] text-[10px] font-bold tracking-tighter border-t border-[#222]/20 pt-1 uppercase">
            CLASSWIZ
          </div>
        </div>

        {/* Matrix Selection Tabs */}
        <div className="flex justify-center space-x-4 mb-4">
           <button onClick={() => { setActiveMatrix('A'); setResult(null); }} className={`px-4 py-1 rounded-full text-xs font-bold transition ${activeMatrix === 'A' ? 'bg-amber-500 text-black' : 'bg-slate-800 text-slate-400'}`}>Matrix A</button>
           <button onClick={() => { setActiveMatrix('B'); setResult(null); }} className={`px-4 py-1 rounded-full text-xs font-bold transition ${activeMatrix === 'B' ? 'bg-amber-500 text-black' : 'bg-slate-800 text-slate-400'}`}>Matrix B</button>
        </div>

        {/* Matrix Input Grid (Internal to Calculator) */}
        <div className="bg-slate-800 p-3 rounded-2xl mb-8 border border-slate-700">
           <div className="grid grid-cols-4 gap-1.5">
              {(activeMatrix === 'A' ? matrixA : matrixB).map((v, i) => (
                <input 
                  key={i}
                  type="number"
                  value={v === 0 ? '' : v}
                  onChange={(e) => updateCell(i, e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-md p-1.5 text-center text-white text-xs font-bold focus:border-amber-500 outline-none"
                  placeholder="0"
                />
              ))}
           </div>
        </div>

        {/* Navigation Section */}
        <div className="grid grid-cols-3 gap-2 mb-8 px-4">
           <div className="flex flex-col space-y-4">
              <button className="w-full py-2 bg-[#d4af37] text-black text-[10px] font-black rounded-full shadow-lg h-10 active:scale-95 transition">SHIFT</button>
              <button onClick={clear} className="w-full py-2 bg-slate-800 text-red-500 text-[10px] font-black rounded-full shadow-lg h-10 active:scale-95 transition">OFF</button>
           </div>
           
           <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-slate-800 rounded-full border-4 border-slate-700 relative shadow-2xl flex items-center justify-center">
                 <button className="absolute top-1 text-slate-500 hover:text-white"><ChevronUp size={16} /></button>
                 <button className="absolute bottom-1 text-slate-500 hover:text-white"><ChevronDown size={16} /></button>
                 <button className="absolute left-1 text-slate-500 hover:text-white"><ChevronLeft size={16} /></button>
                 <button className="absolute right-1 text-slate-500 hover:text-white"><ChevronRight size={16} /></button>
                 <button className="w-8 h-8 bg-slate-900 rounded-full text-slate-400 text-xs font-bold border border-slate-700 shadow-inner">OK</button>
              </div>
           </div>

           <div className="flex flex-col space-y-4 items-end">
              <button onClick={multiply} className="w-full py-2 bg-indigo-600 text-white text-[10px] font-black rounded-full shadow-lg h-10 active:scale-95 transition">AxB</button>
              <button onClick={add} className="w-full py-2 bg-indigo-600 text-white text-[10px] font-black rounded-full shadow-lg h-10 active:scale-95 transition">A+B</button>
           </div>
        </div>

        {/* Bottom Logo */}
        <div className="text-center py-4">
            <span className="text-slate-700 text-[10px] font-bold tracking-widest uppercase">Premium Education Bihar</span>
        </div>
      </div>
    </div>
  );
}
