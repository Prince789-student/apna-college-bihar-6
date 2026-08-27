import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Building2, MapPin, Calendar, CheckCircle, ExternalLink, Download, 
  ChevronRight, Users, BookOpen, Monitor, Home, Activity, Heart, Wifi,
  Target, TrendingUp, Award, Clock, FileText, ArrowRight, Shield, Globe, Layers
} from 'lucide-react';
import { collegeData } from '../data/collegeData';
import { colleges } from '../UgeacData';
import SEO from '../components/SEO';
import useScrollToTop from '../hooks/useScrollToTop';
import Footer from '../components/Footer';
import { Capacitor } from '@capacitor/core';

// Normalized map from UgeacPredictor to translate raw cutoff names
const normalizedMap = {
  "B.C.E. BHAGALPUR": "BCE Bhagalpur",
  "M.I.T. MUZAFFARPUR": "MIT Muzaffarpur",
  "B.C.E. BAKHTIYARPUR": "BCE Bakhtiyarpur",
  "G.C.E. GAYA": "GCE Gaya",
  "D.C.E. DARBHANGA": "DCE Darbhanga",
  "NALANDA COLLEGE. OF ENGG,CHANDI": "NCE Chandi",
  "NCE CHANDI": "NCE Chandi",
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

export default function CollegeProfile() {
  const { collegeSlug } = useParams();
  const [college, setCollege] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  useScrollToTop([activeTab]);

  const [cutoffData, setCutoffData] = useState([]);
  const [loadingCutoffs, setLoadingCutoffs] = useState(false);
  const [selectedYear, setSelectedYear] = useState('2025');
  const [selectedCategory, setSelectedCategory] = useState('UR');
  const [selectedSeatType, setSelectedSeatType] = useState('General');

  useEffect(() => {
    window.scrollTo(0, 0);
    if (collegeData[collegeSlug]) {
      setCollege(collegeData[collegeSlug]);
    }
  }, [collegeSlug]);

  useEffect(() => {
    if (!college) return;
    setLoadingCutoffs(true);

    // Find the formal college entry in the UgeacData list
    const matchedCol = colleges.find(co => 
      co.short.toLowerCase() === college.shortName.toLowerCase() ||
      co.name.toLowerCase() === college.name.toLowerCase()
    );

    const baseUrl = Capacitor.isNativePlatform() ? 'https://apnacollegebihar.online' : '';
    fetch(`${baseUrl}/data/cutoffs.json?v=${Date.now()}`)
      .then(res => res.json())
      .then(json => {
        const processCutoffs = (raw, yr) => {
          return raw.map(c => {
            const key = c.collegeShort?.toUpperCase().trim();
            const formalName = normalizedMap[key] || c.collegeShort;
            const col = colleges.find(co => co.name === formalName || co.short === c.collegeShort);
            return { ...c, collegeId: col ? col.id : null, collegeName: col ? col.name : formalName, year: yr };
          }).filter(c => matchedCol && c.collegeId === matchedCol.id);
        };

        const raw2024 = json.cutoffs2024 || [];
        const raw2025 = json.cutoffs2025 || [];

        setCutoffData([
          ...processCutoffs(raw2024, '2024'),
          ...processCutoffs(raw2025, '2025')
        ]);
        setLoadingCutoffs(false);
      })
      .catch(err => {
        console.error("Error fetching cutoffs:", err);
        setLoadingCutoffs(false);
      });
  }, [college]);

  const filteredCutoffs = useMemo(() => {
    return cutoffData.filter(c => {
      const matchYear = c.year === selectedYear;
      const matchCategory = c.category === selectedCategory;
      const currentSeatType = c.seatType || c.seat_type || 'General';
      const matchSeatType = currentSeatType.toLowerCase() === selectedSeatType.toLowerCase();
      return matchYear && matchCategory && matchSeatType;
    }).sort((a, b) => a.closing - b.closing);
  }, [cutoffData, selectedYear, selectedCategory, selectedSeatType]);

  if (!college) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8fafc]">
        <div className="text-center">
          <Building2 size={48} className="text-slate-300 mx-auto mb-4" />
          <h2 className="text-2xl font-[1000] text-slate-900 uppercase tracking-tighter">College Not Found</h2>
          <p className="text-slate-500 font-medium mt-2">The requested college profile does not exist.</p>
          <Link to="/" className="mt-6 inline-flex items-center gap-2 text-blue-600 font-bold uppercase tracking-widest text-[10px] hover:text-blue-700">
            Return Home <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    );
  }

  const seoSchema = {
    "@context": "https://schema.org",
    "@type": "CollegeOrUniversity",
    "name": college.name,
    "url": `https://www.apnacollegebihar.online/college/${collegeSlug}`,
    "logo": college.logo,
    "description": college.description,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": college.location.split(',')[0],
      "addressRegion": "Bihar",
      "addressCountry": "IN"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.apnacollegebihar.online/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Colleges",
        "item": "https://www.apnacollegebihar.online/ugeac-predictor"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": college.name,
        "item": `https://www.apnacollegebihar.online/college/${collegeSlug}`
      }
    ]
  };

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'admission', label: 'Admission' },
    { id: 'cutoffs', label: 'Cutoffs' },
    { id: 'placement', label: 'Placement' },
    { id: 'facilities', label: 'Facilities' },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] font-['Inter']">
      <SEO 
        title={`${college.name} - Admission, Cutoff, Fees & Placement | Apna College Bihar`}
        description={college.description}
        keywords={`${college.shortName}, ${college.name}, Bihar engineering college, BEU, UGEAC cutoff, B.Tech admission Bihar`}
        schema={[seoSchema, breadcrumbSchema]}
      />

      {/* ═══════════════════════════════════════════ */}
      {/* 1. HERO SECTION */}
      {/* ═══════════════════════════════════════════ */}
      <section className="bg-slate-900 pt-24 pb-20 px-6 md:px-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 mb-8">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-blue-400">Colleges</span>
            <ChevronRight size={12} />
            <span className="text-white">{college.shortName}</span>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-3xl p-2 shadow-2xl flex-shrink-0">
              <img 
                src={college.logo} 
                alt={`${college.shortName} Logo`} 
                className="w-full h-full object-cover rounded-2xl" 
                onError={(e) => { e.target.onerror = null; e.target.src = college.fallbackLogo; }}
              />
            </div>
            
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-1">
                  <CheckCircle size={12} /> {college.approval}
                </span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-1">
                  <Shield size={12} /> {college.type}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-[1000] text-white uppercase tracking-tighter mb-4 leading-tight">
                {college.name}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-300">
                <div className="flex items-center gap-1"><MapPin size={16} className="text-blue-400"/> {college.location}</div>
                <div className="flex items-center gap-1"><Calendar size={16} className="text-blue-400"/> Estd. {college.established}</div>
                <div className="flex items-center gap-1"><Building2 size={16} className="text-blue-400"/> {college.affiliation}</div>
              </div>
            </div>

            <div className="flex flex-col w-full md:w-auto gap-3 shrink-0">
              <a href={college.website} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-black uppercase tracking-widest transition-all shadow-xl shadow-blue-600/20">
                <Globe size={16} /> Official Website
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* PAGE CONTENT CONTAINER */}
      {/* ═══════════════════════════════════════════ */}
      <div className="container mx-auto max-w-6xl px-6 md:px-16 py-8">
        
        {/* Navigation Tabs */}
        <div className="flex overflow-x-auto hide-scrollbar gap-2 mb-8 bg-white p-2 rounded-2xl border border-slate-200 shadow-sm sticky top-0 z-40">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-3 rounded-xl text-xs font-black uppercase tracking-widest whitespace-nowrap transition-all ${
                activeTab === tab.id 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* MAIN CONTENT COLUMN */}
          <div className="lg:col-span-2 space-y-12">

            {/* 2. OVERVIEW & 3. QUICK FACTS */}
            {activeTab === 'overview' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-10">
                <section>
                  <h2 className="text-2xl font-[1000] text-slate-900 uppercase tracking-tighter mb-4">College Overview</h2>
                  <p className="text-slate-600 leading-relaxed font-medium text-sm md:text-base">
                    {college.description}
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-[1000] text-slate-900 uppercase tracking-tighter mb-6">Quick Facts</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      { label: 'Total Fees', val: college.quickFacts.fees, icon: <BookOpen /> },
                      { label: 'Hostel', val: college.quickFacts.hostelAvailable, icon: <Home /> },
                      { label: 'Courses', val: college.quickFacts.courses, icon: <Layers /> },
                      { label: 'Intake', val: college.quickFacts.seats, icon: <Users /> },
                      { label: 'Campus Area', val: college.quickFacts.campusSize, icon: <MapPin /> },
                      { label: 'Ownership', val: college.type, icon: <Shield /> },
                    ].map((f, i) => (
                      <div key={i} className="bg-white border border-slate-200 p-4 rounded-2xl flex flex-col gap-3">
                        <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                          {React.cloneElement(f.icon, { size: 16 })}
                        </div>
                        <div>
                          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">{f.label}</p>
                          <p className="text-sm font-bold text-slate-900 mt-1">{f.val}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* 10. COLLEGE GALLERY (Preview) */}
                {college.gallery && college.gallery.length > 0 && (
                  <section>
                    <h2 className="text-xl font-[1000] text-slate-900 uppercase tracking-tighter mb-6">Campus Gallery</h2>
                    <div className="grid grid-cols-2 gap-4">
                      {college.gallery.map((img, idx) => (
                        <div key={idx} className={`rounded-2xl overflow-hidden h-48 ${idx === 0 ? 'col-span-2' : ''}`}>
                          <img src={img} alt="Campus" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                        </div>
                      ))}
                    </div>
                  </section>
                )}
              </div>
            )}

            {/* 4. ADMISSION DETAILS */}
            {activeTab === 'admission' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-8">
                <section className="bg-white border border-slate-200 p-6 md:p-8 rounded-3xl">
                  <h2 className="text-2xl font-[1000] text-slate-900 uppercase tracking-tighter mb-6 flex items-center gap-3">
                    <Target className="text-blue-600"/> Admission Process
                  </h2>
                  <p className="text-slate-600 leading-relaxed font-medium text-sm mb-6 pb-6 border-b border-slate-100">
                    {college.admission.process}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-[11px] font-black uppercase tracking-widest text-slate-900 mb-4">Eligibility Criteria</h3>
                      <p className="text-slate-600 text-sm font-medium">{college.admission.eligibility}</p>
                    </div>
                    <div>
                      <h3 className="text-[11px] font-black uppercase tracking-widest text-slate-900 mb-4">Required Documents</h3>
                      <ul className="space-y-2">
                        {(college.admission?.documents || ["JEE Main Rank Card", "10th & 12th Marksheets", "Domicile Certificate (Bihar)", "Caste Certificate (if applicable)", "Aadhar Card", "Passport Size Photos", "Migration Certificate"]).map((doc, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                            <CheckCircle size={14} className="text-emerald-500" /> {doc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>
              </div>
            )}

            {/* 5. CUTOFFS */}
            {activeTab === 'cutoffs' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6">
                <section className="bg-white border border-slate-200 p-6 md:p-8 rounded-3xl">
                  <h2 className="text-2xl font-[1000] text-slate-900 uppercase tracking-tighter mb-2">Branch-Wise Cutoff (UGEAC Closing Rank)</h2>
                  <p className="text-slate-500 text-sm font-medium mb-6">
                    Official UGEAC opening & closing merit ranks based on previous years' BCECEB counselling.
                  </p>

                  {/* Filters Container */}
                  <div className="space-y-4 mb-6 pb-6 border-b border-slate-100">
                    {/* Year Selector */}
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2">Select Year</span>
                      <div className="flex gap-2">
                        {['2025', '2024'].map(yr => (
                          <button
                            key={yr}
                            onClick={() => setSelectedYear(yr)}
                            className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${
                              selectedYear === yr 
                                ? 'bg-blue-600 text-white shadow-md' 
                                : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
                            }`}
                          >
                            {yr}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Category Selector */}
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2">Select Category</span>
                      <div className="flex flex-wrap gap-2">
                        {['UR', 'BC', 'EBC', 'SC', 'ST', 'EWS', 'RCG'].map(cat => (
                          <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-3 py-1.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${
                              selectedCategory === cat 
                                ? 'bg-indigo-600 text-white shadow-md' 
                                : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
                            }`}
                          >
                            {cat}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Seat Type / Gender Selector */}
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2">Select Quota Type</span>
                      <div className="flex gap-2">
                        {['General', 'Female'].map(st => (
                          <button
                            key={st}
                            onClick={() => setSelectedSeatType(st)}
                            className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${
                              selectedSeatType === st 
                                ? 'bg-pink-600 text-white shadow-md' 
                                : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
                            }`}
                          >
                            {st}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {loadingCutoffs ? (
                    <div className="flex flex-col items-center justify-center py-16">
                      <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest animate-pulse">Fetching Real Cutoffs...</p>
                    </div>
                  ) : filteredCutoffs.length === 0 ? (
                    <div className="text-center py-12 bg-slate-50 rounded-2xl border border-slate-200">
                      <p className="text-sm font-semibold text-slate-500">No cutoff records found for {selectedCategory} ({selectedSeatType}) in UGEAC {selectedYear}.</p>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1">Try switching the year or category filters.</p>
                    </div>
                  ) : (
                    <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm whitespace-nowrap">
                          <thead className="bg-slate-50 border-b border-slate-200 text-[10px] font-black uppercase tracking-widest text-slate-500">
                            <tr>
                              <th className="p-4">Branch</th>
                              <th className="p-4">Counseling Round</th>
                              <th className="p-4">Closing Merit Rank</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100 font-semibold text-slate-700">
                            {filteredCutoffs.map((row, i) => (
                              <tr key={i} className="hover:bg-slate-50/80 transition-colors">
                                <td className="p-4 text-slate-900 font-extrabold uppercase tracking-tight">{row.branch}</td>
                                <td className="p-4 text-slate-500">Round {row.round}</td>
                                <td className="p-4">
                                  <span className="px-3 py-1 bg-indigo-50 text-indigo-700 font-mono font-black rounded-lg text-sm">
                                    {row.closing}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </section>
              </div>
            )}


            {/* 6. PLACEMENT */}
            {activeTab === 'placement' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-8">
                <section>
                  <h2 className="text-2xl font-[1000] text-slate-900 uppercase tracking-tighter mb-6">Placement Statistics</h2>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                    <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-3xl text-center">
                      <p className="text-[10px] font-black uppercase tracking-widest text-emerald-600 mb-2">Highest Package</p>
                      <p className="text-3xl font-[1000] text-slate-900">{college.placement.highestPackage}</p>
                    </div>
                    <div className="bg-blue-50 border border-blue-100 p-6 rounded-3xl text-center">
                      <p className="text-[10px] font-black uppercase tracking-widest text-blue-600 mb-2">Average Package</p>
                      <p className="text-3xl font-[1000] text-slate-900">{college.placement.averagePackage}</p>
                    </div>
                    <div className="bg-purple-50 border border-purple-100 p-6 rounded-3xl text-center">
                      <p className="text-[10px] font-black uppercase tracking-widest text-purple-600 mb-2">Placement Rate</p>
                      <p className="text-3xl font-[1000] text-slate-900">{college.placement.percentage}</p>
                    </div>
                  </div>

                  <h3 className="text-[11px] font-black uppercase tracking-widest text-slate-900 mb-4">Top Recruiters</h3>
                  <div className="flex flex-wrap gap-3">
                    {college.placement.recruiters.map((recruiter, i) => (
                      <div key={i} className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-600 shadow-sm">
                        {recruiter}
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            )}

            {/* 8. HOSTEL & 9. FACILITIES */}
            {activeTab === 'facilities' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-10">
                <section>
                  <h2 className="text-2xl font-[1000] text-slate-900 uppercase tracking-tighter mb-6">Hostel Details</h2>
                  <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8">
                    <ul className="space-y-4">
                      <li className="flex items-start gap-4">
                        <Home className="text-blue-500 shrink-0 mt-0.5" size={20} />
                        <div>
                          <p className="text-xs font-black uppercase tracking-widest text-slate-900">Availability</p>
                          <p className="text-sm text-slate-600 font-medium mt-1">{college.hostelDetails?.availability || "Available based on distance/merit"}</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <CheckCircle className="text-emerald-500 shrink-0 mt-0.5" size={20} />
                        <div>
                          <p className="text-xs font-black uppercase tracking-widest text-slate-900">Annual Fees</p>
                          <p className="text-sm text-slate-600 font-medium mt-1">{college.hostelDetails?.fees || "₹10,000 - ₹15,000 / Year (Approx)"}</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <BookOpen className="text-purple-500 shrink-0 mt-0.5" size={20} />
                        <div>
                          <p className="text-xs font-black uppercase tracking-widest text-slate-900">Mess Facility</p>
                          <p className="text-sm text-slate-600 font-medium mt-1">{college.hostelDetails?.mess || "Available (Veg & Non-Veg)"}</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <Wifi className="text-amber-500 shrink-0 mt-0.5" size={20} />
                        <div>
                          <p className="text-xs font-black uppercase tracking-widest text-slate-900">Internet</p>
                          <p className="text-sm text-slate-600 font-medium mt-1">{college.hostelDetails?.internet || "Available in campus"}</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-[1000] text-slate-900 uppercase tracking-tighter mb-6">Campus Facilities</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {college.facilities.map((fac, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                        <CheckCircle size={16} className="text-emerald-500" />
                        <span className="text-sm font-bold text-slate-700">{fac.name}</span>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            )}
          </div>

          {/* RIGHT SIDEBAR COLUMN */}
          <div className="space-y-6">
            
            {/* 11. NOTES & PYQ LINKS */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-6 shadow-xl text-white">
              <h3 className="text-lg font-[900] uppercase tracking-tighter mb-2">Study Materials</h3>
              <p className="text-blue-100 text-xs font-medium mb-6">Get specific notes and previous year questions for BEU curriculum.</p>
              
              <div className="space-y-3">
                <Link to="/notes" className="flex items-center justify-between p-4 bg-white/10 hover:bg-white/20 rounded-2xl transition-colors backdrop-blur-sm border border-white/10">
                  <div className="flex items-center gap-3">
                    <BookOpen size={18} /> <span className="text-sm font-bold">B.Tech Notes</span>
                  </div>
                  <ChevronRight size={16} />
                </Link>
                <Link to="/pyq" className="flex items-center justify-between p-4 bg-white/10 hover:bg-white/20 rounded-2xl transition-colors backdrop-blur-sm border border-white/10">
                  <div className="flex items-center gap-3">
                    <FileText size={18} /> <span className="text-sm font-bold">PYQ Papers</span>
                  </div>
                  <ChevronRight size={16} />
                </Link>
              </div>
            </div>

            {/* 7. BRANCHES */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6">
              <h3 className="text-[11px] font-black uppercase tracking-widest text-slate-900 mb-4">Departments</h3>
              <div className="flex flex-wrap gap-2">
                {college.branches.map((branch, i) => (
                  <span key={i} className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-bold text-slate-600">
                    {branch}
                  </span>
                ))}
              </div>
            </div>

            {/* 12. LOCATION */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 overflow-hidden">
              <h3 className="text-[11px] font-black uppercase tracking-widest text-slate-900 mb-4 flex items-center gap-2">
                <MapPin size={14} className="text-rose-500"/> Location Map
              </h3>
              <div className="rounded-2xl overflow-hidden bg-slate-100 aspect-video mb-3 flex items-center justify-center">
                {(() => {
                  const mapUrl = college.mapEmbedUrl || `https://maps.google.com/maps?q=${encodeURIComponent(college.name + ", " + college.location)}&t=&z=14&ie=UTF8&iwloc=&output=embed`;
                  return (
                    <iframe 
                      src={mapUrl} 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen="" 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="College Map"
                    ></iframe>
                  );
                })()}
              </div>
              <p className="text-xs text-slate-500 font-medium">{college.location}</p>
            </div>

            {/* 15. LAST UPDATED */}
            <div className="text-center">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center justify-center gap-1">
                <Clock size={12} /> Last Updated: October 2025
              </p>
            </div>

          </div>
        </div>

        {/* 14. COLLEGE SPECIFIC FAQ */}
        <section className="mt-20 pt-16 border-t border-slate-200">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-[1000] text-slate-900 uppercase tracking-tighter">
                {college.shortName} FAQs
              </h2>
            </div>
            <div className="space-y-4">
              {[
                { q: `Is ${college.shortName} approved by AICTE?`, a: `Yes, ${college.name} is fully approved by AICTE and affiliated with Bihar Engineering University (BEU).` },
                { q: `What is the admission process for ${college.shortName}?`, a: `Admission is strictly based on JEE Main scores through the UGEAC counselling process conducted by BCECEB.` },
                { q: `Does ${college.shortName} provide hostel facilities?`, a: `Yes, hostel facilities are available. Please check the Facilities section for detailed fee structures and availability.` }
              ].map((faq, i) => (
                <div key={i} className="bg-white border border-slate-200 p-5 rounded-2xl">
                  <h4 className="text-sm font-[900] text-slate-900 mb-2">{faq.q}</h4>
                  <p className="text-sm text-slate-600 font-medium">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Educational SEO Content ── */}
        <section className="mt-16 pt-16 border-t border-slate-200">
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-200/50 prose prose-slate max-w-none text-left shadow-sm">
            <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter mb-4">Complete Guide to {college.name} Admission & Placements</h2>
            <p>
              Are you planning to take admission in <strong>{college.name} ({college.shortName})</strong>? As one of the prominent institutions under Bihar Engineering University (BEU), {college.shortName} offers a robust academic environment for B.Tech students. Whether you are aiming for Computer Science, Civil Engineering, or Mechanical, it is crucial to understand the college's UGEAC cutoff trends, fee structure, and placement records before finalizing your choice-filling list.
            </p>

            <h3 className="text-xl font-bold mt-8 mb-4">UGEAC Cutoffs and JEE Main Requirements</h3>
            <p>
              Admission to {college.name} is strictly based on the merit list prepared by the Bihar Combined Entrance Competitive Examination Board (BCECEB). Students must have a valid JEE Main score to participate in the Under Graduate Engineering Admission Counselling (UGEAC). The cutoffs vary significantly based on category (UR, EWS, BC, EBC, SC, ST, RC) and seat type (General vs Female quota). Use our detailed cutoff tables above to predict your chances of securing a seat in your preferred branch at {college.shortName}.
            </p>

            <h3 className="text-xl font-bold mt-8 mb-4">Campus Facilities and Hostel Life</h3>
            <p>
              A good engineering college is defined not just by academics, but also by its infrastructure. {college.shortName} provides essential campus facilities including modern computer labs, central libraries, and high-speed Wi-Fi. For outstation students, {college.hostelDetails?.availability ? "the campus offers dedicated boys and girls hostels" : "accommodation is available nearby"}. The hostel environment fosters a strong coding culture, peer-to-peer learning, and active participation in technical clubs and hackathons.
            </p>

            <h3 className="text-xl font-bold mt-8 mb-4">Placement Statistics and Career Opportunities</h3>
            <p>
              Placement is the ultimate goal for most engineering students. {college.name} has a dedicated Training and Placement (T&P) cell that actively coordinates with top IT companies and core engineering firms. While the highest packages often go to Computer Science (CSE) students, core branches like Civil and Electrical also see consistent recruitment from state departments and public sector undertakings (PSUs). To secure the best packages at {college.shortName}, we highly recommend students to utilize our BEU Study Materials, maintain a high CGPA, and focus on off-campus opportunities simultaneously.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
