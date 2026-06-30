import React, { useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { 
  GraduationCap, Briefcase, IndianRupee, Cpu, BookOpen, 
  HelpCircle, ChevronRight, BarChart3, Users, Building2 
} from 'lucide-react';
import SEO from '../components/SEO';

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
  const normalizedId = branchId.toLowerCase().trim();
  if (branchMetadata[normalizedId]) {
    return branchMetadata[normalizedId];
  }
  
  // Dynamic generation for sub-branches
  if (normalizedId.startsWith('cse_') || normalizedId.includes('cs')) {
    const suffix = normalizedId.replace('cse_', '').replace('_', ' ').toUpperCase();
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
    const suffix = normalizedId.replace('ece_', '').replace('_', ' ').toUpperCase();
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
  
  // Default fallback
  const prettyName = branchId.toUpperCase().replace('_', ' ');
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
  
  const currentSection = section || 'overview';
  const meta = useMemo(() => getBranchMetadata(branchId), [branchId]);
  
  const tabs = [
    { id: 'overview', name: 'Overview' },
    { id: 'career', name: 'Career Prospects' },
    { id: 'salary', name: 'Salary trends' },
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
    <div className="min-h-screen bg-[#070b14] text-slate-100 font-['Inter'] relative overflow-hidden">
      <SEO 
        title={seoTitle}
        description={seoDescription}
        keywords={seoKeywords}
        url={`https://www.apnacollegebihar.online/branch/${branchId}/${currentSection}`}
      />
      
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-600/10 via-transparent to-transparent pointer-events-none"></div>
      <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 py-8 relative z-10">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 mb-6">
          <Link to="/hub" className="hover:text-blue-500 transition-colors">Home</Link>
          <ChevronRight size={10} />
          <span className="text-slate-400">Branches</span>
          <ChevronRight size={10} />
          <span className="text-slate-300">{branchId.toUpperCase()}</span>
        </div>

        {/* Hero Header */}
        <div className="bg-[#0f172a]/40 backdrop-blur-md border border-white/5 p-6 md:p-8 rounded-[2rem] shadow-2xl mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-indigo-600 to-blue-800 rounded-3xl flex items-center justify-center text-white font-black text-2xl md:text-3xl shadow-xl shadow-indigo-500/10">
              {branchId.substring(0, 2).toUpperCase()}
            </div>
            <div>
              <span className="px-2 py-0.5 bg-indigo-500/15 border border-indigo-500/20 text-indigo-400 rounded-lg text-[9px] font-black uppercase tracking-wider block w-fit mb-1.5">B.Tech Specialization</span>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tighter text-white uppercase leading-none">{meta.name}</h1>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-2 flex items-center gap-1.5">BEU Patna Curriculum Compliant</p>
            </div>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <Link to={`/notes/${branchId}/1`} className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-black text-[10px] uppercase tracking-widest transition-all shadow-lg shadow-blue-500/20">
              Get Semester Notes <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex overflow-x-auto pb-1 mb-8 gap-2 border-b border-white/5 scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => navigate(`/branch/${branchId}/${tab.id}`)}
              className={`px-6 py-4 text-xs font-black uppercase tracking-widest rounded-t-xl transition-all whitespace-nowrap border-b-2 ${
                currentSection === tab.id 
                  ? 'bg-indigo-600/10 text-indigo-500 border-indigo-600' 
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
                    <GraduationCap className="text-indigo-500" size={20} /> Branch Summary
                  </h2>
                  <p className="text-slate-300 text-sm leading-relaxed font-medium">
                    {meta.description}
                  </p>
                </div>

                <div className="bg-[#0f172a]/30 border border-white/5 p-6 md:p-8 rounded-[2rem] shadow-xl">
                  <h2 className="text-lg font-black text-white uppercase tracking-wider mb-6 flex items-center gap-2.5">
                    <Cpu className="text-indigo-500" size={20} /> Core Subjects in BEU Syllabus
                  </h2>
                  <p className="text-slate-300 text-xs leading-relaxed font-semibold mb-6">
                    Students will cover various foundation, core, and elective subjects throughout the 8 semesters. The curriculum is designed in alignment with AICTE guidelines to ensure industry readiness.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {meta.skills.slice(0, 4).map((skill, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 bg-slate-900/40 border border-white/5 rounded-2xl">
                        <div className="p-2 bg-indigo-500/10 text-indigo-400 rounded-xl">
                          <BookOpen size={16} />
                        </div>
                        <span className="text-xs font-black text-slate-300 uppercase tracking-wide">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Career Prospects Section */}
            {currentSection === 'career' && (
              <div className="space-y-8 animate-in fade-in duration-300">
                <div className="bg-[#0f172a]/30 border border-white/5 p-6 md:p-8 rounded-[2rem] shadow-xl">
                  <h2 className="text-lg font-black text-white uppercase tracking-wider mb-6 flex items-center gap-2.5">
                    <Briefcase className="text-indigo-500" size={20} /> Career Opportunities
                  </h2>
                  <p className="text-slate-300 text-sm leading-relaxed font-medium mb-6">
                    B.Tech graduates in {meta.name} can seek employment in various private sectors, multinational corporations, research organizations, and public sector undertakings (PSUs).
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {meta.careers.map((career, i) => (
                      <div key={i} className="p-5 bg-slate-900/40 border border-white/5 rounded-2xl flex items-center justify-between">
                        <span className="text-xs font-black text-slate-300 uppercase tracking-tight">{career}</span>
                        <ChevronRight size={14} className="text-indigo-500" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Salary Trends Section */}
            {currentSection === 'salary' && (
              <div className="space-y-8 animate-in fade-in duration-300">
                <div className="bg-[#0f172a]/30 border border-white/5 p-6 md:p-8 rounded-[2rem] shadow-xl">
                  <h2 className="text-lg font-black text-white uppercase tracking-wider mb-2 flex items-center gap-2.5">
                    <IndianRupee className="text-indigo-500" size={20} /> Salary Packages in India
                  </h2>
                  <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-6">Average package distributions based on experience levels</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-5 bg-slate-900/40 border border-white/5 rounded-2xl text-center space-y-1">
                      <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest block">Entry Level (0-2 Yrs)</span>
                      <span className="text-lg font-black text-white block">{meta.salary.entry}</span>
                    </div>
                    <div className="p-5 bg-slate-900/40 border border-white/5 rounded-2xl text-center space-y-1">
                      <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest block">Mid Level (3-6 Yrs)</span>
                      <span className="text-lg font-black text-indigo-500 block">{meta.salary.mid}</span>
                    </div>
                    <div className="p-5 bg-slate-900/40 border border-white/5 rounded-2xl text-center space-y-1">
                      <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest block">Senior Level (8+ Yrs)</span>
                      <span className="text-lg font-black text-emerald-500 block">{meta.salary.top}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Core Skills Section */}
            {currentSection === 'skills' && (
              <div className="space-y-8 animate-in fade-in duration-300">
                <div className="bg-[#0f172a]/30 border border-white/5 p-6 md:p-8 rounded-[2rem] shadow-xl">
                  <h2 className="text-lg font-black text-white uppercase tracking-wider mb-6 flex items-center gap-2.5">
                    <Cpu className="text-indigo-500" size={20} /> Crucial Practical Skills to Develop
                  </h2>
                  <p className="text-slate-300 text-sm leading-relaxed font-medium mb-6">
                    To remain competitive in the current job market, students must build a strong foundation in these key professional skills alongside university examinations:
                  </p>
                  <div className="space-y-3.5">
                    {meta.skills.map((skill, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 bg-slate-900/40 border border-white/5 rounded-xl">
                        <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                        <span className="text-xs font-black text-slate-300 uppercase tracking-wider">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Bihar Placements Section */}
            {currentSection === 'placement' && (
              <div className="space-y-8 animate-in fade-in duration-300">
                <div className="bg-[#0f172a]/30 border border-white/5 p-6 md:p-8 rounded-[2rem] shadow-xl">
                  <h2 className="text-lg font-black text-white uppercase tracking-wider mb-4 flex items-center gap-2.5">
                    <BarChart3 className="text-indigo-500" size={20} /> Placement Scope in Bihar Colleges
                  </h2>
                  <p className="text-slate-300 text-xs leading-relaxed font-semibold">
                    {meta.placements}
                  </p>
                </div>
              </div>
            )}

            {/* Internships Section */}
            {currentSection === 'internship' && (
              <div className="space-y-8 animate-in fade-in duration-300">
                <div className="bg-[#0f172a]/30 border border-white/5 p-6 md:p-8 rounded-[2rem] shadow-xl">
                  <h2 className="text-lg font-black text-white uppercase tracking-wider mb-4 flex items-center gap-2.5">
                    <Users className="text-indigo-500" size={20} /> Internships & Industrial Training
                  </h2>
                  <p className="text-slate-300 text-xs leading-relaxed font-semibold">
                    {meta.internships}
                  </p>
                </div>
              </div>
            )}

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Quick Links */}
            <div className="bg-[#0f172a]/30 border border-white/5 p-6 rounded-[2rem] shadow-xl space-y-4">
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest">Branch Guide Directory</h3>
              <div className="flex flex-col gap-2.5">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => navigate(`/branch/${branchId}/${tab.id}`)}
                    className={`flex items-center justify-between p-3.5 rounded-xl text-[10px] font-black uppercase tracking-widest border transition-all ${
                      currentSection === tab.id
                        ? 'bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-500/10'
                        : 'bg-slate-900/40 border-white/5 text-slate-400 hover:text-white hover:border-white/10'
                    }`}
                  >
                    <span>{tab.name}</span>
                    <ChevronRight size={12} />
                  </button>
                ))}
              </div>
            </div>

            {/* Telegram / WhatsApp banner */}
            <div className="bg-gradient-to-br from-indigo-900/40 to-blue-900/40 border border-indigo-500/15 p-6 rounded-[2rem] shadow-xl text-center space-y-4">
              <div className="w-12 h-12 bg-indigo-600/15 rounded-2xl flex items-center justify-center text-indigo-500 mx-auto border border-indigo-500/20">
                <HelpCircle size={24} />
              </div>
              <div>
                <h4 className="text-sm font-black text-white uppercase tracking-tight">Bihar Engineering Community</h4>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1">Connect with branch seniors</p>
              </div>
              <div className="space-y-2">
                <a href="https://t.me/apnacollegebihar" target="_blank" rel="noreferrer" className="w-full flex items-center justify-center gap-2 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-black text-[9px] uppercase tracking-widest transition-all">
                  Join Telegram Group
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* ── Educational SEO Content ── */}
        <section className="mt-16 pt-16 border-t border-white/10 relative z-10">
          <div className="bg-[#0f172a]/50 p-8 md:p-12 rounded-[2.5rem] border border-white/5 prose prose-invert max-w-none text-left">
            <h2 className="text-2xl font-black text-white uppercase tracking-tighter mb-4">A Comprehensive Guide to Engineering Branches in Bihar (BEU)</h2>
            <p className="text-slate-300">
              Choosing the right engineering branch is one of the most critical decisions for any UGEAC or JEE Main aspirant. Through this dedicated <strong>Branch Hub</strong>, we provide detailed insights into the core branches offered by Bihar Engineering University (BEU) affiliated colleges, including Computer Science Engineering (CSE), Civil Engineering, Mechanical Engineering, Electrical Engineering, and Electronics & Communication Engineering (ECE).
            </p>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">Why is Branch Selection Crucial in BEU?</h3>
            <p className="text-slate-300">
              Each engineering branch offers a distinct curriculum, distinct placement prospects, and requires different core skills. In Bihar's Government Engineering Colleges (GECs), Civil Engineering often leads to highly coveted government jobs and PSU roles. Conversely, Computer Science and its specializations (like AI/ML, Data Science, Cyber Security) dominate the private sector IT placements. By exploring our branch profiles, you get a clear breakdown of the exact BEU syllabus, necessary technical skills, and average starting salaries in India.
            </p>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">Core Skills & Syllabus Insights</h3>
            <p className="text-slate-300">
              To excel in your chosen branch, simply passing semester exams is not enough. You must build practical, industry-relevant skills. Our branch guides highlight the exact tools and technologies you need to learn. For CSE, this means mastering Data Structures, Algorithms, React, and Node.js. For Mechanical, it involves CAD, Thermodynamics, and AutoDesk. Combine this knowledge with our BEU study notes, PYQs, and interactive syllabus tracker to ensure a 360-degree academic preparation.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}
