import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Building2, Search, MapPin, Target, CheckCircle, ChevronRight, Globe, Layers } from 'lucide-react';
import { collegeData } from '../data/collegeData';
import SEO from '../components/SEO';
import Footer from '../components/Footer';

export default function CollegeDirectory() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredColleges, setFilteredColleges] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const term = searchTerm.toLowerCase();
    const result = Object.entries(collegeData).filter(([slug, college]) => {
      return (
        college.name.toLowerCase().includes(term) ||
        college.shortName.toLowerCase().includes(term) ||
        college.location.toLowerCase().includes(term) ||
        slug.includes(term)
      );
    });
    setFilteredColleges(result);
  }, [searchTerm]);

  const seoSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "All 38 Bihar Government Engineering Colleges | Apna College Bihar",
    "description": "Complete directory of all 38 government engineering colleges in Bihar under BEU. Find cutoffs, placements, fees, and admission details.",
    "url": "https://www.apnacollegebihar.online/colleges"
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] font-['Inter'] relative overflow-hidden">
      <SEO 
        title="38+ Bihar Government Engineering Colleges | BEU List | Apna College Bihar"
        description="Complete list of all 38 government engineering colleges in Bihar. View UGEAC cutoffs, fees, placements, and campus details for MIT, BCE, GCE and all GECs."
        keywords="Bihar engineering colleges list, top 10 engineering colleges in bihar, BEU colleges, GEC bihar, MIT Muzaffarpur, UGEAC colleges list"
        url="https://www.apnacollegebihar.online/colleges"
        schema={[seoSchema]}
      />

      <section className="bg-slate-900 pt-24 pb-20 px-6 md:px-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <span className="px-4 py-1.5 bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-full text-[10px] font-black uppercase tracking-widest inline-flex items-center gap-2 mb-6">
            <Building2 size={14} /> 38+ Institutions
          </span>
          <h1 className="text-3xl md:text-5xl font-[1000] text-white uppercase tracking-tighter mb-4">
            Engineering Colleges of Bihar
          </h1>
          <p className="text-slate-400 font-medium text-sm md:text-base max-w-2xl mx-auto">
            Explore all government engineering colleges affiliated with Bihar Engineering University (BEU). 
            Find detailed insights on admission, cutoffs, placements, and infrastructure.
          </p>
          
          <div className="max-w-2xl mx-auto mt-10 relative">
            <input 
              type="text" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by college name, city or district..." 
              className="w-full bg-slate-800/80 border border-slate-700/80 text-white rounded-2xl py-4 pl-14 pr-6 placeholder:text-slate-500 focus:outline-none focus:border-blue-500/50 backdrop-blur-md"
            />
            <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-slate-500" size={20} />
          </div>
        </div>
      </section>

      <section className="py-16 px-6 md:px-16">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-lg font-[1000] text-slate-900 uppercase tracking-tighter">
              Showing {filteredColleges.length} Colleges
            </h2>
          </div>

          {filteredColleges.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredColleges.map(([slug, college]) => (
                <Link to={`/college/${slug}`} key={slug} className="group bg-white rounded-[2rem] border border-slate-200 hover:border-blue-500/50 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={college.gallery?.[0] || 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'} 
                      alt={college.shortName} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                       <span className="px-2.5 py-1 bg-white/20 backdrop-blur-md text-white border border-white/20 rounded-lg text-[9px] font-black uppercase tracking-widest flex items-center gap-1">
                         <Target size={10} /> {college.type}
                       </span>
                    </div>
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex-shrink-0 p-1">
                        <img 
                          src={college.logo} 
                          alt="Logo" 
                          className="w-full h-full rounded-lg object-contain" 
                          onError={(e) => { e.target.onerror = null; e.target.src = college.fallbackLogo; }}
                        />
                      </div>
                      <div>
                        <h3 className="font-[900] text-slate-900 uppercase tracking-tight text-[15px] leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">
                          {college.name}
                        </h3>
                      </div>
                    </div>

                    <div className="space-y-2 mb-6">
                       <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
                         <MapPin size={14} className="text-rose-500"/> {college.location}
                       </div>
                       <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
                         <Layers size={14} className="text-blue-500"/> {college.branches?.length || 4} B.Tech Branches
                       </div>
                       <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
                         <CheckCircle size={14} className="text-emerald-500"/> {college.approval}
                       </div>
                    </div>

                    <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between text-blue-600">
                      <span className="text-[10px] font-black uppercase tracking-widest">View Profile</span>
                      <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <ChevronRight size={16} />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl border border-slate-200">
              <Building2 size={48} className="text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-[1000] text-slate-900 uppercase tracking-tight">No Colleges Found</h3>
              <p className="text-slate-500 text-sm font-medium mt-2">Try adjusting your search keywords.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
