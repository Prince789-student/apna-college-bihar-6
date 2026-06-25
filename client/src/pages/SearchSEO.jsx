import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Search as SearchIcon, FileText, BookOpen, ExternalLink, Loader2, ArrowRight } from 'lucide-react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import SEO from '../components/SEO';

export default function SearchSEO() {
  const { keyword } = useParams();
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);

  const decodedKeyword = decodeURIComponent(keyword || '').replace(/-/g, ' ');

  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true);
      try {
        const snap = await getDocs(collection(db, 'documents'));
        const docs = snap.docs
          .map(d => ({ id: d.id, ...d.data() }))
          .filter(d => d.type !== 'folder');
        setDocuments(docs);
      } catch (err) {
        console.error("Search fetch error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchResults();
  }, [keyword]);

  const results = useMemo(() => {
    if (!decodedKeyword.trim()) return [];
    const q = decodedKeyword.toLowerCase();
    
    // Simple search algorithm
    let docs = documents.filter(d => 
      (d.title && d.title.toLowerCase().includes(q)) || 
      (d.subject && d.subject.toLowerCase().includes(q)) ||
      (d.category && d.category.toLowerCase().includes(q))
    );

    // Inject Static App Features based on keyword
    if (q.includes('syllabus')) {
      docs.unshift({
        id: 'static-syllabus',
        title: 'BEU B.Tech Syllabus (All Branches)',
        subject: 'Official revised B.Tech syllabus for BEU/AKU',
        category: 'APP FEATURE',
        branch: 'ALL',
        isStaticLink: '/syllabus'
      });
    }
    if (q.includes('cgpa') || q.includes('sgpa') || q.includes('calculator') || q.includes('percentage')) {
      docs.unshift({
        id: 'static-cgpa',
        title: 'BEU CGPA to Percentage Calculator',
        subject: 'Instantly convert your BEU CGPA to percentage',
        category: 'APP FEATURE',
        branch: 'ALL',
        isStaticLink: '/cgpa'
      });
    }
    if (q.includes('ugeac') || q.includes('predictor') || q.includes('counselling')) {
      docs.unshift({
        id: 'static-ugeac',
        title: 'UGEAC College Predictor 2026',
        subject: 'Predict Bihar engineering colleges based on JEE rank',
        category: 'APP FEATURE',
        branch: 'ALL',
        isStaticLink: '/ugeac-predictor'
      });
    }

    return docs;
  }, [decodedKeyword, documents]);

  const generateLink = (doc) => {
    if (doc.isStaticLink) return doc.isStaticLink;
    const basePath = doc.category === 'PYQ' ? '/pyq' : '/notes';
    const branch = doc.branch ? doc.branch.toLowerCase() : '';
    const sem = doc.semester ? String(doc.semester) : '';
    if (branch && sem) return `${basePath}/${branch}/${sem}`;
    if (branch) return `${basePath}/${branch}`;
    return basePath;
  };

  return (
    <div className="min-h-screen bg-slate-50 font-['Inter'] pb-24">
      <SEO 
        title={`${decodedKeyword.toUpperCase()} B.Tech Notes & PYQ Download | Apna College Bihar`}
        description={`Download free ${decodedKeyword} study material, previous year questions (PYQ), and notes for Bihar Engineering University (BEU) students.`}
        keywords={`${decodedKeyword}, ${decodedKeyword} BEU, ${decodedKeyword} notes, ${decodedKeyword} PYQ, Bihar Engineering`}
        url={`https://www.apnacollegebihar.online/search/${encodeURIComponent(keyword || '')}`}
      />

      {/* Header */}
      <div className="bg-blue-600 text-white rounded-b-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center text-center">
          <Link to="/" className="self-start text-[10px] font-black uppercase tracking-widest bg-white/20 px-4 py-2 rounded-xl mb-8 hover:bg-white/30 transition-all">
            ← Back to Home
          </Link>
          <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 shadow-inner">
            <SearchIcon size={32} className="text-white" />
          </div>
          <h1 className="text-2xl md:text-4xl font-[1000] tracking-tighter uppercase mb-4 max-w-2xl leading-tight">
            Search Results for "{decodedKeyword}"
          </h1>
          <p className="text-blue-100 text-[11px] md:text-sm font-bold uppercase tracking-widest max-w-lg">
            Found {results.length} related study materials
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 -mt-8 relative z-20">
        {loading ? (
          <div className="bg-white rounded-[2rem] shadow-xl border border-slate-100 p-20 flex flex-col items-center justify-center">
            <Loader2 size={40} className="text-blue-500 animate-spin mb-4" />
            <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Searching Database...</p>
          </div>
        ) : results.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {results.map((res) => (
              <div key={res.id} className="bg-white p-5 rounded-3xl border border-slate-200/60 shadow-lg hover:shadow-xl hover:border-blue-300 transition-all group flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-xl ${res.category === 'PYQ' ? 'bg-purple-100 text-purple-600' : 'bg-blue-100 text-blue-600'}`}>
                      {res.category === 'PYQ' ? <FileText size={20} /> : <BookOpen size={20} />}
                    </div>
                    <div>
                      <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 block mb-0.5">
                        {res.category || 'NOTES'} • {res.branch || 'ALL BRANCHES'}
                      </span>
                      <span className="inline-block px-2 py-0.5 bg-slate-100 text-slate-600 text-[9px] font-bold rounded-md">
                        Semester {res.semester || 'N/A'}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-lg font-[900] text-slate-900 tracking-tight leading-tight mb-2 group-hover:text-blue-600 transition-colors">
                    {res.title}
                  </h3>
                  {res.subject && (
                    <p className="text-xs font-semibold text-slate-500 mb-4 line-clamp-2">
                      Subject: {res.subject}
                    </p>
                  )}
                </div>
                
                <Link to={generateLink(res)} className="mt-4 flex items-center justify-center gap-2 w-full py-3 bg-slate-50 hover:bg-blue-600 text-slate-700 hover:text-white rounded-xl font-black text-[10px] uppercase tracking-widest transition-all shadow-sm group-hover:shadow-md">
                  View Full Document <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-[2rem] shadow-xl border border-slate-100 p-16 text-center">
            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <SearchIcon size={32} className="text-slate-300" />
            </div>
            <h3 className="text-xl font-[900] text-slate-800 tracking-tighter mb-2">No exact matches found</h3>
            <p className="text-xs font-semibold text-slate-500 mb-8 max-w-sm mx-auto">
              We couldn't find any notes or PYQs exactly matching "{decodedKeyword}". Try searching with a broader term or check the specific branch section.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/notes" className="px-6 py-3 bg-blue-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-700 transition-colors shadow-lg">Browse Notes</Link>
              <Link to="/pyq" className="px-6 py-3 bg-purple-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-purple-700 transition-colors shadow-lg">Browse PYQ Bank</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
