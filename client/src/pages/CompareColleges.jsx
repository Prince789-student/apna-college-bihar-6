import React, { useState, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { colleges } from '../UgeacData';
import SEO from '../components/SEO';
import { Landmark, ArrowRight, ShieldCheck, HelpCircle, Layers } from 'lucide-react';

export default function CompareColleges() {
  const { college1VsCollege2 } = useParams();
  const [col1Id, setCol1Id] = useState(101); // MIT
  const [col2Id, setCol2Id] = useState(102); // BCE

  // Parse from URL parameters if present
  useMemo(() => {
    if (college1VsCollege2) {
      const parts = college1VsCollege2.split('-vs-');
      if (parts.length === 2) {
        const c1 = colleges.find(c => c.short.toLowerCase().replace(/[^a-z0-9]/g, '') === parts[0].replace(/[^a-z0-9]/g, ''));
        const c2 = colleges.find(c => c.short.toLowerCase().replace(/[^a-z0-9]/g, '') === parts[1].replace(/[^a-z0-9]/g, ''));
        if (c1) setCol1Id(c1.id);
        if (c2) setCol2Id(c2.id);
      }
    }
  }, [college1VsCollege2]);

  const col1 = useMemo(() => colleges.find(c => c.id === Number(col1Id)), [col1Id]);
  const col2 = useMemo(() => colleges.find(c => c.id === Number(col2Id)), [col2Id]);

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 font-['Inter'] relative overflow-hidden p-6 md:p-12">
      <SEO 
        title={`${col1?.short || 'College'} vs ${col2?.short || 'College'} Head-to-Head Comparison | Apna College Bihar`}
        description={`Compare side-by-side details, fee structure, location, tier level, and placements between ${col1?.name} and ${col2?.name}.`} />

      <div className="max-w-5xl mx-auto space-y-12 relative z-10">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex p-3 bg-blue-600/10 text-blue-500 rounded-2xl border border-blue-500/20">
            <Layers size={32} />
          </div>
          <h1 className="text-3xl md:text-5xl font-[1000] tracking-tighter text-white uppercase leading-none">
            College Compare
          </h1>
          <p className="text-slate-400 text-xs md:text-sm font-bold uppercase tracking-widest">
            Evaluate fees, placements, and tier metrics side-by-side
          </p>
        </div>

        {/* Selectors */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-900/40 border border-white/5 p-6 rounded-3xl">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Choose College A</label>
            <select 
              value={col1Id} 
              onChange={(e) => setCol1Id(e.target.value)}
              className="w-full bg-[#0a0f1d] border border-white/10 rounded-2xl p-4 text-white text-xs font-bold outline-none"
            >
              {colleges.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Choose College B</label>
            <select 
              value={col2Id} 
              onChange={(e) => setCol2Id(e.target.value)}
              className="w-full bg-[#0a0f1d] border border-white/10 rounded-2xl p-4 text-white text-xs font-bold outline-none"
            >
              {colleges.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
            </select>
          </div>
        </div>

        {/* Comparison Cards */}
        {col1 && col2 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-slate-900/30 border border-white/5 rounded-[2.5rem] space-y-6">
              <h2 className="text-2xl font-black text-white uppercase tracking-tight">{col1.name}</h2>
              <div className="space-y-3 text-sm text-slate-400">
                <p><strong>District:</strong> {col1.location}</p>
                <p><strong>Established:</strong> Year {col1.estd || 'Govt'}</p>
                <p><strong>Tier Rank:</strong> State Tier {col1.tier}</p>
                <p className="text-xs leading-relaxed">{col1.description}</p>
              </div>
            </div>

            <div className="p-8 bg-slate-900/30 border border-white/5 rounded-[2.5rem] space-y-6">
              <h2 className="text-2xl font-black text-white uppercase tracking-tight">{col2.name}</h2>
              <div className="space-y-3 text-sm text-slate-400">
                <p><strong>District:</strong> {col2.location}</p>
                <p><strong>Established:</strong> Year {col2.estd || 'Govt'}</p>
                <p><strong>Tier Rank:</strong> State Tier {col2.tier}</p>
                <p className="text-xs leading-relaxed">{col2.description}</p>
              </div>
            </div>
          </div>
        )}

        {/* Prediction Link */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 md:p-10 rounded-[2.5rem] text-center space-y-4 shadow-xl">
          <h3 className="text-xl md:text-2xl font-[1000] text-white uppercase tracking-tight">Evaluate your allotment probability</h3>
          <p className="text-xs md:text-sm text-white/80 max-w-xl mx-auto font-medium">Use the official Apna College Bihar predictor engine to check your chances at these campuses dynamically.</p>
          <Link to="/ugeac-predictor" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all hover:scale-95 shadow-md">
            Launch Predictor Engine <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
