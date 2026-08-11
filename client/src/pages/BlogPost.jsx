import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock, Share2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import SEO from '../components/SEO';
import { blogPosts } from '../data/blogPosts';

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const post = blogPosts.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#f8fafc] flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-4xl font-[1000] text-slate-900 uppercase tracking-tighter mb-4">Post Not Found</h1>
        <p className="text-slate-500 mb-8">The article you are looking for does not exist or has been moved.</p>
        <Link to="/blog" className="px-6 py-3 bg-blue-600 text-white rounded-xl font-bold uppercase tracking-widest text-xs">Return to Blog</Link>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      }).catch(console.error);
    }
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.apnacollegebihar.online/blog/${post.slug}`
    },
    "headline": post.title,
    "description": post.excerpt,
    "image": "https://www.apnacollegebihar.online/acb_brand_final.png",  
    "author": {
      "@type": "Organization",
      "name": post.author,
      "url": "https://www.apnacollegebihar.online/about"
    },  
    "publisher": {
      "@type": "Organization",
      "name": "Apna College Bihar",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.apnacollegebihar.online/logo-acb.png"
      }
    },
    "datePublished": post.date,
    "dateModified": post.date
  };

  return (
    <div className="min-h-screen bg-white font-['Inter'] pb-20">
      <SEO 
        title={`${post.title} | Apna College Bihar Blog`} 
        description={post.excerpt}
        schema={articleSchema}
      />
      
      {/* Article Header */}
      <article className="pt-24 pb-12 px-6 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto max-w-3xl">
          <button onClick={() => navigate('/blog')} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-blue-600 transition-colors mb-8">
            <ArrowLeft size={14} /> Back to Articles
          </button>
          
          <h1 className="text-3xl md:text-5xl font-[1000] text-slate-900 tracking-tighter leading-tight mb-6">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-slate-500">
            <div className="flex items-center gap-1.5">
              <Calendar size={16} className="text-blue-500"/> 
              {new Date(post.date).toLocaleDateString('en-IN', {day: 'numeric', month: 'long', year: 'numeric'})}
            </div>
            <div className="flex items-center gap-1.5">
              <User size={16} className="text-blue-500"/> 
              {post.author}
            </div>
            <div className="flex items-center gap-1.5">
              <Clock size={16} className="text-blue-500"/> 
              5 min read
            </div>
          </div>
        </div>
      </article>

      {/* Article Content */}
      <div className="container mx-auto max-w-3xl px-6 py-12">
        <div className="prose prose-slate prose-lg md:prose-xl prose-headings:font-[900] prose-headings:tracking-tight prose-headings:text-slate-900 prose-a:text-blue-600 max-w-none">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
        
        {/* Author Bio (E-E-A-T Signal) */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 border-2 border-blue-200 overflow-hidden">
              <User size={32} className="text-blue-500" />
            </div>
            <div>
              <h3 className="text-lg font-[900] text-slate-900 mb-1">{post.author}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-2">
                The Apna College Bihar Editorial Team consists of BEU alumni, educators, and placement experts dedicated to helping engineering students across Bihar excel in their academics and technical careers.
              </p>
              <div className="text-[10px] font-black uppercase tracking-widest text-blue-600">
                Editorial & Content Integrity Team
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-200 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Share this article</span>
            <button onClick={handleShare} className="flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors">
              <Share2 size={18} /> Share with friends
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
