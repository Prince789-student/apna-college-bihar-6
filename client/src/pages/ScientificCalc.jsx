import React, { useState, useEffect, useCallback } from 'react';
import { Clock } from 'lucide-react';

// ══ MATH ENGINE ══════════════════════════════════════════════
function factorial(n) {
  n = Math.round(Math.abs(n));
  if (n > 170) return Infinity;
  if (n <= 1) return 1;
  let r = 1; for (let i = 2; i <= n; i++) r *= i; return r;
}
function nPr(n, r) { return factorial(n) / factorial(n - r); }
function nCr(n, r) { return factorial(n) / (factorial(r) * factorial(n - r)); }

function fmtNum(n) {
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
}

function safeCalc(expr, deg, ans, mem) {
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

    const __S  = deg ? x => Math.sin(x*R)  : Math.sin;
    const __C  = deg ? x => Math.cos(x*R)  : Math.cos;
    const __T  = deg ? x => Math.tan(x*R)  : Math.tan;
    const __AS = deg ? x => Math.asin(x)*D : Math.asin;
    const __AC = deg ? x => Math.acos(x)*D : Math.acos;
    const __AT = deg ? x => Math.atan(x)*D : Math.atan;
    const __F  = factorial, __NPR = nPr, __NCR = nCr;
    // eslint-disable-next-line no-new-func
    const fn = new Function('__S','__C','__T','__AS','__AC','__AT','__F','__NPR','__NCR','Math',
      `"use strict"; return (${e});`);
    const num = fn(__S,__C,__T,__AS,__AC,__AT,__F,__NPR,__NCR,Math);
    if (num === undefined || num === null) return { val:'Error', num:null, err:true };
    return { val: fmtNum(num), num, err: false };
  } catch { return { val:'Syntax Error', num:null, err:true }; }
}

// ══ MATRIX ══════════════════════════════════════════════════
const initMat = (r,c) => Array.from({length:r}, () => Array(c).fill(0));
const matAdd  = (A,B) => A.map((r,i)=>r.map((v,j)=>v+B[i][j]));
const matSub  = (A,B) => A.map((r,i)=>r.map((v,j)=>v-B[i][j]));
const matMul  = (A,B) => A.map((_,i)=>B[0].map((_,j)=>A[i].reduce((s,_,k)=>s+A[i][k]*B[k][j],0)));
const matTr   = m => m[0].map((_,j)=>m.map(r=>r[j]));
function matDet(m) {
  const n = m.length;
  if (n===1) return m[0][0];
  if (n===2) return m[0][0]*m[1][1] - m[0][1]*m[1][0];
  let det=0;
  for (let j=0;j<n;j++) {
    const sub=m.slice(1).map(r=>r.filter((_,c)=>c!==j));
    det += (j%2===0?1:-1)*m[0][j]*matDet(sub);
  }
  return det;
}
function matInv(m) {
  const n=m.length;
  let aug=m.map((r,i)=>[...r.map(Number),...Array.from({length:n},(_,j)=>i===j?1:0)]);
  for (let col=0;col<n;col++) {
    let pivRow=-1;
    for (let row=col;row<n;row++) { if(Math.abs(aug[row][col])>1e-10){pivRow=row;break;} }
    if (pivRow===-1) return null;
    [aug[col],aug[pivRow]]=[aug[pivRow],aug[col]];
    const piv=aug[col][col];
    aug[col]=aug[col].map(v=>v/piv);
    for (let row=0;row<n;row++) {
      if(row===col) continue;
      const f=aug[row][col];
      aug[row]=aug[row].map((v,c)=>v-f*aug[col][c]);
    }
  }
  return aug.map(r=>r.slice(n));
}

