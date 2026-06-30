import React, { useState, useEffect, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { db, auth } from '../firebase';
import { 
  collection, getDocs, addDoc, serverTimestamp, query, orderBy 
} from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';
import { 
  Cpu, Users, Calendar, Award, BookOpen, Search, Plus, 
  HelpCircle, ChevronRight, CheckCircle2, AlertTriangle, 
  ExternalLink, Code, Layers, FileSpreadsheet, Loader2, Building2
} from 'lucide-react';
import SEO from '../components/SEO';
import toast from 'react-hot-toast';

export default function HackathonHub() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('list'); // list, team, sih, resources
  const [hackathons, setHackathons] = useState([]);
  const [teams, setTeams] = useState([]);
  const [loadingHackathons, setLoadingHackathons] = useState(true);
  const [loadingTeams, setLoadingTeams] = useState(true);

  // Filter states
  const [hkSearch, setHkSearch] = useState('');
  const [hkTypeFilter, setHkTypeFilter] = useState('All');
  
  const [teamSearch, setTeamSearch] = useState('');
  const [teamCollegeFilter, setTeamCollegeFilter] = useState('All');

  // Form states for Team Finder
  const [showForm, setShowForm] = useState(false);
  const [submittingForm, setSubmittingForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    college: '',
    branch: '',
    skills: '',
    roleNeeded: '',
    contact: '',
    desc: ''
  });

  const biharTechfests = [
    {
      title: "MIT TechFest 2026",
      college: "Muzaffarpur Institute of Technology",
      date: "October 12-14, 2026",
      events: "Robo-war, Speed Coding, IoT Prototype Showcase",
      status: "Upcoming",
      url: "https://unstop.com/college-fests?search=Muzaffarpur"
    },
    {
      title: "BCE Technokriti 2026",
      college: "BCE Bhagalpur",
      date: "November 05-08, 2026",
      events: "National Coding Challenge, Hack-a-Thon, Web Design",
      status: "Upcoming",
      url: "https://unstop.com/college-fests?search=Bhagalpur"
    },
    {
      title: "GCE Gaya Tech-Sangram 2026",
      college: "Government College of Engineering, Gaya",
      date: "September 24-26, 2026",
      events: "Full-Stack hackathon, Line Follower Robot, PPT Presentation",
      status: "Upcoming",
      url: "https://unstop.com/college-fests?search=Gaya"
    },
    {
      title: "BCE Bakhtiyarpur Codestar 2026",
      college: "BCE Bakhtiyarpur",
      date: "December 01-03, 2026",
      events: "24-Hour Coding Marathon, App Development",
      status: "Upcoming",
      url: "https://unstop.com/college-fests?search=Bakhtiyarpur"
    }
  ];

  // Fetch hackathons from Firestore
  useEffect(() => {
    const fetchHk = async () => {
      setLoadingHackathons(true);
      try {
        const snap = await getDocs(collection(db, 'hackathons'));
        const list = snap.docs.map(d => ({ id: d.id, ...d.data() }));
        setHackathons(list);
      } catch (err) {
        console.error("Error fetching hackathons:", err);
      } finally {
        setLoadingHackathons(false);
      }
    };
    fetchHk();
  }, []);

  // Fetch teammate requests from Firestore
  const fetchTeams = async () => {
    setLoadingTeams(true);
    try {
      const snap = await getDocs(query(collection(db, 'hackathon_teams'), orderBy('createdAt', 'desc')));
      const list = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      setTeams(list);
    } catch (err) {
      console.error("Error fetching teams:", err);
    } finally {
      setLoadingTeams(false);
    }
  };

  useEffect(() => {
    if (activeTab === 'team') {
      fetchTeams();
    }
  }, [activeTab]);

  // Filters logic
  const filteredHackathons = useMemo(() => {
    return hackathons.filter(h => {
      const matchSearch = h.title?.toLowerCase().includes(hkSearch.toLowerCase()) || h.host?.toLowerCase().includes(hkSearch.toLowerCase());
      const matchType = hkTypeFilter === 'All' || h.type === hkTypeFilter;
      return matchSearch && matchType;
    });
  }, [hackathons, hkSearch, hkTypeFilter]);

  const filteredTeams = useMemo(() => {
    return teams.filter(t => {
      const matchSearch = t.name?.toLowerCase().includes(teamSearch.toLowerCase()) || t.skills?.toLowerCase().includes(teamSearch.toLowerCase()) || t.roleNeeded?.toLowerCase().includes(teamSearch.toLowerCase());
      const matchCollege = teamCollegeFilter === 'All' || t.college?.toLowerCase().includes(teamCollegeFilter.toLowerCase());
      return matchSearch && matchCollege;
    });
  }, [teams, teamSearch, teamCollegeFilter]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      toast.error("Please login to post a teammate request.");
      navigate('/login');
      return;
    }

    if (!formData.name || !formData.college || !formData.skills || !formData.roleNeeded || !formData.contact) {
      toast.error("Please fill all mandatory fields!");
      return;
    }

    setSubmittingForm(true);
    try {
      await addDoc(collection(db, 'hackathon_teams'), {
        name: formData.name,
        college: formData.college,
        branch: formData.branch,
        skills: formData.skills,
        roleNeeded: formData.roleNeeded,
        contact: formData.contact,
        desc: formData.desc,
        userId: user.uid,
        userEmail: user.email,
        createdAt: serverTimestamp()
      });

      toast.success("Teammate Request posted successfully!");
      setShowForm(false);
      // Reset form
      setFormData({
        name: '',
        college: '',
        branch: '',
        skills: '',
        roleNeeded: '',
        contact: '',
        desc: ''
      });
      fetchTeams();
    } catch (err) {
      console.error("Error creating team request:", err);
      toast.error("Failed to post request. Try again.");
    } finally {
      setSubmittingForm(false);
    }
  };

  const tabs = [
    { id: 'list', name: 'Hackathons & Fests', icon: <Calendar size={14} /> },
    { id: 'team', name: 'Teammate Finder', icon: <Users size={14} /> },
    { id: 'sih', name: 'SIH Prep Corner', icon: <Award size={14} /> },
    { id: 'resources', name: 'Resources & Cheat Sheet', icon: <Code size={14} /> }
  ];

  const tabTitles = {
    list: 'Hackathons & Fests',
    team: 'Teammate Finder',
    sih: 'SIH Prep Corner',
    resources: 'Resources & Cheat Sheet'
  };
  const activeTabTitle = tabTitles[activeTab] || 'Hackathons & Fests';

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-['Inter'] relative overflow-hidden">
      <SEO 
        title={`${activeTabTitle} | Apna College Bihar`}
        description="Discover active online hackathons and GEC techfests in Bihar. Find coding teammates across colleges, get SIH preparation templates, and access prototyping resources."
        keywords="Bihar engineering hackathon, Smart India Hackathon GEC, GEC techfest, coding teammates Bihar, BEU hackathon, Apna College Bihar hackathon"
        url="https://www.apnacollegebihar.online/hackathons"
      />
      
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-indigo-600/10 via-transparent to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 py-8 relative z-10">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 mb-6">
          <Link to="/hub" className="hover:text-blue-500 transition-colors">Home</Link>
          <ChevronRight size={10} />
          <span className="text-slate-700">Hackathon Portal</span>
        </div>

        {/* Hero Header */}
        <div className="bg-white backdrop-blur-md border border-slate-200 p-6 md:p-8 rounded-[2rem] shadow-2xl mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="px-2.5 py-1 bg-indigo-500/15 border border-indigo-500/20 text-indigo-400 rounded-lg text-[9px] font-black uppercase tracking-widest block w-fit mb-3">Innovation Hub</span>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tighter text-slate-900 uppercase leading-none mb-3">Bihar Engineering Hackathon Hub</h1>
            <p className="text-xs text-slate-500 font-semibold max-w-xl">Find teammates across Bihar GECs, register for coding fests, and master Smart India Hackathon (SIH) screening rounds.</p>
          </div>
          {activeTab === 'team' && (
            <button 
              onClick={() => {
                if(!user) {
                  toast.error("Please login to post teammate requests.");
                  navigate('/login');
                } else {
                  setShowForm(true);
                }
              }} 
              className="flex items-center gap-2 px-5 py-3.5 bg-blue-600 hover:bg-blue-500 text-slate-900 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all shadow-lg shadow-blue-500/20"
            >
              <Plus size={14} /> Post Teammate Request
            </button>
          )}
        </div>

        {/* Tab Navigation */}
        <div className="flex overflow-x-auto pb-1 mb-8 gap-2 border-b border-slate-200 scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-4 text-xs font-black uppercase tracking-widest rounded-t-xl transition-all whitespace-nowrap border-b-2 ${
                activeTab === tab.id 
                  ? 'bg-indigo-600/10 text-indigo-500 border-indigo-600' 
                  : 'text-slate-500 border-transparent hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {tab.icon} {tab.name}
            </button>
          ))}
        </div>

        {/* Tab Contents */}
        <div className="space-y-8">
          
          {/* TAB 1: Hackathons & Fests list */}
          {activeTab === 'list' && (
            <div className="space-y-8 animate-in fade-in duration-300">
              
              {/* Filter controls */}
              <div className="bg-white border border-slate-200 p-4 rounded-2xl flex flex-col md:flex-row gap-4 items-center justify-between shadow-md">
                <div className="relative w-full md:max-w-md">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
                  <input 
                    type="text" 
                    placeholder="Search hackathons, hosts..." 
                    className="w-full bg-slate-100 border border-slate-200 rounded-xl p-3.5 pl-12 text-xs text-slate-800 outline-none focus:border-indigo-500 transition-all"
                    value={hkSearch}
                    onChange={e => setHkSearch(e.target.value)}
                  />
                </div>
                <div className="flex items-center gap-3 w-full md:w-auto">
                  <label className="text-[9px] font-black text-slate-500 uppercase tracking-widest whitespace-nowrap">Mode</label>
                  <select 
                    value={hkTypeFilter} 
                    onChange={e => setHkTypeFilter(e.target.value)}
                    className="w-full md:w-44 bg-slate-100 border border-slate-200 rounded-xl p-3.5 text-xs text-slate-900 uppercase font-black tracking-widest outline-none"
                  >
                    <option value="All">All Modes</option>
                    <option value="Online">Online</option>
                    <option value="Offline">Offline</option>
                    <option value="Hybrid">Hybrid</option>
                  </select>
                </div>
              </div>

              {/* Active Hackathons Grid */}
              <div>
                <h2 className="text-lg font-black text-slate-900 uppercase tracking-wider mb-6 flex items-center gap-2">
                  <Calendar className="text-indigo-500" size={20} /> Active Online & National Hackathons
                </h2>
                
                {loadingHackathons ? (
                  <div className="p-20 text-center bg-slate-100 border border-slate-200 rounded-[2rem] flex flex-col items-center justify-center">
                    <Loader2 size={32} className="text-indigo-500 animate-spin mb-4" />
                    <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Fetching live Hackathons...</p>
                  </div>
                ) : filteredHackathons.length === 0 ? (
                  <div className="p-16 text-center bg-slate-100 border border-slate-200 rounded-[2rem] text-slate-500 text-xs font-bold uppercase tracking-wider">
                    No active hackathons found matching filters.
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredHackathons.map(hk => (
                      <div key={hk.id} className="bg-white border border-slate-200 p-6 rounded-3xl flex flex-col justify-between hover:border-indigo-500/20 transition-all group shadow-lg">
                        <div>
                          <div className="flex justify-between items-start gap-2 mb-4">
                            <span className="px-2 py-0.5 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded text-[8px] font-black uppercase tracking-wider">{hk.type}</span>
                            <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest">{hk.source || 'Online'}</span>
                          </div>
                          <h3 className="text-sm font-black text-slate-900 uppercase tracking-tight leading-snug mb-2 group-hover:text-indigo-400 transition-colors">{hk.title}</h3>
                          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1">Host: {hk.host}</p>
                          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-3">Timeline: {hk.date}</p>
                          <div className="p-3 bg-slate-100 rounded-xl border border-slate-200 mb-4">
                            <span className="text-[7px] font-black text-slate-500 uppercase tracking-widest block mb-0.5">Prizes & Awards</span>
                            <span className="text-xs font-black text-emerald-400 uppercase tracking-tight">{hk.prize}</span>
                          </div>
                        </div>
                        <a href={hk.url} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-full py-3 bg-slate-100 hover:bg-indigo-600 text-slate-700 hover:text-slate-900 rounded-xl text-[9px] font-black uppercase tracking-widest border border-slate-200 transition-all">
                          Apply Now <ExternalLink size={12} />
                        </a>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Bihar College Techfests */}
              <div className="border-t border-slate-200 pt-8">
                <h2 className="text-lg font-black text-slate-900 uppercase tracking-wider mb-6 flex items-center gap-2">
                  <Building2 className="text-indigo-500" size={20} /> Bihar GEC Techfests & Coding Events
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {biharTechfests.map((fest, idx) => (
                    <div key={idx} className="bg-white border border-slate-200 p-6 rounded-3xl space-y-4 hover:border-indigo-500/20 transition-all shadow-lg">
                      <div className="flex justify-between items-center">
                        <h3 className="text-sm font-black text-slate-900 uppercase tracking-tight">{fest.title}</h3>
                        <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded text-[8px] font-black uppercase tracking-wider">{fest.status}</span>
                      </div>
                      <div className="space-y-1.5 text-[10px] text-slate-500 font-semibold">
                        <p className="uppercase tracking-wider">College: <strong className="text-slate-700">{fest.college}</strong></p>
                        <p className="uppercase tracking-wider">Dates: <strong className="text-slate-700">{fest.date}</strong></p>
                        <p className="uppercase tracking-wider leading-relaxed">Key Contests: <span className="text-indigo-400 font-bold">{fest.events}</span></p>
                      </div>
                      <div className="pt-2 border-t border-slate-200 flex items-center justify-between">
                        <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest">Platform: Unstop</span>
                        <a href={fest.url} target="_blank" rel="noreferrer" className="text-[9px] font-black text-indigo-500 hover:text-indigo-400 uppercase tracking-widest flex items-center gap-1">View Details <ChevronRight size={10} /></a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: Teammate Finder */}
          {activeTab === 'team' && (
            <div className="space-y-8 animate-in fade-in duration-300">
              
              {/* Filters */}
              <div className="bg-white border border-slate-200 p-4 rounded-2xl flex flex-col md:flex-row gap-4 items-center justify-between shadow-md">
                <div className="relative w-full md:max-w-md">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
                  <input 
                    type="text" 
                    placeholder="Search by skills, roles..." 
                    className="w-full bg-slate-100 border border-slate-200 rounded-xl p-3.5 pl-12 text-xs text-slate-800 outline-none focus:border-indigo-500 transition-all"
                    value={teamSearch}
                    onChange={e => setTeamSearch(e.target.value)}
                  />
                </div>
                <div className="flex items-center gap-3 w-full md:w-auto">
                  <label className="text-[9px] font-black text-slate-500 uppercase tracking-widest whitespace-nowrap">College</label>
                  <input 
                    type="text"
                    placeholder="e.g. MIT, BCE" 
                    className="w-full md:w-44 bg-slate-100 border border-slate-200 rounded-xl p-3.5 text-xs text-slate-900 uppercase font-black tracking-widest outline-none"
                    value={teamCollegeFilter === 'All' ? '' : teamCollegeFilter}
                    onChange={e => setTeamCollegeFilter(e.target.value || 'All')}
                  />
                </div>
              </div>

              {/* Requests Wall */}
              <div>
                {loadingTeams ? (
                  <div className="p-20 text-center bg-slate-100 border border-slate-200 rounded-[2rem] flex flex-col items-center justify-center">
                    <Loader2 size={32} className="text-indigo-500 animate-spin mb-4" />
                    <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Loading Requests wall...</p>
                  </div>
                ) : filteredTeams.length === 0 ? (
                  <div className="p-16 text-center bg-slate-100 border border-slate-200 rounded-[2rem] text-slate-500 text-xs font-bold uppercase tracking-wider">
                    No active teammate requests. Be the first to post!
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredTeams.map(request => (
                      <div key={request.id} className="bg-white border border-slate-200 p-6 rounded-3xl space-y-4 hover:border-indigo-500/20 transition-all shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-full blur-2xl"></div>
                        <div className="flex justify-between items-start gap-4">
                          <div>
                            <h3 className="text-sm font-black text-slate-900 uppercase tracking-tight">{request.name}</h3>
                            <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest mt-1">{request.college} • {request.branch || 'B.Tech'}</p>
                          </div>
                          <span className="px-2 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-lg text-[8px] font-black uppercase tracking-wider">Seeking Teammates</span>
                        </div>

                        <div className="space-y-3 pt-2">
                          <div className="p-3 bg-slate-100 border border-slate-200 rounded-xl">
                            <span className="text-[7px] font-black text-slate-500 uppercase tracking-widest block mb-1">My Skills</span>
                            <span className="text-xs font-bold text-slate-800 uppercase tracking-tight">{request.skills}</span>
                          </div>

                          <div className="p-3 bg-slate-100 border border-slate-200 rounded-xl border-l-2 border-l-indigo-500">
                            <span className="text-[7px] font-black text-slate-500 uppercase tracking-widest block mb-1">Role Needed</span>
                            <span className="text-xs font-bold text-indigo-400 uppercase tracking-tight">{request.roleNeeded}</span>
                          </div>

                          {request.desc && (
                            <p className="text-xs text-slate-500 leading-relaxed font-semibold italic">"{request.desc}"</p>
                          )}
                        </div>

                        <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                          <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest">Connect: <strong className="text-slate-700 font-bold">{request.contact}</strong></span>
                          <a 
                            href={request.contact.startsWith('http') ? request.contact : `https://t.me/${request.contact.replace('@', '')}`}
                            target="_blank" 
                            rel="noreferrer" 
                            className="px-4 py-2 bg-slate-100 hover:bg-indigo-600 text-slate-900 rounded-lg text-[9px] font-black uppercase tracking-widest border border-slate-200 transition-all"
                          >
                            Ping Now
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>
          )}

          {/* TAB 3: SIH Prep Corner */}
          {activeTab === 'sih' && (
            <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in duration-300">
              <div className="bg-white border border-slate-200 p-6 md:p-8 rounded-[2rem] shadow-xl space-y-4">
                <h2 className="text-lg font-black text-slate-900 uppercase tracking-wider flex items-center gap-2.5">
                  <Award className="text-indigo-500" size={20} /> Smart India Hackathon Rules & Criteria
                </h2>
                <p className="text-slate-700 text-xs leading-relaxed font-semibold">
                  Smart India Hackathon (SIH) is a nationwide initiative to provide students a platform to solve pressing problems of our daily lives. 
                </p>

                <div className="p-4 bg-rose-500/10 border border-rose-500/20 text-rose-400 rounded-2xl flex gap-3 items-start">
                  <AlertTriangle size={20} className="shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <span className="text-[10px] font-black uppercase tracking-widest block">Critical Team Rule</span>
                    <p className="text-xs font-semibold leading-relaxed">
                      All teams MUST consist of exactly 6 members. Having at least 1 female team member is MANDATORY. Failure to meet this requirement results in immediate rejection of the team registration.
                    </p>
                  </div>
                </div>

                <ul className="space-y-3.5 text-xs text-slate-700 font-semibold pt-4">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="text-indigo-500 mt-0.5 shrink-0" size={16} />
                    <span><strong>Internal Screening:</strong> Each GEC college conducts a local internal screening hackathon. The local SPOC can submit a maximum of 30 teams (plus 5 waitlisted teams) for the National Round.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="text-indigo-500 mt-0.5 shrink-0" size={16} />
                    <span><strong>Problem Statements:</strong> Choose from two categories: Product/Hardware (e.g. IoT, Robotics) and Software (Web/App, AI-ML).</span>
                  </li>
                </ul>
              </div>

              {/* PPT Structure */}
              <div className="bg-white border border-slate-200 p-6 md:p-8 rounded-[2rem] shadow-xl space-y-6">
                <h2 className="text-lg font-black text-slate-900 uppercase tracking-wider flex items-center gap-2.5">
                  <FileSpreadsheet className="text-indigo-500" size={20} /> Standard SIH Presentation Template
                </h2>
                <p className="text-slate-700 text-xs leading-relaxed font-semibold">
                  Follow this structure to prepare your idea submission PPT for internal college screening. Keep it to a maximum of 6 slides.
                </p>

                <div className="space-y-4">
                  {[
                    { slide: "Slide 1", title: "Team Details & Title", details: "Team name, Problem statement ID, Title of solution, and College name with logo." },
                    { slide: "Slide 2", title: "Proposed Solution", details: "Clear explanation of how you plan to solve the problem, complete with block diagrams." },
                    { slide: "Slide 3", title: "Technology Stack", details: "List databases, frameworks, cloud services, and hardware components used." },
                    { slide: "Slide 4", title: "Use Cases & Flowchart", details: "Illustrate the user journey, processes workflow, and system states." },
                    { slide: "Slide 5", title: "Project Uniqueness", details: "Explain how your solution stands out from existing market alternatives." },
                    { slide: "Slide 6", title: "Team Contribution matrix", details: "Details of all 6 members and their specific contribution roles." }
                  ].map((s, i) => (
                    <div key={i} className="flex gap-4 p-4 bg-slate-100 border border-slate-200 rounded-xl">
                      <span className="text-[10px] font-black text-indigo-500 uppercase tracking-widest">{s.slide}</span>
                      <div>
                        <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider">{s.title}</h4>
                        <p className="text-xs text-slate-500 mt-1 leading-relaxed font-semibold">{s.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: Resources & Cheat Sheets */}
          {activeTab === 'resources' && (
            <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in duration-300">
              
              <div className="bg-white border border-slate-200 p-6 md:p-8 rounded-[2rem] shadow-xl space-y-6">
                <h2 className="text-lg font-black text-slate-900 uppercase tracking-wider flex items-center gap-2.5">
                  <Code className="text-indigo-500" size={20} /> Developer Resource Packs
                </h2>
                
                <div className="space-y-4">
                  <div className="p-5 bg-slate-100 border border-slate-200 rounded-2xl space-y-2">
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block">GitHub Student Developer Pack</span>
                    <p className="text-xs text-slate-700 font-semibold leading-relaxed">
                      Upload your official college ID card on the GitHub Education portal to unlock free access to GitHub Copilot, Namecheap domain credits, Canva Pro, Azure cloud, and various developer credits worth $1000+.
                    </p>
                  </div>
                  
                  <div className="p-5 bg-slate-100 border border-slate-200 rounded-2xl space-y-2">
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block">Free Fast Hosting & Databases</span>
                    <ul className="list-disc pl-4 text-xs text-slate-700 font-semibold space-y-1 pt-1">
                      <li><strong>Frontend Hosting:</strong> Vercel, Netlify, GitHub Pages</li>
                      <li><strong>Backend Hosting:</strong> Render (Free Tier), Koyeb</li>
                      <li><strong>Database:</strong> Supabase (PostgreSQL), Neon DB, MongoDB Atlas (Free M0 cluster)</li>
                    </ul>
                  </div>

                  <div className="p-5 bg-slate-100 border border-slate-200 rounded-2xl space-y-2">
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block">Design & Assets Packs</span>
                    <ul className="list-disc pl-4 text-xs text-slate-700 font-semibold space-y-1 pt-1">
                      <li><strong>Icons:</strong> Lucide Icons, FontAwesome</li>
                      <li><strong>Components:</strong> Tailwind UI, Shadcn UI, Bootstrap templates</li>
                      <li><strong>Animations:</strong> LottieFiles animations, Animate.css</li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          )}

        </div>

      </div>

      {/* Team Request Posting Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 bg-slate-50/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 p-6 md:p-8 rounded-[2rem] shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto custom-scrollbar">
            <h3 className="text-xl font-extrabold text-slate-900 uppercase tracking-tighter mb-1">Post Teammate Request</h3>
            <p className="text-[9px] text-slate-500 font-black uppercase tracking-widest mb-6">Find developers and innovators across Bihar GECs</p>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[9px] font-black text-slate-500 uppercase tracking-wider block">Your Name *</label>
                  <input 
                    type="text" 
                    required 
                    className="w-full bg-slate-100 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 outline-none focus:border-indigo-500" 
                    value={formData.name} 
                    onChange={e => setFormData({ ...formData, name: e.target.value })} 
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[9px] font-black text-slate-500 uppercase tracking-wider block">Branch *</label>
                  <input 
                    type="text" 
                    placeholder="e.g. CSE, Civil" 
                    required 
                    className="w-full bg-slate-100 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 outline-none focus:border-indigo-500" 
                    value={formData.branch} 
                    onChange={e => setFormData({ ...formData, branch: e.target.value })} 
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[9px] font-black text-slate-500 uppercase tracking-wider block">College *</label>
                <input 
                  type="text" 
                  placeholder="e.g. MIT Muzaffarpur, GCE Gaya" 
                  required 
                  className="w-full bg-slate-100 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 outline-none focus:border-indigo-500" 
                  value={formData.college} 
                  onChange={e => setFormData({ ...formData, college: e.target.value })} 
                />
              </div>

              <div className="space-y-1">
                <label className="text-[9px] font-black text-slate-500 uppercase tracking-wider block">Your Skills *</label>
                <input 
                  type="text" 
                  placeholder="e.g. HTML, CSS, JavaScript, React" 
                  required 
                  className="w-full bg-slate-100 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 outline-none focus:border-indigo-500" 
                  value={formData.skills} 
                  onChange={e => setFormData({ ...formData, skills: e.target.value })} 
                />
              </div>

              <div className="space-y-1">
                <label className="text-[9px] font-black text-slate-500 uppercase tracking-wider block">Role Needed / Teammate Profile *</label>
                <input 
                  type="text" 
                  placeholder="e.g. Node.js backend developer / Python coder" 
                  required 
                  className="w-full bg-slate-100 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 outline-none focus:border-indigo-500" 
                  value={formData.roleNeeded} 
                  onChange={e => setFormData({ ...formData, roleNeeded: e.target.value })} 
                />
              </div>

              <div className="space-y-1">
                <label className="text-[9px] font-black text-slate-500 uppercase tracking-wider block">Contact Method (Telegram/WhatsApp Link) *</label>
                <input 
                  type="text" 
                  placeholder="e.g. @your_telegram_username" 
                  required 
                  className="w-full bg-slate-100 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 outline-none focus:border-indigo-500" 
                  value={formData.contact} 
                  onChange={e => setFormData({ ...formData, contact: e.target.value })} 
                />
              </div>

              <div className="space-y-1">
                <label className="text-[9px] font-black text-slate-500 uppercase tracking-wider block">Project Description / Brief Idea</label>
                <textarea 
                  rows={3} 
                  placeholder="Tell potential teammates about your idea or hackathon interest..." 
                  className="w-full bg-slate-100 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 outline-none focus:border-indigo-500" 
                  value={formData.desc} 
                  onChange={e => setFormData({ ...formData, desc: e.target.value })} 
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button 
                  type="button" 
                  onClick={() => setShowForm(false)} 
                  className="flex-1 py-4 bg-slate-100 hover:bg-slate-800 text-slate-500 rounded-xl font-black text-[10px] uppercase tracking-widest border border-slate-200"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  disabled={submittingForm}
                  className="flex-1 py-4 bg-blue-600 hover:bg-blue-500 text-slate-900 rounded-xl font-black text-[10px] uppercase tracking-widest shadow-lg shadow-blue-500/20 disabled:opacity-50"
                >
                  {submittingForm ? 'Submitting...' : 'Post Request'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ── Educational SEO Content ── */}
      <section className="mt-16 pt-16 border-t border-slate-200 relative z-10 mx-4 max-w-7xl lg:mx-auto mb-16">
        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-200 prose prose-slate max-w-none shadow-sm text-left">
          <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter mb-4">Bihar Engineering Hackathon Hub: Innovate & Compete</h2>
          <p>
            Welcome to the <strong>Bihar Engineering Hackathon Hub</strong>, the first centralized platform designed specifically for students enrolled in Bihar Engineering University (BEU) to discover, prepare, and team up for national and state-level coding competitions like the Smart India Hackathon (SIH), internal GEC techfests, and global online coding events.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-4">Why Participate in Hackathons?</h3>
          <p>
            While your BEU semester exams validate your theoretical knowledge, hackathons are the ultimate playground to test your practical coding skills. Building real-world projects under strict 24-48 hour deadlines significantly boosts your problem-solving abilities and makes your resume stand out to top tech recruiters (TCS, Infosys, Wipro, Google). 
          </p>

          <h3 className="text-xl font-bold mt-8 mb-4">Find Coding Teammates Across Bihar</h3>
          <p>
            Building a strong, balanced team is the secret to winning hackathons. If you are a frontend developer from BCE Bhagalpur looking for a backend Node.js expert from MIT Muzaffarpur, use our <strong>Teammate Finder</strong>. You can post your exact requirements, share your project vision, and instantly connect with talented developers across all 38 Government Engineering Colleges (GECs) in Bihar.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-4">Smart India Hackathon (SIH) Preparation</h3>
          <p>
            SIH is the world's largest open innovation model. Preparing for the internal SIH screening rounds at your respective GEC requires meticulous planning. We provide exclusive, ready-to-use PPT presentation templates and crucial guidelines that cover technology stacks, flowchart design, and unique selling propositions (USPs) to help you clear the rigorous college-level screenings with ease.
          </p>
        </div>
      </section>

    </div>
  );
}
