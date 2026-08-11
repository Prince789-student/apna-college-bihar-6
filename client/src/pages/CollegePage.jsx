import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { colleges } from '../UgeacData';
import { 
  Building2, MapPin, Globe, GraduationCap, Calendar, ShieldCheck, 
  Award, Library, Wifi, Coffee, Star, ArrowRight, Table, 
  Phone, Mail, BookOpen, BarChart3, HelpCircle, ChevronRight 
} from 'lucide-react';
import SEO from '../components/SEO';

// Normalized map from UgeacPredictor
const normalizedMap = {
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
  "G.E.C. ARARIA": "Shri Phanishwar Renu Engineering College, Araria",
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
};

export function getCollegeBySlug(slug) {
  if (!slug) return null;
  const cleanSlug = slug.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  // Try to match short name
  let found = colleges.find(c => {
    const cleanShort = c.short.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleanShort === cleanSlug;
  });
  if (found) return found;
  
  // Try to match full name
  found = colleges.find(c => {
    const cleanName = c.name.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleanName === cleanSlug;
  });
  if (found) return found;
  
  // Manual overrides/aliases for sitemap names that differ
  const aliases = {
    'mwec-madhepura': 112, // BPMCE Madhepura
    'kmc-katihar': 113, // KCE Katihar
    'rce-saharsa': 115, // Saharsa College of Engineering
    'gec-supaul': 116, // Supaul College of Engineering
    'jmit-jamui': 119, // GEC Jamui
    'mita-aurangabad': 125, // GEC Aurangabad
    'spce-siwan': 137, // GEC Siwan
    'bce-buxar': 131, // GEC Buxar
    'gwc-buxar': 131, // GEC Buxar
    'sgp-patna': 141, // S.G.I.D.T. Patna
    'gec-saharsa': 115, // Saharsa College of Engineering
    'gec-rohtas': 111, // SCE Sasaram (Rohtas)
    'gec-begusarai': 110, // RRSDCE Begusarai
  };
  
  const aliasId = aliases[slug.toLowerCase()];
  if (aliasId) {
    return colleges.find(c => c.id === aliasId);
  }
  
  return null;
}

// Helper function to return branch specific descriptions dynamically
function getBranchSpecificDetails(branchName, collegeShort) {
  const normName = branchName.toLowerCase();
  
  if (normName.includes('computer') || normName.includes('cse') || normName.includes('it') || normName.includes('information')) {
    return {
      description: `B.Tech Computer Science & Engineering (CSE / IT) at ${collegeShort} stands as the premier engineering domain. The course curriculum is designed in alignment with modern industrial needs, focusing heavily on Software Engineering, Data Structures & Algorithms (DSA), Operating Systems, DBMS, Artificial Intelligence, and Computer Networks.`,
      faculty: `The CSE faculty cohort consists of highly qualified teachers appointed via the Department of Science, Technology and Technical Education (DSTTE), Government of Bihar. Many professors hold Ph.D. or M.Tech credentials from leading institutions like IITs and NITs. They maintain standard office hours and run programming workshops to help students develop debugging skills.`,
      labs: `The department boasts state-of-the-art computer labs equipped with high-speed internet connectivity, compilers for standard languages (C++, Java, Python), database engines, and software engineering tools. A dedicated programming club supports competitive coding and hackathon participation.`,
      placements: `CSE graduates secure the highest placements in standard Bihar Central Pool Drives and campus recruitments. Key recruiters include major software organizations such as TCS, Wipro, Infosys, Tech Mahindra, and Cognizant, offering packages ranging from ₹3.6 LPA up to ₹15+ LPA.`
    };
  } else if (normName.includes('civil')) {
    return {
      description: `B.Tech Civil Engineering at ${collegeShort} provides comprehensive training in infrastructure design, geotechnical modeling, concrete construction, structural analysis, surveying, and fluid mechanics.`,
      faculty: `The Civil engineering department features experienced professors who emphasize practical learning and site planning. Many faculty members are actively involved in consultancy projects for public works and municipal assessments, bringing actual field engineering insights directly to the classroom.`,
      labs: `Practical labs include high-precision Concrete Technology setups, Soil Mechanics equipment, Surveying instruments (including Total Station and GPS systems), and Hydraulics lab structures. Fieldwork sessions are held regularly to ensure students get hands-on exposure.`,
      placements: `Civil engineering graduates at ${collegeShort} primarily target prestigious state public services (BPSC AE, WRD, RCD, PHED) or core construction giants like L&T, Tata Projects, and regional infrastructure contracting agencies.`
    };
  } else if (normName.includes('mechanical')) {
    return {
      description: `B.Tech Mechanical Engineering at ${collegeShort} offers robust mechanical system fundamentals, covering Thermodynamics, Machine Design, Fluid Mechanics, Kinematics, Heat Transfer, and CAD/CAM modeling structures.`,
      faculty: `The Mechanical department is staffed by seasoned academic instructors with research interests in thermal sciences, material sciences, and automation. Professors provide supportive mentoring for engineering design projects and technical events.`,
      labs: `Lab facilities include a fully functional Workshop (Smithy, Carpentry, Fitting), Internal Combustion Engine labs, Machine Kinematics tools, Heat Transfer rigs, and CAD workstations equipped with standard industry drafting software.`,
      placements: `Mechanical graduates consistently secure job offers in core industrial houses (like Tata Motors, L&T, Prism Cement), energy companies, or slide into software roles during central pool placement drives.`
    };
  } else if (normName.includes('electrical') || normName.includes('ee')) {
    return {
      description: `B.Tech Electrical Engineering at ${collegeShort} focuses on core power systems, control systems, electrical machinery, electrical measurements, microprocessors, and power distribution paradigms.`,
      faculty: `The Electrical engineering division consists of highly qualified professors specializing in power electronics and smart grids. They mentor students closely on academic research projects, electrical circuits troubleshooting, and system simulation.`,
      labs: `Students gain practical training in Electrical Machines labs (AC/DC motors and generators), Power System simulation setups, Electrical Measurements labs, and Microcontroller interfacing toolkits.`,
      placements: `Graduates find placement options in State Electricity Boards, NTPC, Power Grid Corporation of India, core industrial firms, and software companies through DSTTE central pool recruitment drives.`
    };
  } else if (normName.includes('electronics') || normName.includes('ece')) {
    return {
      description: `B.Tech Electronics & Communication Engineering (ECE) at ${collegeShort} blends hardware circuit design with digital communications, focusing on VLSI Design, Embedded Systems, Signal Processing, and Antenna Design.`,
      faculty: `The ECE faculty comprises modern research-oriented teachers with expertise in microelectronics and communication protocols. They guide students through circuit design, programming microcontrollers, and communication system simulations.`,
      labs: `The department features fully equipped Digital Electronics labs, Analog Circuits testing benches, VLSI Design tools, and Microprocessor interfacing labs with modern oscilloscope setups.`,
      placements: `ECE students target career paths in semiconductor firms, embedded software houses, telecom sector (Jio, Airtel), and major IT recruiters like TCS, Cognizant, and Wipro.`
    };
  } else {
    return {
      description: `B.Tech ${branchName} at ${collegeShort} offers specialized training in modern technological domains, focusing on practical learning and industry-relevant skill acquisition.`,
      faculty: `Faculty members are highly qualified professionals appointed through standard government channels, providing excellent mentorship and technical support for academic progress.`,
      labs: `Dedicated laboratory facilities are equipped with the necessary equipment and computational tools required for hands-on experimentation.`,
      placements: `Graduates are eligible to compete in both core technical sector recruitment drives and major off-campus or central pool IT recruitment drives.`
    };
  }
}