// ══ POLYNOMIAL SOLVER (Durand-Kerner) ═══════════════════════
function solvePolynomial(coeffArr) {
  let c=[...coeffArr];
  while(c.length>1 && Math.abs(c[0])<1e-12) c.shift();
  const n=c.length-1;
  if(n===0) return [];
  const lead=c[0];
  const p=c.map(v=>v/lead);
  const cadd=(a,b)=>({re:a.re+b.re,im:a.im+b.im});
  const csub=(a,b)=>({re:a.re-b.re,im:a.im-b.im});
  const cmul=(a,b)=>({re:a.re*b.re-a.im*b.im,im:a.re*b.im+a.im*b.re});
  const cdiv=(a,b)=>{const d=b.re*b.re+b.im*b.im;return{re:(a.re*b.re+a.im*b.im)/d,im:(a.im*b.re-a.re*b.im)/d};};
  const cmag=a=>Math.sqrt(a.re*a.re+a.im*a.im);
  const evalP=z=>p.reduce((acc,coef)=>cadd(cmul(acc,z),{re:coef,im:0}),{re:0,im:0});
  const R=1+Math.max(...p.slice(1).map(v=>Math.abs(v)));
  let roots=Array.from({length:n},(_,k)=>({re:R*Math.cos(2*Math.PI*k/n+0.1),im:R*Math.sin(2*Math.PI*k/n+0.1)}));
  for(let iter=0;iter<1000;iter++){
    let maxD=0;
    const nr=roots.map((r,i)=>{
      const pz=evalP(r);
      let den={re:1,im:0};
      for(let j=0;j<n;j++){if(j!==i)den=cmul(den,csub(r,roots[j]));}
      const delta=cdiv(pz,den);
      maxD=Math.max(maxD,cmag(delta));
      return csub(r,delta);
    });
    roots=nr;
    if(maxD<1e-12) break;
  }
  return roots;
}
function formatRoot(root) {
  const EPS=1e-7;
  const re=Math.abs(root.re)<EPS?0:root.re;
  const im=Math.abs(root.im)<EPS?0:root.im;
  if(im===0) return {display:fmtNum(re),isReal:true};
  const sign=im<0?' − ':' + ';
  return {display:`${fmtNum(re)}${sign}${fmtNum(Math.abs(im))}i`,isReal:false};
}

// ══ STATISTICS ════════════════════════════════════════════════
function calcStats(nums) {
  const n=nums.length; if(!n) return null;
  const sum=nums.reduce((a,b)=>a+b,0),mean=sum/n;
  const s=[...nums].sort((a,b)=>a-b);
  const median=n%2?s[~~(n/2)]:(s[n/2-1]+s[n/2])/2;
  const variance=nums.reduce((a,x)=>a+(x-mean)**2,0)/n;
  return {n,sum,mean,median,min:s[0],max:s[n-1],stdDev:Math.sqrt(variance),variance};
}

// ══ COMPONENT ═════════════════════════════════════════════════
const MODES=['CALC','EQN','STATS','MATRIX'];
const COEFF_LABELS=['a','b','c','d','e','f','g'];
const SUPS=['','','²','³','⁴','⁵','⁶'];

