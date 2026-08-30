import React, { useState, useMemo } from 'react';
import { lectureData } from '../data/lectureData';
import { Search, Youtube, PlayCircle, BookOpen, GraduationCap, Library } from 'lucide-react';
import SEO from '../components/SEO';

const LectureFinder = () => {
  const [selectedSubject, setSelectedSubject] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // Find the selected subject data
  const currentSubjectData = useMemo(() => {
    return lectureData.find(s => s.subject === selectedSubject);
  }, [selectedSubject]);

  // Filter topics based on search
  const filteredTopics = useMemo(() => {
    if (!currentSubjectData) return [];
    if (!searchQuery) return currentSubjectData.topics;
    
    const query = searchQuery.toLowerCase();
    return currentSubjectData.topics.filter(t => 
      t.title.toLowerCase().includes(query) || 
      t.unit.toLowerCase().includes(query)
    );
  }, [currentSubjectData, searchQuery]);

  return (
    <>
      <SEO 
        title="BEU Lecture Finder | Topic-wise Video Lectures"
        description="Find exact unit-wise and topic-wise YouTube video lectures for your BEU engineering syllabus. Stop wasting time searching for specific engineering topics."
        keywords="BEU video lectures, engineering lectures, Apna College Bihar, BEU syllabus, B.Tech lectures, unit-wise videos, engineering physics, basic electrical"
      />
      
      <div className="min-h-screen bg-slate-50 pb-24 text-slate-900">
        {/* Header Section */}
        <div className="bg-white border-b border-slate-200 pt-12 pb-8 px-4 sm:px-6 lg:px-8 shadow-sm">
          <div className="max-w-5xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-black uppercase tracking-widest mb-4">
              <Youtube size={14} /> Smart Study Tool
            </div>
            <h1 className="text-3xl font-black text-slate-900 uppercase tracking-tight sm:text-5xl md:text-6xl flex flex-col">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">BEU Lecture</span>
              <span className="text-slate-800">Finder</span>
            </h1>
            <p className="max-w-2xl text-lg text-slate-600 font-medium">
              Find exact topic-wise video lectures for your Bihar Engineering University syllabus. Stop wasting hours searching YouTube for specific engineering topics.
            </p>
            
            {/* Controls */}
            <div className="bg-slate-50/80 p-6 rounded-2xl border border-slate-200 flex flex-col md:flex-row gap-6 mt-8">
              <div className="flex-1">
                <label htmlFor="subject" className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">
                  Select Subject
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <BookOpen className="text-slate-400" size={18} />
                  </div>
                  <select
                    id="subject"
                    className="block w-full pl-10 pr-10 py-3.5 bg-white border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none font-medium shadow-sm transition-shadow"
                    value={selectedSubject}
                    onChange={(e) => setSelectedSubject(e.target.value)}
                  >
                    <option value="">-- Choose a subject --</option>
                    {lectureData.map((s, idx) => (
                      <option key={idx} value={s.subject}>
                        {s.subject}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex-1">
                <label htmlFor="search" className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">
                  Search Topics
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="text-slate-400" size={18} />
                  </div>
                  <input
                    type="text"
                    id="search"
                    disabled={!selectedSubject}
                    className="block w-full pl-10 pr-3 py-3.5 bg-white border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-medium disabled:opacity-50 disabled:bg-slate-100 disabled:cursor-not-allowed shadow-sm transition-shadow"
                    placeholder={selectedSubject ? "Search e.g. Kirchhoff..." : "Select a subject first"}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          {currentSubjectData ? (
            <div className="space-y-12 animate-fade-in">
              
              {/* Unit Playlists */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl border border-blue-100 shadow-sm">
                <h2 className="text-lg font-black text-slate-800 uppercase tracking-wider mb-6 flex items-center gap-3">
                  <Library className="text-blue-600" size={24} /> Complete Unit Playlists
                </h2>
                <div className="flex flex-wrap gap-4">
                  {currentSubjectData.playlists.map((pl, idx) => (
                    <a
                      key={idx}
                      href={pl.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-white border border-blue-200 text-blue-700 font-bold hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 shadow-sm"
                    >
                      <PlayCircle size={18} className="group-hover:scale-110 transition-transform" /> 
                      {pl.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Topic List */}
              <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
                <div className="px-6 py-5 border-b border-slate-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-slate-50">
                  <h3 className="text-lg font-black text-slate-800 uppercase tracking-wider flex items-center gap-3">
                    <GraduationCap className="text-emerald-600" size={24} /> Topic-wise Lectures
                  </h3>
                  <span className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-black bg-emerald-100 text-emerald-700 border border-emerald-200 uppercase tracking-widest">
                    {filteredTopics.length} Topics Found
                  </span>
                </div>
                
                <ul className="divide-y divide-slate-100 max-h-[800px] overflow-y-auto">
                  {filteredTopics.length > 0 ? (
                    filteredTopics.map((topic, idx) => (
                      <li key={idx} className="hover:bg-slate-50 transition-colors duration-200">
                        <div className="px-6 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div className="flex-1 min-w-0 pr-4">
                            <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-1.5">
                              {topic.unit}
                            </p>
                            <p className="text-base text-slate-800 font-medium">
                              {topic.title}
                            </p>
                          </div>
                          <div className="flex flex-col gap-2 shrink-0 w-full sm:w-auto">
                            {topic.videoIds && topic.videoIds.length > 0 ? (
                              topic.videoIds.map((vid, vIdx) => (
                                <a
                                  key={vIdx}
                                  href={`https://www.youtube.com/watch?v=${vid}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-red-50 border border-red-200 text-red-600 font-bold hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300 shadow-sm"
                                >
                                  <Youtube size={16} />
                                  {topic.videoIds.length > 1 ? `Part ${vIdx + 1}` : 'Watch'}
                                </a>
                              ))
                            ) : topic.searchUrl ? (
                              <a
                                href={topic.searchUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-slate-100 border border-slate-300 text-slate-700 font-bold hover:bg-slate-800 hover:text-white hover:border-slate-800 transition-all duration-300 shadow-sm"
                              >
                                <Search size={16} />
                                Search YT
                              </a>
                            ) : null}
                          </div>
                        </div>
                      </li>
                    ))
                  ) : (
                    <div className="p-12 text-center">
                      <p className="text-slate-500 font-medium text-lg">
                        No topics found matching "{searchQuery}"
                      </p>
                      <button 
                        onClick={() => setSearchQuery('')}
                        className="mt-4 text-blue-600 font-bold hover:text-blue-700 transition-colors"
                      >
                        Clear search
                      </button>
                    </div>
                  )}
                </ul>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 px-4">
              <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                <Youtube size={48} className="text-blue-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">No Subject Selected</h3>
              <p className="text-slate-500 text-center max-w-md">
                Please select a subject from the dropdown above to view the complete list of lecture videos arranged according to the university syllabus.
              </p>
            </div>
          )}

          {/* SEO Content Section for AdSense */}
          <div className="mt-20 pt-10 border-t border-slate-200 space-y-8 pb-10">
            <h2 className="text-2xl font-black text-slate-800 uppercase tracking-wider">About Apna College Bihar Lecture Finder</h2>
            
            <div className="prose prose-slate max-w-none text-slate-600 space-y-4">
              <p>
                Welcome to the <strong>Apna College Bihar Lecture Finder</strong>, an essential academic tool designed specifically for B.Tech students enrolled under Bihar Engineering University (BEU). Navigating through the vast ocean of YouTube tutorials can be overwhelming, especially when trying to strictly adhere to the university syllabus. This tool solves that problem by meticulously mapping exact lecture videos to your specific BEU syllabus topics.
              </p>
              
              <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">How It Works</h3>
              <p>
                Our comprehensive database contains curated video lectures for various engineering branches including Computer Science, Civil, Mechanical, and Electrical Engineering. First, simply select your subject (e.g., Engineering Chemistry, Basic Electrical and Electronics Engineering) from the interactive dropdown. Once selected, you'll instantly have access to two powerful study resources:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Unit-Wise Complete Playlists:</strong> Jump straight into entire playlist modules that cover an entire unit (e.g., Quantum Mechanics, A.C. Circuits).</li>
                <li><strong>Topic-Wise Specific Lectures:</strong> Search for micro-topics from your exact syllabus and watch the single best video for that particular concept. No more skipping through hours of unrelated content!</li>
              </ul>

              <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Enhancing Your Engineering Preparation</h3>
              <p>
                Whether you're doing last-minute revision before mid-semester exams or building a strong foundational understanding for end-semester BEU examinations, our Lecture Finder integrates seamlessly with our existing study tools. Combine this with our free B.Tech Notes and Previous Year Question Papers (PYQs) to maximize your academic performance. Apna College Bihar is committed to bringing the best free educational resources to the engineering community. 
              </p>
              
              <p className="text-sm text-slate-400 mt-8 italic">
                Note: All videos are embedded and linked directly to their original creators on YouTube. We do not host any video content. This tool serves purely as an educational directory and search utility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LectureFinder;
