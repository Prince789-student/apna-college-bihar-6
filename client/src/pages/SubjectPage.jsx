import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { 
  BookOpen, FileText, Download, Loader2, ChevronRight, 
  HelpCircle, Star, Award, Library, ArrowRight 
} from 'lucide-react';
import SEO from '../components/SEO';

const subjectDetailsMap = {
  'engineering-mathematics-1': {
    name: "Engineering Mathematics - I",
    description: "Covers differential calculus, sequences and series, multivariable calculus, and basic linear algebra. Highly important foundational subject for all engineering branches.",
    difficulty: "Hard",
    units: [
      "Unit 1: Calculus (Rolle's Theorem, Mean Value Theorems, Taylor's Series)",
      "Unit 2: Sequences and Series (Convergence tests, Power series)",
      "Unit 3: Multivariable Calculus (Partial derivatives, Jacobians, Maxima & Minima)",
      "Unit 4: Matrices & Linear Algebra (Rank, Eigenvalues & Eigenvectors, Cayley-Hamilton Theorem)"
    ]
  },
  'engineering-physics': {
    name: "Engineering Physics",
    description: "Focuses on wave optics, lasers, fiber optics, quantum mechanics, and solid state physics. Prepares students for advanced technological concepts.",
    difficulty: "Medium",
    units: [
      "Unit 1: Wave Optics (Interference, Diffraction, Polarization)",
      "Unit 2: Lasers & Fiber Optics (Einstein coefficients, optical fibers)",
      "Unit 3: Quantum Mechanics (De Broglie waves, Schrodinger equation, wave function)",
      "Unit 4: Semiconductor Physics (Band theory, Fermi level, Hall effect)"
    ]
  },
  'engineering-chemistry': {
    name: "Engineering Chemistry",
    description: "Covers atomic & molecular structure, periodic properties, electrochemistry, and water treatment technologies.",
    difficulty: "Medium",
    units: [
      "Unit 1: Atomic & Molecular Structure (Schrodinger equation, Molecular orbitals)",
      "Unit 2: Periodic Properties (Effective nuclear charge, ionization energy)",
      "Unit 3: Electrochemistry (Nernst equation, Batteries, Corrosion)",
      "Unit 4: Water Chemistry (Hardness, Softening methods, Desalination)"
    ]
  },
  'programming-for-problem-solving': {
    name: "Programming for Problem Solving (PPS)",
    description: "Introduction to computers, algorithms, and core programming using the C programming language. Covers logic building and debugging.",
    difficulty: "Medium",
    units: [
      "Unit 1: Introduction to Programming (Flowcharts, Compilers, C variables)",
      "Unit 2: Arithmetic Expressions & Conditionals (If-else, loops)",
      "Unit 3: Arrays & Functions (1D & 2D arrays, recursion)",
      "Unit 4: Pointers & Structures (Pointer arithmetic, defining structures)"
    ]
  },
  'data-structures-and-algorithms': {
    name: "Data Structures & Algorithms (DSA)",
    description: "Core computer science subject covering abstract data types, linear structures (lists, stacks, queues), non-linear structures (trees, graphs), and sorting/searching algorithms.",
    difficulty: "Hard",
    units: [
      "Unit 1: Linear Data Structures (Singly, Doubly, Circular Linked Lists)",
      "Unit 2: Stacks and Queues (Applications, Infix-postfix, Deque)",
      "Unit 3: Non-Linear Data Structures (Binary Trees, BST, AVL Trees, Graphs)",
      "Unit 4: Sorting & Searching (Quick, Merge, Heap sort, Hashing techniques)"
    ]
  },
  'database-management-systems': {
    name: "Database Management Systems (DBMS)",
    description: "Covers database architecture, Entity-Relationship modeling, relational algebra, SQL queries, normalization theories, and transaction management.",
    difficulty: "Medium",
    units: [
      "Unit 1: Introduction & ER Modeling (Schema, instances, relationships)",
      "Unit 2: Relational Model & SQL (Relational algebra, DDL/DML queries)",
      "Unit 3: Normalization (1NF, 2NF, 3NF, BCNF, dependency preservation)",
      "Unit 4: Transaction & Concurrency Control (ACID properties, serializability, locks)"
    ]
  },
  'operating-systems': {
    name: "Operating Systems (OS)",
    description: "Learn about operating system services, process management, CPU scheduling, thread management, deadlocks, memory management, and file systems.",
    difficulty: "Medium",
    units: [
      "Unit 1: Process Management & Threads (Process state, PCB, context switching)",
      "Unit 2: CPU Scheduling & Synchronization (SJF, RR, Semaphores, Monitors)",
      "Unit 3: Deadlocks (Prevention, Avoidance - Banker's Algorithm)",
      "Unit 4: Memory Management (Paging, Segmentation, Virtual Memory, Page replacement)"
    ]
  }
};