export default function ScientificCalc() {
  // CALC
  const [mode,setMode]   = useState('CALC');
  const [expr,setExpr]   = useState('');
  const [result,setResult] = useState('');
  const [isShift,setIsShift] = useState(false);
  const [isDeg,setIsDeg] = useState(true);
  const [lastAns,setLastAns] = useState(0);
  const [history,setHistory] = useState([]);
  const [showHist,setShowHist] = useState(false);
  const [mem,setMem]     = useState({A:0,B:0,X:0,M:0});
  const [hasErr,setHasErr] = useState(false);
  // EQN
  const [eqDeg,setEqDeg]=useState(2);
  const [eqCoeffs,setEqCoeffs]=useState(Array(3).fill(''));
  const [roots,setRoots]=useState(null);
  // STATS
  const [statIn,setStatIn]=useState('');
  const [statRes,setStatRes]=useState(null);
  // MATRIX (Fully Dynamic M x N)
  const [rowsA, setRowsA] = useState(3);
  const [colsA, setColsA] = useState(3);
  const [rowsB, setRowsB] = useState(3);
  const [colsB, setColsB] = useState(3);
  const [mA, setMA] = useState(Array(9).fill(0));
  const [mB, setMB] = useState(Array(9).fill(0));
  const [mRes, setMRes] = useState(null);
  const [resDim, setResDim] = useState({r:3, c:3});
  const [activeM, setActiveM] = useState('A');

  const updateCell = (idx, val) => {
    const v = parseFloat(val) || 0;
    if (activeM === 'A') { const n = [...mA]; n[idx] = v; setMA(n); }
    else { const n = [...mB]; n[idx] = v; setMB(n); }
  };

  const to2D = (arr, r, c) => {
    const res = []; 
    for(let i=0; i<r; i++) res.push(arr.slice(i*c, (i+1)*c)); 
    return res;
  };
  const from2D = (arr) => arr.flat();

  const matOp = (type) => {
    // Defensive check for dimensions and arrays
    const rA = parseInt(rowsA) || 1;
    const cA = parseInt(colsA) || 1;
    const rB = parseInt(rowsB) || 1;
    const cB = parseInt(colsB) || 1;
    
    // Ensure arrays are exactly the right size before processing
    const currentA = (mA.length === rA * cA) ? mA : Array(rA * cA).fill(0);
    const currentB = (mB.length === rB * cB) ? mB : Array(rB * cB).fill(0);

    const A = to2D(currentA, rA, cA);
    const B = to2D(currentB, rB, cB);
    let res = null;

    try {
      if (type === 'add' || type === 'sub') {
        if(rA !== rB || cA !== cB) throw new Error('Size Mismatch!');
        res = (type === 'add') ? matAdd(A, B) : matSub(A, B); 
        setResDim({r: rA, c: cA});
      }
      else if (type === 'mul') {
        if(cA !== rB) throw new Error('Incompatible for Mul!');
        res = matMul(A, B); 
        setResDim({r: rA, c: cB});
      }
      else if (type === 'tr') {
        res = matTr(A); 
        setResDim({r: cA, c: rA});
      }
      else if (type === 'det') {
        if(rA !== cA) throw new Error('Not square!');
        setMRes(matDet(A)); 
        return;
      }
      else if (type === 'inv') {
        if(rA !== cA) throw new Error('Not square!');
        const inv = matInv(A);
        if(!inv) throw new Error('Singular Matrix (Det=0)!');
        res = inv; 
        setResDim({r: rA, c: cA});
      }
      setMRes(res ? res.flat() : null);
    } catch(e) { 
      alert(e.message); 
      setMRes(null); 
    }
  };

  // Reset matrix results when mode changes to prevent zombie states
  useEffect(() => {
    setMRes(null);
  }, [mode, rowsA, colsA, rowsB, colsB]);

  // Live eval
  useEffect(()=>{
    if(!expr){setResult('');setHasErr(false);return;}
    const {val,err}=safeCalc(expr,isDeg,lastAns,mem);
    setResult(val);setHasErr(err);
  },[expr,isDeg,lastAns,mem]);

  // Keyboard
  useEffect(()=>{
    if(mode!=='CALC') return;
    const h=e=>{
      if(e.key==='Enter'){equal();return;}
      if(e.key==='Escape'){setExpr('');setResult('');}
      if(e.key==='Backspace'){setExpr(p=>p.slice(0,-1));}
      if(/^[0-9+\-*/.()%]$/.test(e.key)) app(e.key==='*'?'×':e.key==='/'?'÷':e.key);
    };
    window.addEventListener('keydown',h);
    return ()=>window.removeEventListener('keydown',h);
  },[mode,expr,isDeg,lastAns,mem]);

  const app=useCallback(v=>{setExpr(p=>p+v);setIsShift(false);},[]);
  const del=()=>setExpr(p=>p.slice(0,-1));
  const ac=()=>{setExpr('');setResult('');setHasErr(false);};

  const equal=useCallback(()=>{
    if(!expr) return;
    const {val,num,err}=safeCalc(expr,isDeg,lastAns,mem);
    if(!err&&num!==null){setLastAns(num);setHistory(h=>[{expr,result:val},...h].slice(0,20));}
    setResult(val);setHasErr(err);
    if(!err) setExpr(val);
  },[expr,isDeg,lastAns,mem]);

  // CALC buttons
  const ROWS=[
    [['x⁻¹','RAND','^(-1)','rand','rand'],['x²','√','^2','√('],['x^y','∛','^','∛('],['log','10^(','log(','10^('],['ln','eˣ','ln(','e^(']],
    [['sin','sin⁻¹','sin(','sin⁻¹('],['cos','cos⁻¹','cos(','cos⁻¹('],['tan','tan⁻¹','tan(','tan⁻¹('],['π','e','π','e'],['n!','abs','!','abs(']],
    [['(',null,'('],[')',null,')'],['%',null,'%'],['EXP','nPr','×10^(','nPr'],['nCr',null,'nCr']],
    [['7',null,'7'],['8',null,'8'],['9',null,'9'],['DEL',null,null,null,'del'],['AC',null,null,null,'ac']],
    [['4',null,'4'],['5',null,'5'],['6',null,'6'],['×',null,'×'],['÷',null,'÷']],
    [['1',null,'1'],['2',null,'2'],['3',null,'3'],['+',null,'+'],['-',null,'−']],
    [['0',null,'0'],['.',null,'.'],['Ans',null,'Ans'],['M+',null,null,null,'m+'],['=',null,null,null,'eq']],
  ];

  const pressBtn=([label,sl,val,sv,sp])=>{
    if(sp==='del'){del();return;}
    if(sp==='ac'){ac();return;}
    if(sp==='eq'){equal();return;}
    if(sp==='m+'||sp==='rand'&&sl==='RAND'){const{num}=safeCalc(expr,isDeg,lastAns,mem);if(num!==null)setMem(m=>({...m,M:m.M+num}));return;}
    if(sp==='rand'){app(String(Math.random().toFixed(8)));return;}
    const ins=isShift&&sv?sv:val;
    if(ins) app(ins);
  };
  const btnColor=([label,sl,val,sv,sp])=>{
    if(sp==='eq') return 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-900/30 shadow-lg';
    if(sp==='ac') return 'bg-red-600/80 hover:bg-red-600 text-white';
    if(sp==='del') return 'bg-orange-600/80 hover:bg-orange-600 text-white';
    if(['×','÷','+'].includes(label)||label==='-') return 'bg-slate-600 hover:bg-slate-500 text-white';
    if(!isNaN(label)||label==='.') return 'bg-slate-700 hover:bg-slate-600 text-white';
    return 'bg-slate-800 hover:bg-slate-700 text-slate-200';
  };

  // EQN
  const changeDeg=d=>{setEqDeg(d);setEqCoeffs(Array(d+1).fill(''));setRoots(null);};
  const solveEqn=()=>{
    const nums=eqCoeffs.map(Number);
    if(Math.abs(nums[0])<1e-14){setRoots([{display:'a ≠ 0 hona chahiye',isReal:false}]);return;}
    setRoots(solvePolynomial(nums).map(formatRoot));
  };
  const eqnExpression=eqCoeffs.map((c,i)=>{
    const deg=eqDeg-i,lbl=COEFF_LABELS[i];
    if(deg===0) return `(${c||lbl})`;
    if(deg===1) return `(${c||lbl})x`;
    return `(${c||lbl})x${SUPS[deg]}`;
  }).join(' + ')+' = 0';

  // STATS
  const computeStats=()=>{
    const nums=statIn.split(/[,\s]+/).map(Number).filter(n=>!isNaN(n));
    setStatRes(calcStats(nums));
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-2 md:px-4 pb-20">
      <div className="bg-[#0a0a0f] rounded-3xl md:rounded-[2.5rem] border border-slate-800 shadow-2xl overflow-hidden">

        {/* Top bar */}
        <div className="flex items-center justify-between px-5 pt-5 pb-3">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Casio fx-991</span>
            <span className="text-[9px] px-2 py-0.5 bg-blue-600/20 text-blue-400 rounded-full font-bold">{isDeg?'DEG':'RAD'}</span>
            {mem.M!==0&&<span className="text-[9px] px-2 py-0.5 bg-amber-600/20 text-amber-400 rounded-full font-bold">M={fmtNum(mem.M)}</span>}
          </div>
          <button onClick={()=>setShowHist(!showHist)} className="p-2 text-slate-500 hover:text-white transition-colors"><Clock size={16}/></button>
        </div>

        {/* Mode tabs */}
        <div className="flex gap-1 mx-4 mb-1">
          {MODES.map(m=>(
            <button key={m} onClick={()=>{setMode(m);ac();}}
              className={`flex-1 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${mode===m?'bg-slate-700 text-white':'text-slate-600 hover:text-slate-400'}`}>
              {m}
            </button>
          ))}
        </div>

        {/* Display */}
        <div className="mx-4 mb-3 bg-[#0d1117] rounded-2xl border border-slate-800 p-4 min-h-[90px] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 to-transparent pointer-events-none"/>
          {showHist ? (
            <div className="space-y-1 max-h-[80px] overflow-y-auto">
              {history.length===0?<p className="text-slate-600 text-xs">No history yet</p>:
                history.map((h,i)=>(
                  <button key={i} onClick={()=>{setExpr(h.result);setShowHist(false);}}
                    className="w-full text-left text-[10px] hover:bg-slate-800 rounded px-1 py-0.5">
                    <span className="text-slate-500">{h.expr}</span>
                    <span className="text-blue-400 ml-2">= {h.result}</span>
                  </button>
                ))}
            </div>
          ):(
            <>
              <p className="text-slate-500 text-sm font-mono min-h-[22px] break-all">{expr||'0'}</p>
              <p className={`text-right text-2xl font-black font-mono mt-1 break-all ${hasErr?'text-red-400':result?'text-white':'text-slate-600'}`}>
                {result||(expr?'…':'0')}
              </p>
            </>
          )}
        </div>

        {/* ══ CALC ════════════════════════════════════════ */}
        {mode==='CALC'&&(
          <div className="px-3 pb-5 space-y-2">
            <div className="flex gap-1.5 mb-1">
              <button onClick={()=>setIsShift(s=>!s)}
                className={`flex-1 py-2.5 rounded-xl text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-all ${isShift?'bg-orange-500 text-white':'bg-slate-800 text-slate-400'}`}>
                SHIFT
              </button>
              <button onClick={()=>setIsDeg(d=>!d)}
                className="flex-1 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-400 rounded-xl text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-all">
                {isDeg?'→ RAD':'→ DEG'}
              </button>
              <button onClick={()=>setMem(m=>({...m,M:0}))}
                className="flex-1 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-400 rounded-xl text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-all">
                CLR M
              </button>
            </div>
            {ROWS.map((row,ri)=>(
              <div key={ri} className="grid grid-cols-5 gap-1.5">
                {row.map((btn,bi)=>{
                  const [label,sl,val,sv,sp]=btn;
                  const dispLabel=(isShift&&sl)?sl:label;
                  const isEq=sp==='eq';
                  return (
                    <button key={bi} onClick={()=>pressBtn(btn)}
                      className={`relative py-3.5 md:py-4 rounded-xl font-black text-[10px] md:text-xs transition-all active:scale-95 select-none ${btnColor(btn)} ${isEq?'ring-2 ring-blue-400/30':''}`}>
                      {sl&&!isShift&&<span className="absolute top-0.5 left-0 right-0 text-center text-[7px] text-orange-400 leading-none">{sl}</span>}
                      <span className={isShift&&sl?'text-orange-300':''}>{dispLabel}</span>
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        )}


        {/* ══ EQN ════════════════════════════════════════ */}
        {mode==='EQN'&&(
          <div className="px-4 pb-6 space-y-4">
            <div>
              <p className="text-[9px] font-black uppercase tracking-widest text-slate-500 mb-2">Polynomial Degree</p>
              <div className="flex gap-2">
                {[1,2,3,4,5,6].map(d=>(
                  <button key={d} onClick={()=>changeDeg(d)}
                    className={`flex-1 py-2.5 rounded-xl font-black text-sm transition-all ${eqDeg===d?'bg-blue-600 text-white':'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}>
                    {d}
                  </button>
                ))}
              </div>
            </div>
            <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800 overflow-x-auto">
              <p className="font-mono text-xs text-white whitespace-nowrap">{eqnExpression}</p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {eqCoeffs.map((val,i)=>{
                const deg=eqDeg-i;
                const label=COEFF_LABELS[i];
                const xpart=deg===0?'(constant)':deg===1?'x':('x'+SUPS[deg]);
                return (
                  <div key={i}>
                    <p className="text-[9px] font-black text-slate-400 uppercase mb-1">{label} · {xpart}</p>
                    <input type="number" value={val}
                      onChange={e=>{const n=[...eqCoeffs];n[i]=e.target.value;setEqCoeffs(n);}}
                      placeholder="0"
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-white font-black outline-none focus:border-blue-500 text-sm"/>
                  </div>
                );
              })}
            </div>
            <button onClick={solveEqn}
              className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black transition-all">
              Solve ({eqDeg} root{eqDeg>1?'s':''})
            </button>
            {roots&&(
              <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800 space-y-2">
                <p className="text-[9px] text-slate-500 uppercase tracking-widest">Roots ({roots.length})</p>
                {roots.map((r,i)=>(
                  <div key={i} className="flex justify-between items-center p-2 rounded-xl bg-slate-900/80">
                    <span className="text-[10px] font-bold text-slate-500 w-8">x{i+1}</span>
                    <span className={`font-black text-sm flex-1 text-right ${r.isReal?'text-white':'text-blue-400'}`}>{r.display}</span>
                    {!r.isReal&&<span className="text-[8px] text-slate-600 font-bold ml-2">complex</span>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ══ STATS ═══════════════════════════════════════ */}
        {mode==='STATS'&&(
          <div className="px-4 pb-6 space-y-4">
            <div>
              <p className="text-[9px] font-black uppercase tracking-widest text-slate-500 mb-2">Enter Numbers (comma or space separated)</p>
              <textarea value={statIn} onChange={e=>setStatIn(e.target.value)} rows={3}
                placeholder="e.g. 10, 20, 30, 15, 25"
                className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-white font-mono text-sm outline-none focus:border-blue-500 resize-none"/>
            </div>
            <button onClick={computeStats} className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black">Calculate</button>
            {statRes&&(
              <div className="space-y-2">
                {[['Count (n)',statRes.n],['Sum (Σx)',fmtNum(statRes.sum)],['Mean (x̄)',fmtNum(statRes.mean)],
                  ['Median',fmtNum(statRes.median)],['Min',fmtNum(statRes.min)],['Max',fmtNum(statRes.max)],
                  ['Std Dev (σ)',fmtNum(statRes.stdDev)],['Variance (σ²)',fmtNum(statRes.variance)],
                ].map(([label,val])=>(
                  <div key={label} className="flex justify-between items-center p-3 bg-slate-900/60 rounded-xl border border-slate-800">
                    <span className="text-[10px] font-bold text-slate-400">{label}</span>
                    <span className="font-black text-white">{val}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
        {/* ══ MATRIX ══════════════════════════════════════ */}
        {mode==='MATRIX'&&(
          <div className="px-4 pb-6 space-y-5">
            <div className="flex gap-2">
              <button onClick={()=>{setActiveM('A'); setMRes(null);}}
                className={`flex-1 py-2 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all ${activeM==='A'?'bg-blue-600 text-white':'bg-slate-800 text-slate-400'}`}>Edit Matrix A</button>
              <button onClick={()=>{setActiveM('B'); setMRes(null);}}
                className={`flex-1 py-2 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all ${activeM==='B'?'bg-blue-600 text-white':'bg-slate-800 text-slate-400'}`}>Edit Matrix B</button>
            </div>

            <div className="flex items-center gap-2 bg-slate-900/50 p-3 rounded-2xl border border-slate-800/50">
               <p className="text-[9px] font-black text-slate-500 uppercase mr-2">Dimensions (R x C)</p>
               {activeM==='A' ? (
                 <>
                   <input type="number" min={1} max={5} value={rowsA} onChange={e=>{const v=parseInt(e.target.value)||1; setRowsA(v); setMA(Array(v*colsA).fill(0));}} className="w-10 bg-slate-800 text-white text-center rounded p-1 text-[10px]"/>
                   <span className="text-slate-600">×</span>
                   <input type="number" min={1} max={5} value={colsA} onChange={e=>{const v=parseInt(e.target.value)||1; setColsA(v); setMA(Array(rowsA*v).fill(0));}} className="w-10 bg-slate-800 text-white text-center rounded p-1 text-[10px]"/>
                 </>
               ) : (
                 <>
                   <input type="number" min={1} max={5} value={rowsB} onChange={e=>{const v=parseInt(e.target.value)||1; setRowsB(v); setMB(Array(v*colsB).fill(0));}} className="w-10 bg-slate-800 text-white text-center rounded p-1 text-[10px]"/>
                   <span className="text-slate-600">×</span>
                   <input type="number" min={1} max={5} value={colsB} onChange={e=>{const v=parseInt(e.target.value)||1; setColsB(v); setMB(Array(rowsB*v).fill(0));}} className="w-10 bg-slate-800 text-white text-center rounded p-1 text-[10px]"/>
                 </>
               )}
            </div>

            <div className={`bg-[#02040a] p-3 rounded-2xl border border-slate-800 grid gap-1.5`} style={{gridTemplateColumns: `repeat(${activeM==='A'?colsA:colsB}, 1fr)`}}>
                {(activeM==='A'?mA:mB).map((v, i) => (
                  <input key={i} type="number" value={v === 0 ? '' : v}
                    onChange={(e) => updateCell(i, e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2 text-center text-white text-[11px] font-black focus:border-blue-500 outline-none"
                    placeholder="0"/>
                ))}
            </div>

            <div className="grid grid-cols-4 gap-2">
              <button onClick={()=>matOp('add')} className="py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-black text-[10px] uppercase">A + B</button>
              <button onClick={()=>matOp('sub')} className="py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-black text-[10px] uppercase">A - B</button>
              <button onClick={()=>matOp('mul')} className="py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-black text-[10px] uppercase">A × B</button>
              <button onClick={()=>{setMA(Array(rowsA*colsA).fill(0));setMB(Array(rowsB*colsB).fill(0));setMRes(null);}} className="py-2.5 bg-red-600/20 text-red-500 hover:bg-red-600 hover:text-white rounded-xl font-black text-[10px] uppercase transition-all">Reset</button>
              <button onClick={()=>matOp('tr')}  className="py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-black text-[10px] uppercase">Trans(A)</button>
              <button onClick={()=>matOp('det')} className="py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-black text-[10px] uppercase">Det(A)</button>
              <button onClick={()=>matOp('inv')} className="py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-black text-[10px] uppercase">Inv(A)</button>
            </div>

            {mRes !== null && (
              <div className="bg-slate-900/40 p-5 rounded-[2rem] border border-blue-500/20">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-[9px] font-black text-blue-400 uppercase tracking-widest">Final Result</p>
                  <button onClick={() => {
                    const content = Array.isArray(mRes) ? `${resDim.r}x${resDim.c} Matrix Result: [${mRes.join(', ')}]` : `Matrix Det = ${mRes}`;
                    const text = `Check out this calculation from ACB Portal: ${content}`;
                    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
                  }} className="p-2 bg-emerald-600/10 text-emerald-400 hover:bg-emerald-600 hover:text-white rounded-lg transition-all border border-emerald-500/10">
                     <svg viewBox="0 0 24 24" width="10" height="10" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.653a11.734 11.734 0 005.682 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  </button>
                </div>
                {Array.isArray(mRes) ? (
                  <div className="grid gap-2" style={{gridTemplateColumns: `repeat(${resDim.c}, 1fr)`}}>
                    {mRes.map((v, i) => (
                      <div key={i} className="bg-slate-950 border border-slate-800 p-2 rounded-lg text-center text-white font-black text-[11px]">
                        {Number.isInteger(v) ? v : v.toFixed(2)}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-xl font-black text-white text-center">Det = {mRes}</p>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      <p className="text-center text-[9px] text-slate-700 mt-4 font-bold">
        {mode === 'MATRIX' ? 'Advanced Matrix Engine · Det & Inv Supported' : 'Keyboard supported · SHIFT/M+ for advanced features'}
      </p>
    </div>
  );
}
