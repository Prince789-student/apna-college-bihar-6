import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, User, Mail, Shield, BookOpen, Target, CheckCircle, Award } from 'lucide-react';
import SEO from '../components/SEO';

export default function Author() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-['Inter'] selection:bg-blue-500/30 pb-24">
      <SEO 
        title="Creator & Author - Prince Kumar | Apna College Bihar" 
        description="Learn about Prince Kumar, the Founder, Developer & Educational Content Creator behind Apna College Bihar."
      />
      
      {/* Header */}
      <div className="sticky top-0 z-50 bg-[#f8fafc]/90 backdrop-blur-xl border-b border-slate-200 px-6 py-4 flex items-center justify-between shadow-sm">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors group">
          <div className="p-2 bg-slate-100 group-hover:bg-blue-600/10 border border-slate-200 rounded-xl transition-all">
            <ChevronLeft size={20} className="text-blue-600" />
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest">Back</span>
        </button>
      </div>

      <div className="max-w-4xl mx-auto px-6 pt-12 space-y-12 animate-in fade-in duration-500">
        
        {/* 1. Hero Section */}
        <div className="text-center space-y-6">
          <div className="inline-flex p-4 bg-blue-600/10 border border-blue-500/20 text-blue-600 rounded-3xl shadow-sm mb-2">
            <User size={40} />
          </div>
          <div className="space-y-3">
            <p className="text-xs font-black text-blue-600 uppercase tracking-widest">Creator & Author</p>
            <h1 className="text-4xl md:text-6xl font-[1000] text-slate-900 tracking-tighter uppercase leading-none">
              Prince Kumar
            </h1>
            <p className="text-sm md:text-base font-bold text-slate-500 max-w-2xl mx-auto tracking-wide">
              Founder, Developer & Educational Content Creator at Apna College Bihar
            </p>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-[3rem] p-8 md:p-12 shadow-sm space-y-12">
           
           {/* 2. About the Creator */}
           <div className="space-y-4">
             <div className="flex items-center gap-3 text-blue-600 border-b border-slate-100 pb-4">
               <Award size={28} />
               <h2 className="text-2xl font-[1000] uppercase tracking-tight text-slate-900">About the Creator</h2>
             </div>
             <p className="text-sm font-medium text-slate-600 leading-relaxed">
               Prince Kumar created Apna College Bihar to solve the widespread problem of scattered academic resources for Bihar engineering students. Understanding the daily struggles of university life, Prince envisioned and built a single, trusted digital platform that consolidates essential study materials such as comprehensive notes, Previous Year Question Papers (PYQs), official BEU syllabus updates, counselling guidance, and powerful academic tools like the CGPA Calculator and UGEAC College Predictor.
             </p>
           </div>

           {/* 3. Mission Statement */}
           <div className="space-y-4">
             <div className="flex items-center gap-3 text-emerald-600 border-b border-slate-100 pb-4">
               <Target size={28} />
               <h2 className="text-2xl font-[1000] uppercase tracking-tight text-slate-900">Mission Statement</h2>
             </div>
             <p className="text-sm font-medium text-slate-600 leading-relaxed">
               Our primary mission is to empower engineering students across Bihar by ensuring they have uninterrupted access to accurate, reliable, and completely free educational resources. We believe that technology should bridge the gap between academic ambition and university success.
             </p>
           </div>

           {/* 4. Areas of Expertise */}
           <div className="space-y-4">
             <div className="flex items-center gap-3 text-indigo-600 border-b border-slate-100 pb-4">
               <BookOpen size={28} />
               <h2 className="text-2xl font-[1000] uppercase tracking-tight text-slate-900">Areas of Expertise</h2>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
               {[
                 "Bihar Engineering University (BEU)",
                 "UGEAC Counselling",
                 "Engineering Notes & PYQs",
                 "Academic Resource Management",
                 "Educational Technology Tools",
                 "Student Guidance"
               ].map((item, index) => (
                 <div key={index} className="flex items-center gap-3">
                   <CheckCircle size={18} className="text-blue-500 shrink-0" />
                   <span className="text-sm font-bold text-slate-700">{item}</span>
                 </div>
               ))}
             </div>
           </div>

           {/* 5. Editorial Policy */}
           <div className="space-y-4">
             <div className="flex items-center gap-3 text-purple-600 border-b border-slate-100 pb-4">
               <Shield size={28} />
               <h2 className="text-2xl font-[1000] uppercase tracking-tight text-slate-900">Editorial Policy</h2>
             </div>
             <p className="text-sm font-medium text-slate-600 leading-relaxed">
               Maintaining high E-E-A-T (Experience, Expertise, Authoritativeness, and Trustworthiness) standards is our top priority. All content provided on Apna College Bihar is meticulously researched using official sources whenever applicable, including:
             </p>
             <ul className="list-disc list-inside text-sm font-bold text-slate-700 space-y-2 pt-2 ml-2">
               <li>Bihar Engineering University (BEU)</li>
               <li>Bihar Combined Entrance Competitive Examination Board (BCECEB)</li>
               <li>All India Council for Technical Education (AICTE)</li>
               <li>Official College Notices</li>
             </ul>
             <p className="text-sm font-medium text-slate-600 leading-relaxed pt-2">
               Every piece of information, study material, and algorithm is reviewed and updated regularly to ensure maximum accuracy and relevance for our students.
             </p>
           </div>

           {/* 7. Trust & Transparency */}
           <div className="space-y-4">
             <div className="flex items-center gap-3 text-amber-500 border-b border-slate-100 pb-4">
               <CheckCircle size={28} />
               <h2 className="text-2xl font-[1000] uppercase tracking-tight text-slate-900">Trust & Transparency</h2>
             </div>
             <div className="space-y-3">
               <p className="text-sm font-bold text-slate-700 flex items-start gap-2">
                 <span className="text-amber-500 mt-0.5">•</span> Independent Educational Platform
               </p>
               <p className="text-sm font-bold text-slate-700 flex items-start gap-2">
                 <span className="text-amber-500 mt-0.5">•</span> Not affiliated with BEU, BCECEB, or any government organization unless officially stated.
               </p>
               <p className="text-sm font-bold text-slate-700 flex items-start gap-2">
                 <span className="text-amber-500 mt-0.5">•</span> Unwavering commitment to academic accuracy, safety, and transparency.
               </p>
             </div>
           </div>

           {/* 6. Contact Information */}
           <div className="space-y-4">
             <div className="flex items-center gap-3 text-red-500 border-b border-slate-100 pb-4">
               <Mail size={28} />
               <h2 className="text-2xl font-[1000] uppercase tracking-tight text-slate-900">Contact & Feedback</h2>
             </div>
             <p className="text-sm font-medium text-slate-600 leading-relaxed">
               We strongly encourage our users to report any errors, suggest improvements, or provide feedback. If you have any inquiries regarding our content or tools, please feel free to reach out.
             </p>
             <a href="mailto:prince86944@gmail.com" className="inline-flex items-center gap-3 px-6 py-4 bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-200 rounded-2xl text-blue-600 font-bold text-sm transition-colors w-fit">
               <Mail size={18} />
               prince86944@gmail.com
             </a>
           </div>

           {/* 8. Closing Statement */}
           <div className="pt-6 mt-6 border-t border-slate-100 text-center">
             <p className="text-sm font-bold text-slate-500 leading-relaxed max-w-2xl mx-auto">
               We are constantly innovating and continuously improving Apna College Bihar for the ultimate benefit of engineering students across the state. Together, we are building the future of technical education in Bihar.
             </p>
           </div>

        </div>
      </div>
    </div>
  );
}