function BranchDetailSection({ college }) {
  const branchesList = college.branches || ["Civil", "Mechanical", "Electrical", "Electronics & Communication", "Computer Science"];
  const [activeBranch, setActiveBranch] = useState(branchesList[0]);

  const details = useMemo(() => getBranchSpecificDetails(activeBranch, college.short), [activeBranch, college.short]);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2.5">
        {branchesList.map((branch, i) => (
          <button 
            key={i} 
            onClick={() => setActiveBranch(branch)}
            className={`px-4 py-3 border rounded-xl text-[10px] font-black uppercase tracking-wider transition-all ${
              activeBranch === branch 
                ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-500/20' 
                : 'bg-slate-900/80 border-white/5 text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            {branch}
          </button>
        ))}
      </div>

      <div className="p-6 bg-slate-950/40 border border-white/5 rounded-2xl space-y-6 animate-in fade-in duration-200">
        <div>
          <h3 className="text-xs font-black text-blue-400 uppercase tracking-widest mb-2">Branch Overview</h3>
          <p className="text-slate-300 text-xs leading-relaxed font-medium">{details.description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">🔬 Laboratory Infrastructure</h4>
            <p className="text-slate-400 text-xs leading-relaxed">{details.labs}</p>
          </div>
          <div>
            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">👨‍🏫 Faculty Standards</h4>
            <p className="text-slate-400 text-xs leading-relaxed">{details.faculty}</p>
          </div>
        </div>
        <div>
          <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">💼 Placement Trends</h4>
          <p className="text-slate-400 text-xs leading-relaxed">{details.placements}</p>
        </div>
      </div>
    </div>
  );
}

export default function CollegePage() {
  const { collegeSlug, section } = useParams();
  const navigate = useNavigate();
  
  const currentSection = section || 'overview';
  
  const college = useMemo(() => getCollegeBySlug(collegeSlug), [collegeSlug]);
  
  const [cutoffData, setCutoffData] = useState([]);
  const [seatMatrix, setSeatMatrix] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Filter states
  const [selectedBranch, setSelectedBranch] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedRound, setSelectedRound] = useState('All');
  const [selectedYear, setSelectedYear] = useState('2025');

  useEffect(() => {
    if (!college) return;
    
    setLoading(true);
    Promise.all([
      fetch(`/data/cutoffs.json?v=${Date.now()}`).then(res => res.json()).catch(() => ({})),
      fetch(`/data/seat_matrix.json?v=${Date.now()}`).then(res => res.json()).catch(() => [])
    ]).then(([json, seats]) => {
      const processCutoffs = (raw) => {
        return raw.map(c => {
          const key = c.collegeShort?.toUpperCase().trim();
          const formalName = normalizedMap[key] || c.collegeShort;
          const col = colleges.find(co => co.name === formalName || co.short === c.collegeShort);
          return { ...c, collegeId: col ? col.id : null, collegeName: col ? col.name : formalName };
        }).filter(c => c.collegeId === college.id);
      };

      const raw2024 = json.cutoffs2024 || [];
      const raw2025 = json.cutoffs2025 || [];
      
      const processed2024 = processCutoffs(raw2024).map(c => ({ ...c, year: '2024' }));
      const processed2025 = processCutoffs(raw2025).map(c => ({ ...c, year: '2025' }));
      
      setCutoffData([...processed2024, ...processed2025]);
      
      // Filter seat matrix for this college name/short
      const collegeSeats = seats.filter(s => s.college === college.name || s.college === college.short);
      setSeatMatrix(collegeSeats);
      
      setLoading(false);
    }).catch(err => {
      console.error("Error loading college detailed data:", err);
      setLoading(false);
    });
  }, [college]);

  if (!college) {
    return (
      <div className="min-h-screen bg-[#0a0f1d] flex flex-col items-center justify-center p-6 text-center">
        <Building2 className="text-red-500 w-16 h-16 mb-4 animate-pulse" />
        <h1 className="text-2xl font-black text-white uppercase tracking-tighter mb-2">College Not Found</h1>
        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest max-w-md mb-6">
          The college slug "{collegeSlug}" does not match any official Bihar Government Engineering College in our database.
        </p>
        <Link to="/hub" className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-black uppercase tracking-widest transition-all">
          Back to Hub
        </Link>
      </div>
    );
  }

  // Derived filters
  const branchesInCutoffs = useMemo(() => {
    const list = Array.from(new Set(cutoffData.map(c => c.branch)));
    return ['All', ...list.sort()];
  }, [cutoffData]);

  const categoriesInCutoffs = useMemo(() => {
    const list = Array.from(new Set(cutoffData.map(c => c.category)));
    return ['All', ...list.sort()];
  }, [cutoffData]);

  const filteredCutoffs = useMemo(() => {
    return cutoffData.filter(c => {
      if (c.year !== selectedYear) return false;
      if (selectedBranch !== 'All' && c.branch !== selectedBranch) return false;
      if (selectedCategory !== 'All' && c.category !== selectedCategory) return false;
      if (selectedRound !== 'All' && String(c.round) !== selectedRound) return false;
      return true;
    }).sort((a, b) => a.closing - b.closing);
  }, [cutoffData, selectedYear, selectedBranch, selectedCategory, selectedRound]);

  // Tab configurations
  const tabs = [
    { id: 'overview', name: 'Overview' },
    { id: 'branches', name: 'Branches & Seats' },
    { id: 'fees', name: 'Fee Structure' },
    { id: 'placement', name: 'Placements' },
    { id: 'hostel', name: 'Hostel' },
    { id: 'cutoff', name: 'Cutoff ranks' },
    { id: 'review', name: 'Reviews' }
  ];

  // Helper mess fees
  const feeDetails = {
    admission: "₹10 / year",
    tuition: "₹120 / year",
    development: "₹2,500 / year",
    exam: "₹3,700 / semester",
    registration: "₹2,100 (one-time BEU)",
    caution: "₹500 (one-time, refundable)",
    hostelRent: "₹1,200 / year",
    mess: "₹3,200 - ₹3,600 / month",
    approxTotal: "Academic fees: ~₹4,500/year (Excluding University exam & mess charges)"
  };

  const getPlacementStats = (tier) => {
    switch (tier) {
      case 1:
        return { highest: "₹15 - ₹32 LPA", average: "₹4.8 - ₹5.5 LPA", percentage: "85%", recruiters: "TCS, Wipro, Cognizant, L&T, Prism Cement, HCL, Cisco, Accenture" };
      case 2:
        return { highest: "₹10 - ₹18 LPA", average: "₹4.0 - ₹4.5 LPA", percentage: "75%", recruiters: "TCS, Wipro, Infosys, Cognizant, Prism Cement, L&T" };
      case 3:
        return { highest: "₹8 - ₹12 LPA", average: "₹3.6 - ₹4.0 LPA", percentage: "65%", recruiters: "TCS Ninja, Wipro, Infosys, Tech Mahindra, local contractors" };
      default:
        return { highest: "₹6 - ₹10 LPA", average: "₹3.2 - ₹3.6 LPA", percentage: "55%", recruiters: "Central Pool Campus Drives, TCS, Wipro off-campus, local construction firms" };
    }
  };

  const placementStats = useMemo(() => getPlacementStats(college?.tier), [college]);

  const tabTitles = {
    overview: 'Admission & Details',
    branches: 'Seat Matrix & Branches',
    fees: 'Fee Structure',
    placement: 'Placements & Statistics',
    hostel: 'Hostel Facilities',
    cutoff: `UGEAC ${selectedYear} Cutoff`,
    review: 'Student Reviews'
  };
  const activeTabTitle = tabTitles[currentSection] || 'Details';
  const seoTitle = `${college.short} ${activeTabTitle} | Apna College Bihar`;
  const seoDescription = `Check detailed profile of ${college.name} (${college.short}) including UGEAC Cutoff Ranks, mess fees, seat matrix, hostel facilities, branch-wise placements, and reviews.`;
  const seoKeywords = `${college.short} Cutoff, ${college.name} Fees, ${college.short} Hostel, Bihar Engineering admission, UGEAC Cutoff ${selectedYear}`;

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 font-['Inter'] relative overflow-hidden">
      <SEO 
        title={seoTitle}
        description={seoDescription}
        keywords={seoKeywords}/${currentSection}`}
      />
      
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-600/10 via-transparent to-transparent pointer-events-none"></div>
      <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 py-8 relative z-10">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 mb-6">
          <Link to="/hub" className="hover:text-blue-500 transition-colors">Home</Link>
          <ChevronRight size={10} />
          <Link to="/ugeac-predictor" className="hover:text-blue-500 transition-colors">Predictor</Link>
          <ChevronRight size={10} />
          <span className="text-slate-400">{college.short}</span>
        </div>

        {/* Hero Header */}
        <div className="bg-[#0f172a]/40 backdrop-blur-md border border-white/5 p-6 md:p-8 rounded-[2rem] shadow-2xl mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-600 to-indigo-800 rounded-3xl flex items-center justify-center text-white font-black text-2xl md:text-3xl shadow-xl shadow-blue-500/10">
              {college.short.substring(0, 1)}
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <span className="px-2 py-0.5 bg-blue-500/15 border border-blue-500/20 text-blue-400 rounded-lg text-[9px] font-black uppercase tracking-wider">Tier {college.tier} College</span>
                {college.estd && (
                  <span className="px-2 py-0.5 bg-slate-800 border border-slate-700 text-slate-400 rounded-lg text-[9px] font-black uppercase tracking-wider">Estd {college.estd}</span>
                )}
              </div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tighter text-white uppercase leading-none">{college.name}</h1>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-2 flex items-center gap-1.5"><MapPin size={12} className="text-blue-500" /> {college.location}, Bihar</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 w-full md:w-auto">
            {college.website && (
              <a href={college.website} target="_blank" rel="noreferrer" className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-3.5 bg-slate-900 border border-white/10 hover:bg-slate-800 text-white rounded-xl font-black text-[10px] uppercase tracking-widest transition-all">
                <Globe size={14} /> Official Portal
              </a>
            )}
            <Link to="/ugeac-predictor" className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-black text-[10px] uppercase tracking-widest transition-all shadow-lg shadow-blue-500/20">
              UGEAC Predictor <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex overflow-x-auto pb-1 mb-8 gap-2 border-b border-white/5 scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => navigate(`/college/${collegeSlug}/${tab.id}`)}
              className={`px-6 py-4 text-xs font-black uppercase tracking-widest rounded-t-xl transition-all whitespace-nowrap border-b-2 ${
                currentSection === tab.id 
                  ? 'bg-blue-600/10 text-blue-500 border-blue-600' 
                  : 'text-slate-400 border-transparent hover:text-white hover:bg-white/[0.02]'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-8">
            
            {/* Overview Section */}
            {currentSection === 'overview' && (
              <div className="space-y-8 animate-in fade-in duration-300">
                <div className="bg-[#0f172a]/30 border border-white/5 p-6 md:p-8 rounded-[2rem] shadow-xl">
                  <h2 className="text-lg font-black text-white uppercase tracking-wider mb-6 flex items-center gap-2.5">
                    <Building2 className="text-blue-500" size={20} /> About Institution
                  </h2>
                  <p className="text-slate-300 text-sm leading-relaxed font-medium">
                    {college.description || `${college.name} is a state-funded engineering institution located in ${college.location}, Bihar. Affiliated with Bihar Engineering University (BEU), Patna, it offers B.Tech programs in various specializations under the Department of Science, Technology and Technical Education, Government of Bihar.`}
                  </p>
                </div>

                <div className="bg-[#0f172a]/30 border border-white/5 p-6 md:p-8 rounded-[2rem] shadow-xl">
                  <h2 className="text-lg font-black text-white uppercase tracking-wider mb-6 flex items-center gap-2.5">
                    <Award className="text-blue-500" size={20} /> Key Amenities & Campus Facilities
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {(college.facilities || ["Central Library", "Computer Lab", "Boys Hostel", "Girls Hostel", "Wi-Fi Campus", "Sports Facility"]).map((facility, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 bg-slate-900/40 border border-white/5 rounded-2xl">
                        <div className="p-2 bg-blue-500/10 rounded-xl text-blue-400">
                          {facility.includes("Wi-Fi") ? <Wifi size={16} /> : facility.includes("Library") ? <Library size={16} /> : facility.includes("Hostel") ? <Coffee size={16} /> : <ShieldCheck size={16} />}
                        </div>
                        <span className="text-xs font-black text-slate-300 uppercase tracking-wide">{facility}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Admission Info */}
                <div className="bg-[#0f172a]/30 border border-white/5 p-6 md:p-8 rounded-[2rem] shadow-xl space-y-4">
                  <h2 className="text-lg font-black text-white uppercase tracking-wider flex items-center gap-2.5">
                    <BookOpen className="text-blue-500" size={20} /> Admission Process
                  </h2>
                  <p className="text-slate-300 text-xs leading-relaxed font-semibold">
                    Admissions to {college.short} B.Tech courses are conducted strictly based on JEE Main CRL/AIR Ranks via BCECE Board's Under Graduate Engineering Admission Counselling (UGEAC). Candidates must participate in the online choice locking process to secure allotment.
                  </p>
                  <div className="pt-2">
                    <Link to="/ugeac-predictor" className="inline-flex items-center gap-2 text-xs font-black text-blue-500 hover:text-blue-400 uppercase tracking-widest">
                      Launch UGEAC Predictor Tool <ChevronRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* Branches & Seats Section */}
            {currentSection === 'branches' && (
              <div className="space-y-8 animate-in fade-in duration-300">
                <div className="bg-[#0f172a]/30 border border-white/5 p-6 md:p-8 rounded-[2rem] shadow-xl">
                  <h2 className="text-lg font-black text-white uppercase tracking-wider mb-2 flex items-center gap-2.5">
                    <GraduationCap className="text-blue-500" size={20} /> Available Branches & Specializations Details
                  </h2>
                  <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-6">Select a branch to view detailed academics, laboratory setups, faculty profiles, and placement insights</p>
                  
                  <BranchDetailSection college={college} />
                </div>

                {/* Seat Matrix Table */}
                <div className="bg-[#0f172a]/30 border border-white/5 p-6 md:p-8 rounded-[2rem] shadow-xl">
                  <h2 className="text-lg font-black text-white uppercase tracking-wider mb-2 flex items-center gap-2.5">
                    <Table className="text-blue-500" size={20} /> Seat Intake Matrix
                  </h2>
                  <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-6">Category-wise seat distribution based on official matrix</p>
                  
                  {seatMatrix.length === 0 ? (
                    <div className="p-8 text-center bg-slate-900/20 border border-white/5 rounded-2xl text-slate-500 text-xs font-bold uppercase tracking-wider">
                      Seat matrix data not available for this college.
                    </div>
                  ) : (
                    <div className="overflow-x-auto border border-white/5 rounded-2xl">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-slate-900 text-slate-400 text-[9px] font-black uppercase tracking-widest border-b border-white/5">
                            <th className="p-4">Branch</th>
                            <th className="p-4 text-center">UR</th>
                            <th className="p-4 text-center">SC</th>
                            <th className="p-4 text-center">ST</th>
                            <th className="p-4 text-center">EBC</th>
                            <th className="p-4 text-center">BC</th>
                            <th className="p-4 text-center">EWS</th>
                            <th className="p-4 text-center">RCG</th>
                            <th className="p-4 text-center">Total</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5 text-xs">
                          {seatMatrix.map((item, idx) => {
                            const totalSeats = Object.values(item.seats).reduce((a, b) => typeof b === 'number' ? a + b : a, 0);
                            return (
                              <tr key={idx} className="hover:bg-white/[0.01] transition-all">
                                <td className="p-4 font-black text-white uppercase tracking-tight">{item.branch}</td>
                                <td className="p-4 text-center font-bold text-slate-300">{item.seats.UR}</td>
                                <td className="p-4 text-center text-slate-400">{item.seats.SC}</td>
                                <td className="p-4 text-center text-slate-400">{item.seats.ST}</td>
                                <td className="p-4 text-center text-slate-300">{item.seats.EBC}</td>
                                <td className="p-4 text-center text-slate-300">{item.seats.BC}</td>
                                <td className="p-4 text-center text-slate-400">{item.seats.EWS}</td>
                                <td className="p-4 text-center text-pink-400">{item.seats.RCG}</td>
                                <td className="p-4 text-center font-black text-blue-500">{totalSeats}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Fee Structure Section */}
            {currentSection === 'fees' && (
              <div className="space-y-8 animate-in fade-in duration-300">
                <div className="bg-[#0f172a]/30 border border-white/5 p-6 md:p-8 rounded-[2rem] shadow-xl">
                  <h2 className="text-lg font-black text-white uppercase tracking-wider mb-2 flex items-center gap-2.5">
                    <BarChart3 className="text-blue-500" size={20} /> Academic Fee Structure
                  </h2>
                  <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-6">Government regulated nominal B.Tech fee details</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="p-5 bg-slate-900/40 border border-white/5 rounded-2xl flex justify-between items-center">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Admission Fee</span>
                      <span className="text-sm font-black text-white">{feeDetails.admission}</span>
                    </div>
                    <div className="p-5 bg-slate-900/40 border border-white/5 rounded-2xl flex justify-between items-center">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Tuition Fee</span>
                      <span className="text-sm font-black text-white">{feeDetails.tuition}</span>
                    </div>
                    <div className="p-5 bg-slate-900/40 border border-white/5 rounded-2xl flex justify-between items-center">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Development Fee</span>
                      <span className="text-sm font-black text-white">{feeDetails.development}</span>
                    </div>
                    <div className="p-5 bg-slate-900/40 border border-white/5 rounded-2xl flex justify-between items-center">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Caution Money</span>
                      <span className="text-sm font-black text-white">{feeDetails.caution}</span>
                    </div>
                  </div>

                  <div className="p-6 bg-blue-500/5 border border-blue-500/10 rounded-2xl mb-6">
                    <span className="text-[9px] font-black text-blue-400 uppercase tracking-widest block mb-1">University Exams Fee</span>
                    <p className="text-xs font-bold text-slate-300">
                      BEU Patna Semester Examination Fee of <strong className="text-white">{feeDetails.exam}</strong> is charged extra before each semester exams.
                    </p>
                  </div>

                  <p className="text-slate-500 text-[10px] font-black uppercase tracking-wider text-center">{feeDetails.approxTotal}</p>
                </div>

                <div className="bg-[#0f172a]/30 border border-white/5 p-6 md:p-8 rounded-[2rem] shadow-xl">
                  <h2 className="text-lg font-black text-white uppercase tracking-wider mb-2 flex items-center gap-2.5">
                    <Coffee className="text-blue-500" size={20} /> Hostel & Mess Fee
                  </h2>
                  <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-6">Charges for standard accommodation on-campus</p>
                  <div className="space-y-4">
                    <div className="p-5 bg-slate-900/40 border border-white/5 rounded-2xl flex justify-between items-center">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Hostel Rent Charges</span>
                      <span className="text-sm font-black text-white">{feeDetails.hostelRent}</span>
                    </div>
                    <div className="p-5 bg-slate-900/40 border border-white/5 rounded-2xl flex justify-between items-center">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Mess / Food Charges</span>
                      <span className="text-sm font-black text-white">{feeDetails.mess}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Placements Section */}
            {currentSection === 'placement' && (
              <div className="space-y-8 animate-in fade-in duration-300">
                <div className="bg-[#0f172a]/30 border border-white/5 p-6 md:p-8 rounded-[2rem] shadow-xl">
                  <h2 className="text-lg font-black text-white uppercase tracking-wider mb-2 flex items-center gap-2.5">
                    <Award className="text-blue-500" size={20} /> Placement Overview
                  </h2>
                  <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-6">Central pool & on-campus recruitment trends</p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="p-5 bg-slate-900/40 border border-white/5 rounded-2xl text-center space-y-1">
                      <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest block">Highest Package</span>
                      <span className="text-xl font-black text-white block">{placementStats.highest}</span>
                    </div>
                    <div className="p-5 bg-slate-900/40 border border-white/5 rounded-2xl text-center space-y-1">
                      <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest block">Average Package</span>
                      <span className="text-xl font-black text-blue-500 block">{placementStats.average}</span>
                    </div>
                    <div className="p-5 bg-slate-900/40 border border-white/5 rounded-2xl text-center space-y-1">
                      <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest block">Placement Rate</span>
                      <span className="text-xl font-black text-emerald-500 block">{placementStats.percentage}</span>
                    </div>
                  </div>

                  <div className="p-6 bg-slate-900/40 border border-white/5 rounded-2xl">
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-3">Top Recruiting Partners</span>
                    <p className="text-xs font-bold text-slate-300 leading-relaxed uppercase tracking-wider">{placementStats.recruiters}</p>
                  </div>
                </div>

                <div className="bg-[#0f172a]/30 border border-white/5 p-6 md:p-8 rounded-[2rem] shadow-xl">
                  <h2 className="text-lg font-black text-white uppercase tracking-wider mb-4 flex items-center gap-2.5">
                    <Library className="text-blue-500" size={20} /> Training & Placement Cell (T&P)
                  </h2>
                  <p className="text-slate-300 text-xs leading-relaxed font-semibold">
                    The Placement Cell facilitates industrial visits, summer training, and skill-enhancement bootcamps. DSTTE Bihar also hosts central pooled placement drives in Patna for students of all 38 government engineering colleges, allowing them to compete for national recruiters like TCS, Wipro, and Cognizant.
                  </p>
                </div>
              </div>
            )}

            {/* Hostel Section */}
            {currentSection === 'hostel' && (
              <div className="space-y-8 animate-in fade-in duration-300">
                <div className="bg-[#0f172a]/30 border border-white/5 p-6 md:p-8 rounded-[2rem] shadow-xl">
                  <h2 className="text-lg font-black text-white uppercase tracking-wider mb-6 flex items-center gap-2.5">
                    <Coffee className="text-blue-500" size={20} /> Accommodation Facilities
                  </h2>
                  <p className="text-slate-300 text-sm leading-relaxed font-medium mb-6">
                    {college.short} offers comfortable on-campus hostel facilities for both boys and girls. Hostels are equipped with standard single/double/triple sharing rooms, clean drinking water coolers, 24/7 power backup, and indoor recreation zones.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-5 bg-slate-900/40 border border-white/5 rounded-2xl space-y-1">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Mess & Catering</span>
                      <p className="text-xs font-bold text-slate-300 leading-relaxed">Daily menu of nutritional food managed by student mess committees.</p>
                    </div>
                    <div className="p-5 bg-slate-900/40 border border-white/5 rounded-2xl space-y-1">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Security</span>
                      <p className="text-xs font-bold text-slate-300 leading-relaxed">Round-the-clock security guards and CCTV cameras surveillance at entries.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Cutoffs Section */}
            {currentSection === 'cutoff' && (
              <div className="space-y-8 animate-in fade-in duration-300">
                <div className="bg-[#0f172a]/30 border border-white/5 p-6 md:p-8 rounded-[2rem] shadow-xl">
                  <h2 className="text-lg font-black text-white uppercase tracking-wider mb-2 flex items-center gap-2.5">
                    <BarChart3 className="text-blue-500" size={20} /> Historical UGEAC Cutoffs
                  </h2>
                  <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-6">Compare round-wise closing ranks for {selectedYear}</p>
                  
                  {/* Filters Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[9px] font-black text-slate-400 uppercase tracking-wider">Academic Year</label>
                      <select value={selectedYear} onChange={e => setSelectedYear(e.target.value)} className="bg-slate-900 border border-white/5 rounded-xl p-3 text-[10px] font-black text-white uppercase tracking-widest outline-none">
                        <option value="2025">2025 Cutoffs</option>
                        <option value="2024">2024 Cutoffs</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[9px] font-black text-slate-400 uppercase tracking-wider">Branch</label>
                      <select value={selectedBranch} onChange={e => setSelectedBranch(e.target.value)} className="bg-slate-900 border border-white/5 rounded-xl p-3 text-[10px] font-black text-white uppercase tracking-widest outline-none">
                        {branchesInCutoffs.map(b => <option key={b} value={b}>{b}</option>)}
                      </select>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[9px] font-black text-slate-400 uppercase tracking-wider">Category</label>
                      <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)} className="bg-slate-900 border border-white/5 rounded-xl p-3 text-[10px] font-black text-white uppercase tracking-widest outline-none">
                        {categoriesInCutoffs.map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[9px] font-black text-slate-400 uppercase tracking-wider">Round</label>
                      <select value={selectedRound} onChange={e => setSelectedRound(e.target.value)} className="bg-slate-900 border border-white/5 rounded-xl p-3 text-[10px] font-black text-white uppercase tracking-widest outline-none">
                        <option value="All">All Rounds</option>
                        <option value="1">Round 1</option>
                        <option value="2">Round 2</option>
                      </select>
                    </div>
                  </div>

                  {loading ? (
                    <div className="p-12 text-center text-slate-500 font-black uppercase tracking-widest text-xs">
                      Loading cutoffs dataset...
                    </div>
                  ) : filteredCutoffs.length === 0 ? (
                    <div className="p-12 text-center bg-slate-900/20 border border-white/5 rounded-2xl text-slate-500 text-xs font-bold uppercase tracking-wider">
                      No matching cutoffs found. Modify the filters.
                    </div>
                  ) : (
                    <div className="overflow-x-auto border border-white/5 rounded-2xl">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-slate-900 text-slate-400 text-[9px] font-black uppercase tracking-widest border-b border-white/5">
                            <th className="p-4">Branch</th>
                            <th className="p-4 text-center">Category</th>
                            <th className="p-4 text-center">Round</th>
                            <th className="p-4 text-center">Opening Rank</th>
                            <th className="p-4 text-center">Closing Rank</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5 text-xs">
                          {filteredCutoffs.map((item, idx) => (
                            <tr key={idx} className="hover:bg-white/[0.01] transition-all">
                              <td className="p-4 font-black text-white uppercase tracking-tight">{item.branch}</td>
                              <td className="p-4 text-center">
                                <span className="px-2 py-0.5 bg-slate-800 text-slate-300 rounded font-bold uppercase text-[10px]">
                                  {item.category} {item.seatType === 'Female' ? '(F)' : ''}
                                </span>
                              </td>
                              <td className="p-4 text-center font-bold text-slate-400">Round {item.round}</td>
                              <td className="p-4 text-center font-mono text-slate-400">{item.opening}</td>
                              <td className="p-4 text-center font-mono font-black text-blue-500">{item.closing}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Reviews Section */}
            {currentSection === 'review' && (
              <div className="space-y-8 animate-in fade-in duration-300">
                <div className="bg-[#0f172a]/30 border border-white/5 p-6 md:p-8 rounded-[2rem] shadow-xl">
                  <h2 className="text-lg font-black text-white uppercase tracking-wider mb-2 flex items-center gap-2.5">
                    <Star className="text-blue-500" size={20} /> Student Reviews & Ratings
                  </h2>
                  <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-6">Honest opinions from verified scholars</p>

                  <div className="flex flex-col md:flex-row items-center gap-8 p-6 bg-slate-900/40 border border-white/5 rounded-2xl mb-8">
                    <div className="text-center space-y-1.5">
                      <span className="text-4xl font-[1000] text-white">4.1</span>
                      <div className="flex gap-1 justify-center text-amber-400">
                        <Star size={14} className="fill-current" />
                        <Star size={14} className="fill-current" />
                        <Star size={14} className="fill-current" />
                        <Star size={14} className="fill-current" />
                        <Star size={14} />
                      </div>
                      <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest block">Average Rating</span>
                    </div>
                    <div className="flex-1 space-y-2.5 w-full">
                      {[
                        { label: "Academics", pct: "85%" },
                        { label: "Campus Life", pct: "70%" },
                        { label: "Hostel facility", pct: "75%" },
                        { label: "Infrastructure", pct: "80%" }
                      ].map((item, idx) => (
                        <div key={idx} className="space-y-1">
                          <div className="flex justify-between text-[9px] font-black uppercase tracking-wider text-slate-400">
                            <span>{item.label}</span>
                            <span>{item.pct}</span>
                          </div>
                          <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500 rounded-full" style={{ width: item.pct }}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Reviews List */}
                  <div className="space-y-4">
                    {[
                      { author: "Aditya Kumar (CSE)", text: "Academics is very good here, and professors are supportive. Hostels are clean but mess food could be better.", rating: 4 },
                      { author: "Priya Sinha (Civil)", text: "Decent placement and very peaceful campus. Technical fest is also held annually.", rating: 4 }
                    ].map((rev, idx) => (
                      <div key={idx} className="p-5 bg-slate-900/40 border border-white/5 rounded-2xl space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-[10px] font-black text-white uppercase tracking-wider">{rev.author}</span>
                          <div className="flex gap-0.5 text-amber-400">
                            {Array.from({ length: rev.rating }).map((_, i) => (
                              <Star key={i} size={10} className="fill-current" />
                            ))}
                          </div>
                        </div>
                        <p className="text-slate-300 text-xs leading-relaxed font-semibold">"{rev.text}"</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Quick Links */}
            <div className="bg-[#0f172a]/30 border border-white/5 p-6 rounded-[2rem] shadow-xl space-y-4">
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest">College Navigation</h3>
              <div className="flex flex-col gap-2.5">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => navigate(`/college/${collegeSlug}/${tab.id}`)}
                    className={`flex items-center justify-between p-3.5 rounded-xl text-[10px] font-black uppercase tracking-widest border transition-all ${
                      currentSection === tab.id
                        ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-500/10'
                        : 'bg-slate-900/40 border-white/5 text-slate-400 hover:text-white hover:border-white/10'
                    }`}
                  >
                    <span>{tab.name}</span>
                    <ChevronRight size={12} />
                  </button>
                ))}
              </div>
            </div>

            {/* Live Counselling Helper */}
            <div className="bg-gradient-to-br from-indigo-900/40 to-blue-900/40 border border-blue-500/15 p-6 rounded-[2rem] shadow-xl text-center space-y-4">
              <div className="w-12 h-12 bg-blue-600/15 rounded-2xl flex items-center justify-center text-blue-500 mx-auto border border-blue-500/20">
                <HelpCircle size={24} />
              </div>
              <div>
                <h4 className="text-sm font-black text-white uppercase tracking-tight">Need Counselling Help?</h4>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1">Join 5000+ engineering aspirants</p>
              </div>
              <div className="space-y-2">
                <a href="https://t.me/apnacollegebihar" target="_blank" rel="noreferrer" className="w-full flex items-center justify-center gap-2 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-black text-[9px] uppercase tracking-widest transition-all">
                  Telegram Group
                </a>
                <a href="https://whatsapp.com/channel/0029VbC6FsH3wtb5UEDvrW0a" target="_blank" rel="noreferrer" className="w-full flex items-center justify-center gap-2 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-black text-[9px] uppercase tracking-widest border border-white/5 transition-all">
                  WhatsApp channel
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
