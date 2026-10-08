import React, { useEffect, useRef } from 'react';

const BackgroundGlitters = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const particles = [];
    // Number of glitters
    const particleCount = 120;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        // Very small size for glitter effect
        radius: Math.random() * 1.5 + 0.2,
        // Slow drifting movement
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        opacity: Math.random(),
        // Soft glow blur
        glow: Math.random() * 5 + 2,
        fadeDirection: Math.random() > 0.5 ? 0.005 : -0.005
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
        } else if (p.opacity >= 0.8) {
          p.opacity = 0.8;
          p.fadeDirection *= -1;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        // Slightly bluish-white glitters
        ctx.fillStyle = `rgba(200, 230, 255, ${p.opacity})`;
        ctx.shadowBlur = p.glow;
        ctx.shadowColor = `rgba(150, 200, 255, ${p.opacity})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
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
      cancelAnimationFrame(animationFrameId);
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
