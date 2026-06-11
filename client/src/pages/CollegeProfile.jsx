import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Building2, MapPin, Calendar, CheckCircle, ExternalLink, Download, 
  ChevronRight, Users, BookOpen, Monitor, Home, Activity, Heart, Wifi,
  Target, TrendingUp, Award, Clock, FileText, ArrowRight, Shield, Globe, Layers
} from 'lucide-react';
import { collegeData } from '../data/collegeData';
import SEO from '../components/SEO';
import Footer from '../components/Footer';

export default function CollegeProfile() {
  const { collegeSlug } = useParams();
  const [college, setCollege] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    window.scrollTo(0, 0);
    if (collegeData[collegeSlug]) {
      setCollege(collegeData[collegeSlug]);
    }
  }, [collegeSlug]);

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
        url={`https://www.apnacollegebihar.online/college/${collegeSlug}`}
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
              <button className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 rounded-xl text-xs font-black uppercase tracking-widest transition-all">
                <Download size={16} /> Brochure
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* PAGE CONTENT CONTAINER */}
      {/* ═══════════════════════════════════════════ */}
      <div className="container mx-auto max-w-6xl px-6 md:px-16 py-8">
        
        {/* Navigation Tabs */}
        <div className="flex overflow-x-auto hide-scrollbar gap-2 mb-8 bg-white p-2 rounded-2xl border border-slate-200 shadow-sm sticky top-20 z-40">
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
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-8">
                <section>
                  <h2 className="text-2xl font-[1000] text-slate-900 uppercase tracking-tighter mb-4">Branch-wise Cutoff (JEE Main Percentile)</h2>
                  <p className="text-slate-500 text-sm font-medium mb-6">Approximate closing cutoff in JEE Main Percentile format based on previous UGEAC counselling rounds. Source: GuidEnova / BCECEB.</p>
                  
                  <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-sm whitespace-nowrap">
                        <thead className="bg-slate-50 border-b border-slate-200 text-[10px] font-black uppercase tracking-widest text-slate-500">
                          <tr>
                            <th className="p-4">Branch</th>
                            <th className="p-4">General</th>
                            <th className="p-4">OBC</th>
                            <th className="p-4">SC</th>
                            <th className="p-4">ST</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 font-medium">
                          {college.cutoffs.map((row, i) => (
                            <tr key={i} className="hover:bg-slate-50">
                              <td className="p-4 text-slate-900 font-bold">{row.branch}</td>
                              <td className="p-4 text-slate-600">{row.general}</td>
                              <td className="p-4 text-slate-600">{row.obc}</td>
                              <td className="p-4 text-slate-600">{row.sc}</td>
                              <td className="p-4 text-slate-600">{row.st}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
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
                {college.mapEmbedUrl ? (
                  <iframe 
                    src={college.mapEmbedUrl} 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="College Map"
                  ></iframe>
                ) : (
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest flex items-center gap-2"><MapPin size={14}/> Map Not Available</p>
                )}
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
      </div>

      <Footer />
    </div>
  );
}