export function getSubjectDetails(slug) {
  const normalizedSlug = slug.toLowerCase().replace(/[^a-z0-9]/g, '-');
  const matchedKey = Object.keys(subjectDetailsMap).find(k => k.replace(/[^a-z0-9]/g, '-') === normalizedSlug);
  
  if (matchedKey) {
    return subjectDetailsMap[matchedKey];
  }
  
  // Dynamic fallback
  const prettyName = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  return {
    name: prettyName,
    description: `B.Tech syllabus course for ${prettyName} under Bihar Engineering University (BEU) curriculum guidelines. Download free PDF notes, question papers, and syllabus structure.`,
    difficulty: "Medium",
    units: [
      "Unit 1: Fundamental Concepts & Foundations",
      "Unit 2: Core Methodologies & Theories",
      "Unit 3: Advanced Applications & Practices",
      "Unit 4: Case Studies & Industry Standards"
    ]
  };
}

export default function SubjectPage() {
  const { subjectSlug, section } = useParams();
  const navigate = useNavigate();
  
  const currentSection = section || 'notes';
  
  const subjectInfo = useMemo(() => getSubjectDetails(subjectSlug), [subjectSlug]);
  
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDocs = async () => {
      setLoading(true);
      try {
        const snap = await getDocs(collection(db, 'documents'));
        const docs = snap.docs
          .map(d => ({ id: d.id, ...d.data() }))
          .filter(d => d.type !== 'folder');
        setDocuments(docs);
      } catch (err) {
        console.error("Firestore error loading subject documents:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchDocs();
  }, [subjectSlug]);

  const matchedDocs = useMemo(() => {
    if (documents.length === 0) return [];
    
    const cleanWord = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, '');
    const targetClean = subjectSlug.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    return documents.filter(d => {
      if (!d.subject) return false;
      const docSubjectClean = cleanWord(d.subject);
      // Checks if subject starts with, is equal to, or contains the slug keywords
      return docSubjectClean.includes(targetClean) || targetClean.includes(docSubjectClean);
    });
  }, [documents, subjectSlug]);

  const notesDocs = useMemo(() => {
    return matchedDocs.filter(d => d.category !== 'PYQ');
  }, [matchedDocs]);

  const pyqDocs = useMemo(() => {
    return matchedDocs.filter(d => d.category === 'PYQ');
  }, [matchedDocs]);

  const tabs = [
    { id: 'notes', name: 'Notes' },
    { id: 'pyq', name: 'Previous Year Papers' },
    { id: 'syllabus', name: 'Syllabus' }
  ];

  const generateLink = (doc) => {
    const basePath = doc.category === 'PYQ' ? '/pyq' : '/notes';
    const branch = doc.branch ? doc.branch.toLowerCase() : '';
    const sem = doc.semester ? String(doc.semester) : '';
    if (branch && sem) return `${basePath}/${branch}/${sem}`;
    if (branch) return `${basePath}/${branch}`;
    return basePath;
  };

  const seoTitle = `${subjectInfo.name} B.Tech ${currentSection === 'pyq' ? 'PYQ Papers' : currentSection === 'syllabus' ? 'Syllabus' : 'Notes'} Download | BEU Patna`;
  const seoDescription = `Free PDF download of ${subjectInfo.name} ${currentSection === 'pyq' ? 'previous year question papers' : currentSection === 'syllabus' ? 'official unit syllabus' : 'semester notes'} for Bihar Engineering University B.Tech students.`;
  const seoKeywords = `${subjectInfo.name} notes, ${subjectInfo.name} pyq, ${subjectInfo.name} syllabus BEU, Bihar Engineering study material`;

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 font-['Inter'] relative overflow-hidden">
      <SEO 
        title={seoTitle}
        description={seoDescription}
        keywords={seoKeywords}
        url={`https://www.apnacollegebihar.online/subject/${subjectSlug}/${currentSection}`}
      />
      
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-600/10 via-transparent to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 py-8 relative z-10">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 mb-6">
          <Link to="/hub" className="hover:text-blue-500 transition-colors">Home</Link>
          <ChevronRight size={10} />
          <span className="text-slate-400">Subjects</span>
          <ChevronRight size={10} />
          <span className="text-slate-300">{subjectInfo.name}</span>
        </div>

        {/* Hero Header */}
        <div className="bg-[#0f172a]/40 backdrop-blur-md border border-white/5 p-8 rounded-[2rem] shadow-2xl mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2 py-0.5 bg-blue-500/15 border border-blue-500/20 text-blue-400 rounded-lg text-[9px] font-black uppercase tracking-wider">BEU Curriculum</span>
              <span className={`px-2 py-0.5 rounded-lg text-[9px] font-black uppercase tracking-wider border ${
                subjectInfo.difficulty === 'Hard' ? 'bg-red-500/10 border-red-500/20 text-red-400' : 'bg-amber-500/10 border-amber-500/20 text-amber-400'
              }`}>
                Difficulty: {subjectInfo.difficulty}
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tighter text-white uppercase leading-none mb-4">{subjectInfo.name}</h1>
            <p className="text-slate-400 text-xs leading-relaxed font-semibold max-w-2xl">{subjectInfo.description}</p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex pb-1 mb-8 gap-2 border-b border-white/5">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => navigate(`/subject/${subjectSlug}/${tab.id}`)}
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
          <div className="lg:col-span-8">
            {loading ? (
              <div className="bg-[#0f172a]/30 border border-white/5 rounded-[2rem] shadow-xl p-20 flex flex-col items-center justify-center">
                <Loader2 size={40} className="text-blue-500 animate-spin mb-4" />
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Scanning Document Repository...</p>
              </div>
            ) : (
              <div className="space-y-6">
                
                {/* Notes Section */}
                {currentSection === 'notes' && (
                  <div className="space-y-6 animate-in fade-in duration-300">
                    <h2 className="text-lg font-black text-white uppercase tracking-wider mb-2">Subject Notes (PDF)</h2>
                    
                    {notesDocs.length === 0 ? (
                      <div className="p-12 text-center bg-[#0f172a]/30 border border-white/5 rounded-[2rem] text-slate-500 text-xs font-bold uppercase tracking-wider">
                        No official notes uploaded for this subject yet. We will update soon!
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {notesDocs.map(doc => (
                          <div key={doc.id} className="bg-[#0f172a]/40 border border-white/5 p-5 rounded-2xl flex flex-col justify-between group hover:border-blue-500/20 transition-all">
                            <div>
                              <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest block mb-2">{doc.branch || 'Common'} • Sem {doc.semester}</span>
                              <h3 className="text-sm font-black text-white uppercase leading-tight mb-2 group-hover:text-blue-500 transition-colors">{doc.title}</h3>
                            </div>
                            <Link to={generateLink(doc)} className="mt-4 flex items-center justify-center gap-2 py-3 bg-slate-900 hover:bg-blue-600 text-slate-300 hover:text-white rounded-xl text-[10px] font-black uppercase tracking-widest border border-white/5 transition-all">
                              Download <Download size={14} />
                            </Link>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* PYQ Section */}
                {currentSection === 'pyq' && (
                  <div className="space-y-6 animate-in fade-in duration-300">
                    <h2 className="text-lg font-black text-white uppercase tracking-wider mb-2">Previous Year Question Papers</h2>
                    
                    {pyqDocs.length === 0 ? (
                      <div className="p-12 text-center bg-[#0f172a]/30 border border-white/5 rounded-[2rem] text-slate-500 text-xs font-bold uppercase tracking-wider">
                        No previous year questions (PYQ) found for this subject.
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {pyqDocs.map(doc => (
                          <div key={doc.id} className="bg-[#0f172a]/40 border border-white/5 p-5 rounded-2xl flex flex-col justify-between group hover:border-blue-500/20 transition-all">
                            <div>
                              <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest block mb-2">{doc.branch || 'Common'} • Sem {doc.semester}</span>
                              <h3 className="text-sm font-black text-white uppercase leading-tight mb-2 group-hover:text-blue-500 transition-colors">{doc.title}</h3>
                            </div>
                            <Link to={generateLink(doc)} className="mt-4 flex items-center justify-center gap-2 py-3 bg-slate-900 hover:bg-blue-600 text-slate-300 hover:text-white rounded-xl text-[10px] font-black uppercase tracking-widest border border-white/5 transition-all">
                              Download <Download size={14} />
                            </Link>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Syllabus Section */}
                {currentSection === 'syllabus' && (
                  <div className="space-y-6 animate-in fade-in duration-300">
                    <h2 className="text-lg font-black text-white uppercase tracking-wider mb-2">Unit Syllabus Structure</h2>
                    <div className="bg-[#0f172a]/30 border border-white/5 p-6 rounded-[2rem] shadow-xl space-y-4">
                      {subjectInfo.units.map((unit, i) => (
                        <div key={i} className="p-4 bg-slate-900/40 border border-white/5 rounded-xl">
                          <p className="text-xs font-black text-white uppercase tracking-wider">{unit}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#0f172a]/30 border border-white/5 p-6 rounded-[2rem] shadow-xl space-y-4">
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest">Explore Directory</h3>
              <div className="flex flex-col gap-2.5">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => navigate(`/subject/${subjectSlug}/${tab.id}`)}
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

            <div className="bg-[#0f172a]/30 border border-white/5 p-6 rounded-[2rem] shadow-xl space-y-4">
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest">Recommended Books</h3>
              <div className="space-y-3.5">
                <div className="p-4 bg-slate-900/40 border border-white/5 rounded-xl">
                  <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest block mb-1">Standard Textbook</span>
                  <span className="text-xs font-bold text-white uppercase tracking-tight">Refer to standard reference books suggested in BEU curriculum guidelines.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
