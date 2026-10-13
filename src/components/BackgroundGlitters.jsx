import React, { useEffect, useRef } from 'react';

const BackgroundGlitters = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const particles = [];
    const particleCount = 140;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 0.7 + 0.3,
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.12,
        opacity: Math.random(),
        fadeDirection: Math.random() > 0.5 ? (Math.random() * 0.0015 + 0.0005) : -(Math.random() * 0.0015 + 0.0005)
      });
    }

    let animationFrameId;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around the screen
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Twinkle/glow effect (opacity oscillation)
        p.opacity += p.fadeDirection;
        if (p.opacity <= 0.1) {
          p.opacity = 0.1;
          p.fadeDirection *= -1;
        } else if (p.opacity >= 1) {
          p.opacity = 1;
          p.fadeDirection *= -1;
        }

        // Core particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.fill();

        // Simulated Glow with Sakura pink tint
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 182, 193, ${p.opacity * 0.4})`;
        ctx.fill();

        // Fast twinkle cross
        if (p.opacity > 0.94) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y - p.radius * 2.5);
          ctx.lineTo(p.x, p.y + p.radius * 2.5);
          ctx.moveTo(p.x - p.radius * 2.5, p.y);
          ctx.lineTo(p.x + p.radius * 2.5, p.y);
          ctx.strokeStyle = `rgba(255, 228, 230, ${p.opacity * 0.6})`;
          ctx.lineWidth = 0.4;
          ctx.stroke();
        }
      });

      animationFrameId = window.requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 z-0 pointer-events-none opacity-60"
    />
  );
};

export default BackgroundGlitters;
