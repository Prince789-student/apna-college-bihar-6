import React, { useState, useMemo } from 'react';
import { colleges, data2024, data2025, allUgeacBranches } from '../UgeacData';
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

  // Manual Mapping to match Screenshot Terminology
  const branchMapping = {
    "Computer Science & Engineering": "CSE (Core)",
    "Electronics & Communication": "ECE",
    "Electrical & Electronics (EEE)": "EEE",
    "Internet of Things (IoT)": "CSE (IoT)",
    "CSE (IOT & Cyber Security)": "CSE (Cyber Security)",
    "Agriculture Engineering": "Agriculture Engineering",
    "Bio-Technology": "Bio-Technology",
    "Food Processing & Preservation": "Food Processing"
  };

  // Grouped Branches based on Screenshot structure
  const branchGroups = {
    "Core Branches": [
      "Computer Science & Engineering", "Civil Engineering", "Mechanical Engineering", 
      "Electrical Engineering", "Electronics & Communication", "Electrical & Electronics (EEE)", 
      "Information Technology"
    ],
    "CSE Specializations": [
      "CSE (AI & ML)", "CSE (Data Science)", "CSE (Cyber Security)", "CSE (IoT)", 
      "Internet of Things (IoT)", "CSE (IOT & Cyber Security)", "CSE (IoT)"
    ],
    "Emerging & Other Branches": [
      "Aeronautical Engineering", "Robotics & Automation", "Robotics and Automation", 
      "Mining Engineering", "Chemical Engineering", "Fire Technology & Safety", 
      "Leather Technology", "VLSI Design & Tech", "VLSI Design", "Food Processing & Preservation", 
      "Food Processing", "3D Animation & Graphics", "3D Animation", "Audio Engineering", 
      "Agriculture Engineering", "Bioinformatics", "Bio-Technology", "Textile Engineering"
    ]
  };

  // Ensure ALL branches from database are in the groups
  const categorizedBranchList = useMemo(() => {
    const used = new Set();
    const result = {};

    Object.entries(branchGroups).forEach(([groupName, branches]) => {
      result[groupName] = allUgeacBranches.filter(b => {
        if (used.has(b)) return false;
        if (branches.includes(b)) {
           used.add(b);
           return true;
        }
        return false;
      });
    });

    // Any leftovers go to Emerging
    const leftovers = allUgeacBranches.filter(b => !used.has(b));
    if (leftovers.length > 0) {
      result["Emerging & Other Branches"] = [...(result["Emerging & Other Branches"] || []), ...leftovers];
    }

    return result;
  }, [allUgeacBranches]);

  const sortedColleges = useMemo(() => {
    // Sort by Tier (1 is best) then by Name
    return [...colleges].sort((a, b) => {
      if (a.tier !== b.tier) return a.tier - b.tier;
      return a.name.localeCompare(b.name);
    });
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
        cat: cut25.category,
        myCompRank: compRank 
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
      smartChoices: allRes.slice(0, 10),
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
            <a href="https://bceceboard.bihar.gov.in" target="_blank" rel="noreferrer" className="px-10 py-5 bg-slate-50 border-2 border-slate-200 rounded-[2rem] font-black text-xs uppercase tracking-widest flex items-center gap-3 hover:bg-black hover:text-white transition-all">Official Portal <ExternalLink size={18}/></a>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-3">
               <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-2">JEE Main Rank (CRL)</label>
               <input type="number" placeholder="Enter CRL Rank..." value={rank} onChange={e => setRank(e.target.value)} className="w-full bg-slate-50 border-2 border-transparent focus:border-blue-500 rounded-3xl p-6 text-xl font-[1000] outline-none transition-all placeholder:text-slate-200" />
            </div>
            <div className="space-y-3 p-2 bg-blue-50/50 rounded-[2.5rem] border border-blue-100">
               <label className="text-[10px] font-black text-blue-600 uppercase tracking-widest pl-2 block text-center">UGEAC State Rank</label>
               <input type="number" placeholder="Optional Rank..." value={ugeacInput} onChange={e => setUgeacInput(e.target.value)} className="w-full bg-white border-2 border-transparent focus:border-blue-600 rounded-2xl p-6 text-xl font-[1000] outline-none transition-all placeholder:text-blue-100 shadow-inner" />
            </div>
             <div className="space-y-3">
               <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-2">Category</label>
               <select value={category} onChange={e => setCategory(e.target.value)} className="w-full bg-slate-50 border-2 border-transparent focus:border-blue-500 rounded-3xl p-6 text-sm font-[1000] outline-none transition-all uppercase appearance-none cursor-pointer">
                  <option value="UR">UR (General)</option><option value="EBC">EBC</option><option value="BC">BC</option><option value="SC">SC</option><option value="EWS">EWS</option>
               </select>
            </div>

            <div className="space-y-3">
               <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-2">Gender</label>
               <select value={gender} onChange={e => setGender(e.target.value)} className="w-full bg-slate-50 border-2 border-transparent focus:border-blue-500 rounded-3xl p-6 text-sm font-[1000] outline-none transition-all uppercase appearance-none cursor-pointer">
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
               </select>
            </div>
            
            <div className="space-y-3 lg:col-span-1">
               <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-2">Preferred College</label>
               <select value={preferredCollege} onChange={e => setPreferredCollege(e.target.value)} className="w-full bg-slate-50 border-2 border-transparent focus:border-blue-500 rounded-3xl p-6 text-[10px] font-[1000] outline-none transition-all uppercase appearance-none cursor-pointer">
                  <option value="All">All 38 Colleges</option>
                  {sortedColleges.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
               </select>
            </div>
            <div className="space-y-3 lg:col-span-3">
               <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-2">Branch Search</label>
               <select value={preferredBranch} onChange={e => setPreferredBranch(e.target.value)} className="w-full bg-slate-50 border-2 border-transparent focus:border-blue-500 rounded-3xl p-6 text-[11px] font-[1000] outline-none transition-all uppercase appearance-none cursor-pointer">
                  <option value="All">Any Branch (Show All)</option>
                  {Object.entries(categorizedBranchList).map(([group, branches]) => (
                    <optgroup key={group} label={group} className="text-blue-600 font-black tracking-widest bg-blue-50 my-2">
                      {branches.map(b => (
                        <option key={b} value={b} className="text-slate-900 font-bold">
                          {branchMapping[b] || b}
                        </option>
                      ))}
                    </optgroup>
                  ))}
               </select>
            </div>
         </div>

         <button onClick={calculateResults} className="w-full py-8 bg-blue-600 hover:bg-black text-white rounded-[2.5rem] font-[1000] text-xl uppercase tracking-[0.3em] shadow-2xl shadow-blue-900/40 active:scale-95 transition-all">Analyze Predictor Results</button>
      </div>

      {hasPredicted && (
        <div className="space-y-16 animate-in slide-in-from-bottom-20 duration-1000">
           
           {/* Smart List */}
           <div className="bg-white p-12 rounded-[4.5rem] border border-slate-200 shadow-2xl space-y-10">
              <div className="flex items-center gap-4">
                 <div className="w-14 h-14 bg-emerald-600 text-white rounded-3xl flex items-center justify-center"><CheckCircle2 size={28}/></div>
                 <h2 className="text-2xl font-[1000] text-slate-800 tracking-tight">Smart Choice Filling List (Auto-Generated)</h2>
              </div>
              
              <div className="grid gap-5">
                 {results.smartChoices.map((r, i) => (
                    <div key={i} className="flex flex-col md:flex-row md:items-center justify-between p-8 bg-slate-50 border border-slate-200 rounded-[2.5rem] hover:border-blue-600 hover:bg-white transition-all group lg:pr-12 shadow-sm">
                       <div className="flex items-center gap-8">
                          <div className="w-16 h-16 bg-blue-600 text-white rounded-[2rem] flex items-center justify-center font-[1000] text-2xl shrink-0 group-hover:scale-110 transition-transform">{i+1}</div>
                          <div>
                             <p className="text-xl md:text-2xl font-[1000] text-slate-800 uppercase tracking-tighter">{r.college.name}</p>
                             <p className="text-xs font-black text-slate-400 uppercase tracking-widest mt-2">{r.branch}</p>
                          </div>
                       </div>
                       <div className={`mt-6 md:mt-0 px-10 py-3 rounded-full text-xs font-[1000] uppercase tracking-widest shadow-xl ${r.chance === 'High' ? 'bg-emerald-600 text-white' : 'bg-amber-500 text-white'}`}>
                          {r.chance} Probability
                       </div>
                    </div>
                 ))}
              </div>
           </div>

           {/* Results Table (MATCHING SCREENSHOT) */}
           <div className="bg-white rounded-[4.5rem] border border-slate-200 shadow-2xl overflow-hidden">
              <div className="p-10 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
                 <h2 className="text-xl font-[1000] text-slate-800 tracking-tight uppercase">Full Comparison Matrix</h2>
                 <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest bg-blue-100 px-4 py-2 rounded-full">Report Generated</span>
              </div>
              <div className="overflow-x-auto">
                 <table className="w-full text-left border-collapse">
                    <thead className="bg-[#f8fafc] border-b border-slate-200">
                       <tr>
                          <th className="px-12 py-8 text-[11px] font-black text-slate-400 uppercase tracking-widest">College</th>
                          <th className="px-12 py-8 text-[11px] font-black text-slate-400 uppercase tracking-widest">Branch</th>
                          <th className="px-8 py-8 text-[11px] font-black text-slate-400 uppercase tracking-widest text-center border-l border-slate-100">2024 Cutoff</th>
                          <th className="px-8 py-8 text-[11px] font-black text-slate-400 uppercase tracking-widest text-center">2025 Cutoff</th>
                          <th className="px-12 py-8 text-[11px] font-black text-slate-400 uppercase tracking-widest text-center">Chance</th>
                          <th className="px-12 py-8 text-[11px] font-black text-slate-400 uppercase tracking-widest text-right">Action</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                       {results.all.map((r, i) => (
                         <tr key={i} className="hover:bg-blue-50/20 transition-all group">
                            <td className="px-12 py-10">
                               <p className="text-lg font-[1000] text-slate-800 uppercase tracking-tight">{r.college.name}</p>
                               <p className="text-[11px] font-bold text-slate-400 uppercase mt-1 italic">{r.college.location}</p>
                            </td>
                            <td className="px-12 py-10 text-xs font-black text-slate-500 uppercase tracking-widest group-hover:text-blue-600 transition-colors">{r.branch}</td>
                            <td className="px-8 py-10 text-center border-l border-slate-50">
                               <p className="text-sm font-black text-slate-900">{r.cutoff24}</p>
                               <p className="text-[9px] font-black text-slate-400 uppercase mt-1 tracking-widest">Your Rank: {r.myCompRank}</p>
                            </td>
                            <td className="px-8 py-10 text-center bg-blue-50/30">
                               <p className="text-lg font-[1000] text-blue-600">{r.cutoff25}</p>
                               <p className="text-[10px] font-[1000] text-blue-400 uppercase mt-0.5 tracking-tighter">Your Rank: {r.myCompRank}</p>
                            </td>
                            <td className="px-12 py-10 text-center">
                               <span className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest ${r.chance === 'High' ? 'bg-emerald-600 text-white' : 'bg-red-500 text-white'} shadow-lg`}>{r.chance}</span>
                            </td>
                            <td className="px-12 py-10 text-right">
                               <button onClick={() => setSelectedCollege(r.college)} className="px-6 py-3 bg-white border-2 border-slate-200 rounded-2xl text-[10px] font-[1000] text-slate-500 uppercase tracking-widest hover:border-blue-600 hover:text-blue-600 transition-all shadow-md">View Info</button>
                            </td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </div>
        </div>
      )}

      {/* COLLEGE CARD MODAL (MATCHING SCREENSHOT) */}
      {selectedCollege && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
           <div className="w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl relative animate-in zoom-in duration-300">
              
              {/* Header with Title and Close */}
              <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                 <h2 className="text-xl font-bold text-slate-800 tracking-tight">{selectedCollege.name}</h2>
                 <button onClick={() => setSelectedCollege(null)} className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400">
                    <AlertTriangle size={20} className="rotate-45" /> {/* Close Icon fallback */}
                 </button>
              </div>

              {/* Sub-header Meta */}
              <div className="px-6 py-4 flex items-center gap-6 text-[10px] font-bold text-slate-500 bg-slate-50/50 border-b border-slate-100">
                 <span className="flex items-center gap-1.5"><MapPin size={12} className="text-red-400"/> {selectedCollege.location}</span>
                 <span className="flex items-center gap-1.5"><Building2 size={12} className="text-blue-400"/> Estd: {selectedCollege.estd}</span>
                 <span className="flex items-center gap-1.5"><ShieldCheck size={12} className="text-amber-400"/> Tier: {selectedCollege.tier}</span>
              </div>

              <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
                 {/* Main Action Buttons */}
                 <div className="space-y-3">
                    <a href={selectedCollege.website} target="_blank" rel="noreferrer" className="w-full py-4 bg-[#2563eb] text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors">
                       <Wifi size={16} /> Visit Official Website
                    </a>
                    <a 
                       href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedCollege.name)}`} 
                       target="_blank" 
                       rel="noreferrer" 
                       className="w-full py-4 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold text-xs flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors"
                    >
                       <MapPin size={16} className="text-red-500" /> Get Directions
                    </a>
                 </div>

                 {/* Stats Grid */}
                 <div className="grid grid-cols-2 gap-3">
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                       <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Average Fees</p>
                       <p className="text-sm font-black text-slate-800">{selectedCollege.fees || "₹10,500 / year"}</p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                       <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Highest Package</p>
                       <p className="text-sm font-black text-slate-800">{selectedCollege.placement?.highest || "10 LPA"}</p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 col-span-2">
                       <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Avg. Placement</p>
                       <p className="text-sm font-black text-slate-800">{selectedCollege.placement?.avg || "5.2 LPA"}</p>
                    </div>
                 </div>

                 {/* Infrastructure Pills */}
                 <div className="space-y-3">
                    <h4 className="text-[11px] font-black text-slate-700 flex items-center gap-2"><Building2 size={14}/> Infrastructure & Facilities</h4>
                    <div className="grid grid-cols-2 gap-2">
                       <div className="px-4 py-2 bg-white border border-slate-100 rounded-lg text-[9px] font-bold text-slate-500 text-center">{selectedCollege.labs || "Standard Engineering Labs"}</div>
                       <div className="px-4 py-2 bg-white border border-slate-100 rounded-lg text-[9px] font-bold text-slate-500 text-center">Available</div>
                       <div className="px-4 py-2 bg-white border border-slate-100 rounded-lg text-[9px] font-bold text-slate-500 text-center">Hostel Facility: {selectedCollege.hostel || "Yes"}</div>
                       <div className="px-4 py-2 bg-white border border-slate-100 rounded-lg text-[9px] font-bold text-slate-500 text-center">Library: {selectedCollege.library || "Fully Digital"}</div>
                    </div>
                 </div>

                 {/* Pros & Cons Section */}
                 <div className="space-y-4 pt-4">
                    <div className="p-4 bg-emerald-50/50 rounded-xl border border-emerald-100">
                       <p className="text-[10px] font-black text-emerald-700 flex items-center gap-2 mb-1"><CheckCircle2 size={14}/> Pros</p>
                       <p className="text-[11px] font-bold text-slate-600">{selectedCollege.pros || "Low Tuition Fees (Govt Funded)"}</p>
                    </div>
                    <div className="p-4 bg-amber-50/50 rounded-xl border border-amber-100">
                       <p className="text-[10px] font-black text-amber-700 flex items-center gap-2 mb-1"><AlertTriangle size={14}/> Cons</p>
                       <p className="text-[11px] font-bold text-slate-600">{selectedCollege.cons || "Developing Placement Cell"}</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      )}
    </div>
  );
}

export default UgeacPredictor;
