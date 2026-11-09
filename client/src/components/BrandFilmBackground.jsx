import React, { useEffect, useRef, useState, useCallback } from 'react';

const TOTAL_FRAMES = 239;
const getFrameSrc = (index) => `/brand-film/frame_${String(index).padStart(3, '0')}.webp`;

export default function BrandFilmBackground() {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth < 768 || /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent || '');
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent || ''));
    };
    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const canvasRef = useRef(null);
  const imagesRef = useRef(new Array(TOTAL_FRAMES));
  const loadedFlagsRef = useRef(new Uint8Array(TOTAL_FRAMES));
  const lastDrawnFrameRef = useRef(-1);
  const rafIdRef = useRef(null);
  const progressBarRef = useRef(null);

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

    // ── Watermark Elimination: 7% outward zoom pushes bottom-right watermark 100% off-screen ──
    const zoom = 1.07;
    const zWidth = drawWidth * zoom;
    const zHeight = drawHeight * zoom;
    const zOffsetX = (cWidth - zWidth) / 2;
    const zOffsetY = (cHeight - zHeight) / 2;

    ctx.drawImage(img, zOffsetX, zOffsetY, zWidth, zHeight);
    lastDrawnFrameRef.current = frameIndex;
  }, []);

  // 3. Ultra-Lightweight Chunked Preloader (Disabled on mobile)
  useEffect(() => {
    if (isMobile) return;
    let mounted = true;

    const loadImage = (idx) => {
      if (imagesRef.current[idx]) return;
      const img = new Image();
      img.src = getFrameSrc(idx);
      const onDone = () => {
        if (!mounted) return;
        loadedFlagsRef.current[idx] = 1;
        if ((idx === 0 && lastDrawnFrameRef.current <= 0) || lastDrawnFrameRef.current === idx) {
          drawFrame(idx);
        }
      };
      if (img.complete && img.naturalWidth > 0) {
        onDone();
      } else {
        img.onload = onDone;
      }
      imagesRef.current[idx] = img;
    };

    // Phase 1: Frame 0 immediately (<50ms initial paint)
    loadImage(0);

    // Phase 2: Keyframes every 4th frame (~60 frames = 2.2MB total)
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

  // 4. Responsive Canvas Sizing
  useEffect(() => {
    if (isMobile) return;
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

  // 5. Zero-State-Rerender Scroll Engine (Disabled on mobile)
  useEffect(() => {
    if (isMobile) return;
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

      // Direct DOM progress line update (zero React re-renders)
      if (progressBarRef.current) {
        progressBarRef.current.style.width = `${p * 100}%`;
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

    return () => {
      if (scroller !== window && scroller) {
        scroller.removeEventListener('scroll', handleScroll);
      }
      window.removeEventListener('scroll', handleScroll, { capture: true });
      document.removeEventListener('scroll', handleScroll, { capture: true });
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [drawFrame, getScroller]);

  if (isMobile) {
    return null; // Zero background animation or video canvas on mobile
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* ── Instant Fallback Poster Layer (Zero Black Screen Flash on Initial Load) ── */}
      <img
        src="/brand-film/frame_000.webp"
        alt=""
        fetchpriority="high"
        loading="eager"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover scale-[1.07] pointer-events-none select-none"
      />

      {/* ── Fixed Fullscreen High-DPI Video Canvas ── */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full object-cover relative z-10"
      />

      {/* ── Ambient Contrast Veil (Tones down bright laptop glare so text is 100% visible) ── */}
      <div className="absolute inset-0 bg-slate-950/45 pointer-events-none z-20" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/50 pointer-events-none z-20" />
      {/* Corner protection (Ensures zero watermark or symbol leakage in bottom-right corner) */}
      <div className="absolute bottom-0 right-0 w-48 h-32 bg-gradient-to-tl from-slate-950 via-slate-950/70 to-transparent pointer-events-none z-20" />

      {/* ── Global Bottom Scroll Progress Line ── */}
      <div className="fixed bottom-0 left-0 right-0 h-1 bg-white/10 z-40 pointer-events-none">
        <div 
          ref={progressBarRef}
          className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 transition-all duration-75"
          style={{ width: '0%' }}
        />
      </div>
    </div>
  );
}
