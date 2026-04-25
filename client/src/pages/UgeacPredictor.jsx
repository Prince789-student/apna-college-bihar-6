import React, { useState, useMemo, useEffect } from 'react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import '../UgeacPredictor.css';
import { colleges } from '../UgeacData';
import { Send, MapPin, ExternalLink, ShieldCheck, AlertTriangle, GraduationCap, Info, ChevronDown, ChevronUp, CheckCircle2, Building2, Wifi, BookOpen, Trash2, Plus, Minus, Layers, Search, Zap, Filter, LayoutGrid, Download, X } from 'lucide-react';

function UgeacPredictor() {
  const [rank, setRank] = useState('');
  const [ugeacInput, setUgeacInput] = useState('');
  const [category, setCategory] = useState('UR');
  const [gender, setGender] = useState('Male');
  
  const [mode, setMode] = useState('explore'); 
  const [preferenceBasis, setPreferenceBasis] = useState('branch'); 

  const [targetColleges, setTargetColleges] = useState([]);
  const [targetBranches, setTargetBranches] = useState([]);
  const [choices, setChoices] = useState([]); 
  const [visibleCount, setVisibleCount] = useState(50);

  const [ugeacData, setUgeacData] = useState({ data2024: [], data2025: [], branches: [] });
  const [loadingData, setLoadingData] = useState(true);

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
    "G.E.C. SAMASTIPUR": "Government Engineering College, Samastipur",
    "CP THAKUR INST.": "DR. C.P. Thakur Institute",
    "CIPET BIHTA": "CIPET:IPT, Bihta, Patna",
    "SGIDT PATNA": "S.G.I.D.T. Patna",
    "WIT DARBHANGA": "Women's Institute of Tech, Darbhanga"
  }), []);

  useEffect(() => {
    fetch('/data/cutoffs.json')
      .then(res => res.json())
      .then(json => {
        const process = (raw) => raw.map(c => {
          const key = c.collegeShort?.toUpperCase().trim();
          const formalName = normalizedMap[key] || c.collegeShort;
          const col = colleges.find(co => co.name === formalName || co.short === c.collegeShort);
          return { ...c, collegeId: col ? col.id : null, collegeName: col ? col.name : formalName };
        }).filter(c => c.collegeId !== null);

        const raw2024 = json.cutoffs2024 || [];
        const raw2025 = json.cutoffs2025 || [];
        setUgeacData({ 
          data2024: process(raw2024), 
          data2025: process(raw2025), 
          branches: Array.from(new Set([...raw2024.map(c => c.branch.trim()), ...raw2025.map(c => c.branch.trim())])).sort() 
        });
        setLoadingData(false);
      })
      .catch(err => { console.error(err); setLoadingData(false); });
  }, []);

  const [isFinderCollegeOpen, setIsFinderCollegeOpen] = useState(false);
  const [finderCollegeSearch, setFinderCollegeSearch] = useState("");
  const [isFinderBranchOpen, setIsFinderBranchOpen] = useState(false);
  const [finderBranchSearch, setFinderBranchSearch] = useState("");
  const [hasPredicted, setHasPredicted] = useState(false);
  const [results, setResults] = useState({ all: [], calculatedRank: 0, mockAllotment: null, mockDiscussions: [] });
  const [selectedCollege, setSelectedCollege] = useState(null);

  const branchMapping = {
    "Computer Science": "Computer Science (CSE)",
    "Electronics & Communication": "Electronics (ECE)",
    "Electrical & Electronics": "Electrical & Electronics (EEE)",
    "Electrical": "Electrical (EE)",
    "Mechanical": "Mechanical (ME)",
    "Civil": "Civil (CE)",
    "IT": "Information Technology (IT)",
    "CSE (AI & ML)": "CSE (AI & ML)",
    "CSE (AI)": "CSE (AI)",
    "CSE (Data Science)": "CSE (Data Science)",
    "CSE (IoT)": "CSE (IoT)",
    "CSE (Cyber Security)": "CSE (Cyber Security)",
    "VLSI Design": "VLSI Design",
    "Robotics and Automation": "Robotics & Automation",
    "Aeronautical Engineering": "Aeronautical Engineering",
    "Mining Engineering": "Mining Engineering"
  };

  const UGEAC_RANK_MAP = [{"ur":4,"air":28003},{"ur":13,"air":50299},{"ur":70,"air":81272},{"ur":109,"air":92809},{"ur":156,"air":100028},{"ur":215,"air":109032},{"ur":333,"air":127662},{"ur":436,"air":140082},{"ur":525,"air":150732},{"ur":617,"air":162821},{"ur":716,"air":171028},{"ur":816,"air":181269},{"ur":914,"air":188077},{"ur":1012,"air":197425},{"ur":1115,"air":209122},{"ur":1209,"air":219690},{"ur":1307,"air":229952},{"ur":1404,"air":238780},{"ur":1507,"air":247321},{"ur":1601,"air":257341},{"ur":1714,"air":268036},{"ur":1821,"air":278080},{"ur":1930,"air":288768},{"ur":2041,"air":297962},{"ur":2137,"air":306613},{"ur":2243,"air":315619},{"ur":2333,"air":323379},{"ur":2425,"air":330324},{"ur":2522,"air":339013},{"ur":2615,"air":347652},{"ur":2711,"air":355967},{"ur":2808,"air":364892},{"ur":2901,"air":373625},{"ur":3003,"air":383352},{"ur":3101,"air":392168},{"ur":3207,"air":402310},{"ur":3308,"air":413189},{"ur":3400,"air":421323},{"ur":3501,"air":430878},{"ur":3596,"air":440370},{"ur":3693,"air":449449},{"ur":3795,"air":458443},{"ur":3894,"air":467591},{"ur":3992,"air":476591},{"ur":4089,"air":484050},{"ur":4184,"air":492240},{"ur":4288,"air":501868},{"ur":4377,"air":508894},{"ur":4474,"air":518100},{"ur":4581,"air":529594},{"ur":4680,"air":542092},{"ur":4776,"air":550964},{"ur":4876,"air":559448},{"ur":4966,"air":568797},{"ur":5056,"air":577816},{"ur":5153,"air":587447},{"ur":5257,"air":597045},{"ur":5353,"air":606934},{"ur":5441,"air":620541},{"ur":5542,"air":630524},{"ur":5641,"air":641360},{"ur":5737,"air":651370},{"ur":5843,"air":661098},{"ur":5946,"air":673598},{"ur":6056,"air":686974},{"ur":6159,"air":697844},{"ur":6256,"air":707967},{"ur":6366,"air":720052},{"ur":6468,"air":732511},{"ur":6582,"air":743681},{"ur":6692,"air":757517},{"ur":6800,"air":768611},{"ur":6919,"air":781525},{"ur":7036,"air":795064},{"ur":7141,"air":806823},{"ur":7245,"air":819493},{"ur":7360,"air":833200},{"ur":7466,"air":848290},{"ur":7570,"air":859488},{"ur":7686,"air":874752},{"ur":7797,"air":888309},{"ur":7912,"air":903348},{"ur":8026,"air":920910},{"ur":8130,"air":933806},{"ur":8229,"air":948876},{"ur":8334,"air":965845},{"ur":8428,"air":978036},{"ur":8531,"air":993492},{"ur":8643,"air":1010934},{"ur":8749,"air":1024049},{"ur":8852,"air":1040387},{"ur":8951,"air":1055816},{"ur":9057,"air":1070983},{"ur":9161,"air":1091239},{"ur":9269,"air":1108363},{"ur":9364,"air":1126814},{"ur":9469,"air":1145041},{"ur":9577,"air":1167857},{"ur":9674,"air":1183901},{"ur":9771,"air":1197906},{"ur":9873,"air":1219504},{"ur":9967,"air":1242227}];

  const estimateUgeacRank = (r) => {
    if (!r) return 0;
    if (r <= UGEAC_RANK_MAP[0].air) return Math.max(1, Math.floor((r / UGEAC_RANK_MAP[0].air) * UGEAC_RANK_MAP[0].ur));
    for (let i = 0; i < UGEAC_RANK_MAP.length - 1; i++) {
      const p1 = UGEAC_RANK_MAP[i], p2 = UGEAC_RANK_MAP[i+1];
      if (r >= p1.air && r <= p2.air) return Math.floor(p1.ur + ((r - p1.air) / (p2.air - p1.air)) * (p2.ur - p1.ur));
    }
    const last = UGEAC_RANK_MAP[UGEAC_RANK_MAP.length - 1];
    return Math.floor(last.ur + (r - last.air) * 0.008);
  };

  const calculateResults = () => {
    if (!rank && !ugeacInput) return;
    const ugeacRank = ugeacInput ? parseInt(ugeacInput) : estimateUgeacRank(parseInt(rank));
    const eligibleCategories = ['UR'];
    if (category !== 'UR') eligibleCategories.push(category);
    if (gender === 'Female' && !eligibleCategories.includes('RCG')) eligibleCategories.push('RCG');

    const seen = new Map();
    const map2024 = new Map();
    ugeacData.data2024.forEach(d => map2024.set(`${d.collegeId}-${d.branch}-${d.category}-${d.seatType}`, d));
    const map2025 = new Map();
    ugeacData.data2025.forEach(d => map2025.set(`${d.collegeId}-${d.branch}-${d.category}-${d.seatType}`, d));

    const processSet = (data) => {
      data.forEach(d => {
        if (!eligibleCategories.includes(d.category)) return;
        if (gender === 'Male' && d.seatType === 'Female') return;
        if (targetColleges.length > 0 && !targetColleges.includes(d.collegeId)) return;
        if (mode === 'finder' && targetBranches.length > 0 && !targetBranches.includes(d.branch)) return;

        const key = `${d.collegeId}-${d.branch}-${d.category}-${d.seatType}`;
        const collegeInfo = colleges.find(c => c.id === d.collegeId);
        if (!collegeInfo) return;

        const ratio = { 'EBC': 0.239, 'BC': 0.388, 'SC': 0.065, 'ST': 0.003, 'EWS': 0.227 }[d.category] || 1;
        const compRank = d.category === 'UR' ? ugeacRank : Math.floor(ugeacRank * ratio);
        
        const cut24 = map2024.get(key), cut25 = map2025.get(key);
        const latestClosing = cut25 ? cut25.closing : (cut24 ? cut24.closing : 99999);
        
        let chance = 'No';
        if (compRank <= latestClosing) chance = 'High';
        else if (compRank <= latestClosing * 1.1) chance = 'Medium';
        else if (compRank <= latestClosing * 1.25) chance = 'Low';

        if (!seen.has(key) || (cut25 && cut25 === d)) {
          seen.set(key, { college: collegeInfo, branch: d.branch, chance, cutoff25: cut25 ? cut25.closing : 'N/A', cutoff24: cut24 ? cut24.closing : 'N/A', cat: d.category, seatType: d.seatType, myCompRank: compRank });
        }
      });
    };

    processSet(ugeacData.data2024); processSet(ugeacData.data2025);

    const allRes = Array.from(seen.values()).sort((a,b) => {
      const score = (c) => c === 'High' ? 1 : c === 'Medium' ? 2 : c === 'Low' ? 3 : 4;
      return score(a.chance) - score(b.chance) || a.college.tier - b.college.tier;
    });

    let mockAllotment = null, mockDiscussions = [];
    if (choices.length > 0) {
      choices.forEach((ch, i) => {
        const entry = allRes.find(r => r.college.id === ch.collegeId && r.branch === ch.branch);
        if (entry && (entry.chance === 'High' || entry.chance === 'Medium')) {
          if (!mockAllotment) mockAllotment = { choice: ch, choiceNumber: i + 1, entry };
          mockDiscussions.push({ choiceNumber: i + 1, status: entry.chance, entry, choice: ch });
        } else {
          mockDiscussions.push({ choiceNumber: i + 1, status: 'No Chance', entry: null, choice: ch });
        }
      });
    }

    setResults({ all: allRes, calculatedRank: ugeacRank, mockAllotment, mockDiscussions });
    setHasPredicted(true);
  };

  const downloadResultsPDF = () => {
    const doc = new jsPDF();
    doc.setFillColor(30, 41, 59); doc.rect(0, 0, 210, 48, 'F');
    doc.setTextColor(255, 255, 255); doc.setFontSize(22); doc.setFont("helvetica", "bold");
    doc.text("APNA COLLEGE BIHAR", 14, 22); doc.setFontSize(10); doc.text("OFFICIAL UGEAC COUNSELLING REPORT (2024-2025)", 14, 32);
    
    autoTable(doc, {
      startY: 55,
      head: [['#', 'College', 'Branch', '2024 CO', '2025 CO', 'Chance']],
      body: results.all.slice(0, 50).map((r, i) => [i+1, r.college.name, r.branch, r.cutoff24, r.cutoff25, r.chance]),
      theme: 'grid', styles: { fontSize: 7 }
    });
    doc.save(`UGEAC_Analysis_2025.pdf`);
  };

  const sortedColleges = useMemo(() => [...colleges].sort((a,b) => a.name.localeCompare(b.name)), []);

  return (
    <div className="main-app-container">
      {loadingData ? (
        <div className="flex flex-col items-center justify-center p-20 glass-panel min-h-[400px]">
          <div className="relative w-20 h-20 mb-8">
            <div className="absolute inset-0 border-4 border-indigo-500/20 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
            <ShieldCheck className="absolute inset-0 m-auto text-indigo-400 animate-pulse" size={32} />
          </div>
          <h3 className="text-white font-black uppercase tracking-widest text-sm">Syncing Neural Database</h3>
          <p className="text-slate-500 text-[10px] uppercase tracking-[0.3em] mt-2">UGEAC 2025 Intelligence v2.0</p>
        </div>
      ) : (
      <>
        <header className="app-header">
           <div className="header-content">
              <div className="flex justify-center mb-8">
                 <div className="relative group">
                   <div className="absolute inset-0 bg-indigo-500 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                   <div className="bg-slate-900/50 p-2 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden floating-icon">
                      <img src="/logo.jpg" alt="Logo" className="w-20 h-20 rounded-2xl" />
                   </div>
                 </div>
              </div>
              <h1>UGEAC <span className="highlight-text">PREDICTOR</span></h1>
              <p>Bihar's most accurate engineering admission AI. Predict your college choices based on historical round-wise cutoffs with 99% precision.</p>
              <div className="nav-pills">
                 <button onClick={() => setMode('explore')} className={`nav-btn ${mode === 'explore' ? 'active' : ''}`}><LayoutGrid size={16} /> Explore</button>
                 <button onClick={() => setMode('finder')} className={`nav-btn ${mode === 'finder' ? 'active' : ''}`}><Filter size={16} /> Finder</button>
                 <button onClick={() => setMode('wizard')} className={`nav-btn ${mode === 'wizard' ? 'active' : ''}`}><Zap size={16} /> Wizard</button>
              </div>
           </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
           <div className="lg:col-span-4 space-y-8">
              <section className="glass-panel">
                 <h2 className="section-title"><Building2 size={18} /> Candidate Profile</h2>
                 <div className="space-y-6">
                    <div className="input-group">
                       <label className="premium-label">JEE Main CRL Rank</label>
                       <input type="number" className="premium-input" placeholder="e.g. 85000" value={rank} onChange={(e) => setRank(e.target.value)} />
                    </div>
                    <div className="input-group">
                       <label className="premium-label">UGEAC State Rank (Optional)</label>
                       <input type="number" className="premium-input" placeholder="e.g. 1200" value={ugeacInput} onChange={(e) => setUgeacInput(e.target.value)} />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                       <div className="input-group">
                          <label className="premium-label">Category</label>
                          <select className="premium-input" value={category} onChange={(e) => setCategory(e.target.value)}>
                             {['UR', 'EWS', 'BC', 'EBC', 'SC', 'ST'].map(c => <option key={c} value={c}>{c}</option>)}
                          </select>
                       </div>
                       <div className="input-group">
                          <label className="premium-label">Gender</label>
                          <select className="premium-input" value={gender} onChange={(e) => setGender(e.target.value)}>
                             <option value="Male">Male</option>
                             <option value="Female">Female</option>
                          </select>
                       </div>
                    </div>
                    <button onClick={calculateResults} className="btn-primary group">
                      <Zap size={18} className="group-hover:fill-current transition-all" /> 
                      Calculate Chances
                    </button>
                 </div>
              </section>

              {mode === 'finder' && (
                <section className="glass-panel animate-in fade-in">
                   <h2 className="section-title"><Filter size={18} /> Filters</h2>
                   <div className="space-y-4">
                      <button onClick={() => setIsFinderCollegeOpen(true)} className="w-full flex items-center justify-between p-4 bg-slate-950/50 border border-white/5 rounded-2xl text-slate-300 hover:border-indigo-500/30 transition-all group">
                         <span className="text-xs font-bold uppercase tracking-widest">{targetColleges.length > 0 ? `${targetColleges.length} Selected` : 'Select Institutes'}</span>
                         <ChevronDown size={16} className="group-hover:text-indigo-400 transition-colors" />
                      </button>
                   </div>
                </section>
              )}
           </div>

           <div className="lg:col-span-8">
              {!hasPredicted ? (
                 <div className="empty-state">
                    <div className="w-20 h-20 bg-indigo-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-indigo-500/20">
                      <ShieldCheck size={40} className="text-indigo-400" />
                    </div>
                    <h3 className="text-white">Analysis Ready</h3>
                    <p>Enter your credentials to evaluate 38+ Bihar Engineering Colleges instantly.</p>
                 </div>
              ) : (
                 <div className="space-y-8 animate-in slide-in-from-bottom">
                    <div className="results-header">
                       <div className="flex flex-col gap-1">
                          <h2 className="section-title mb-0"><Wifi size={18} className="animate-pulse" /> Analysis Results</h2>
                          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest ml-7">Estimated Rank: {results.calculatedRank}</p>
                       </div>
                       <div className="flex gap-4">
                          <div className="stats-pill">{results.all.length} COLLEGES FOUND</div>
                          <button onClick={downloadResultsPDF} className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all shadow-lg shadow-indigo-900/20 active:scale-95"><Download size={14} /> Report</button>
                       </div>
                    </div>

                    <div className="premium-table-container">
                       <table className="premium-table">
                          <thead>
                             <tr><th>Institute & Branch</th><th className="text-center">2024 CO</th><th className="text-center">2025 CO</th><th className="text-center">Success Probability</th></tr>
                          </thead>
                          <tbody>
                             {results.all.slice(0, visibleCount).map((item, idx) => (
                                <tr key={idx} onClick={() => setSelectedCollege(item.college)}>
                                   <td>
                                      <div className="college-name">{item.college.name}</div>
                                      <div className="branch-name">{branchMapping[item.branch] || item.branch}</div>
                                   </td>
                                   <td className="text-center">
                                      <span className="text-[11px] font-black text-slate-500 font-mono">{item.cutoff24}</span>
                                   </td>
                                   <td className="text-center">
                                      <span className="text-[12px] font-black text-indigo-400 font-mono">{item.cutoff25}</span>
                                   </td>
                                   <td className="text-center">
                                      <span className={`chance-badge chance-${item.chance}`}>
                                        <div className={`w-1.5 h-1.5 rounded-full ${item.chance === 'High' ? 'bg-emerald-400 animate-pulse' : item.chance === 'Medium' ? 'bg-amber-400' : 'bg-rose-400'}`}></div>
                                        {item.chance}
                                      </span>
                                   </td>
                                </tr>
                             ))}
                          </tbody>
                       </table>
                    </div>
                    {visibleCount < results.all.length && (
                      <button onClick={() => setVisibleCount(v => v + 50)} className="w-full p-8 border-2 border-dashed border-white/5 rounded-3xl text-slate-500 font-black uppercase tracking-[0.3em] text-[10px] hover:border-indigo-500/30 hover:text-indigo-400 transition-all bg-white/5">
                        Load Neural Data
                      </button>
                    )}
                 </div>
              )}
           </div>
        </div>

        <footer className="mt-32 py-16 border-t border-white/5 text-center">
           <img src="/logo.jpg" alt="Logo" className="w-14 h-14 rounded-full mx-auto mb-8 grayscale opacity-30 hover:opacity-100 transition-opacity" />
           <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Official Admissions Intelligence Report</p>
           <p className="text-indigo-400 font-black text-xs uppercase tracking-[0.5em]">APNA COLLEGE BIHAR 2025</p>
        </footer>
      </>
      )}

      {/* Modals */}
      {isFinderCollegeOpen && (
        <div className="modal-backdrop" onClick={() => setIsFinderCollegeOpen(false)}>
          <div className="modal-box" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsFinderCollegeOpen(false)}><X size={20} /></button>
            <h3 className="text-2xl font-bold text-white mb-6">Select Institutes</h3>
            <div className="space-y-2 max-h-60 overflow-y-auto pr-2">
              {sortedColleges.map(c => (
                <label key={c.id} className="flex items-center gap-3 p-3 bg-slate-900/50 rounded-xl cursor-pointer border border-transparent hover:border-indigo-500/30">
                  <input type="checkbox" className="w-5 h-5 rounded accent-indigo-500" checked={targetColleges.includes(c.id)} onChange={(e) => e.target.checked ? setTargetColleges([...targetColleges, c.id]) : setTargetColleges(targetColleges.filter(id => id !== c.id))} />
                  <span className="text-slate-200 font-semibold">{c.name}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      )}

      {selectedCollege && (
        <div className="modal-backdrop" onClick={() => setSelectedCollege(null)}>
          <div className="modal-box" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedCollege(null)}><X size={20} /></button>
            <h3 className="text-2xl font-bold text-white mb-2">{selectedCollege.name}</h3>
            <p className="text-indigo-400 font-bold mb-6 flex items-center gap-2"><MapPin size={16} /> {selectedCollege.location}</p>
            <div className="p-6 bg-indigo-500/10 rounded-2xl border border-indigo-500/20 mb-6">
               <h4 className="text-sm font-bold text-indigo-400 uppercase mb-3">College Insight</h4>
               <p className="text-slate-300 text-sm leading-relaxed">{selectedCollege.description || "Leading technical institution in Bihar offering state-of-the-art engineering programs."}</p>
            </div>
            <a href={selectedCollege.website} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 py-4 bg-indigo-600 text-white rounded-2xl font-bold text-sm">Visit Website <ExternalLink size={16} /></a>
          </div>
        </div>
      )}
    </div>
  );
}

export default UgeacPredictor;
