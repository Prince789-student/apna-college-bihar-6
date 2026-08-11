import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, MessageCircle, Youtube, Send, CheckCircle2, AlertTriangle, HelpCircle, ChevronDown } from 'lucide-react';
import SEO from '../components/SEO';

export default function Contact() {
  const navigate = useNavigate();
  const [activeFaq, setActiveFaq] = useState(null);
  const [iframeLoading, setIframeLoading] = useState(true);

  const faqs = [
    {
      q: "How accurate is the UGEAC Counselling Predictor?",
      a: "Our predictor utilizes historical cutoff data from BCECEB across multiple rounds. While it provides an extremely reliable estimate based on your JEE Main rank and category, official university allocations will always be final."
    },
    {
      q: "Are the study notes and PYQs strictly aligned with BEU syllabus?",
      a: "Yes! All notes, PYQs, and study materials are curated and verified by senior scholars specifically for Bihar Engineering University (BEU) semester exams."
    },
    {
      q: "How does the BEU CGPA & SGPA Calculator work?",
      a: "It incorporates BEU's exact credit and grading formula (e.g., A+=10, A=9, B+=8, etc.) to give you 100% accurate semester and cumulative grade point averages."
    },
    {
      q: "Can I contribute my own study notes to Apna College Bihar?",
      a: "Absolutely! We highly encourage student contributors. You can reach out to us via our support email or WhatsApp channel to submit high-quality notes for your branch."
    },
    {
      q: "Is Apna College Bihar completely free to use?",
      a: "Yes, Apna College Bihar is dedicated to student welfare and provides its core study engine, calculators, and counseling tools completely free of charge."
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-['Inter'] selection:bg-blue-500/30 pb-24">
      <SEO 
        title="Contact Us | Apna College Bihar" 
        description="Get in touch with Apna College Bihar support. 24/7 assistance for Bihar Engineering students, BEU exam queries, and UGEAC counselling."
      />
      {/* Header */}
      <div className="sticky top-0 z-50 bg-[#f8fafc]/90 backdrop-blur-xl border-b border-slate-200 px-6 py-4 flex items-center justify-between shadow-sm">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors group">
          <div className="p-2 bg-slate-100 group-hover:bg-blue-600/10 border border-slate-200 rounded-xl transition-all">
            <ChevronLeft size={20} className="text-blue-600" />
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest">Back</span>
        </button>
        <div className="flex items-center gap-3">
          <img src="/logo-acb.png?v=99" alt="ACB Logo" className="w-8 h-8 rounded-xl border border-slate-200 shadow-sm object-cover" />
          <span className="text-[10px] font-black tracking-tighter uppercase text-slate-800">ACB Hub</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-6 pt-12 space-y-16 animate-in fade-in duration-500">
        <div className="text-center space-y-6">
          <div className="inline-flex p-4 bg-orange-600/10 border border-orange-500/20 text-orange-600 rounded-3xl shadow-sm mb-2 animate-bounce">
            <MessageCircle size={40} />
          </div>
          <div className="space-y-2">
            <p className="text-[10px] font-black text-orange-600 uppercase tracking-[0.4em]">24/7 Student Assistance</p>
            <h1 className="text-3xl md:text-6xl font-[1000] text-slate-900 tracking-tighter uppercase leading-none">
              Support Center
            </h1>
          </div>
          <p className="text-sm md:text-base font-medium text-slate-600 max-w-2xl mx-auto leading-relaxed pt-2">
            Have a question, facing an issue, or want to suggest a new feature? The Apna College Bihar support team and developer community are always here to help you succeed.
          </p>
        </div>

        {/* Direct Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div 
            onClick={() => window.open('https://whatsapp.com/channel/0029VbC6FsH3wtb5UEDvrW0a', '_blank')}
            className="bg-white border border-slate-200 hover:border-emerald-500/50 rounded-[2.5rem] p-8 shadow-sm space-y-4 cursor-pointer transition-all hover:-translate-y-1 group"
          >
            <div className="w-12 h-12 bg-emerald-600/10 text-emerald-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
              <MessageCircle size={24} />
            </div>
            <div>
              <h3 className="text-lg font-[1000] uppercase tracking-tight text-slate-900">WhatsApp Channel</h3>
              <p className="text-xs font-medium text-slate-500 pt-1">Join our official channel for instant exam updates and notes alerts.</p>
            </div>
            <span className="inline-block text-[10px] font-black text-emerald-600 uppercase tracking-widest pt-2 group-hover:underline">Connect Now →</span>
          </div>

          <div 
            onClick={() => window.open('https://youtube.com/@apnacollegebihar', '_blank')}
            className="bg-white border border-slate-200 hover:border-red-500/50 rounded-[2.5rem] p-8 shadow-sm space-y-4 cursor-pointer transition-all hover:-translate-y-1 group"
          >
            <div className="w-12 h-12 bg-red-600/10 text-red-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
              <Youtube size={24} />
            </div>
            <div>
              <h3 className="text-lg font-[1000] uppercase tracking-tight text-slate-900">YouTube Channel</h3>
              <p className="text-xs font-medium text-slate-500 pt-1">Subscribe for detailed BEU exam strategies and counselling walkthroughs.</p>
            </div>
            <span className="inline-block text-[10px] font-black text-red-600 uppercase tracking-widest pt-2 group-hover:underline">Watch Videos →</span>
          </div>

          <div 
            onClick={() => window.location.href = 'mailto:admin@apnacollegebihar.online'}
            className="bg-white border border-slate-200 hover:border-blue-500/50 rounded-[2.5rem] p-8 shadow-sm space-y-4 cursor-pointer transition-all hover:-translate-y-1 group"
          >
            <div className="w-12 h-12 bg-blue-600/10 text-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
              <Send size={24} />
            </div>
            <div>
              <h3 className="text-lg font-[1000] uppercase tracking-tight text-slate-900">Official Email</h3>
              <p className="text-xs font-medium text-slate-500 pt-1">Reach out to admin@apnacollegebihar.online for official queries and support.</p>
            </div>
            <span className="inline-block text-[10px] font-black text-blue-600 uppercase tracking-widest pt-2 group-hover:underline">Send Email →</span>
          </div>
        </div>

        {/* Contact Form & FAQ Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-6 items-start">
          {/* Contact Form - Embedded Google Form */}
          <div className="bg-white border border-slate-200 rounded-[2.5rem] p-4 md:p-6 shadow-md relative min-h-[600px] flex items-center justify-center overflow-hidden">
            {iframeLoading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-white rounded-[2.5rem] z-10 animate-in fade-in duration-300">
                <div className="w-10 h-10 border-4 border-slate-200 border-t-blue-500 rounded-full animate-spin mb-3"></div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Loading Form...</p>
              </div>
            )}
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSdombJtFUikEw2fHDkOKVXeu-z6F8siD5FGYH1-HtV1gpGJJQ/viewform?embedded=true" 
              width="100%" 
              height="800" 
              frameBorder="0" 
              marginHeight="0" 
              marginWidth="0"
              className="rounded-2xl bg-white w-full transition-opacity duration-500"
              title="Contact Us Form"
              onLoad={() => setIframeLoading(false)}
              style={{ opacity: iframeLoading ? 0 : 1 }}
            >
              Loading…
            </iframe>
          </div>
          <div className="space-y-8">
            {/* Editorial Mission Statement (EEAT) */}
            <div className="p-6 bg-white border border-slate-200 rounded-[2rem] shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-indigo-600 mb-2">
                <CheckCircle2 size={20} />
                <h3 className="text-sm font-[1000] uppercase tracking-tight text-slate-900">Our Editorial Mission</h3>
              </div>
              <p className="text-xs font-medium text-slate-600 leading-relaxed">
                Apna College Bihar is committed to providing accurate, unbiased, and highly reliable educational resources. Our support team is trained to provide guidance based exclusively on official BEU and BCECEB documentation. If you find any discrepancies in our notes, syllabus, or predictors, please report them using the form. Our editorial team reviews and rectifies reported inaccuracies within 48 hours to maintain the highest standards of academic integrity.
              </p>
            </div>

          {/* FAQ Accordion */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-[1000] uppercase tracking-tighter text-slate-900 flex items-center gap-2">
                <HelpCircle size={24} className="text-blue-600" /> Frequently Asked Questions
              </h2>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Instant answers to common queries</p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, i) => {
                const isOpen = activeFaq === i;
                return (
                  <div 
                    key={i} 
                    className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all shadow-sm"
                  >
                    <button 
                      onClick={() => setActiveFaq(isOpen ? null : i)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                    >
                      <span className="text-xs md:text-sm font-[1000] uppercase tracking-tight text-slate-900 pr-2">{faq.q}</span>
                      <ChevronDown size={18} className={`text-slate-500 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-blue-600' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs font-medium text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-300">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Assistance Note */}
            <div className="p-6 bg-blue-600/10 border border-blue-500/20 rounded-3xl space-y-2 text-left">
              <p className="text-xs font-bold text-slate-800 flex items-center gap-2">
                <AlertTriangle size={16} className="text-blue-600" /> Still Need Assistance?
              </p>
              <p className="text-[11px] font-medium text-slate-600 leading-relaxed">
                If your query isn't listed in the FAQ, feel free to use the support ticket form or message us directly on our official WhatsApp channel.
              </p>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="text-center pt-8 border-t border-slate-200 space-y-3 pb-12">
          <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">BEU - APNA COLLEGE BIHAR</p>
          <p className="text-[9px] font-bold text-slate-500">Committed to 100% Student Satisfaction & Academic Excellence</p>
        </div>
      </div>
      </div>
    </div>
  );
}
