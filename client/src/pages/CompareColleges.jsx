import React, { useState, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { colleges } from '../UgeacData';
import SEO from '../components/SEO';
import { 
  Landmark, ArrowRight, ShieldCheck, HelpCircle, Layers, 
  MapPin, Calendar, Award, Building2, ExternalLink, CheckCircle2,
  ChevronRight, Sparkles, Scale
} from 'lucide-react';

export default function CompareColleges() {
  const { college1VsCollege2 } = useParams();
  const [col1Id, setCol1Id] = useState(101); // MIT Muzaffarpur
  const [col2Id, setCol2Id] = useState(102); // BCE Bhagalpur

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

  const col1 = useMemo(() => colleges.find(c => c.id === Number(col1Id)) || colleges[0], [col1Id]);
  const col2 = useMemo(() => colleges.find(c => c.id === Number(col2Id)) || colleges[1], [col2Id]);

  return (
    <div className="min-h-screen bg-[#f8fafc] md:bg-transparent text-slate-900 md:text-white font-sans relative overflow-hidden py-10 px-4 sm:px-6 md:px-12">
      <SEO 
        title={`${col1?.short || 'College'} vs ${col2?.short || 'College'} Comparison | Apna College Bihar`}
        description={`Compare side-by-side details, fee structure, location, tier rank, facilities, and branches between ${col1?.name} and ${col2?.name}.`} 
      />

      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-0"></div>
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl pointer-events-none -z-0"></div>

      <div className="max-w-5xl mx-auto space-y-10 relative z-10">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[10px] font-heading font-black uppercase tracking-widest text-slate-400">
          <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <ChevronRight size={10} />
          <Link to="/colleges" className="hover:text-blue-600 transition-colors">Colleges</Link>
          <ChevronRight size={10} />
          <span className="text-slate-700 md:text-slate-300">Compare</span>
        </div>

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 md:bg-blue-500/20 border border-blue-200/80 md:border-blue-400/30 text-blue-700 md:text-cyan-300 text-xs font-heading font-extrabold uppercase tracking-wider shadow-sm">
            <Scale size={14} className="text-blue-600 md:text-cyan-400" />
            Head-to-Head College Comparison
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 md:text-white tracking-tight leading-tight">
            Compare <span className="bg-gradient-to-r from-blue-600 to-indigo-600 md:from-blue-400 md:to-cyan-400 bg-clip-text text-transparent">Bihar Engineering Colleges</span>
          </h1>
          <p className="text-slate-600 md:text-slate-300 text-xs sm:text-sm font-medium leading-relaxed">
            Side-by-side breakdown of institutional tier, district campus location, establishment history, and facilities across 38+ Govt Engineering Colleges.
          </p>
        </div>

        {/* College Selector Controls */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 bg-white md:bg-black/25 border border-slate-200/90 md:border-white/15 p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-sm md:shadow-2xl">
          <div className="space-y-2">
            <label className="text-[10px] font-heading font-black text-slate-400 uppercase tracking-widest block flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span> Select College A
            </label>
            <select 
              value={col1Id} 
              onChange={(e) => setCol1Id(e.target.value)}
              className="w-full bg-slate-50 md:bg-slate-950/60 border border-slate-200 md:border-white/20 rounded-2xl p-3.5 text-slate-900 md:text-white text-xs font-heading font-bold outline-none focus:border-blue-500 focus:bg-white md:focus:bg-slate-900 transition-all"
            >
              {colleges.map(c => (
                <option key={c.id} value={c.id} className="text-slate-900 bg-white">
                  {c.name} ({c.location}) - Tier {c.tier}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-heading font-black text-slate-400 uppercase tracking-widest block flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-indigo-600"></span> Select College B
            </label>
            <select 
              value={col2Id} 
              onChange={(e) => setCol2Id(e.target.value)}
              className="w-full bg-slate-50 md:bg-slate-950/60 border border-slate-200 md:border-white/20 rounded-2xl p-3.5 text-slate-900 md:text-white text-xs font-heading font-bold outline-none focus:border-indigo-500 focus:bg-white md:focus:bg-slate-900 transition-all"
            >
              {colleges.map(c => (
                <option key={c.id} value={c.id} className="text-slate-900 bg-white">
                  {c.name} ({c.location}) - Tier {c.tier}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Comparison Cards Side-by-Side */}
        {col1 && col2 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* College 1 Card */}
            <div className="p-6 sm:p-8 bg-white md:bg-black/25 border border-slate-200/90 md:border-white/15 rounded-3xl shadow-sm md:shadow-xl hover:shadow-md transition-shadow space-y-6 md:text-white">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 border border-blue-200/80 text-[10px] font-heading font-black uppercase tracking-wider block w-fit mb-2">
                    State Tier {col1.tier}
                  </span>
                  <h2 className="font-heading text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-tight">
                    {col1.name}
                  </h2>
                  <p className="text-xs text-slate-500 font-bold mt-1 flex items-center gap-1">
                    <MapPin size={13} className="text-slate-400" /> {col1.location}, Bihar
                  </p>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 font-heading font-black text-base shadow-sm shrink-0">
                  {col1.short?.substring(0, 3).toUpperCase() || 'COL'}
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                {col1.description || `${col1.name} is a premier Bihar government technical institution affiliated with Bihar Engineering University (BEU Patna).`}
              </p>

              <div className="space-y-3 pt-4 border-t border-slate-100 text-xs">
                <div className="flex items-center justify-between py-1.5 border-b border-slate-50">
                  <span className="text-slate-400 font-medium">Established Year</span>
                  <span className="font-bold text-slate-800">{col1.estd || 'Govt Institute'}</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-50">
                  <span className="text-slate-400 font-medium">Affiliation</span>
                  <span className="font-bold text-slate-800">BEU Patna (AICTE Approved)</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-50">
                  <span className="text-slate-400 font-medium">Annual Academic Fee</span>
                  <span className="font-bold text-emerald-600">~₹10,500/year (Govt Subsidized)</span>
                </div>
              </div>

              {col1.facilities && (
                <div className="pt-2">
                  <span className="text-[10px] font-heading font-black text-slate-400 uppercase tracking-widest block mb-2">Campus Facilities</span>
                  <div className="flex flex-wrap gap-1.5">
                    {col1.facilities.map((f, i) => (
                      <span key={i} className="px-2.5 py-1 bg-slate-50 border border-slate-200/80 rounded-lg text-[10px] text-slate-700 font-medium">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {col1.website && (
                <a 
                  href={col1.website} 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-blue-600 hover:text-blue-700 uppercase tracking-wider pt-2"
                >
                  Visit Official Website <ExternalLink size={12} />
                </a>
              )}
            </div>

            {/* College 2 Card */}
            <div className="p-6 sm:p-8 bg-white md:bg-black/25 border border-slate-200/90 md:border-white/15 rounded-3xl shadow-sm md:shadow-xl hover:shadow-md transition-shadow space-y-6 md:text-white">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-200/80 text-[10px] font-heading font-black uppercase tracking-wider block w-fit mb-2">
                    State Tier {col2.tier}
                  </span>
                  <h2 className="font-heading text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-tight">
                    {col2.name}
                  </h2>
                  <p className="text-xs text-slate-500 font-bold mt-1 flex items-center gap-1">
                    <MapPin size={13} className="text-slate-400" /> {col2.location}, Bihar
                  </p>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 font-heading font-black text-base shadow-sm shrink-0">
                  {col2.short?.substring(0, 3).toUpperCase() || 'COL'}
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                {col2.description || `${col2.name} is an approved government technical college delivering standardized engineering degree programs under BEU Patna.`}
              </p>

              <div className="space-y-3 pt-4 border-t border-slate-100 text-xs">
                <div className="flex items-center justify-between py-1.5 border-b border-slate-50">
                  <span className="text-slate-400 font-medium">Established Year</span>
                  <span className="font-bold text-slate-800">{col2.estd || 'Govt Institute'}</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-50">
                  <span className="text-slate-400 font-medium">Affiliation</span>
                  <span className="font-bold text-slate-800">BEU Patna (AICTE Approved)</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-50">
                  <span className="text-slate-400 font-medium">Annual Academic Fee</span>
                  <span className="font-bold text-emerald-600">~₹10,500/year (Govt Subsidized)</span>
                </div>
              </div>

              {col2.facilities && (
                <div className="pt-2">
                  <span className="text-[10px] font-heading font-black text-slate-400 uppercase tracking-widest block mb-2">Campus Facilities</span>
                  <div className="flex flex-wrap gap-1.5">
                    {col2.facilities.map((f, i) => (
                      <span key={i} className="px-2.5 py-1 bg-slate-50 border border-slate-200/80 rounded-lg text-[10px] text-slate-700 font-medium">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {col2.website && (
                <a 
                  href={col2.website} 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-indigo-600 hover:text-indigo-700 uppercase tracking-wider pt-2"
                >
                  Visit Official Website <ExternalLink size={12} />
                </a>
              )}
            </div>
          </div>
        )}

        {/* Head-to-Head Comparison Matrix */}
        {col1 && col2 && (
          <div className="bg-white md:bg-black/25 border border-slate-200/90 md:border-white/15 rounded-3xl p-6 sm:p-8 shadow-sm md:shadow-xl md:text-white">
            <h3 className="font-heading text-lg font-black text-slate-900 md:text-white uppercase tracking-tight mb-4 flex items-center gap-2">
              <Scale size={20} className="text-blue-600 md:text-cyan-400" /> Comparison Matrix
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 md:border-white/10 text-slate-400 md:text-slate-300 font-heading font-black uppercase tracking-wider">
                    <th className="pb-3 w-1/3">Feature</th>
                    <th className="pb-3 w-1/3 text-blue-700 md:text-cyan-300 font-extrabold">{col1.name}</th>
                    <th className="pb-3 w-1/3 text-indigo-700 md:text-teal-300 font-extrabold">{col2.name}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 md:divide-white/10 font-medium text-slate-700 md:text-slate-200">
                  <tr>
                    <td className="py-3 font-bold text-slate-900 md:text-white">District</td>
                    <td className="py-3">{col1.location}</td>
                    <td className="py-3">{col2.location}</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-bold text-slate-900 md:text-white">Tier Category</td>
                    <td className="py-3"><span className="px-2 py-0.5 rounded bg-blue-50 md:bg-blue-500/20 text-blue-700 md:text-cyan-300 font-bold border border-transparent md:border-blue-400/30">Tier {col1.tier}</span></td>
                    <td className="py-3"><span className="px-2 py-0.5 rounded bg-indigo-50 md:bg-teal-500/20 text-indigo-700 md:text-teal-300 font-bold border border-transparent md:border-teal-400/30">Tier {col2.tier}</span></td>
                  </tr>
                  <tr>
                    <td className="py-3 font-bold text-slate-900 md:text-white">Established</td>
                    <td className="py-3">{col1.estd || 'State Govt'}</td>
                    <td className="py-3">{col2.estd || 'State Govt'}</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-bold text-slate-900 md:text-white">Governing Body</td>
                    <td className="py-3">DST Bihar / BEU Patna</td>
                    <td className="py-3">DST Bihar / BEU Patna</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-bold text-slate-900 md:text-white">Counselling Gateway</td>
                    <td className="py-3">UGEAC (BCECEB) via JEE Main</td>
                    <td className="py-3">UGEAC (BCECEB) via JEE Main</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Prediction CTA Box */}
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 md:from-black/30 md:via-black/20 md:to-black/30 md:border md:border-cyan-400/30 p-8 md:p-10 rounded-3xl text-center space-y-4 shadow-md md:shadow-xl text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-60 h-60 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
          <span className="px-3 py-1 rounded-full bg-white/20 md:bg-cyan-500/20 text-white md:text-cyan-300 border border-transparent md:border-cyan-400/30 text-[10px] font-heading font-black uppercase tracking-wider inline-block">
            UGEAC 2026 Engine
          </span>
          <h3 className="font-heading text-2xl md:text-3xl font-black uppercase tracking-tight">
            Evaluate Your Allotment Probability
          </h3>
          <p className="text-xs md:text-sm text-blue-100 md:text-slate-300 max-w-xl mx-auto font-medium leading-relaxed">
            Use the official Apna College Bihar predictor engine to check your genuine admission probability at {col1?.short} vs {col2?.short} based on authentic past closing ranks.
          </p>
          <div className="pt-2">
            <Link 
              to="/ugeac-predictor?tab=finder" 
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-blue-700 md:bg-cyan-400 md:text-slate-950 rounded-xl font-heading text-xs font-black uppercase tracking-widest transition-all hover:bg-blue-50 md:hover:bg-cyan-300 shadow-md active:scale-95"
            >
              Launch Predictor Engine <ArrowRight size={14} />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
