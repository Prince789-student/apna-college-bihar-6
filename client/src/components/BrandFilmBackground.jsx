import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Play, Pause, Volume2, X, Download } from 'lucide-react';

const TOTAL_FRAMES = 239;
const getFrameSrc = (index) => `/brand-film/frame_${String(index).padStart(3, '0')}.webp`;

export default function BrandFilmBackground() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const lastDrawnFrameRef = useRef(-1);
  const rafIdRef = useRef(null);
  const autoPlayTimerRef = useRef(null);

  const [progress, setProgress] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);

  // 1. Detect Active Scroll Container (handles DashboardLayout's #main-scroll-container and window)
  const getScroller = useCallback(() => {
    return (
      containerRef.current?.closest('#main-scroll-container') ||
      document.getElementById('main-scroll-container') ||
      window
    );
  }, []);

  // 2. High-DPI Canvas Drawing with Object-fit Cover & Fallback Protection (Zero Flicker)
  const drawFrame = useCallback((frameIndex) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let img = imagesRef.current[frameIndex];

    // If target frame is still buffering, find closest loaded frame
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

  // 3. Progressive Preloader (Loads frame 0 first for instant display, buffers remaining)
  useEffect(() => {
    let mounted = true;
    const images = [];

    // Frame 0 priority load
    const firstImg = new Image();
    firstImg.src = getFrameSrc(0);
    firstImg.onload = () => {
      if (!mounted) return;
      if (lastDrawnFrameRef.current === -1) {
        drawFrame(0);
      }
    };
    images[0] = firstImg;

    // Remaining frames in background
    for (let i = 1; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFrameSrc(i);
      img.onload = () => {
        if (!mounted) return;
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

      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      const target = lastDrawnFrameRef.current >= 0 ? lastDrawnFrameRef.current : 0;
      drawFrame(target);
    };

    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, [drawFrame]);

  // 5. Global Full-Page Scroll Engine (Header to Footer)
  useEffect(() => {
    const updateScroll = () => {
      const scroller = getScroller();
      let p = 0;

      if (scroller !== window && scroller && scroller.scrollHeight > scroller.clientHeight) {
        const scrollTop = scroller.scrollTop;
        const maxScroll = scroller.scrollHeight - scroller.clientHeight;
        p = maxScroll > 0 ? scrollTop / maxScroll : 0;
      } else {
        const docHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
        const winHeight = window.innerHeight;
        const maxScroll = docHeight - winHeight;
        const scrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
        p = maxScroll > 0 ? scrollTop / maxScroll : 0;
      }

      p = Math.max(0, Math.min(1, p));
      setProgress(p);

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
  }, [drawFrame, getScroller]);

  // 6. Smooth Auto-Play (Automated whole-page scroll from Header to Footer)
  const toggleAutoPlay = () => {
    if (isAutoPlaying) {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
      autoPlayTimerRef.current = null;
      setIsAutoPlaying(false);
    } else {
      setIsAutoPlaying(true);
      const scroller = getScroller();
      const isCustomScroller = scroller !== window && scroller && scroller.scrollHeight > scroller.clientHeight;
      const maxScroll = isCustomScroller
        ? scroller.scrollHeight - scroller.clientHeight
        : (document.documentElement.scrollHeight || document.body.scrollHeight) - window.innerHeight;

      // If at end, loop to top
      const currentScroll = isCustomScroller ? scroller.scrollTop : window.scrollY;
      if (currentScroll >= maxScroll - 10) {
        if (isCustomScroller) scroller.scrollTop = 0;
        else window.scrollTo(0, 0);
      }

      const totalDuration = 18000; // 18 seconds smooth tour of whole site
      const intervalMs = 25;
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
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* ── Fixed Fullscreen High-DPI Video Canvas ── */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* ── Soft Ambient Scrim & Vignette (Ensures 100% Text & Card Readability) ── */}
      <div className="absolute inset-0 bg-[#070c18]/40 backdrop-blur-[0.5px] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#070c18]/80 via-transparent to-[#070c18]/60 pointer-events-none" />

      {/* ── Floating Minimalist HUD Controls (Pointer events enabled for buttons) ── */}
      <div className="absolute top-20 right-4 sm:right-8 z-30 flex items-center gap-2 pointer-events-auto">
        {/* Timecode */}
        <div className="px-3 py-1.5 rounded-full bg-black/65 backdrop-blur-md border border-white/10 text-[11px] font-mono text-slate-300 shadow-lg">
          <span className="text-cyan-400 font-bold">00:{String(Math.floor(timecodeSeconds)).padStart(2, '0')}</span>
          <span className="text-slate-500"> / </span>
          <span className="text-slate-400">00:10</span>
        </div>

        {/* Auto Play Toggle */}
        <button
          onClick={toggleAutoPlay}
          className={`px-3 py-1.5 rounded-full border backdrop-blur-md text-xs font-bold flex items-center gap-1.5 transition-all shadow-lg cursor-pointer active:scale-95 ${
            isAutoPlaying 
              ? 'bg-cyan-500/30 border-cyan-400 text-cyan-200' 
              : 'bg-white/15 hover:bg-white/25 border-white/20 text-white'
          }`}
          title={isAutoPlaying ? "Pause Auto Scroll" : "Play Whole-Page Film Automatically"}
        >
          {isAutoPlaying ? <Pause size={12} className="text-cyan-300" /> : <Play size={12} className="text-cyan-400 fill-cyan-400" />}
          <span className="hidden sm:inline">{isAutoPlaying ? 'Pause' : 'Auto Play'}</span>
        </button>

        {/* Sound Mode Modal Button */}
        <button
          onClick={() => setIsVideoModalOpen(true)}
          className="px-3 py-1.5 rounded-full bg-white/15 hover:bg-white/25 border border-white/20 backdrop-blur-md text-xs font-bold text-white flex items-center gap-1.5 transition-all shadow-lg cursor-pointer active:scale-95"
          title="Watch full video with sound"
        >
          <Volume2 size={13} className="text-blue-400" />
          <span className="hidden sm:inline">Sound</span>
        </button>
      </div>

      {/* ── Global Bottom Scroll Progress Line ── */}
      <div className="fixed bottom-0 left-0 right-0 h-1 bg-white/10 z-40 pointer-events-none">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 transition-all duration-75"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      {/* ── Full Film Video Modal (Sound Mode) ── */}
      {isVideoModalOpen && (
        <div 
          className="fixed inset-0 z-[999999] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 animate-in fade-in duration-300 pointer-events-auto"
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
