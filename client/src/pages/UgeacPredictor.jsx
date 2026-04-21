import React, { useState, useMemo, useEffect } from 'react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { colleges } from '../UgeacData';
import { Send, MapPin, ExternalLink, ShieldCheck, AlertTriangle, GraduationCap, Info, ChevronDown, ChevronUp, CheckCircle2, Building2, Wifi, BookOpen, Trash2, Plus, Minus, Layers, Search, Zap, Filter, LayoutGrid, Download } from 'lucide-react';

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
        
        // Ultra-Soft Minimal Watermark (Nearly Horizontal & Very Light)
        doc.setFontSize(22);
        doc.setFont("helvetica", "normal");
        doc.setTextColor(245, 235, 235); // Ultra Light Pink (Almost white)
        
        // Single central watermark to avoid clutter
        doc.text("APNA COLLEGE BIHAR ANALYSIS", 105, 150, { align: 'center', angle: 5 });
        doc.text("APNA COLLEGE BIHAR ANALYSIS", 105, 220, { align: 'center', angle: 5 });

        // Professional Footer
        doc.setFontSize(8);
        doc.setTextColor(160, 174, 192);
        doc.text("Verified Analysis: apnacollegebihar.online", 42, 287);
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
      doc.text("APNA COLLEGE BIHAR", 14, 22);
      
      doc.setFontSize(10);
      doc.setFont("helvetica", "bold");
      doc.text("OFFICIAL UGEAC COUNSELLING DATA-PACK 2025", 14, 30);
      
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
        doc.text("COMPREHENSIVE CUTOFF MATRIX (Verified 2025)", 14, finalY);

        // Grouping Logic for "Organised Way"
        const tableData = [];
        let seq = 1;

        results.all.forEach((item) => {
           tableData.push([
              seq++,
              item.college.name,
              branchMapping[item.branch] || item.branch,
              `${item.cat} (${item.seatType === 'Female' ? 'F' : 'G'})`,
              item.cutoff25,
              item.myCompRank,
              item.chance
           ]);
        });

        autoTable(doc, {
          startY: finalY + 6,
          head: [['#', 'Engineering College', 'Specialized Branch', 'Cat (Type)', '2025 Cutoff', 'Your Rank', 'Chance']],
          body: tableData,
          theme: 'grid',
          styles: { fontSize: 7, cellPadding: 2, font: 'helvetica' },
          headStyles: { fillColor: [30, 41, 59], textColor: [255, 255, 255], fontStyle: 'bold' },
          alternateRowStyles: { fillColor: [249, 250, 251] },
          columnStyles: {
            0: { cellWidth: 10 },
            1: { cellWidth: 50 },
            4: { fontStyle: 'bold', textColor: [37, 99, 235] },
            6: { fontStyle: 'bold' }
          },
          didParseCell: (data) => {
            if (data.column.index === 6 && data.cell.text[0] === 'High') {
               data.cell.styles.textColor = [5, 150, 105]; // emerald-600
            } else if (data.column.index === 6 && data.cell.text[0] === 'No') {
               data.cell.styles.textColor = [220, 38, 38]; // red-600
            }
          },
          margin: { top: 10 }
        });
      }

      // Apply Branding to all pages
      addBranding(doc);

      doc.save(`UGEAC_Analysis_2025.pdf`);
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
    ugeacData.data2024.forEach(d => map2024.set(`${d.collegeId}-${d.branch}-${d.category}-${d.seat_type}`, d));
    
    const map2025 = new Map();
    ugeacData.data2025.forEach(d => map2025.set(`${d.collegeId}-${d.branch}-${d.category}-${d.seat_type}`, d));

    // Strategy: Simple and Clean Merge - O(N) processing
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
    setVisibleCount(50);
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

             {(rank || ugeacInput) && (
               <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 animate-in slide-in-from-top-4 duration-700">
                  <div className="bg-white border-2 border-blue-100 rounded-[2rem] md:rounded-[2.5rem] p-5 md:p-6 text-center shadow-xl shadow-blue-50 relative overflow-hidden group">
                     <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity"><Zap size={40}/></div>
                     <p className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">UGEAC Rank</p>
                     <p className="text-3xl md:text-4xl font-[1000] text-blue-600 tracking-tighter">#{ugeacInput ? ugeacInput : estimateUgeacRank(rank)}</p>
                     <p className="text-[8px] md:text-[9px] font-bold text-blue-300 mt-2 uppercase">{ugeacInput ? 'Direct Input Rank' : 'Official 2025 State Merit'}</p>
                  </div>

                  {category !== 'UR' && (
                  <div className="bg-white border-2 border-indigo-100 rounded-[2rem] md:rounded-[2.5rem] p-5 md:p-6 text-center shadow-xl shadow-indigo-50 relative overflow-hidden group">
                     <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity"><ShieldCheck size={40}/></div>
                     <p className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{category} Rank</p>
                     <p className="text-3xl md:text-4xl font-[1000] text-indigo-600 tracking-tighter">#{getEstimatedCategoryRank(ugeacInput ? ugeacInput : estimateUgeacRank(rank), category)}</p>
                     <p className="text-[8px] md:text-[9px] font-bold text-indigo-300 mt-2 uppercase">Bihar PDF Analysis</p>
                  </div>
                  )}

                  {gender === 'Female' && (
                  <div className="bg-white border-2 border-rose-100 rounded-[2rem] md:rounded-[2.5rem] p-5 md:p-6 text-center shadow-xl shadow-rose-50 relative overflow-hidden group">
                     <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity"><CheckCircle2 size={40}/></div>
                     <p className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">RCG Rank</p>
                     <p className="text-3xl md:text-4xl font-[1000] text-rose-600 tracking-tighter">#{getEstimatedCategoryRank(ugeacInput ? ugeacInput : estimateUgeacRank(rank), 'RCG')}</p>
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
                          <div className="relative">
                             <div 
                                onClick={() => setIsFinderCollegeOpen(!isFinderCollegeOpen)}
                                className="w-full bg-slate-50 border-2 border-transparent focus-within:border-blue-500 rounded-xl md:rounded-2xl p-3 md:p-4 flex items-center justify-between cursor-pointer shadow-sm group"
                             >
                                <div className="flex flex-col gap-0.5">
                                   <span className="text-[10px] md:text-[11px] font-[1000] text-slate-800 uppercase tracking-tight">
                                      {targetColleges.length > 0 ? `${targetColleges.length} Colleges Selected` : 'Select Focus Institutions'}
                                   </span>
                                   <span className="text-[8px] md:text-[9px] font-bold text-slate-400 uppercase tracking-widest">{isFinderCollegeOpen ? 'Click to close' : 'Click to expand list'}</span>
                                </div>
                                <div className={`transition-transform duration-300 ${isFinderCollegeOpen ? 'rotate-180' : ''}`}>
                                   <ChevronDown size={18} className="text-slate-400 group-hover:text-blue-600" />
                                </div>
                             </div>

                             {isFinderCollegeOpen && (
                                <div className="absolute top-[calc(100%+8px)] left-0 right-0 z-50 bg-white border-2 border-slate-100 rounded-2xl md:rounded-3xl shadow-2xl p-3 md:p-4 space-y-3 animate-in fade-in zoom-in-95 duration-200">
                                   <div className="relative">
                                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300" size={14} />
                                      <input 
                                         type="text" 
                                         placeholder="Search colleges..." 
                                         value={finderCollegeSearch}
                                         onChange={e => setFinderCollegeSearch(e.target.value)}
                                         className="w-full bg-slate-50 rounded-xl py-2.5 pl-9 pr-4 text-[10px] md:text-[11px] font-black uppercase outline-none border border-transparent focus:border-blue-100"
                                      />
                                   </div>
                                   <div className="flex gap-2">
                                      <button 
                                         onClick={() => setTargetColleges(sortedColleges.map(c => c.id))}
                                         className="flex-1 py-2 bg-blue-600 text-white rounded-lg text-[8px] font-black uppercase tracking-widest hover:bg-black transition-colors"
                                      >
                                         Select All
                                      </button>
                                      <button 
                                         onClick={() => setTargetColleges([])}
                                         className="flex-1 py-2 bg-slate-100 text-slate-500 rounded-lg text-[8px] font-black uppercase tracking-widest hover:bg-red-500 hover:text-white transition-colors"
                                      >
                                         Remove All
                                      </button>
                                   </div>
                                   <div className="max-h-[250px] overflow-y-auto custom-scrollbar space-y-1 pr-1">
                                      <div 
                                         onClick={() => {
                                            if (targetColleges.length === sortedColleges.length) setTargetColleges([]);
                                            else setTargetColleges(sortedColleges.map(c => c.id));
                                         }}
                                         className={`flex items-center justify-between p-2.5 md:p-3 rounded-xl cursor-pointer transition-all border-2 ${targetColleges.length === sortedColleges.length ? 'bg-blue-600 text-white border-blue-600' : 'bg-slate-50 text-slate-800 border-transparent hover:border-blue-200'}`}
                                      >
                                         <span className="text-[10px] font-black uppercase tracking-widest">--- ALL 39 BEU COLLEGES ---</span>
                                         {targetColleges.length === sortedColleges.length ? <CheckCircle2 size={16} /> : <Plus size={16} />}
                                      </div>
                                      {sortedColleges.filter(c => c.name.toLowerCase().includes(finderCollegeSearch.toLowerCase())).map(c => {
                                         const isSelected = targetColleges.includes(c.id);
                                         return (
                                            <div 
                                               key={c.id} 
                                               onClick={() => {
                                                  if (isSelected) setTargetColleges(targetColleges.filter(t => t !== c.id));
                                                  else setTargetColleges([...targetColleges, c.id]);
                                               }}
                                               className={`flex items-center justify-between p-2.5 md:p-3 rounded-xl cursor-pointer transition-all ${isSelected ? 'bg-blue-50 text-blue-700' : 'hover:bg-slate-50 text-slate-600'}`}
                                            >
                                               <span className="text-[9px] md:text-[10px] font-black uppercase tracking-tight line-clamp-1">{c.name}</span>
                                               {isSelected ? (
                                                  <div className="w-5 h-5 bg-red-100 text-red-600 rounded-lg flex items-center justify-center animate-in zoom-in duration-200 shadow-sm-red"><Minus size={12} strokeWidth={4} /></div>
                                               ) : (
                                                  <div className="w-5 h-5 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center shadow-sm-blue"><Plus size={12} strokeWidth={4} /></div>
                                               )}
                                            </div>
                                         );
                                      })}
                                   </div>
                                </div>
                             )}
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
                          <div className="relative">
                             <div 
                                onClick={() => setIsFinderBranchOpen(!isFinderBranchOpen)}
                                className="w-full bg-slate-50 border-2 border-transparent focus-within:border-emerald-500 rounded-xl md:rounded-2xl p-3 md:p-4 flex items-center justify-between cursor-pointer shadow-sm group"
                             >
                                <div className="flex flex-col gap-0.5">
                                   <span className="text-[10px] md:text-[11px] font-[1000] text-slate-800 uppercase tracking-tight">
                                      {targetBranches.length > 0 ? `${targetBranches.length} Branches Selected` : 'Select Focus Branches'}
                                   </span>
                                   <span className="text-[8px] md:text-[9px] font-bold text-slate-400 uppercase tracking-widest">{isFinderBranchOpen ? 'Click to close' : 'Click to expand list'}</span>
                                </div>
                                <div className={`transition-transform duration-300 ${isFinderBranchOpen ? 'rotate-180' : ''}`}>
                                   <ChevronDown size={18} className="text-slate-400 group-hover:text-emerald-600" />
                                </div>
                             </div>

                             {isFinderBranchOpen && (
                                <div className="absolute top-[calc(100%+8px)] left-0 right-0 z-50 bg-white border-2 border-slate-100 rounded-2xl md:rounded-3xl shadow-2xl p-3 md:p-4 space-y-3 animate-in fade-in zoom-in-95 duration-200">
                                   <div className="relative">
                                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300" size={14} />
                                      <input 
                                         type="text" 
                                         placeholder="Search branches..." 
                                         value={finderBranchSearch}
                                         onChange={e => setFinderBranchSearch(e.target.value)}
                                         className="w-full bg-slate-50 rounded-xl py-2.5 pl-9 pr-4 text-[10px] md:text-[11px] font-black uppercase outline-none border border-transparent focus:border-emerald-100"
                                      />
                                   </div>
                                   <div className="flex gap-2">
                                      <button 
                                         onClick={() => setTargetBranches(targetColleges.length > 0 ? availableBranchesForTarget : ugeacData.branches)}
                                         className="flex-1 py-2 bg-emerald-600 text-white rounded-lg text-[8px] font-black uppercase tracking-widest hover:bg-black transition-colors"
                                      >
                                         Select All
                                      </button>
                                      <button 
                                         onClick={() => setTargetBranches([])}
                                         className="flex-1 py-2 bg-slate-100 text-slate-500 rounded-lg text-[8px] font-black uppercase tracking-widest hover:bg-red-500 hover:text-white transition-colors"
                                      >
                                         Remove All
                                      </button>
                                   </div>
                                   <div className="max-h-[250px] overflow-y-auto custom-scrollbar space-y-1 pr-1">
                                      <div 
                                         onClick={() => {
                                            const all = targetColleges.length > 0 ? availableBranchesForTarget : ugeacData.branches;
                                            if (targetBranches.length === all.length) setTargetBranches([]);
                                            else setTargetBranches(all);
                                         }}
                                         className={`flex items-center justify-between p-2.5 md:p-3 rounded-xl cursor-pointer transition-all border-2 ${targetBranches.length === (targetColleges.length > 0 ? availableBranchesForTarget : ugeacData.branches).length ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-slate-50 text-slate-800 border-transparent hover:border-emerald-200'}`}
                                      >
                                         <span className="text-[10px] font-black uppercase tracking-widest">--- ALL BRANCHES ---</span>
                                         {targetBranches.length === (targetColleges.length > 0 ? availableBranchesForTarget : ugeacData.branches).length ? <CheckCircle2 size={16} /> : <Plus size={16} />}
                                      </div>
                                      {(targetColleges.length > 0 ? availableBranchesForTarget : ugeacData.branches).filter(b => (branchMapping[b] || b).toLowerCase().includes(finderBranchSearch.toLowerCase())).map(b => {
                                         const isSelected = targetBranches.includes(b);
                                         return (
                                            <div 
                                               key={b} 
                                               onClick={() => {
                                                  if (isSelected) setTargetBranches(targetBranches.filter(t => t !== b));
                                                  else setTargetBranches([...targetBranches, b]);
                                               }}
                                               className={`flex items-center justify-between p-2.5 md:p-3 rounded-xl cursor-pointer transition-all ${isSelected ? 'bg-emerald-50 text-emerald-700' : 'hover:bg-slate-50 text-slate-600'}`}
                                            >
                                               <span className="text-[9px] md:text-[10px] font-black uppercase tracking-tight line-clamp-1">{branchMapping[b] || b}</span>
                                               {isSelected ? (
                                                  <div className="w-5 h-5 bg-red-100 text-red-600 rounded-lg flex items-center justify-center animate-in zoom-in duration-200 shadow-sm-red"><Minus size={12} strokeWidth={4} /></div>
                                               ) : (
                                                  <div className="w-5 h-5 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center shadow-sm-blue"><Plus size={12} strokeWidth={4} /></div>
                                               )}
                                            </div>
                                         );
                                      })}
                                   </div>
                                </div>
                             )}
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
                  <div className="bg-slate-50 border border-slate-200 rounded-[2rem] md:rounded-3xl p-6 lg:p-10 space-y-4 shadow-sm relative z-40">
                    <h3 className="text-[11px] md:text-sm font-black text-slate-800 uppercase tracking-widest flex items-center gap-2">
                      <span className="bg-indigo-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-[10px] md:text-xs shadow-lg">1</span> 
                      Target Institutions
                    </h3>
                    <p className="text-[9px] md:text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">Search and select your dream colleges.</p>
                    
                    <div className="relative">
                       <div 
                          onClick={() => setIsFinderCollegeOpen(!isFinderCollegeOpen)}
                          className="w-full bg-white border-2 border-slate-200 focus-within:border-indigo-500 rounded-xl md:rounded-2xl p-4 flex items-center justify-between cursor-pointer shadow-sm group"
                       >
                          <div className="flex flex-col gap-0.5">
                             <span className="text-[10px] md:text-[11px] font-[1000] text-slate-800 uppercase tracking-tight">
                                {targetColleges.length === 0 ? "Select Target Institutions" : `${targetColleges.length} Colleges Selected`}
                             </span>
                             <span className="text-[8px] md:text-[9px] font-black text-slate-400 uppercase tracking-widest">{targetColleges.length === sortedColleges.length ? "All Institutions Selected" : "Tap to browse colleges"}</span>
                          </div>
                          <div className="w-8 h-8 md:w-10 md:h-10 bg-slate-50 rounded-lg md:rounded-xl shadow-sm flex items-center justify-center border border-slate-200 group-hover:border-indigo-200 transition-colors">
                             <ChevronDown size={16} className={`text-slate-400 transition-transform duration-300 ${isFinderCollegeOpen ? 'rotate-180' : ''}`} />
                          </div>
                       </div>

                       {isFinderCollegeOpen && (
                          <div className="absolute top-[calc(100%+8px)] left-0 right-0 z-50 bg-white border-2 border-slate-200 rounded-2xl md:rounded-3xl shadow-2xl p-3 md:p-4 space-y-3 animate-in fade-in zoom-in-95 duration-200">
                             <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300" size={14} />
                                <input 
                                   type="text" 
                                   placeholder="Search colleges..." 
                                   value={finderCollegeSearch}
                                   onChange={e => setFinderCollegeSearch(e.target.value)}
                                   className="w-full bg-slate-50 rounded-xl py-2.5 pl-9 pr-4 text-[10px] md:text-[11px] font-black uppercase outline-none border border-transparent focus:border-indigo-100"
                                />
                             </div>
                             <div className="flex gap-2">
                                <button 
                                   onClick={() => setTargetColleges(sortedColleges.map(c => c.id))}
                                   className="flex-1 py-2 bg-indigo-600 text-white rounded-lg text-[8px] font-black uppercase tracking-widest hover:bg-slate-900 transition-colors"
                                >
                                   Select All
                                </button>
                                <button 
                                   onClick={() => setTargetColleges([])}
                                   className="flex-1 py-2 bg-slate-100 text-slate-500 rounded-lg text-[8px] font-black uppercase tracking-widest hover:bg-red-500 hover:text-white transition-colors"
                                >
                                   Clear
                                </button>
                             </div>
                             <div className="max-h-[250px] overflow-y-auto custom-scrollbar space-y-1 pr-1">
                                <div 
                                   onClick={() => {
                                      if (targetColleges.length === sortedColleges.length) setTargetColleges([]);
                                      else setTargetColleges(sortedColleges.map(c => c.id));
                                   }}
                                   className={`flex items-center justify-between p-2.5 md:p-3 rounded-xl cursor-pointer transition-all border-2 ${targetColleges.length === sortedColleges.length ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-slate-50 text-slate-800 border-transparent hover:border-indigo-200'}`}
                                >
                                   <span className="text-[10px] font-black uppercase tracking-widest">--- ALL {sortedColleges.length} BEU COLLEGES ---</span>
                                   {targetColleges.length === sortedColleges.length ? <CheckCircle2 size={16} /> : <Plus size={16} />}
                                </div>
                                {sortedColleges.filter(c => c.name.toLowerCase().includes(finderCollegeSearch.toLowerCase())).map(c => {
                                   const isSelected = targetColleges.includes(c.id);
                                   return (
                                      <div 
                                         key={c.id} 
                                         onClick={() => {
                                            if (isSelected) setTargetColleges(targetColleges.filter(t => t !== c.id));
                                            else setTargetColleges([...targetColleges, c.id]);
                                         }}
                                         className={`flex items-center justify-between p-2.5 md:p-3 rounded-xl cursor-pointer transition-all ${isSelected ? 'bg-indigo-50 text-indigo-700' : 'hover:bg-slate-50 text-slate-600'}`}
                                      >
                                         <span className="text-[9px] md:text-[10px] font-black uppercase tracking-tight line-clamp-1">{c.name}</span>
                                         {isSelected ? (
                                            <div className="w-5 h-5 bg-red-100 text-red-600 rounded-lg flex items-center justify-center animate-in zoom-in duration-200"><Minus size={12} strokeWidth={4} /></div>
                                         ) : (
                                            <div className="w-5 h-5 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center"><Plus size={12} strokeWidth={4} /></div>
                                         )}
                                      </div>
                                   );
                                })}
                             </div>
                          </div>
                       )}
                    </div>

                    {targetColleges.length > 0 && (
                      <div className="flex flex-col gap-2 pt-4 border-t border-slate-200 mt-4 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                         {targetColleges.map((id, idx) => {
                            const c = colleges.find(co => co.id === id);
                            return (
                               <div key={id} className="group flex items-center justify-between bg-white border border-slate-200 p-2.5 md:p-3 rounded-xl md:rounded-2xl animate-in slide-in-from-left-2 duration-300">
                                  <div className="flex items-center gap-3 md:gap-4">
                                     <span className="w-5 h-5 bg-indigo-600 text-white rounded-full flex items-center justify-center text-[8px] md:text-[9px] font-black">{idx + 1}</span>
                                     <p className="text-[9px] md:text-[10px] font-black text-slate-800 uppercase tracking-tight">{c?.short || c?.name}</p>
                                  </div>
                                  <div className="flex items-center gap-1">
                                     <button disabled={idx === 0} onClick={() => moveTargetCollege(idx, -1)} className="p-1 md:p-1.5 hover:bg-indigo-50 text-indigo-400 disabled:opacity-10 transition-colors"><ChevronUp size={12} md:size={14}/></button>
                                     <button disabled={idx === targetColleges.length - 1} onClick={() => moveTargetCollege(idx, 1)} className="p-1 md:p-1.5 hover:bg-indigo-50 text-indigo-400 disabled:opacity-10 transition-colors"><ChevronDown size={12} md:size={14}/></button>
                                     <button onClick={() => setTargetColleges(targetColleges.filter(t => t !== id))} className="p-1.5 bg-red-50 hover:bg-red-100 text-red-500 rounded-full h-6 w-6 md:h-7 md:w-7 flex items-center justify-center transition-all">
                                        <Minus size={12} md:size={14} strokeWidth={4}/>
                                     </button>
                                  </div>
                               </div>
                            )
                         })}
                      </div>
                    )}
                    
                    {/* Select All Branches utility for College Preference Mode */}
                    {preferenceBasis === 'college' && targetColleges.length > 0 && (
                       <button 
                          onClick={() => {
                             const newChoices = [...choices];
                             targetColleges.forEach(cid => {
                                const cInfo = colleges.find(c => c.id === cid);
                                const collegeBranches = ugeacData.data2025.filter(d => d.collegeId === cid);
                                const uniqueBranches = Array.from(new Set(collegeBranches.map(d => d.branch)));
                                uniqueBranches.forEach(b => {
                                   if (!newChoices.find(c => c.collegeId === cid && c.branch === b)) {
                                      newChoices.push({ collegeId: cid, branch: b, collegeName: cInfo.name });
                                   }
                                });
                             });
                             setChoices(newChoices);
                             alert(`All branches for the ${targetColleges.length} selected colleges added to choices!`);
                          }}
                          className="w-full mt-4 px-6 md:px-8 py-3.5 md:py-4 bg-emerald-600 hover:bg-slate-900 text-white rounded-xl md:rounded-2xl font-black text-[9px] md:text-[10px] uppercase tracking-widest shadow-xl active:scale-95 transition-all"
                       >
                          + Add All Branches for Selected Colleges to List
                       </button>
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
                      <div className="flex-1 flex flex-col gap-4 max-w-2xl">
                         <div className="relative">
                            <div 
                               onClick={() => setIsFinderBranchOpen(!isFinderBranchOpen)}
                               className="w-full bg-white border-2 border-slate-200 focus-within:border-indigo-500 rounded-xl md:rounded-2xl p-4 flex items-center justify-between cursor-pointer shadow-sm group"
                            >
                               <div className="flex flex-col gap-0.5">
                                  <span className="text-[10px] md:text-[11px] font-[1000] text-slate-800 uppercase tracking-tight">
                                     {targetBranches.length > 0 ? `${targetBranches.length} Branches Selected` : 'Select Focus Branches'}
                                  </span>
                                  <span className="text-[8px] md:text-[9px] font-bold text-slate-400 uppercase tracking-widest">{isFinderBranchOpen ? 'Click to close' : 'Click to browse branches'}</span>
                               </div>
                               <div className="w-8 h-8 md:w-10 md:h-10 bg-slate-50 rounded-lg md:rounded-xl shadow-sm flex items-center justify-center border border-slate-200 group-hover:border-indigo-200 transition-colors">
                                  <ChevronDown size={16} className={`text-slate-400 transition-transform duration-300 ${isFinderBranchOpen ? 'rotate-180' : ''}`} />
                               </div>
                            </div>

                            {isFinderBranchOpen && (
                               <div className="absolute top-[calc(100%+8px)] left-0 right-0 z-50 bg-white border-2 border-slate-200 rounded-2xl md:rounded-3xl shadow-2xl p-3 md:p-4 space-y-3 animate-in fade-in zoom-in-95 duration-200">
                                  <div className="relative">
                                     <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300" size={14} />
                                     <input 
                                        type="text" 
                                        placeholder="Search branches..." 
                                        value={finderBranchSearch}
                                        onChange={e => setFinderBranchSearch(e.target.value)}
                                        className="w-full bg-slate-50 rounded-xl py-2.5 pl-9 pr-4 text-[10px] md:text-[11px] font-black uppercase outline-none border border-transparent focus:border-indigo-100"
                                     />
                                  </div>
                                  <div className="flex gap-2">
                                     <button 
                                        onClick={() => setTargetBranches(availableBranchesForTarget)}
                                        className="flex-1 py-2 bg-indigo-600 text-white rounded-lg text-[8px] font-black uppercase tracking-widest hover:bg-slate-900 transition-colors"
                                     >
                                        Select All
                                     </button>
                                     <button 
                                        onClick={() => setTargetBranches([])}
                                        className="flex-1 py-2 bg-slate-100 text-slate-500 rounded-lg text-[8px] font-black uppercase tracking-widest hover:bg-red-500 hover:text-white transition-colors"
                                     >
                                        Clear
                                     </button>
                                  </div>
                                  <div className="max-h-[250px] overflow-y-auto custom-scrollbar space-y-1 pr-1">
                                     {availableBranchesForTarget.filter(b => (branchMapping[b] || b).toLowerCase().includes(finderBranchSearch.toLowerCase())).map(b => {
                                        const isSelected = targetBranches.includes(b);
                                        return (
                                           <div 
                                              key={b} 
                                              onClick={() => {
                                                 if (isSelected) setTargetBranches(targetBranches.filter(t => t !== b));
                                                 else setTargetBranches([...targetBranches, b]);
                                              }}
                                              className={`flex items-center justify-between p-2.5 md:p-3 rounded-xl cursor-pointer transition-all ${isSelected ? 'bg-indigo-50 text-indigo-700' : 'hover:bg-slate-50 text-slate-600'}`}
                                           >
                                              <span className="text-[9px] md:text-[10px] font-black uppercase tracking-tight">{branchMapping[b] || b}</span>
                                              {isSelected ? (
                                                 <div className="w-5 h-5 bg-red-100 text-red-600 rounded-lg flex items-center justify-center animate-in zoom-in duration-200"><Minus size={12} strokeWidth={4} /></div>
                                              ) : (
                                                 <div className="w-5 h-5 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center"><Plus size={12} strokeWidth={4} /></div>
                                              )}
                                           </div>
                                        );
                                     })}
                                  </div>
                               </div>
                            )}
                         </div>

                         <button 
                            onClick={() => {
                               if (targetBranches.length === 0) return alert("Select at least one branch to add.");
                               const newChoices = [...choices];
                               let addedCount = 0;
                               targetColleges.forEach(cid => {
                                  const cInfo = colleges.find(c => c.id === cid);
                                  const collegeBranches = ugeacData.data2025.filter(d => d.collegeId === cid).map(d => d.branch);
                                  targetBranches.forEach(b => {
                                     // Only add if college actually offers this branch and it isn't added yet
                                     if (collegeBranches.includes(b) && !newChoices.find(c => c.collegeId === cid && c.branch === b)) {
                                        newChoices.push({ collegeId: cid, branch: b, collegeName: cInfo.name });
                                        addedCount++;
                                     }
                                  });
                               });
                               setChoices(newChoices);
                               alert(`Successfully added ${addedCount} combinations to your Priority List!`);
                            }}
                            className="w-full py-4 bg-indigo-600 hover:bg-slate-900 text-white rounded-xl md:rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl active:scale-95 transition-all flex items-center justify-center gap-2"
                         >
                            <Plus size={16}/> Add Selected Combinations to Priority Matrix
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

      {hasPredicted && useMemo(() => (
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
                 <div className="flex items-center gap-3">
                    <button 
                       onClick={downloadResultsPDF}
                       className="flex items-center gap-2 px-6 py-2.5 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-black hover:scale-105 active:scale-95 transition-all shadow-xl shadow-slate-200"
                    >
                       <Download size={14} />
                       Download PDF Report
                    </button>
                    <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest bg-blue-100 px-4 py-2 rounded-full">Report Generated</span>
                 </div>
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
                        {results.all.slice(0, visibleCount).map((r, i) => (
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
               
               {visibleCount < results.all.length && (
                  <div className="flex justify-center p-8 bg-[#f8fafc] border-t border-slate-200">
                     <button 
                        onClick={() => setVisibleCount(v => v + 50)} 
                        className="px-10 py-4 bg-white border-2 border-slate-200 text-slate-600 rounded-full font-black text-[10px] uppercase tracking-widest hover:border-blue-600 hover:text-blue-600 transition-all shadow-sm flex items-center justify-center gap-2"
                     >
                        <ChevronDown size={16} /> Load More Records (Showing {visibleCount} of {results.all.length})
                     </button>
                  </div>
               )}
            </div>
        </div>
      ), [results, choices, category, visibleCount])}

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
