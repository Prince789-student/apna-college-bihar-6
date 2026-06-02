import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, MessageCircle, Youtube, Mail, Send, CheckCircle2, AlertTriangle, HelpCircle, ChevronDown, Phone } from 'lucide-react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

export default function Contact() {
  const navigate = useNavigate();
  const [activeFaq, setActiveFaq] = useState(null);

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
    <div className="min-h-screen bg-[#0a0f1d] text-white font-['Inter'] selection:bg-blue-500/30 pb-24">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-[#0a0f1d]/90 backdrop-blur-xl border-b border-white/10 px-6 py-4 flex items-center justify-between shadow-2xl">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group">
          <div className="p-2 bg-white/5 group-hover:bg-blue-600/20 border border-white/10 rounded-xl transition-all">
            <ChevronLeft size={20} className="text-blue-400" />
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest">Back</span>
        </button>
        <div className="flex items-center gap-3">
          <img src="/logo-acb.png?v=99" alt="ACB Logo" className="w-8 h-8 rounded-xl border border-white/10 shadow-lg object-cover" />
          <span className="text-[10px] font-black tracking-tighter uppercase text-slate-200">ACB Hub</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-6 pt-12 space-y-16 animate-in fade-in duration-500">
        <div className="text-center space-y-6">
          <div className="inline-flex p-4 bg-orange-600/10 border border-orange-500/20 text-orange-400 rounded-3xl shadow-2xl mb-2 animate-bounce">
            <MessageCircle size={40} />
          </div>
          <div className="space-y-2">
            <p className="text-[10px] font-black text-orange-400 uppercase tracking-[0.4em]">24/7 Student Assistance</p>
            <h1 className="text-3xl md:text-6xl font-[1000] text-white tracking-tighter uppercase leading-none">
              Support Center
            </h1>
          </div>
          <p className="text-sm md:text-base font-medium text-slate-300 max-w-2xl mx-auto leading-relaxed pt-2">
            Have a question, facing an issue, or want to suggest a new feature? The Apna College Bihar support team and developer community are always here to help you succeed.
          </p>
        </div>

        {/* Direct Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div 
            onClick={() => window.open('https://whatsapp.com/channel/0029VbC6FsH3wtb5UEDvrW0a', '_blank')}
            className="bg-[#0d1526] border border-white/10 hover:border-emerald-500/50 rounded-[2.5rem] p-8 shadow-2xl space-y-4 cursor-pointer transition-all hover:-translate-y-1 group"
          >
            <div className="w-12 h-12 bg-emerald-600/20 text-emerald-400 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
              <MessageCircle size={24} />
            </div>
            <div>
              <h3 className="text-lg font-[1000] uppercase tracking-tight text-white">WhatsApp Channel</h3>
              <p className="text-xs font-medium text-slate-400 pt-1">Join our official channel for instant exam updates and notes alerts.</p>
            </div>
            <span className="inline-block text-[10px] font-black text-emerald-400 uppercase tracking-widest pt-2 group-hover:underline">Connect Now →</span>
          </div>

          <div 
            onClick={() => window.open('https://youtube.com/@apnacollegebihar', '_blank')}
            className="bg-[#0d1526] border border-white/10 hover:border-red-500/50 rounded-[2.5rem] p-8 shadow-2xl space-y-4 cursor-pointer transition-all hover:-translate-y-1 group"
          >
            <div className="w-12 h-12 bg-red-600/20 text-red-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
              <Youtube size={24} />
            </div>
            <div>
              <h3 className="text-lg font-[1000] uppercase tracking-tight text-white">YouTube Channel</h3>
              <p className="text-xs font-medium text-slate-400 pt-1">Subscribe for detailed BEU exam strategies and counselling walkthroughs.</p>
            </div>
            <span className="inline-block text-[10px] font-black text-red-500 uppercase tracking-widest pt-2 group-hover:underline">Watch Videos →</span>
          </div>

          <div 
            onClick={() => window.open('https://t.me/apnacollegebihar', '_blank')}
            className="bg-[#0d1526] border border-white/10 hover:border-blue-500/50 rounded-[2.5rem] p-8 shadow-2xl space-y-4 cursor-pointer transition-all hover:-translate-y-1 group"
          >
            <div className="w-12 h-12 bg-blue-600/20 text-blue-400 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
              <Send size={24} />
            </div>
            <div>
              <h3 className="text-lg font-[1000] uppercase tracking-tight text-white">Telegram Channel</h3>
              <p className="text-xs font-medium text-slate-400 pt-1">Join our active Telegram community for PDF notes and instant discussion.</p>
            </div>
            <span className="inline-block text-[10px] font-black text-blue-400 uppercase tracking-widest pt-2 group-hover:underline">Join Telegram →</span>
          </div>
        </div>

        {/* Contact Form & FAQ Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-6 items-start">
          {/* Contact Form - Embedded Google Form */}
          <div className="bg-[#0d1526] border border-white/10 rounded-[2.5rem] p-4 md:p-6 shadow-2xl overflow-hidden">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSdombJtFUikEw2fHDkOKVXeu-z6F8siD5FGYH1-HtV1gpGJJQ/viewform?embedded=true" 
              width="100%" 
              height="1852" 
              frameBorder="0" 
              marginHeight="0" 
              marginWidth="0"
              className="rounded-2xl bg-white w-full"
              title="Contact Us Form"
            >
              Loading…
            </iframe>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-[1000] uppercase tracking-tighter text-white flex items-center gap-2">
                <HelpCircle size={24} className="text-blue-400" /> Frequently Asked Questions
              </h2>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Instant answers to common queries</p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, i) => {
                const isOpen = activeFaq === i;
                return (
                  <div 
                    key={i} 
                    className="bg-[#0d1526] border border-white/10 rounded-2xl overflow-hidden transition-all shadow-lg"
                  >
                    <button 
                      onClick={() => setActiveFaq(isOpen ? null : i)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-white/5 transition-colors"
                    >
                      <span className="text-xs md:text-sm font-[1000] uppercase tracking-tight text-white pr-2">{faq.q}</span>
                      <ChevronDown size={18} className={`text-slate-400 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-blue-400' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs font-medium text-slate-300 leading-relaxed border-t border-white/5 animate-in fade-in duration-300">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Assistance Note */}
            <div className="p-6 bg-blue-600/10 border border-blue-500/20 rounded-3xl space-y-2 text-left">
              <p className="text-xs font-bold text-slate-200 flex items-center gap-2">
                <AlertTriangle size={16} className="text-blue-400" /> Still Need Assistance?
              </p>
              <p className="text-[11px] font-medium text-slate-400 leading-relaxed">
                If your query isn't listed in the FAQ, feel free to use the support ticket form or message us directly on our official WhatsApp channel.
              </p>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="text-center pt-8 border-t border-white/10 space-y-3 pb-12">
          <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">GEC SHEIKHPURA - APNA COLLEGE BIHAR</p>
          <p className="text-[9px] font-bold text-slate-600">Committed to 100% Student Satisfaction & Academic Excellence</p>
        </div>
      </div>
    </div>
  );
}
