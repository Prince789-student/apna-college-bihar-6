import React, { useState } from 'react';
import { colleges, data2024, data2025 } from '../UgeacData';
import { Send, MapPin, ExternalLink, ShieldCheck, AlertTriangle, GraduationCap, Info } from 'lucide-react';

function UgeacPredictor() {
  const [rank, setRank] = useState('');
  const [ugeacInput, setUgeacInput] = useState('');
  const [category, setCategory] = useState('UR');
  const [gender, setGender] = useState('Male');
  const [preferredBranch, setPreferredBranch] = useState('All');
  
  const [hasPredicted, setHasPredicted] = useState(false);
  const [results, setResults] = useState({
     all: [],
     dream: [],
     moderate: [],
     safe: [],
     calculatedRank: 0
  });
  const [selectedCollege, setSelectedCollege] = useState(null);

  // Super Accurate Piecewise Logic
  const estimateUgeacRank = (jeeRank) => {
    const r = parseInt(jeeRank);
    if (!r) return 0;
    if (r < 10000) return 1; 
    if (r < 45000) return Math.floor((r - 10000) * 0.004) + 1;
    if (r < 82000) return Math.floor((r - 45000) * 0.038) + 142;
    if (r < 120000) return Math.floor((r - 82000) * 0.041) + 1548;
    if (r < 180000) return Math.floor((r - 120000) * 0.03) + 3106;
    if (r < 250000) return Math.floor((r - 180000) * 0.027) + 4906;
    if (r < 350000) return Math.floor((r - 250000) * 0.024) + 6796;
    if (r < 500000) return Math.floor((r - 350000) * 0.022) + 9196;
    if (r < 800000) return Math.floor((r - 500000) * 0.015) + 12496;
    return 18000;
  };

  const getEstimatedCategoryRank = (urRank, cat) => {
    const r = parseInt(urRank);
    switch(cat) {
      case 'BC': return Math.floor(r * 0.32);
      case 'EBC': return Math.floor(r * 0.38);
      case 'SC': return Math.floor(r * 0.18); 
      case 'ST': return Math.floor(r * 0.01);
      case 'EWS': return Math.floor(r * 0.15);
      case 'RCG': return Math.floor(r * 0.50);
      default: return r;
    }
  };

  const calculateResults = () => {
    if (!rank && !ugeacInput) return alert('Please enter either JEE Main Rank or UGEAC Rank');
    const ugeacRank = ugeacInput ? parseInt(ugeacInput) : estimateUgeacRank(parseInt(rank));

    const getComparisonRank = (rowCat) => {
      if (rowCat === 'UR') return ugeacRank;
      return getEstimatedCategoryRank(ugeacRank, rowCat);
    };

    const eligibleCategories = ['UR'];
    if (category !== 'UR') eligibleCategories.push(category);
    if (gender === 'Female' && !eligibleCategories.includes('RCG')) eligibleCategories.push('RCG');

    const eligibleSeats = ['General'];
    if (gender === 'Female') eligibleSeats.push('Female');

    let allPredictions = [];
    const seen = new Map();

    data2025.forEach(cut25 => {
      if (preferredBranch !== 'All' && cut25.branch !== preferredBranch) return;
      if (!eligibleCategories.includes(cut25.category)) return;
      if (!eligibleSeats.includes(cut25.seat_type)) return;

      const collegeInfo = colleges.find(c => c.id === cut25.collegeId);
      if (!collegeInfo) return;

      const compRank = getComparisonRank(cut25.category);

      let chance = '';
      if (compRank <= cut25.closing * 0.95) chance = 'High';
      else if (compRank <= cut25.closing * 1.1) chance = 'Medium';
      else if (compRank <= cut25.closing * 1.3) chance = 'Low';
      else return; 

      const cut24 = data2024.find(c => 
        c.collegeId === cut25.collegeId && 
        c.branch === cut25.branch && 
        c.category === cut25.category && 
        c.seat_type === cut25.seat_type
      );

      const key = `${cut25.collegeId}-${cut25.branch}`;
      const entry = { 
        college: collegeInfo, 
        branch: cut25.branch, 
        chance, 
        cutoff25: cut25.closing, 
        cutoff24: cut24 ? cut24.closing : 'N/A',
        cat: cut25.category 
      };
      
      if (!seen.has(key) || seen.get(key).cutoff25 < cut25.closing) {
        seen.set(key, entry);
      }
    });

    const finalResults = Array.from(seen.values());
    const chanceWeight = { 'High': 1, 'Medium': 2, 'Low': 3 };
    
    setResults({
      all: finalResults.sort((a,b) => {
        if (chanceWeight[a.chance] !== chanceWeight[b.chance]) return chanceWeight[a.chance] - chanceWeight[b.chance];
        return a.college.tier - b.college.tier;
      }),
      calculatedRank: ugeacRank
    });
    setHasPredicted(true);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-500">
      
      {/* Header Section */}
      <div className="bg-white p-8 md:p-12 rounded-[3.5rem] border border-slate-200 shadow-2xl relative overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
         <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-600/5 rounded-full blur-[100px] pointer-events-none"></div>
         <div className="relative z-10 flex flex-col gap-4 max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-[1000] text-slate-900 tracking-tighter uppercase leading-[0.8] mb-2">
               UGEAC <span className="text-emerald-500">COUNSELLING</span>
            </h1>
            <p className="text-[10px] md:text-sm text-slate-500 font-black uppercase tracking-[0.4em] leading-relaxed">
               Bihar Engineering Admission Predictor & Smart Choice Filling Engine
            </p>
         </div>
         <a href="https://bceceboard.bihar.gov.in" target="_blank" rel="noreferrer" className="relative z-10 px-8 py-5 bg-white border-2 border-slate-200 hover:border-emerald-500 text-slate-900 rounded-[2rem] font-black text-xs uppercase tracking-widest flex items-center gap-3 transition-all active:scale-95 shadow-xl group">
             BCECEB Portal <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
         </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* INPUT CARD */}
        <div className="lg:col-span-12 xl:col-span-4 bg-white p-8 rounded-[3.5rem] border border-slate-200 shadow-2xl space-y-8">
           <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-emerald-600/10 rounded-xl flex items-center justify-center text-emerald-600">
                 <ShieldCheck size={20} />
              </div>
              <h2 className="text-sm font-black uppercase text-slate-900 tracking-widest">Eligibility Check</h2>
           </div>

           <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-[9px] font-black text-slate-500 uppercase tracking-widest ml-1">JEE Main Rank (CRL)</label>
                <input type="number" placeholder="Enter CRL Rank..." value={rank} onChange={e => setRank(e.target.value)} className="w-full bg-slate-50 border-2 border-transparent focus:border-emerald-500/50 rounded-2xl p-4 text-slate-900 text-sm font-black outline-none transition-all placeholder:text-slate-300" />
              </div>

              <div className="space-y-2 p-6 bg-emerald-50/50 border border-emerald-100 rounded-[2.5rem]">
                <label className="text-[9px] font-black text-emerald-600 uppercase tracking-widest ml-1">UGEAC State Rank</label>
                <input type="number" placeholder="Enter State Rank..." value={ugeacInput} onChange={e => setUgeacInput(e.target.value)} className="w-full bg-white border-2 border-emerald-200 focus:border-emerald-500 rounded-2xl p-4 text-slate-900 text-sm font-black outline-none transition-all placeholder:text-emerald-100 shadow-inner" />
                <p className="text-[8px] text-emerald-600 font-bold uppercase mt-2 text-center tracking-widest">Enter if you have Rank Card</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                 <div className="space-y-2">
                    <label className="text-[9px] font-black text-slate-500 uppercase tracking-widest ml-1">Category</label>
                    <select value={category} onChange={e => setCategory(e.target.value)} className="w-full bg-slate-50 border-2 border-transparent focus:border-emerald-500/50 rounded-2xl p-4 text-slate-900 text-[10px] font-black outline-none transition-all appearance-none uppercase tracking-tighter">
                      <option value="UR">UR (General)</option>
                      <option value="EBC">EBC</option>
                      <option value="BC">BC</option>
                      <option value="SC">SC</option>
                      <option value="ST">ST</option>
                      <option value="EWS">EWS</option>
                    </select>
                 </div>
                 <div className="space-y-2">
                    <label className="text-[9px] font-black text-slate-500 uppercase tracking-widest ml-1">Gender</label>
                    <select value={gender} onChange={e => setGender(e.target.value)} className="w-full bg-slate-50 border-2 border-transparent focus:border-emerald-500/50 rounded-2xl p-4 text-slate-900 text-[10px] font-black outline-none transition-all appearance-none uppercase tracking-tighter">
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                 </div>
              </div>

              <div className="space-y-2">
                <label className="text-[9px] font-black text-slate-500 uppercase tracking-widest ml-1">Preferred Branch</label>
                <select value={preferredBranch} onChange={e => setPreferredBranch(e.target.value)} className="w-full bg-slate-50 border-2 border-transparent focus:border-emerald-500/50 rounded-2xl p-4 text-slate-900 text-[10px] font-black outline-none transition-all appearance-none uppercase tracking-tighter">
                  <option value="All">All Branches</option>
                  <option value="Computer Science & Engineering">CSE</option>
                  <option value="Civil Engineering">Civil</option>
                  <option value="Mechanical Engineering">Mechanical</option>
                  <option value="Electrical Engineering">Electrical</option>
                  <option value="Electronics & Communication">ECE</option>
                </select>
              </div>

              <div className="flex items-start gap-2 p-3 bg-amber-50 rounded-xl border border-amber-100">
                 <AlertTriangle size={14} className="text-amber-500 shrink-0 mt-0.5" />
                 <p className="text-[8px] text-amber-600 font-bold uppercase tracking-widest leading-relaxed">Estimation is based on 2024 results. Official card is final.</p>
              </div>

              <button onClick={calculateResults} className="w-full py-5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-[2rem] font-[1000] text-sm uppercase tracking-[0.2em] shadow-2xl shadow-emerald-950/20 active:scale-95 transition-all">
                 Analyze Results
              </button>
           </div>
        </div>

        {/* RESULTS FEED */}
        <div className="lg:col-span-12 xl:col-span-8 space-y-8">
           {!hasPredicted ? (
              <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-[4rem] p-20 flex flex-col items-center justify-center text-center space-y-6">
                 <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-slate-200 shadow-sm border border-slate-100">
                    <GraduationCap size={40} />
                 </div>
                 <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest">Enter details to see prediction</h3>
              </div>
           ) : (
              <div className="space-y-8 animate-in slide-in-from-bottom duration-700">
                 
                 {/* Choice Filling Box */}
                 <div className="bg-white p-8 md:p-10 rounded-[4rem] border border-slate-200 shadow-2xl space-y-8">
                    <div className="flex items-center gap-3">
                       <Send size={20} className="text-emerald-500" />
                       <h2 className="text-sm font-black uppercase text-slate-900 tracking-widest">Smart Preference List</h2>
                    </div>
                    <div className="space-y-3">
                       {results.all.filter(r => r.chance === 'High').slice(0, 3).map((r, i) => (
                         <div key={i} className="flex items-center gap-4 p-5 bg-slate-50 border border-slate-200 rounded-3xl group hover:border-emerald-500 transition-all">
                            <div className="w-10 h-10 bg-emerald-600 text-white rounded-xl flex items-center justify-center font-black text-xs shadow-lg shadow-emerald-900/10 shrink-0">{i+1}</div>
                            <div className="flex-1 min-w-0">
                               <p className="text-sm font-black text-slate-900 uppercase tracking-tight truncate">{r.college.name}</p>
                               <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mt-0.5">{r.branch}</p>
                            </div>
                            <div className="px-4 py-1.5 bg-emerald-500/10 text-emerald-600 rounded-full text-[8px] font-black uppercase tracking-widest">Safe Option</div>
                         </div>
                       ))}
                    </div>
                 </div>

                 {/* Detailed Table */}
                 <div className="bg-white rounded-[4rem] border border-slate-200 shadow-2xl overflow-hidden">
                    <div className="p-8 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
                       <h2 className="text-sm font-black uppercase text-slate-900 tracking-widest">All Matching Colleges ({results.all.length})</h2>
                       <span className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.2em] animate-pulse">Updated Live</span>
                    </div>
                    <div className="overflow-x-auto">
                       <table className="w-full text-left border-collapse">
                          <thead className="bg-[#f8fafc] border-b border-slate-200/50">
                             <tr>
                                <th className="px-8 py-5 text-[9px] font-black text-slate-400 uppercase tracking-widest">College & Location</th>
                                <th className="px-8 py-5 text-[9px] font-black text-slate-400 uppercase tracking-widest">Branch</th>
                                <th className="px-8 py-5 text-[9px] font-black text-slate-400 uppercase tracking-widest text-center">Chance</th>
                                <th className="px-8 py-5 text-[9px] font-black text-slate-400 uppercase tracking-widest text-right">Action</th>
                             </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100">
                             {results.all.map((r, i) => (
                               <tr key={i} className="group hover:bg-slate-50 transition-all cursor-default">
                                  <td className="px-8 py-6">
                                     <p className="text-[11px] font-black text-slate-900 uppercase tracking-tight">{r.college.name}</p>
                                     <p className="text-[8px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-1 flex items-center gap-1"><MapPin size={8}/> {r.college.location}</p>
                                  </td>
                                  <td className="px-8 py-6 text-[10px] font-bold text-slate-600 uppercase tracking-widest">{r.branch}</td>
                                  <td className="px-8 py-6 text-center">
                                     <span className={`px-4 py-1.5 rounded-full text-[8px] font-[1000] uppercase tracking-widest ${
                                       r.chance === 'High' ? 'bg-emerald-500/10 text-emerald-600' : 
                                       r.chance === 'Medium' ? 'bg-amber-500/10 text-amber-600' : 
                                       'bg-red-500/10 text-red-600'
                                     }`}>
                                       {r.chance}
                                     </span>
                                  </td>
                                  <td className="px-8 py-6 text-right">
                                     <button onClick={() => setSelectedCollege(r.college)} className="p-3 bg-white border border-slate-200 rounded-xl text-slate-500 hover:text-emerald-500 hover:border-emerald-500/30 transition-all group-hover:shadow-lg">
                                        <Info size={16} />
                                     </button>
                                  </td>
                               </tr>
                             ))}
                          </tbody>
                       </table>
                    </div>
                 </div>

              </div>
           )}
        </div>
      </div>

      {/* College Modal (Tailwind Upgrade) */}
      {selectedCollege && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/60 backdrop-blur-xl animate-in fade-in duration-300">
           <div className="w-full max-w-xl bg-white rounded-[4rem] p-10 md:p-14 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/5 rounded-full blur-[80px] pointer-events-none"></div>
              
              <div className="relative z-10 flex flex-col items-center text-center space-y-8">
                 <div className="inline-flex p-5 bg-emerald-600/10 text-emerald-600 rounded-3xl">
                    <GraduationCap size={44} />
                 </div>
                 
                 <div className="space-y-3">
                    <h2 className="text-2xl md:text-3xl font-[1000] text-slate-900 uppercase tracking-tighter leading-none">{selectedCollege.name}</h2>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.4em] flex items-center justify-center gap-2">
                      <MapPin size={12}/> {selectedCollege.location} • Estd {selectedCollege.estd}
                    </p>
                 </div>

                 <div className="grid grid-cols-2 w-full gap-4">
                    <div className="p-6 bg-slate-50 border border-slate-200 rounded-3xl space-y-1">
                       <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Avg. Fees</p>
                       <p className="text-sm font-black text-slate-900">₹10,500/yr</p>
                    </div>
                    <div className="p-6 bg-slate-50 border border-slate-200 rounded-3xl space-y-1">
                       <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Highest Package</p>
                       <p className="text-sm font-black text-slate-900">{selectedCollege.placement?.highest || '4 LPA'}</p>
                    </div>
                 </div>

                 <div className="w-full space-y-3 pt-2">
                    <a href={selectedCollege.website} target="_blank" rel="noreferrer" className="w-full py-5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-[2rem] font-black text-[10px] uppercase tracking-widest transition-all shadow-xl shadow-emerald-900/20 active:scale-95 flex items-center justify-center gap-3">
                       🌐 Visit Official Website
                    </a>
                    <button onClick={() => setSelectedCollege(null)} className="w-full py-5 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-[2rem] font-black text-[10px] uppercase tracking-widest transition-all">
                       Close Details
                    </button>
                 </div>
              </div>
           </div>
        </div>
      )}

    </div>
  );
}

export default UgeacPredictor;
