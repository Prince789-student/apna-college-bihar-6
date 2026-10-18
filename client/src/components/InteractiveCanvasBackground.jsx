import React, { useEffect, useRef } from 'react';

/**
 * InteractiveCanvasBackground - Full Motion Aurora & Constellation Engine
 * Combines flowing harmonic liquid ribbons, glowing energetic constellation nodes,
 * pulse synapsing along connecting filaments, interactive magnetic cursor waves,
 * and glowing stardust trails for maximum visual WOW factor across all pages.
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

    // Global cursor & interaction state
    const interaction = {
      x: -1000,
      y: -1000,
      prevX: -1000,
      prevY: -1000,
      speed: 0,
      radius: 170,
      active: false,
      ripples: []
    };

    // Stardust trail particles spawned on mouse movement
    const trailParticles = [];

    // Constellation particle nodes
    const particleCount = Math.min(Math.max(Math.floor((width * height) / 12000), 55), 105);
    const particles = [];
    const colors = [
      { r: 37, g: 99, b: 235 },   // Royal Blue #2563eb
      { r: 99, g: 102, b: 241 },  // Electric Indigo #6366f1
      { r: 16, g: 185, b: 129 },  // Emerald #10b981
      { r: 14, g: 165, b: 233 },  // Sky Cyan #0ea5e9
      { r: 139, g: 92, b: 246 }   // Violet #8b5cf6
    ];

    for (let i = 0; i < particleCount; i++) {
      const col = colors[i % colors.length];
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.95,
        vy: (Math.random() - 0.5) * 0.95,
        baseRadius: Math.random() * 2.2 + 1.8,
        radius: Math.random() * 2.2 + 1.8,
        color: col,
        pulseOffset: Math.random() * Math.PI * 2,
        pulseSpeed: 0.03 + Math.random() * 0.02
      });
    }

    // Dynamic wave parameters for flowing aurora ribbons
    const waves = [
      { amp: 42, freq: 0.0022, speed: 0.018, yOffset: 0.28, color1: 'rgba(99, 102, 241, 0.16)', color2: 'rgba(14, 165, 233, 0.02)' },
      { amp: 55, freq: 0.0018, speed: 0.014, yOffset: 0.52, color1: 'rgba(37, 99, 235, 0.14)', color2: 'rgba(16, 185, 129, 0.02)' },
      { amp: 48, freq: 0.0026, speed: 0.022, yOffset: 0.76, color1: 'rgba(139, 92, 246, 0.13)', color2: 'rgba(99, 102, 241, 0.02)' }
    ];

    // Mouse & Touch tracking
    const updatePointer = (clientX, clientY) => {
      const dx = clientX - interaction.x;
      const dy = clientY - interaction.y;
      interaction.speed = Math.min(Math.hypot(dx, dy), 50);
      interaction.prevX = interaction.x;
      interaction.prevY = interaction.y;
      interaction.x = clientX;
      interaction.y = clientY;
      interaction.active = true;

      // Spawn stardust particles along path
      if (Math.random() < 0.6 && trailParticles.length < 40) {
        const c = colors[Math.floor(Math.random() * colors.length)];
        trailParticles.push({
          x: clientX + (Math.random() - 0.5) * 14,
          y: clientY + (Math.random() - 0.5) * 14,
          vx: (Math.random() - 0.5) * 1.2,
          vy: (Math.random() - 0.5) * 1.2 - 0.4,
          radius: Math.random() * 2.8 + 1.5,
          alpha: 0.85,
          color: c
        });
      }
    };

    const onMouseMove = (e) => updatePointer(e.clientX, e.clientY);
    const onMouseLeave = () => {
      interaction.active = false;
      interaction.x = -1000;
      interaction.y = -1000;
    };

    const onClick = (e) => {
      interaction.ripples.push({
        x: e.clientX,
        y: e.clientY,
        radius: 5,
        maxRadius: Math.max(width, height) * 0.45,
        alpha: 0.65,
        speed: 7
      });
    };

    const onTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        updatePointer(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const onTouchEnd = () => {
      interaction.active = false;
      interaction.x = -1000;
      interaction.y = -1000;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('click', onClick, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd, { passive: true });

    let tick = 0;

    // High performance 60FPS Full-Motion Render Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      tick += 1;

      // ── 1. RENDER FLOWING LIQUID AURORA RIBBONS ──
      for (let w = 0; w < waves.length; w++) {
        const wave = waves[w];
        const baseY = height * wave.yOffset;
        const phase = tick * wave.speed;

        ctx.beginPath();
        ctx.moveTo(0, height);
        ctx.lineTo(0, baseY);

        // Calculate smooth flowing bezier curve across width
        for (let x = 0; x <= width; x += 30) {
          // Double sine harmonic oscillation for natural liquid look
          let y = baseY + 
            Math.sin(x * wave.freq + phase) * wave.amp + 
            Math.cos(x * wave.freq * 0.6 - phase * 0.8) * (wave.amp * 0.4);

          // Interaction bulge if pointer is near wave
          if (interaction.active) {
            const distXP = Math.abs(x - interaction.x);
            if (distXP < 180) {
              const influence = (1 - distXP / 180) * 28;
              y += (interaction.y > baseY ? influence : -influence);
            }
          }

          ctx.lineTo(x, y);
        }

        ctx.lineTo(width, height);
        ctx.closePath();

        const grad = ctx.createLinearGradient(0, baseY - wave.amp, 0, baseY + wave.amp * 2);
        grad.addColorStop(0, wave.color1);
        grad.addColorStop(1, wave.color2);
        ctx.fillStyle = grad;
        ctx.fill();
      }

      // ── 2. RENDER INTERACTIVE SHOCKWAVE RIPPLES ──
      for (let r = interaction.ripples.length - 1; r >= 0; r--) {
        const rip = interaction.ripples[r];
        rip.radius += rip.speed;
        rip.alpha *= 0.965;

        ctx.beginPath();
        ctx.arc(rip.x, rip.y, rip.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(37, 99, 235, ${rip.alpha})`;
        ctx.lineWidth = Math.max(1, (1 - rip.radius / rip.maxRadius) * 3);
        ctx.stroke();

        if (rip.alpha < 0.02 || rip.radius >= rip.maxRadius) {
          interaction.ripples.splice(r, 1);
        }
      }

      // ── 3. RENDER STARDUST TRAIL PARTICLES ──
      for (let t = trailParticles.length - 1; t >= 0; t--) {
        const tp = trailParticles[t];
        tp.x += tp.vx;
        tp.y += tp.vy;
        tp.alpha *= 0.94;
        tp.radius *= 0.97;

        ctx.beginPath();
        ctx.arc(tp.x, tp.y, Math.max(0.6, tp.radius), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${tp.color.r}, ${tp.color.g}, ${tp.color.b}, ${tp.alpha})`;
        ctx.fill();

        if (tp.alpha < 0.05 || tp.radius < 0.5) {
          trailParticles.splice(t, 1);
        }
      }

      // ── 4. UPDATE & DRAW CONSTELLATION GRAPH ──
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Velocity motion
        p.x += p.vx;
        p.y += p.vy;

        // Dynamic harmonic drift wobble
        p.x += Math.sin(tick * 0.02 + p.pulseOffset) * 0.35;
        p.y += Math.cos(tick * 0.02 + p.pulseOffset) * 0.35;

        // Wrap around viewport boundaries seamlessly
        if (p.x < -30) p.x = width + 30;
        else if (p.x > width + 30) p.x = -30;

        if (p.y < -30) p.y = height + 30;
        else if (p.y > height + 30) p.y = -30;

        // Mouse Magnetic Repulsion & Swirl
        if (interaction.active) {
          const dx = interaction.x - p.x;
          const dy = interaction.y - p.y;
          const dist = Math.hypot(dx, dy);

          if (dist < interaction.radius && dist > 0) {
            const force = (1 - dist / interaction.radius) * 4.8;
            p.x -= (dx / dist) * force;
            p.y -= (dy / dist) * force;
            p.radius = p.baseRadius * 1.8;
          } else {
            p.radius = p.baseRadius;
          }
        } else {
          p.radius = p.baseRadius;
        }

        // Particle Breathing Pulse
        const breathingAlpha = 0.45 + Math.sin(tick * p.pulseSpeed + p.pulseOffset) * 0.3;

        // Draw particle node with soft glowing halo
        ctx.save();
        ctx.shadowBlur = 10;
        ctx.shadowColor = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, 0.7)`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${breathingAlpha})`;
        ctx.fill();
        ctx.restore();

        // Connect nearby nodes with glowing energy filaments
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist2 = Math.hypot(p.x - p2.x, p.y - p2.y);

          if (dist2 < 135) {
            const filamentAlpha = (1 - dist2 / 135) * 0.32;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(99, 102, 241, ${filamentAlpha})`;
            ctx.lineWidth = filamentAlpha * 1.6;
            ctx.stroke();

            // Light pulse energy travelling along filament periodically
            if ((i + j + Math.floor(tick * 0.08)) % 28 === 0) {
              const progress = ((tick * 0.04) % 1);
              const px = p.x + (p2.x - p.x) * progress;
              const py = p.y + (p2.y - p.y) * progress;
              ctx.beginPath();
              ctx.arc(px, py, 1.8, 0, Math.PI * 2);
              ctx.fillStyle = `rgba(56, 189, 248, ${filamentAlpha * 1.8})`;
              ctx.fill();
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('click', onClick);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-[12]"
      style={{ opacity: 0.95 }}
      aria-hidden="true"
    />
  );
}
