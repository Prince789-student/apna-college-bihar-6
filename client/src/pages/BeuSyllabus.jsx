import React, { useState, useEffect } from 'react';
import { BookOpen, Search, ChevronDown, ChevronUp, Loader2, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BeuSyllabus() {
  const [syllabusData, setSyllabusData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const [selectedSem, setSelectedSem] = useState('sem1');
  const [selectedBranch, setSelectedBranch] = useState('cse');
  
  useEffect(() => {
    fetch('/data/syllabus.json')
      .then(res => res.json())
      .then(data => {
        setSyllabusData(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching syllabus:", err);
        setLoading(false);
      });
  }, []);

  const currentSyllabus = syllabusData.find(
    s => s.semester === selectedSem && s.branch === selectedBranch
  );

  const semesters = [
    { id: 'sem1', label: '1st Semester' },
    { id: 'sem2', label: '2nd Semester' },
    { id: 'sem3', label: '3rd Semester' },
    { id: 'sem4', label: '4th Semester' },
    { id: 'sem5', label: '5th Semester' },
    { id: 'sem6', label: '6th Semester' },
    { id: 'sem7', label: '7th Semester' },
    { id: 'sem8', label: '8th Semester' },
  ];

  const branches = [
    { id: 'cse', label: 'Computer Science (All Spec.)' },
    { id: 'civil', label: 'Civil Engineering' },
    { id: 'mech', label: 'Mechanical Engineering' },
    { id: 'ee', label: 'Electrical Engineering' },
    { id: 'ece', label: 'Electronics & Comm.' },
    { id: 'eee', label: 'Electrical & Electronics' },
  ];

  const renderContent = (content) => {
    if (!content) return null;
    
    const lines = content.split('\n');
    let elements = [];
    let currentList = [];
    
    const flushList = () => {
      if (currentList.length > 0) {
        elements.push(<ul key={elements.length} className="list-disc pl-5 mb-4 text-slate-600 font-medium space-y-1">{currentList}</ul>);
        currentList = [];
      }
    };

    lines.forEach((line, index) => {
      line = line.trim();
      if (!line) return;

      if (line.startsWith('## ')) {
        flushList();
        elements.push(
          <h3 key={index} className="text-lg font-black text-indigo-700 mt-6 mb-3 uppercase tracking-wide border-b border-indigo-100 pb-2">
            {line.substring(3)}
          </h3>
        );
      } else if (line.startsWith('- ')) {
        currentList.push(<li key={index} className="text-[13px]">{line.substring(2)}</li>);
      } else if (/^\d+\./.test(line)) {
        flushList();
        elements.push(
          <p key={index} className="text-[14px] font-bold text-slate-800 mt-4 mb-2">
            {line}
          </p>
        );
      } else {
        flushList();
        elements.push(
          <p key={index} className="text-[13px] font-medium text-slate-600 mb-2 leading-relaxed">
            {line}
          </p>
        );
      }
    });
    
    flushList();
    return elements;
  };

  return (
    <div className="min-h-screen bg-slate-50 font-['Inter'] pb-24">
      {/* Header */}
      <div className="bg-indigo-600 text-white rounded-b-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center text-center">
          <Link to="/app" className="self-start text-[10px] font-black uppercase tracking-widest bg-white/20 px-4 py-2 rounded-xl mb-8 hover:bg-white/30 transition-all">
            ← Back to Hub
          </Link>
          
          <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 shadow-inner">
            <BookOpen size={32} className="text-white" />
          </div>
          <h1 className="text-3xl md:text-5xl font-[1000] tracking-tighter uppercase mb-4">
            BEU Syllabus
          </h1>
          <p className="text-indigo-100 text-[11px] md:text-sm font-bold uppercase tracking-widest max-w-lg">
            Complete Semester & Branch wise structured syllabus for Bihar Engineering University
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 -mt-10 relative z-20">
        
        {/* Controls */}
        <div className="bg-white p-6 rounded-[2rem] shadow-xl border border-slate-100 mb-8 flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 px-2">Select Semester</label>
            <div className="relative">
              <select 
                value={selectedSem} 
                onChange={e => setSelectedSem(e.target.value)}
                className="w-full appearance-none bg-slate-50 border-2 border-slate-100 p-4 pr-10 rounded-2xl text-[13px] font-bold text-slate-800 outline-none focus:border-indigo-500 transition-all cursor-pointer"
              >
                {semesters.map(s => <option key={s.id} value={s.id}>{s.label}</option>)}
              </select>
              <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            </div>
          </div>
          
          <div className="flex-1">
            <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 px-2">Select Branch</label>
            <div className="relative">
              <select 
                value={selectedBranch} 
                onChange={e => setSelectedBranch(e.target.value)}
                className="w-full appearance-none bg-slate-50 border-2 border-slate-100 p-4 pr-10 rounded-2xl text-[13px] font-bold text-slate-800 outline-none focus:border-indigo-500 transition-all cursor-pointer"
              >
                {branches.map(b => <option key={b.id} value={b.id}>{b.label}</option>)}
              </select>
              <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-[2rem] shadow-xl border border-slate-100 overflow-hidden min-h-[400px]">
          <div className="p-6 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
            <div>
              <h2 className="text-sm font-black text-slate-800 uppercase tracking-widest">
                {branches.find(b => b.id === selectedBranch)?.label}
              </h2>
              <p className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mt-1">
                {semesters.find(s => s.id === selectedSem)?.label}
              </p>
            </div>
            <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center">
              <Info size={20} />
            </div>
          </div>
          
          <div className="p-6 md:p-10">
            {loading ? (
              <div className="flex flex-col items-center justify-center py-20">
                <Loader2 size={40} className="text-indigo-500 animate-spin mb-4" />
                <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Loading Syllabus Data...</p>
              </div>
            ) : currentSyllabus ? (
              <div className="prose prose-sm max-w-none">
                {renderContent(currentSyllabus.content)}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-6">
                  <Search size={32} className="text-slate-400" />
                </div>
                <h3 className="text-lg font-black text-slate-800 uppercase tracking-tighter mb-2">No Syllabus Found</h3>
                <p className="text-[12px] font-bold text-slate-500 max-w-xs">
                  The syllabus for this specific semester and branch combination is not available yet or is not part of the BEU curriculum.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
