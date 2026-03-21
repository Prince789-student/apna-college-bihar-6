import React from 'react';
import { Target, Users, BookOpen, Trophy } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="max-w-4xl mx-auto p-6 md:p-12 text-slate-300 space-y-12 animate-in fade-in duration-500">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-[1000] text-white tracking-widest uppercase">About Us</h1>
        <p className="text-lg text-blue-400 font-black uppercase tracking-widest">Apna College Bihar (ACB)</p>
      </div>

      <div className="bg-[#0d121f] p-8 rounded-[3rem] border border-slate-800 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-blue-600/10 rounded-full blur-[80px] pointer-events-none"></div>
        <p className="relative z-10 leading-relaxed text-lg">
          <strong>Apna College Bihar (ACB)</strong> Bihar Engineering Students (BEU/AKU) ke liye banaya gaya ek dedicated online platform hai. Hamara main goal Bihar ke engineering students ko **FREE aur High-Quality** study resources provide karna hai.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { icon: <Target className="text-orange-500" />, title: "Our Mission", desc: "Bihar ke har engineering student ko resources provider banna aur unki padhai asan karna." },
          { icon: <BookOpen className="text-blue-500" />, title: "Free Notes", desc: "Sahi aur verified handwritten notes students tak pahuchana." },
          { icon: <Users className="text-emerald-500" />, title: "Community", desc: "Ek aisi community banana jahan bacche milkar solve kar sake aur ek dusre ki madad karein." },
          { icon: <Trophy className="text-purple-500" />, title: "Excellence", desc: "Bihar ke students ko global level par competitive banana." }
        ].map((item, i) => (
          <div key={i} className="bg-[#0d121f] p-6 rounded-3xl border border-slate-800 hover:border-blue-500 transition-all">
             <div className="mb-4">{item.icon}</div>
             <h3 className="text-xl font-black text-white uppercase mb-2">{item.title}</h3>
             <p className="text-sm font-bold text-slate-500">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center space-y-4">
         <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Founded by Bihar Engineering Students</p>
         <p className="text-xs text-slate-600 italic">"Gyan bantne se badhta hai!"</p>
      </div>
    </div>
  );
}
