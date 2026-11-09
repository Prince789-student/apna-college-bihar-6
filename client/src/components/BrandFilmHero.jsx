import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Download, BookOpen, ChevronDown, Play, Pause, X, Volume2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const TOTAL_FRAMES = 239;
const getFrameSrc = (index) => `/brand-film/frame_${String(index).padStart(3, '0')}.webp`;

export default function BrandFilmHero({ isNative }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const lastDrawnFrameRef = useRef(-1);
  const rafIdRef = useRef(null);
  const autoPlayTimerRef = useRef(null);

  const [progress, setProgress] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [hasStartedScroll, setHasStartedScroll] = useState(false);

  // 1. Detect Active Scroll Container (handles DashboardLayout's #main-scroll-container and window)
  const getScroller = useCallback(() => {
    return (
      containerRef.current?.closest('#main-scroll-container') ||
      document.getElementById('main-scroll-container') ||
      window
    );
  }, []);

  // 2. High-DPI Canvas Drawing with Object-fit Cover & Fallback Protection
  const drawFrame = useCallback((frameIndex) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let img = imagesRef.current[frameIndex];

    // If target frame is still loading, find the closest available loaded frame (Zero flicker guarantee)
    if (!img || !img.complete || img.naturalWidth === 0) {
      for (let offset = 1; offset < 35; offset++) {
        const prev = imagesRef.current[frameIndex - offset];
        if (prev && prev.complete && prev.naturalWidth > 0) {
          img = prev;
          break;
        }
        const next = imagesRef.current[frameIndex + offset];
        if (next && next.complete && next.naturalWidth > 0) {
          img = next;
          break;
        }
      }
    }

    if (!img || !img.complete || img.naturalWidth === 0) return;

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
    lastDrawnFrameRef.current = frameIndex;
  }, []);

  // 3. Progressive Preloader (Loads frame 0 first for instant display, then buffers remaining frames)
  useEffect(() => {
    let mounted = true;
    const images = [];

    // Frame 0 priority
    const firstImg = new Image();
    firstImg.src = getFrameSrc(0);
    firstImg.onload = () => {
      if (!mounted) return;
      if (lastDrawnFrameRef.current === -1) {
        drawFrame(0);
      }
    };
    images[0] = firstImg;

    // Remaining frames
    for (let i = 1; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFrameSrc(i);
      img.onload = () => {
        if (!mounted) return;
        // If user is currently looking at this frame
        if (lastDrawnFrameRef.current === i) {
          drawFrame(i);
        }
      };
      images[i] = img;
    }

    imagesRef.current = images;

    return () => {
      mounted = false;
    };
  }, [drawFrame]);

  // 4. Responsive Canvas Resize
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      
      const width = canvas.parentElement?.clientWidth || window.innerWidth;
      const height = canvas.parentElement?.clientHeight || window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      const target = lastDrawnFrameRef.current >= 0 ? lastDrawnFrameRef.current : 0;
      drawFrame(target);
    };

    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, [drawFrame]);

  // 5. Dual-Engine Native Scroll & Touch Scrubber
  useEffect(() => {
    const updateScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const scroller = getScroller();
      let p = 0;

      if (scroller !== window && scroller && scroller.scrollHeight > scroller.clientHeight) {
        const scrollTop = scroller.scrollTop;
        const maxScroll = container.offsetHeight - scroller.clientHeight;
        p = maxScroll > 0 ? scrollTop / maxScroll : 0;
      } else {
        const rect = container.getBoundingClientRect();
        const maxScroll = container.offsetHeight - window.innerHeight;
        const scrolled = -rect.top;
        p = maxScroll > 0 ? scrolled / maxScroll : 0;
      }

      p = Math.max(0, Math.min(1, p));
      setProgress(p);

      if (p > 0.02 && !hasStartedScroll) {
        setHasStartedScroll(true);
      } else if (p <= 0.02 && hasStartedScroll) {
        setHasStartedScroll(false);
      }

      const targetFrame = Math.min(TOTAL_FRAMES - 1, Math.floor(p * (TOTAL_FRAMES - 1)));
      if (targetFrame !== lastDrawnFrameRef.current) {
        drawFrame(targetFrame);
      }
    };

    const handleScroll = () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = requestAnimationFrame(updateScroll);
    };

    const scroller = getScroller();
    if (scroller !== window && scroller) {
      scroller.addEventListener('scroll', handleScroll, { passive: true });
    }
    window.addEventListener('scroll', handleScroll, { passive: true, capture: true });
    document.addEventListener('scroll', handleScroll, { passive: true, capture: true });

    // Initial check
    handleScroll();

    // User manual interaction stops auto-play
    const handleUserInteracted = () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
        autoPlayTimerRef.current = null;
        setIsAutoPlaying(false);
      }
    };

    window.addEventListener('wheel', handleUserInteracted, { passive: true });
    window.addEventListener('touchstart', handleUserInteracted, { passive: true });

    return () => {
      if (scroller !== window && scroller) {
        scroller.removeEventListener('scroll', handleScroll);
      }
      window.removeEventListener('scroll', handleScroll, { capture: true });
      document.removeEventListener('scroll', handleScroll, { capture: true });
      window.removeEventListener('wheel', handleUserInteracted);
      window.removeEventListener('touchstart', handleUserInteracted);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    };
  }, [drawFrame, getScroller, hasStartedScroll]);

  // 6. Auto-Play Controller (Smooth automated scroll for users who want to watch seamlessly)
  const toggleAutoPlay = () => {
    if (isAutoPlaying) {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
      autoPlayTimerRef.current = null;
      setIsAutoPlaying(false);
    } else {
      setIsAutoPlaying(true);
      const scroller = getScroller();
      const container = containerRef.current;
      if (!container) return;

      const isCustomScroller = scroller !== window && scroller && scroller.scrollHeight > scroller.clientHeight;
      const maxScroll = isCustomScroller
        ? container.offsetHeight - scroller.clientHeight
        : container.offsetHeight - window.innerHeight;

      // If at end, start from top
      const currentScroll = isCustomScroller ? scroller.scrollTop : window.scrollY;
      if (currentScroll >= maxScroll - 10) {
        if (isCustomScroller) scroller.scrollTop = 0;
        else window.scrollTo(0, 0);
      }

      const totalDuration = 10000; // 10s
      const intervalMs = 25; // 40fps smooth step
      const step = (maxScroll / (totalDuration / intervalMs));

      autoPlayTimerRef.current = setInterval(() => {
        const cur = isCustomScroller ? scroller.scrollTop : window.scrollY;
        if (cur >= maxScroll - 5) {
          clearInterval(autoPlayTimerRef.current);
          autoPlayTimerRef.current = null;
          setIsAutoPlaying(false);
          return;
        }
        const next = Math.min(maxScroll, cur + step);
        if (isCustomScroller) scroller.scrollTop = next;
        else window.scrollTo(0, next);
      }, intervalMs);
    }
  };

  const timecodeSeconds = (progress * 9.96).toFixed(1);

  return (
    <div 
      ref={containerRef} 
      className="relative z-20 w-full h-[380vh] bg-[#050811] text-slate-100 select-none"
    >
      {/* ── Sticky Fullscreen Viewport Stage ── */}
      <div 
        className="sticky top-0 w-full flex items-center justify-center overflow-hidden"
        style={{ height: 'calc(100dvh - 60px)', minHeight: '520px' }}
      >
        
        {/* Full Viewport Canvas */}
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Subtle Cinematic Vignette at top & bottom so it blends with navbar & page */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#050811]/90 via-transparent to-[#050811]/60" />

        {/* ── Minimalist Top Right HUD Controls ── */}
        <div className="absolute top-4 sm:top-6 right-4 sm:right-8 z-30 flex items-center gap-2">
          {/* Timecode Pill */}
          <div className="px-3 py-1.5 rounded-full bg-black/65 backdrop-blur-md border border-white/10 text-[11px] font-mono text-slate-300 shadow-lg">
            <span className="text-cyan-400 font-bold">00:{String(Math.floor(timecodeSeconds)).padStart(2, '0')}</span>
            <span className="text-slate-500"> / </span>
            <span className="text-slate-400">00:10</span>
          </div>

          {/* Auto Play / Pause Toggle */}
          <button
            onClick={toggleAutoPlay}
            className={`px-3 py-1.5 rounded-full border backdrop-blur-md text-xs font-bold flex items-center gap-1.5 transition-all shadow-lg cursor-pointer active:scale-95 ${
              isAutoPlaying 
                ? 'bg-cyan-500/30 border-cyan-400 text-cyan-200' 
                : 'bg-white/10 hover:bg-white/20 border-white/20 text-white'
            }`}
            title={isAutoPlaying ? "Pause Auto Play" : "Play film automatically"}
          >
            {isAutoPlaying ? <Pause size={12} className="text-cyan-300" /> : <Play size={12} className="text-cyan-400 fill-cyan-400" />}
            <span className="hidden sm:inline">{isAutoPlaying ? 'Pause' : 'Auto Play'}</span>
          </button>

          {/* Sound Mode Modal Button */}
          <button
            onClick={() => setIsVideoModalOpen(true)}
            className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-xs font-bold text-white flex items-center gap-1.5 transition-all shadow-lg cursor-pointer active:scale-95"
            title="Watch full video with sound"
          >
            <Volume2 size={13} className="text-blue-400" />
            <span className="hidden sm:inline">Sound</span>
          </button>
        </div>

        {/* ── Subtle Initial Scroll Cue (Fades out immediately when user starts scrolling) ── */}
        <div 
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-30 transition-all duration-500 pointer-events-none text-center ${
            hasStartedScroll || progress > 0.04 ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-white text-xs font-bold uppercase tracking-widest shadow-2xl animate-pulse">
            <span>Scroll Down to Play Film</span>
            <ChevronDown size={14} className="text-cyan-400 animate-bounce" />
          </div>
          <p className="text-[10px] text-slate-400 font-mono mt-1.5 tracking-wider">
            Scroll karein — har frame smooth scrub hoga
          </p>
        </div>

        {/* ── Final Action Bar (Appears only at the climax: 85% to 100%) ── */}
        <div 
          className={`absolute bottom-8 left-4 right-4 sm:left-auto sm:right-auto sm:bottom-10 z-30 transition-all duration-500 flex flex-col sm:flex-row items-center justify-center gap-3 ${
            progress >= 0.85 ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-6 pointer-events-none'
          }`}
        >
          <a
            href="/api/download-apk"
            className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-2xl shadow-emerald-500/30 active:scale-95 transition-all"
          >
            <Download size={16} />
            <span>Download Official App (v64)</span>
          </a>

          <Link
            to="/notes"
            className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-slate-900/90 hover:bg-slate-800 border border-white/20 text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-xl backdrop-blur-md transition-all hover:border-cyan-400"
          >
            <BookOpen size={16} className="text-cyan-400" />
            <span>Explore BEU Notes &amp; PYQs</span>
          </Link>
        </div>

        {/* ── Bottom Progress Scrubber Line ── */}
        <div className="absolute bottom-2 left-6 right-6 z-20 pointer-events-none">
          <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 transition-all duration-75"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
        </div>

      </div>

      {/* ── Full Film Video Modal (For anyone who wants to watch with full audio) ── */}
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
                <p className="text-xs text-slate-400 font-mono">1080p Full HD • Sound Mode</p>
              </div>
              <a 
                href="/api/download-apk" 
                className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-md"
              >
                <Download size={14} />
                <span>Download APK v64</span>
              </a>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
