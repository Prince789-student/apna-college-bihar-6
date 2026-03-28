import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import { Search, Calendar, User, ArrowRight, BookOpen } from 'lucide-react';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-12">
      {/* Header Section */}
      <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-blue-600 to-indigo-900 p-10 md:p-20 text-white shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="relative z-10 space-y-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest">
            <BookOpen size={14} />
            The Student Bulletin
          </div>
          <h1 className="text-4xl md:text-6xl font-[1000] tracking-tighter leading-tight">
            Level Up Your <span className="text-blue-300">Engineering</span> Journey.
          </h1>
          <p className="text-lg text-blue-100/80 font-medium">
            Expert insights, college guides, and coding roadmaps tailored for students in Bihar.
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-md group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-200 group-focus-within:text-white transition-colors" size={20} />
            <input 
              type="text"
              placeholder="Search articles, guides, resources..."
              className="w-full bg-white/10 border-2 border-white/10 focus:border-white/30 backdrop-blur-md rounded-2xl py-4 pl-12 pr-4 outline-none transition-all placeholder:text-blue-200/50 font-bold text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Categories & content */}
      <div className="space-y-8">
        <div className="flex flex-wrap items-center gap-3">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${
                selectedCategory === category 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 ring-4 ring-blue-500/10' 
                : 'bg-white border border-slate-200 text-slate-500 hover:border-blue-500/30 hover:text-blue-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map(post => (
            <Link 
              key={post.id} 
              to={`/dashboard/blog/${post.id}`}
              className="group bg-white rounded-[2.5rem] border border-slate-200/80 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-all active:scale-[0.98] flex flex-col h-full"
            >
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-xl text-[8px] font-black uppercase tracking-widest text-slate-900 shadow-xl">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8 space-y-4 flex-1 flex flex-col">
                <div className="flex items-center gap-4 text-[9px] font-black text-slate-400 uppercase tracking-widest">
                  <div className="flex items-center gap-1.5"><Calendar size={12} /> {post.date}</div>
                  <div className="flex items-center gap-1.5"><User size={12} /> {post.author}</div>
                </div>
                
                <h3 className="text-xl font-[1000] text-slate-900 tracking-tighter leading-tight group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest leading-relaxed line-clamp-3">
                  {post.metaDescription}
                </p>
                
                <div className="pt-4 mt-auto">
                  <div className="flex items-center gap-2 text-blue-600 font-black text-[10px] uppercase tracking-[0.2em]">
                    Read Full Article <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="py-20 text-center space-y-4">
            <div className="inline-flex p-6 bg-slate-100 rounded-full text-slate-400">
              <Search size={40} />
            </div>
            <p className="text-xl font-[1000] text-slate-900 uppercase tracking-tighter">No articles found</p>
            <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Try adjusting your search or category filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
