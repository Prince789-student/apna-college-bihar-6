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
  const [choices, setChoices] = useState([]); // Array to hold choice filling preferences
  
  const [hasPredicted, setHasPredicted] = useState(false);
  const [results, setResults] = useState({
     all: [],
     smartChoices: [],
     calculatedRank: 0,
     mockAllotment: null,
     mockDiscussions: []
  });
  const [selectedCollege, setSelectedCollege] = useState(null);

  // Manual Mapping to match Screenshot Terminology
  const branchMapping = {
    "Computer Science & Engineering": "Computer Science (CSE)",
    "Electronics & Communication": "Electronics (ECE)",
    "Electrical & Electronics (EEE)": "Electrical & Electronics (EEE)",
    "Electrical Engineering": "Electrical (EE)",
    "Mechanical Engineering": "Mechanical (ME)",
    "Civil Engineering": "Civil (CE)",
    "Information Technology": "Information Technology (IT)",
    "CSE (AI & ML)": "CSE (AI & Machine Learning)",
    "Aeronautical Engineering": "Aeronautical (AE)",
    "Robotics and Automation": "Robotics & Automation",
    "VLSI Design": "VLSI Design & Technology",
    "Chemical Engineering": "Chemical Engineering",
    "Mining Engineering": "Mining Engineering",
    "Fire Technology & Safety": "Fire Tech & Safety",
    "3D Animation": "3D Animation & VFX",
    "Food Processing": "Food Processing & Tech",
    "Leather Technology": "Leather Technology"
  };

  // Grouped Branches based on Screenshot structure
  const branchGroups = {
    "Core Branches": [
      "Civil Engineering",
      "Mechanical Engineering",
      "Electrical Engineering",
      "Electrical & Electronics (EEE)",
    ],
    "Computer Science & IT": [
      "Computer Science & Engineering",
      "Information Technology",
      "CSE (AI & ML)",
    ],
    "Electronics & High-Tech": [
      "Electronics & Communication",
      "VLSI Design",
      "Robotics and Automation",
    ],
    "Industrial & Specialized": [
      "Chemical Engineering",
      "Mining Engineering",
      "Fire Technology & Safety",
      "Aeronautical Engineering",
      "Food Processing",
      "3D Animation",
      "Leather Technology"
    ],
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
    // Preserve exact ranking configuration and order to keep MIT above BCE
    return colleges;
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

  const handleAddChoice = () => {
    if (preferredCollege === 'All' || preferredBranch === 'All') {
       alert("Please select a specific College and Branch to add to your Preference List.");
       return;
    }
    const exists = choices.find(c => c.collegeId == preferredCollege && c.branch === preferredBranch);
    if (!exists) {
       const collegeInfo = colleges.find(c => c.id == preferredCollege);
       setChoices([...choices, { collegeId: preferredCollege, branch: preferredBranch, collegeName: collegeInfo.name }]);
    }
  };

  const removeChoice = (index) => {
    const newChoices = [...choices];
    newChoices.splice(index, 1);
    setChoices(newChoices);
  };


  const calculateResults = () => {
    if (!rank && !ugeacInput) return alert('Please enter rank info');
    const ugeacRank = ugeacInput ? parseInt(ugeacInput) : estimateUgeacRank(parseInt(rank));

    const eligibleCategories = ['UR'];
    if (category !== 'UR') eligibleCategories.push(category);
    if (gender === 'Female' && !eligibleCategories.includes('RCG')) eligibleCategories.push('RCG');

    const seen = new Map();

    data2025.forEach(cut25 => {
      // General filtering ONLY applies if choices are empty, otherwise process ALL for simulation
      if (choices.length === 0) {
          if (preferredBranch !== 'All' && cut25.branch !== preferredBranch) return;
          if (preferredCollege !== 'All' && cut25.collegeId !== parseInt(preferredCollege)) return;
      }
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

    let mockAllotment = null;
    let mockDiscussions = [];
    
    // Simulate Choice Filling (Mock Counselling Algorithm)
    if (choices.length > 0) {
       for (let i = 0; i < choices.length; i++) {
          const ch = choices[i];
          const entry = allRes.find(r => r.college.id == ch.collegeId && r.branch === ch.branch);
          
          if (entry && (entry.chance === 'High' || entry.chance === 'Medium')) {
             if (!mockAllotment) {
                 mockAllotment = { choice: ch, choiceNumber: i + 1, entry };
             }
             mockDiscussions.push({ choiceNumber: i + 1, status: entry.chance, entry, choice: ch });
          } else {
             mockDiscussions.push({ choiceNumber: i + 1, status: 'No Chance', entry: null, choice: ch });
          }
       }
    }

    setResults({
      all: allRes,
      smartChoices: allRes.slice(0, 10),
      calculatedRank: ugeacRank,
      mockAllotment,
      mockDiscussions
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
               <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-2">College Preference</label>
               <select value={preferredCollege} onChange={e => setPreferredCollege(e.target.value)} className="w-full bg-slate-50 border-2 border-transparent focus:border-blue-500 rounded-3xl p-6 text-[10px] font-[1000] outline-none transition-all uppercase appearance-none cursor-pointer">
                  <option value="All">All 38 Colleges</option>
                  {sortedColleges.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
               </select>
            </div>
            <div className="space-y-3 lg:col-span-2">
               <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-2">Branch Preference</label>
               <select value={preferredBranch} onChange={e => setPreferredBranch(e.target.value)} className="w-full bg-slate-50 border-2 border-transparent focus:border-blue-500 rounded-3xl p-6 text-[11px] font-[1000] outline-none transition-all uppercase appearance-none cursor-pointer">
                  <option value="All">Any Branch (Select For List)</option>
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
            <div className="space-y-3 lg:col-span-1 flex items-end">
               <button onClick={handleAddChoice} className="w-full h-[72px] bg-indigo-600 hover:bg-slate-900 text-white rounded-3xl font-[1000] text-sm uppercase tracking-widest shadow-xl shadow-indigo-900/20 active:scale-95 transition-all flex items-center justify-center gap-2">
                 + Add To Choice List
               </button>
            </div>
         </div>

         {/* Choice Filling List Display */}
         {choices.length > 0 && (
           <div className="bg-slate-50 border-2 border-dashed border-slate-300 rounded-3xl p-8 space-y-4">
              <div className="flex items-center justify-between">
                 <h3 className="text-xs font-black text-slate-500 uppercase tracking-widest">Your Preference List (Mock Counselling)</h3>
                 <span className="bg-indigo-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase">{choices.length} Choices Added</span>
              </div>
              <div className="flex flex-col gap-2">
                 {choices.map((choice, i) => (
                    <div key={i} className="flex items-center justify-between bg-white px-6 py-4 rounded-2xl shadow-sm border border-slate-200">
                       <div className="flex items-center gap-4">
                          <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-black text-xs">{i+1}</div>
                          <div>
                             <p className="text-sm font-[1000] text-slate-800 uppercase tracking-tighter">{choice.collegeName}</p>
                             <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{branchMapping[choice.branch] || choice.branch}</p>
                          </div>
                       </div>
                       <button onClick={() => removeChoice(i)} className="text-red-500 font-bold text-xs uppercase hover:underline">Remove</button>
                    </div>
                 ))}
              </div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-2">The simulator validates choices in this strict order to determine your final allotted seat.</p>
           </div>
         )}

         <button onClick={calculateResults} className="w-full py-8 bg-blue-600 hover:bg-black text-white rounded-[2.5rem] font-[1000] text-xl uppercase tracking-[0.3em] shadow-2xl shadow-blue-900/40 active:scale-95 transition-all">Analyze Predictor Results</button>
      </div>

      {hasPredicted && (
        <div className="space-y-16 animate-in slide-in-from-bottom-20 duration-1000">
           
           {/* Choice Filling Results (Discussion) */}
           {choices.length > 0 && (
             <div className="bg-gradient-to-br from-indigo-950 to-slate-900 p-12 rounded-[4.5rem] shadow-2xl space-y-10 border border-indigo-500/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-10 pointer-events-none">
                  <Building2 size={200} />
                </div>
                <div className="relative z-10">
                   <h2 className="text-3xl lg:text-5xl font-[1000] text-white tracking-tighter mb-4">Counselling Simulation</h2>
                   <p className="text-indigo-200 font-medium text-lg leading-relaxed max-w-2xl">
                     Based on your rank of <strong className="text-white bg-indigo-500/30 px-2 py-1 rounded">{results.calculatedRank}</strong> and category <strong className="text-white bg-indigo-500/30 px-2 py-1 rounded">{category}</strong>, here is a detailed breakdown of your preference list.
                   </p>
                </div>

                {results.mockAllotment ? (
                   <div className="bg-emerald-500/10 border border-emerald-500/30 p-8 rounded-[2.5rem] relative z-10 flex flex-col md:flex-row items-center gap-8">
                      <div className="w-20 h-20 bg-emerald-500 rounded-[2rem] flex items-center justify-center text-white shrink-0 shadow-xl shadow-emerald-900/50">
                         <CheckCircle2 size={40} />
                      </div>
                      <div>
                         <span className="text-emerald-400 font-black text-[10px] uppercase tracking-widest bg-emerald-950 px-3 py-1 rounded-full border border-emerald-800">Choice #{results.mockAllotment.choiceNumber} Allotted</span>
                         <h3 className="text-3xl font-[1000] text-white mt-4">{results.mockAllotment.choice.collegeName}</h3>
                         <p className="text-emerald-100 font-bold text-lg">{branchMapping[results.mockAllotment.choice.branch] || results.mockAllotment.choice.branch}</p>
                      </div>
                   </div>
                ) : (
                   <div className="bg-red-500/10 border border-red-500/30 p-8 rounded-[2.5rem] relative z-10 flex flex-col md:flex-row items-center gap-8">
                      <div className="w-20 h-20 bg-red-500 rounded-[2rem] flex items-center justify-center text-white shrink-0 shadow-xl shadow-red-900/50">
                         <AlertTriangle size={40} />
                      </div>
                      <div>
                         <span className="text-red-400 font-black text-[10px] uppercase tracking-widest bg-red-950 px-3 py-1 rounded-full border border-red-800">No Allotment</span>
                         <h3 className="text-3xl font-[1000] text-white mt-4">Rank Not Sufficient</h3>
                         <p className="text-red-200 font-bold text-lg">Your rank is outside the estimated cutoff for all filled choices. Please add more colleges.</p>
                      </div>
                   </div>
                )}

                <div className="relative z-10 space-y-4 pt-6">
                   <h4 className="text-indigo-300 font-black text-[10px] uppercase tracking-widest">Preference Breakdown:</h4>
                   {results.mockDiscussions.map((d, i) => (
                      <div key={i} className={`flex items-center justify-between p-6 rounded-3xl border ${d.status === 'High' ? 'bg-emerald-500/5 border-emerald-500/20' : d.status === 'Medium' ? 'bg-amber-500/5 border-amber-500/20' : 'bg-slate-800/50 border-slate-700/50'} backdrop-blur-md`}>
                         <div>
                            <span className="text-slate-400 font-black text-[9px] uppercase tracking-widest">Choice {d.choiceNumber}</span>
                            <p className="text-white font-[1000] text-lg uppercase tracking-tighter mt-1">{d.choice.collegeName}</p>
                            <p className="text-slate-300 text-xs font-bold">{branchMapping[d.choice.branch] || d.choice.branch}</p>
                         </div>
                         <div className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest ${d.status === 'High' ? 'bg-emerald-500/20 text-emerald-400' : d.status === 'Medium' ? 'bg-amber-500/20 text-amber-400' : 'bg-slate-700 text-slate-400'}`}>
                            {d.status}
                         </div>
                      </div>
                   ))}
                </div>
             </div>
           )}

           {/* Smart List (General Recommendations) */}
           {results.smartChoices.length > 0 && choices.length === 0 && (
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
           )}

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
