import React, { useEffect, useRef } from 'react';

/**
 * InteractiveCanvasBackground - Canvas-UI inspired particle constellation engine
 * Renders a high-performance 60fps connected particle graph across the entire website.
 * Tracks global mouse/touch movements, magnetic particle repulsion, click impulse waves,
 * and ambient orbital breathing dynamics.
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
      radius: 140,
      active: false,
      clickWave: 0,
      clickX: 0,
      clickY: 0
    };

    // Responsive particle count (balanced for 60fps across phones & 4K screens)
    const particleCount = Math.min(Math.max(Math.floor((width * height) / 14000), 45), 95);
    const particles = [];
    const colorPalette = [
      'rgba(37, 99, 235, ',   // Brand Blue (#2563eb)
      'rgba(99, 102, 241, ',  // Indigo (#6366f1)
      'rgba(16, 185, 129, ',  // Emerald (#10b981)
      'rgba(14, 165, 233, '   // Sky Blue (#0ea5e9)
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        baseRadius: Math.random() * 1.8 + 1.2,
        radius: Math.random() * 1.8 + 1.2,
        colorPrefix: colorPalette[Math.floor(Math.random() * colorPalette.length)],
        alpha: Math.random() * 0.35 + 0.3
      });
    }

    // Mouse listeners (global, non-blocking)
    const onMouseMove = (e) => {
      interaction.x = e.clientX;
      interaction.y = e.clientY;
      interaction.active = true;
    };

    const onMouseLeave = () => {
      interaction.active = false;
      interaction.x = -1000;
      interaction.y = -1000;
    };

    const onClick = (e) => {
      interaction.clickX = e.clientX;
      interaction.clickY = e.clientY;
      interaction.clickWave = 0.05;
    };

    // Touch support for mobile devices
    const onTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        interaction.x = e.touches[0].clientX;
        interaction.y = e.touches[0].clientY;
        interaction.active = true;
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

    // 60FPS Render Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      tick += 0.015;

      // Render Expanding Click Impulse Wave
      if (interaction.clickWave > 0) {
        ctx.beginPath();
        ctx.arc(interaction.clickX, interaction.clickY, interaction.clickWave * 180, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(37, 99, 235, ${Math.max(0, 0.7 - interaction.clickWave * 0.7)})`;
        ctx.lineWidth = 2.2;
        ctx.stroke();
        interaction.clickWave += 0.035;
        if (interaction.clickWave > 1) interaction.clickWave = 0;
      }

      // Update & Draw Particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Velocity motion
        p.x += p.vx;
        p.y += p.vy;

        // Subtle ambient orbital drift
        p.x += Math.sin(tick + i) * 0.15;
        p.y += Math.cos(tick + i) * 0.15;

        // Screen boundary wrapping
        if (p.x < -20) p.x = width + 20;
        else if (p.x > width + 20) p.x = -20;

        if (p.y < -20) p.y = height + 20;
        else if (p.y > height + 20) p.y = -20;

        // Cursor / Touch Magnetic Repulsion
        if (interaction.active) {
          const dx = interaction.x - p.x;
          const dy = interaction.y - p.y;
          const dist = Math.hypot(dx, dy);

          if (dist < interaction.radius && dist > 0) {
            const force = (1 - dist / interaction.radius) * 3.2;
            p.x -= (dx / dist) * force;
            p.y -= (dy / dist) * force;
            p.radius = p.baseRadius * 1.5;
          } else {
            p.radius = p.baseRadius;
          }
        } else {
          p.radius = p.baseRadius;
        }

        // Draw particle node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.colorPrefix}${p.alpha})`;
        ctx.fill();

        // Connect nearby nodes with delicate constellation lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist2 = Math.hypot(p.x - p2.x, p.y - p2.y);

          if (dist2 < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            const lineAlpha = (1 - dist2 / 120) * 0.18;
            ctx.strokeStyle = `rgba(99, 102, 241, ${lineAlpha})`;
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
      style={{ opacity: 0.85 }}
      aria-hidden="true"
    />
  );
}
