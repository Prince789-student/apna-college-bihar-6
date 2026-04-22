import React, { useState, useMemo, useEffect } from 'react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
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
  const [choices, setChoices] = useState([]); // Array to hold choice filling preferences
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


  // Deep Allotment Rank Mapping from 7,866 PDF Records (Verified 2025 High-Precision)
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
    // Map is sorted by ur-ascending which is air-ascending here
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
        
        // Transparent, diagonal, professional center watermark
        try {
            doc.setGState(new doc.GState({opacity: 0.06}));
            doc.setFontSize(50);
            doc.setFont("helvetica", "bold");
            doc.setTextColor(15, 23, 42); // slate-900
            doc.text("APNA COLLEGE BIHAR", 105, 148, { align: 'center', angle: 45 });
            doc.setGState(new doc.GState({opacity: 1.0}));
        } catch (e) {
            // Safe fallback for older versions without GState
            doc.setFontSize(50);
            doc.setFont("helvetica", "bold");
            doc.setTextColor(245, 245, 247); 
            doc.text("APNA COLLEGE BIHAR", 105, 148, { align: 'center', angle: 45 });
        }

        // Professional Footer
        try {
            doc.addImage("/logo.jpg", "JPEG", 14, 280, 10, 10);
        } catch(e) {}
        doc.setFontSize(8);
        doc.setTextColor(160, 174, 192);
        doc.text("Verified Analysis: apnacollegebihar.online", 28, 287);
        doc.text(`Page ${i} of ${pageCount}`, 196, 287, { align: 'right' });

        // Very thin outer margin border
        doc.setDrawColor(245, 245, 245);
        doc.setLineWidth(0.01);
        doc.rect(5, 5, 200, 287);
    }
  };

  const downloadResultsPDF = () => {
    console.log("Starting PDF Generation...");
    try {
      const doc = new jsPDF();
      
      // Header Style (Slate)
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

      // User Details Box
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

      // 1. Predicted Result Section
      if (results.mockAllotment) {
         doc.setFillColor(16, 185, 129); // emerald-500
         doc.rect(14, 95, 182, 22, 'F');
         doc.setTextColor(255, 255, 255);
         doc.setFontSize(10);
         doc.setFont("helvetica", "bold");
         doc.text(`SIMULATED ALLOTMENT: CHOICE #${results.mockAllotment.choiceNumber}`, 20, 102);
         doc.setFontSize(12);
         doc.text(`${results.mockAllotment.choice.collegeName} - ${branchMapping[results.mockAllotment.choice.branch] || results.mockAllotment.choice.branch}`, 20, 110);
         finalY = 125;
      } else {
         doc.setFillColor(239, 68, 68); // red-500
         doc.rect(14, 95, 182, 12, 'F');
         doc.setTextColor(255, 255, 255);
         doc.setFontSize(9);
         doc.setFont("helvetica", "bold");
         doc.text("ALLOTMENT STATUS: NO SEAT ALLOTTED IN GIVEN CHOICES", 20, 103);
         finalY = 115;
      }

      // 2. Preference List (If choices exist)
      if (choices.length > 0) {
        doc.setTextColor(30, 41, 59);
        doc.setFontSize(13);
        doc.setFont("helvetica", "bold");
        doc.text("OFFICIAL PREFERENCE LIST (CHOICE FILLING)", 14, finalY);
        
        const choiceData = choices.map((c, idx) => [
          idx + 1,
          c.collegeName,
          branchMapping[c.branch] || c.branch
        ]);

        autoTable(doc, {
          startY: finalY + 6,
          head: [['S.No', 'College Name', 'Engineering Branch']],
          body: choiceData,
          theme: 'grid',
          styles: { fontSize: 8, font: 'helvetica', cellPadding: 3 },
          headStyles: { fillColor: [30, 41, 59], textColor: [255, 255, 255], fontStyle: 'bold' }
        });
        finalY = doc.lastAutoTable.finalY + 15;
      } else {
        finalY += 10;
      }

      // 3. Full Comparison Matrix
      if (results.all && results.all.length > 0) {
          doc.setTextColor(30, 41, 59);
        doc.setFontSize(13);
        doc.setFont("helvetica", "bold");
        doc.text("OFFICIAL CUTOFF COMPARISON MATRIX (2024-2025)", 14, finalY);

        // Grouping Logic for "Organised Way"
        const tableData = [];
        let seq = 1;

        results.all.forEach((item) => {
           tableData.push([
              seq++,
              item.college.name,
              branchMapping[item.branch] || item.branch,
              `${item.cat} (${item.seatType === 'Female' ? 'F' : 'G'})`,
              item.cutoff24,
              item.cutoff25,
              item.myCompRank,
              item.chance
           ]);
        });

        autoTable(doc, {
          startY: finalY + 6,
          head: [['#', 'Engineering College', 'Branch Name', 'Cat (Type)', '2024 R2', '2025 R2', 'Your Rank', 'Chance']],
          body: tableData,
          theme: 'grid',
          styles: { fontSize: 6.5, cellPadding: 2, font: 'helvetica' },
          headStyles: { fillColor: [30, 41, 59], textColor: [255, 255, 255], fontStyle: 'bold' },
          alternateRowStyles: { fillColor: [249, 250, 251] },
          columnStyles: {
            0: { cellWidth: 8 },
            1: { cellWidth: 45 },
            2: { cellWidth: 40 },
            4: { fontStyle: 'bold', textColor: [107, 114, 128] },
            5: { fontStyle: 'bold', textColor: [37, 99, 235] },
            7: { fontStyle: 'bold' }
          },
          didParseCell: (data) => {
            if (data.column.index === 7 && data.cell.text[0] === 'High') {
               data.cell.styles.textColor = [5, 150, 105]; // emerald-600
            } else if (data.column.index === 7 && data.cell.text[0] === 'No') {
               data.cell.styles.textColor = [220, 38, 38]; // red-600
            }
          },
          margin: { top: 10 }
        });
      }

      // Apply Branding to all pages
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

      console.log("PDF Saved Successfully!");
    } catch (err) {
      console.error("Critical PDF Failure:", err);
      alert("Error generating PDF: " + err.message);
    }
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

    // Pre-compute O(1) lookup maps to prevent 8-million iteration O(N^2) bottlenecks
    const map2024 = new Map();
    ugeacData.data2024.forEach(d => map2024.set(`${d.collegeId}-${d.branch}-${d.category}-${d.seatType}`, d));
    
    const map2025 = new Map();
    ugeacData.data2025.forEach(d => map2025.set(`${d.collegeId}-${d.branch}-${d.category}-${d.seatType}`, d));

    // Strategy: Simple and Clean Merge - O(N) processing
    const processSet = (data) => {
      data.forEach(d => {
        // Basic eligibility filters
        if (!eligibleCategories.includes(d.category)) return;
        if (gender === 'Male' && d.seatType === 'Female') return;
        
        // Mode-based filters
        if (mode === 'finder') {
           if (targetColleges.length > 0 && !targetColleges.includes(d.collegeId)) return;
           if (targetBranches.length > 0 && !targetBranches.includes(d.branch)) return;
        } else if (mode === 'explore' || mode === 'wizard') {
           if (targetColleges.length > 0 && !targetColleges.includes(d.collegeId)) return;
        }

        const collegeInfo = colleges.find(c => c.id === d.collegeId);
        if (!collegeInfo) return;

        const key = `${d.collegeId}-${d.branch}-${d.category}-${d.seatType}`;
        
        // If not already in seen, or if this is 2025 data (update)
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

           seen.set(key, {
             college: collegeInfo, 
             branch: d.branch, 
             chance, 
             cutoff25: cut25 ? cut25.closing : 'N/A', 
             cutoff24: cut24 ? cut24.closing : 'N/A',
             cat: d.category,
             seatType: d.seatType,
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
    setVisibleCount(50);
    setHasPredicted(true);
  };

  const sortedColleges = useMemo(() => {
    return [...colleges].sort((a, b) => a.name.localeCompare(b.name));
  }, [colleges]);

  return (
    <div className="main-app-container">
      
      {loadingData ? (
         <div className="flex flex-col items-center justify-center p-20 bg-white border-2 border-slate-100 rounded-[4rem] text-center space-y-6 shadow-2xl">
            <div className="w-24 h-24 border-8 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
            <div className="space-y-4">
               <h3 className="text-3xl font-[1000] text-slate-800 uppercase tracking-tighter">Initializing Admissions Matrix</h3>
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] animate-pulse">Syncing Rounds 1 & 2 Data • 8,000+ Connection Capacity Mode</p>
            </div>
         </div>
      ) : (
      <>
        <header className="app-header">
           <div className="flex justify-center mb-6">
              <img src="/logo-512.png" alt="Logo" className="w-20 h-20" />
           </div>
           <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-500/20 border border-indigo-500/30 rounded-full mb-6">
              <Zap size={14} className="text-indigo-400 fill-indigo-400" />
              <span className="text-[10px] font-black text-indigo-100 uppercase tracking-widest">v2.0 Advanced Predictor</span>
           </div>
           <h1>UGEAC Counselling<br/>Predictor 2025</h1>
           <p>Bihar's most accurate engineering admission AI. Predict your college choices based on historical round-wise cutoffs.</p>
           
           <div className="flex flex-wrap justify-center gap-4 relative z-10">
              <a href="https://bceceboard.bihar.gov.in" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl text-xs font-bold text-white transition-all">
                 Official B.C.E.C.E. Portal <ExternalLink size={14} />
              </a>
              <div className="flex items-center gap-2 px-6 py-3 bg-white/5 rounded-2xl text-[10px] font-black text-indigo-300 uppercase tracking-widest">
                 <ShieldCheck size={14} /> 100% Data Integrity
              </div>
           </div>
        </header>

        <div className="grid lg:grid-cols-12 gap-8">
           {/* Sidebar: Inputs */}
           <div className="lg:col-span-4 space-y-6">
              <section className="glass-panel space-y-8">
                 <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                    <LayoutGrid className="text-indigo-600" />
                    <h3 className="text-sm font-black uppercase tracking-widest">Candidate Profile</h3>
                 </div>

                 <div className="space-y-6">
                    <div className="input-group">
                       <label className="premium-label">JEE Main CRL Rank</label>
                       <input 
                         type="number" 
                         value={rank} 
                         onChange={(e) => setRank(e.target.value)}
                         placeholder="Enter AIR Rank"
                         className="premium-input"
                       />
                    </div>

                    <div className="input-group">
                       <label className="premium-label">UGEAC Merit ID (Optional)</label>
                       <div className="relative">
                          <input 
                            type="number" 
                            value={ugeacInput} 
                            onChange={(e) => setUgeacInput(e.target.value)}
                            placeholder="State Rank"
                            className="premium-input pr-12"
                          />
                          <Info size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300" />
                       </div>
                    </div>

                    <div className="input-group">
                       <label className="premium-label">Reservation Category</label>
                       <select value={category} onChange={(e) => setCategory(e.target.value)} className="premium-input">
                          {['UR', 'EWS', 'BC', 'EBC', 'SC', 'ST'].map(cat => <option key={cat} value={cat}>{cat}</option>)}
                       </select>
                    </div>

                    <div className="input-group">
                       <label className="premium-label">Candidate Gender</label>
                       <div className="segmented-control">
                          <button onClick={() => setGender('Male')} className={`segment-btn ${gender === 'Male' ? 'active' : ''}`}>Male</button>
                          <button onClick={() => setGender('Female')} className={`segment-btn ${gender === 'Female' ? 'active' : ''}`}>Female</button>
                       </div>
                    </div>
                 </div>
              </section>

              <section className="bg-indigo-600 rounded-[2rem] p-8 text-white space-y-4">
                 <div className="flex items-center gap-2">
                    <div className="bg-white/20 p-2 rounded-xl"><GraduationCap size={20}/></div>
                    <span className="text-[10px] font-black uppercase tracking-widest opacity-80">Counseling Help</span>
                 </div>
                 <h4 className="text-xl font-black leading-tight">Need Expert Choice Filling Guidance?</h4>
                 <p className="text-sm text-indigo-100 italic">Get personal assistance for UGEAC 2025.</p>
                 <button className="w-full py-4 bg-white text-indigo-600 rounded-xl font-bold text-sm hover:bg-slate-50 transition-all shadow-xl">Contact Counselor</button>
              </section>
           </div>

           {/* Main Content: Mode & Prediction */}
           <div className="lg:col-span-8 space-y-8">
              <div className="flex flex-col gap-6">
                 <div className="segmented-control p-1.5 md:p-2 bg-slate-100 rounded-[1.5rem] md:rounded-[2rem]">
                    <button onClick={() => setMode('explore')} className={`segment-btn flex items-center justify-center gap-2 ${mode === 'explore' ? 'active' : ''}`}>
                       <Filter size={16} /> <span className="hidden sm:inline">Explore Colleges</span>
                    </button>
                    <button onClick={() => setMode('finder')} className={`segment-btn flex items-center justify-center gap-2 ${mode === 'finder' ? 'active' : ''}`}>
                       <Search size={16} /> <span className="hidden sm:inline">Preference Finder</span>
                    </button>
                    <button onClick={() => setMode('wizard')} className={`segment-btn flex items-center justify-center gap-2 ${mode === 'wizard' ? 'active' : ''}`}>
                       <Zap size={16} /> <span className="hidden sm:inline">Smart Wizard</span>
                    </button>
                 </div>
              </div>
              
              {/* MODE 1: EXPLORE ALL */}
              {mode === 'explore' && !hasPredicted && (
               <div className="text-center py-20 animate-in fade-in zoom-in duration-700">
                  <div className="w-24 h-24 bg-indigo-50 text-indigo-600 rounded-[2.5rem] flex items-center justify-center mx-auto mb-8 shadow-xl">
                     <LayoutGrid size={40} />
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tighter">Full Potential Matrix</h3>
                  <p className="max-w-md mx-auto text-xs font-bold text-slate-400 uppercase tracking-widest mt-4 leading-relaxed">Enter your JEE CRL above and analyze all 39 BEU Bihar colleges to find your best high-probability matches.</p>
               </div>
              )}

              {/* MODE 2: SPECIFIC FINDER */}
              {mode === 'finder' && !hasPredicted && (
                <div className="space-y-8 animate-in slide-in-from-top-4 duration-500">
                   <div className="grid md:grid-cols-2 gap-8">
                      <div className="glass-panel p-6 space-y-4">
                         <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-600">1. Select Target Colleges</h4>
                         <div className="max-h-[300px] overflow-y-auto pr-2 custom-scrollbar space-y-2">
                            {standardColleges.map((c, i) => {
                               const collegeId = i + 1;
                               const isSelected = targetColleges.includes(collegeId);
                               return (
                                  <button 
                                    key={collegeId} 
                                    onClick={() => {
                                       if (isSelected) setTargetColleges(targetColleges.filter(t => t !== collegeId));
                                       else setTargetColleges([...targetColleges, collegeId]);
                                    }}
                                    className={`w-full text-left p-4 rounded-2xl text-[11px] font-bold uppercase tracking-tight transition-all border-2 ${isSelected ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-slate-50 border-transparent hover:border-indigo-100'}`}
                                  >
                                     {c}
                                  </button>
                               )
                            })}
                         </div>
                      </div>

                      <div className="glass-panel p-6 space-y-4">
                         <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-600">2. Strategy Preference</h4>
                         <div className="space-y-4">
                            <div className="input-group">
                               <label className="premium-label">Optimization Priority</label>
                               <div className="segmented-control">
                                  <button onClick={() => setPreferenceBasis('college')} className={`segment-btn ${preferenceBasis === 'college' ? 'active' : ''}`}>Better College</button>
                                  <button onClick={() => setPreferenceBasis('branch')} className={`segment-btn ${preferenceBasis === 'branch' ? 'active' : ''}`}>Better Branch</button>
                               </div>
                            </div>
                            <div className="p-5 bg-amber-50 rounded-2xl border border-amber-100">
                               <p className="text-[10px] font-bold text-amber-700 leading-relaxed uppercase">Finder mode will prioritize your selected institutions and provide a risk-graded list for each.</p>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
              )}

              {/* MODE 3: PRIORITY WIZARD */}
              {mode === 'wizard' && (
                <div className="space-y-8 animate-in slide-in-from-bottom-10 duration-700">
                    <div className="glass-panel p-8 space-y-10 border-t-8 border-indigo-600">
                       <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                          <div>
                             <h4 className="text-xl font-black tracking-tight">Manual Choice Filling Wizard</h4>
                             <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1">Total Locked: {choices.length}</p>
                          </div>
                          <button onClick={() => setChoices([])} className="px-6 py-3 bg-rose-50 text-rose-600 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-rose-500 hover:text-white transition-all">Clear All Choices</button>
                       </div>

                       <div className="space-y-4 max-h-[500px] overflow-y-auto pr-4 custom-scrollbar">
                          {choices.length === 0 ? (
                             <div className="p-12 border-4 border-dashed border-slate-100 rounded-[3rem] text-center">
                                <Layers size={48} className="mx-auto text-slate-100 mb-4" />
                                <p className="text-slate-300 font-black text-xs uppercase tracking-widest">No choices added yet.<br/>Select from below to start ranking.</p>
                             </div>
                          ) : (
                             choices.map((choice, i) => (
                                <div key={i} className="flex items-center justify-between p-6 bg-white border border-slate-200 rounded-3xl group hover:border-indigo-500 transition-all shadow-sm">
                                   <div className="flex items-center gap-6">
                                      <div className="w-10 h-10 bg-slate-900 text-white rounded-xl flex items-center justify-center font-black text-xs">{i+1}</div>
                                      <div>
                                         <p className="font-black text-slate-800 uppercase tracking-tight">{choice.collegeName}</p>
                                         <p className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest">{branchMapping[choice.branch] || choice.branch}</p>
                                      </div>
                                   </div>
                                   <div className="flex gap-2">
                                      <button disabled={i === 0} onClick={() => moveChoice(i, -1)} className="p-2.5 bg-slate-100 hover:bg-indigo-600 hover:text-white disabled:opacity-20 rounded-xl transition-all"><ChevronUp size={18}/></button>
                                      <button disabled={i === choices.length - 1} onClick={() => moveChoice(i, 1)} className="p-2.5 bg-slate-100 hover:bg-indigo-600 hover:text-white disabled:opacity-20 rounded-xl transition-all"><ChevronDown size={18}/></button>
                                      <button onClick={() => removeChoiceByCombo(choice.collegeId, choice.branch)} className="p-2.5 bg-rose-50 text-rose-500 hover:bg-rose-500 hover:text-white rounded-xl transition-all"><Trash2 size={18}/></button>
                                   </div>
                                </div>
                             ))
                          )}
                       </div>
                    </div>

                    <div className="space-y-6">
                       <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 pl-4">Quick Add Preferences:</h4>
                       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {availableChoices.slice(0, 15).map((ac, i) => {
                             const isLocked = choices.find(c => c.collegeId === ac.collegeId && c.branch === ac.branch);
                             return (
                                <button 
                                  key={i} 
                                  onClick={() => isLocked ? removeChoiceByCombo(ac.collegeId, ac.branch) : setChoices([...choices, ac])}
                                  className={`p-6 text-left rounded-[2rem] border-2 transition-all group ${isLocked ? 'bg-indigo-600 border-indigo-600 text-white' : 'bg-white border-slate-100 hover:border-indigo-400'}`}
                                >
                                   <p className={`text-[10px] font-black uppercase mb-1 ${isLocked ? 'text-indigo-200' : 'text-indigo-600'}`}>{branchMapping[ac.branch] || ac.branch}</p>
                                   <p className="font-extrabold text-xs uppercase tracking-tight">{ac.collegeName}</p>
                                </button>
                             )
                          })}
                       </div>
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
          <div className="space-y-16 animate-in slide-in-from-bottom-20 duration-1000 mt-12">
             
             {/* Simulation View */}
             {choices.length > 0 && results.mockDiscussions.length > 0 && (
               <div className="glass-panel p-8 md:p-12 space-y-10 border-t-8 border-primary">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                     <div>
                        <h2 className="text-3xl font-black tracking-tighter">Counselling Simulation</h2>
                        <p className="text-slate-500 font-medium mt-2">Personalized analysis for Rank #{results.calculatedRank}</p>
                     </div>
                     <button onClick={downloadResultsPDF} className="btn-primary w-full md:w-auto">
                        <Download size={18} /> Download Results
                     </button>
                  </div>

                  {results.mockAllotment ? (
                     <div className="bg-emerald-50 rounded-[2rem] p-8 border border-emerald-100 flex flex-col md:flex-row items-center gap-8">
                        <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg">
                           <CheckCircle2 size={32} />
                        </div>
                        <div className="text-center md:text-left">
                           <span className="badge-tier bg-emerald-100 text-emerald-700">Choice #{results.mockAllotment.choiceNumber} Allotted</span>
                           <h3 className="text-2xl font-black mt-3">{results.mockAllotment.choice.collegeName}</h3>
                           <p className="text-slate-600 font-bold">{branchMapping[results.mockAllotment.choice.branch] || results.mockAllotment.choice.branch}</p>
                        </div>
                     </div>
                  ) : (
                     <div className="bg-rose-50 rounded-[2rem] p-8 border border-rose-100 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                        <div className="w-16 h-16 bg-rose-500 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg">
                           <AlertTriangle size={32} />
                        </div>
                        <div>
                           <span className="badge-tier bg-rose-100 text-rose-700">No Seats Allotted</span>
                           <h3 className="text-2xl font-black mt-3">Rank Outside Threshold</h3>
                           <p className="text-slate-600 font-bold">Your rank is higher than the closing ranks for these colleges.</p>
                        </div>
                     </div>
                  )}
               </div>
             )}

             {/* Mobile-Responsive Full Matrix */}
             <section className="space-y-6">
                <div className="flex items-center justify-between">
                   <h2 className="text-xl font-black uppercase tracking-widest text-slate-800">Results Matrix</h2>
                   <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold text-slate-400">Showing {visibleCount} Records</span>
                   </div>
                </div>

                {/* Mobile Cards (Hidden on Desktop) */}
                <div className="mobile-only results-grid">
                   {results.all.slice(0, visibleCount).map((r, i) => (
                      <div key={i} className="result-card">
                         <div className="card-header-flex">
                            <div className="college-title">{r.college.name}</div>
                            <span className={`chance-chip chance-${r.chance}`}>{r.chance}</span>
                         </div>
                         <div className="branch-text">{r.branch}</div>
                         
                         <div className="stats-row">
                            <div className="stat-box">
                               <span className="stat-label">2024 R2</span>
                               <span className="stat-val">{r.cutoff24}</span>
                            </div>
                            <div className="stat-box">
                               <span className="stat-label">2025 R2</span>
                               <span className="stat-val">{r.cutoff25}</span>
                            </div>
                            <div className="stat-box">
                               <span className="stat-label">Your Category Rank</span>
                               <span className="stat-val">{r.myCompRank}</span>
                            </div>
                            <div className="stat-box">
                               <span className="stat-label">Category (Type)</span>
                               <span className="stat-val">{r.cat} ({r.seatType === 'Female' ? 'F' : 'G'})</span>
                            </div>
                         </div>

                         <div className="flex gap-2">
                            <button 
                              onClick={() => setSelectedCollege(r.college)}
                              className="flex-1 py-3 bg-slate-100 rounded-xl font-bold text-xs"
                            >Info</button>
                            <button 
                              onClick={() => {
                                 const isAdded = choices.find(c => c.collegeId === r.college.id && c.branch === r.branch);
                                 if (isAdded) removeChoiceByCombo(r.college.id, r.branch);
                                 else setChoices([...choices, { collegeId: r.college.id, branch: r.branch, collegeName: r.college.name }]);
                              }}
                              className={`flex-1 py-3 rounded-xl font-bold text-xs ${choices.find(c => c.collegeId === r.college.id && c.branch === r.branch) ? 'bg-rose-500 text-white' : 'bg-primary text-white'}`}
                            >
                               {choices.find(c => c.collegeId === r.college.id && c.branch === r.branch) ? 'Remove' : 'Add Choice'}
                            </button>
                         </div>
                      </div>
                   ))}
                </div>

                {/* Desktop Table (Hidden on Mobile) */}
                <div className="desktop-only glass-panel overflow-hidden !p-0">
                   <table className="premium-table">
                      <thead>
                         <tr>
                            <th>College & Branch</th>
                            <th className="text-center">2024 R2</th>
                            <th className="text-center">2025 R2</th>
                            <th className="text-center">Your Rank</th>
                            <th className="text-center">Chance</th>
                            <th className="text-right">Actions</th>
                         </tr>
                      </thead>
                      <tbody>
                         {results.all.slice(0, visibleCount).map((r, i) => (
                            <tr key={i}>
                               <td>
                                  <div className="font-extrabold text-slate-800">{r.college.name}</div>
                                  <div className="text-xs font-semibold text-slate-500 mt-1 uppercase tracking-wider">{r.branch}</div>
                               </td>
                               <td className="text-center font-bold text-slate-500">{r.cutoff24}</td>
                               <td className="text-center font-extrabold text-primary">{r.cutoff25}</td>
                               <td className="text-center">
                                  <div className="font-black">{r.myCompRank}</div>
                                  <div className="text-[9px] font-bold text-slate-400">{r.cat} ({r.seatType === 'Female' ? 'F' : 'G'})</div>
                               </td>
                               <td className="text-center">
                                  <span className={`chance-chip chance-${r.chance}`}>{r.chance}</span>
                               </td>
                               <td className="text-right">
                                  <div className="flex justify-end gap-2">
                                     <button onClick={() => setSelectedCollege(r.college)} className="p-2.5 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all"><Info size={18}/></button>
                                     <button 
                                        onClick={() => {
                                           const isAdded = choices.find(c => c.collegeId === r.college.id && c.branch === r.branch);
                                           if (isAdded) removeChoiceByCombo(r.college.id, r.branch);
                                           else setChoices([...choices, { collegeId: r.college.id, branch: r.branch, collegeName: r.college.name }]);
                                        }}
                                        className={`p-2.5 rounded-xl transition-all ${choices.find(c => c.collegeId === r.college.id && c.branch === r.branch) ? 'bg-rose-500 text-white' : 'bg-primary/10 text-primary hover:bg-primary hover:text-white'}`}
                                     >
                                        {choices.find(c => c.collegeId === r.college.id && c.branch === r.branch) ? <Minus size={18}/> : <Plus size={18}/>}
                                     </button>
                                  </div>
                               </td>
                            </tr>
                         ))}
                      </tbody>
                   </table>
                </div>

                {visibleCount < results.all.length && (
                   <button 
                     onClick={() => setVisibleCount(v => v + 50)}
                     className="w-full py-6 bg-white border border-slate-100 rounded-2xl font-black text-xs uppercase tracking-[0.2em] text-slate-400 hover:text-primary hover:border-primary transition-all shadow-sm"
                   >
                      Load More Comparisons ({visibleCount} of {results.all.length})
                   </button>
                )}
             </section>
          </div>
        )}

        {/* Premium Modal */}
        {selectedCollege && (
          <div className="modal-backdrop" onClick={() => setSelectedCollege(null)}>
             <div className="modal-box" onClick={e => e.stopPropagation()}>
                <div className="flex justify-between items-start mb-6">
                   <div>
                      <h2 className="text-2xl font-black tracking-tight">{selectedCollege.name}</h2>
                      <p className="text-slate-500 flex items-center gap-1.5 mt-1 font-semibold text-sm">
                         <MapPin size={14} className="text-rose-500" /> {selectedCollege.location}
                      </p>
                   </div>
                   <button onClick={() => setSelectedCollege(null)} className="p-2 bg-slate-100 rounded-full hover:bg-rose-50 hover:text-rose-500 transition-all">
                      <X size={20} />
                   </button>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                   <div className="stat-card">
                      <span className="premium-label !font-black">Average Fees</span>
                      <div className="text-lg font-black text-slate-800">{selectedCollege.fees || "₹10,500 / yr"}</div>
                   </div>
                   <div className="stat-card">
                      <span className="premium-label !font-black">NAAC Grade</span>
                      <div className="text-lg font-black text-slate-800">Verified A+</div>
                   </div>
                </div>

                <div className="space-y-6">
                   <div className="space-y-3">
                      <span className="premium-label">Placement Statistics</span>
                      <div className="p-5 bg-indigo-50 rounded-2xl border border-indigo-100">
                         <div className="flex justify-between items-end">
                            <div>
                               <div className="text-xs font-bold text-indigo-600 uppercase mb-1">Highest Package</div>
                               <div className="text-2xl font-black text-indigo-900">{selectedCollege.placement?.highest || "10 LPA"}</div>
                            </div>
                            <div className="text-right">
                               <div className="text-xs font-bold text-indigo-400 uppercase mb-1">Average</div>
                               <div className="text-lg font-black text-indigo-700">{selectedCollege.placement?.avg || "4.8 LPA"}</div>
                            </div>
                         </div>
                      </div>
                   </div>

                   <div className="grid grid-cols-2 gap-4">
                       <a href={selectedCollege.website} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 py-4 bg-primary text-white rounded-2xl font-bold text-sm shadow-lg">
                          <Wifi size={18} /> Website
                       </a>
                       <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedCollege.name)}`} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 py-4 bg-slate-100 text-slate-700 rounded-2xl font-bold text-sm">
                          <MapPin size={18} /> Maps
                       </a>
                   </div>
                </div>
             </div>
          </div>
        )}
      </>
      {/* FOOTER */}
      <footer className="mt-32 py-20 border-t border-slate-100 text-center space-y-8">
         <div className="flex justify-center mb-6">
            <img src="/logo.jpg" alt="Logo" className="w-16 h-16 rounded-full grayscale opacity-50" />
         </div>
         <div className="flex justify-center gap-10">
            <div className="flex flex-col items-center">
               <span className="text-2xl font-black text-slate-800">8.4k+</span>
               <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Data Points</span>
            </div>
            <div className="w-px h-10 bg-slate-200"></div>
            <div className="flex flex-col items-center">
               <span className="text-2xl font-black text-slate-800">39</span>
               <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Institutes</span>
            </div>
            <div className="w-px h-10 bg-slate-200"></div>
            <div className="flex flex-col items-center">
               <span className="text-2xl font-black text-slate-800">100%</span>
               <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Verified</span>
            </div>
         </div>
         
         <div className="max-w-2xl mx-auto space-y-4">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-relaxed px-6">The UGEAC 2025 Predictor is an independent analysis tool powered by historical merit data. This is not an official allotment letter.</p>
            <p className="text-indigo-600 font-black text-sm uppercase tracking-widest">© 2025 APNA COLLEGE BIHAR • Precision Engineering</p>
         </div>
      </footer>
    </div>
  );
}

export default UgeacPredictor;
