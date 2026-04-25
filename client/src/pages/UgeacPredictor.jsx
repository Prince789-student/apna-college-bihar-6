import React, { useState, useMemo, useEffect } from 'react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import '../UgeacPredictor.css';
import { colleges } from '../UgeacData';
import { Send, MapPin, ExternalLink, ShieldCheck, AlertTriangle, GraduationCap, Info, ChevronDown, ChevronUp, CheckCircle2, Building2, Wifi, BookOpen, Trash2, Plus, Minus, Layers, Search, Zap, Filter, LayoutGrid, Download, X, Calculator } from 'lucide-react';

function UgeacPredictor() {
  const [rank, setRank] = useState('');
  const [ugeacInput, setUgeacInput] = useState('');
  const [category, setCategory] = useState('UR');
  const [gender, setGender] = useState('Male');
  const [catInput, setCatInput] = useState('');
  
  const [mode, setMode] = useState('explore'); // explore, finder, wizard, guide
  const [targetColleges, setTargetColleges] = useState([]);
  const [targetBranches, setTargetBranches] = useState([]);
  const [choices, setChoices] = useState([]); 
  const [visibleCount, setVisibleCount] = useState(50);
  const [finderPriority, setFinderPriority] = useState('college'); // college or branch

  const [ugeacData, setUgeacData] = useState({ data2024: [], data2025: [], branches: [] });
  const [seatMatrix, setSeatMatrix] = useState([]);
  const [loadingData, setLoadingData] = useState(true);

  const [isFinderCollegeOpen, setIsFinderCollegeOpen] = useState(false);
  const [finderCollegeSearch, setFinderCollegeSearch] = useState("");
  const [isFinderBranchOpen, setIsFinderBranchOpen] = useState(false);
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

  useEffect(() => {
    if (category === 'UR') setCatInput('');
  }, [category]);

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
    Promise.all([
      fetch('/data/cutoffs.json').then(res => res.json()),
      fetch('/data/seat_matrix.json').then(res => res.json()).catch(() => [])
    ]).then(([json, seats]) => {
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
        setSeatMatrix(seats);
        setLoadingData(false);
      })
      .catch(err => { console.error(err); setLoadingData(false); });
  }, []);

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

        const key = `${d.collegeId}-${d.branch}-${d.category}-${d.seatType}`;
        const collegeInfo = colleges.find(c => c.id === d.collegeId);
        if (!collegeInfo) return;

        const ratio = { 'EBC': 0.239, 'BC': 0.388, 'SC': 0.065, 'ST': 0.003, 'EWS': 0.227 }[d.category] || 1;
        const compRank = (d.category === category && catInput) ? parseInt(catInput) : (d.category === 'UR' ? ugeacRank : Math.floor(ugeacRank * ratio));
        
        const cut24 = map2024.get(key), cut25 = map2025.get(key);
        const latestClosing = cut25 ? cut25.closing : (cut24 ? cut24.closing : 99999);
        
        let chance = 'No';
        if (compRank <= latestClosing) chance = 'High';
        else if (compRank <= latestClosing * 1.1) chance = 'Medium';
        else if (compRank <= latestClosing * 1.25) chance = 'Low';

        if (!seen.has(key) || (cut25 && cut25 === d)) {
          const seatInfo = seatMatrix.find(s => s.college === collegeInfo.name && s.branch === d.branch);
          const availableSeats = seatInfo ? seatInfo.seats[category === 'UR' ? (gender === 'Female' ? 'F_UR' : 'UR') : category] : 'N/A';

          seen.set(key, { 
            college: collegeInfo, 
            branch: d.branch, 
            chance, 
            cutoff25: cut25 ? cut25.closing : 'N/A', 
            cutoff24: cut24 ? cut24.closing : 'N/A', 
            cat: d.category, 
            seatType: d.seatType, 
            myCompRank: compRank,
            seats: availableSeats,
            collegeId: collegeInfo.id
          });
        }
      });
    };

    processSet(ugeacData.data2024); processSet(ugeacData.data2025);

    const fullRes = Array.from(seen.values());
    
    // Visual Filter
    const filteredRes = fullRes.filter(d => {
      if (targetColleges.length > 0 && !targetColleges.includes(d.collegeId)) return false;
      if (targetBranches.length > 0 && !targetBranches.includes(d.branch)) return false;
      return true;
    }).sort((a,b) => {
      const score = (c) => c === 'High' ? 1 : c === 'Medium' ? 2 : c === 'Low' ? 3 : 4;
      
      if (finderPriority === 'college') {
        const cIdxA = targetColleges.indexOf(a.collegeId);
        const cIdxB = targetColleges.indexOf(b.collegeId);
        if (cIdxA !== -1 && cIdxB !== -1 && cIdxA !== cIdxB) return cIdxA - cIdxB;
        if (cIdxA !== -1 && cIdxB === -1) return -1;
        if (cIdxA === -1 && cIdxB !== -1) return 1;

        const bIdxA = targetBranches.indexOf(a.branch);
        const bIdxB = targetBranches.indexOf(b.branch);
        if (bIdxA !== -1 && bIdxB !== -1 && bIdxA !== bIdxB) return bIdxA - bIdxB;
      } else {
        const bIdxA = targetBranches.indexOf(a.branch);
        const bIdxB = targetBranches.indexOf(b.branch);
        if (bIdxA !== -1 && bIdxB !== -1 && bIdxA !== bIdxB) return bIdxA - bIdxB;
        if (bIdxA !== -1 && bIdxB === -1) return -1;
        if (bIdxA === -1 && bIdxB !== -1) return 1;

        const cIdxA = targetColleges.indexOf(a.collegeId);
        const cIdxB = targetColleges.indexOf(b.collegeId);
        if (cIdxA !== -1 && cIdxB !== -1 && cIdxA !== cIdxB) return cIdxA - cIdxB;
      }
      
      return score(a.chance) - score(b.chance) || a.college.tier - b.college.tier;
    });

    // Mock Allotment logic always uses FULL results so choices remain stable
    let mockAllotment = null, mockDiscussions = [];
    choices.forEach((ch, i) => {
      const entry = fullRes.find(r => r.collegeId === ch.collegeId && r.branch === ch.branch);
      if (entry && (entry.chance === 'High' || entry.chance === 'Medium')) {
        if (!mockAllotment) mockAllotment = { choice: ch, choiceNumber: i + 1, entry };
        mockDiscussions.push({ choiceNumber: i + 1, status: entry.chance, entry, choice: ch });
      } else {
        mockDiscussions.push({ choiceNumber: i + 1, status: 'No Chance', entry: null, choice: ch });
      }
    });

    setResults({ all: filteredRes, full: fullRes, calculatedRank: ugeacRank, mockAllotment, mockDiscussions });
    setHasPredicted(true);
  };


  // Sync mock allotment whenever choices or results change
  useEffect(() => {
    if (hasPredicted && results.full && results.full.length > 0) {
      let mockAllotment = null, mockDiscussions = [];
      choices.forEach((ch, i) => {
        const entry = results.full.find(r => r.collegeId === ch.collegeId && r.branch === ch.branch);
        if (entry && (entry.chance === 'High' || entry.chance === 'Medium')) {
          if (!mockAllotment) mockAllotment = { choice: ch, choiceNumber: i + 1, entry };
          mockDiscussions.push({ choiceNumber: i + 1, status: entry.chance, entry, choice: ch });
        } else {
          mockDiscussions.push({ choiceNumber: i + 1, status: 'No Chance', entry: null, choice: ch });
        }
      });
      setResults(prev => ({ ...prev, mockAllotment, mockDiscussions }));
    }
  }, [choices, hasPredicted, results.full]);

  const addChoice = (collegeId, branch, collegeName) => {
    if (choices.find(c => c.collegeId === collegeId && c.branch === branch)) return;
    setChoices([...choices, { 
      id: `choice-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      collegeId, 
      branch, 
      collegeName: collegeName 
    }]);
  };

  const moveTargetCollege = (idx, direction) => {
    if (idx + direction < 0 || idx + direction >= targetColleges.length) return;
    const newTargets = [...targetColleges];
    const item = newTargets.splice(idx, 1)[0];
    newTargets.splice(idx + direction, 0, item);
    setTargetColleges(newTargets);
  };

  const moveTargetBranch = (idx, direction) => {
    if (idx + direction < 0 || idx + direction >= targetBranches.length) return;
    const newTargets = [...targetBranches];
    const item = newTargets.splice(idx, 1)[0];
    newTargets.splice(idx + direction, 0, item);
    setTargetBranches(newTargets);
  };

  const removeChoice = (idx) => {
    setChoices(choices.filter((_, i) => i !== idx));
  };

  const moveChoice = (idx, direction) => {
    if (idx + direction < 0 || idx + direction >= choices.length) return;
    const newChoices = [...choices];
    const item = newChoices.splice(idx, 1)[0];
    newChoices.splice(idx + direction, 0, item);
    setChoices(newChoices);
  };

  const downloadResultsPDF = async () => {
    const doc = new jsPDF();
    
    // Load Logo
    let logoData = null;
    try {
      const resp = await fetch('/logo.jpg');
      const blob = await resp.blob();
      logoData = await new Promise(r => {
        const reader = new FileReader();
        reader.onloadend = () => r(reader.result);
        reader.readAsDataURL(blob);
      });
    } catch(e) {}

    // Header
    doc.setFillColor(15, 23, 42); doc.rect(0, 0, 210, 60, 'F');
    if (logoData) {
      doc.addImage(logoData, 'JPEG', 15, 12, 12, 12);
    }
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(22); doc.setFont("helvetica", "bold");
    doc.text("APNA COLLEGE BIHAR", logoData ? 32 : 15, 22);
    doc.setFontSize(9); doc.setFont("helvetica", "normal");
    doc.text("Official Counseling & Admission Support Portal", logoData ? 32 : 15, 30);
    doc.text("Visit: www.apnacollegebihar.online", 15, 42);
    doc.setTextColor(129, 140, 248);
    doc.text("High-Precision UGEAC 2025 Analysis Report", 15, 52);
    
    // Candidate Info
    doc.setFillColor(248, 250, 252); doc.rect(15, 70, 180, 25, 'F');
    doc.setTextColor(30, 41, 59);
    doc.setFontSize(9); doc.setFont("helvetica", "bold");
    doc.text(`JEE Rank: ${rank || 'N/A'}`, 20, 80);
    doc.text(`UGEAC Rank: ${results.calculatedRank}`, 70, 80);
    doc.text(`Category: ${category}`, 120, 80);
    doc.text(`Gender: ${gender}`, 160, 80);

    let currentY = 105;

    // Platform Intro
    doc.setTextColor(50, 50, 50);
    doc.setFontSize(10);
    doc.text("Why Apna College Bihar?", 15, currentY);
    doc.setFontSize(8); doc.setFont("helvetica", "normal");
    doc.text("We provide Bihar's most accurate counseling tools and verified round-wise historical cutoffs.", 15, currentY + 6);
    currentY += 20;

    // Mock Allotment
    if (results.mockAllotment) {
      doc.setFillColor(238, 242, 255); doc.rect(15, currentY, 180, 20, 'F');
      doc.setTextColor(79, 70, 229);
      doc.setFontSize(10); doc.setFont("helvetica", "bold");
      doc.text("PREDICTED ALLOTMENT:", 20, currentY + 8);
      doc.setTextColor(0, 0, 0);
      doc.setFontSize(12);
      doc.text(`${results.mockAllotment.choice.collegeName} - ${results.mockAllotment.choice.branch}`, 20, currentY + 16);
      currentY += 30;
    }

    // Results Table
    autoTable(doc, {
      startY: currentY,
      head: [['#', 'Institute Name', 'Branch', 'Your Rank', '2024 CO', '2025 CO', 'Status']],
      body: results.all.map((r, i) => [i+1, r.college.name, r.branch, `#${r.myCompRank} (${r.cat})`, r.cutoff24, r.cutoff25, r.chance]),
      theme: 'striped',
      headStyles: { fillColor: [79, 70, 229], fontSize: 8 },
      styles: { fontSize: 7 },
      margin: { left: 15, right: 15 }
    });

    // Watermark & Footer
    const pageCount = doc.internal.getNumberOfPages();
    for(let i = 1; i <= pageCount; i++) {
        doc.setPage(i);
        
        // Watermark
        doc.saveGraphicsState();
        doc.setGState(new doc.GState({opacity: 0.05}));
        doc.setFontSize(50);
        doc.setTextColor(150, 150, 150);
        doc.text("APNA COLLEGE BIHAR", 105, 150, { align: 'center', angle: 45 });
        doc.restoreGraphicsState();

        doc.setFontSize(8);
        doc.setTextColor(150, 150, 150);
        doc.text("Join our Telegram/WhatsApp for Live Counseling Help", 15, doc.internal.pageSize.height - 15);
        doc.text("© 2025 APNA COLLEGE BIHAR. This AI report is for guidance only.", 15, doc.internal.pageSize.height - 10);
        doc.text(`Page ${i} of ${pageCount}`, 180, doc.internal.pageSize.height - 10);
    }
    
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
            <ShieldCheck className="absolute inset-0 m-auto text-indigo-600 animate-pulse" size={32} />
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
                 <button onClick={() => setMode('finder')} className={`nav-btn ${mode === 'finder' ? 'active' : ''}`}><Search size={16} /> College Finder</button>
                 <button onClick={() => setMode('wizard')} className={`nav-btn ${mode === 'wizard' ? 'active' : ''}`}><Zap size={16} /> Choice Wizard</button>
                 <button onClick={() => setMode('guide')} className={`nav-btn ${mode === 'guide' ? 'active' : ''}`}><BookOpen size={16} /> Guide</button>
              </div>
           </div>
        </header>
        
        {mode === 'guide' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in">
             <div className="glass-panel border-indigo-500/30">
                <h3 className="section-title"><ShieldCheck /> Documents Required</h3>
                <ul className="space-y-4 text-sm font-medium text-slate-300">
                   <li className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5"><CheckCircle2 className="text-emerald-400" size={18} /> UGEAC Rank Card 2024/25</li>
                   <li className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5"><CheckCircle2 className="text-emerald-400" size={18} /> Part A & B of Application Form</li>
                   <li className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5"><CheckCircle2 className="text-emerald-400" size={18} /> JEE Main Admit Card & Rank Card</li>
                   <li className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5"><CheckCircle2 className="text-emerald-400" size={18} /> Class 10 & 12 Marks-sheet & Certificate</li>
                   <li className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5"><CheckCircle2 className="text-emerald-400" size={18} /> Residence & Category Certificate (Bihar)</li>
                   <li className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5"><CheckCircle2 className="text-emerald-400" size={18} /> 6 Passport Size Photographs (Original)</li>
                   <li className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5"><CheckCircle2 className="text-emerald-400" size={18} /> Choice Slip & Allotment Letter (3 copies)</li>
                </ul>
             </div>
             <div className="glass-panel border-indigo-500/30">
                <h3 className="section-title"><Layers /> Counselling Process</h3>
                <div className="space-y-6">
                   {[
                      { step: "01", title: "Registration", desc: "Pay UGEAC registration fee (approx ₹1200) on BCECEB portal." },
                      { step: "02", title: "Choice Filling", desc: "Fill your college preferences in decreasing order of priority." },
                      { step: "03", title: "First Round Allotment", desc: "Check allotted college. If satisfied, download letter & go for DV." },
                      { step: "04", title: "Document Verification (DV)", desc: "Visit designated nodal center with all original documents." },
                      { step: "05", title: "Admission/Sliding", desc: "Pay admission fee or opt for 'Auto Upgradation' for Round 2." }
                   ].map(s => (
                      <div key={s.step} className="flex gap-4 items-start">
                         <div className="text-2xl font-black text-indigo-500/50 font-mono leading-none">{s.step}</div>
                         <div>
                            <h4 className="text-white font-bold text-sm mb-1">{s.title}</h4>
                            <p className="text-[11px] text-slate-500 leading-relaxed uppercase font-black">{s.desc}</p>
                         </div>
                      </div>
                   ))}
                </div>
             </div>
             <div className="md:col-span-2 glass-panel border-emerald-500/30 bg-emerald-500/5">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                   <div className="flex items-center gap-6">
                      <div className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center border border-emerald-500/20 shadow-inner">
                         <Send size={32} className="text-emerald-400" />
                      </div>
                      <div>
                         <h3 className="text-xl font-black text-white uppercase tracking-tighter">Live Support Community</h3>
                         <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Join 5000+ Bihar Students for Real-time Help</p>
                      </div>
                   </div>
                   <div className="flex gap-4 w-full md:w-auto">
                      <a href="https://t.me/apnacollegebihar" target="_blank" rel="noreferrer" className="flex-1 md:flex-none px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-black text-[10px] uppercase tracking-widest transition-all text-center">Telegram Group</a>
                      <a href="https://whatsapp.com/channel/..." target="_blank" rel="noreferrer" className="flex-1 md:flex-none px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-black text-[10px] uppercase tracking-widest transition-all text-center">WhatsApp Channel</a>
                   </div>
                </div>
             </div>
          </div>
        ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
           <div className="lg:col-span-4 space-y-8">
              {/* Profile & Controls */}
              <section className="glass-panel border-indigo-500/20">
                 <h2 className="section-title text-indigo-600"><Calculator size={18} /> Candidate Info</h2>
                 
                 <div className="space-y-6">
                    {/* Rank Converter Insight */}
                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                        <div className="flex items-center justify-between mb-4">
                           <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">JEE AIR Rank</span>
                           <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">{ugeacInput ? 'Manual UGEAC' : 'Est. UGEAC'}</span>
                        </div>
                        <div className="flex items-center gap-4">
                           <input type="number" value={rank} onChange={(e) => setRank(e.target.value)} className="w-1/2 bg-transparent border-b border-slate-200 text-xl font-black text-slate-900 outline-none focus:border-indigo-500 transition-colors" placeholder="0" />
                           <div className="w-px h-8 bg-slate-200"></div>
                           <div className="w-1/2 text-2xl font-[1000] text-indigo-600 tracking-tighter">#{ugeacInput || estimateUgeacRank(parseInt(rank)) || 0}</div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                       <div className="input-group">
                          <label className="premium-label">UGEAC State Rank (UR)</label>
                          <input type="number" className="premium-input" placeholder="Overall Merit" value={ugeacInput} onChange={(e) => setUgeacInput(e.target.value)} />
                       </div>
                       {category !== 'UR' && (
                         <div className="input-group animate-in slide-in-from-top-2">
                            <label className="premium-label">{category} Category Rank</label>
                            <input type="number" className="premium-input border-emerald-500/30" placeholder="Optional" value={catInput} onChange={(e) => setCatInput(e.target.value)} />
                         </div>
                       )}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                       <div className="input-group">
                          <label className="premium-label">Category</label>
                          <select className="premium-input" value={category} onChange={(e) => setCategory(e.target.value)}>
                             {['UR', 'EWS', 'BC', 'EBC', 'SC', 'ST', 'RCG', 'DQ', 'SMQ'].map(c => <option key={c} value={c}>{c}</option>)}
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
                      {mode === 'wizard' ? 'Run Allotment Engine' : 'Calculate Chances'}
                    </button>
                 </div>
              </section>

              {(mode === 'finder' || mode === 'wizard') && (
                <section className="glass-panel animate-in fade-in">
                   <h2 className="section-title"><Filter size={18} /> Multi-Filters</h2>
                   
                   <div className="mb-6">
                      <label className="premium-label">Result Sorting Priority</label>
                      <div className="flex bg-slate-100 p-1 rounded-xl gap-1">
                         <button onClick={() => setFinderPriority('college')} className={`flex-1 py-2 text-[9px] font-black uppercase rounded-lg transition-all ${finderPriority === 'college' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-500 hover:bg-white'}`}>Prefer College</button>
                         <button onClick={() => setFinderPriority('branch')} className={`flex-1 py-2 text-[9px] font-black uppercase rounded-lg transition-all ${finderPriority === 'branch' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-500 hover:bg-white'}`}>Prefer Branch</button>
                      </div>
                   </div>

                   <div className="space-y-4">
                      <div>
                        <label className="premium-label">Institutes Selection</label>
                        <button onClick={() => setIsFinderCollegeOpen(true)} className="w-full flex items-center justify-between p-4 bg-white border border-slate-200 rounded-2xl text-slate-600 hover:border-indigo-500/30 transition-all group shadow-sm">
                           <span className="text-[10px] font-black uppercase tracking-widest">{targetColleges.length > 0 ? `${targetColleges.length} Selected` : 'All Institutes'}</span>
                           <Building2 size={14} className="group-hover:text-indigo-600 transition-colors" />
                        </button>
                      </div>
                      <div>
                        <label className="premium-label">Branch Filtering</label>
                        <button onClick={() => setIsFinderBranchOpen(true)} className="w-full flex items-center justify-between p-4 bg-white border border-slate-200 rounded-2xl text-slate-600 hover:border-indigo-500/30 transition-all group shadow-sm">
                           <span className="text-[10px] font-black uppercase tracking-widest">{targetBranches.length > 0 ? `${targetBranches.length} Selected` : 'All Branches'}</span>
                           <GraduationCap size={14} className="group-hover:text-indigo-600 transition-colors" />
                        </button>
                      </div>
                   </div>
                </section>
              )}

              {mode === 'wizard' && (
                <section className="glass-panel animate-in fade-in">
                   <div className="flex items-center justify-between mb-6">
                      <h2 className="section-title mb-0"><Layers size={18} /> My Preferences</h2>
                      <span className="stats-pill">{choices.length} Choices</span>
                   </div>
                   <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                     {choices.map((ch, idx) => {
                       const statusObj = results.mockDiscussions?.find(d => d.choice.id === ch.id);
                       const status = statusObj ? statusObj.status : 'Pending';
                       
                       return (
                       <div key={ch.id || idx} className={`p-4 bg-white border border-slate-100 rounded-2xl group relative overflow-hidden transition-all hover:border-indigo-200 shadow-sm border-l-4 ${status === 'High' ? 'border-l-emerald-500' : status === 'Medium' ? 'border-l-amber-500' : 'border-l-slate-700'}`}>
                          <div className="flex items-center gap-4">
                             <div className="flex flex-col gap-1">
                                <button onClick={(e) => { e.stopPropagation(); moveChoice(idx, -1); }} className="text-slate-600 hover:text-indigo-600 disabled:opacity-20 p-1 bg-slate-50 rounded-lg" disabled={idx === 0} type="button"><ChevronUp size={16}/></button>
                                <span className="text-[10px] font-[1000] text-indigo-600 text-center py-1">{idx + 1}</span>
                                <button onClick={(e) => { e.stopPropagation(); moveChoice(idx, 1); }} className="text-slate-600 hover:text-indigo-600 disabled:opacity-20 p-1 bg-slate-50 rounded-lg" disabled={idx === choices.length - 1} type="button"><ChevronDown size={16}/></button>
                             </div>
                             <div className="flex-1 min-w-0">
                                <p className="text-[11px] font-black text-slate-900 uppercase truncate tracking-tight">{ch.collegeName}</p>
                                <p className="text-[9px] font-extrabold text-indigo-600 uppercase tracking-widest mt-1">{branchMapping[ch.branch] || ch.branch}</p>
                                {statusObj && (
                                  <div className="flex items-center gap-2 mt-2">
                                     <span className={`text-[7px] font-black px-1.5 py-0.5 rounded uppercase tracking-widest ${status === 'High' ? 'bg-emerald-500/20 text-emerald-400' : status === 'Medium' ? 'bg-amber-500/20 text-amber-400' : 'bg-rose-500/20 text-rose-400'}`}>{status === 'High' ? 'Confirmed' : status === 'Medium' ? 'Probable' : 'No Chance'}</span>
                                     {statusObj.entry && <span className="text-[7px] text-slate-500 font-bold uppercase">Rank #{statusObj.entry.myCompRank} ({statusObj.entry.cat})</span>}
                                  </div>
                                )}
                             </div>
                             <button onClick={() => removeChoice(idx)} className="p-2.5 bg-rose-500/10 text-rose-500 rounded-xl hover:bg-rose-500 hover:text-white transition-all opacity-0 group-hover:opacity-100"><Trash2 size={14}/></button>
                          </div>
                       </div>
                     )})}
                      {choices.length === 0 && (
                        <div className="text-center py-10">
                           <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-100">
                              <Plus size={20} className="text-slate-600" />
                           </div>
                           <p className="text-[9px] font-black text-slate-600 uppercase tracking-widest">Priority List Empty</p>
                           <p className="text-[8px] text-slate-700 uppercase mt-1">Select from results to add</p>
                        </div>
                      )}
                   </div>
                </section>
              )}
           </div>

           <div className="lg:col-span-8">
              {!hasPredicted && mode !== 'wizard' ? (
                 <div className="empty-state">
                    <div className="w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-6 border border-indigo-100">
                      <ShieldCheck size={40} className="text-indigo-600" />
                    </div>
                    <h3 className="text-slate-900">Analysis Ready</h3>
                    <p>Enter your credentials to evaluate 38+ Bihar Engineering Colleges instantly.</p>
                 </div>
              ) : (
                 <div className="space-y-8 animate-in slide-in-from-bottom">
                    
                    {results.mockAllotment && (
                      <div className="p-8 bg-gradient-to-br from-indigo-600 to-indigo-900 rounded-[2.5rem] border border-white/10 shadow-2xl relative overflow-hidden group animate-in zoom-in-95 duration-500">
                         <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
                         <div className="relative z-10 flex items-center gap-6">
                            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20 shadow-inner">
                               <CheckCircle2 size={32} className="text-white" />
                            </div>
                            <div className="flex-1">
                               <div className="flex items-center gap-2 mb-1">
                                  <span className="text-[9px] font-black text-indigo-200 uppercase tracking-[0.3em] block">Predicted Allotment Found</span>
                                  <span className="bg-white/10 text-white text-[8px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">{results.mockAllotment.entry.cat} Category</span>
                               </div>
                               <h3 className="text-xl md:text-3xl font-[1000] text-white uppercase tracking-tighter">{results.mockAllotment.choice.collegeName}</h3>
                               <p className="text-indigo-100 font-bold uppercase text-xs tracking-widest mt-1">{branchMapping[results.mockAllotment.choice.branch] || results.mockAllotment.choice.branch}</p>
                            </div>
                            <div className="text-right hidden md:block">
                               <span className="text-[9px] font-black text-indigo-300 uppercase tracking-widest block mb-1">Priority Rank</span>
                               <span className="text-4xl font-[1000] text-white">#{results.mockAllotment.choiceNumber}</span>
                            </div>
                         </div>
                      </div>
                    )}

                    <div className="results-header">
                       <div className="flex flex-col gap-1">
                          <h2 className="section-title mb-0"><Wifi size={18} className="animate-pulse" /> Analysis Results</h2>
                          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest ml-7">Estimated Rank: {results.calculatedRank}</p>
                       </div>
                       <div className="flex gap-4">
                          <div className="stats-pill">{results.all.length} MATCHES</div>
                          <button onClick={downloadResultsPDF} className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all shadow-lg shadow-indigo-900/20 active:scale-95"><Download size={14} /> Official Report</button>
                       </div>
                    </div>

                    <div className="premium-table-container">
                       <table className="premium-table">
                          <thead>
                             <tr>
                                <th>Institute & Branch</th>
                                <th className="text-center">Your Rank</th>
                                <th className="text-center">2024 CO</th>
                                <th className="text-center">2025 CO</th>
                                <th className="text-center">Chance</th>
                                {mode === 'wizard' && <th className="text-center">Add</th>}
                             </tr>
                          </thead>
                           <tbody>
                             {results.all.slice(0, visibleCount).map((item, idx) => (
                                <tr key={idx} className="group">
                                   <td onClick={() => setSelectedCollege(item.college)} data-label="Institute & Branch">
                                      <div className="college-name">{item.college.name}</div>
                                      <div className="branch-name">{branchMapping[item.branch] || item.branch}</div>
                                   </td>
                                   <td className="text-center" data-label="Your Rank">
                                      <div className="rank-badge-box mx-auto">
                                         <span className="rank">#{item.myCompRank}</span>
                                         <span className="cat">{item.cat} CAT</span>
                                      </div>
                                   </td>
                                   <td className="text-center" data-label="2024 Cutoff">
                                      <span className="text-[11px] font-black text-slate-900 font-mono">{item.cutoff24}</span>
                                   </td>
                                   <td className="text-center" data-label="2025 Cutoff">
                                      <span className="text-[13px] font-[1000] text-indigo-700 font-mono">{item.cutoff25}</span>
                                   </td>
                                   <td className="text-center" data-label="Admission Chance">
                                      <span className={`chance-badge chance-${item.chance} flex flex-col items-center py-2 px-4 rounded-2xl min-w-[110px]`}>
                                        <div className="flex items-center gap-2 mb-1">
                                           <div className={`w-2 h-2 rounded-full ${item.chance === 'High' ? 'bg-emerald-400 animate-pulse' : item.chance === 'Medium' ? 'bg-amber-400' : 'bg-rose-400'}`}></div>
                                           <span className="text-[11px] font-black">{item.chance}</span>
                                        </div>
                                      </span>
                                   </td>
                                   {mode === 'wizard' && (
                                     <td className="text-center" data-label="Add to Preference">
                                        <button 
                                          onClick={() => addChoice(item.collegeId, item.branch, item.college.name)}
                                          disabled={choices.some(c => c.collegeId === item.collegeId && c.branch === item.branch)}
                                          className="w-10 h-10 bg-indigo-500/10 text-indigo-600 rounded-xl hover:bg-indigo-500 hover:text-white transition-all disabled:opacity-30 flex items-center justify-center mx-auto"
                                        >
                                          {choices.some(c => c.collegeId === item.collegeId && c.branch === item.branch) ? <CheckCircle2 size={16}/> : <Plus size={16}/>}
                                        </button>
                                     </td>
                                   )}
                                </tr>
                             ))}
                           </tbody>
>
                       </table>
                    </div>
                    {visibleCount < results.all.length && (
                      <button onClick={() => setVisibleCount(v => v + 50)} className="w-full p-10 border-2 border-dashed border-white/5 rounded-[2.5rem] text-slate-500 font-black uppercase tracking-[0.4em] text-[10px] hover:border-indigo-500/30 hover:text-indigo-600 transition-all bg-indigo-500/[0.02]">
                        Sync More Results
                      </button>
                    )}
                 </div>
              )}
           </div>
        </div>
        )}

        <footer className="mt-32 py-16 border-t border-white/5 text-center">
           <img src="/logo.jpg" alt="Logo" className="w-14 h-14 rounded-full mx-auto mb-8 grayscale opacity-30 hover:opacity-100 transition-opacity" />
           <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Official Admissions Intelligence Report</p>
           <p className="text-indigo-600 font-black text-xs uppercase tracking-[0.5em] mb-2">APNA COLLEGE BIHAR 2025</p>
           <p className="text-slate-600 text-[9px] font-black uppercase tracking-widest">www.apnacollegebihar.online</p>
        </footer>
      </>
      )}

      {/* Modals */}
      {isFinderCollegeOpen && (
        <div className="modal-backdrop" onClick={() => setIsFinderCollegeOpen(false)}>
          <div className="modal-box" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsFinderCollegeOpen(false)}><X size={20} /></button>
            <div className="flex items-center justify-between mb-8 pr-12">
               <h3 className="text-2xl font-[1000] text-slate-900 uppercase tracking-tighter">Institutes</h3>
               <div className="flex gap-2">
                  <button onClick={() => setTargetColleges(colleges.map(c => c.id))} className="text-[9px] font-black uppercase text-indigo-600 hover:bg-indigo-600 hover:text-white px-3 py-1.5 bg-indigo-50 rounded-lg transition-all border border-indigo-100">Select All</button>
                  <button onClick={() => setTargetColleges([])} className="text-[9px] font-black uppercase text-rose-600 hover:bg-rose-600 hover:text-white px-3 py-1.5 bg-rose-50 rounded-lg transition-all border border-rose-100">Clear</button>
               </div>
            </div>
            <div className="mb-6">
               <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  <input type="text" placeholder="Search college name..." className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 pl-12 text-sm text-slate-900 focus:border-indigo-500 focus:bg-white outline-none transition-all" value={finderCollegeSearch} onChange={e => setFinderCollegeSearch(e.target.value)} />
               </div>
            </div>
            {targetColleges.length > 0 && (
              <div className="mb-8 p-4 bg-indigo-50 rounded-2xl border border-indigo-100">
                 <h4 className="text-[10px] font-black text-indigo-600 uppercase tracking-widest mb-4 flex justify-between items-center">
                    <span>Selected Priority</span>
                    <span className="text-[8px] opacity-50">Drag order logic active</span>
                 </h4>
                 <div className="flex flex-wrap gap-2 max-h-[160px] overflow-y-auto pr-2 custom-scrollbar">
                    {targetColleges.map((id, idx) => {
                      const col = colleges.find(c => c.id === id);
                      if (!col) return null;
                      return (
                        <div key={id} className="flex items-center gap-2 bg-white border border-indigo-200 px-3 py-2 rounded-xl shadow-sm">
                           <span className="text-[10px] font-black text-slate-900 uppercase">{col.name}</span>
                           <div className="flex gap-1 border-l border-white/10 pl-2">
                              <button onClick={() => moveTargetCollege(idx, -1)} disabled={idx === 0} className="text-indigo-600 disabled:opacity-20 hover:text-white"><ChevronUp size={12}/></button>
                              <button onClick={() => moveTargetCollege(idx, 1)} disabled={idx === targetColleges.length - 1} className="text-indigo-600 disabled:opacity-20 hover:text-white"><ChevronDown size={12}/></button>
                              <button onClick={() => setTargetColleges(targetColleges.filter(tid => tid !== id))} className="text-rose-400 hover:text-rose-300 ml-1"><X size={12}/></button>
                           </div>
                        </div>
                      )
                    })}
                 </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[40vh] overflow-y-auto pr-4 custom-scrollbar">
              {sortedColleges.filter(c => c.name.toLowerCase().includes(finderCollegeSearch.toLowerCase())).map(c => (
                <label key={c.id} className={`flex items-center gap-4 p-4 rounded-2xl cursor-pointer border-2 transition-all group ${targetColleges.includes(c.id) ? 'bg-indigo-50 border-indigo-500/50' : 'bg-white border-slate-100 hover:border-indigo-200'}`}>
                  <input type="checkbox" className="hidden" checked={targetColleges.includes(c.id)} onChange={(e) => e.target.checked ? setTargetColleges([...targetColleges, c.id]) : setTargetColleges(targetColleges.filter(id => id !== c.id))} />
                  <div className={`w-5 h-5 rounded-lg border-2 flex items-center justify-center transition-all ${targetColleges.includes(c.id) ? 'bg-indigo-600 border-indigo-600' : 'border-slate-200'}`}>
                     {targetColleges.includes(c.id) && <CheckCircle2 size={12} className="text-white" />}
                  </div>
                  <div className="flex-1 min-w-0">
                     <span className="text-slate-900 font-black uppercase text-[10px] tracking-tight block truncate">{c.name}</span>
                     <span className="text-slate-500 font-bold text-[8px] uppercase tracking-widest">{c.location}</span>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>
      )}

      {isFinderBranchOpen && (
        <div className="modal-backdrop" onClick={() => setIsFinderBranchOpen(false)}>
          <div className="modal-box" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsFinderBranchOpen(false)}><X size={20} /></button>
            <div className="flex items-center justify-between mb-8 pr-12">
               <h3 className="text-2xl font-[1000] text-slate-900 uppercase tracking-tighter">Branches</h3>
               <div className="flex gap-2">
                  <button onClick={() => setTargetBranches(ugeacData.branches)} className="text-[9px] font-black uppercase text-indigo-600 hover:bg-indigo-600 hover:text-white px-3 py-1.5 bg-indigo-50 rounded-lg transition-all border border-indigo-100">Select All</button>
                  <button onClick={() => setTargetBranches([])} className="text-[9px] font-black uppercase text-rose-600 hover:bg-rose-600 hover:text-white px-3 py-1.5 bg-rose-50 rounded-lg transition-all border border-rose-100">Clear</button>
               </div>
            </div>
            {targetBranches.length > 0 && (
              <div className="mb-8 p-4 bg-indigo-50 rounded-2xl border border-indigo-100">
                 <h4 className="text-[10px] font-black text-indigo-600 uppercase tracking-widest mb-4">Branch Priority</h4>
                 <div className="flex flex-wrap gap-2 max-h-[120px] overflow-y-auto pr-2 custom-scrollbar">
                    {targetBranches.map((b, idx) => (
                      <div key={b} className="flex items-center gap-2 bg-white border border-indigo-200 px-3 py-2 rounded-xl shadow-sm">
                         <span className="text-[10px] font-black text-slate-900 uppercase">{branchMapping[b] || b}</span>
                         <div className="flex gap-1 border-l border-white/10 pl-2">
                            <button onClick={() => moveTargetBranch(idx, -1)} disabled={idx === 0} className="text-indigo-600 disabled:opacity-20 hover:text-white"><ChevronUp size={12}/></button>
                            <button onClick={() => moveTargetBranch(idx, 1)} disabled={idx === targetBranches.length - 1} className="text-indigo-600 disabled:opacity-20 hover:text-white"><ChevronDown size={12}/></button>
                            <button onClick={() => setTargetBranches(targetBranches.filter(tb => tb !== b))} className="text-rose-400 hover:text-rose-300 ml-1"><X size={12}/></button>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[40vh] overflow-y-auto pr-4 custom-scrollbar">
              {ugeacData.branches.map(b => (
                <label key={b} className={`flex items-center gap-4 p-4 rounded-2xl cursor-pointer border-2 transition-all group ${targetBranches.includes(b) ? 'bg-indigo-50 border-indigo-500/50' : 'bg-white border-slate-100 hover:border-indigo-200'}`}>
                  <input type="checkbox" className="hidden" checked={targetBranches.includes(b)} onChange={(e) => e.target.checked ? setTargetBranches([...targetBranches, b]) : setTargetBranches(targetBranches.filter(id => id !== b))} />
                  <div className={`w-5 h-5 rounded-lg border-2 flex items-center justify-center transition-all ${targetBranches.includes(b) ? 'bg-indigo-600 border-indigo-600' : 'border-slate-200'}`}>
                     {targetBranches.includes(b) && <CheckCircle2 size={12} className="text-white" />}
                  </div>
                  <div className="flex-1 min-w-0">
                     <span className="text-slate-900 font-black uppercase text-[10px] tracking-tight block truncate">{branchMapping[b] || b}</span>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>
      )}

      {selectedCollege && (
        <div className="modal-backdrop" onClick={() => setSelectedCollege(null)}>
          <div className="modal-box max-w-2xl overflow-y-auto max-h-[90vh]" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedCollege(null)}><X size={20} /></button>
            
            <div className="mb-8">
               <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-xl shadow-indigo-900/20">
                     {selectedCollege.short.substring(0, 1)}
                  </div>
                  <div>
                     <h3 className="text-3xl font-[1000] text-slate-900 uppercase tracking-tighter leading-tight">{selectedCollege.name}</h3>
                     <p className="text-indigo-600 font-black text-[10px] uppercase tracking-[0.3em] mt-1 flex items-center gap-2"><MapPin size={14} /> {selectedCollege.location}, Bihar</p>
                  </div>
               </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
               <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-indigo-500/30 transition-all">
                  <span className="text-slate-400 text-[8px] font-black uppercase tracking-widest block mb-1">Established</span>
                  <span className="text-slate-900 font-[1000] text-sm uppercase">{selectedCollege.estd || "New GEC"}</span>
               </div>
               <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-indigo-500/30 transition-all">
                  <span className="text-slate-400 text-[8px] font-black uppercase tracking-widest block mb-1">Institution Tier</span>
                  <span className="text-indigo-600 font-[1000] text-sm uppercase">Tier {selectedCollege.tier}</span>
               </div>
               <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-indigo-500/30 transition-all hidden md:block">
                  <span className="text-slate-400 text-[8px] font-black uppercase tracking-widest block mb-1">Affiliation</span>
                  <span className="text-slate-900 font-[1000] text-sm uppercase">BEU Patna</span>
               </div>
            </div>

            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 mb-8">
               <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Info size={14} className="text-indigo-600" /> Institution Profile
               </h4>
               <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  {selectedCollege.description || `${selectedCollege.name} is a state-funded engineering institution located in ${selectedCollege.location}, Bihar. Established in ${selectedCollege.estd || "recent years"}, it plays a vital role in providing technical education to students under the Bihar Engineering University (BEU) framework. The campus is equipped with essential academic infrastructure to support B.Tech programs.`}
               </p>
            </div>

            <section className="mb-8">
               <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Building2 size={14} className="text-indigo-600" /> Key Facilities
               </h4>
               <div className="grid grid-cols-2 gap-3">
                  {(selectedCollege.facilities || ["Central Library", "Computer Lab", "Boys Hostel", "Sports Ground", "Wi-Fi Campus"]).map((f, i) => (
                     <div key={i} className="flex items-center gap-3 p-3 bg-white border border-slate-100 rounded-xl shadow-sm">
                        <CheckCircle2 size={14} className="text-emerald-500" />
                        <span className="text-[10px] font-black text-slate-700 uppercase tracking-tight">{f}</span>
                     </div>
                  ))}
               </div>
            </section>

            <div className="flex flex-col md:flex-row gap-4 pt-4">
               <a href={selectedCollege.website || `https://www.google.com/search?q=${encodeURIComponent(selectedCollege.name)}`} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-3 py-5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all shadow-xl shadow-indigo-900/20 active:scale-95">
                  Official Portal <ExternalLink size={16} />
               </a>
               <a href={`https://www.google.com/maps/search/${encodeURIComponent(selectedCollege.name + " " + selectedCollege.location)}`} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-3 py-5 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all border border-white/10 active:scale-95">
                  Live Campus Map <MapPin size={16} />
               </a>
            </div>

               {selectedCollege.branches && (
               <section>
                  <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-widest mb-4 flex items-center gap-2">
                     <GraduationCap size={14} className="text-indigo-600" /> Available Branches
                  </h4>
                  <div className="flex flex-wrap gap-2">
                     {selectedCollege.branches.map((b, i) => (
                        <span key={i} className="px-3 py-2 bg-indigo-50 text-indigo-600 rounded-lg text-[9px] font-black uppercase tracking-widest border border-indigo-100">
                           {b}
                        </span>
                     ))}
                  </div>
               </section>
               )}

               <div className="pt-4">
                  <a href={selectedCollege.website || "#"} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 py-5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all shadow-xl shadow-indigo-900/20 active:scale-95">
                     Visit Official Website <ExternalLink size={16} />
                  </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UgeacPredictor;
