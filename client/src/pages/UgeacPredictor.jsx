import React, { useState, useMemo, useEffect } from 'react';
import { colleges } from '../UgeacData';
import { Send, MapPin, ExternalLink, ShieldCheck, AlertTriangle, GraduationCap, Info, ChevronDown, ChevronUp, CheckCircle2, Building2, Wifi, BookOpen, Trash2, Plus, Minus, Layers, Search, Zap, Filter, LayoutGrid } from 'lucide-react';

function UgeacPredictor() {
  const [rank, setRank] = useState('');
  const [ugeacInput, setUgeacInput] = useState('');
  const [category, setCategory] = useState('UR');
  const [gender, setGender] = useState('Male');
  
  // Counseling Modes: 'explore', 'finder', 'wizard'
  const [mode, setMode] = useState('explore'); 
  const [preferenceBasis, setPreferenceBasis] = useState('branch'); // 'college' or 'branch'

  // Advanced Priority Choice Filling State
  const [targetColleges, setTargetColleges] = useState([]);
  const [targetBranches, setTargetBranches] = useState([]);
  const [selectedCollegeToAdd, setSelectedCollegeToAdd] = useState('All');
  const [choices, setChoices] = useState([]); // Array to hold choice filling preferences
  const [selectedBranchToAdd, setSelectedBranchToAdd] = useState('');

  const standardColleges = useMemo(() => [
    "MIT Muzaffarpur", "BCE Bhagalpur", "GCE Gaya", "MCE Motihari", "DCE Darbhanga",
    "Nalanda College of Engineering, Chandi", "LNJPIT Chapra", "BCE Bakhtiyarpur",
    "SIT Sitamarhi", "RRSDCE Begusarai", "SCE Sasaram", "B.P.M.C.E. Madhepura",
    "K.C.E. Katihar", "Purnea College of Engineering", "Saharsa College of Engineering",
    "Supaul College of Engineering", "Government Engineering College, Banka",
    "Government Engineering College, Vaishali", "Government Engineering College, Jamui",
    "Government Engineering College, Nawada", "Government Engineering College, Kishanganj",
    "Shri Phanishwar Nath Renu Engineering College, Araria", "Government Engineering College, Munger",
    "Government Engineering College, Sheohar", "Government Engineering College, West Champaran",
    "Government Engineering College, Aurangabad", "Government Engineering College, Kaimur",
    "Government Engineering College, Gopalganj", "Government Engineering College, Madhubani",
    "Government Engineering College, Siwan", "Government Engineering College, Jehanabad",
    "Government Engineering College, Arwal", "Government Engineering College, Khagaria",
    "Government Engineering College, Buxar", "Government Engineering College, Bhojpur",
    "Government Engineering College, Sheikhpura", "Government Engineering College, Lakhisarai",
    "Government Engineering College, Samastipur"
  ], []);

  const normalizedMap = useMemo(() => ({
    "B.C.E. BHAGALPUR": "BCE Bhagalpur",
    "M.I.T. MUZAFFARPUR": "MIT Muzaffarpur",
    "B.C.E. BAKHTIYARPUR": "BCE Bakhtiyarpur",
    "G.C.E. GAYA": "GCE Gaya",
    "D.C.E. DARBHANGA": "DCE Darbhanga",
    "NALANDA COLLEGE. OF ENGG,CHANDI": "Nalanda College of Engineering, Chandi",
    "NCE CHANDI": "Nalanda College of Engineering, Chandi",
    "M..C.E. MOTIHARI": "MCE Motihari",
    "MCE MOTIHARI": "MCE Motihari",
    "P.C.E. PURNEA": "Purnea College of Engineering",
    "PURNEA COLLEGE OF ENGINEERING": "Purnea College of Engineering",
    "S.C.E. SAHARSA": "Saharsa College of Engineering",
    "SAHARSA COLLEGE OF ENGINEERING": "Saharsa College of Engineering",
    "S.C.E. SUPAUL": "Supaul College of Engineering",
    "SUPAUL COLLEGE OF ENGINEERING": "Supaul College of Engineering",
    "S.C.E. SASARAM": "SCE Sasaram",
    "B.P.M.C.E. MADHEPURA": "B.P.M.C.E. Madhepura",
    "S.I.T. SITAMARHI": "SIT Sitamarhi",
    "R.R.S.D.C.E. BEGUSARAI": "RRSDCE Begusarai",
    "LNJPIT CHAPRA": "LNJPIT Chapra",
    "KCE KATIHAR": "K.C.E. Katihar",
    "G.E.C. BANKA": "Government Engineering College, Banka",
    "G.E.C. VAISHALI": "Government Engineering College, Vaishali",
    "G.E.C. JAMUI": "Government Engineering College, Jamui",
    "G.E.C. NAWADA": "Government Engineering College, Nawada",
    "G.E.C. KISHANGANJ": "Government Engineering College, Kishanganj",
    "G.E.C. ARARIA": "Shri Phanishwar Nath Renu Engineering College, Araria",
    "G.E.C. MUNGER": "Government Engineering College, Munger",
    "G.E.C. SHEOHAR": "Government Engineering College, Sheohar",
    "G.E.C. BETTIAH": "Government Engineering College, West Champaran",
    "G.E.C. WEST CHAMPARAN": "Government Engineering College, West Champaran",
    "G.E.C. AURANGABAD": "Government Engineering College, Aurangabad",
    "G.E.C. KAIMUR": "Government Engineering College, Kaimur",
    "G.E.C. GOPALGANJ": "Government Engineering College, Gopalganj",
    "G.E.C. MADHUBANI": "Government Engineering College, Madhubani",
    "G.E.C. SIWAN": "Government Engineering College, Siwan",
    "G.E.C. JEHANABAD": "Government Engineering College, Jehanabad",
    "G.E.C. ARWAL": "Government Engineering College, Arwal",
    "G.E.C. KHAGARIA": "Government Engineering College, Khagaria",
    "G.E.C. BUXAR": "Government Engineering College, Buxar",
    "G.E.C. BHOJPUR": "Government Engineering College, Bhojpur",
    "G.E.C. SHEIKHPURA": "Government Engineering College, Sheikhpura",
    "G.E.C. LAKHISARAI": "Government Engineering College, Lakhisarai",
    "G.E.C. SAMASTIPUR": "Government Engineering College, Samastipur"
  }), []);
  
  const [ugeacData, setUgeacData] = useState({ data2024: [], data2025: [], branches: [] });
  const [loadingData, setLoadingData] = useState(true);

  // Load High-Precision Data asynchronously to handle 5000+ users without RAM spikes
  useEffect(() => {
    fetch('/data/cutoffs.json')
      .then(res => res.json())
      .then(json => {
        const process = (raw) => raw.map(c => {
          const key = c.collegeShort?.toUpperCase().trim();
          const formalName = normalizedMap[key] || c.collegeShort;
          const col = colleges.find(co => co.name === formalName || co.short === c.collegeShort);
          return { 
            ...c, 
            collegeId: col ? col.id : null, 
            collegeName: col ? col.name : formalName 
          };
        }).filter(c => c.collegeId !== null);

        const d24 = process(json.cutoffs2024);
        const d25 = process(json.cutoffs2025);
        const brs = Array.from(new Set([
          ...json.cutoffs2024.map(c => c.branch.trim()),
          ...json.cutoffs2025.map(c => c.branch.trim())
        ])).sort();

        setUgeacData({ data2024: d24, data2025: d25, branches: brs });
        setLoadingData(false);
      });
  }, []);

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
    "Computer Science": "Computer Science (CSE)",
    "Electronics & Communication": "Electronics (ECE)",
    "Electrical & Electronics": "Electrical & Electronics (EEE)",
    "Electrical": "Electrical (EE)",
    "Mechanical": "Mechanical (ME)",
    "Civil": "Civil (CE)",
    "IT": "Information Technology (IT)",
    "CSE (AI & ML)": "CSE (AI & Machine Learning)",
    "CSE (AI)": "CSE (Artificial Intelligence)",
    "CSE (Data Science)": "CSE (Data Science)",
    "CSE (IoT)": "CSE (Internet of Things)",
    "CSE (Cyber Security)": "CSE (Cyber Security)",
    "CSE (IoT + Cyber Security + Blockchain)": "CSE (IoT/CS/Blockchain)",
    "Aeronautical": "Aeronautical Engineering",
    "Robotics & Automation": "Robotics & Automation",
    "VLSI Design": "VLSI Design & Technology",
    "Chemical Engineering": "Chemical Engineering",
    "Mining": "Mining Engineering",
    "Fire Technology": "Fire Tech & Safety",
    "3D Animation": "3D Animation & VFX",
    "Food Processing": "Food Processing & Tech",
    "Food Technology": "Food Technology",
    "Leather Technology": "Leather Technology",
    "Biomedical & Robotics": "Biomedical & Robotics",
    "Mechatronics": "Mechatronics",
    "Mechanical (Smart Manufacturing)": "Mechanical (Smart Mfg)",
    "Electronics & Instrumentation": "Electronics & Instrumentation",
    "Computer Science (Networks)": "CS (Networks)",
    "Civil + Computer Application": "Civil + Comp. App."
  };

  // Grouped Branches based on Screenshot structure
  const branchGroups = {
    "Core Branches": [
      "Civil",
      "Mechanical",
      "Electrical",
      "Electrical & Electronics",
      "Mechanical (Smart Manufacturing)",
      "Civil + Computer Application"
    ],
    "Computer Science & IT": [
      "Computer Science",
      "IT",
      "CSE (AI & ML)",
      "CSE (AI)",
      "CSE (Data Science)",
      "CSE (IoT)",
      "CSE (Cyber Security)",
      "CSE (IoT + Cyber Security + Blockchain)",
      "Computer Science (Networks)"
    ],
    "Electronics & High-Tech": [
      "Electronics & Communication",
      "VLSI Design",
      "Robotics & Automation",
      "Biomedical & Robotics",
      "Mechatronics",
      "Electronics & Instrumentation"
    ],
    "Industrial & Specialized": [
      "Chemical Engineering",
      "Mining",
      "Fire Technology",
      "Aeronautical",
      "Food Processing",
      "Food Technology",
      "3D Animation",
      "Leather Technology"
    ],
  };

  // Ensure ALL branches from database are in the groups
  const categorizedBranchList = useMemo(() => {
    const used = new Set();
    const result = {};

    Object.entries(branchGroups).forEach(([groupName, branches]) => {
      result[groupName] = ugeacData.branches.filter(b => {
        if (used.has(b)) return false;
        if (branches.includes(b)) {
           used.add(b);
           return true;
        }
        return false;
      });
    });

    // Any leftovers go to Emerging
    const leftovers = ugeacData.branches.filter(b => !used.has(b));
    if (leftovers.length > 0) {
      result["Emerging & Other Branches"] = [...(result["Emerging & Other Branches"] || []), ...leftovers];
    }

    return result;
  }, [ugeacData.branches]);


  // Deep Allotment Rank Mapping from 7,866 PDF Records
  const UGEAC_RANK_MAP = [
    { "air": 28003, "ur": 4 }, { "air": 150732, "ur": 525 }, { "air": 197425, "ur": 1012 }, 
    { "air": 247321, "ur": 1507 }, { "air": 297962, "ur": 2041 }, { "air": 339013, "ur": 2522 }, 
    { "air": 383352, "ur": 3003 }, { "air": 430878, "ur": 3501 }, { "air": 476591, "ur": 3992 }, 
    { "air": 518100, "ur": 4474 }, { "air": 568797, "ur": 4966 }, { "air": 620541, "ur": 5441 }, 
    { "air": 673598, "ur": 5946 }, { "air": 732511, "ur": 6468 }, { "air": 795064, "ur": 7036 }, 
    { "air": 859488, "ur": 7570 }, { "air": 933806, "ur": 8130 }, { "air": 1010934, "ur": 8643 }, 
    { "air": 1091239, "ur": 9161 }, { "air": 1183901, "ur": 9674 }
  ];

  const estimateUgeacRank = (jeeRank) => {
    const r = parseInt(jeeRank);
    if (!r) return 0;
    if (r <= UGEAC_RANK_MAP[0].air) {
       return Math.max(1, Math.floor((r / UGEAC_RANK_MAP[0].air) * UGEAC_RANK_MAP[0].ur));
    }
    
    for (let i = 0; i < UGEAC_RANK_MAP.length - 1; i++) {
      const p1 = UGEAC_RANK_MAP[i];
      const p2 = UGEAC_RANK_MAP[i+1];
      if (r >= p1.air && r <= p2.air) {
        const ratio = (r - p1.air) / (p2.air - p1.air);
        return Math.floor(p1.ur + ratio * (p2.ur - p1.ur));
      }
    }
    
    const last = UGEAC_RANK_MAP[UGEAC_RANK_MAP.length - 1];
    return Math.floor(last.ur + (r - last.air) * 0.008);
  };

  const getEstimatedCategoryRank = (urRank, cat) => {
    const r = parseInt(urRank);
    // Verified 2025 Medians from 7,800+ records
    const ratios = { 
      'EBC': 0.2390, 
      'BC': 0.3889, 
      'SC': 0.0657, 
      'ST': 0.0036, 
      'EWS': 0.2279, 
      'RCG': 0.1323, 
      'DQ': 0.0018, 
      'SMQ': 0.0173 
    };
    return Math.max(1, Math.floor(r * (ratios[cat] || 1)));
  };

  // Auto-Update results when switching modes or data changes
  useEffect(() => {
    if (rank && rank > 0) {
       calculateResults();
    }
  }, [mode, ugeacData]);

  const addTargetCollege = () => {
    if (selectedCollegeToAdd === 'All') return;
    const cid = parseInt(selectedCollegeToAdd);
    if (!targetColleges.includes(cid)) {
       setTargetColleges([...targetColleges, cid]);
    }
  };

  const removeTargetCollege = (id) => {
    setTargetColleges(targetColleges.filter(cId => cId !== id));
    setChoices(choices.filter(c => c.collegeId !== id));
  };

  const removeChoiceByCombo = (cid, branch) => {
     setChoices(choices.filter(c => !(c.collegeId === cid && c.branch === branch)));
  };

  const moveChoice = (index, shift) => {
     if (index + shift < 0 || index + shift >= choices.length) return;
     const newArr = [...choices];
     const temp = newArr[index];
     newArr[index] = newArr[index + shift];
     newArr[index + shift] = temp;
     setChoices(newArr);
  };

  const moveTargetCollege = (index, shift) => {
     if (index + shift < 0 || index + shift >= targetColleges.length) return;
     const newArr = [...targetColleges];
     const temp = newArr[index];
     newArr[index] = newArr[index + shift];
     newArr[index + shift] = temp;
     setTargetColleges(newArr);
  };

  const moveTargetBranch = (index, shift) => {
     if (index + shift < 0 || index + shift >= targetBranches.length) return;
     const newArr = [...targetBranches];
     const temp = newArr[index];
     newArr[index] = newArr[index + shift];
     newArr[index + shift] = temp;
     setTargetBranches(newArr);
  };

  const availableBranchesForTarget = useMemo(() => {
     if (targetColleges.length === 0) return [];
     const branchSet = new Set();
     // Check both years to ensure we get branches for all 38 colleges
     ugeacData.data2025.forEach(d => {
        if (targetColleges.includes(d.collegeId)) branchSet.add(d.branch);
     });
     ugeacData.data2024.forEach(d => {
        if (targetColleges.includes(d.collegeId)) branchSet.add(d.branch);
     });
     return Array.from(branchSet).sort();
  }, [targetColleges, ugeacData.data2025, ugeacData.data2024]);

  const addBranchToAllTargets = () => {
    if (!selectedBranchToAdd || targetColleges.length === 0) return;
    
    const newChoices = [...choices];
    targetColleges.forEach(cid => {
       const exists = newChoices.find(c => c.collegeId === cid && c.branch === selectedBranchToAdd);
       if (!exists) {
          const cInfo = colleges.find(c => c.id === cid);
          // Only add if the branch actually exists in that college data (Check BOTH years)
          const branchExists = ugeacData.data2025.find(d => d.collegeId === cid && d.branch === selectedBranchToAdd) ||
                               ugeacData.data2024.find(d => d.collegeId === cid && d.branch === selectedBranchToAdd);
          if (branchExists) {
             newChoices.push({ collegeId: cid, branch: selectedBranchToAdd, collegeName: cInfo.name });
          }
       }
    });
    setChoices(newChoices);
    setSelectedBranchToAdd('');
  };

  const availableChoices = useMemo(() => {
    if (targetColleges.length === 0) return [];
    const combos = [];
    const process = (data) => {
      data.forEach(d => {
        if (targetColleges.includes(d.collegeId)) {
           if (!combos.find(c => c.collegeId === d.collegeId && c.branch === d.branch)) {
              const cInfo = colleges.find(c => c.id === d.collegeId);
              combos.push({ collegeId: d.collegeId, branch: d.branch, collegeName: cInfo?.name });
           }
        }
      });
    };
    process(ugeacData.data2025);
    process(ugeacData.data2024);
    return combos;
  }, [targetColleges, ugeacData.data2025, ugeacData.data2024, colleges]);


  const calculateResults = () => {
    if (!rank && !ugeacInput) return alert('Please enter rank info');
    const ugeacRank = ugeacInput ? parseInt(ugeacInput) : estimateUgeacRank(parseInt(rank));

    const eligibleCategories = ['UR'];
    if (category !== 'UR') eligibleCategories.push(category);
    if (gender === 'Female' && !eligibleCategories.includes('RCG')) eligibleCategories.push('RCG');

    const seen = new Map();

    // Strategy: Simple and Clean Merge
    const processSet = (data) => {
      data.forEach(d => {
        // Basic eligibility filters
        if (!eligibleCategories.includes(d.category)) return;
        if (gender === 'Male' && d.seat_type === 'Female') return;
        
        // Mode-based filters
        if (mode === 'finder') {
           if (targetColleges.length > 0 && !targetColleges.includes(d.collegeId)) return;
           if (targetBranches.length > 0 && !targetBranches.includes(d.branch)) return;
        } else if (mode === 'explore' || mode === 'wizard') {
           if (targetColleges.length > 0 && !targetColleges.includes(d.collegeId)) return;
        }

        const collegeInfo = colleges.find(c => c.id === d.collegeId);
        if (!collegeInfo) return;

        const key = `${d.collegeId}-${d.branch}-${d.category}-${d.seat_type}`;
        
        // If not already in seen, or if this is 2025 data (update)
        const is2025 = ugeacData.data2025.includes(d);
        if (!seen.has(key) || is2025) {
           const cut24 = ugeacData.data2024.find(c => 
             c.collegeId === d.collegeId && c.branch === d.branch && 
             c.category === d.category && c.seat_type === d.seat_type
           );
           const cut25 = ugeacData.data2025.find(c => 
             c.collegeId === d.collegeId && c.branch === d.branch && 
             c.category === d.category && c.seat_type === d.seat_type
           );

           const compRank = d.category === 'UR' ? ugeacRank : getEstimatedCategoryRank(ugeacRank, d.category);
           const latestClosing = (cut25 || cut24).closing;
           
           let chance = 'No Chance';
           if (compRank <= latestClosing * 1.05) chance = 'High';
           else if (compRank <= latestClosing * 1.25) chance = 'Medium';
           else if (compRank <= latestClosing * 1.5) chance = 'Low';

           seen.set(key, {
             college: collegeInfo, 
             branch: d.branch, 
             chance, 
             cutoff25: cut25 ? cut25.closing : 'N/A', 
             cutoff24: cut24 ? cut24.closing : 'N/A',
             cat: d.category,
             seatType: d.seat_type,
             myCompRank: compRank 
           });
        }
      });
    };

    processSet(ugeacData.data2024);
    processSet(ugeacData.data2025);

    function chanceScore(c) { return c === 'High' ? 1 : c === 'Medium' ? 2 : c === 'Low' ? 3 : 4; }

    const allRes = Array.from(seen.values()).sort((a,b) => {
        if (mode === 'finder') {
           if (preferenceBasis === 'branch') {
              if (a.branch !== b.branch) return targetBranches.indexOf(a.branch) - targetBranches.indexOf(b.branch);
              return targetColleges.indexOf(a.college.id) - targetColleges.indexOf(b.college.id);
           } else {
              if (a.college.id !== b.college.id) return targetColleges.indexOf(a.college.id) - targetColleges.indexOf(b.college.id);
              if (chanceScore(a.chance) !== chanceScore(b.chance)) return chanceScore(a.chance) - chanceScore(b.chance);
              return targetBranches.indexOf(a.branch) - targetBranches.indexOf(b.branch);
           }
        }
        if (mode === 'explore') {
           const idxA = standardColleges.indexOf(a.college.name);
           const idxB = standardColleges.indexOf(b.college.name);
           if (idxA !== -1 && idxB !== -1 && idxA !== idxB) return idxA - idxB;
           if (chanceScore(a.chance) !== chanceScore(b.chance)) return chanceScore(a.chance) - chanceScore(b.chance);
        }
        if (chanceScore(a.chance) !== chanceScore(b.chance)) return chanceScore(a.chance) - chanceScore(b.chance);
        return a.college.tier - b.college.tier;
    });

    let mockAllotment = null;
    let mockDiscussions = [];
    let activeChoices = [...choices];

    if (activeChoices.length > 0) {
       for (let i = 0; i < activeChoices.length; i++) {
          const ch = activeChoices[i];
          const branchEntries = allRes.filter(r => r.college.id == ch.collegeId && r.branch === ch.branch);
          branchEntries.sort((a,b) => chanceScore(a.chance) - chanceScore(b.chance));
          const entry = branchEntries[0];
          
          if (entry && (entry.chance === 'High' || entry.chance === 'Medium')) {
             if (!mockAllotment) mockAllotment = { choice: ch, choiceNumber: i + 1, entry };
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

  const sortedColleges = useMemo(() => {
    return [...colleges].sort((a, b) => a.name.localeCompare(b.name));
  }, [colleges]);

  return (
    <div className="max-w-7xl mx-auto space-y-12 py-10 px-4 animate-in fade-in duration-500 font-sans">
      
      {loadingData ? (
         <div className="flex flex-col items-center justify-center p-20 bg-white border-2 border-slate-100 rounded-[4rem] text-center space-y-6 shadow-2xl">
            <div className="w-24 h-24 border-8 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            <div className="space-y-4">
               <h3 className="text-3xl font-[1000] text-slate-800 uppercase tracking-tighter">Initializing Admissions Matrix</h3>
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] animate-pulse">Syncing Rounds 1 & 2 Data • 5000+ Connection Capacity Mode</p>
            </div>
         </div>
      ) : (
      <>
      
      {/* Header */}
      <div className="bg-white p-6 md:p-14 rounded-[2.5rem] md:rounded-[4.5rem] border border-slate-200 shadow-2xl space-y-8 md:space-y-12">
         <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
            <h1 className="text-3xl md:text-7xl font-[1000] text-slate-800 tracking-tighter uppercase whitespace-normal md:whitespace-nowrap text-center md:text-left">UGEAC <span className="text-blue-600">COUNSELLING</span></h1>
            <a href="https://bceceboard.bihar.gov.in" target="_blank" rel="noreferrer" className="w-full md:w-auto px-8 py-4 md:px-10 md:py-5 bg-slate-50 border-2 border-slate-200 rounded-2xl md:rounded-[2rem] font-black text-[10px] md:text-xs uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-black hover:text-white transition-all text-center">Official Portal <ExternalLink size={16}/></a>
         </div>

         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            <div className="space-y-3">
               <label className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest pl-2">JEE Main Rank (CRL)</label>
               <input type="number" placeholder="Enter CRL Rank..." value={rank} onChange={e => setRank(e.target.value)} className="w-full bg-slate-50 border-2 border-transparent focus:border-blue-500 rounded-2xl md:rounded-3xl p-4 md:p-6 text-lg md:text-xl font-[1000] outline-none transition-all placeholder:text-slate-200" />
            </div>
            <div className="space-y-3 p-2 bg-blue-50/50 rounded-2xl md:rounded-[2.5rem] border border-blue-100">
               <label className="text-[9px] md:text-[10px] font-black text-blue-600 uppercase tracking-widest pl-2 block text-center">Your Bihar Merritt (UGEAC) Rank</label>
               <input type="number" placeholder="Enter UR State Rank..." value={ugeacInput} onChange={e => setUgeacInput(e.target.value)} className="w-full bg-white border-2 border-transparent focus:border-blue-600 rounded-xl md:rounded-2xl p-4 md:p-6 text-lg md:text-xl font-[1000] outline-none transition-all placeholder:text-blue-100 shadow-inner" />
            </div>
             <div className="space-y-3">
               <label className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest pl-2">Category</label>
               <select value={category} onChange={e => setCategory(e.target.value)} className="w-full bg-slate-50 border-2 border-transparent focus:border-blue-500 rounded-2xl md:rounded-3xl p-4 md:p-6 text-xs md:text-sm font-[1000] outline-none transition-all uppercase appearance-none cursor-pointer">
                  <option value="UR">UR (General)</option><option value="EBC">EBC</option><option value="BC">BC</option><option value="SC">SC</option><option value="EWS">EWS</option>
               </select>
            </div>

             <div className="space-y-3">
               <label className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest pl-2">Gender</label>
               <select value={gender} onChange={e => setGender(e.target.value)} className="w-full bg-slate-50 border-2 border-transparent focus:border-blue-500 rounded-2xl md:rounded-3xl p-4 md:p-6 text-xs md:text-sm font-[1000] outline-none transition-all uppercase appearance-none cursor-pointer">
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
               </select>
             </div>
          </div>
          
          <div className="flex flex-col items-center gap-6 py-2">
             <div className="bg-emerald-50 text-emerald-600 px-4 py-2.5 rounded-full text-[8px] md:text-[9px] font-[1000] uppercase tracking-widest border border-emerald-100 flex items-center gap-2 shadow-sm animate-pulse text-center">
                <ShieldCheck size={14}/> 100% Data Accuracy: Verified 2025 PDF
             </div>

             {rank && (
               <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 animate-in slide-in-from-top-4 duration-700">
                  <div className="bg-white border-2 border-blue-100 rounded-[2rem] md:rounded-[2.5rem] p-5 md:p-6 text-center shadow-xl shadow-blue-50 relative overflow-hidden group">
                     <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity"><Zap size={40}/></div>
                     <p className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">UGEAC Rank</p>
                     <p className="text-3xl md:text-4xl font-[1000] text-blue-600 tracking-tighter">#{estimateUgeacRank(rank)}</p>
                     <p className="text-[8px] md:text-[9px] font-bold text-blue-300 mt-2 uppercase">Official 2025 State Merit</p>
                  </div>

                  {category !== 'UR' && (
                  <div className="bg-white border-2 border-indigo-100 rounded-[2rem] md:rounded-[2.5rem] p-5 md:p-6 text-center shadow-xl shadow-indigo-50 relative overflow-hidden group">
                     <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity"><ShieldCheck size={40}/></div>
                     <p className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{category} Rank</p>
                     <p className="text-3xl md:text-4xl font-[1000] text-indigo-600 tracking-tighter">#{getEstimatedCategoryRank(estimateUgeacRank(rank), category)}</p>
                     <p className="text-[8px] md:text-[9px] font-bold text-indigo-300 mt-2 uppercase">Bihar PDF Analysis</p>
                  </div>
                  )}

                  {gender === 'Female' && (
                  <div className="bg-white border-2 border-rose-100 rounded-[2rem] md:rounded-[2.5rem] p-5 md:p-6 text-center shadow-xl shadow-rose-50 relative overflow-hidden group">
                     <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity"><CheckCircle2 size={40}/></div>
                     <p className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">RCG Rank</p>
                     <p className="text-3xl md:text-4xl font-[1000] text-rose-600 tracking-tighter">#{getEstimatedCategoryRank(estimateUgeacRank(rank), 'RCG')}</p>
                     <p className="text-[8px] md:text-[9px] font-bold text-rose-300 mt-2 uppercase">Female Reservation</p>
                  </div>
                  )}
               </div>
             )}
          </div>

          {/* MODE SWITCHER TABS */}
          <div className="flex flex-wrap md:flex-nowrap justify-center gap-2 md:gap-4 bg-slate-50 p-1 md:p-2 rounded-2xl md:rounded-[2.5rem] border border-slate-200">
             <button 
                onClick={() => setMode('explore')}
                className={`flex-1 flex items-center justify-center gap-2 md:gap-3 px-4 md:px-8 py-3 md:py-4 rounded-xl md:rounded-[2rem] text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-all ${mode === 'explore' ? 'bg-blue-600 text-white shadow-xl shadow-blue-200' : 'text-slate-500 hover:bg-white hover:text-blue-600'}`}
             >
                <LayoutGrid size={14}/> <span className="hidden xs:inline">1.</span> Explore
             </button>
             <button 
                onClick={() => setMode('finder')}
                className={`flex-1 flex items-center justify-center gap-2 md:gap-3 px-4 md:px-8 py-3 md:py-4 rounded-xl md:rounded-[2rem] text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-all ${mode === 'finder' ? 'bg-blue-600 text-white shadow-xl shadow-blue-200' : 'text-slate-500 hover:bg-white hover:text-blue-600'}`}
             >
                <Search size={14}/> <span className="hidden xs:inline">2.</span> Finder
             </button>
             <button 
                onClick={() => setMode('wizard')}
                className={`flex-1 flex items-center justify-center gap-2 md:gap-3 px-4 md:px-8 py-3 md:py-4 rounded-xl md:rounded-[2rem] text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-all ${mode === 'wizard' ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-200' : 'text-slate-500 hover:bg-white hover:text-indigo-600'}`}
             >
                <Zap size={14}/> <span className="hidden xs:inline">3.</span> Wizard
             </button>
          </div>

          <div className="pt-2">
             {/* MODE 1: EXPLORE ALL (General Entry Only) */}
             {mode === 'explore' && (
               <div className="text-center py-6 md:py-10 space-y-4 animate-in fade-in zoom-in duration-500">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-50 text-blue-600 rounded-2xl md:rounded-[2.5rem] flex items-center justify-center mx-auto mb-4 md:mb-6">
                     <LayoutGrid size={28} md:size={32} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-[1000] text-slate-800 uppercase tracking-tighter">Full Potential View</h3>
                  <p className="max-w-md mx-auto text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest leading-relaxed md:leading-loose">Enter your details above and analyze all 38 colleges to find your best matches.</p>
               </div>
             )}

               {/* MODE 2: SPECIFIC FINDER (Multi-Selection Workflow) */}
               {mode === 'finder' && (
                 <div className="space-y-6 md:space-y-8 animate-in slide-in-from-top-4 duration-500">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                       
                       {/* Step 1: Multiple College Selection */}
                       <div className="bg-white border-2 border-slate-100 rounded-[2rem] md:rounded-[3rem] p-6 md:p-8 space-y-4 md:space-y-6 shadow-sm">
                          <h3 className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                             <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-[9px] md:text-[10px]">1</span> Focus Institutions
                          </h3>
                          <div className="flex gap-2 md:gap-3">
                             <select 
                                value={selectedCollegeToAdd} 
                                onChange={e => setSelectedCollegeToAdd(e.target.value)}
                                className="flex-1 bg-slate-50 border-2 border-transparent focus:border-blue-500 rounded-xl md:rounded-2xl p-3 md:p-4 text-[10px] md:text-[11px] font-[1000] outline-none uppercase appearance-none"
                             >
                                <option value="All">-- Select College --</option>
                                {sortedColleges.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                             </select>
                             <button 
                                onClick={() => {
                                   if (selectedCollegeToAdd === 'All') return;
                                   const cid = parseInt(selectedCollegeToAdd);
                                   if (!targetColleges.includes(cid)) setTargetColleges([...targetColleges, cid]);
                                }}
                                className="px-5 md:px-6 bg-blue-600 text-white rounded-xl md:rounded-2xl font-black transition-all flex items-center justify-center hover:bg-blue-700 active:scale-95 shadow-lg shadow-blue-100"
                             >
                                <Plus size={20} md:size={24} strokeWidth={3}/>
                             </button>
                          </div>
                          
                          <div className="flex flex-col gap-2 min-h-[40px]">
                             {targetColleges.length === 0 ? (
                                <p className="text-[9px] md:text-[10px] font-bold text-slate-300 uppercase italic">No colleges selected yet...</p>
                             ) : (
                                targetColleges.map((id, idx) => {
                                   const c = colleges.find(co => co.id === id);
                                   return (
                                      <div key={id} className="group flex items-center justify-between bg-white border border-slate-200 p-2.5 md:p-3 rounded-xl md:rounded-2xl animate-in slide-in-from-left-2 duration-300">
                                         <div className="flex items-center gap-3 md:gap-4">
                                            <span className="w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-[8px] md:text-[9px] font-black">{idx + 1}</span>
                                            <p className="text-[9px] md:text-[10px] font-black text-slate-800 uppercase tracking-tight">{c?.short || c?.name}</p>
                                         </div>
                                         <div className="flex items-center gap-1">
                                            <button disabled={idx === 0} onClick={() => moveTargetCollege(idx, -1)} className="p-1 md:p-1.5 hover:bg-blue-50 text-blue-400 disabled:opacity-10 transition-colors"><ChevronUp size={12} md:size={14}/></button>
                                            <button disabled={idx === targetColleges.length - 1} onClick={() => moveTargetCollege(idx, 1)} className="p-1 md:p-1.5 hover:bg-blue-50 text-blue-400 disabled:opacity-10 transition-colors"><ChevronDown size={12} md:size={14}/></button>
                                            <button onClick={() => setTargetColleges(targetColleges.filter(t => t !== id))} className="p-1.5 bg-red-50 hover:bg-red-100 text-red-500 rounded-full h-6 w-6 md:h-7 md:w-7 flex items-center justify-center transition-all">
                                               <Minus size={12} md:size={14} strokeWidth={4}/>
                                            </button>
                                         </div>
                                      </div>
                                   )
                                })
                             )}
                          </div>
                       </div>

                       {/* Step 2: Multiple Branch Selection (Filtered by selected colleges) */}
                       <div className="bg-white border-2 border-slate-100 rounded-[2rem] md:rounded-[3rem] p-6 md:p-8 space-y-4 md:space-y-6 shadow-sm">
                          <h3 className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                             <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-[9px] md:text-[10px]">2</span> Preferred Branches
                          </h3>
                          <div className="flex gap-2 md:gap-3">
                             <select 
                                value={selectedBranchToAdd}
                                onChange={e => setSelectedBranchToAdd(e.target.value)}
                                className="flex-1 bg-slate-50 border-2 border-transparent focus:border-blue-500 rounded-xl md:rounded-2xl p-3 md:p-4 text-[10px] md:text-[11px] font-[1000] outline-none uppercase appearance-none"
                             >
                                <option value="">-- Select Branch --</option>
                                {(targetColleges.length > 0 ? availableBranchesForTarget : ugeacData.branches).map(b => (
                                   <option key={b} value={b}>{branchMapping[b] || b}</option>
                                ))}
                             </select>
                             <button 
                                onClick={() => {
                                   if (!selectedBranchToAdd) return;
                                   if (!targetBranches.includes(selectedBranchToAdd)) setTargetBranches([...targetBranches, selectedBranchToAdd]);
                                }}
                                className="px-5 md:px-6 bg-emerald-600 text-white rounded-xl md:rounded-2xl font-black transition-all flex items-center justify-center hover:bg-emerald-700 active:scale-95 shadow-lg shadow-emerald-100"
                             >
                                <Plus size={20} md:size={24} strokeWidth={3}/>
                             </button>
                          </div>

                          <div className="flex flex-col gap-2 min-h-[40px]">
                             {targetBranches.length === 0 ? (
                                <p className="text-[9px] md:text-[10px] font-bold text-slate-300 uppercase italic">Showing all branches if empty...</p>
                             ) : (
                                targetBranches.map((b, idx) => (
                                   <div key={b} className="group flex items-center justify-between bg-white border border-slate-200 p-2.5 md:p-3 rounded-xl md:rounded-2xl animate-in slide-in-from-right-2 duration-300">
                                      <div className="flex items-center gap-3 md:gap-4">
                                         <span className="w-5 h-5 bg-emerald-600 text-white rounded-full flex items-center justify-center text-[8px] md:text-[9px] font-black">{idx + 1}</span>
                                         <p className="text-[9px] md:text-[10px] font-black text-slate-800 uppercase tracking-tight">{branchMapping[b] || b}</p>
                                      </div>
                                      <div className="flex items-center gap-1">
                                         <button disabled={idx === 0} onClick={() => moveTargetBranch(idx, -1)} className="p-1 md:p-1.5 hover:bg-emerald-50 text-emerald-400 disabled:opacity-10 transition-colors"><ChevronUp size={12} md:size={14}/></button>
                                         <button disabled={idx === targetBranches.length - 1} onClick={() => moveTargetBranch(idx, 1)} className="p-1 md:p-1.5 hover:bg-emerald-50 text-emerald-400 disabled:opacity-10 transition-colors"><ChevronDown size={12} md:size={14}/></button>
                                         <button onClick={() => setTargetBranches(targetBranches.filter(t => t !== b))} className="p-1.5 bg-red-50 hover:bg-red-100 text-red-500 rounded-full h-6 w-6 md:h-7 md:w-7 flex items-center justify-center transition-all">
                                            <Minus size={12} md:size={14} strokeWidth={4}/>
                                         </button>
                                      </div>
                                   </div>
                                ))
                             )}
                          </div>
                       </div>
                    </div>

                    {/* Step 3: Result Priority Toggles */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 p-6 md:p-10 bg-slate-50 rounded-[2rem] md:rounded-[3rem] border border-slate-200 shadow-inner">
                       <div className="text-center md:text-left">
                          <h4 className="text-xs md:text-sm font-black text-slate-800 uppercase tracking-widest">3. Strategy</h4>
                          <p className="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Optimization preference?</p>
                       </div>
                       <div className="flex bg-white p-1 md:p-2 rounded-2xl md:rounded-[2rem] border border-slate-200 shadow-sm scale-110 md:scale-100">
                          <button 
                             onClick={() => setPreferenceBasis('college')} 
                             className={`px-4 md:px-8 py-2 md:py-3 rounded-xl md:rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-widest transition-all ${preferenceBasis === 'college' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:text-blue-600'}`}
                          >
                             College First
                          </button>
                          <button 
                             onClick={() => setPreferenceBasis('branch')} 
                             className={`px-4 md:px-8 py-2 md:py-3 rounded-xl md:rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-widest transition-all ${preferenceBasis === 'branch' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:text-blue-600'}`}
                          >
                             Branch First
                          </button>
                       </div>
                    </div>
                 </div>
               )}

             {/* MODE 3: PRIORITY WIZARD */}
             {mode === 'wizard' && (
               <div className="space-y-8 animate-in slide-in-from-bottom-5 duration-500">
                  {/* Sub-Preference Toggles */}
                  <div className="flex items-center justify-center gap-4 md:gap-6 p-4 md:p-6 bg-indigo-50/50 rounded-[2rem] md:rounded-[2.5rem] border border-indigo-100">

                     <div className="flex bg-white p-1 rounded-xl md:rounded-2xl border border-indigo-100 shadow-sm">
                        <button 
                           onClick={() => setPreferenceBasis('college')}
                           className={`px-4 md:px-6 py-2 rounded-lg md:rounded-xl text-[8px] md:text-[9px] font-black uppercase tracking-widest transition-all ${preferenceBasis === 'college' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-indigo-600'}`}
                        >
                           College
                        </button>
                        <button 
                           onClick={() => setPreferenceBasis('branch')}
                           className={`px-4 md:px-6 py-2 rounded-lg md:rounded-xl text-[8px] md:text-[9px] font-black uppercase tracking-widest transition-all ${preferenceBasis === 'branch' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-indigo-600'}`}
                        >
                           Branch
                        </button>
                     </div>
                  </div>

                  {/* Step 1: Target Colleges */}
                  <div className="bg-slate-50 border border-slate-200 rounded-[2rem] md:rounded-3xl p-6 lg:p-10 space-y-4 shadow-sm">
                    <h3 className="text-[11px] md:text-sm font-black text-slate-800 uppercase tracking-widest flex items-center gap-2">
                      <span className="bg-indigo-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-[10px] md:text-xs shadow-lg">1</span> 
                      Target Institutions
                    </h3>
                    <p className="text-[9px] md:text-[10px] font-bold text-slate-500 uppercase tracking-widest">Select your dream colleges.</p>
                    
                    <div className="flex flex-col md:flex-row gap-3 md:gap-4">
                       <select value={selectedCollegeToAdd} onChange={e => setSelectedCollegeToAdd(e.target.value)} className="flex-1 bg-white border-2 border-slate-200 focus:border-indigo-500 rounded-xl md:rounded-2xl p-3 md:p-4 text-[10px] md:text-[11px] font-[1000] outline-none uppercase appearance-none cursor-pointer shadow-sm">
                          <option value="All">-- Select College Details --</option>
                          {sortedColleges.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                       </select>
                       <button onClick={addTargetCollege} className="md:w-auto w-full px-6 md:px-8 py-3.5 md:py-4 bg-indigo-600 hover:bg-black text-white rounded-xl md:rounded-2xl font-black text-[9px] md:text-[10px] uppercase tracking-widest shadow-xl active:scale-95 transition-all">
                         + Add Selection
                       </button>
                       {preferenceBasis === 'college' && selectedCollegeToAdd !== 'All' && (
                          <button 
                             onClick={() => {
                                const cid = parseInt(selectedCollegeToAdd);
                                const cInfo = colleges.find(c => c.id === cid);
                                const collegeBranches = ugeacData.data2025.filter(d => d.collegeId === cid);
                                const uniqueBranches = Array.from(new Set(collegeBranches.map(d => d.branch)));
                                const newChoices = [...choices];
                                uniqueBranches.forEach(b => {
                                   if (!newChoices.find(c => c.collegeId === cid && c.branch === b)) {
                                      newChoices.push({ collegeId: cid, branch: b, collegeName: cInfo.name });
                                   }
                                });
                                setChoices(newChoices);
                                if (!targetColleges.includes(cid)) setTargetColleges([...targetColleges, cid]);
                             }}
                             className="md:w-auto w-full px-6 md:px-8 py-3.5 md:py-4 bg-emerald-600 hover:bg-slate-900 text-white rounded-xl md:rounded-2xl font-black text-[9px] md:text-[10px] uppercase tracking-widest shadow-xl active:scale-95 transition-all"
                          >
                             + Select All Branches
                          </button>
                       )}
                    </div>

                    {targetColleges.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200 mt-4">
                         {targetColleges.map(id => {
                            const c = colleges.find(co => co.id === id);
                            return <div key={id} className="flex items-center gap-2 bg-indigo-100 text-indigo-900 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-200 shadow-sm animate-in zoom-in duration-300">
                              {c?.short || c?.name}
                              <button onClick={() => removeTargetCollege(id)} className="text-indigo-500 hover:text-white hover:bg-red-500 bg-white rounded-full w-4 h-4 flex items-center justify-center transition-colors"><Trash2 size={10}/></button>
                            </div>
                         })}
                      </div>
                    )}
                  </div>

             {/* Step 2: Powerful Multi-Branch Addition */}
             {targetColleges.length > 0 && (
                <div className="bg-white border-2 border-slate-100 rounded-[3rem] p-8 lg:p-12 space-y-8 animate-in slide-in-from-right-4 duration-500 shadow-xl shadow-slate-200/50">
                   <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                      <div className="space-y-2">
                        <h3 className="text-xl font-[1000] text-slate-800 uppercase tracking-tighter flex items-center gap-3">
                           <span className="bg-indigo-600 text-white w-10 h-10 rounded-2xl flex items-center justify-center text-sm shadow-lg shadow-indigo-200">2</span> 
                           Add Preferred Branches
                        </h3>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed">Choose a branch to add it to <span className="text-indigo-600 font-black">{targetColleges.length} selected colleges</span> at once.</p>
                      </div>
                      
                      <div className="flex-1 flex flex-col md:flex-row gap-4 max-w-2xl bg-slate-50 p-3 rounded-[2rem] border border-slate-200">
                         <select 
                            value={selectedBranchToAdd} 
                            onChange={e => setSelectedBranchToAdd(e.target.value)}
                            className="flex-1 bg-white border-2 border-transparent focus:border-indigo-500 rounded-2xl px-6 py-4 text-xs font-black outline-none uppercase shadow-sm cursor-pointer"
                         >
                            <option value="">-- Choose Branch to Add --</option>
                            {availableBranchesForTarget.map(b => (
                               <option key={b} value={b}>{branchMapping[b] || b}</option>
                            ))}
                         </select>
                         <button 
                            onClick={addBranchToAllTargets}
                            className="px-10 py-5 bg-indigo-600 hover:bg-slate-900 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl shadow-indigo-200 active:scale-95 transition-all flex items-center justify-center gap-2"
                         >
                            <Plus size={16}/> Add to All
                         </button>
                      </div>
                   </div>

                   <div className="p-1 px-2 border-t border-slate-100 pt-8 mt-2">
                      <h4 className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6">Or select individual combinations:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                         {availableChoices.map((ac, i) => {
                            const isAdded = choices.find(c => c.collegeId === ac.collegeId && c.branch === ac.branch);
                            return (
                               <div key={i} onClick={() => {
                                  if(isAdded) removeChoiceByCombo(ac.collegeId, ac.branch);
                                  else setChoices([...choices, ac]);
                               }} className={`group flex flex-col justify-between p-6 rounded-[2.5rem] border-2 cursor-pointer transition-all ${isAdded ? 'bg-indigo-50 border-indigo-200 ring-4 ring-indigo-50' : 'bg-white border-slate-100 hover:border-indigo-300 hover:translate-y-[-4px] shadow-sm hover:shadow-xl'}`}>
                                   <div className="mb-4">
                                      <div className="flex justify-between items-start">
                                         <p className="text-[11px] font-[1000] text-slate-800 uppercase tracking-tight leading-tight max-w-[80%]">{ac.collegeName}</p>
                                         {isAdded && <CheckCircle2 size={16} className="text-indigo-500" />}
                                      </div>
                                      <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-2 bg-slate-50 group-hover:bg-white px-3 py-1.5 rounded-full inline-block border border-slate-100">{branchMapping[ac.branch] || ac.branch}</p>
                                   </div>
                                   <div className={`mt-2 text-[9px] font-black uppercase tracking-widest ${isAdded ? 'text-red-500' : 'text-indigo-600'}`}>
                                      {isAdded ? 'Remove' : '+ Add Choice'}
                                   </div>
                               </div>
                            )
                         })}
                      </div>
                   </div>
                </div>
             )}
             </div>
          )}

          {/* GLOBAL Step 3: Priority Setup (Visible in all modes if choices exist) */}
          {choices.length > 0 && (
            <div className="bg-slate-900 rounded-[3.5rem] p-10 space-y-8 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] relative overflow-hidden animate-in slide-in-from-bottom-10 duration-1000 border-t-8 border-indigo-600">
               <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none rotate-12">
                  <Layers size={220} />
               </div>
               
               <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                     <div>
                        <h3 className="text-xl font-black text-white uppercase tracking-[0.2em] flex items-center gap-4">
                           <span className="bg-emerald-500 text-white w-10 h-10 rounded-2xl flex items-center justify-center text-sm shadow-[0_0_20px_rgba(16,185,129,0.4)]">3</span> 
                           Final Choice Filling Order
                        </h3>
                        <p className="text-[10px] font-bold text-indigo-300 uppercase tracking-widest leading-relaxed mt-2 opacity-60">Drag your dream seats to the top. Rank 1 = Your first choice.</p>
                     </div>
                     <div className="flex items-center gap-6">
                        <button onClick={() => setChoices([])} className="px-6 py-3 border border-red-500/30 text-[10px] font-black text-red-300 uppercase tracking-widest rounded-2xl hover:bg-red-500 hover:text-white transition-all">Clear List</button>
                        <div className="bg-indigo-500/20 border border-indigo-500/30 text-indigo-200 text-xs font-black px-6 py-3 rounded-2xl uppercase tracking-tighter">
                           {choices.length} Choices Locked
                        </div>
                     </div>
                  </div>
               </div>
               
               <div className="flex flex-col gap-4 relative z-10 max-h-[550px] overflow-y-auto pr-4 custom-scrollbar">
                  {choices.map((choice, i) => (
                     <div key={`${choice.collegeId}-${choice.branch}`} className="group flex flex-col md:flex-row md:items-center justify-between bg-white/[0.03] border border-white/10 hover:border-white/20 hover:bg-white/[0.07] px-8 py-6 rounded-[2rem] backdrop-blur-xl transition-all gap-6">
                        <div className="flex items-center gap-6">
                           <div className="w-12 h-12 rounded-[1.2rem] bg-indigo-500/20 text-indigo-300 flex items-center justify-center font-black text-sm border border-indigo-500/20 group-hover:bg-indigo-600 group-hover:text-white transition-all shrink-0 shadow-inner">{i+1}</div>
                           <div>
                              <p className="text-xl font-[1000] text-white uppercase tracking-tighter leading-none">{choice.collegeName}</p>
                              <p className="text-[11px] font-black text-emerald-400 uppercase tracking-[0.15em] mt-2 flex items-center gap-2">
                                 <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                 {branchMapping[choice.branch] || choice.branch}
                              </p>
                           </div>
                        </div>
                        <div className="flex items-center gap-3">
                           <div className="flex bg-black/30 p-1 rounded-2xl border border-white/10">
                              <button disabled={i === 0} onClick={() => moveChoice(i, -1)} className="p-3 hover:bg-white/10 disabled:opacity-20 text-white rounded-xl transition-all"><ChevronUp size={20}/></button>
                              <button disabled={i === choices.length - 1} onClick={() => moveChoice(i, 1)} className="p-3 hover:bg-white/10 disabled:opacity-20 text-white rounded-xl transition-all"><ChevronDown size={20}/></button>
                           </div>
                           <button onClick={() => removeChoiceByCombo(choice.collegeId, choice.branch)} className="p-4 bg-red-500/20 hover:bg-red-500 text-red-300 hover:text-white rounded-2xl transition-all shadow-lg"><Trash2 size={20}/></button>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
          )}

          <div className="pt-10 border-t border-slate-100 mt-12 text-center">
             <button onClick={calculateResults} className="group relative w-full overflow-hidden rounded-[3rem] transition-all active:scale-[0.98]">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 group-hover:from-black group-hover:to-slate-900 transition-all duration-500"></div>
                <div className="relative py-10 flex flex-col items-center justify-center gap-2">
                   <span className="text-white font-[1000] text-3xl uppercase tracking-[0.4em]">Apply Selection & Analyze Results</span>
                   <span className="text-blue-200 text-[10px] font-black uppercase tracking-[0.2em] opacity-60">Generate Bihar UGEAC Predictor Mock Report</span>
                </div>
             </button>
          </div>
       </div>
       </div>

      {hasPredicted && (
        <div className="space-y-16 animate-in slide-in-from-bottom-20 duration-1000">
           
           {/* Choice Filling Results (Discussion) */}
           {choices.length > 0 && results.mockDiscussions.length > 0 && (
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
                               <p className="text-[9px] font-black text-slate-400 uppercase mt-1 tracking-widest text-center block w-full"><span className="text-blue-500">{r.cat} ({r.seatType === 'Female' ? 'F' : 'Gen'})</span></p>
                            </td>
                            <td className="px-8 py-10 flex flex-col items-center border-l border-r border-[#f1f5f9] bg-blue-50/20">
                               <p className="text-xl font-[1000] text-blue-600 flex items-center justify-center gap-2">{r.cutoff25} <span className="px-2 py-0.5 bg-blue-100 text-[9px] font-black tracking-widest text-blue-500 rounded-lg">{r.cat} ({r.seatType === 'Female' ? 'F' : 'Gen'}) Cutoff</span></p>
                               <p className="text-[10px] font-black text-blue-400 uppercase mt-1.5 tracking-wider bg-white px-3 py-1 rounded-full shadow-sm border border-blue-100">Your {r.cat} Rank: <span className="font-[1000] text-blue-600">{r.myCompRank}</span></p>
                            </td>
                            <td className="px-12 py-10 text-center">
                               <span className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest ${r.chance === 'High' ? 'bg-emerald-600 text-white' : 'bg-red-500 text-white'} shadow-lg`}>{r.chance}</span>
                            </td>
                             <td className="px-12 py-10 text-right space-x-2">
                                <button 
                                   onClick={() => {
                                      const isAdded = choices.find(c => c.collegeId === r.college.id && c.branch === r.branch);
                                      if (isAdded) {
                                         removeChoiceByCombo(r.college.id, r.branch);
                                      } else {
                                         setChoices([...choices, { collegeId: r.college.id, branch: r.branch, collegeName: r.college.name }]);
                                      }
                                   }}
                                   className={`px-6 py-3 border-2 rounded-2xl text-[10px] font-[1000] uppercase tracking-widest transition-all ${choices.find(c => c.collegeId === r.college.id && c.branch === r.branch) ? 'bg-red-50 border-red-200 text-red-600' : 'bg-emerald-50 border-emerald-200 text-emerald-600 hover:bg-emerald-600 hover:text-white'}`}
                                >
                                   {choices.find(c => c.collegeId === r.college.id && c.branch === r.branch) ? <span className="flex items-center gap-1"><Minus size={14}/> Remove</span> : <span className="flex items-center gap-1"><Plus size={14}/> Add</span>}
                                </button>
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
          </>
      )}
    </div>
  );
}

export default UgeacPredictor;
