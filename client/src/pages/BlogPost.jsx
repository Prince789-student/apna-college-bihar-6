import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import { ArrowLeft, Calendar, User, Clock, Share2, Facebook, Twitter, Link as LinkIcon, BookOpen, GraduationCap, Timer } from 'lucide-react';
import { toast } from 'react-hot-toast';

const BlogPost = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const foundPost = blogPosts.find(p => p.id === postId);
    if (foundPost) {
      setPost(foundPost);
      // Set page metadata
      document.title = foundPost.metaTitle;
    } else {
      navigate('/dashboard/blog');
    }
  }, [postId, navigate]);

  if (!post) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success('Link copied to clipboard!');
  };

  // Simple Markdown-like Renderer for Headings, Tables, and Lists
  const renderContent = (content) => {
    return content.split('\n').map((line, index) => {
      if (line.startsWith('# ')) return <h1 key={index} className="text-4xl md:text-5xl font-[1000] text-slate-900 tracking-tighter mb-8 mt-12">{line.replace('# ', '')}</h1>;
      if (line.startsWith('## ')) return <h2 key={index} className="text-3xl font-[1000] text-slate-800 tracking-tighter mb-6 mt-10 border-l-4 border-blue-600 pl-4">{line.replace('## ', '')}</h2>;
      if (line.startsWith('### ')) return <h3 key={index} className="text-2xl font-[1000] text-slate-800 tracking-tighter mb-4 mt-8">{line.replace('### ', '')}</h3>;
      if (line.startsWith('* ')) return <li key={index} className="ml-6 mb-2 text-slate-600 font-bold uppercase tracking-widest text-xs list-disc">{line.replace('* ', '')}</li>;
      if (line.startsWith('- ')) return <li key={index} className="ml-6 mb-2 text-slate-600 font-bold uppercase tracking-widest text-xs list-disc">{line.replace('- ', '')}</li>;
      if (line.startsWith('> ')) return <blockquote key={index} className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-2xl my-8 italic font-bold text-blue-900 shadow-sm">{line.replace('> ', '')}</blockquote>;
      if (line.includes('|')) {
        const parts = line.split('|').filter(part => part.trim() !== '');
        if (parts.length > 1) {
          return (
            <div className="overflow-x-auto my-8 rounded-2xl border border-slate-200">
               <table className="w-full text-left bg-white">
                 <thead className="bg-slate-50 border-b border-slate-200">
                   <tr>{parts.map((p, i) => <th key={i} className="p-4 text-[10px] font-black uppercase tracking-widest text-slate-500">{p.trim()}</th>)}</tr>
                 </thead>
               </table>
            </div>
          );
        }
      }
      if (line.trim() === '') return <div key={index} className="h-4"></div>;
      
      // Basic Bold/Italic fallback
      let formattedLine = line;
      formattedLine = formattedLine.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

      return (
        <p key={index} className="text-lg text-slate-700 leading-relaxed font-medium mb-4" 
           dangerouslySetInnerHTML={{ __html: formattedLine }}>
        </p>
      );
    });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-20">
      {/* Back Button */}
      <Link to="/dashboard/blog" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 font-black text-[10px] uppercase tracking-widest group transition-all">
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        Back to Library
      </Link>

      {/* Hero Section */}
      <div className="space-y-6">
        <div className="flex flex-wrap items-center gap-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">
          <span className="px-4 py-2 bg-blue-600/10 text-blue-600 rounded-xl">{post.category}</span>
          <div className="flex items-center gap-1.5"><Calendar size={12} /> {post.date}</div>
          <div className="flex items-center gap-1.5"><User size={12} /> {post.author}</div>
          <div className="flex items-center gap-1.5"><Clock size={12} /> 6 min read</div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-[1000] text-slate-900 tracking-tighter leading-none">
          {post.title}
        </h1>
        
        <div className="flex items-center justify-between py-6 border-y border-slate-200/80">
          <div className="flex items-center gap-4">
             <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full flex items-center justify-center text-white font-[1000]">AD</div>
             <div>
                <p className="text-xs font-black text-slate-900 uppercase">Admin Team</p>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Growth Strategist</p>
             </div>
          </div>
          <div className="flex items-center gap-3">
             <button onClick={handleShare} className="p-3 bg-slate-50 border border-slate-200 rounded-2xl hover:bg-slate-100 transition-all">
                <Share2 size={18} className="text-slate-600" />
             </button>
             <button onClick={handleShare} className="p-3 bg-slate-50 border border-slate-200 rounded-2xl hover:bg-slate-100 transition-all">
                <LinkIcon size={18} className="text-slate-600" />
             </button>
          </div>
        </div>
      </div>

      {/* Main Image */}
      <div className="rounded-[4rem] overflow-hidden shadow-2xl relative aspect-[16/9]">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent"></div>
      </div>

      {/* Article Content */}
      <article className="prose prose-slate max-w-none">
        {renderContent(post.content)}
      </article>

      {/* Recommended Tools (Growth Hack Section) */}
      <div className="bg-slate-950 rounded-[3rem] p-10 md:p-16 text-white space-y-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px]"></div>
        <div className="space-y-4 relative z-10">
          <h2 className="text-3xl font-[1000] tracking-tighter uppercase italic">Boost Your Performance 🚀</h2>
          <p className="text-sm text-slate-400 font-bold uppercase tracking-widest">Stop wasting time. Use these official tools while studying.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          <Link to="/dashboard/study" className="flex items-center gap-6 p-8 bg-white/5 border border-white/10 rounded-[2.5rem] hover:bg-white/10 transition-all group">
            <div className="p-5 bg-blue-600/20 text-blue-400 rounded-3xl group-hover:scale-110 transition-transform">
               <Timer size={32} />
            </div>
            <div>
               <p className="text-xl font-[1000] tracking-tighter uppercase">Study Timer</p>
               <p className="text-[10px] text-slate-500 font-black tracking-widest uppercase">Deep Focus Assistant</p>
            </div>
          </Link>
          <Link to="/dashboard/cgpa" className="flex items-center gap-6 p-8 bg-white/5 border border-white/10 rounded-[2.5rem] hover:bg-white/10 transition-all group">
            <div className="p-5 bg-emerald-600/20 text-emerald-400 rounded-3xl group-hover:scale-110 transition-transform">
               <GraduationCap size={32} />
            </div>
            <div>
               <p className="text-xl font-[1000] tracking-tighter uppercase">GP CA Calculator</p>
               <p className="text-[10px] text-slate-500 font-black tracking-widest uppercase">Official BEU Metric Tool</p>
            </div>
          </Link>
        </div>

        <div className="pt-6 border-t border-white/5 text-center relative z-10">
           <Link to="/signup" className="inline-flex items-center gap-3 px-10 py-5 bg-blue-600 rounded-full font-black text-xs uppercase tracking-widest hover:bg-blue-500 transition-all shadow-xl shadow-blue-900/40">
             Join 10,000+ Bihar Students <ArrowRight size={16} />
           </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
