import React, { useState, useMemo } from 'react';
import { colleges, data2024, data2025 } from '../UgeacData';
import { Send, MapPin, ExternalLink, ShieldCheck, AlertTriangle, GraduationCap, Info, ChevronDown, CheckCircle2, Building2, Wifi, BookOpen } from 'lucide-react';

function UgeacPredictor() {
  const [rank, setRank] = useState('');
  const [ugeacInput, setUgeacInput] = useState('');
  const [category, setCategory] = useState('UR');
  const [gender, setGender] = useState('Male');
  const [preferredBranch, setPreferredBranch] = useState('All');
  const [preferredCollege, setPreferredCollege] = useState('All');
  
  const [hasPredicted, setHasPredicted] = useState(false);
  const [results, setResults] = useState({
     all: [],
     smartChoices: [],
     calculatedRank: 0
  });
  const [selectedCollege, setSelectedCollege] = useState(null);

  // Dynamic Extractors
  const dynamicBranches = useMemo(() => {
    const branches = new Set();
    data2024.forEach(d => branches.add(d.branch));
    data2025.forEach(d => branches.add(d.branch));
    return Array.from(branches).sort();
  }, []);

  const sortedColleges = useMemo(() => {
    return [...colleges].sort((a,b) => a.name.localeCompare(b.name));
  }, []);

  const estimateUgeacRank = (jeeRank) => {
    const r = parseInt(jeeRank);
    if (!r) return 0;
    if (r < 10000) return 1; 
    if (r < 45000) return Math.floor((r - 10000) * 0.004) + 1;
    return Math.floor((r - 45000) * 0.038) + 142;
  };

  const getEstimatedCategoryRank = (urRank, cat) => {
    const r = parseInt(urRank);
    const ratios = { 'BC': 0.32, 'EBC': 0.38, 'SC': 0.18, 'ST': 0.01, 'EWS': 0.15, 'RCG': 0.40 };
    return Math.floor(r * (ratios[cat] || 1));
  };

  const calculateResults = () => {
    if (!rank && !ugeacInput) return alert('Please enter rank info');
    const ugeacRank = ugeacInput ? parseInt(ugeacInput) : estimateUgeacRank(parseInt(rank));

    const eligibleCategories = ['UR'];
    if (category !== 'UR') eligibleCategories.push(category);
    if (gender === 'Female' && !eligibleCategories.includes('RCG')) eligibleCategories.push('RCG');

    const seen = new Map();

    data2025.forEach(cut25 => {
      // Multiple Filters: Branch + College
      if (preferredBranch !== 'All' && cut25.branch !== preferredBranch) return;
      if (preferredCollege !== 'All' && cut25.collegeId !== parseInt(preferredCollege)) return;
      
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
      smartChoices: allRes.slice(0, 12),
      calculatedRank: ugeacRank
    });
    setHasPredicted(true);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-12 py-10 px-4 animate-in fade-in duration-500 font-sans">
      
      {/* Header */}
      <div className="bg-white p-14 rounded-[4.5rem] border border-slate-200 shadow-2xl space-y-12">
         <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <h1 className="text-6xl md:text-7xl font-[1000] text-slate-800 tracking-tighter uppercase whitespace-nowrap">UGEAC <span className="text-blue-600">COUNSELLING</span></h1>
            <a href="https://bceceboard.bihar.gov.in" target="_blank" rel="noreferrer" className="px-10 py-5 bg-slate-50 border-2 border-slate-200 rounded-[2rem] font-black text-xs uppercase tracking-widest flex items-center gap-3 hover:bg-black hover:text-white transition-all">Portal <ExternalLink size={18}/></a>
         </div>

         {/* Filter Grid - 2 Rows for better spacing */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-3">
               <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-2">JEE Main Rank (CRL)</label>
               <input type="number" placeholder="CRL Rank..." value={rank} onChange={e => setRank(e.target.value)} className="w-full bg-slate-50 border-2 border-transparent focus:border-blue-500 rounded-3xl p-6 text-xl font-[1000] outline-none transition-all placeholder:text-slate-200" />
            </div>
            <div className="space-y-3 p-2 bg-blue-50/50 rounded-[2.5rem] border border-blue-100">
               <label className="text-[10px] font-black text-blue-600 uppercase tracking-widest pl-2 block text-center">UGEAC State Rank</label>
               <input type="number" placeholder="State Rank..." value={ugeacInput} onChange={e => setUgeacInput(e.target.value)} className="w-full bg-white border-2 border-transparent focus:border-blue-600 rounded-2xl p-6 text-xl font-[1000] outline-none transition-all placeholder:text-blue-100 shadow-inner" />
            </div>
            <div className="space-y-3">
               <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-2">Category</label>
               <select value={category} onChange={e => setCategory(e.target.value)} className="w-full bg-slate-50 border-2 border-transparent focus:border-blue-500 rounded-3xl p-6 text-xs font-[1000] outline-none transition-all uppercase appearance-none">
                  <option value="UR">UR (General)</option><option value="EBC">EBC</option><option value="BC">BC</option><option value="SC">SC</option><option value="EWS">EWS</option>
               </select>
            </div>
            
            <div className="space-y-3 lg:col-span-1">
               <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-2">Preferred College</label>
               <select value={preferredCollege} onChange={e => setPreferredCollege(e.target.value)} className="w-full bg-slate-50 border-2 border-transparent focus:border-blue-500 rounded-3xl p-6 text-[10px] font-[1000] outline-none transition-all uppercase appearance-none">
                  <option value="All">All 38 Colleges</option>
                  {sortedColleges.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
               </select>
            </div>
            <div className="space-y-3 lg:col-span-2">
               <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-2">Engineering Branch</label>
               <select value={preferredBranch} onChange={e => setPreferredBranch(e.target.value)} className="w-full bg-slate-50 border-2 border-transparent focus:border-blue-500 rounded-3xl p-6 text-[10px] font-[1000] outline-none transition-all uppercase appearance-none">
                  <option value="All">Show All Branches</option>
                  {dynamicBranches.map(b => <option key={b} value={b}>{b}</option>)}
               </select>
            </div>
         </div>

         <button onClick={calculateResults} className="w-full py-8 bg-blue-600 hover:bg-emerald-600 text-white rounded-[2.5rem] font-[1000] text-xl uppercase tracking-[0.3em] shadow-2xl active:scale-95 transition-all">Analyze Predictor Results</button>
      </div>

      {hasPredicted && (
        <div className="space-y-16 animate-in slide-in-from-bottom-20 duration-1000">
           
           {/* CHOICE LIST */}
           <div className="bg-white p-12 rounded-[4.5rem] border border-slate-200 shadow-2xl space-y-10">
              <div className="flex items-center gap-4">
                 <div className="w-14 h-14 bg-emerald-600 text-white rounded-3xl flex items-center justify-center"><CheckCircle2 size={28}/></div>
                 <h2 className="text-2xl font-[1000] text-slate-800 tracking-tight">Smart Choice Filling List (Auto-Generated)</h2>
              </div>
              
              <div className="grid gap-5">
                 {results.smartChoices.map((r, i) => (
                    <div key={i} className="flex flex-col md:flex-row md:items-center justify-between p-8 bg-slate-50 border border-slate-200 rounded-[2.5rem] hover:border-blue-600 hover:bg-white transition-all group lg:pr-12">
                       <div className="flex items-center gap-8">
                          <div className="w-16 h-16 bg-blue-600 text-white rounded-[2rem] flex items-center justify-center font-[1000] text-2xl shrink-0 group-hover:scale-110 transition-transform">{i+1}</div>
                          <div>
                             <p className="text-xl md:text-2xl font-[1000] text-slate-800 uppercase tracking-tighter group-hover:text-blue-600 transition-colors">{r.college.name}</p>
                             <p className="text-xs font-black text-slate-400 uppercase tracking-widest mt-2">{r.branch}</p>
                          </div>
                       </div>
                       <div className={`mt-6 md:mt-0 px-10 py-3 rounded-full text-xs font-[1000] uppercase tracking-widest ${r.chance === 'High' ? 'bg-emerald-600 text-white' : 'bg-amber-500 text-white'}`}>
                          {r.chance} Probability
                       </div>
                    </div>
                 ))}
              </div>
           </div>

           {/* DATA TABLE */}
           <div className="bg-white rounded-[4.5rem] border border-slate-200 shadow-2xl overflow-hidden">
              <div className="p-10 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
                 <h2 className="text-xl font-[1000] text-slate-800 tracking-tight uppercase">Detailed Cutoff Comparison</h2>
                 <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest bg-blue-100 px-4 py-2 rounded-full">Results: {results.all.length}</span>
              </div>
              <div className="overflow-x-auto">
                 <table className="w-full text-left border-collapse">
                    <thead className="bg-[#f8fafc] border-b border-slate-200">
                       <tr>
                          <th className="px-12 py-8 text-[10px] font-[1000] text-slate-400 uppercase tracking-widest">College</th>
                          <th className="px-12 py-8 text-[10px] font-[1000] text-slate-400 uppercase tracking-widest">Branch</th>
                          <th className="px-8 py-8 text-[10px] font-[1000] text-slate-400 uppercase tracking-widest text-center border-l border-slate-100">2024 Cutoff</th>
                          <th className="px-8 py-8 text-[10px] font-[1000] text-slate-400 uppercase tracking-widest text-center">2025 Cutoff</th>
                          <th className="px-12 py-8 text-[10px] font-[1000] text-slate-400 uppercase tracking-widest text-center">Chance</th>
                          <th className="px-12 py-8 text-[10px] font-[1000] text-slate-400 uppercase tracking-widest text-right">Info</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                       {results.all.map((r, i) => (
                         <tr key={i} className="hover:bg-blue-50/20 transition-all group">
                            <td className="px-12 py-10">
                               <p className="text-lg font-[1000] text-slate-800 uppercase tracking-tight">{r.college.name}</p>
                               <p className="text-[10px] font-bold text-slate-400 uppercase mt-1 tracking-widest"><MapPin size={10} className="inline mr-1"/> {r.college.location}</p>
                            </td>
                            <td className="px-12 py-10 text-xs font-black text-slate-500 uppercase tracking-wider">{r.branch}</td>
                            <td className="px-8 py-10 text-center text-sm font-black text-slate-400 border-l border-slate-50">{r.cutoff24}</td>
                            <td className="px-8 py-10 text-center text-lg font-[1000] text-blue-600 bg-blue-50/50">{r.cutoff25}</td>
                            <td className="px-12 py-10 text-center">
                               <span className={`px-5 py-2 rounded-full text-[10px] font-[1000] uppercase tracking-widest ${r.chance === 'High' ? 'bg-emerald-600 text-white' : 'bg-red-500 text-white'}`}>{r.chance}</span>
                            </td>
                            <td className="px-12 py-10 text-right">
                               <button onClick={() => setSelectedCollege(r.college)} className="p-4 bg-white border-2 border-slate-200 rounded-2xl text-blue-600 hover:border-blue-600 transition-all shadow-lg active:scale-90"><Info size={24}/></button>
                            </td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </div>
        </div>
      )}

      {/* MODAL */}
      {selectedCollege && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/60 backdrop-blur-xl animate-in fade-in duration-300">
           <div className="w-full max-w-2xl bg-white rounded-[5rem] p-12 md:p-20 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>
              <div className="relative z-10 space-y-12">
                 <div className="flex flex-col items-center text-center space-y-8">
                    <div className="w-24 h-24 bg-blue-600 text-white rounded-[2rem] flex items-center justify-center shadow-2xl"><Building2 size={48}/></div>
                    <div className="space-y-3">
                       <h2 className="text-4xl md:text-5xl font-[1000] text-slate-900 uppercase tracking-tighter leading-none">{selectedCollege.name}</h2>
                       <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.6em] mt-4">{selectedCollege.location} • Established {selectedCollege.estd}</p>
                    </div>
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-10 bg-slate-50 border-2 border-slate-100 rounded-[3rem] space-y-4">
                       <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-200 pb-2">Infrastructure</h4>
                       <p className="text-sm font-black text-slate-700 flex items-center gap-4"><Building2 size={20} className="text-blue-600"/> {selectedCollege.labs}</p>
                       <p className="text-sm font-black text-slate-700 flex items-center gap-4"><Wifi size={20} className="text-emerald-500"/> {selectedCollege.wifi}</p>
                       <p className="text-sm font-black text-slate-700 flex items-center gap-4"><BookOpen size={20} className="text-orange-500"/> Digital Hub</p>
                    </div>
                    <div className="p-10 bg-slate-50 border-2 border-slate-100 rounded-[3rem] space-y-4">
                       <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-200 pb-2">Placement</h4>
                       <p className="text-3xl font-[1000] text-slate-900">₹{selectedCollege.placement?.avg}</p>
                       <p className="text-xs font-black text-slate-400 uppercase">Average Salary</p>
                       <p className="text-md font-black text-emerald-600 mt-2 italic">{selectedCollege.placement?.highest} Highest</p>
                    </div>
                 </div>
                 <div className="grid grid-cols-1 gap-5 pt-6">
                    <a href={selectedCollege.website} target="_blank" rel="noreferrer" className="w-full py-8 bg-black hover:bg-blue-600 text-white rounded-[3rem] font-[1000] text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-4 shadow-2xl transition-all">Official Portal <ExternalLink size={20}/></a>
                    <button onClick={() => setSelectedCollege(null)} className="w-full py-2 text-slate-400 hover:text-slate-900 font-black text-[10px] uppercase tracking-widest transition-all">Return to Predictor</button>
                 </div>
              </div>
           </div>
        </div>
      )}
    </div>
  );
}

export default UgeacPredictor;
