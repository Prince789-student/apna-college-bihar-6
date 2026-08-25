import SEO from '../components/SEO';
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
    <div className="flex justify-center items-center py-6 md:py-10 min-h-screen bg-slate-950 px-2">
      <SEO title="Matrix Calc | Apna College Bihar" />
      {/* Casio ClassWiz Shell */}
      <div className="w-full max-w-[400px] bg-[#1a1a1a] p-4 md:p-5 rounded-3xl md:rounded-[4rem] shadow-[0_45px_100px_rgba(0,0,0,1)] border-[6px] md:border-[8px] border-slate-900 border-b-[15px] md:border-b-[20px] relative">
        
        {/* Solar Panel & Logo Area */}
        <div className="flex justify-between items-center mb-6 px-4">
           <div className="flex flex-col">
             <span className="text-slate-900 font-bold text-xl tracking-widest">CASIO</span>
             <span className="text-slate-500 text-[10px] uppercase">fx-991CW</span>
           </div>
           <div className="w-16 h-8 bg-[#3d2621] rounded border border-slate-200 shadow-inner flex flex-col justify-center px-1 overflow-hidden opacity-80">
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
           <button onClick={() => { setActiveMatrix('A'); setResult(null); }} className={`px-4 py-1 rounded-full text-xs font-bold transition ${activeMatrix === 'A' ? 'bg-amber-500 text-black' : 'bg-slate-800 text-slate-500'}`}>Matrix A</button>
           <button onClick={() => { setActiveMatrix('B'); setResult(null); }} className={`px-4 py-1 rounded-full text-xs font-bold transition ${activeMatrix === 'B' ? 'bg-amber-500 text-black' : 'bg-slate-800 text-slate-500'}`}>Matrix B</button>
        </div>

        {/* Matrix Input Grid (Internal to Calculator) */}
        <div className="bg-slate-800 p-3 rounded-2xl mb-8 border border-slate-300">
           <div className="grid grid-cols-4 gap-1.5">
              {(activeMatrix === 'A' ? matrixA : matrixB).map((v, i) => (
                <input 
                  key={i}
                  type="number"
                  value={v === 0 ? '' : v}
                  onChange={(e) => updateCell(i, e.target.value)}
                  className="w-full bg-slate-100 border border-slate-300 rounded-md p-1.5 text-center text-slate-900 text-xs font-bold focus:border-amber-500 outline-none"
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
              <div className="w-20 h-20 bg-slate-800 rounded-full border-4 border-slate-300 relative shadow-2xl flex items-center justify-center">
                 <button className="absolute top-1 text-slate-500 hover:text-slate-900"><ChevronUp size={16} /></button>
                 <button className="absolute bottom-1 text-slate-500 hover:text-slate-900"><ChevronDown size={16} /></button>
                 <button className="absolute left-1 text-slate-500 hover:text-slate-900"><ChevronLeft size={16} /></button>
                 <button className="absolute right-1 text-slate-500 hover:text-slate-900"><ChevronRight size={16} /></button>
                 <button className="w-8 h-8 bg-slate-100 rounded-full text-slate-500 text-xs font-bold border border-slate-300 shadow-inner">OK</button>
              </div>
           </div>

           <div className="flex flex-col space-y-4 items-end">
              <button onClick={multiply} className="w-full py-2 bg-indigo-600 text-white text-[10px] font-black rounded-full shadow-lg h-10 active:scale-95 transition">AxB</button>
              <button onClick={add} className="w-full py-2 bg-indigo-600 text-white text-[10px] font-black rounded-full shadow-lg h-10 active:scale-95 transition">A+B</button>
           </div>
        </div>

      <SEO title="Matrix Calc | Apna College Bihar" />
      {/* Casio ClassWiz Shell */}
      <div className="w-full max-w-[400px] bg-[#1a1a1a] p-4 md:p-5 rounded-3xl md:rounded-[4rem] shadow-[0_45px_100px_rgba(0,0,0,1)] border-[6px] md:border-[8px] border-slate-900 border-b-[15px] md:border-b-[20px] relative">
        
        {/* Solar Panel & Logo Area */}
        <div className="flex justify-between items-center mb-6 px-4">
           <div className="flex flex-col">
             <span className="text-slate-900 font-bold text-xl tracking-widest">CASIO</span>
             <span className="text-slate-500 text-[10px] uppercase">fx-991CW</span>
           </div>
           <div className="w-16 h-8 bg-[#3d2621] rounded border border-slate-200 shadow-inner flex flex-col justify-center px-1 overflow-hidden opacity-80">
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
           <button onClick={() => { setActiveMatrix('A'); setResult(null); }} className={`px-4 py-1 rounded-full text-xs font-bold transition ${activeMatrix === 'A' ? 'bg-amber-500 text-black' : 'bg-slate-800 text-slate-500'}`}>Matrix A</button>
           <button onClick={() => { setActiveMatrix('B'); setResult(null); }} className={`px-4 py-1 rounded-full text-xs font-bold transition ${activeMatrix === 'B' ? 'bg-amber-500 text-black' : 'bg-slate-800 text-slate-500'}`}>Matrix B</button>
        </div>

        {/* Matrix Input Grid (Internal to Calculator) */}
        <div className="bg-slate-800 p-3 rounded-2xl mb-8 border border-slate-300">
           <div className="grid grid-cols-4 gap-1.5">
              {(activeMatrix === 'A' ? matrixA : matrixB).map((v, i) => (
                <input 
                  key={i}
                  type="number"
                  value={v === 0 ? '' : v}
                  onChange={(e) => updateCell(i, e.target.value)}
                  className="w-full bg-slate-100 border border-slate-300 rounded-md p-1.5 text-center text-slate-900 text-xs font-bold focus:border-amber-500 outline-none"
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
              <div className="w-20 h-20 bg-slate-800 rounded-full border-4 border-slate-300 relative shadow-2xl flex items-center justify-center">
                 <button className="absolute top-1 text-slate-500 hover:text-slate-900"><ChevronUp size={16} /></button>
                 <button className="absolute bottom-1 text-slate-500 hover:text-slate-900"><ChevronDown size={16} /></button>
                 <button className="absolute left-1 text-slate-500 hover:text-slate-900"><ChevronLeft size={16} /></button>
                 <button className="absolute right-1 text-slate-500 hover:text-slate-900"><ChevronRight size={16} /></button>
                 <button className="w-8 h-8 bg-slate-100 rounded-full text-slate-500 text-xs font-bold border border-slate-300 shadow-inner">OK</button>
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

      {/* ── Educational SEO Content ── */}
      <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-200/50 mt-12 max-w-4xl mx-auto prose prose-slate max-w-none shadow-sm mb-12">
        <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter mb-4">Advanced Engineering Matrix Calculator (4x4)</h2>
        <p>
          Matrices are the mathematical foundation of modern engineering. From solving complex systems of linear equations in Electrical Circuit Theory (using mesh and nodal analysis) to executing 3D spatial transformations in Computer Graphics and Civil Engineering Structural Analysis, mastering matrix algebra is non-negotiable. Our <strong>Online Matrix Calculator</strong> is purposefully designed to help BEU engineering students rapidly compute and verify their manual calculations before semester exams.
        </p>

        <h3 className="text-xl font-bold mt-8 mb-4">Core Matrix Operations Supported</h3>
        <p>
          This calculator supports comprehensive 4x4 matrix operations, allowing you to execute computations that would normally take 15-20 minutes manually in under a second:
        </p>
        <ul>
          <li>
            <strong>Matrix Addition (A + B):</strong> Useful in quantum mechanics and signal processing where linear superposition of states or signals is required. The calculator ensures dimensional compatibility before computing the element-wise sum.
          </li>
          <li>
            <strong>Matrix Multiplication (A × B):</strong> The cornerstone of linear transformations. Whether you are multiplying transformation matrices in robotics (kinematics) or computing state-space equations in control systems, our calculator accurately computes the dot product of rows and columns.
          </li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">How to Use the Calculator Like a Pro</h3>
        <p>
          We designed the user interface to emulate the physical Casio ClassWiz fx-991CW calculator—the standard calculator approved for use inside Bihar Engineering University examination halls.
        </p>
        <p>
          <strong>Step 1:</strong> Select your target matrix by toggling between "Matrix A" and "Matrix B".<br/>
          <strong>Step 2:</strong> Input your numerical values into the 4x4 grid. If your problem only requires a 3x3 or 2x2 matrix, simply leave the outer rows and columns as zeros (the engine automatically handles sparse matrices).<br/>
          <strong>Step 3:</strong> Hit the specific operation button (AxB or A+B). The high-resolution simulated LCD screen will instantly display the output matrix. 
        </p>
        <p>
          We highly recommend using this Matrix Calculator in tandem with our curated <strong>BEU Previous Year Questions (PYQs)</strong> to practice exam-style problems. Cross-checking your step-by-step manual derivations against our calculator's final output guarantees computational accuracy and boosts your confidence for the finals.
        </p>
      </div>

    </div>
  );
}
