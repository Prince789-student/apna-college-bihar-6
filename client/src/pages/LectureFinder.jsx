import React, { useState, useMemo } from 'react';
import { lectureData } from '../data/lectureData';

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
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Lecture Finder
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Select your subject to quickly find unit-wise playlists and search for specific topics.
          </p>
        </div>

        {/* Controls */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
              Select Subject
            </label>
            <select
              id="subject"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
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

          <div className="flex-1">
            <label htmlFor="search" className="block text-sm font-medium text-gray-700">
              Search Topics
            </label>
            <input
              type="text"
              id="search"
              disabled={!selectedSubject}
              className="mt-1 block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm disabled:bg-gray-100 disabled:cursor-not-allowed"
              placeholder={selectedSubject ? "Search e.g. Kirchhoff..." : "Select a subject first"}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Content Area */}
        {currentSubjectData && (
          <div className="space-y-8 animate-fade-in">
            
            {/* Unit Playlists */}
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h2 className="text-xl font-bold text-blue-900 mb-4">Complete Unit Playlists</h2>
              <div className="flex flex-wrap gap-3">
                {currentSubjectData.playlists.map((pl, idx) => (
                  <a
                    key={idx}
                    href={pl.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                  >
                    Play {pl.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Topic List */}
            <div className="bg-white shadow overflow-hidden sm:rounded-md border border-gray-200">
              <div className="px-4 py-5 border-b border-gray-200 sm:px-6 flex justify-between items-center">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Topic-wise Lectures
                </h3>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  {filteredTopics.length} Topics Found
                </span>
              </div>
              <ul className="divide-y divide-gray-200 max-h-screen overflow-y-auto">
                {filteredTopics.length > 0 ? (
                  filteredTopics.map((topic, idx) => (
                    <li key={idx} className="hover:bg-gray-50">
                      <div className="px-4 py-4 sm:px-6">
                        <div className="flex items-center justify-between">
                          <div className="flex-1 min-w-0 pr-4">
                            <p className="text-sm font-medium text-blue-600 truncate mb-1">
                              {topic.unit}
                            </p>
                            <p className="text-base text-gray-900 whitespace-normal break-words font-semibold">
                              {topic.title}
                            </p>
                          </div>
                            <div className="flex flex-col gap-2 shrink-0">
                              {topic.videoIds && topic.videoIds.length > 0 ? (
                                topic.videoIds.map((vid, vIdx) => (
                                  <a
                                    key={vIdx}
                                    href={`https://www.youtube.com/watch?v=${vid}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                  >
                                    <svg className="-ml-1 mr-2 h-4 w-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                                    </svg>
                                    {topic.videoIds.length > 1 ? `Part ${vIdx + 1}` : 'Watch'}
                                  </a>
                                ))
                              ) : topic.searchUrl ? (
                                <a
                                  href={topic.searchUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center px-3 py-1.5 border border-indigo-200 shadow-sm text-xs font-medium rounded text-indigo-700 bg-indigo-50 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                  <svg className="-ml-1 mr-2 h-4 w-4 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                  </svg>
                                  Search on YT
                                </a>
                              ) : null}
                            </div>
                        </div>
                      </div>
                    </li>
                  ))
                ) : (
                  <div className="p-8 text-center text-gray-500">
                    No topics found matching your search.
                  </div>
                )}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LectureFinder;
