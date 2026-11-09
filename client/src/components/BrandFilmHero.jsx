import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Play, 
  Download, 
  BookOpen, 
  FileText, 
  Users, 
  ShieldCheck, 
  Sparkles, 
  ExternalLink, 
  X,
  Volume2,
  VolumeX
} from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 239;
const getFrameSrc = (index) => `/brand-film/frame_${String(index).padStart(3, '0')}.webp`;

export default function BrandFilmHero({ isNative }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);

  const [currentProgress, setCurrentProgress] = useState(0);
  const [currentAct, setCurrentAct] = useState(1);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isAudioMuted, setIsAudioMuted] = useState(true);
  const [loadedCount, setLoadedCount] = useState(0);
  const [isReady, setIsReady] = useState(false);

  // 1. Preload frames
  useEffect(() => {
    let mounted = true;
    let count = 0;
    const images = [];

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFrameSrc(i);
      img.onload = () => {
        if (!mounted) return;
        count++;
        setLoadedCount(count);
        if (count === 1) {
          drawFrame(0);
        }
        if (count >= 15) {
          setIsReady(true);
        }
      };
      img.onerror = () => {
        if (!mounted) return;
        count++;
        setLoadedCount(count);
      };
      images[i] = img;
    }

    imagesRef.current = images;

    return () => {
      mounted = false;
    };
  }, []);

  // 2. High-DPI Cover Draw Function
  const drawFrame = (frameIndex) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const img = imagesRef.current[frameIndex];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const cWidth = canvas.width;
    const cHeight = canvas.height;
    const iWidth = img.naturalWidth;
    const iHeight = img.naturalHeight;

    const imgRatio = iWidth / iHeight;
    const canvasRatio = cWidth / cHeight;

    let drawWidth, drawHeight, offsetX, offsetY;

    if (canvasRatio > imgRatio) {
      drawWidth = cWidth;
      drawHeight = cWidth / imgRatio;
      offsetX = 0;
      offsetY = (cHeight - drawHeight) / 2;
    } else {
      drawHeight = cHeight;
      drawWidth = cHeight * imgRatio;
      offsetX = (cWidth - drawWidth) / 2;
      offsetY = 0;
    }

    ctx.clearRect(0, 0, cWidth, cHeight);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  // 3. Resize Canvas
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      const targetFrame = Math.min(TOTAL_FRAMES - 1, Math.floor(currentProgress * (TOTAL_FRAMES - 1)));
      drawFrame(targetFrame);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentProgress]);

  // 4. GSAP ScrollTrigger Integration
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const trigger = ScrollTrigger.create({
      trigger: container,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.4,
      onUpdate: (self) => {
        const p = self.progress;
        setCurrentProgress(p);
        const targetFrame = Math.min(TOTAL_FRAMES - 1, Math.floor(p * (TOTAL_FRAMES - 1)));
        drawFrame(targetFrame);

        // Update Act
        if (p < 0.24) setCurrentAct(1);
        else if (p < 0.53) setCurrentAct(2);
        else if (p < 0.78) setCurrentAct(3);
        else setCurrentAct(4);
      }
    });

    return () => {
      trigger.kill();
    };
  }, []);

  const timecodeSeconds = (currentProgress * 9.96).toFixed(1);

  return (
    <div ref={containerRef} className="relative w-full h-[380vh] bg-[#050811] text-slate-100 select-none">
      
      {/* ── Sticky Pinned Viewport Stage ── */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Canvas Scroller Element */}
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Ambient Gradient Vignettes */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#050811] via-transparent to-[#050811]/70" />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#050811]/60 via-transparent to-[#050811]/60" />

        {/* ── Live HUD Telemetry Header ── */}
        <div className="absolute top-16 md:top-20 left-4 md:left-8 right-4 md:right-8 z-30 flex items-center justify-between pointer-events-none">
          
          {/* Act Badge */}
          <div className="pointer-events-auto">
            {currentAct === 1 && (
              <span className="px-3.5 py-1 rounded-full text-[10px] md:text-xs font-black uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/40 backdrop-blur-md shadow-lg flex items-center gap-1.5 animate-pulse">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                ACT 01 • LATE NIGHT OVERWHELM
              </span>
            )}
            {currentAct === 2 && (
              <span className="px-3.5 py-1 rounded-full text-[10px] md:text-xs font-black uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-500/40 backdrop-blur-md shadow-lg flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                ACT 02 • THE STUDY ENGINE DISCOVERY
              </span>
            )}
            {currentAct === 3 && (
              <span className="px-3.5 py-1 rounded-full text-[10px] md:text-xs font-black uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 backdrop-blur-md shadow-lg flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                ACT 03 • CONFIDENCE &amp; MENTORSHIP
              </span>
            )}
            {currentAct === 4 && (
              <span className="px-3.5 py-1 rounded-full text-[10px] md:text-xs font-black uppercase tracking-wider bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 backdrop-blur-md shadow-lg flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                ACT 04 • APNA COLLEGE BIHAR
              </span>
            )}
          </div>

          {/* Timecode & Watch Film Button */}
          <div className="flex items-center gap-2.5 pointer-events-auto">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-xl bg-slate-900/80 border border-white/10 backdrop-blur-md text-xs font-mono text-slate-300">
              <span className="text-[10px] text-slate-400 uppercase tracking-widest">TIMECODE:</span>
              <span className="text-cyan-400 font-bold">00:{String(Math.floor(timecodeSeconds)).padStart(2, '0')}</span>
              <span className="text-slate-600">/</span>
              <span className="text-slate-400">00:10</span>
            </div>

            <button
              onClick={() => setIsVideoModalOpen(true)}
              className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-xs font-bold text-white flex items-center gap-1.5 transition-all shadow-lg cursor-pointer active:scale-95"
            >
              <Play size={12} className="text-blue-400 fill-blue-400" />
              <span>Watch Film</span>
            </button>
          </div>

        </div>

        {/* ── Dynamic Story Overlay Cards ── */}
        <div className="absolute inset-0 z-20 flex items-center justify-center p-4 md:p-8 pointer-events-none">
          
          {/* Card 1: Act 1 (The Struggle) */}
          <div className={`transition-all duration-500 max-w-xl w-full p-6 md:p-8 rounded-[2.5rem] bg-slate-950/85 backdrop-blur-2xl border border-white/10 shadow-2xl border-l-4 border-l-rose-500 pointer-events-auto ${
            currentAct === 1 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95 pointer-events-none hidden'
          }`}>
            <div className="flex items-center justify-between mb-3 text-xs">
              <span className="font-mono text-rose-400 font-bold uppercase tracking-widest">
                Semester Exam Anxiety
              </span>
              <span className="text-slate-400 font-mono text-[11px]">00:00 — 00:03</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-2 font-['Inter']">
              Late Nights. Complex Circuits. Thick Textbooks.
            </h2>
            <p className="text-xs md:text-sm text-slate-300 font-medium leading-relaxed mb-4">
              Stuck in a hostel room with scattered PDFs, missing question papers, and zero mentorship. Every Bihar engineering student has faced this uphill battle.
            </p>
            <div className="flex items-center gap-3 pt-3 border-t border-slate-800 text-[11px] text-slate-400 font-mono">
              <span className="flex items-center gap-1.5 text-rose-400 font-bold">
                <span className="w-2 h-2 rounded-full bg-rose-400 animate-ping" />
                38 Colleges • 1 Shared Struggle
              </span>
              <span className="text-slate-500">|</span>
              <span className="text-slate-400">Scroll to continue &darr;</span>
            </div>
          </div>

          {/* Card 2: Act 2 (The Discovery) */}
          <div className={`transition-all duration-500 max-w-xl w-full p-6 md:p-8 rounded-[2.5rem] bg-slate-950/85 backdrop-blur-2xl border border-white/10 shadow-2xl border-l-4 border-l-blue-500 pointer-events-auto ${
            currentAct === 2 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95 pointer-events-none hidden'
          }`}>
            <div className="flex items-center justify-between mb-3 text-xs">
              <span className="font-mono text-blue-400 font-bold uppercase tracking-widest">
                The Bihar Engineering Study Engine
              </span>
              <span className="text-slate-400 font-mono text-[11px]">00:03 — 00:06</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-2 font-['Inter']">
              He Opens His Laptop. Discovers Apna College Bihar.
            </h2>
            <p className="text-xs md:text-sm text-slate-300 font-medium leading-relaxed mb-4">
              Everything aligned with BEU official university syllabus: 2018–2026 PYQs, chapter revision sheets, and curated YouTube lecture playlists with zero distractions.
            </p>
            <div className="grid grid-cols-3 gap-2 pt-3 border-t border-slate-800 text-center">
              <div className="p-2 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="text-xs font-mono font-black text-blue-400">2018-26</div>
                <div className="text-[9px] text-slate-400 uppercase font-bold">BEU PYQs</div>
              </div>
              <div className="p-2 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="text-xs font-mono font-black text-cyan-400">UNIT-WISE</div>
                <div className="text-[9px] text-slate-400 uppercase font-bold">Free Notes</div>
              </div>
              <div className="p-2 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="text-xs font-mono font-black text-emerald-400">75% SAFE</div>
                <div className="text-[9px] text-slate-400 uppercase font-bold">Attendance</div>
              </div>
            </div>
          </div>

          {/* Card 3: Act 3 (Confidence & Mentorship) */}
          <div className={`transition-all duration-500 max-w-xl w-full p-6 md:p-8 rounded-[2.5rem] bg-slate-950/85 backdrop-blur-2xl border border-white/10 shadow-2xl border-l-4 border-l-emerald-500 pointer-events-auto ${
            currentAct === 3 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95 pointer-events-none hidden'
          }`}>
            <div className="flex items-center justify-between mb-3 text-xs">
              <span className="font-mono text-emerald-400 font-bold uppercase tracking-widest">
                Task Completed • Mentorship Booked
              </span>
              <span className="text-slate-400 font-mono text-[11px]">00:06 — 00:08</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-2 font-['Inter']">
              Confidence Returns. 1-on-1 Mentorship Confirmed.
            </h2>
            <p className="text-xs md:text-sm text-slate-300 font-medium leading-relaxed mb-4">
              Confusion turns into high-CGPA clarity. A 1-on-1 video session with senior university rankers is confirmed — completely free of cost.
            </p>
            <div className="flex items-center gap-2.5 pt-3 border-t border-slate-800 text-xs font-bold text-emerald-400">
              <ShieldCheck size={16} />
              <span>100% Free Mentorship For Every Bihar Scholar</span>
            </div>
          </div>

          {/* Card 4: Act 4 (The Brand Movement) */}
          <div className={`transition-all duration-500 max-w-lg w-full p-6 md:p-8 rounded-[2.5rem] bg-slate-950/90 backdrop-blur-2xl border border-cyan-500/30 shadow-2xl shadow-cyan-950/40 text-center pointer-events-auto ${
            currentAct === 4 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95 pointer-events-none hidden'
          }`}>
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 p-2 mx-auto mb-3 shadow-xl shadow-cyan-500/20">
              <img src="/logo-acb.png" alt="Apna College Bihar" className="w-full h-full object-contain" />
            </div>

            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-1 font-['Inter']">
              Apna College Bihar
            </h2>
            <p className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-3">
              YOUR ENGINEERING JOURNEY STARTS HERE.
            </p>

            <p className="text-xs text-slate-300 font-medium leading-relaxed mb-6">
              Empowering students across all 38 Government Engineering Colleges with free BEU notes, authentic PYQs, attendance protection &amp; senior mentorship.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="/api/download-apk"
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/20 active:scale-95 transition-all"
              >
                <Download size={15} />
                <span>Download APK v64</span>
              </a>

              <Link
                to="/notes"
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all hover:border-cyan-400"
              >
                <BookOpen size={15} className="text-cyan-400" />
                <span>Explore Notes</span>
              </Link>
            </div>
          </div>

        </div>

        {/* ── Bottom Progress Scrubber ── */}
        <div className="absolute bottom-6 left-6 right-6 z-30 pointer-events-none">
          <div className="w-full h-1 bg-slate-900/80 rounded-full overflow-hidden border border-white/10">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 transition-all duration-75"
              style={{ width: `${currentProgress * 100}%` }}
            />
          </div>
        </div>

      </div>

      {/* ── Full Film Video Modal ── */}
      {isVideoModalOpen && (
        <div 
          className="fixed inset-0 z-[999999] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div 
            className="relative max-w-4xl w-full bg-slate-950 rounded-[2rem] border border-white/20 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>

            <div className="aspect-video w-full bg-black">
              <video 
                controls 
                autoPlay 
                playsInline
                className="w-full h-full object-contain"
                src="/brand_film.mp4"
              >
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="p-4 md:p-5 flex items-center justify-between bg-slate-900 border-t border-slate-800">
              <div>
                <h3 className="text-sm font-bold text-white font-['Inter']">Apna College Bihar • Official Brand Film</h3>
                <p className="text-xs text-slate-400 font-mono">1080p Full HD • Education Brand Film</p>
              </div>
              <a 
                href="/api/download-apk" 
                className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-md"
              >
                <Download size={14} />
                <span>Get App (v64)</span>
              </a>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
