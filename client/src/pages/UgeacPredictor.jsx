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
  
  // Counseling Modes: 'explore', 'finder', 'wizard'
  const [mode, setMode] = useState('explore'); 
  const [preferenceBasis, setPreferenceBasis] = useState('branch'); // 'college' or 'branch'

  // Advanced Priority Choice Filling State
  const [targetColleges, setTargetColleges] = useState([]);
  const [targetBranches, setTargetBranches] = useState([]);
  const [selectedCollegeToAdd, setSelectedCollegeToAdd] = useState('All');
  const [choices, setChoices] = useState([]); 
  const [selectedBranchToAdd, setSelectedBranchToAdd] = useState('');
  const [visibleCount, setVisibleCount] = useState(50);

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
    "Government Engineering College, Samastipur", "CP Thakur Inst.", "CIPET Bihta", "SGIDT Patna", "WIT Darbhanga"
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
    "G.E.C. SAMASTIPUR": "Government Engineering College, Samastipur",
    "CP THAKUR INST.": "DR. C.P. Thakur Institute",
    "CIPET BIHTA": "CIPET:IPT, Bihta, Patna",
    "SGIDT PATNA": "S.G.I.D.T. Patna",
    "WIT DARBHANGA": "Women's Institute of Tech, Darbhanga"
  }), []);
  
  const [ugeacData, setUgeacData] = useState({ data2024: [], data2025: [], branches: [] });
  const [loadingData, setLoadingData] = useState(true);

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

        const raw2024 = json.cutoffs2024 || [];
        const raw2025 = json.cutoffs2025 || [];

        const d24 = process(raw2024);
        const d25 = process(raw2025);
        const brs = Array.from(new Set([
          ...raw2024.map(c => c.branch.trim()),
          ...raw2025.map(c => c.branch.trim())
        ])).sort();

        setUgeacData({ data2024: d24, data2025: d25, branches: brs });
        setLoadingData(false);
      })
      .catch(err => {
        console.error("Failed to load cutoffs object:", err);
        setLoadingData(false);
      });
  }, []);

  const [isFinderCollegeOpen, setIsFinderCollegeOpen] = useState(false);
  const [finderCollegeSearch, setFinderCollegeSearch] = useState("");
  const [isFinderBranchOpen, setIsFinderBranchOpen] = useState(false);
  const [finderBranchSearch, setFinderBranchSearch] = useState("");

  const [hasPredicted, setHasPredicted] = useState(false);
  const [results, setResults] = useState({
     all: [],
     smartChoices: [],
     calculatedRank: 0,
     mockAllotment: null,
     mockDiscussions: []
  });
  const [selectedCollege, setSelectedCollege] = useState(null);

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
    "Aeronautical Engineering": "Aeronautical Engineering",
    "Mining Engineering": "Mining Engineering",
    "Robotics and Automation": "Robotics & Automation",
    "VLSI Design": "VLSI Design & Technology",
    "Chemical Engineering": "Chemical Engineering",
    "3D Animation": "3D Animation & VFX",
    "Fire Technology": "Fire Technology & Safety",
    "Food Processing": "Food Processing & Tech",
    "Bioinformatics": "Bioinformatics",
    "Civil with Computer Application": "Civil with Computer Application (Spl.)",
    "Agriculture Engineering": "Agriculture Engineering",
    "Mechatronics": "Mechatronics Engineering",
    "Leather Technology": "Leather Technology",
    "Silk Technology": "Silk Technology",
    "Textile Engineering": "Textile Engineering",
    "Petrochemical Engineering": "Petrochemical Engineering",
    "Chemical Engineering (Plastic & Polymer)": "Chemical Engg (Plastic & Polymer)",
    "Dairy Tech (Open)": "Dairy Tech (Open Category)",
    "Dairy Tech (Self Finance)": "Dairy Tech (Self Finance)"
  };

  const UGEAC_RANK_MAP = [
    {"ur":4,"air":28003},{"ur":13,"air":50299},{"ur":70,"air":81272},{"ur":109,"air":92809},
    {"ur":156,"air":100028},{"ur":215,"air":109032},{"ur":333,"air":127662},{"ur":436,"air":140082},
    {"ur":525,"air":150732},{"ur":617,"air":162821},{"ur":716,"air":171028},{"ur":816,"air":181269},
    {"ur":914,"air":188077},{"ur":1012,"air":197425},{"ur":1115,"air":209122},{"ur":1209,"air":219690},
    {"ur":1307,"air":229952},{"ur":1404,"air":238780},{"ur":1507,"air":247321},{"ur":1601,"air":257341},
    {"ur":1714,"air":268036},{"ur":1821,"air":278080},{"ur":1930,"air":288768},{"ur":2041,"air":297962},
    {"ur":2137,"air":306613},{"ur":2243,"air":315619},{"ur":2333,"air":323379},{"ur":2425,"air":330324},
    {"ur":2522,"air":339013},{"ur":2615,"air":347652},{"ur":2711,"air":355967},{"ur":2808,"air":364892},
    {"ur":2901,"air":373625},{"ur":3003,"air":383352},{"ur":3101,"air":392168},{"ur":3207,"air":402310},
    {"ur":3308,"air":413189},{"ur":3400,"air":421323},{"ur":3501,"air":430878},{"ur":3596,"air":440370},
    {"ur":3693,"air":449449},{"ur":3795,"air":458443},{"ur":3894,"air":467591},{"ur":3992,"air":476591},
    {"ur":4089,"air":484050},{"ur":4184,"air":492240},{"ur":4288,"air":501868},{"ur":4377,"air":508894},
    {"ur":4474,"air":518100},{"ur":4581,"air":529594},{"ur":4680,"air":542092},{"ur":4776,"air":550964},
    {"ur":4876,"air":559448},{"ur":4966,"air":568797},{"ur":5056,"air":577816},{"ur":5153,"air":587447},
    {"ur":5257,"air":597045},{"ur":5353,"air":606934},{"ur":5441,"air":620541},{"ur":5542,"air":630524},
    {"ur":5641,"air":641360},{"ur":5737,"air":651370},{"ur":5843,"air":661098},{"ur":5946,"air":673598},
    {"ur":6056,"air":686974},{"ur":6159,"air":697844},{"ur":6256,"air":707967},{"ur":6366,"air":720052},
    {"ur":6468,"air":732511},{"ur":6582,"air":743681},{"ur":6692,"air":757517},{"ur":6800,"air":768611},
    {"ur":6919,"air":781525},{"ur":7036,"air":795064},{"ur":7141,"air":806823},{"ur":7245,"air":819493},
    {"ur":7360,"air":833200},{"ur":7466,"air":848290},{"ur":7570,"air":859488},{"ur":7686,"air":874752},
    {"ur":7797,"air":888309},{"ur":7912,"air":903348},{"ur":8026,"air":920910},{"ur":8130,"air":933806},
    {"ur":8229,"air":948876},{"ur":8334,"air":965845},{"ur":8428,"air":978036},{"ur":8531,"air":993492},
    {"ur":8643,"air":1010934},{"ur":8749,"air":1024049},{"ur":8852,"air":1040387},{"ur":8951,"air":1055816},
    {"ur":9057,"air":1070983},{"ur":9161,"air":1091239},{"ur":9269,"air":1108363},{"ur":9364,"air":1126814},
    {"ur":9469,"air":1145041},{"ur":9577,"air":1167857},{"ur":9674,"air":1183901},{"ur":9771,"air":1197906},
    {"ur":9873,"air":1219504},{"ur":9967,"air":1242227}
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

  const addBranding = (doc) => {
    const pageCount = doc.internal.getNumberOfPages();
    for(let i = 1; i <= pageCount; i++) {
        doc.setPage(i);
        try {
            doc.setGState(new doc.GState({opacity: 0.06}));
            doc.setFontSize(50);
            doc.setFont("helvetica", "bold");
            doc.setTextColor(15, 23, 42); 
            doc.text("APNA COLLEGE BIHAR", 105, 148, { align: 'center', angle: 45 });
            doc.setGState(new doc.GState({opacity: 1.0}));
        } catch (e) {
            doc.setFontSize(50);
            doc.setFont("helvetica", "bold");
            doc.setTextColor(245, 245, 247); 
            doc.text("APNA COLLEGE BIHAR", 105, 148, { align: 'center', angle: 45 });
        }
        try {
            doc.addImage("/logo.jpg", "JPEG", 14, 280, 10, 10);
        } catch(e) {}
        doc.setFontSize(8);
        doc.setTextColor(160, 174, 192);
        doc.text("Verified Analysis: apnacollegebihar.online", 28, 287);
        doc.text(`Page ${i} of ${pageCount}`, 196, 287, { align: 'right' });
        doc.setDrawColor(245, 245, 245);
        doc.setLineWidth(0.01);
        doc.rect(5, 5, 200, 287);
    }
  };

  const downloadResultsPDF = () => {
    try {
      const doc = new jsPDF();
      doc.setFillColor(30, 41, 59);
      doc.rect(0, 0, 210, 48, 'F');
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(22);
      doc.setFont("helvetica", "bold");
      try {
          doc.addImage("/logo-512.png", "PNG", 14, 10, 20, 20);
          doc.text("APNA COLLEGE BIHAR", 40, 22);
      } catch(e) {
          doc.text("APNA COLLEGE BIHAR", 14, 22);
      }
      doc.setFontSize(10);
      doc.setFont("helvetica", "bold");
      doc.text("OFFICIAL UGEAC COUNSELLING DATA-PACK (2024-2025)", 40, 30);
      doc.setFontSize(8);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(203, 213, 225);
      doc.text(`Report ID: ACB-${Math.floor(100000 + Math.random() * 900000)} | Generated at: ${new Date().toLocaleString()}`, 14, 37);

      doc.setFillColor(248, 250, 252);
      doc.rect(14, 55, 182, 35, 'F');
      doc.setDrawColor(226, 232, 240);
      doc.rect(14, 55, 182, 35, 'S');
      doc.setTextColor(30, 41, 59);
      doc.setFontSize(9);
      doc.setFont("helvetica", "bold");
      doc.text("CANDIDATE ANALYSIS SUMMARY", 20, 63);
      doc.setFont("helvetica", "normal");
      doc.text(`JEE Main CRL: ${rank || 'N/A'}`, 20, 70);
      doc.text(`Bihar State Rank (UR): #${results.calculatedRank || ugeacInput || 'N/A'}`, 20, 76);
      doc.text(`Category: ${category} | Gender: ${gender}`, 20, 82);
      doc.text(`Estimated Category Rank: #${getEstimatedCategoryRank(results.calculatedRank || ugeacInput, category)}`, 110, 76);

      let finalY = 100;
      if (results.mockAllotment) {
         doc.setFillColor(16, 185, 129); 
         doc.rect(14, 95, 182, 22, 'F');
         doc.setTextColor(255, 255, 255);
         doc.setFontSize(10);
         doc.setFont("helvetica", "bold");
         doc.text(`SIMULATED ALLOTMENT: CHOICE #${results.mockAllotment.choiceNumber}`, 20, 102);
         doc.setFontSize(12);
         doc.text(`${results.mockAllotment.choice.collegeName} - ${branchMapping[results.mockAllotment.choice.branch] || results.mockAllotment.choice.branch}`, 20, 110);
         finalY = 125;
      } else {
         doc.setFillColor(239, 68, 68); 
         doc.rect(14, 95, 182, 12, 'F');
         doc.setTextColor(255, 255, 255);
         doc.setFontSize(9);
         doc.setFont("helvetica", "bold");
         doc.text("ALLOTMENT STATUS: NO SEAT ALLOTTED IN GIVEN CHOICES", 20, 103);
         finalY = 115;
      }

      if (results.all && results.all.length > 0) {
        doc.setTextColor(30, 41, 59);
        doc.setFontSize(13);
        doc.setFont("helvetica", "bold");
        doc.text("OFFICIAL CUTOFF COMPARISON MATRIX (2024-2025)", 14, finalY);
        const tableData = results.all.map((item, idx) => [
          idx + 1,
          item.college.name,
          branchMapping[item.branch] || item.branch,
          `${item.cat} (${item.seatType === 'Female' ? 'F' : 'G'})`,
          item.cutoff24,
          item.cutoff25,
          item.myCompRank,
          item.chance
        ]);

        autoTable(doc, {
          startY: finalY + 6,
          head: [['#', 'Engineering College', 'Branch Name', 'Cat (Type)', '2024 R2', '2025 R2', 'Your Rank', 'Chance']],
          body: tableData,
          theme: 'grid',
          styles: { fontSize: 6.5, cellPadding: 2, font: 'helvetica' },
          headStyles: { fillColor: [30, 41, 59], textColor: [255, 255, 255], fontStyle: 'bold' },
          alternateRowStyles: { fillColor: [249, 250, 251] },
          columnStyles: { 0: { cellWidth: 8 }, 1: { cellWidth: 45 }, 2: { cellWidth: 40 }, 4: { fontStyle: 'bold', textColor: [107, 114, 128] }, 5: { fontStyle: 'bold', textColor: [37, 99, 235] }, 7: { fontStyle: 'bold' } },
          didParseCell: (data) => {
            if (data.column.index === 7 && data.cell.text[0] === 'High') data.cell.styles.textColor = [5, 150, 105];
            else if (data.column.index === 7 && data.cell.text[0] === 'No') data.cell.styles.textColor = [220, 38, 38];
          },
          margin: { top: 10 }
        });
      }
      addBranding(doc);
      const blob = doc.output('blob');
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `UGEAC_Analysis_2024_2025.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Critical PDF Failure:", err);
      alert("Error generating PDF: " + err.message);
    }
  };

  const getEstimatedCategoryRank = (urRank, cat) => {
    const r = parseInt(urRank);
    const ratios = { 'EBC': 0.2390, 'BC': 0.3889, 'SC': 0.0657, 'ST': 0.0036, 'EWS': 0.2279, 'RCG': 0.1323, 'DQ': 0.0018, 'SMQ': 0.0173 };
    return Math.max(1, Math.floor(r * (ratios[cat] || 1)));
  };

  useEffect(() => {
    if (rank && rank > 0) calculateResults();
  }, [mode, ugeacData]);

  const removeChoiceByCombo = (cid, branch) => {
     setChoices(choices.filter(c => !(c.collegeId === cid && c.branch === branch)));
  };

  const calculateResults = () => {
    if (!rank && !ugeacInput) return alert('Please enter rank info');
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
        if (mode === 'finder' || mode === 'wizard' || mode === 'explore') {
           if (targetColleges.length > 0 && !targetColleges.includes(d.collegeId)) return;
           if (mode === 'finder' && targetBranches.length > 0 && !targetBranches.includes(d.branch)) return;
        }
        const collegeInfo = colleges.find(c => c.id === d.collegeId);
        if (!collegeInfo) return;
        const key = `${d.collegeId}-${d.branch}-${d.category}-${d.seatType}`;
        const is2025 = map2025.has(key) && map2025.get(key) === d;
        if (!seen.has(key) || is2025) {
           const cut24 = map2024.get(key);
           const cut25 = map2025.get(key);
           const compRank = d.category === 'UR' ? ugeacRank : getEstimatedCategoryRank(ugeacRank, d.category);
           const latestClosing = cut25 ? cut25.closing : (cut24 ? cut24.closing : 99999);
           let chance = 'No';
           if (compRank <= latestClosing) chance = 'High';
           else if (compRank <= latestClosing * 1.1) chance = 'Medium';
           else if (compRank <= latestClosing * 1.25) chance = 'Low';
           seen.set(key, { college: collegeInfo, branch: d.branch, chance, cutoff25: cut25 ? cut25.closing : 'N/A', cutoff24: cut24 ? cut24.closing : 'N/A', cat: d.category, seatType: d.seatType, myCompRank: compRank });
        }
      });
    };

    processSet(ugeacData.data2024);
    processSet(ugeacData.data2025);

    function chanceScore(c) { return c === 'High' ? 1 : c === 'Medium' ? 2 : c === 'Low' ? 3 : 4; }
    const allRes = Array.from(seen.values()).sort((a,b) => {
        if (chanceScore(a.chance) !== chanceScore(b.chance)) return chanceScore(a.chance) - chanceScore(b.chance);
        return a.college.tier - b.college.tier;
    });

    let mockAllotment = null;
    let mockDiscussions = [];
    if (choices.length > 0) {
       for (let i = 0; i < choices.length; i++) {
          const ch = choices[i];
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

    setResults({ all: allRes, smartChoices: allRes.slice(0, 10), calculatedRank: ugeacRank, mockAllotment, mockDiscussions });
    setVisibleCount(50);
    setHasPredicted(true);
  };

  const sortedColleges = useMemo(() => {
    return [...colleges].sort((a, b) => a.name.localeCompare(b.name));
  }, [colleges]);

  return (
    <div className="main-app-container">
      {loadingData ? (
         <div className="flex flex-col items-center justify-center p-20 glass-panel text-center space-y-6">
            <div className="w-24 h-24 border-8 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
            <div className="space-y-4">
               <h3 className="text-3xl font-[1000] text-white uppercase tracking-tighter">Initializing Admissions Matrix</h3>
               <p className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.3em] animate-pulse">Syncing Rounds 1 & 2 Data • 8,400+ Connection Capacity Mode</p>
            </div>
         </div>
      ) : (
      <>
        <header className="app-header">
           <div className="header-content">
              <div className="flex justify-center mb-6">
                 <div className="bg-white/5 p-1 rounded-3xl border border-white/10 shadow-2xl overflow-hidden floating-icon">
                    <img src="/logo-512.png" alt="Apna College Bihar" className="w-20 h-20 object-cover" />
                 </div>
              </div>
              <h1>
                 <span className="block text-slate-400 text-sm font-black tracking-[0.4em] mb-4">Official Counseling Engine</span>
                 UGEAC <span className="highlight-text">Predictor</span> 2025
              </h1>
              <p>Unlocking high-precision allotment forecasts using official historical data from 2024 and 2025. Bihar's most advanced engineering counseling ecosystem.</p>
              <div className="nav-pills">
                 <button onClick={() => setMode('explore')} className={`nav-btn ${mode === 'explore' ? 'active' : ''}`}><LayoutGrid size={18} />Explore</button>
                 <button onClick={() => setMode('finder')} className={`nav-btn ${mode === 'finder' ? 'active' : ''}`}><Filter size={18} />Finder</button>
                 <button onClick={() => setMode('wizard')} className={`nav-btn ${mode === 'wizard' ? 'active' : ''}`}><Zap size={18} />Wizard</button>
              </div>
           </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
           <div className="lg:col-span-4 space-y-8">
              <section className="glass-panel">
                 <h2 className="section-title"><Building2 size={20} />Identity Profile</h2>
                 <div className="space-y-6">
                    <div className="input-group">
                       <label className="premium-label">JEE Main CRL Rank</label>
                       <div className="relative">
                          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                          <input type="number" className="premium-input pl-12" placeholder="Enter CRL Rank..." value={rank} onChange={(e) => setRank(e.target.value)} />
                       </div>
                    </div>
                    <div className="input-group">
                       <label className="premium-label">UGEAC Merit Rank (Optional)</label>
                       <input type="number" className="premium-input" placeholder="Bihar State Rank..." value={ugeacInput} onChange={(e) => setUgeacInput(e.target.value)} />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                       <div className="input-group">
                          <label className="premium-label">Category</label>
                          <select className="premium-input" value={category} onChange={(e) => setCategory(e.target.value)}>
                             {['UR', 'EWS', 'BC', 'EBC', 'SC', 'ST', 'DQ', 'SMQ'].map(c => <option key={c} value={c}>{c}</option>)}
                          </select>
                       </div>
                       <div className="input-group">
                          <label className="premium-label">Gender</label>
                          <select className="premium-input" value={gender} onChange={(e) => setGender(e.target.value)}>
                             <option value="Male">General/Male</option>
                             <option value="Female">Female</option>
                          </select>
                       </div>
                    </div>
                    <button onClick={calculateResults} className="btn-primary"><Zap size={20} />Calculate Chances</button>
                 </div>
              </section>

              {(mode === 'finder' || mode === 'wizard') && (
                 <section className="glass-panel animate-in slide-in-from-left duration-500">
                    <h2 className="section-title"><Filter size={20} />Preference Matrix</h2>
                    <div className="space-y-4">
                       <button onClick={() => setIsFinderCollegeOpen(true)} className="w-full flex items-center justify-between p-4 bg-slate-900/50 border border-glass-border rounded-2xl text-slate-300 hover:text-white hover:border-indigo-500/50 transition-all">
                          <span className="flex items-center gap-3"><Building2 size={18} className="text-indigo-400" />{targetColleges.length > 0 ? `${targetColleges.length} Colleges` : 'Select Colleges'}</span>
                          <ChevronDown size={18} />
                       </button>
                       {mode === 'finder' && (
                          <button onClick={() => setIsFinderBranchOpen(true)} className="w-full flex items-center justify-between p-4 bg-slate-900/50 border border-glass-border rounded-2xl text-slate-300 hover:text-white hover:border-indigo-500/50 transition-all">
                             <span className="flex items-center gap-3"><Layers size={18} className="text-indigo-400" />{targetBranches.length > 0 ? `${targetBranches.length} Branches` : 'Select Branches'}</span>
                             <ChevronDown size={18} />
                          </button>
                       )}
                    </div>
                 </section>
              )}
           </div>

           <div className="lg:col-span-8">
              {!hasPredicted ? (
                 <div className="empty-state">
                    <div className="flex justify-center">
                       <div className="w-20 h-20 bg-indigo-500/10 rounded-full flex items-center justify-center text-indigo-400 border border-indigo-500/20"><ShieldCheck size={40} /></div>
                    </div>
                    <h3>Ready to Analyze</h3>
                    <p>Enter your rank and category to analyze 38+ Bihar state colleges.</p>
                 </div>
              ) : (
                 <div className="space-y-8 animate-in fade-in slide-in-from-bottom duration-700">
                    {results.mockAllotment && (
                       <div className="glass-panel border-emerald-500/30 overflow-hidden group">
                          <div className="absolute top-0 right-0 p-4">
                             <div className="bg-emerald-500/20 text-emerald-400 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-500/20">Most Likely Allotment</div>
                          </div>
                          <div className="flex items-center gap-6">
                             <div className="hidden sm:flex w-20 h-20 bg-emerald-500/10 rounded-3xl items-center justify-center text-emerald-400 shrink-0 border border-emerald-500/20"><CheckCircle2 size={40} /></div>
                             <div>
                                <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">{results.mockAllotment.choice.collegeName}</h3>
                                <p className="text-emerald-400/80 font-bold text-lg mb-2">{branchMapping[results.mockAllotment.choice.branch] || results.mockAllotment.choice.branch}</p>
                                <div className="flex items-center gap-3 text-slate-400 text-sm"><span>Choice #{results.mockAllotment.choiceNumber}</span></div>
                             </div>
                          </div>
                       </div>
                    )}
                    <div className="results-header">
                       <h2 className="section-title mb-0"><Wifi size={20} className="animate-pulse" />Probability Matrix</h2>
                       <div className="flex gap-4">
                          <div className="stats-pill">Showing {Math.min(visibleCount, results.all.length)} / {results.all.length}</div>
                          <button onClick={downloadResultsPDF} className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-xl text-xs font-bold transition-all"><Download size={14} />PDF</button>
                       </div>
                    </div>
                    <div className="hidden md:block premium-table-container">
                       <table className="premium-table">
                          <thead>
                             <tr><th>College & Location</th><th>Discipline</th><th>Cat (Seat)</th><th>2024 CO</th><th>2025 CO</th><th>Chance</th></tr>
                          </thead>
                          <tbody>
                             {results.all.slice(0, visibleCount).map((item, idx) => (
                                <tr key={idx} className="group" onClick={() => setSelectedCollege(item.college)}>
                                   <td><div className="font-bold text-white">{item.college.name}</div></td>
                                   <td><div className="font-semibold text-slate-300">{branchMapping[item.branch] || item.branch}</div></td>
                                   <td><div className="text-xs font-bold text-slate-400 uppercase">{item.cat} ({item.seatType === 'Female' ? 'F' : 'G'})</div></td>
                                   <td className="font-mono text-slate-500">{item.cutoff24}</td>
                                   <td className="font-mono text-indigo-400 font-bold">{item.cutoff25}</td>
                                   <td><span className={`chance-badge chance-${item.chance}`}>{item.chance}</span></td>
                                </tr>
                             ))}
                          </tbody>
                       </table>
                    </div>
                    <div className="md:hidden space-y-4">
                       {results.all.slice(0, visibleCount).map((item, idx) => (
                          <div key={idx} className="result-card" onClick={() => setSelectedCollege(item.college)}>
                             <div className="flex justify-between items-start mb-4">
                                <div><h4 className="font-bold text-white">{item.college.short || item.college.name}</h4><p className="text-indigo-400 text-sm">{branchMapping[item.branch] || item.branch}</p></div>
                                <span className={`chance-badge chance-${item.chance}`}>{item.chance}</span>
                             </div>
                             <div className="grid grid-cols-2 gap-4 bg-slate-900/50 p-4 rounded-2xl">
                                <div><p className="text-[10px] text-slate-500 uppercase">2025 Cutoff</p><p className="font-bold text-white">{item.cutoff25}</p></div>
                                <div><p className="text-[10px] text-slate-500 uppercase">Quota</p><p className="font-bold text-slate-300">{item.cat}</p></div>
                             </div>
                          </div>
                       ))}
                    </div>
                    {visibleCount < results.all.length && <button onClick={() => setVisibleCount(v => v + 50)} className="w-full p-6 border-2 border-dashed border-glass-border rounded-3xl text-slate-500 font-bold hover:text-white transition-all uppercase tracking-widest text-xs">Load more...</button>}
                 </div>
              )}
           </div>
        </div>

        <footer className="mt-20 py-12 border-t border-glass-border text-center">
           <div className="flex flex-col items-center gap-6 mb-8">
              <img src="/logo.jpg" alt="Logo" className="w-12 h-12 rounded-full border border-glass-border grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
              <div className="flex justify-center gap-8">
                 <ShieldCheck size={20} className="text-indigo-400" />
                 <div className="w-px h-6 bg-glass-border"></div>
                 <Info size={20} className="text-slate-500" />
              </div>
           </div>
           <p className="text-slate-500 text-sm max-w-xl mx-auto px-6">
              This predictor uses official historical data points (Round 1 & Round 2) from UGEAC 2024 and 2025. 
              Always verify with the official BCECE portal before final submission.
           </p>
           <p className="text-indigo-400 font-bold mt-6 text-sm uppercase tracking-widest">© 2025 APNA COLLEGE BIHAR • All Rights Reserved</p>
        </footer>
      </>
      )}

      {isFinderCollegeOpen && (
        <div className="modal-backdrop" onClick={() => setIsFinderCollegeOpen(false)}>
          <div className="modal-box" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsFinderCollegeOpen(false)}><X size={20} /></button>
            <h3 className="text-2xl font-bold text-white mb-6">Select Institutes</h3>
            <div className="space-y-4">
              <div className="relative"><Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} /><input type="text" className="premium-input pl-12" placeholder="Search..." value={finderCollegeSearch} onChange={(e) => setFinderCollegeSearch(e.target.value)} /></div>
              <div className="space-y-2 max-h-60 overflow-y-auto pr-2">
                {sortedColleges.filter(c => c.name.toLowerCase().includes(finderCollegeSearch.toLowerCase())).map(c => (
                  <label key={c.id} className="flex items-center gap-3 p-3 bg-slate-900/50 rounded-xl cursor-pointer border border-transparent hover:border-indigo-500/30">
                    <input type="checkbox" className="w-5 h-5 rounded accent-indigo-500" checked={targetColleges.includes(c.id)} onChange={(e) => e.target.checked ? setTargetColleges([...targetColleges, c.id]) : setTargetColleges(targetColleges.filter(id => id !== c.id))} />
                    <span className="text-slate-200 font-semibold">{c.name}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {isFinderBranchOpen && (
        <div className="modal-backdrop" onClick={() => setIsFinderBranchOpen(false)}>
          <div className="modal-box" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsFinderBranchOpen(false)}><X size={20} /></button>
            <h3 className="text-2xl font-bold text-white mb-6">Select Branches</h3>
            <div className="space-y-4">
              <div className="relative"><Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} /><input type="text" className="premium-input pl-12" placeholder="Search..." value={finderBranchSearch} onChange={(e) => setFinderBranchSearch(e.target.value)} /></div>
              <div className="space-y-2 max-h-60 overflow-y-auto pr-2">
                {ugeacData.branches.filter(b => b.toLowerCase().includes(finderBranchSearch.toLowerCase())).map(b => (
                  <label key={b} className="flex items-center gap-3 p-3 bg-slate-900/50 rounded-xl cursor-pointer border border-transparent hover:border-indigo-500/30">
                    <input type="checkbox" className="w-5 h-5 rounded accent-indigo-500" checked={targetBranches.includes(b)} onChange={(e) => e.target.checked ? setTargetBranches([...targetBranches, b]) : setTargetBranches(targetBranches.filter(br => br !== b))} />
                    <span className="text-slate-200 font-semibold">{b}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedCollege && (
        <div className="modal-backdrop" onClick={() => setSelectedCollege(null)}>
          <div className="modal-box" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedCollege(null)}><X size={20} /></button>
            <h3 className="text-2xl font-bold text-white mb-2">{selectedCollege.name}</h3>
            <p className="text-indigo-400 font-bold mb-6 flex items-center gap-2"><MapPin size={16} />{selectedCollege.location}</p>
            <div className="grid grid-cols-2 gap-4 mb-6">
               <div className="p-4 bg-slate-900/50 rounded-2xl border border-glass-border"><p className="text-[10px] text-slate-500 uppercase mb-1">Tier</p><p className="text-white font-bold">{selectedCollege.tier || '2'}</p></div>
               <div className="p-4 bg-slate-900/50 rounded-2xl border border-glass-border"><p className="text-[10px] text-slate-500 uppercase mb-1">Status</p><p className="text-emerald-400 font-bold">Government</p></div>
            </div>
            <div className="p-6 bg-indigo-500/10 rounded-2xl border border-indigo-500/20 mb-6">
               <h4 className="text-sm font-bold text-indigo-400 uppercase mb-3">College Insight</h4>
               <p className="text-slate-300 text-sm leading-relaxed">{selectedCollege.description || "Leading technical institution in Bihar offering state-of-the-art engineering programs and consistent placement records."}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
               <a href={selectedCollege.website} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 py-4 bg-indigo-600 text-white rounded-2xl font-bold text-sm">Website <ExternalLink size={16} /></a>
               <button onClick={() => setSelectedCollege(null)} className="py-4 bg-slate-800 text-white rounded-2xl font-bold text-sm">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UgeacPredictor;
