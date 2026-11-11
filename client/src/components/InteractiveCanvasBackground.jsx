import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * InteractiveCanvasBackground - Executive Academic Silk Aurora Engine
 * Lightweight GPU-friendly ambient constellation layer for desktop subpages.
 * Disabled on mobile and homepage (BrandFilmBackground leads homepage).
 */
export default function InteractiveCanvasBackground() {
  const canvasRef = useRef(null);
  const location = useLocation();

  const isHomePage = location.pathname === '/' || location.pathname === '';
  const isMobileScreen = typeof window !== 'undefined' &&
    (window.innerWidth < 768 || /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent || ''));

  useEffect(() => {
    if (isHomePage || isMobileScreen) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    let animationFrameId = null;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let waveGradients = [];

    const silkWaves = [
      {
        yRatio: 0.32,
        amplitude: 34,
        frequency: 0.0016,
        speed: 0.012,
        colorStart: 'rgba(37, 99, 235, 0.08)',
        colorEnd: 'rgba(79, 70, 229, 0.01)'
      },
      {
        yRatio: 0.55,
        amplitude: 42,
        frequency: 0.0012,
        speed: 0.009,
        colorStart: 'rgba(79, 70, 229, 0.07)',
        colorEnd: 'rgba(14, 165, 233, 0.01)'
      },
      {
        yRatio: 0.78,
        amplitude: 38,
        frequency: 0.0018,
        speed: 0.014,
        colorStart: 'rgba(14, 165, 233, 0.06)',
        colorEnd: 'rgba(16, 185, 129, 0.01)'
      }
    ];

    const rebuildGradients = () => {
      waveGradients = silkWaves.map((wave) => {
        const baseY = height * wave.yRatio;
        const grad = ctx.createLinearGradient(0, baseY - wave.amplitude, 0, baseY + wave.amplitude * 3.5);
        grad.addColorStop(0, wave.colorStart);
        grad.addColorStop(1, wave.colorEnd);
        return grad;
      });
    };

    const resize = () => {
      if (!canvas) return;
      width = window.innerWidth;
      height = window.innerHeight;
      // Cap DPR to 1 for soft ambient canvas (4x fewer pixels per frame on Retina)
      canvas.width = width;
      canvas.height = height;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      rebuildGradients();
    };

    resize();
    window.addEventListener('resize', resize, { passive: true });

    const pointer = {
      targetX: width / 2,
      targetY: height / 2,
      currentX: width / 2,
      currentY: height / 2,
      active: false
    };

    const nodeCount = 20;
    const nodes = [];
    const brandColors = ['37, 99, 235', '79, 70, 229', '14, 165, 233', '16, 185, 129'];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 1.5 + 1.1,
        rgb: brandColors[i % brandColors.length],
        phase: Math.random() * Math.PI * 2,
        speed: 0.02 + Math.random() * 0.02
      });
    }

    const onPointerMove = (e) => {
      pointer.targetX = e.clientX;
      pointer.targetY = e.clientY;
      pointer.active = true;
    };

    const onPointerLeave = () => {
      pointer.active = false;
      pointer.targetX = width / 2;
      pointer.targetY = height / 2;
    };

    window.addEventListener('mousemove', onPointerMove, { passive: true });
    window.addEventListener('mouseleave', onPointerLeave);

    let tick = 0;
    let lastTime = 0;
    let scrollPauseUntil = 0;
    const MAX_DIST_SQ = 125 * 125;

    const onScroll = () => {
      scrollPauseUntil = performance.now() + 180;
    };
    window.addEventListener('scroll', onScroll, { passive: true, capture: true });

    const render = (now) => {
      animationFrameId = requestAnimationFrame(render);
      if (document.hidden || now < scrollPauseUntil) return;
      if (now - lastTime < 42) return; // ~24 FPS ambient motion
      lastTime = now;

      ctx.clearRect(0, 0, width, height);
      tick += 1;

      pointer.currentX += (pointer.targetX - pointer.currentX) * 0.05;
      pointer.currentY += (pointer.targetY - pointer.currentY) * 0.05;
      const normPointerX = pointer.currentX / width - 0.5;
      const normPointerY = pointer.currentY / height - 0.5;

      // 1. Render Silk Aurora Waves using cached gradients
      for (let w = 0; w < silkWaves.length; w++) {
        const wave = silkWaves[w];
        const baseY = height * wave.yRatio + normPointerY * (18 * (w + 1));
        const phase = tick * wave.speed;

        ctx.beginPath();
        ctx.moveTo(0, height);
        ctx.lineTo(0, baseY);

        for (let x = 0; x <= width; x += 64) {
          const waveElevation =
            Math.sin(x * wave.frequency + phase + normPointerX * 0.8) * wave.amplitude +
            Math.cos(x * wave.frequency * 0.5 - phase * 0.7) * (wave.amplitude * 0.35);
          ctx.lineTo(x, baseY + waveElevation);
        }

        ctx.lineTo(width, height);
        ctx.closePath();
        ctx.fillStyle = waveGradients[w];
        ctx.fill();
      }

      // 2. Render Constellation Nodes (no Math.hypot, squared distance checks)
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx + Math.sin(tick * 0.02 + n.phase) * 0.2;
        n.y += n.vy + Math.cos(tick * 0.02 + n.phase) * 0.2;

        if (n.x < -20) n.x = width + 20;
        else if (n.x > width + 20) n.x = -20;
        if (n.y < -20) n.y = height + 20;
        else if (n.y > height + 20) n.y = -20;

        if (pointer.active) {
          const dx = pointer.currentX - n.x;
          const dy = pointer.currentY - n.y;
          const dSq = dx * dx + dy * dy;
          if (dSq < 22500 && dSq > 1) {
            const dist = Math.sqrt(dSq);
            const force = (1 - dist / 150) * 1.8;
            n.x -= (dx / dist) * force;
            n.y -= (dy / dist) * force;
          }
        }

        const alpha = 0.35 + Math.sin(tick * n.speed + n.phase) * 0.22;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${n.rgb}, ${alpha})`;
        ctx.fill();

        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dx = n.x - n2.x;
          const dy = n.y - n2.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < MAX_DIST_SQ) {
            const lineAlpha = (1 - Math.sqrt(distSq) / 125) * 0.16;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = `rgba(79, 70, 229, ${lineAlpha})`;
            ctx.lineWidth = 0.85;
            ctx.stroke();
          }
        }
      }
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', onScroll, { capture: true });
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('mouseleave', onPointerLeave);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isHomePage, isMobileScreen]);

  if (isHomePage || isMobileScreen) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-[12]"
      style={{ opacity: 0.92, willChange: 'transform', transform: 'translateZ(0)' }}
      aria-hidden="true"
    />
  );
}
