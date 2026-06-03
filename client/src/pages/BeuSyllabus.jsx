import React, { useState, useEffect } from 'react';
import { BookOpen, Search, ChevronDown, ChevronUp, Loader2, Info, Download, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import jsPDF from 'jspdf';

// ─── Smart Syllabus Text Cleaner ──────────────────────────────────────────────
// Fixes PDF extraction artifacts (broken words, wrong spaces, hyphenated line-breaks)
function cleanSyllabusText(text) {
  if (!text) return text;

  return text
    // 1. Fix hyphenated line-breaks: "Gauss -\nJordan" → "Gauss-Jordan"
    //    and "co -ordination" → "co-ordination"
    .replace(/ -\n/g, '-')
    .replace(/- \n/g, '-')

    // 2. Remove soft-hyphen artifacts: "Gauss -Jordan" → "Gauss-Jordan"
    //    (space before hyphen followed by lowercase = broken hyphen)
    .replace(/ -([a-z])/g, '-$1')

    // 3. Fix broken words that have a space in the middle:
    //    Pattern: word ending mid-letter + space + rest of letter
    //    e.g. "ra diations" → "radiations", "additi on" → "addition"
    //    Strategy: if two adjacent words form a valid-looking token, join them
    .replace(/([a-z]{2,}) ([a-z]{2,})/g, (match, a, b) => {
      // Only join if it looks like a broken word (no natural word boundary)
      // Heuristic: if combined word has no double-consonant anomaly, join
      const combined = a + b;
      // Don't join common two-word phrases — only join if a or b is very short (1-3 chars)
      // or if b starts with a vowel continuation (typical split)
      if (a.length <= 3 || b.length <= 3) return combined;
      // Check if split looks like "pro cess", "solu tion" etc.
      if (/[aeiou]$/.test(a) && /^[bcdfghjklmnpqrstvwxyz]/.test(b)) return combined;
      if (/[bcdfghjklmnpqrstvwxyz]$/.test(a) && /^[aeiou]/.test(b) && b.length <= 4) return combined;
      return match;
    })

    // 4. Fix "co -ordination" style → "co-ordination"
    .replace(/co -([a-z])/g, 'co-$1')
    .replace(/non -([a-z])/g, 'non-$1')
    .replace(/pre -([a-z])/g, 'pre-$1')
    .replace(/self -([a-z])/g, 'self-$1')
    .replace(/over -([a-z])/g, 'over-$1')
    .replace(/sub -([a-z])/g, 'sub-$1')

    // 5. Fix "Buna -S" style chemical names
    .replace(/([A-Z][a-z]*) -([A-Z0-9])/g, '$1-$2')

    // 6. Remove junk artifact lines (curriculum codes like "3 1 0 4")
    .replace(/^[–\-]\w+\s+\d\s+\d\s+\d\s+\d\s*$/gm, '')

    // 7. Fix "T aylor", "Re ena", "M.J . Sienko" style mid-word spaces in names
    .replace(/([A-Z]) ([a-z]{3,})/g, '$1$2')

    // 8. Normalize multiple spaces to single space
    .replace(/  +/g, ' ')

    // 9. Fix "proximate an d" style: 2-letter broken words
    .replace(/\b([a-z]{2,10}) (an|in|of|or|to|at|by|as|if|is|it|be|on|up|do) ([a-z])/g,
      (match, a, b, c) => `${a} ${b} ${c}`)

    // 10. Trim lines
    .split('\n').map(l => l.trimEnd()).join('\n');
}

export default function BeuSyllabus() {

  const [syllabusData, setSyllabusData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isDownloading, setIsDownloading] = useState(false);
  
  const [selectedSem, setSelectedSem] = useState('sem1');
  const [selectedBranch, setSelectedBranch] = useState('cse');
  
  useEffect(() => {
    fetch('/data/syllabus.json')
      .then(res => res.json())
      .then(data => {
        setSyllabusData(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching syllabus:", err);
        setLoading(false);
      });
  }, []);

  const currentSyllabus = syllabusData.find(
    s => s.semester === selectedSem && s.branch === selectedBranch
  );

  const semesters = [
    { id: 'sem1', label: '1st Semester' },
    { id: 'sem2', label: '2nd Semester' },
    { id: 'sem3', label: '3rd Semester' },
    { id: 'sem4', label: '4th Semester' },
    { id: 'sem5', label: '5th Semester' },
    { id: 'sem6', label: '6th Semester' },
    { id: 'sem7', label: '7th Semester' },
    { id: 'sem8', label: '8th Semester' },
  ];

  const branches = [
    { id: 'cse', label: 'Computer Science (All Spec.)' },
    { id: 'civil', label: 'Civil Engineering' },
    { id: 'mech', label: 'Mechanical Engineering' },
    { id: 'ee', label: 'Electrical Engineering' },
    { id: 'ece', label: 'Electronics & Comm.' },
    { id: 'eee', label: 'Electrical & Electronics' },
  ];

  const handleDownloadPdf = () => {
    if (!currentSyllabus) return;
    setIsDownloading(true);

    try {
      const doc = new jsPDF('p', 'mm', 'a4');
      const pageWidth = doc.internal.pageSize.getWidth(); // 210
      const pageHeight = doc.internal.pageSize.getHeight(); // 297
      const margin = 20;
      const maxW = pageWidth - margin * 2; // 170

      let cursorY = margin + 25; // Start below header
      let pageCount = 1;

      const branchLabel = branches.find(b => b.id === selectedBranch)?.label || selectedBranch.toUpperCase();
      const semLabel = semesters.find(s => s.id === selectedSem)?.label || selectedSem.toUpperCase();

      // Helper to add Header & Watermark to a page
      const addPageDecoration = (pageNum) => {
        // 1. Watermark (Diagonal in center)
        doc.setTextColor(240, 243, 248); // Very light grey/blue watermark
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(42);
        doc.text('APNA COLLEGE BIHAR', pageWidth / 2, pageHeight / 2 + 10, { align: 'center', angle: 45 });

        // 2. Header Box & Logo
        doc.setFillColor(79, 70, 229); // Indigo 600 top accent bar
        doc.rect(0, 0, pageWidth, 6, 'F');

        // Header Text
        doc.setTextColor(15, 23, 42); // Slate 900
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(16);
        doc.text('APNA COLLEGE BIHAR', margin + 14, margin + 5);

        doc.setTextColor(79, 70, 229); // Indigo 600
        doc.setFontSize(10); doc.setFont('helvetica', 'bold');
        doc.text('OFFICIAL BEU SYLLABUS', margin + 14, margin + 11);

        // Subtitle (Branch & Sem)
        doc.setTextColor(100, 116, 139); // Slate 500
        doc.setFont('helvetica', 'normal'); doc.setFontSize(9);
        doc.text(`${branchLabel} • ${semLabel}`, margin + 14, margin + 16);

        // Draw a line under header
        doc.setDrawColor(226, 232, 240); // Slate 200
        doc.setLineWidth(0.5);
        doc.line(margin, margin + 20, pageWidth - margin, margin + 20);

        // Footer
        doc.setFontSize(8); doc.setTextColor(148, 163, 184);
        doc.text(`Page ${pageNum}`, pageWidth / 2, pageHeight - 12, { align: 'center' });
        doc.text('https://apnacollegebihar.online', margin, pageHeight - 12);
        doc.text('Apna College Bihar', pageWidth - margin, pageHeight - 12, { align: 'right' });
      };

      // Try loading ACB logo image for header
      const imgEl = new Image();
      imgEl.src = '/logo-acb.png';
      imgEl.onload = () => { generateContent(imgEl); };
      imgEl.onerror = () => { generateContent(null); };

      const generateContent = (logoImg) => {
        if (logoImg) {
          doc.addImage(logoImg, 'PNG', margin, margin - 1, 11, 11);
        }
        addPageDecoration(1);

        const checkPageBreak = (neededHeight) => {
          if (cursorY + neededHeight > pageHeight - margin - 15) {
            doc.addPage(); pageCount++;
            cursorY = margin + 30; // Clean breathing room below header line
            if (logoImg) doc.addImage(logoImg, 'PNG', margin, margin - 1, 11, 11);
            addPageDecoration(pageCount);
          }
        };

        const lines = cleanSyllabusText(currentSyllabus.content).split('\n');
        for (let line of lines) {
          line = line.trim();
          if (!line) { cursorY += 3; continue; }

          if (line.startsWith('## 📘') || line.startsWith('## ')) {
            const cleanTitle = line.replace('## 📘', '').replace('##', '').trim();
            doc.setFont('helvetica', 'bold'); doc.setFontSize(14); doc.setTextColor(67, 56, 202); // Indigo 700
            const splitTitle = doc.splitTextToSize(cleanTitle, maxW);
            const blockH = splitTitle.length * 6 + 8;
            checkPageBreak(blockH); cursorY += 6;
            doc.text(splitTitle, margin, cursorY);
            cursorY += splitTitle.length * 6 + 2;
            doc.setDrawColor(199, 210, 254); doc.setLineWidth(0.5);
            doc.line(margin, cursorY - 3, pageWidth - margin, cursorY - 3);
            cursorY += 4;
          } else if (line.startsWith('### 📌') || line.startsWith('### ')) {
            const cleanSub = line.replace('### 📌', '').replace('###', '').trim();
            doc.setFont('helvetica', 'bold'); doc.setFontSize(11); doc.setTextColor(79, 70, 229);
            const splitSub = doc.splitTextToSize(cleanSub, maxW);
            const blockH = splitSub.length * 5 + 6;
            checkPageBreak(blockH); cursorY += 4;
            doc.text(splitSub, margin, cursorY);
            cursorY += splitSub.length * 5 + 2;
          } else if (line.startsWith('####')) {
            const cleanH4 = line.replace('####', '').trim();
            doc.setFont('helvetica', 'bold'); doc.setFontSize(10); doc.setTextColor(15, 23, 42);
            const splitH4 = doc.splitTextToSize(cleanH4, maxW);
            const blockH = splitH4.length * 5 + 4;
            checkPageBreak(blockH); cursorY += 3;
            doc.text(splitH4, margin, cursorY);
            cursorY += splitH4.length * 5 + 1;
          } else if (line.startsWith('**Course Code:**') || line.startsWith('**')) {
            doc.setFont('helvetica', 'bold'); doc.setFontSize(10); doc.setTextColor(71, 85, 105);
            const splitCC = doc.splitTextToSize(line.replace(/\*\*/g, ''), maxW);
            const blockH = splitCC.length * 5 + 4;
            checkPageBreak(blockH);
            doc.text(splitCC, margin, cursorY);
            cursorY += splitCC.length * 5 + 2;
          } else if (line.startsWith('- ') || line.startsWith('* ')) {
            const cleanBullet = line.substring(2).trim();
            doc.setFont('helvetica', 'normal'); doc.setFontSize(10); doc.setTextColor(71, 85, 105);
            const splitBullet = doc.splitTextToSize(cleanBullet, maxW - 6);
            const blockH = splitBullet.length * 5 + 4;
            checkPageBreak(blockH);
            doc.text('•', margin + 2, cursorY);
            doc.text(splitBullet, margin + 6, cursorY);
            cursorY += splitBullet.length * 5 + 1;
          } else {
            doc.setFont('helvetica', 'normal'); doc.setFontSize(10); doc.setTextColor(71, 85, 105);
            const splitText = doc.splitTextToSize(line, maxW);
            const blockH = splitText.length * 5 + 4;
            checkPageBreak(blockH);
            doc.text(splitText, margin, cursorY);
            cursorY += splitText.length * 5 + 1;
          }
        }

        doc.save(`ACB_${selectedBranch.toUpperCase()}_${selectedSem.toUpperCase()}_Syllabus.pdf`);
        setIsDownloading(false);
      };

    } catch (err) {
      console.error("PDF generation error:", err);
      setIsDownloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-['Inter'] pb-24">
      {/* Header */}
      <div className="bg-indigo-600 text-white rounded-b-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center text-center">
          <Link to="/app" className="self-start text-[10px] font-black uppercase tracking-widest bg-white/20 px-4 py-2 rounded-xl mb-8 hover:bg-white/30 transition-all">
            ← Back to Hub
          </Link>
          
          <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 shadow-inner">
            <BookOpen size={32} className="text-white" />
          </div>
          <h1 className="text-3xl md:text-5xl font-[1000] tracking-tighter uppercase mb-4">
            BEU Syllabus
          </h1>
          <p className="text-indigo-100 text-[11px] md:text-sm font-bold uppercase tracking-widest max-w-lg">
            Complete Semester & Branch wise structured syllabus for Bihar Engineering University
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 -mt-10 relative z-20">
        
        {/* Controls */}
        <div className="bg-white p-6 rounded-[2rem] shadow-xl border border-slate-100 mb-8 flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 px-2">Select Semester</label>
            <div className="relative">
              <select 
                value={selectedSem} 
                onChange={e => setSelectedSem(e.target.value)}
                className="w-full appearance-none bg-slate-50 border-2 border-slate-100 p-4 pr-10 rounded-2xl text-[13px] font-bold text-slate-800 outline-none focus:border-indigo-500 transition-all cursor-pointer"
              >
                {semesters.map(s => <option key={s.id} value={s.id}>{s.label}</option>)}
              </select>
              <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            </div>
          </div>
          
          <div className="flex-1">
            <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 px-2">Select Branch</label>
            <div className="relative">
              <select 
                value={selectedBranch} 
                onChange={e => setSelectedBranch(e.target.value)}
                className="w-full appearance-none bg-slate-50 border-2 border-slate-100 p-4 pr-10 rounded-2xl text-[13px] font-bold text-slate-800 outline-none focus:border-indigo-500 transition-all cursor-pointer"
              >
                {branches.map(b => <option key={b.id} value={b.id}>{b.label}</option>)}
              </select>
              <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-[2rem] shadow-xl border border-slate-100 overflow-hidden min-h-[400px]">
          <div className="p-6 bg-slate-50 border-b border-slate-100 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-sm font-black text-slate-800 uppercase tracking-widest">
                {branches.find(b => b.id === selectedBranch)?.label}
              </h2>
              <p className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mt-1">
                {semesters.find(s => s.id === selectedSem)?.label}
              </p>
            </div>
            
            {currentSyllabus && (
              <button 
                onClick={handleDownloadPdf}
                disabled={isDownloading}
                className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-400 text-white rounded-xl text-xs font-black uppercase tracking-widest shadow-lg shadow-indigo-900/20 transition-all active:scale-95 ml-auto"
              >
                {isDownloading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" /> Generating PDF...
                  </>
                ) : (
                  <>
                    <Download size={16} /> Download PDF Syllabus
                  </>
                )}
              </button>
            )}
          </div>
          
          <div className="p-6 md:p-10">
            {loading ? (
              <div className="flex flex-col items-center justify-center py-20">
                <Loader2 size={40} className="text-indigo-500 animate-spin mb-4" />
                <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Loading Syllabus Data...</p>
              </div>
            ) : currentSyllabus ? (
              <div className="prose prose-sm max-w-none prose-headings:font-black prose-h2:text-indigo-700 prose-h2:uppercase prose-h2:tracking-tight prose-h2:border-b prose-h2:border-indigo-100 prose-h2:pb-2 prose-h3:text-slate-800 prose-h4:text-indigo-600 prose-h4:mt-4 prose-strong:text-slate-800 prose-p:text-slate-600 prose-p:font-medium prose-p:leading-relaxed prose-li:text-slate-600 prose-li:leading-relaxed">
                <ReactMarkdown>{cleanSyllabusText(currentSyllabus.content)}</ReactMarkdown>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-6">
                  <Search size={32} className="text-slate-400" />
                </div>
                <h3 className="text-lg font-black text-slate-800 uppercase tracking-tighter mb-2">No Syllabus Found</h3>
                <p className="text-[12px] font-bold text-slate-500 max-w-xs">
                  The syllabus for this specific semester and branch combination is not available yet or is not part of the BEU curriculum.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
