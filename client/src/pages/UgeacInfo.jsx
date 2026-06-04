import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  BookOpen, HelpCircle, FileText, CheckCircle2, ChevronRight, 
  MapPin, ShieldAlert, Award, FileSpreadsheet, ListOrdered, Calendar 
} from 'lucide-react';
import SEO from '../components/SEO';

const ugeacPages = {
  'cutoff-2025': {
    title: "UGEAC Cutoff Rank 2025 | Overall Closing Ranks Bihar Engineering",
    description: "Official BCECEB UGEAC 2025 cutoff ranks for all 38 Bihar Government Engineering Colleges. Check branch-wise and category-wise opening & closing ranks.",
    heading: "UGEAC 2025 Cutoff Ranks Analysis",
    content: (
      <div className="space-y-6">
        <p className="text-slate-300 text-sm leading-relaxed font-semibold">
          The Bihar government engineering colleges cutoff ranks for UGEAC 2025 vary significantly based on institutional tier and branch popularity. Top-tier colleges like MIT Muzaffarpur and BCE Bhagalpur have competitive cutoffs, particularly for Computer Science & Engineering (CSE).
        </p>
        
        <div className="p-6 bg-slate-900/50 border border-white/5 rounded-2xl space-y-4">
          <h3 className="text-sm font-black text-white uppercase tracking-wider flex items-center gap-2">
            <Award className="text-blue-500" size={16} /> Top College CSE Cutoff Estimate (UR Round 1)
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-slate-400 font-bold uppercase tracking-wider">
                  <th className="pb-2">College</th>
                  <th className="pb-2 text-center">JEE Main Percentile</th>
                  <th className="pb-2 text-center">UGEAC UR Rank</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr>
                  <td className="py-2 text-white font-bold">MIT Muzaffarpur</td>
                  <td className="py-2 text-center text-slate-300">92+ Percentile</td>
                  <td className="py-2 text-center text-blue-400 font-black">#200 - #450</td>
                </tr>
                <tr>
                  <td className="py-2 text-white font-bold">BCE Bhagalpur</td>
                  <td className="py-2 text-center text-slate-300">90+ Percentile</td>
                  <td className="py-2 text-center text-blue-400 font-black">#400 - #650</td>
                </tr>
                <tr>
                  <td className="py-2 text-white font-bold">GCE Gaya</td>
                  <td className="py-2 text-center text-slate-300">85+ Percentile</td>
                  <td className="py-2 text-center text-blue-400 font-black">#700 - #1200</td>
                </tr>
                <tr>
                  <td className="py-2 text-white font-bold">DCE Darbhanga</td>
                  <td className="py-2 text-center text-slate-300">82+ Percentile</td>
                  <td className="py-2 text-center text-blue-400 font-black">#1000 - #1500</td>
                </tr>
                <tr>
                  <td className="py-2 text-white font-bold">NCE Chandi</td>
                  <td className="py-2 text-center text-slate-300">80+ Percentile</td>
                  <td className="py-2 text-center text-blue-400 font-black">#1200 - #1800</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="p-6 bg-blue-500/5 border border-blue-500/10 rounded-2xl">
          <h4 className="text-xs font-black text-white uppercase tracking-wider mb-2">Want to predict your college options?</h4>
          <p className="text-xs text-slate-300 mb-4">Use our advanced UGEAC college predictor to evaluate your options using actual 2024 and 2025 cutoff datasets.</p>
          <Link to="/dashboard/ugeac-predictor" className="inline-flex items-center gap-2 text-xs font-black text-blue-500 hover:text-blue-400 uppercase tracking-widest">
            Launch Predictor Tool <ChevronRight size={14} />
          </Link>
        </div>
      </div>
    )
  },
  'choice-filling-guide': {
    title: "UGEAC Choice Filling Strategy 2025 | College Locking Guide",
    description: "Master the UGEAC choice filling process. Learn how to arrange colleges, prioritize branches, and lock choices to secure the best possible engineering seat.",
    heading: "UGEAC Choice Filling Strategy & Guide",
    content: (
      <div className="space-y-6">
        <p className="text-slate-300 text-sm leading-relaxed font-semibold">
          Choice filling is the most crucial phase of UGEAC counselling. A wrong sequence can result in getting a lower-tier college despite having a good rank. Follow our data-driven strategy to arrange your preferences.
        </p>

        <div className="p-6 bg-slate-900/50 border border-white/5 rounded-2xl space-y-4">
          <h3 className="text-sm font-black text-white uppercase tracking-wider flex items-center gap-2">
            <ListOrdered className="text-blue-500" size={16} /> Strategy Checklist
          </h3>
          <ul className="space-y-3 text-xs text-slate-300 font-medium">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="text-blue-500 shrink-0 mt-0.5" size={14} />
              <span><strong>Dream Options First:</strong> Place colleges and branches that are slightly above your rank range in the top positions (e.g. MIT/BCE CSE).</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="text-blue-500 shrink-0 mt-0.5" size={14} />
              <span><strong>Realistic Options Middle:</strong> Put choices where you have a "Medium" or "High" probability of admission in the middle of your list.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="text-blue-500 shrink-0 mt-0.5" size={14} />
              <span><strong>Safe Options End:</strong> Keep at least 5-10 safe choices at the bottom to avoid remaining unallotted in Round 1.</span>
            </li>
          </ul>
        </div>

        <div className="p-6 bg-slate-900/50 border border-white/5 rounded-2xl">
          <h4 className="text-xs font-black text-white uppercase tracking-wider mb-2">Important Notice on Locking</h4>
          <p className="text-xs text-slate-400 leading-relaxed font-medium">
            Always lock your choices before the deadline. Unlocked choices will be automatically locked by the BCECE system, but it is highly recommended to manually verify and lock them yourself to prevent any technical errors.
          </p>
        </div>
      </div>
    )
  },
  'seat-allotment': {
    title: "UGEAC Seat Allotment Result 2025 | Check Allotment status",
    description: "Track UGEAC 2025 Round 1, Round 2, and Mop-Up seat allotment results. Get step-by-step instructions on checking allotment status and upgrading options.",
    heading: "UGEAC Seat Allotment Results Guide",
    content: (
      <div className="space-y-6">
        <p className="text-slate-300 text-sm leading-relaxed font-semibold">
          Once the choice filling window closes, BCECE Board processes allocations based on merit-cum-preference. Learn how to verify your allocation status and what actions to take next.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 bg-slate-900/40 border border-white/5 rounded-2xl space-y-2">
            <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest block">Option A: Freeze Seat</span>
            <p className="text-xs text-slate-300 font-medium leading-relaxed">
              If you are fully satisfied with your allotted college and branch, download the allotment letter, select "Freeze", and report to the Nodal Centre for document verification.
            </p>
          </div>
          <div className="p-5 bg-slate-900/40 border border-white/5 rounded-2xl space-y-2">
            <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest block">Option B: Slide/Upgrade</span>
            <p className="text-xs text-slate-300 font-medium leading-relaxed">
              If you wish to participate in subsequent rounds for a better option, opt for "Auto-Upgradation - Yes". You must still complete document verification at the Nodal Centre to secure your current seat.
            </p>
          </div>
        </div>

        <div className="p-6 bg-slate-900/50 border border-white/5 rounded-2xl space-y-2">
          <h4 className="text-xs font-black text-white uppercase tracking-wider">Important Note for Allotted Candidates</h4>
          <p className="text-xs text-slate-400 leading-relaxed font-semibold">
            Failure to report for Document Verification (DV) at the assigned Nodal Centre will result in the immediate cancellation of your allocated seat and disqualification from subsequent counselling rounds.
          </p>
        </div>
      </div>
    )
  },
  'merit-list': {
    title: "UGEAC Merit List 2025 | BCECEB Rank Card download",
    description: "Check the official BCECE Board UGEAC 2025 merit list and download your state rank card. Understand the relationship between JEE Main percentile and state ranks.",
    heading: "UGEAC Merit List & State Ranks",
    content: (
      <div className="space-y-6">
        <p className="text-slate-300 text-sm leading-relaxed font-semibold">
          The UGEAC merit list includes all registered candidates arranged in decreasing order of their JEE Main percentiles. This determines the official UGEAC UR and category ranks used for allotment.
        </p>

        <div className="p-6 bg-slate-900/50 border border-white/5 rounded-2xl space-y-4">
          <h3 className="text-xs font-black text-white uppercase tracking-widest">How to check UGEAC Rank?</h3>
          <ul className="space-y-3 text-xs text-slate-300 font-medium">
            <li className="flex items-start gap-2.5">
              <span className="text-blue-500 font-black">1.</span>
              <span>Visit the official BCECEB website (bceceboard.bihar.gov.in).</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-blue-500 font-black">2.</span>
              <span>Click on "Download Rank Card of UGEAC-2025".</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-blue-500 font-black">3.</span>
              <span>Enter your UGEAC ID and Date of Birth to view your ranks.</span>
            </li>
          </ul>
        </div>
      </div>
    )
  },
  'counselling-process': {
    title: "UGEAC Counselling Process 2025 | Step-by-Step guide",
    description: "Step-by-step roadmap for UGEAC 2025 Bihar Engineering Counselling. Learn about registration, choice locking, seat allotment, and admission procedures.",
    heading: "BCECE UGEAC Counselling Roadmap",
    content: (
      <div className="space-y-6">
        <p className="text-slate-300 text-sm leading-relaxed font-semibold">
          The complete UGEAC admissions lifecycle runs through 5 major phases. Understand the timeline and essential milestones to avoid missing deadlines.
        </p>

        <div className="space-y-4">
          {[
            { num: "1", title: "Online Registration & Payment", desc: "Register on BCECEB portal and pay the counseling fees (₹1200 for Gen/BC/EBC, ₹600 for SC/ST/DQ)." },
            { num: "2", title: "Merit List Publication", desc: "Download the UGEAC merit list containing state ranks based on JEE Main score." },
            { num: "3", title: "Online Option Entry (Choice Filling)", desc: "Lock preferences of colleges and branches on the counselling portal." },
            { num: "4", title: "Seat Allocation & Verification", desc: "Check allotment results, report to designated nodal centers for physical verification of documents." },
            { num: "5", title: "Final Admission", desc: "Report to the allotted engineering college, submit verified documents slip, and pay balance fees." }
          ].map(step => (
            <div key={step.num} className="flex gap-4 p-5 bg-slate-900/40 border border-white/5 rounded-2xl hover:border-blue-500/25 transition-all">
              <div className="text-2xl font-[1000] text-blue-500 leading-none">{step.num}</div>
              <div>
                <h4 className="text-xs font-black text-white uppercase tracking-wider">{step.title}</h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed font-semibold">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  },
  'document-verification': {
    title: "UGEAC Document Verification Checklist 2025 | Nodal Centres",
    description: "Find the list of documents required for UGEAC 2025 physical verification. Get information on Nodal reporting centres and verification procedures.",
    heading: "UGEAC Document Verification Guide",
    content: (
      <div className="space-y-6">
        <p className="text-slate-300 text-sm leading-relaxed font-semibold">
          After seat allocation, physical document verification at the assigned Nodal reporting centre is mandatory to secure your admission.
        </p>

        <div className="p-6 bg-slate-900/50 border border-white/5 rounded-2xl space-y-4">
          <h3 className="text-sm font-black text-white uppercase tracking-wider flex items-center gap-2">
            <CheckCircle2 className="text-emerald-500" size={16} /> Essential Original Documents Checklist
          </h3>
          <ul className="space-y-3.5 text-xs text-slate-300 font-semibold">
            <li className="flex items-center gap-3"><CheckCircle2 className="text-emerald-500 shrink-0" size={14} /> Printed Copy of Online filled Application Form (Part-A & Part-B)</li>
            <li className="flex items-center gap-3"><CheckCircle2 className="text-emerald-500 shrink-0" size={14} /> UGEAC 2025 Rank Card</li>
            <li className="flex items-center gap-3"><CheckCircle2 className="text-emerald-500 shrink-0" size={14} /> JEE Main 2025 Admit Card and Score Card</li>
            <li className="flex items-center gap-3"><CheckCircle2 className="text-emerald-500 shrink-0" size={14} /> Class 10th Certificate & Marksheet (Age Proof)</li>
            <li className="flex items-center gap-3"><CheckCircle2 className="text-emerald-500 shrink-0" size={14} /> Class 12th Certificate & Marksheet</li>
            <li className="flex items-center gap-3"><CheckCircle2 className="text-emerald-500 shrink-0" size={14} /> Domicile (Permanent Residence) Certificate of Bihar</li>
            <li className="flex items-center gap-3"><CheckCircle2 className="text-emerald-500 shrink-0" size={14} /> Caste / Category Certificate (if applicable)</li>
            <li className="flex items-center gap-3"><CheckCircle2 className="text-emerald-500 shrink-0" size={14} /> 6 Passport size photos (same as JEE application)</li>
            <li className="flex items-center gap-3"><CheckCircle2 className="text-emerald-500 shrink-0" size={14} /> Character and School Leaving Certificate (CLC)</li>
          </ul>
        </div>
      </div>
    )
  }
};

export default function UgeacInfo() {
  const { page } = useParams();
  
  const activePage = useMemo(() => {
    return ugeacPages[page] || ugeacPages['counselling-process'];
  }, [page]);

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 font-['Inter'] relative overflow-hidden">
      <SEO 
        title={activePage.title}
        description={activePage.description}
        url={`https://www.apnacollegebihar.online/ugeac/${page}`}
      />
      
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-600/10 via-transparent to-transparent pointer-events-none"></div>
      <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-4 py-12 relative z-10">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 mb-6">
          <Link to="/hub" className="hover:text-blue-500 transition-colors">Home</Link>
          <ChevronRight size={10} />
          <span className="text-slate-400">UGEAC Guide</span>
          <ChevronRight size={10} />
          <span className="text-slate-300">{page}</span>
        </div>

        {/* Hero Header */}
        <div className="bg-[#0f172a]/40 backdrop-blur-md border border-white/5 p-8 rounded-[2rem] shadow-2xl mb-8">
          <span className="px-2.5 py-1 bg-blue-500/15 border border-blue-500/20 text-blue-400 rounded-lg text-[9px] font-black uppercase tracking-widest block w-fit mb-4">Official BCECEB Info Portal</span>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tighter text-white uppercase leading-tight mb-4">{activePage.heading}</h1>
          <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Counselling assistance powered by Apna College Bihar</p>
        </div>

        {/* Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8">
            <div className="bg-[#0f172a]/30 border border-white/5 p-6 md:p-8 rounded-[2rem] shadow-xl">
              {activePage.content}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#0f172a]/30 border border-white/5 p-6 rounded-[2rem] shadow-xl space-y-4">
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest">UGEAC Guides</h3>
              <div className="flex flex-col gap-2.5">
                {Object.keys(ugeacPages).map(k => (
                  <Link
                    key={k}
                    to={`/ugeac/${k}`}
                    className={`flex items-center justify-between p-3.5 rounded-xl text-[10px] font-black uppercase tracking-widest border transition-all ${
                      page === k
                        ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-500/10'
                        : 'bg-slate-900/40 border-white/5 text-slate-400 hover:text-white hover:border-white/10'
                    }`}
                  >
                    <span>{k.replace('-', ' ')}</span>
                    <ChevronRight size={12} />
                  </Link>
                ))}
              </div>
            </div>

            {/* Support Link */}
            <div className="bg-gradient-to-br from-indigo-900/40 to-blue-900/40 border border-blue-500/15 p-6 rounded-[2rem] shadow-xl text-center space-y-4">
              <div className="w-12 h-12 bg-blue-600/15 rounded-2xl flex items-center justify-center text-blue-500 mx-auto border border-blue-500/20">
                <HelpCircle size={24} />
              </div>
              <div>
                <h4 className="text-xs font-black text-white uppercase tracking-tight">Need Live Counselling?</h4>
                <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider mt-1">Talk to advisors directly</p>
              </div>
              <a href="https://t.me/apnacollegebihar" target="_blank" rel="noreferrer" className="w-full flex items-center justify-center gap-2 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-black text-[9px] uppercase tracking-widest transition-all">
                Join Telegram
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
