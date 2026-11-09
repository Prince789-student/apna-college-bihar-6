import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Play, Pause, Volume2, X, Download } from 'lucide-react';

const TOTAL_FRAMES = 239;
const getFrameSrc = (index) => `/brand-film/frame_${String(index).padStart(3, '0')}.webp`;

export default function BrandFilmBackground() {
  const canvasRef = useRef(null);
  const imagesRef = useRef(new Array(TOTAL_FRAMES));
  const loadedFlagsRef = useRef(new Uint8Array(TOTAL_FRAMES));
  const lastDrawnFrameRef = useRef(-1);
  const rafIdRef = useRef(null);
  const autoPlayTimerRef = useRef(null);
  const timecodeRef = useRef(null);
  const progressBarRef = useRef(null);

  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);

  // 1. Detect Active Scroll Container
  const getScroller = useCallback(() => {
    return (
      document.getElementById('main-scroll-container') ||
      window
    );
  }, []);

  // 2. High-Performance Canvas Drawing with Fallback to Closest Keyframe
  const drawFrame = useCallback((frameIndex) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let img = imagesRef.current[frameIndex];

    // If exact frame is not yet loaded, find closest loaded frame in memory
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

    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    lastDrawnFrameRef.current = frameIndex;
  }, []);

  // 3. Ultra-Lightweight Chunked Preloader (No network flood, super fast page load)
  useEffect(() => {
    let mounted = true;

    const loadImage = (idx) => {
      if (imagesRef.current[idx]) return;
      const img = new Image();
      img.src = getFrameSrc(idx);
      img.onload = () => {
        if (!mounted) return;
        loadedFlagsRef.current[idx] = 1;
        if (idx === 0 && lastDrawnFrameRef.current === -1) {
          drawFrame(0);
        } else if (lastDrawnFrameRef.current === idx) {
          drawFrame(idx);
        }
      };
      imagesRef.current[idx] = img;
    };

    // Phase 1: Frame 0 immediately
    loadImage(0);

    // Phase 2: Keyframes every 4th frame (only ~60 frames = 2.2MB total)
    const loadKeyframes = () => {
      for (let i = 4; i < TOTAL_FRAMES; i += 4) {
        loadImage(i);
      }
    };

    // Phase 3: Fill remaining intermediate frames in small progressive batches
    const loadRemainingFrames = () => {
      let currentBatchStart = 1;
      const loadBatch = () => {
        if (!mounted) return;
        let count = 0;
        for (let i = currentBatchStart; i < TOTAL_FRAMES && count < 8; i++) {
          if (i % 4 !== 0) {
            loadImage(i);
            count++;
          }
          currentBatchStart = i + 1;
        }
        if (currentBatchStart < TOTAL_FRAMES) {
          if (typeof window.requestIdleCallback === 'function') {
            window.requestIdleCallback(loadBatch, { timeout: 800 });
          } else {
            setTimeout(loadBatch, 60);
          }
        }
      };
      loadBatch();
    };

    // Stagger loading so main thread is 100% idle for smooth user interactions
    const keyframeTimer = setTimeout(() => {
      if (!mounted) return;
      loadKeyframes();
      const remainingTimer = setTimeout(loadRemainingFrames, 400);
      return () => clearTimeout(remainingTimer);
    }, 100);

    return () => {
      mounted = false;
      clearTimeout(keyframeTimer);
    };
  }, [drawFrame]);

  // 4. Responsive Canvas Sizing (Clamped DPR for smooth mobile performance)
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      const isMobile = window.innerWidth < 768;
      const dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1.5 : 2);

      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;

      const target = lastDrawnFrameRef.current >= 0 ? lastDrawnFrameRef.current : 0;
      drawFrame(target);
    };

    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, [drawFrame]);

  // 5. Zero-State-Rerender Scroll Engine (60fps - 120fps solid, no React lag)
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

      // Direct DOM updates (zero React re-renders during scrolling!)
      if (progressBarRef.current) {
        progressBarRef.current.style.width = `${p * 100}%`;
      }
      if (timecodeRef.current) {
        const sec = Math.floor(p * 9.96);
        timecodeRef.current.innerText = `00:${String(sec).padStart(2, '0')}`;
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

      const totalDuration = 18000; // 18s smooth full-page glide
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

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* ── Fixed Fullscreen High-DPI Video Canvas ── */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* ── Soft Ambient Vignette (Keeps Video Vivid & Beautifully Visible) ── */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/50 pointer-events-none" />

      {/* ── Floating Minimalist HUD Controls ── */}
      <div className="absolute top-20 right-4 sm:right-8 z-30 flex items-center gap-2 pointer-events-auto">
        {/* Timecode */}
        <div className="px-3 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-[11px] font-mono text-slate-300 shadow-xl">
          <span ref={timecodeRef} className="text-cyan-400 font-bold">00:00</span>
          <span className="text-slate-500"> / </span>
          <span className="text-slate-400">00:10</span>
        </div>

        {/* Auto Play Toggle */}
        <button
          onClick={toggleAutoPlay}
          className={`px-3 py-1.5 rounded-full border backdrop-blur-md text-xs font-bold flex items-center gap-1.5 transition-all shadow-xl cursor-pointer active:scale-95 ${
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
          className="px-3 py-1.5 rounded-full bg-white/15 hover:bg-white/25 border border-white/20 backdrop-blur-md text-xs font-bold text-white flex items-center gap-1.5 transition-all shadow-xl cursor-pointer active:scale-95"
          title="Watch full video with sound"
        >
          <Volume2 size={13} className="text-blue-400" />
          <span className="hidden sm:inline">Sound</span>
        </button>
      </div>

      {/* ── Global Bottom Scroll Progress Line ── */}
      <div className="fixed bottom-0 left-0 right-0 h-1 bg-white/10 z-40 pointer-events-none">
        <div 
          ref={progressBarRef}
          className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 transition-all duration-75"
          style={{ width: '0%' }}
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
