import React, { useEffect, useRef } from 'react';

/**
 * InteractiveCanvasBackground - Executive Academic Silk Aurora Engine
 * Designed specifically for Bihar Engineering University (BEU) academic ecosystem.
 * Delivers a continuous, living, fluid ambient motion with calm harmonic silk waves,
 * deep university cobalt & indigo gradients, and delicate celestial constellation nodes.
 * Adheres strictly to Emil Kowalski & Hallmark motion restraint:
 * - 0% visual noise or clutter
 * - 100% smooth, continuous 60fps ambient flow
 * - Never distracts from reading notes, formulas, or academic content
 */
export default function InteractiveCanvasBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    let animationFrameId;
    let width = window.innerWidth;
    let height = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      if (!canvas) return;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener('resize', resize);

    // Smooth inertia mouse tracking (damped spring)
    const pointer = {
      targetX: width / 2,
      targetY: height / 2,
      currentX: width / 2,
      currentY: height / 2,
      active: false
    };

    // Refined academic celestial constellation nodes (restrained & elegant)
    const nodeCount = Math.min(Math.max(Math.floor((width * height) / 22000), 28), 55);
    const nodes = [];
    const brandColors = [
      { r: 37, g: 99, b: 235 },   // BEU Royal Blue #2563eb
      { r: 79, g: 70, b: 229 },   // Academic Indigo #4f46e5
      { r: 14, g: 165, b: 233 },  // Sky Cyan #0ea5e9
      { r: 16, g: 185, b: 129 }   // Verified Emerald #10b981
    ];

    for (let i = 0; i < nodeCount; i++) {
      const col = brandColors[i % brandColors.length];
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 1.6 + 1.1,
        color: col,
        phase: Math.random() * Math.PI * 2,
        speed: 0.015 + Math.random() * 0.015
      });
    }

    // Curated Silk Aurora Wave Ribbons (Harmonic, smooth, and deeply elegant)
    const silkWaves = [
      {
        yRatio: 0.32,
        amplitude: 36,
        frequency: 0.0016,
        speed: 0.008,
        colorStart: 'rgba(37, 99, 235, 0.085)', // Deep Royal Blue
        colorEnd: 'rgba(79, 70, 229, 0.01)'
      },
      {
        yRatio: 0.55,
        amplitude: 44,
        frequency: 0.0012,
        speed: 0.006,
        colorStart: 'rgba(79, 70, 229, 0.075)', // Academic Indigo
        colorEnd: 'rgba(14, 165, 233, 0.01)'
      },
      {
        yRatio: 0.78,
        amplitude: 40,
        frequency: 0.0018,
        speed: 0.009,
        colorStart: 'rgba(14, 165, 233, 0.065)', // Cyan Glow
        colorEnd: 'rgba(16, 185, 129, 0.01)'
      }
    ];

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

    const onTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        pointer.targetX = e.touches[0].clientX;
        pointer.targetY = e.touches[0].clientY;
        pointer.active = true;
      }
    };

    window.addEventListener('mousemove', onPointerMove, { passive: true });
    window.addEventListener('mouseleave', onPointerLeave);
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onPointerLeave);

    let tick = 0;

    // 60FPS Continuous Executive Ambient Motion
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      tick += 1;

      // Smooth inertia lerp for subtle interactive parallax
      pointer.currentX += (pointer.targetX - pointer.currentX) * 0.035;
      pointer.currentY += (pointer.targetY - pointer.currentY) * 0.035;
      const normPointerX = (pointer.currentX / width - 0.5);
      const normPointerY = (pointer.currentY / height - 0.5);

      // ── 1. RENDER CONTINUOUS SILK AURORA WAVES ──
      for (let w = 0; w < silkWaves.length; w++) {
        const wave = silkWaves[w];
        const baseY = height * wave.yRatio + normPointerY * (22 * (w + 1));
        const phase = tick * wave.speed;

        ctx.beginPath();
        ctx.moveTo(0, height);
        ctx.lineTo(0, baseY);

        // Smooth wave stepping
        const step = 40;
        for (let x = 0; x <= width; x += step) {
          // Double harmonic sine oscillation creates liquid organic breathing
          const waveElevation = 
            Math.sin(x * wave.frequency + phase + normPointerX * 0.8) * wave.amplitude +
            Math.cos(x * wave.frequency * 0.5 - phase * 0.7) * (wave.amplitude * 0.35);

          ctx.lineTo(x, baseY + waveElevation);
        }

        ctx.lineTo(width, height);
        ctx.closePath();

        const grad = ctx.createLinearGradient(0, baseY - wave.amplitude, 0, baseY + wave.amplitude * 3.5);
        grad.addColorStop(0, wave.colorStart);
        grad.addColorStop(1, wave.colorEnd);
        ctx.fillStyle = grad;
        ctx.fill();
      }

      // ── 2. RENDER REFINED CELESTIAL CONSTELLATION ──
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];

        // Drift motion
        n.x += n.vx;
        n.y += n.vy;

        // Subtle gentle breathing wobble
        n.x += Math.sin(tick * 0.015 + n.phase) * 0.2;
        n.y += Math.cos(tick * 0.015 + n.phase) * 0.2;

        // Boundary wrap
        if (n.x < -20) n.x = width + 20;
        else if (n.x > width + 20) n.x = -20;
        if (n.y < -20) n.y = height + 20;
        else if (n.y > height + 20) n.y = -20;

        // Gentle cursor attraction/repulsion with dampening
        if (pointer.active) {
          const dx = pointer.currentX - n.x;
          const dy = pointer.currentY - n.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 150 && dist > 0) {
            const force = (1 - dist / 150) * 1.8;
            n.x -= (dx / dist) * force;
            n.y -= (dy / dist) * force;
          }
        }

        // Luminous breathing alpha
        const alpha = 0.35 + Math.sin(tick * n.speed + n.phase) * 0.22;

        // Draw calm glowing star node
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${n.color.r}, ${n.color.g}, ${n.color.b}, ${alpha})`;
        ctx.fill();

        // Connect nearby nodes with delicate whisper filaments
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dist2 = Math.hypot(n.x - n2.x, n.y - n2.y);

          if (dist2 < 125) {
            const lineAlpha = (1 - dist2 / 125) * 0.16;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = `rgba(79, 70, 229, ${lineAlpha})`;
            ctx.lineWidth = 0.85;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('mouseleave', onPointerLeave);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onPointerLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-[12]"
      style={{ opacity: 0.92 }}
      aria-hidden="true"
    />
  );
}
