import React, { useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { 
  GraduationCap, Briefcase, IndianRupee, Cpu, BookOpen, 
  HelpCircle, ChevronRight, BarChart3, Users, Building2,
  ArrowRight, Sparkles, Layers, ShieldCheck
} from 'lucide-react';
import SEO from '../components/SEO';

const availableBranches = [
  { id: 'cse', label: 'Computer Science (CSE)', badge: 'Most Popular' },
  { id: 'civil', label: 'Civil Engineering', badge: 'High Govt Scope' },
  { id: 'me', label: 'Mechanical Engineering', badge: 'Core Core' },
  { id: 'ee', label: 'Electrical Engineering', badge: 'PSU & Power' },
  { id: 'ece', label: 'Electronics & Comm (ECE)', badge: 'VLSI & Telecom' },
  { id: 'cse_ai_ml', label: 'CSE (AI & ML)', badge: 'New Tech' },
  { id: 'cse_ds', label: 'CSE (Data Science)', badge: 'High Demand' },
];

const branchMetadata = {
  cse: {
    name: "Computer Science & Engineering",
    description: "CSE focuses on the core principles of computer systems, software development, algorithms, databases, and network architectures. It is the most popular branch with extensive career opportunities in software development, AI, and cybersecurity.",
    skills: ["Data Structures & Algorithms", "Full Stack Web Development", "Object-Oriented Programming (C++/Java/Python)", "Database Systems (SQL/NoSQL)", "Operating Systems & Networking"],
    careers: ["Software Engineer", "Frontend/Backend Developer", "Data Scientist", "Cloud Engineer", "System Architect", "AI Research Scientist"],
    salary: { entry: "₹4.5 - ₹7.0 LPA", mid: "₹12 - ₹25 LPA", top: "₹40+ LPA" },
    placements: "Excellent placements across all major Bihar Engineering colleges (especially Tier 1 like BCE Bhagalpur & MIT Muzaffarpur). Recruiting partners include TCS, Wipro, Infosys, and Cognizant.",
    internships: "Students can secure internships through AICTE portal, Internshala, Google Summer of Code, or direct off-campus applications. Popular domains are Web Development, Android, and Machine Learning."
  },
  civil: {
    name: "Civil Engineering",
    description: "Civil Engineering covers the design, construction, and maintenance of the physical and naturally built environment, including public works such as roads, bridges, canals, dams, airports, sewage systems, pipelines, structural components of buildings, and railways.",
    skills: ["AutoCAD & Revit", "Structural Analysis & Design", "Geotechnical Engineering", "Fluid Mechanics", "Surveying & Estimation"],
    careers: ["Assistant Engineer (Govt - BPSC/SSC JE)", "Structural Engineer", "Site Engineer", "Project Manager", "Environmental Consultant"],
    salary: { entry: "₹3.0 - ₹4.5 LPA", mid: "₹7 - ₹12 LPA", top: "₹20+ LPA" },
    placements: "High eligibility for government jobs (BPSC AE, Bihar Technical Service Commission). Private placements include L&T Construction, Prism Cement, and real estate developers.",
    internships: "Government departments (Road Construction Department, Water Resources Department, PHED Bihar) provide summer internship opportunities for students. Private internship options include L&T or structural consultancies."
  },
  me: {
    name: "Mechanical Engineering",
    description: "Mechanical Engineering is the discipline that applies engineering physics, engineering mathematics, and materials science principles to design, analyze, manufacture, and maintain mechanical systems.",
    skills: ["SolidWorks / CATIA", "Thermodynamics & Heat Transfer", "Machine Design & Theory of Machines", "AutoCAD", "Fluid Machinery"],
    careers: ["Design Engineer", "Production Engineer", "Maintenance Engineer", "Automotive Engineer", "PSU Engineer (IOCL, NTPC, ONGC via GATE)"],
    salary: { entry: "₹3.2 - ₹4.8 LPA", mid: "₹8 - ₹15 LPA", top: "₹25+ LPA" },
    placements: "Opportunities in manufacturing, automotive, and power sectors. Recruiters include Prism Cement, Alstom, and off-campus pool drives.",
    internships: "Indian Railways workshops (e.g. Jamalpur/Harnaut workshops), NTPC, IOCL Barauni refinery, and local manufacturing units offer summer vocational training."
  },
  ee: {
    name: "Electrical Engineering",
    description: "Electrical Engineering is an engineering discipline concerned with the study, design, and application of equipment, devices, and systems which use electricity, electronics, and electromagnetism.",
    skills: ["Power System Analysis", "Electrical Machines & Control Systems", "MATLAB", "Power Electronics", "Circuit Designing"],
    careers: ["Power Grid Engineer (BSPHCL)", "Electrical Consultant", "Maintenance Engineer", "PSU Executive (NTPC, BHEL)", "Control Systems Engineer"],
    salary: { entry: "₹3.5 - ₹5.0 LPA", mid: "₹8 - ₹16 LPA", top: "₹25+ LPA" },
    placements: "Highly valued in Bihar State Power Holding Company Limited (BSPHCL) and central PSUs. Private recruiters include Alstom, Schneider Electric, and L&T.",
    internships: "BSPHCL (Bihar State Power Distribution), power grid substations, railway traction systems, and manufacturing industries offer internships."
  },
  ece: {
    name: "Electronics & Communication Engineering",
    description: "ECE is concerned with the design, development, and testing of electronic equipment used in various systems. It integrates electrical engineering principles with computer science to build communication systems.",
    skills: ["VLSI Design (Verilog/VHDL)", "Embedded Systems (Arduino/Raspberry Pi)", "Analog & Digital Communication", "Microcontrollers", "Signal Processing"],
    careers: ["VLSI Engineer", "Embedded Software Developer", "Network Engineer", "Telecom Engineer", "Hardware Design Engineer"],
    salary: { entry: "₹4.0 - ₹6.0 LPA", mid: "₹10 - ₹20 LPA", top: "₹35+ LPA" },
    placements: "Excellent scope in telecom, semiconductor design, and IT sectors. Companies like Alstom, TCS, and Wipro actively hire ECE students.",
    internships: "Semiconductor startups, BSNL, railway signaling departments, and embedded systems training centers provide internships."
  }
};

export function getBranchMetadata(branchId) {
  const normalizedId = (branchId || 'cse').toLowerCase().trim();
  if (branchMetadata[normalizedId]) {
    return branchMetadata[normalizedId];
  }
  
  if (normalizedId.startsWith('cse_') || normalizedId.includes('cs')) {
    const suffix = normalizedId.replace('cse_', '').replace(/_/g, ' ').toUpperCase();
    return {
      name: `Computer Science & Engineering (${suffix})`,
      description: `This is a specialized B.Tech course focusing on Computer Science & Engineering with a core concentration on ${suffix}. It trains students in standard computer science subjects along with advanced tools and methodologies specific to ${suffix}.`,
      skills: ["Data Structures & Algorithms", "Full Stack Development", `Advanced ${suffix} Concepts`, "Python/R Programming", "Cloud Computing"],
      careers: [`${suffix} Specialist`, "Software Engineer", "Data Engineer", "Systems Developer"],
      salary: { entry: "₹4.5 - ₹7.5 LPA", mid: "₹12 - ₹28 LPA", top: "₹45+ LPA" },
      placements: "Highly sought after by tech recruiters. Placement rates are similar to core CSE, with extra edge in specialized roles.",
      internships: "Students can apply for remote and on-premise internships via AICTE, Internshala, and open-source platforms."
    };
  }
  
  if (normalizedId.startsWith('ece_')) {
    const suffix = normalizedId.replace('ece_', '').replace(/_/g, ' ').toUpperCase();
    return {
      name: `Electronics & Communication Engineering (${suffix})`,
      description: `A specialized branch of ECE focusing on the advanced study of ${suffix}. It covers semiconductor design, hardware description languages, and microelectronics.`,
      skills: [`${suffix} Design`, "Verilog / VHDL Coding", "FPGA Prototyping", "Embedded Systems", "Electronic Circuits"],
      careers: [`${suffix} Design Engineer`, "Hardware Developer", "Embedded Engineer", "RF Engineer"],
      salary: { entry: "₹4.5 - ₹6.5 LPA", mid: "₹11 - ₹22 LPA", top: "₹38+ LPA" },
      placements: "High demand in VLSI companies and core electronics firms. Centralized and off-campus placements apply.",
      internships: "VLSI training centers, CDAC, and hardware fabrication units offer internship opportunities."
    };
  }
  
  const prettyName = normalizedId.toUpperCase().replace(/_/g, ' ');
  return {
    name: `${prettyName} Engineering`,
    description: `B.Tech program in ${prettyName} Engineering under Bihar Engineering University (BEU). This branch provides technical education and specialized engineering skills.`,
    skills: ["Core Engineering Principles", "CAD Design", "Analytical Problem Solving", "Project Management"],
    careers: ["Graduate Engineer Trainee", "Design Consultant", "Quality Analyst", "PSU Engineer"],
    salary: { entry: "₹3.2 - ₹4.5 LPA", mid: "₹7 - ₹12 LPA", top: "₹20+ LPA" },
    placements: "Placements happen through central pool drives and off-campus selection processes.",
    internships: "Students apply to industry-relevant internships using the AICTE portal and local industrial connections."
  };
}

export default function BranchHub() {
  const { branchId, section } = useParams();
  const navigate = useNavigate();
  
  const currentBranchId = (branchId || 'cse').toLowerCase().trim();
  const currentSection = section || 'overview';
  const meta = useMemo(() => getBranchMetadata(currentBranchId), [currentBranchId]);
  
  const tabs = [
    { id: 'overview', name: 'Overview' },
    { id: 'career', name: 'Career Prospects' },
    { id: 'salary', name: 'Salary Trends' },
    { id: 'skills', name: 'Core Skills' },
    { id: 'placement', name: 'Bihar Placements' },
    { id: 'internship', name: 'Internships' }
  ];

  const tabTitles = {
    overview: 'Overview',
    career: 'Career Prospects',
    salary: 'Salary Trends',
    skills: 'Core Skills',
    placement: 'Bihar Placements',
    internship: 'Internships'
  };
  const activeTabTitle = tabTitles[currentSection] || 'Overview';

  const seoTitle = `${meta.name} ${activeTabTitle} | Apna College Bihar`;
  const seoDescription = `Discover ${meta.name} engineering scope in Bihar. Check career opportunities, salary trends, core skills to learn, placements in Bihar engineering colleges, and internship options.`;
  const seoKeywords = `${meta.name} scope, ${meta.name} career options, ${meta.name} salary in India, Bihar Engineering branches`;

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans relative overflow-hidden py-10 px-4 sm:px-6 md:px-12">
      <SEO 
        title={seoTitle}
        description={seoDescription}
        keywords={seoKeywords}
      />
      
      {/* Background ambient accents */}
      <div className="absolute top-0 left-0 w-full h-[350px] bg-gradient-to-b from-blue-100/40 via-transparent to-transparent pointer-events-none"></div>
      <div className="absolute top-20 right-10 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto relative z-10 space-y-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[10px] font-heading font-black uppercase tracking-widest text-slate-400">
          <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <ChevronRight size={10} />
          <Link to="/branches" className="hover:text-blue-600 transition-colors">Branches</Link>
          <ChevronRight size={10} />
          <span className="text-slate-700">{currentBranchId.toUpperCase()}</span>
        </div>

        {/* Branch Switcher Pill Bar */}
        <div className="bg-white border border-slate-200/90 p-3 sm:p-4 rounded-3xl shadow-sm">
          <div className="flex items-center justify-between gap-3 mb-2 px-1">
            <span className="text-[10px] font-heading font-black text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
              <Layers size={13} className="text-blue-600" /> Explore Engineering Branches
            </span>
          </div>
          <div className="flex overflow-x-auto gap-2 pb-1 scrollbar-hide">
            {availableBranches.map((b) => (
              <button
                key={b.id}
                onClick={() => navigate(`/branch/${b.id}`)}
                className={`px-3.5 py-2 rounded-xl text-xs font-heading font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
                  currentBranchId === b.id
                    ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/25 scale-102'
                    : 'bg-slate-50 text-slate-700 border border-slate-200/70 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50/30'
                }`}
              >
                <span>{b.label}</span>
                {b.badge && (
                  <span className={`text-[9px] px-1.5 py-0.2 rounded-full font-black uppercase tracking-tight ${
                    currentBranchId === b.id ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-600'
                  }`}>
                    {b.badge}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Hero Header Card */}
        <div className="bg-white border border-slate-200/90 p-6 sm:p-8 rounded-3xl shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl flex items-center justify-center text-white font-heading font-black text-2xl sm:text-3xl shadow-md shadow-blue-500/20 shrink-0">
              {currentBranchId.substring(0, 2).toUpperCase()}
            </div>
            <div>
              <span className="px-2.5 py-0.5 bg-blue-50 border border-blue-200/80 text-blue-700 rounded-lg text-[9px] font-heading font-black uppercase tracking-wider block w-fit mb-1.5">
                B.Tech Specialization
              </span>
              <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                {meta.name}
              </h1>
              <p className="text-xs text-slate-500 font-heading font-bold uppercase tracking-wider mt-1 flex items-center gap-1.5">
                BEU Patna Curriculum Compliant
              </p>
            </div>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <Link 
              to={`/notes/${currentBranchId}/1`} 
              className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-heading text-xs font-bold transition-all shadow-sm shadow-blue-500/20 active:scale-95"
            >
              Get Semester Notes <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex overflow-x-auto gap-2 pb-1 border-b border-slate-200/80">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => navigate(`/branch/${currentBranchId}/${tab.id}`)}
              className={`px-5 py-3 text-xs font-heading font-bold uppercase tracking-wider rounded-t-xl transition-all whitespace-nowrap border-b-2 ${
                currentSection === tab.id 
                  ? 'bg-white text-blue-600 border-blue-600 shadow-xs' 
                  : 'text-slate-500 border-transparent hover:text-slate-900 hover:bg-white/50'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-6">
            
            {/* Overview Section */}
            {currentSection === 'overview' && (
              <div className="space-y-6">
                <div className="bg-white border border-slate-200/90 p-6 sm:p-8 rounded-3xl shadow-sm space-y-4">
                  <h2 className="font-heading text-lg font-black text-slate-900 uppercase tracking-wider flex items-center gap-2.5">
                    <GraduationCap className="text-blue-600" size={20} /> Branch Summary
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed font-sans font-medium">
                    {meta.description}
                  </p>
                </div>

                <div className="bg-white border border-slate-200/90 p-6 sm:p-8 rounded-3xl shadow-sm space-y-4">
                  <h2 className="font-heading text-lg font-black text-slate-900 uppercase tracking-wider flex items-center gap-2.5">
                    <Cpu className="text-blue-600" size={20} /> Core Subjects in BEU Syllabus
                  </h2>
                  <p className="text-slate-600 text-xs leading-relaxed font-medium">
                    Students will cover essential foundation, core engineering, and elective subjects throughout the 8 semesters. The curriculum aligns strictly with AICTE guidelines for industry readiness.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {meta.skills.slice(0, 4).map((skill, i) => (
                      <div key={i} className="flex items-center gap-3 p-3.5 bg-slate-50 border border-slate-200/80 rounded-2xl">
                        <div className="p-2 bg-blue-50 text-blue-600 rounded-xl">
                          <BookOpen size={16} />
                        </div>
                        <span className="text-xs font-heading font-bold text-slate-800">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Career Prospects Section */}
            {currentSection === 'career' && (
              <div className="bg-white border border-slate-200/90 p-6 sm:p-8 rounded-3xl shadow-sm space-y-6">
                <h2 className="font-heading text-lg font-black text-slate-900 uppercase tracking-wider flex items-center gap-2.5">
                  <Briefcase className="text-blue-600" size={20} /> Career Opportunities
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed font-sans font-medium">
                  B.Tech graduates in {meta.name} can seek employment in various private sector firms, multinational technology companies, government engineering departments, and public sector undertakings (PSUs).
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {meta.careers.map((career, i) => (
                    <div key={i} className="p-4 bg-slate-50 border border-slate-200/80 rounded-2xl flex items-center justify-between hover:border-blue-300 transition-colors">
                      <span className="text-xs font-heading font-bold text-slate-800">{career}</span>
                      <ChevronRight size={14} className="text-blue-600" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Salary Trends Section */}
            {currentSection === 'salary' && (
              <div className="bg-white border border-slate-200/90 p-6 sm:p-8 rounded-3xl shadow-sm space-y-6">
                <div>
                  <h2 className="font-heading text-lg font-black text-slate-900 uppercase tracking-wider flex items-center gap-2.5">
                    <IndianRupee className="text-blue-600" size={20} /> Salary Packages in India
                  </h2>
                  <p className="text-slate-500 text-xs font-medium mt-1">Average package distributions based on experience levels</p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-5 bg-slate-50 border border-slate-200/80 rounded-2xl text-center space-y-1">
                    <span className="text-[10px] font-heading font-black text-slate-400 uppercase tracking-widest block">Entry Level (0-2 Yrs)</span>
                    <span className="text-xl font-heading font-black text-slate-900 block">{meta.salary.entry}</span>
                  </div>
                  <div className="p-5 bg-blue-50/60 border border-blue-100 rounded-2xl text-center space-y-1">
                    <span className="text-[10px] font-heading font-black text-blue-600 uppercase tracking-widest block">Mid Level (3-6 Yrs)</span>
                    <span className="text-xl font-heading font-black text-blue-700 block">{meta.salary.mid}</span>
                  </div>
                  <div className="p-5 bg-emerald-50/60 border border-emerald-100 rounded-2xl text-center space-y-1">
                    <span className="text-[10px] font-heading font-black text-emerald-600 uppercase tracking-widest block">Senior Level (8+ Yrs)</span>
                    <span className="text-xl font-heading font-black text-emerald-700 block">{meta.salary.top}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Core Skills Section */}
            {currentSection === 'skills' && (
              <div className="bg-white border border-slate-200/90 p-6 sm:p-8 rounded-3xl shadow-sm space-y-6">
                <h2 className="font-heading text-lg font-black text-slate-900 uppercase tracking-wider flex items-center gap-2.5">
                  <Cpu className="text-blue-600" size={20} /> High-Yield Industry Skills
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed font-sans font-medium">
                  To secure top packages, mastering these core practical tools alongside university semester examinations is essential:
                </p>
                <div className="space-y-2.5">
                  {meta.skills.map((skill, i) => (
                    <div key={i} className="flex items-center gap-3 p-3.5 bg-slate-50 border border-slate-200/80 rounded-2xl">
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                      <span className="text-xs font-heading font-bold text-slate-800">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Bihar Placements Section */}
            {currentSection === 'placement' && (
              <div className="bg-white border border-slate-200/90 p-6 sm:p-8 rounded-3xl shadow-sm space-y-4">
                <h2 className="font-heading text-lg font-black text-slate-900 uppercase tracking-wider flex items-center gap-2.5">
                  <BarChart3 className="text-blue-600" size={20} /> Placement Scope in Bihar Colleges
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed font-sans font-medium">
                  {meta.placements}
                </p>
              </div>
            )}

            {/* Internships Section */}
            {currentSection === 'internship' && (
              <div className="bg-white border border-slate-200/90 p-6 sm:p-8 rounded-3xl shadow-sm space-y-4">
                <h2 className="font-heading text-lg font-black text-slate-900 uppercase tracking-wider flex items-center gap-2.5">
                  <Users className="text-blue-600" size={20} /> Internships & Industrial Training
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed font-sans font-medium">
                  {meta.internships}
                </p>
              </div>
            )}

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Quick Directory */}
            <div className="bg-white border border-slate-200/90 p-6 rounded-3xl shadow-sm space-y-4">
              <h3 className="text-xs font-heading font-black text-slate-900 uppercase tracking-widest">
                Branch Guide Sections
              </h3>
              <div className="flex flex-col gap-2">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => navigate(`/branch/${currentBranchId}/${tab.id}`)}
                    className={`flex items-center justify-between p-3 rounded-xl text-xs font-heading font-bold uppercase tracking-wider border transition-all ${
                      currentSection === tab.id
                        ? 'bg-blue-600 border-blue-600 text-white shadow-sm shadow-blue-500/20'
                        : 'bg-slate-50 border-slate-200/70 text-slate-600 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50/40'
                    }`}
                  >
                    <span>{tab.name}</span>
                    <ChevronRight size={14} />
                  </button>
                ))}
              </div>
            </div>

            {/* Telegram / Community banner */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-6 rounded-3xl shadow-md shadow-blue-500/20 text-center space-y-4">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white mx-auto border border-white/20">
                <Users size={22} />
              </div>
              <div>
                <h4 className="font-heading text-sm font-black uppercase tracking-tight">Bihar Engineering Community</h4>
                <p className="text-[11px] text-blue-100 font-medium mt-1 leading-relaxed">
                  Connect with branch seniors across MIT, BCE, GCE, and all 38 colleges.
                </p>
              </div>
              <a 
                href="https://t.me/apnacollegebihar" 
                target="_blank" 
                rel="noreferrer" 
                className="w-full flex items-center justify-center gap-2 py-3 bg-white text-blue-700 rounded-xl font-heading text-xs font-black uppercase tracking-wider hover:bg-blue-50 transition-colors shadow-sm"
              >
                Join Telegram Community
              </a>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
