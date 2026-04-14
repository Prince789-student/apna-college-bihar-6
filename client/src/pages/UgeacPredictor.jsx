import React, { useState, useMemo } from 'react';
import { colleges, data2024, data2025 } from '../UgeacData';
import { Send, MapPin, ExternalLink, ShieldCheck, AlertTriangle, GraduationCap, Info, ChevronDown } from 'lucide-react';

function UgeacPredictor() {
  const [rank, setRank] = useState('');
  const [ugeacInput, setUgeacInput] = useState('');
  const [category, setCategory] = useState('UR');
  const [gender, setGender] = useState('Male');
  const [preferredBranch, setPreferredBranch] = useState('All');
  
  const [hasPredicted, setHasPredicted] = useState(false);
  const [results, setResults] = useState({
     all: [],
     calculatedRank: 0
  });
  const [selectedCollege, setSelectedCollege] = useState(null);

  // Dynamically extract ALL branches from dataset
  const dynamicBranches = useMemo(() => {
    const branches = new Set();
    data2025.forEach(d => branches.add(d.branch));
    return Array.from(branches).sort();
  }, []);

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
      case 'RCG': return Math.floor(r * 0.40); // Adjusted for reality
      default: return r;
    }
  };

  const calculateResults = () => {
    if (!rank && !ugeacInput) return alert('Please enter either JEE Main Rank or UGEAC Rank');
    const ugeacRank = ugeacInput ? parseInt(ugeacInput) : estimateUgeacRank(parseInt(rank));

    const eligibleCategories = ['UR'];
    if (category !== 'UR') eligibleCategories.push(category);
    if (gender === 'Female' && !eligibleCategories.includes('RCG')) eligibleCategories.push('RCG');

    const eligibleSeats = ['General'];
    if (gender === 'Female') eligibleSeats.push('Female');

    const seen = new Map();

    data2025.forEach(cut25 => {
      if (preferredBranch !== 'All' && cut25.branch !== preferredBranch) return;
      if (!eligibleCategories.includes(cut25.category)) return;
      if (!eligibleSeats.includes(cut25.seat_type)) return;

      const collegeInfo = colleges.find(c => c.id === cut25.collegeId);
      if (!collegeInfo) return;

      const compRank = cut25.category === 'UR' ? ugeacRank : getEstimatedCategoryRank(ugeacRank, cut25.category);

      let chance = '';
      if (compRank <= cut25.closing * 1.05) chance = 'High';
      else if (compRank <= cut25.closing * 1.25) chance = 'Medium';
      else if (compRank <= cut25.closing * 1.5) chance = 'Low';
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
      
      if (!seen.has(key) || chanceWeight(chance) < chanceWeight(seen.get(key).chance)) {
        seen.set(key, entry);
      }
    });

    function chanceWeight(c) {
      if (c === 'High') return 1;
      if (c === 'Medium') return 2;
      return 3;
    }

    const finalResults = Array.from(seen.values());
    
    setResults({
      all: finalResults.sort((a,b) => {
        if (chanceWeight(a.chance) !== chanceWeight(b.chance)) return chanceWeight(a.chance) - chanceWeight(b.chance);
        return a.college.tier - b.college.tier;
      }),
      calculatedRank: ugeacRank
    });
    setHasPredicted(true);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-10 py-6 px-4 animate-in fade-in duration-500">
      
      {/* Header Section - Larger Text */}
      <div className="bg-white p-10 md:p-16 rounded-[4rem] border border-slate-200 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-600/5 rounded-full blur-[120px] pointer-events-none"></div>
         <div className="relative z-10 flex flex-col gap-6 max-w-3xl text-center md:text-left">
            <h1 className="text-5xl md:text-8xl font-[1000] text-slate-900 tracking-tighter uppercase leading-[0.8]">
               UGEAC <span className="text-emerald-500">COUNSELLING</span>
            </h1>
            <p className="text-xs md:text-xl text-slate-500 font-black uppercase tracking-[0.4em] leading-relaxed">
               Bihar Engineering Admission Predictor & Smart Choice Filling Engine
            </p>
         </div>
         <a href="https://bceceboard.bihar.gov.in" target="_blank" rel="noreferrer" className="relative z-10 px-10 py-6 bg-white border-2 border-slate-200 hover:border-emerald-500 text-slate-900 rounded-[2.5rem] font-black text-sm uppercase tracking-widest flex items-center gap-4 transition-all active:scale-95 shadow-2xl group">
             BCECEB Portal <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
         </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* INPUT CARD - Bolder Inputs */}
        <div className="lg:col-span-12 xl:col-span-4 bg-white p-10 rounded-[4rem] border border-slate-200 shadow-2xl space-y-10">
           <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-600/10 rounded-2xl flex items-center justify-center text-emerald-600">
                 <ShieldCheck size={24} />
              </div>
              <h2 className="text-lg font-[1000] uppercase text-slate-900 tracking-widest">User Profile</h2>
           </div>

           <div className="space-y-8">
              <div className="space-y-3">
                <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">JEE Main Rank (CRL)</label>
                <input type="number" placeholder="Enter CRL Rank..." value={rank} onChange={e => setRank(e.target.value)} className="w-full bg-slate-50 border-2 border-transparent focus:border-emerald-500 rounded-2xl p-6 text-slate-900 text-lg font-black outline-none transition-all placeholder:text-slate-300" />
              </div>

              <div className="space-y-3 p-8 bg-emerald-50/50 border-2 border-dashed border-emerald-200 rounded-[3rem]">
                <label className="text-xs font-black text-emerald-600 uppercase tracking-widest ml-1 text-center block">UGEAC State Rank</label>
                <input type="number" placeholder="State Merit Rank..." value={ugeacInput} onChange={e => setUgeacInput(e.target.value)} className="w-full bg-white border-2 border-emerald-300 focus:border-emerald-600 rounded-2xl p-6 text-slate-900 text-lg font-black outline-none transition-all placeholder:text-emerald-200 shadow-inner" />
                <p className="text-[10px] text-emerald-600 font-black uppercase text-center tracking-[0.2em] animate-pulse">Recommended for Accuracy</p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                 <div className="space-y-3">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Category</label>
                    <div className="relative">
                       <select value={category} onChange={e => setCategory(e.target.value)} className="w-full bg-slate-50 border-2 border-transparent focus:border-emerald-500 rounded-2xl p-6 text-slate-900 text-xs font-[1000] outline-none transition-all appearance-none uppercase tracking-widest cursor-pointer">
                         <option value="UR">UR (General)</option>
                         <option value="EBC">EBC</option>
                         <option value="BC">BC</option>
                         <option value="SC">SC</option>
                         <option value="ST">ST</option>
                         <option value="EWS">EWS</option>
                       </select>
                       <ChevronDown size={16} className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                    </div>
                 </div>
                 <div className="space-y-3">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Gender</label>
                    <div className="relative">
                       <select value={gender} onChange={e => setGender(e.target.value)} className="w-full bg-slate-50 border-2 border-transparent focus:border-emerald-500 rounded-2xl p-6 text-slate-900 text-xs font-[1000] outline-none transition-all appearance-none uppercase tracking-widest cursor-pointer">
                         <option value="Male">Male</option>
                         <option value="Female">Female</option>
                       </select>
                       <ChevronDown size={16} className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                    </div>
                 </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Select Engineering Branch</label>
                <div className="relative">
                   <select value={preferredBranch} onChange={e => setPreferredBranch(e.target.value)} className="w-full bg-slate-50 border-2 border-transparent focus:border-emerald-500 rounded-2xl p-6 text-slate-900 text-[10px] font-[1000] outline-none transition-all appearance-none uppercase tracking-widest cursor-pointer">
                     <option value="All">Show All Branches ({dynamicBranches.length})</option>
                     {dynamicBranches.map(b => <option key={b} value={b}>{b}</option>)}
                   </select>
                   <ChevronDown size={16} className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                </div>
              </div>

              <button onClick={calculateResults} className="w-full py-7 bg-emerald-600 hover:bg-emerald-500 text-white rounded-[2.5rem] font-[1000] text-lg uppercase tracking-[0.2em] shadow-2xl shadow-emerald-950/20 active:scale-95 transition-all flex items-center justify-center gap-4">
                 Predict Now <Send size={20} />
              </button>
           </div>
        </div>

        {/* RESULTS FEED - Larger Rows */}
        <div className="lg:col-span-12 xl:col-span-8 space-y-10">
           {!hasPredicted ? (
              <div className="bg-slate-50 border-4 border-dashed border-slate-200 rounded-[5rem] p-32 flex flex-col items-center justify-center text-center space-y-8">
                 <div className="w-24 h-24 bg-white rounded-[2rem] flex items-center justify-center text-slate-200 shadow-2xl border border-slate-100">
                    <GraduationCap size={50} />
                 </div>
                 <div>
                    <h3 className="text-2xl font-[1000] text-slate-900 uppercase tracking-tighter mb-2">Ready for Prediction</h3>
                    <p className="text-xs text-slate-400 font-black uppercase tracking-[0.4em]">Enter your rank data to begin simulation</p>
                 </div>
              </div>
           ) : (
              <div className="space-y-10 animate-in slide-in-from-bottom-10 duration-700">
                 
                 {/* Detailed Table */}
                 <div className="bg-white rounded-[4rem] border border-slate-200 shadow-2xl overflow-hidden">
                    <div className="p-10 border-b border-slate-100 bg-slate-50/50 flex flex-col sm:flex-row items-center justify-between gap-4">
                       <div>
                          <h2 className="text-xl font-[1000] uppercase text-slate-900 tracking-tight">Eligibility Report</h2>
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Based on Estimated State Rank: {results.calculatedRank}</p>
                       </div>
                       <span className="px-6 py-2 bg-emerald-500 text-white rounded-full text-[10px] font-black uppercase tracking-[0.2em]">{results.all.length} Matches Found</span>
                    </div>
                    <div className="overflow-x-auto">
                       <table className="w-full text-left border-collapse">
                          <thead className="bg-[#f8fafc] border-b border-slate-200/50">
                             <tr>
                                <th className="px-10 py-6 text-xs font-black text-slate-400 uppercase tracking-widest">Institution & Infrastructure</th>
                                <th className="px-10 py-6 text-xs font-black text-slate-400 uppercase tracking-widest">Branch Name</th>
                                <th className="px-10 py-6 text-xs font-black text-slate-400 uppercase tracking-widest text-center">Admission Chance</th>
                                <th className="px-10 py-6 text-xs font-black text-slate-400 uppercase tracking-widest text-right">Details</th>
                             </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100">
                             {results.all.map((r, i) => (
                               <tr key={i} className="group hover:bg-emerald-50 transition-all cursor-default">
                                  <td className="px-10 py-8">
                                     <p className="text-lg font-[1000] text-slate-900 uppercase tracking-tighter group-hover:text-emerald-700 transition-colors">{r.college.name}</p>
                                     <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mt-2 flex items-center gap-2"><MapPin size={12}/> {r.college.location}</p>
                                  </td>
                                  <td className="px-10 py-8 text-xs font-[1000] text-slate-600 uppercase tracking-widest">{r.branch}</td>
                                  <td className="px-10 py-8 text-center">
                                     <span className={`px-6 py-2.5 rounded-full text-[10px] font-[1000] uppercase tracking-widest shadow-sm ${
                                       r.chance === 'High' ? 'bg-emerald-600 text-white' : 
                                       r.chance === 'Medium' ? 'bg-amber-500 text-white' : 
                                       'bg-red-500 text-white'
                                     }`}>
                                       {r.chance}
                                     </span>
                                  </td>
                                  <td className="px-10 py-8 text-right">
                                     <button onClick={() => setSelectedCollege(r.college)} className="p-4 bg-white border-2 border-slate-200 rounded-2xl text-slate-500 hover:text-emerald-600 hover:border-emerald-500 transition-all group-hover:shadow-xl">
                                        <Info size={24} />
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

      {/* College Modal - Super Size */}
      {selectedCollege && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/80 backdrop-blur-md animate-in fade-in duration-300">
           <div className="w-full max-w-2xl bg-white rounded-[5rem] p-12 md:p-20 shadow-[-20px_20px_60px_-15px_rgba(0,0,0,0.3)] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-600/10 rounded-full blur-[100px] pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>
              
              <div className="relative z-10 flex flex-col items-center text-center space-y-10">
                 <div className="inline-flex p-8 bg-emerald-600/10 text-emerald-600 rounded-[2.5rem] shadow-inner">
                    <GraduationCap size={60} />
                 </div>
                 
                 <div className="space-y-4">
                    <h2 className="text-4xl md:text-5xl font-[1000] text-slate-900 uppercase tracking-tighter leading-none">{selectedCollege.name}</h2>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                       <span className="px-4 py-2 bg-slate-100 rounded-full text-[10px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2"><MapPin size={10}/> {selectedCollege.location}</span>
                       <span className="px-4 py-2 bg-slate-100 rounded-full text-[10px] font-black text-slate-500 uppercase tracking-widest">Estd {selectedCollege.estd}</span>
                       <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest">Tier {selectedCollege.tier}</span>
                    </div>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6">
                    <div className="p-8 bg-slate-50 border-2 border-slate-100 rounded-[2.5rem] space-y-2 text-left">
                       <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Infrastructure</p>
                       <p className="text-lg font-[1000] text-slate-800">{selectedCollege.labs}</p>
                       <p className="text-[10px] font-black text-emerald-500 uppercase">{selectedCollege.wifi}</p>
                    </div>
                    <div className="p-8 bg-slate-50 border-2 border-slate-100 rounded-[2.5rem] space-y-2 text-left">
                       <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Placement Hub</p>
                       <p className="text-lg font-[1000] text-slate-800">{selectedCollege.placement?.avg} Avg Package</p>
                       <p className="text-xs font-black text-blue-600 uppercase tracking-wider">{selectedCollege.placement?.highest} Highest</p>
                    </div>
                 </div>

                 <div className="w-full space-y-4 pt-4">
                    <a href={selectedCollege.website} target="_blank" rel="noreferrer" className="w-full py-7 bg-emerald-600 hover:bg-emerald-500 text-white rounded-[2.5rem] font-[1000] text-sm uppercase tracking-[0.2em] transition-all shadow-2xl shadow-emerald-950/20 active:scale-95 flex items-center justify-center gap-4">
                       🌐 Visit Official Portal
                    </a>
                    <button onClick={() => setSelectedCollege(null)} className="w-full py-6 text-slate-400 hover:text-slate-900 font-black text-xs uppercase tracking-widest transition-all">
                       Return to Predictor
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
