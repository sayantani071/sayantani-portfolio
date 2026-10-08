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
    // Number of glitters (increased for more dense effect)
    const particleCount = 350;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        // Medium-small sizes for nice visible glitters
        radius: Math.random() * 1.2 + 0.3,
        // Slow drifting movement
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        opacity: Math.random(),
        // Stronger glow base
        glow: Math.random() * 10 + 5,
        // Faster and randomized fade speed for twinkle
        fadeDirection: Math.random() > 0.5 ? (Math.random() * 0.015 + 0.005) : -(Math.random() * 0.015 + 0.005)
      });
    }

    const shootingStars = [];
    const shootingStarCount = 4;

    for (let i = 0; i < shootingStarCount; i++) {
      shootingStars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        length: Math.random() * 80 + 30,
        speed: Math.random() * 10 + 6,
        opacity: 0,
        active: false,
        angle: Math.PI / 4, // 45 degrees downward
        waitTimer: Math.random() * 300 + 50 // frames to wait before firing
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

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        // Slightly bluish-white glitters
        ctx.fillStyle = `rgba(200, 230, 255, ${p.opacity})`;
        ctx.shadowBlur = p.glow * 1.5; // Enhanced glow
        ctx.shadowColor = `rgba(150, 200, 255, ${p.opacity})`;
        ctx.fill();

        // Draw a subtle "star/cross" shape for bright particles to create a real twinkle effect
        if (p.opacity > 0.7) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y - p.radius * 3);
          ctx.lineTo(p.x, p.y + p.radius * 3);
          ctx.moveTo(p.x - p.radius * 3, p.y);
          ctx.lineTo(p.x + p.radius * 3, p.y);
          ctx.strokeStyle = `rgba(255, 255, 255, ${p.opacity - 0.5})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      });

      // Render Shooting Stars
      shootingStars.forEach(star => {
        if (!star.active) {
          star.waitTimer--;
          if (star.waitTimer <= 0) {
            star.active = true;
            // Start from top or left edge randomly
            if (Math.random() > 0.5) {
              star.x = Math.random() * width;
              star.y = -50;
            } else {
              star.x = -50;
              star.y = Math.random() * (height / 2);
            }
            star.opacity = 1;
            star.waitTimer = Math.random() * 300 + 100;
            star.speed = Math.random() * 15 + 10;
            star.length = Math.random() * 100 + 50;
          }
        } else {
          star.x += Math.cos(star.angle) * star.speed;
          star.y += Math.sin(star.angle) * star.speed;
          star.opacity -= 0.012; // Fade out gradually

          if (star.opacity <= 0 || star.x > width + 100 || star.y > height + 100) {
            star.active = false;
          } else {
            ctx.beginPath();
            ctx.moveTo(star.x, star.y);
            ctx.lineTo(
              star.x - Math.cos(star.angle) * star.length, 
              star.y - Math.sin(star.angle) * star.length
            );
            
            // Gradient tail
            const gradient = ctx.createLinearGradient(
              star.x, star.y, 
              star.x - Math.cos(star.angle) * star.length, 
              star.y - Math.sin(star.angle) * star.length
            );
            gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`);
            gradient.addColorStop(1, `rgba(255, 255, 255, 0)`);
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 2;
            ctx.shadowBlur = 15;
            ctx.shadowColor = `rgba(100, 150, 255, ${star.opacity})`;
            ctx.stroke();
          }
        }
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
