import React from 'react';
import { BookOpen, MapPin, GraduationCap, Building2, Briefcase } from 'lucide-react';
import Reveal from './Reveal';

export default function HomeEducationalGuide() {
  return (
    <section className="py-20 px-6 md:px-16 bg-white border-t border-slate-200">
      <Reveal delay={100}>
        <div className="container mx-auto max-w-5xl prose prose-slate md:prose-lg prose-headings:font-[900] prose-headings:text-slate-900 prose-a:text-blue-600 prose-img:rounded-xl">
          <div className="text-center mb-16 not-prose">
            <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px]">Ultimate Guide</span>
            <h2 className="text-3xl md:text-5xl font-[1000] tracking-tighter uppercase text-slate-900 mt-4">
              Bihar Engineering & BEU Complete Guide
            </h2>
            <p className="text-slate-500 font-medium text-sm md:text-base max-w-2xl mx-auto mt-4">
              Everything you need to know about B.Tech admission in Bihar, UGEAC counselling, BEU grading systems, and placement realities across government engineering colleges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            {/* Main Content Area */}
            <div className="md:col-span-8 space-y-12">
              
              {/* Admission Guide */}
              <div id="admission" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-6 not-prose">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                    <GraduationCap size={24} />
                  </div>
                  <h3 className="text-2xl font-[900] text-slate-900 uppercase tracking-tight m-0">Bihar Engineering Admission Guide</h3>
                </div>
                <p>
                  Admission to Government Engineering Colleges (GECs) in Bihar is primarily conducted through the <strong>UGEAC (Undergraduate Engineering Admission Counselling)</strong>, which is managed by the Bihar Combined Entrance Competitive Examination Board (BCECEB). Unlike many other states, Bihar relies heavily on the JEE Main score for B.Tech admissions rather than conducting its own entrance exam for the majority of the seats.
                </p>
                <p>
                  To secure a seat in top colleges like MIT Muzaffarpur, BCE Bhagalpur, or GCE Gaya, students must appear for JEE Main. Based on their NTA score, BCECEB prepares a state merit list. It is crucial to understand that scoring well in JEE Main is the primary gateway. However, for seats that remain vacant after UGEAC, BCECE conducts a special entrance exam (BCECE Engineering) later in the year.
                </p>
                <h4>Eligibility Criteria</h4>
                <ul>
                  <li>Must have passed 10+2 with Physics and Mathematics as compulsory subjects.</li>
                  <li>Must have a valid JEE Main scorecard.</li>
                  <li>Must possess a Bihar Domicile certificate for state quota seats.</li>
                </ul>
              </div>

              {/* UGEAC Counselling */}
              <div id="ugeac" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-6 not-prose border-t border-slate-100 pt-12">
                  <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600">
                    <MapPin size={24} />
                  </div>
                  <h3 className="text-2xl font-[900] text-slate-900 uppercase tracking-tight m-0">UGEAC Counselling Explained</h3>
                </div>
                <p>
                  UGEAC (Undergraduate Engineering Admission Counselling) is a centralized process. After the JEE Main results are declared, BCECEB releases a notification for UGEAC registration. Students must fill out the application form, upload necessary documents (like caste certificates, domicile, and income certificates), and pay the counselling fee.
                </p>
                <p>
                  The most critical phase of UGEAC is <strong>Choice Filling</strong>. Students must arrange their preferred colleges and branches in decreasing order of priority. Using our <a href="/ugeac-predictor">UGEAC College Predictor</a>, candidates can estimate which colleges they are likely to get based on previous year cutoffs. Mismanaging choice filling is the number one reason students miss out on better colleges despite having good ranks.
                </p>
                <p>
                  After choice filling, seat allotment results are published in multiple rounds (Round 1, Round 2, and sometimes a Mop-up round). If allotted a seat, you must physically report to the designated reporting center with all original documents for verification.
                </p>
              </div>

              {/* BEU Academic System */}
              <div id="beu" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-6 not-prose border-t border-slate-100 pt-12">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                    <BookOpen size={24} />
                  </div>
                  <h3 className="text-2xl font-[900] text-slate-900 uppercase tracking-tight m-0">BEU Academic System Explained</h3>
                </div>
                <p>
                  The <strong>Bihar Engineering University (BEU)</strong>, established in 2021, governs all engineering colleges in the state, standardizing the syllabus and examination patterns. BEU follows the AICTE model curriculum, which is designed to be modern and industry-relevant, operating on a semester system with 8 semesters across 4 years.
                </p>
                <h4>The Grading System (CGPA/SGPA)</h4>
                <p>
                  BEU utilizes a credit-based grading system. Each subject is assigned specific credits based on its importance and hours of teaching. At the end of each semester, a Semester Grade Point Average (SGPA) is calculated. The Cumulative Grade Point Average (CGPA) is the weighted average of all SGPAs up to that point.
                </p>
                <p>
                  Students often struggle to calculate their exact percentages. To easily convert your grades, you can use our official <a href="/cgpa">BEU CGPA to Percentage Calculator</a>. It strictly follows the official BEU conversion formula.
                </p>
                <h4>Examinations and Mid-Sems</h4>
                <p>
                  A typical semester includes two Mid-Semester exams (internals) and one End-Semester exam (externals). Internal marks play a massive role in your overall SGPA, accounting for attendance, assignments, and mid-sem performance. For End-Semester exams, practicing <a href="/pyq">Previous Year Questions (PYQs)</a> is highly recommended as BEU frequently repeats core concepts.
                </p>
              </div>

              {/* Placement Reality */}
              <div id="placements" className="scroll-mt-32 pb-12">
                <div className="flex items-center gap-3 mb-6 not-prose border-t border-slate-100 pt-12">
                  <div className="w-12 h-12 rounded-xl bg-rose-50 flex items-center justify-center text-rose-600">
                    <Briefcase size={24} />
                  </div>
                  <h3 className="text-2xl font-[900] text-slate-900 uppercase tracking-tight m-0">Placement Reality in Bihar</h3>
                </div>
                <p>
                  The placement scenario in Bihar Engineering Colleges has seen a massive shift over the last few years. While top institutes like MIT Muzaffarpur and BCE Bhagalpur have regular on-campus drives from core and IT companies, students in newly established GECs rely heavily on off-campus placements and pool drives.
                </p>
                <p>
                  Major recruiters like TCS, Wipro, Cognizant, and HCL hire in large numbers through their national qualifier tests (like TCS NQT). To secure a good package, students must not rely solely on their college's training and placement cell. Instead, focusing on self-skilling, building projects, and mastering Data Structures and Algorithms (DSA) is vital.
                </p>
                <p>
                  Additionally, there are excellent opportunities in the government sector. Many students from Core branches (Civil, Electrical, Mechanical) successfully clear the BPSC Assistant Engineer (AE) exams and GATE, securing high-paying PSUs and state government jobs.
                </p>
              </div>

            </div>

            {/* Sidebar Navigation */}
            <div className="md:col-span-4 hidden md:block">
              <div className="sticky top-32 p-6 bg-slate-50 border border-slate-200 rounded-3xl not-prose">
                <h4 className="text-sm font-[900] text-slate-900 uppercase tracking-widest mb-6">Quick Navigation</h4>
                <ul className="space-y-4">
                  <li>
                    <a href="#admission" className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors group">
                      <div className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-blue-600 transition-colors"></div>
                      <span className="text-xs font-bold uppercase tracking-widest">Admission Guide</span>
                    </a>
                  </li>
                  <li>
                    <a href="#ugeac" className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors group">
                      <div className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-blue-600 transition-colors"></div>
                      <span className="text-xs font-bold uppercase tracking-widest">UGEAC Counselling</span>
                    </a>
                  </li>
                  <li>
                    <a href="#beu" className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors group">
                      <div className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-blue-600 transition-colors"></div>
                      <span className="text-xs font-bold uppercase tracking-widest">BEU Academic System</span>
                    </a>
                  </li>
                  <li>
                    <a href="#placements" className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors group">
                      <div className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-blue-600 transition-colors"></div>
                      <span className="text-xs font-bold uppercase tracking-widest">Placement Reality</span>
                    </a>
                  </li>
                </ul>

                <div className="mt-8 p-6 bg-blue-600 text-white rounded-2xl">
                  <h5 className="font-black uppercase tracking-tight text-lg mb-2">Need Help?</h5>
                  <p className="text-xs font-medium text-blue-100 leading-relaxed mb-4">Check out our free UGEAC College Predictor to see which colleges you can get.</p>
                  <a href="/ugeac-predictor" className="block text-center w-full bg-white text-blue-600 text-[10px] font-black uppercase tracking-widest py-3 rounded-xl hover:bg-blue-50 transition-colors">
                    Try Predictor
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </Reveal>
    </section>
  );
}
