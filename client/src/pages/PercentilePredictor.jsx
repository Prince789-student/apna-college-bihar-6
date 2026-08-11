import React, { useState, useEffect } from 'react';
import { colleges } from '../UgeacData';
import SEO from '../components/SEO';
import { Calculator, Search, ShieldCheck } from 'lucide-react';

export default function PercentilePredictor() {
  const [percentile, setPercentile] = useState('');
  const [category, setCategory] = useState('UR');
  const [gender, setGender] = useState('Male');
  const [results, setResults] = useState([]);
  const [cutoffs, setCutoffs] = useState([]);

  useEffect(() => {
    fetch('/data/cutoffs.json')
      .then(res => res.json())
      .then(json => setCutoffs(json.cutoffs2025 || []))
      .catch(err => console.error("Error loading cutoffs:", err));
  }, []);

  const handlePredict = (e) => {
    e.preventDefault();
    if (!percentile || isNaN(percentile)) return;

    // AIR Rank estimation
    const air = Math.floor((100 - parseFloat(percentile)) * 14000);
    
    // Estimate UGEAC Rank
    let ugeacRank = 10000;
    const UGEAC_RANK_MAP = [
      { ur: 4, air: 28003 }, { ur: 13, air: 50299 }, { ur: 70, air: 81272 }, 
      { ur: 109, air: 92809 }, { ur: 156, air: 100028 }, { ur: 215, air: 109032 }, 
      { ur: 333, air: 127662 }, { ur: 436, air: 140082 }, { ur: 525, air: 150732 }, 
      { ur: 617, air: 162821 }, { ur: 716, air: 171028 }, { ur: 816, air: 181269 }, 
      { ur: 914, air: 188077 }, { ur: 1012, air: 197425 }, { ur: 1115, air: 209122 }, 
      { ur: 1209, air: 219690 }, { ur: 1307, air: 229952 }, { ur: 1404, air: 238780 }, 
      { ur: 1507, air: 247321 }, { ur: 1601, air: 257341 }, { ur: 1714, air: 268036 }, 
      { ur: 1821, air: 278080 }, { ur: 1930, air: 288768 }, { ur: 2041, air: 297962 }, 
      { ur: 2137, air: 306613 }, { ur: 2243, air: 315619 }, { ur: 2333, air: 323379 }, 
      { ur: 2425, air: 330324 }, { ur: 2522, air: 339013 }, { ur: 2615, air: 347652 }, 
      { ur: 2711, air: 355967 }, { ur: 2808, air: 364892 }, { ur: 2901, air: 373625 }, 
      { ur: 3003, air: 383352 }, { ur: 3101, air: 392168 }, { ur: 3207, air: 402310 }, 
      { ur: 3308, air: 413189 }, { ur: 3400, air: 421323 }, { ur: 3501, air: 430878 }, 
      { ur: 3596, air: 440370 }, { ur: 3693, air: 449449 }, { ur: 3795, air: 458443 }, 
      { ur: 3894, air: 467591 }, { ur: 3992, air: 476591 }, { ur: 4089, air: 484050 }, 
      { ur: 4184, air: 492240 }, { ur: 4288, air: 501868 }, { ur: 4377, air: 508894 }, 
      { ur: 4474, air: 518100 }, { ur: 4581, air: 529594 }, { ur: 4680, air: 542092 }, 
      { ur: 4776, air: 550964 }, { ur: 4876, air: 559448 }, { ur: 4966, air: 568797 }, 
      { ur: 5056, air: 577816 }, { ur: 5153, air: 587447 }, { ur: 5257, air: 597045 }, 
      { ur: 5353, air: 606934 }, { ur: 5441, air: 620541 }, { ur: 5542, air: 630524 }, 
      { ur: 5641, air: 641360 }, { ur: 5737, air: 651370 }, { ur: 5843, air: 661098 }, 
      { ur: 5946, air: 673598 }, { ur: 6056, air: 686974 }, { ur: 6159, air: 697844 }, 
      { ur: 6256, air: 707967 }, { ur: 6366, air: 720052 }, { ur: 6468, air: 732511 }, 
      { ur: 6582, air: 743681 }, { ur: 6692, air: 757517 }, { ur: 6800, air: 768611 }, 
      { ur: 6919, air: 781525 }, { ur: 7036, air: 795064 }, { ur: 7141, air: 806823 }, 
      { ur: 7245, air: 819493 }, { ur: 7360, air: 833200 }, { ur: 7466, air: 848290 }, 
      { ur: 7570, air: 859488 }, { ur: 7686, air: 874752 }, { ur: 7797, air: 888309 }, 
      { ur: 7912, air: 903348 }, { ur: 8026, air: 920910 }, { ur: 8130, air: 933806 }, 
      { ur: 8229, air: 948876 }, { ur: 8334, air: 965845 }, { ur: 8428, air: 978036 }, 
      { ur: 8531, air: 993492 }, { ur: 8643, air: 1010934 }, { ur: 8749, air: 1024049 }, 
      { ur: 8852, air: 1040387 }, { ur: 8951, air: 1055816 }, { ur: 9057, air: 1070983 }, 
      { ur: 9161, air: 1091239 }, { ur: 9269, air: 1108363 }, { ur: 9364, air: 1126814 }, 
      { ur: 9469, air: 1145041 }, { ur: 9577, air: 1167857 }, { ur: 9674, air: 1183901 }, 
      { ur: 9771, air: 1197906 }, { ur: 9873, air: 1219504 }, { ur: 9967, air: 1242227 }
    ];

    if (air <= UGEAC_RANK_MAP[0].air) {
      ugeacRank = Math.max(1, Math.floor((air / UGEAC_RANK_MAP[0].air) * UGEAC_RANK_MAP[0].ur));
    } else {
      let found = false;
      for (let i = 0; i < UGEAC_RANK_MAP.length - 1; i++) {
        const p1 = UGEAC_RANK_MAP[i], p2 = UGEAC_RANK_MAP[i+1];
        if (air >= p1.air && air <= p2.air) {
          ugeacRank = Math.floor(p1.ur + ((air - p1.air) / (p2.air - p1.air)) * (p2.ur - p1.ur));
          found = true;
          break;
        }
      }
      if (!found) {
        const last = UGEAC_RANK_MAP[UGEAC_RANK_MAP.length - 1];
        ugeacRank = Math.floor(last.ur + (air - last.air) * 0.008);
      }
    }

    const matches = cutoffs.filter(c => {
      return c.category === category && 
             (c.seatType || c.seat_type || 'General') === (gender === 'Female' ? 'Female' : 'General') && 
             c.closing >= ugeacRank;
    });

    matches.sort((a, b) => a.closing - b.closing);
    setResults(matches.slice(0, 30));
  };

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 font-['Inter'] p-6 md:p-12 relative overflow-hidden">
      <SEO 
        title="JEE Main Percentile Predictor | Apna College Bihar"
        description="Predict your Bihar Engineering college dynamically based on JEE Main percentile." />
      <div className="max-w-4xl mx-auto space-y-8 relative z-10">
        <div className="text-center space-y-4">
          <div className="inline-flex p-3 bg-indigo-600/10 text-indigo-500 rounded-2xl border border-indigo-500/20">
            <Calculator size={32} />
          </div>
          <h1 className="text-3xl md:text-5xl font-[1000] tracking-tighter text-white uppercase leading-none">JEE Percentile Predictor</h1>
          <p className="text-slate-400 text-xs md:text-sm font-bold uppercase tracking-widest">Evaluate your dynamic UGEAC options matching percentile</p>
        </div>

        <form onSubmit={handlePredict} className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-slate-900/40 border border-white/5 p-6 rounded-3xl">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">JEE Percentile</label>
            <input 
              type="text" 
              value={percentile} 
              onChange={(e) => setPercentile(e.target.value)} 
              placeholder="e.g. 85.5" 
              className="w-full bg-[#0a0f1d] border border-white/10 rounded-2xl p-4 text-white text-xs font-bold outline-none focus:border-indigo-500/50" 
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Category</label>
            <select 
              value={category} 
              onChange={(e) => setCategory(e.target.value)} 
              className="w-full bg-[#0a0f1d] border border-white/10 rounded-2xl p-4 text-white text-xs font-bold outline-none"
            >
              {['UR', 'EBC', 'BC', 'SC', 'ST', 'EWS'].map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Gender / Seat Type</label>
            <select 
              value={gender} 
              onChange={(e) => setGender(e.target.value)} 
              className="w-full bg-[#0a0f1d] border border-white/10 rounded-2xl p-4 text-white text-xs font-bold outline-none"
            >
              <option value="Male">General / Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="md:col-span-3">
            <button type="submit" className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all">Predict Eligible Options</button>
          </div>
        </form>

        {results.length > 0 && (
          <div className="bg-slate-900/20 border border-white/5 rounded-3xl p-6 overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-white/10 text-slate-400 font-bold uppercase text-[9px] tracking-wider">
                  <th className="pb-3">College</th>
                  <th className="pb-3">Branch</th>
                  <th className="pb-3">Estimated Closing Rank</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-300">
                {results.map((r, i) => (
                  <tr key={i}>
                    <td className="py-3 font-bold">{r.collegeShort}</td>
                    <td className="py-3">{r.branch}</td>
                    <td className="py-3 text-indigo-400 font-black">{r.closing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* ── Educational SEO Content ── */}
      <div className="bg-[#0f172a]/50 p-8 md:p-12 rounded-[2.5rem] border border-white/5 mt-12 mx-auto max-w-4xl prose prose-invert max-w-none shadow-sm mb-12 relative z-20 text-left">
        <h2 className="text-2xl font-black text-white uppercase tracking-tighter mb-4">JEE Main Percentile to College Predictor (Bihar UGEAC)</h2>
        <p className="text-slate-300">
          Securing a good JEE Main Percentile is just the first step. For students participating in the official BCECEB UGEAC counseling process, predicting which Bihar Engineering University (BEU) college you might get can be extremely stressful. Our <strong>JEE Main Percentile Predictor</strong> takes the guesswork out of the equation, providing instant, data-driven college insights.
        </p>

        <h3 className="text-xl font-bold text-white mt-8 mb-4">How Does the Percentile Predictor Work?</h3>
        <p className="text-slate-300">
          This powerful tool uses verified historical cut-off data from BCECEB for all participating Government Engineering Colleges (GECs) in Bihar. By entering your expected or actual JEE Main percentile, our algorithm first estimates your All India Rank (AIR), and then matches it against past closing ranks across various categories (UR, BC, EBC, SC, ST, EWS). 
        </p>
        
        <h3 className="text-xl font-bold text-white mt-8 mb-4">Why is Percentile Normalization Important?</h3>
        <p className="text-slate-300">
          Since JEE Main is conducted in multiple shifts over several days, the National Testing Agency (NTA) uses a strict normalization process to calculate your final percentile score. This ensures that no student is disadvantaged due to a tougher exam shift. When applying for UGEAC, your JEE Main rank (derived directly from your percentile) is the sole criterion for admission into top-tier colleges like BCE Bhagalpur, MIT Muzaffarpur, and NCE Chandi.
        </p>

        <h3 className="text-xl font-bold text-white mt-8 mb-4">Maximizing Your Chances in UGEAC</h3>
        <p className="text-slate-300">
          Even with a low percentile, smart choice filling can secure you a seat in a good engineering college. We recommend exploring newly established GECs or considering core branches like Civil or Mechanical, which often have lower cutoff percentiles compared to Computer Science Engineering (CSE). Use this predictor repeatedly to finalize your priority list before the UGEAC portal locks your choices.
        </p>
      </div>

    </div>
  );
}
