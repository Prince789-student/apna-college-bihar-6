import React, { useState, useMemo } from 'react';
import { colleges, data2024, data2025 } from '../UgeacData';
import { Send, MapPin, ExternalLink, ShieldCheck, AlertTriangle, GraduationCap, Info, ChevronDown, CheckCircle2, Building2, Wifi, BookOpen } from 'lucide-react';

function UgeacPredictor() {
  const [rank, setRank] = useState('');
  const [ugeacInput, setUgeacInput] = useState('');
  const [category, setCategory] = useState('UR');
  const [gender, setGender] = useState('Male');
  const [preferredBranch, setPreferredBranch] = useState('All');
  
  const [hasPredicted, setHasPredicted] = useState(false);
  const [results, setResults] = useState({
     all: [],
     smartChoices: [],
     calculatedRank: 0
  });
  const [selectedCollege, setSelectedCollege] = useState(null);

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
    return Math.floor((r - 45000) * 0.038) + 142; // Basic approximation
  };

  const getEstimatedCategoryRank = (urRank, cat) => {
    const r = parseInt(urRank);
    const ratios = { 'BC': 0.32, 'EBC': 0.38, 'SC': 0.18, 'ST': 0.01, 'EWS': 0.15, 'RCG': 0.40 };
    return Math.floor(r * (ratios[cat] || 1));
  };

  const calculateResults = () => {
    if (!rank && !ugeacInput) return alert('Please enter rank');
    const ugeacRank = ugeacInput ? parseInt(ugeacInput) : estimateUgeacRank(parseInt(rank));

    const eligibleCategories = ['UR'];
    if (category !== 'UR') eligibleCategories.push(category);
    if (gender === 'Female' && !eligibleCategories.includes('RCG')) eligibleCategories.push('RCG');

    const seen = new Map();

    data2025.forEach(cut25 => {
      if (preferredBranch !== 'All' && cut25.branch !== preferredBranch) return;
      if (!eligibleCategories.includes(cut25.category)) return;

      const collegeInfo = colleges.find(c => c.id === cut25.collegeId);
      if (!collegeInfo) return;

      const compRank = cut25.category === 'UR' ? ugeacRank : getEstimatedCategoryRank(ugeacRank, cut25.category);

      let chance = '';
      if (compRank <= cut25.closing * 1.05) chance = 'High';
      else if (compRank <= cut25.closing * 1.25) chance = 'Medium';
      else if (compRank <= cut25.closing * 1.5) chance = 'Low';
      else return; 

      const cut24 = data2024.find(c => 
        c.collegeId === cut25.collegeId && c.branch === cut25.branch && 
        c.category === cut25.category && c.seat_type === cut25.seat_type
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
      
      if (!seen.has(key) || chanceScore(chance) < chanceScore(seen.get(key).chance)) {
        seen.set(key, entry);
      }
    });

    function chanceScore(c) { return c === 'High' ? 1 : c === 'Medium' ? 2 : 3; }

    const allRes = Array.from(seen.values()).sort((a,b) => {
        if (chanceScore(a.chance) !== chanceScore(b.chance)) return chanceScore(a.chance) - chanceScore(b.chance);
        return a.college.tier - b.college.tier;
    });

    setResults({
      all: allRes,
      smartChoices: allRes.slice(0, 5),
      calculatedRank: ugeacRank
    });
    setHasPredicted(true);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-10 py-6 px-4 animate-in fade-in duration-500 font-sans">
      
      {/* Search Header */}
      <div className="bg-white p-12 rounded-[3.5rem] border border-slate-200 shadow-2xl space-y-8">
         <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <h1 className="text-5xl font-[1000] text-slate-800 tracking-tighter uppercase">UGEAC <span className="text-blue-600">COUNSELLING</span></h1>
            <a href="https://bceceboard.bihar.gov.in" target="_blank" rel="noreferrer" className="px-8 py-4 bg-slate-50 border-2 border-slate-200 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:bg-white transition-all">Official Portal <ExternalLink size={14}/></a>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-2">
               <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">JEE CRL Rank</label>
               <input type="number" placeholder="Enter Rank..." value={rank} onChange={e => setRank(e.target.value)} className="w-full bg-slate-50 border-2 border-transparent focus:border-blue-500 rounded-2xl p-4 text-sm font-black outline-none transition-all" />
            </div>
            <div className="space-y-2">
               <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">UGEAC Rank</label>
               <input type="number" placeholder="Optional..." value={ugeacInput} onChange={e => setUgeacInput(e.target.value)} className="w-full bg-slate-50 border-2 border-transparent focus:border-blue-500 rounded-2xl p-4 text-sm font-black outline-none transition-all" />
            </div>
            <div className="space-y-2">
               <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Category</label>
               <select value={category} onChange={e => setCategory(e.target.value)} className="w-full bg-slate-50 border-2 border-transparent focus:border-blue-500 rounded-2xl p-4 text-xs font-[1000] outline-none transition-all uppercase appearance-none">
                  <option value="UR">UR</option><option value="EBC">EBC</option><option value="BC">BC</option><option value="SC">SC</option><option value="EWS">EWS</option>
               </select>
            </div>
            <div className="space-y-2">
               <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Branch</label>
               <select value={preferredBranch} onChange={e => setPreferredBranch(e.target.value)} className="w-full bg-slate-50 border-2 border-transparent focus:border-blue-500 rounded-2xl p-4 text-xs font-[1000] outline-none transition-all uppercase appearance-none">
                  <option value="All">All Branches</option>
                  {dynamicBranches.map(b => <option key={b} value={b}>{b}</option>)}
               </select>
            </div>
         </div>

         <button onClick={calculateResults} className="w-full py-6 bg-blue-600 hover:bg-blue-500 text-white rounded-3xl font-[1000] text-lg uppercase tracking-widest shadow-2xl shadow-blue-900/20 active:scale-95 transition-all">Analyze Predictor</button>
      </div>

      {hasPredicted && (
        <div className="space-y-12 animate-in slide-in-from-bottom-10 duration-700">
           
           {/* SMART CHOICE FILLING SECTION */}
           <div className="bg-white p-10 rounded-[3.5rem] border border-slate-200 shadow-2xl space-y-8">
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center"><CheckCircle2 size={20}/></div>
                 <h2 className="text-xl font-[1000] text-slate-800 tracking-tight">Smart Choice Filling List (Auto-Generated)</h2>
              </div>
              
              <div className="grid gap-4">
                 {results.smartChoices.map((r, i) => (
                    <div key={i} className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-slate-50 border border-slate-200 rounded-3xl hover:border-blue-500 hover:bg-white transition-all group">
                       <div className="flex items-center gap-5">
                          <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-black text-lg shadow-lg shrink-0">{i+1}</div>
                          <div>
                             <p className="text-lg font-black text-slate-800 uppercase tracking-tight">{r.college.name}</p>
                             <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">{r.branch}</p>
                          </div>
                       </div>
                       <div className={`mt-4 md:mt-0 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest ${r.chance === 'High' ? 'bg-emerald-500 text-white' : 'bg-amber-500 text-white'}`}>
                          {r.chance} Chance
                       </div>
                    </div>
                 ))}
                 <p className="text-center text-[10px] font-black text-slate-400 uppercase tracking-widest italic mt-4">Tip: Copy this sequence for best admission probability.</p>
              </div>
           </div>

           {/* ALL ELIGIBLE COLLEGES TABLE */}
           <div className="bg-white rounded-[3.5rem] border border-slate-200 shadow-2xl overflow-hidden">
              <div className="p-10 border-b border-slate-100 flex items-center justify-between">
                 <h2 className="text-xl font-[1000] text-slate-800 tracking-tight uppercase">All Eligible Colleges ({results.all.length})</h2>
              </div>
              <div className="overflow-x-auto">
                 <table className="w-full text-left border-collapse">
                    <thead className="bg-[#f8fafc] border-b border-slate-200">
                       <tr>
                          <th className="px-10 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">College Name</th>
                          <th className="px-10 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Branch</th>
                          <th className="px-6 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">2024 Cutoff</th>
                          <th className="px-6 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">2025 Cutoff</th>
                          <th className="px-10 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Chance</th>
                          <th className="px-10 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Info</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                       {results.all.map((r, i) => (
                         <tr key={i} className="hover:bg-slate-50 transition-all">
                            <td className="px-10 py-8">
                               <p className="text-sm font-black text-slate-800 uppercase tracking-tight">{r.college.name}</p>
                               <p className="text-[9px] font-black text-slate-400 uppercase mt-1">{r.college.location}</p>
                            </td>
                            <td className="px-10 py-8 text-xs font-bold text-slate-600 uppercase italic">{r.branch}</td>
                            <td className="px-6 py-8 text-center text-xs font-black text-slate-400">{r.cutoff24}</td>
                            <td className="px-6 py-8 text-center text-sm font-black text-slate-900 bg-blue-50/10 shadow-inner">{r.cutoff25}</td>
                            <td className="px-10 py-8 text-center">
                               <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest ${r.chance === 'High' ? 'bg-emerald-100 text-emerald-600' : 'bg-red-100 text-red-600'}`}>{r.chance}</span>
                            </td>
                            <td className="px-10 py-8 text-right">
                               <button onClick={() => setSelectedCollege(r.college)} className="p-3 bg-white border border-slate-200 rounded-xl text-blue-600 hover:border-blue-500 transition-all shadow-sm"><Info size={18}/></button>
                            </td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </div>

        </div>
      )}

      {/* DETAILED COLLEGE MODAL */}
      {selectedCollege && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/40 backdrop-blur-md animate-in fade-in duration-300">
           <div className="w-full max-w-2xl bg-white rounded-[4rem] p-10 md:p-16 shadow-2xl relative overflow-hidden">
              <div className="relative z-10 space-y-8">
                 <div className="flex flex-col items-center text-center space-y-6">
                    <div className="w-20 h-20 bg-blue-600 text-white rounded-3xl flex items-center justify-center shadow-2xl"><Building2 size={40}/></div>
                    <div>
                       <h2 className="text-4xl font-[1000] text-slate-900 uppercase tracking-tighter">{selectedCollege.name}</h2>
                       <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mt-2">{selectedCollege.location} • Estd {selectedCollege.estd}</p>
                    </div>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-8 bg-slate-50 border border-slate-200 rounded-3xl space-y-4">
                       <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-200 pb-2">Infrastructure</h4>
                       <div className="space-y-3">
                          <p className="text-xs font-black text-slate-700 flex items-center gap-3"><Building2 size={16} className="text-blue-500"/> {selectedCollege.labs}</p>
                          <p className="text-xs font-black text-slate-700 flex items-center gap-3"><Wifi size={16} className="text-emerald-500"/> {selectedCollege.wifi}</p>
                          <p className="text-xs font-black text-slate-700 flex items-center gap-3"><BookOpen size={16} className="text-orange-500"/> Digital Library Available</p>
                       </div>
                    </div>
                    <div className="p-8 bg-slate-50 border border-slate-200 rounded-3xl space-y-4">
                       <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-200 pb-2">Placement Stats</h4>
                       <div className="space-y-2">
                          <p className="text-xl font-[1000] text-slate-900">₹{selectedCollege.placement?.avg} <span className="text-[10px] font-black text-slate-400 uppercase">Avg Package</span></p>
                          <p className="text-sm font-black text-emerald-600">{selectedCollege.placement?.highest} Highest</p>
                       </div>
                    </div>
                 </div>

                 <div className="grid grid-cols-1 gap-4">
                    <a href={selectedCollege.website} target="_blank" rel="noreferrer" className="w-full py-6 bg-blue-600 hover:bg-blue-500 text-white rounded-3xl font-[1000] text-xs uppercase tracking-widest flex items-center justify-center gap-3 shadow-2xl transition-all">Visit Official Website <ExternalLink size={16}/></a>
                    <button onClick={() => setSelectedCollege(null)} className="w-full py-5 bg-slate-100 hover:bg-slate-200 text-slate-500 rounded-3xl font-black text-[10px] uppercase tracking-widest transition-all">Close Details</button>
                 </div>
              </div>
           </div>
        </div>
      )}

    </div>
  );
}

export default UgeacPredictor;
