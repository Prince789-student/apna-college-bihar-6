import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, FileText, BookOpen, ExternalLink, Loader2 } from 'lucide-react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

export default function GlobalSearch() {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [documents, setDocuments] = useState([]);
  const [hasFetched, setHasFetched] = useState(false);
  const wrapperRef = useRef(null);
  const navigate = useNavigate();

  // Fetch documents only when user focuses the search bar to save reads
  const handleFocus = async () => {
    setIsOpen(true);
    if (!hasFetched) {
      setLoading(true);
      try {
        const snap = await getDocs(collection(db, 'documents'));
        const docs = snap.docs
          .map(d => ({ id: d.id, ...d.data() }))
          .filter(d => d.type !== 'folder'); // We only want files
        setDocuments(docs);
        setHasFetched(true);
      } catch (err) {
        console.error("Failed to fetch documents for search:", err);
      } finally {
        setLoading(false);
      }
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [wrapperRef]);

  // Filter documents based on query
  const searchResults = React.useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return documents
      .filter(d => 
        (d.title && d.title.toLowerCase().includes(q)) || 
        (d.subject && d.subject.toLowerCase().includes(q))
      )
      .slice(0, 8); // Limit to top 8 results for performance/UI
  }, [query, documents]);

  const handleResultClick = (doc) => {
    setIsOpen(false);
    setQuery('');
    
    // Determine the route based on category
    const basePath = doc.category === 'PYQ' ? '/pyq' : '/notes';
    const branch = doc.branch ? doc.branch.toLowerCase() : '';
    const sem = doc.semester ? String(doc.semester) : '';
    
    if (branch && sem) {
      navigate(`${basePath}/${branch}/${sem}`);
    } else if (branch) {
      navigate(`${basePath}/${branch}`);
    } else {
      navigate(basePath);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      setIsOpen(false);
      navigate(`/search/${encodeURIComponent(query.trim())}`);
      setQuery('');
    }
  };

  return (
    <div ref={wrapperRef} className="relative w-full max-w-md mx-auto z-50">
      <form onSubmit={handleSearchSubmit} className="relative group">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors z-10" size={18} />
        <input 
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={handleFocus}
          placeholder="Search Notes, PYQs, Subjects..."
          className="w-full bg-white/90 backdrop-blur border border-slate-200 focus:border-blue-500 rounded-full py-2.5 pl-12 pr-4 text-sm font-semibold text-slate-800 outline-none shadow-sm transition-all placeholder:text-slate-400 focus:ring-4 focus:ring-blue-500/10"
        />
        {loading && (
          <Loader2 className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-500 animate-spin" size={16} />
        )}
      </form>

      {/* Dropdown Results */}
      {isOpen && query.trim() && (
        <div className="absolute top-full left-0 w-full mt-2 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
          {searchResults.length > 0 ? (
            <div className="max-h-[300px] overflow-y-auto p-2 space-y-1">
              {searchResults.map((res) => (
                <button
                  key={res.id}
                  onClick={() => handleResultClick(res)}
                  className="w-full flex items-start gap-3 p-3 hover:bg-slate-50 rounded-xl transition-colors text-left group"
                >
                  <div className={`p-2 rounded-lg shrink-0 ${res.category === 'PYQ' ? 'bg-purple-100 text-purple-600' : 'bg-blue-100 text-blue-600'}`}>
                    {res.category === 'PYQ' ? <FileText size={16} /> : <BookOpen size={16} />}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-xs font-black text-slate-900 uppercase tracking-tight truncate group-hover:text-blue-600 transition-colors">
                      {res.title}
                    </h4>
                    <p className="text-[10px] text-slate-500 font-bold truncate mt-0.5">
                      {res.subject || 'General'} • {res.category || 'NOTES'} • {res.branch || 'ALL'} {res.semester ? `SEM ${res.semester}` : ''}
                    </p>
                  </div>
                  <ExternalLink size={14} className="text-slate-300 group-hover:text-blue-500 opacity-0 group-hover:opacity-100 transition-all shrink-0 mt-1" />
                </button>
              ))}
              
              <div className="pt-2 pb-1 border-t border-slate-100 px-2 mt-2">
                <button
                  onClick={handleSearchSubmit}
                  className="w-full py-2 text-center text-[10px] font-black text-blue-600 hover:text-blue-700 uppercase tracking-widest flex items-center justify-center gap-1"
                >
                  See all results for "{query}" <Search size={12} />
                </button>
              </div>
            </div>
          ) : !loading ? (
            <div className="p-6 text-center">
              <Search size={24} className="mx-auto text-slate-300 mb-2" />
              <p className="text-xs font-bold text-slate-600">No results found for "{query}"</p>
              <button
                  onClick={handleSearchSubmit}
                  className="mt-3 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-blue-100 transition-colors"
                >
                  Deep Search Entire Site
                </button>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}
