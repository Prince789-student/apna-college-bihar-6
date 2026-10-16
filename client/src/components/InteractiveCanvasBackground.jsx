import React, { useEffect, useRef } from 'react';

/**
 * InteractiveCanvasBackground - Canvas-UI inspired particle constellation engine
 * Renders an interactive 60fps connected particle graph across the whole page.
 * Tracks global mouse movements, magnetic particle repulsion, and click impulse waves.
 */
export default function InteractiveCanvasBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Global mouse state
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 150,
      clickWave: 0,
      clickX: 0,
      clickY: 0
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Responsive particle count (80-100 particles for rich look without lagging)
    const particleCount = Math.min(Math.floor((width * height) / 11000), 90);
    const particles = [];
    const colors = [
      'rgba(37, 99, 235, ',   // Brand Blue
      'rgba(99, 102, 241, ',  // Indigo
      'rgba(124, 58, 237, ',  // Violet
      'rgba(16, 185, 129, '   // Emerald
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        baseRadius: Math.random() * 2 + 1.2,
        radius: Math.random() * 2 + 1.2,
        colorPrefix: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.45 + 0.35
      });
    }

    // Global mouse tracking across the entire website
    const onMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const onMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const onClick = (e) => {
      mouse.clickX = e.clientX;
      mouse.clickY = e.clientY;
      mouse.clickWave = 0.05;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('click', onClick, { passive: true });

    // 60FPS Render Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render Expanding Click Impulse Wave
      if (mouse.clickWave > 0) {
        ctx.beginPath();
        ctx.arc(mouse.clickX, mouse.clickY, mouse.clickWave * 160, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(59, 130, 246, ${Math.max(0, 1 - mouse.clickWave)})`;
        ctx.lineWidth = 2.5;
        ctx.stroke();
        mouse.clickWave += 0.035;
        if (mouse.clickWave > 1) mouse.clickWave = 0;
      }

      // Update & Draw Particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Position update
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around screen boundaries smoothly
        if (p.x < -10) p.x = width + 10;
        else if (p.x > width + 10) p.x = -10;

        if (p.y < -10) p.y = height + 10;
        else if (p.y > height + 10) p.y = -10;

        // Interactive Mouse Magnetic Repulsion
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.hypot(dx, dy);

        if (dist < mouse.radius && dist > 0) {
          const force = (1 - dist / mouse.radius) * 3.5;
          p.x -= (dx / dist) * force;
          p.y -= (dy / dist) * force;
          p.radius = p.baseRadius * 1.6;
        } else {
          p.radius = p.baseRadius;
        }

        // Draw particle node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.colorPrefix}${p.alpha})`;
        ctx.fill();

        // Connect nearby nodes with delicate glowing constellation lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist2 = Math.hypot(p.x - p2.x, p.y - p2.y);

          if (dist2 < 115) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            const lineAlpha = (1 - dist2 / 115) * 0.22;
            ctx.strokeStyle = `rgba(99, 102, 241, ${lineAlpha})`;
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('click', onClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-screen h-screen pointer-events-none z-0"
      style={{ opacity: 0.88 }}
      aria-hidden="true"
    />
  );
}
