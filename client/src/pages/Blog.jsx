import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Calendar, ArrowRight, User } from 'lucide-react';
import SEO from '../components/SEO';
import { blogPosts } from '../data/blogPosts';
import Reveal from '../components/Reveal';

export default function Blog() {
  return (
    <div className="min-h-screen bg-[#f8fafc] md:bg-transparent text-slate-900 md:text-white font-['Inter'] pb-20">
      <SEO 
        title="Engineering Blog & Articles | Apna College Bihar" 
        description="Read top-quality educational articles, tips on BEU exams, UGEAC counselling guides, and engineering career advice for Bihar students." 
        keywords="BEU blog, UGEAC guide, engineering in Bihar, CSE vs IT, BEU preparation"
      />
      
      {/* Header */}
      <section className="pt-20 pb-16 px-6 bg-slate-900 md:bg-slate-900/60 md:backdrop-blur-md md:rounded-3xl max-w-5xl mx-auto my-6 border border-transparent md:border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-transparent"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <span className="text-blue-400 md:text-cyan-400 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Student Resources</span>
          <h1 className="text-4xl md:text-5xl font-[1000] text-white uppercase tracking-tighter mb-4 drop-shadow-md">Engineering Blog</h1>
          <p className="text-slate-400 md:text-slate-200 max-w-2xl mx-auto text-sm md:text-base font-medium">
            Discover articles, guides, and tips to help you navigate your engineering journey in Bihar, from UGEAC admission to acing your BEU semester exams.
          </p>
        </div>
      </section>

      {/* Blog List */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <Reveal key={post.id} delay={index * 50}>
                <article className="bg-white md:bg-slate-900/60 md:backdrop-blur-md border border-slate-200 md:border-white/15 rounded-[2rem] overflow-hidden hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] hover:border-blue-200 md:hover:border-cyan-400/50 transition-all duration-300 group flex flex-col h-full md:text-white">
                  <div className="p-8 flex flex-col h-full">
                    <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-slate-500 md:text-slate-400 mb-4">
                      <span className="flex items-center gap-1.5"><Calendar size={14} className="text-blue-500 md:text-cyan-400"/> {new Date(post.date).toLocaleDateString('en-IN', {day: 'numeric', month: 'long', year: 'numeric'})}</span>
                    </div>
                    <Link to={`/blog/${post.slug}`}>
                      <h2 className="text-xl md:text-2xl font-[900] text-slate-900 md:text-white tracking-tight leading-snug mb-3 group-hover:text-blue-600 md:group-hover:text-cyan-300 transition-colors">
                        {post.title}
                      </h2>
                    </Link>
                    <p className="text-slate-600 md:text-slate-300 text-sm leading-relaxed mb-6 flex-1 font-medium">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between border-t border-slate-100 md:border-white/10 pt-6 mt-auto">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-blue-50 md:bg-cyan-500/20 text-blue-600 md:text-cyan-300 flex items-center justify-center">
                          <User size={14} />
                        </div>
                        <span className="text-xs font-bold text-slate-900 md:text-white">{post.author}</span>
                      </div>
                      <Link to={`/blog/${post.slug}`} className="w-10 h-10 rounded-full bg-slate-50 md:bg-white/10 border border-slate-200 md:border-white/20 flex items-center justify-center text-slate-400 md:text-white group-hover:bg-blue-600 md:group-hover:bg-cyan-500 group-hover:text-white group-hover:border-blue-600 transition-all">
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
