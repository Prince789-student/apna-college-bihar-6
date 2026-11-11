import React, { useEffect, useRef, useState, useCallback } from 'react';

const TOTAL_FRAMES = 239;
const getFrameSrc = (index) => `/brand-film/frame_${String(index).padStart(3, '0')}.webp`;

export default function BrandFilmBackground() {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth < 768 || /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent || '');
  });
  const [canvasReady, setCanvasReady] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent || ''));
    };
    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const patchCanvasRef = useRef(null);
  const imagesRef = useRef(new Array(TOTAL_FRAMES));
  const lastDrawnFrameRef = useRef(-1);
  const canvasReadyRef = useRef(false);
  const rafIdRef = useRef(null);
  const progressBarRef = useRef(null);
  const loadImageRef = useRef(null);

  // 1. Detect Active Scroll Container
  const getScroller = useCallback(() => {
    return document.getElementById('main-scroll-container') || window;
  }, []);

  // 2. High-Performance Canvas Drawing with Fallback to Closest Keyframe (Zero Blur Readback)
  const drawFrame = useCallback((frameIndex) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let ctx = ctxRef.current;
    if (!ctx) {
      ctx = canvas.getContext('2d', { alpha: false });
      ctxRef.current = ctx;
    }
    if (!ctx) return;

    let img = imagesRef.current[frameIndex];

    // If exact frame isn't loaded yet, trigger async fetch for nearest 3rd frame and display closest loaded keyframe
    if (!img || !img.complete || img.naturalWidth === 0) {
      if (loadImageRef.current) {
        const nearestKey = Math.min(TOTAL_FRAMES - 1, Math.round(frameIndex / 3) * 3);
        loadImageRef.current(nearestKey);
      }
      for (let offset = 1; offset < 45; offset++) {
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

    let drawWidth, drawHeight;
    if (canvasRatio > imgRatio) {
      drawWidth = cWidth;
      drawHeight = cWidth / imgRatio;
    } else {
      drawHeight = cHeight;
      drawWidth = cHeight * imgRatio;
    }

    // Watermark Elimination: 7% outward zoom pushes bottom-right corner edge off-screen
    const zoom = 1.07;
    const zWidth = drawWidth * zoom;
    const zHeight = drawHeight * zoom;
    const zOffsetX = (cWidth - zWidth) / 2;
    const zOffsetY = (cHeight - zHeight) / 2;

    ctx.drawImage(img, zOffsetX, zOffsetY, zWidth, zHeight);

    // Conceal 4-point star watermark via 96x80 feathered offscreen stamp (zero ctx.filter GPU readback)
    try {
      const patchX = zOffsetX + zWidth * 0.875;
      const patchY = zOffsetY + zHeight * 0.77;
      const patchW = zWidth * 0.065;
      const patchH = zHeight * 0.10;
      const sx = iWidth * 0.875;
      const sy = iHeight * 0.88;
      const sw = iWidth * 0.065;
      const sh = iHeight * 0.10;

      let pCanvas = patchCanvasRef.current;
      if (!pCanvas) {
        pCanvas = document.createElement('canvas');
        pCanvas.width = 96;
        pCanvas.height = 80;
        patchCanvasRef.current = pCanvas;
      }
      const pCtx = pCanvas.getContext('2d');
      pCtx.globalCompositeOperation = 'source-over';
      pCtx.clearRect(0, 0, 96, 80);
      pCtx.drawImage(img, sx, sy, sw, sh, 0, 0, 96, 80);
      pCtx.globalCompositeOperation = 'destination-in';
      const grad = pCtx.createRadialGradient(48, 40, 8, 48, 40, 46);
      grad.addColorStop(0, 'rgba(0,0,0,1)');
      grad.addColorStop(0.55, 'rgba(0,0,0,0.92)');
      grad.addColorStop(1, 'rgba(0,0,0,0)');
      pCtx.fillStyle = grad;
      pCtx.fillRect(0, 0, 96, 80);

      ctx.drawImage(pCanvas, patchX, patchY, patchW, patchH);
    } catch (e) {}

    lastDrawnFrameRef.current = frameIndex;
    if (!canvasReadyRef.current) {
      canvasReadyRef.current = true;
      setCanvasReady(true);
    }
  }, []);

  // 3. Bandwidth-Friendly Concurrency-Limited Preloader (Disabled on mobile)
  useEffect(() => {
    if (isMobile) return;
    let mounted = true;
    let startedCoarse = false;

    const loadImage = (idx, onFinish) => {
      if (idx < 0 || idx >= TOTAL_FRAMES) {
        if (onFinish) onFinish();
        return;
      }
      const existing = imagesRef.current[idx];
      if (existing) {
        if (onFinish) {
          if (existing.complete) onFinish();
          else existing.addEventListener('load', onFinish, { once: true });
        }
        return;
      }
      const img = new Image();
      img.decoding = 'async';
      const onDone = () => {
        if (!mounted) return;
        if ((idx === 0 && lastDrawnFrameRef.current <= 0) || lastDrawnFrameRef.current === idx) {
          drawFrame(idx);
        }
        if (onFinish) onFinish();
      };
      img.onload = onDone;
      img.onerror = () => { if (onFinish) onFinish(); };
      img.src = getFrameSrc(idx);
      imagesRef.current[idx] = img;
      if (img.complete && img.naturalWidth > 0) {
        onDone();
      }
    };

    loadImageRef.current = loadImage;

    // Phase 1: Frame 0 immediately (<50ms initial paint)
    loadImage(0);

    // Concurrency-capped queue runner (keeps main thread & network unblocked)
    const runQueue = (indices, concurrency, onAllDone) => {
      let cursor = 0;
      let active = 0;
      const pump = () => {
        if (!mounted) return;
        if (cursor >= indices.length && active === 0) {
          if (onAllDone) onAllDone();
          return;
        }
        while (active < concurrency && cursor < indices.length) {
          const nextIdx = indices[cursor++];
          active++;
          loadImage(nextIdx, () => {
            active--;
            if (mounted) pump();
          });
        }
      };
      pump();
    };

    const startProgressiveLoad = () => {
      if (!mounted || startedCoarse) return;
      startedCoarse = true;

      // Phase 2: 30 evenly-spaced keyframes (step = 8, ~1.1 MB) at concurrency 3
      const coarse = [];
      for (let i = 8; i < TOTAL_FRAMES; i += 8) coarse.push(i);

      runQueue(coarse, 3, () => {
        if (!mounted) return;
        // Phase 3: Upgrade to step = 4 (~30 more frames) gently after page settles
        const fine = [];
        for (let i = 4; i < TOTAL_FRAMES; i += 8) fine.push(i);
        const startFine = () => {
          if (!mounted) return;
          runQueue(fine, 2);
        };
        setTimeout(() => {
          if (!mounted) return;
          if (typeof window.requestIdleCallback === 'function') {
            window.requestIdleCallback(startFine, { timeout: 2000 });
          } else {
            startFine();
          }
        }, 1200);
      });
    };

    // Start after initial paint & hydration settle (1100ms) or immediately on first scroll
    const timer = setTimeout(startProgressiveLoad, 1100);
    const onFirstScroll = () => startProgressiveLoad();
    window.addEventListener('scroll', onFirstScroll, { passive: true, capture: true, once: true });

    return () => {
      mounted = false;
      clearTimeout(timer);
      window.removeEventListener('scroll', onFirstScroll, { capture: true });
    };
  }, [drawFrame, isMobile]);

  // 4. Responsive Canvas Sizing (Capped at 1.25x DPR for 4x faster fill under dark veil)
  useEffect(() => {
    if (isMobile) return;
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      // 1x DPR for darkened background film canvas cuts fill pixels cleanly; CSS upscales smoothly on GPU
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ctxRef.current = canvas.getContext('2d', { alpha: false });

      const target = lastDrawnFrameRef.current >= 0 ? lastDrawnFrameRef.current : 0;
      drawFrame(target);
    };

    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, [drawFrame, isMobile]);

  // 5. Zero-Layout Scroll Engine (Disabled on mobile)
  useEffect(() => {
    if (isMobile) return;
    const scroller = getScroller();

    const updateScroll = () => {
      rafIdRef.current = null;
      let p = 0;

      if (scroller !== window && scroller && scroller.scrollHeight > scroller.clientHeight) {
        const maxScroll = scroller.scrollHeight - scroller.clientHeight;
        p = maxScroll > 0 ? scroller.scrollTop / maxScroll : 0;
      } else {
        const docHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
        const maxScroll = docHeight - window.innerHeight;
        const scrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
        p = maxScroll > 0 ? scrollTop / maxScroll : 0;
      }

      p = Math.max(0, Math.min(1, p));

      // GPU compositor-only progress update (zero layout/style recalc)
      if (progressBarRef.current) {
        progressBarRef.current.style.transform = `scaleX(${p})`;
      }

      const targetFrame = Math.min(TOTAL_FRAMES - 1, Math.floor(p * (TOTAL_FRAMES - 1)));
      if (targetFrame !== lastDrawnFrameRef.current) {
        drawFrame(targetFrame);
      }
    };

    const handleScroll = () => {
      if (rafIdRef.current) return;
      rafIdRef.current = requestAnimationFrame(updateScroll);
    };

    if (scroller !== window && scroller) {
      scroller.addEventListener('scroll', handleScroll, { passive: true });
    }
    window.addEventListener('scroll', handleScroll, { passive: true, capture: true });

    updateScroll();

    return () => {
      if (scroller !== window && scroller) {
        scroller.removeEventListener('scroll', handleScroll);
      }
      window.removeEventListener('scroll', handleScroll, { capture: true });
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
    };
  }, [drawFrame, getScroller, isMobile]);

  if (isMobile) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-transparent" style={{ backgroundColor: 'transparent' }}>
      {/* Instant Fallback Poster Layer (Zero Black Screen Flash on Initial Load) */}
      <img
        src="/brand-film/frame_000.webp"
        alt=""
        fetchpriority="high"
        loading="eager"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover scale-[1.07] pointer-events-none select-none z-0"
      />

      {/* Fallback Poster Watermark Blocker (Conceals watermark star symbol before canvas boots) */}
      <div className="absolute bottom-[13%] right-[7%] w-24 h-24 rounded-full bg-[#8b5a38]/85 blur-lg pointer-events-none z-5" />

      {/* Fixed Fullscreen Video Canvas (Smoothly reveals when frame 0 is drawn) */}
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 w-full h-full object-cover relative z-10 transition-opacity duration-300 ${
          canvasReady ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ willChange: 'transform', transform: 'translateZ(0)' }}
      />

      {/* Ambient Contrast Veil (Tones down bright laptop glare so text is 100% visible) */}
      <div className="absolute inset-0 bg-slate-950/45 pointer-events-none z-20" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/50 pointer-events-none z-20" />
      {/* Corner protection */}
      <div className="absolute bottom-0 right-0 w-64 h-48 bg-gradient-to-tl from-slate-950/90 via-slate-950/50 to-transparent pointer-events-none z-20" />

      {/* Global Bottom Scroll Progress Line (GPU scaleX, zero reflow) */}
      <div className="fixed bottom-0 left-0 right-0 h-1 bg-white/10 z-40 pointer-events-none">
        <div
          ref={progressBarRef}
          className="w-full h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400"
          style={{ transform: 'scaleX(0)', transformOrigin: 'left center', willChange: 'transform' }}
        />
      </div>
    </div>
  );
}
