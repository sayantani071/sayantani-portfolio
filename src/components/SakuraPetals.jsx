import React, { useEffect, useRef } from 'react';

/**
 * SakuraPetals
 * Canvas-based falling cherry blossom (Sakura) petals animation.
 * Features 3D tumbling rotation, sinusoidal wind breeze sway, and organic petal geometry.
 */
const SakuraPetals = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Petal configuration
    const petalCount = 40;
    const petals = [];

    // Sakura color shades
    const petalColors = [
      { fill: 'rgba(255, 183, 197, 0.75)', shadow: 'rgba(244, 114, 182, 0.4)' },
      { fill: 'rgba(251, 113, 133, 0.65)', shadow: 'rgba(236, 72, 153, 0.35)' },
      { fill: 'rgba(253, 164, 175, 0.8)', shadow: 'rgba(244, 114, 182, 0.4)' },
      { fill: 'rgba(255, 228, 230, 0.85)', shadow: 'rgba(251, 113, 133, 0.3)' },
      { fill: 'rgba(244, 114, 182, 0.7)', shadow: 'rgba(219, 39, 119, 0.35)' },
    ];

    for (let i = 0; i < petalCount; i++) {
      petals.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 8 + 9, // 9 to 17px
        speedY: Math.random() * 0.9 + 0.7, // gentle descent
        speedX: Math.random() * 0.6 + 0.3, // slight breeze to the right
        swaySpeed: Math.random() * 0.02 + 0.01,
        swayAngle: Math.random() * Math.PI * 2,
        swayDistance: Math.random() * 1.5 + 0.8,
        rotX: Math.random() * Math.PI * 2,
        rotY: Math.random() * Math.PI * 2,
        rotZ: Math.random() * Math.PI * 2,
        rotSpeedX: Math.random() * 0.02 - 0.01,
        rotSpeedY: Math.random() * 0.03 + 0.01,
        rotSpeedZ: Math.random() * 0.02 + 0.005,
        color: petalColors[Math.floor(Math.random() * petalColors.length)],
        opacity: Math.random() * 0.4 + 0.6,
      });
    }

    let animId;

    // Draw single organic sakura petal
    const drawPetal = (x, y, size, rotX, rotY, rotZ, color, opacity) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotZ);
      // Simulate 3D tilt
      ctx.scale(Math.cos(rotX), Math.sin(rotY));

      ctx.beginPath();
      ctx.moveTo(0, -size);
      // Curved right side of petal
      ctx.bezierCurveTo(size * 0.8, -size * 0.6, size * 0.9, size * 0.4, 0, size);
      // Curved left side of petal with delicate tip cleft
      ctx.bezierCurveTo(-size * 0.9, size * 0.4, -size * 0.8, -size * 0.6, 0, -size);
      ctx.closePath();

      // Delicate gradient fill
      const grad = ctx.createLinearGradient(0, -size, 0, size);
      grad.addColorStop(0, color.fill.replace(/[\d.]+\)$/, `${opacity})`));
      grad.addColorStop(1, 'rgba(255, 241, 242, 0.9)'.replace(/[\d.]+\)$/, `${opacity * 0.85})`));

      ctx.fillStyle = grad;
      ctx.shadowColor = color.shadow;
      ctx.shadowBlur = 6;
      ctx.fill();

      // Subtle center vein
      ctx.beginPath();
      ctx.moveTo(0, -size * 0.7);
      ctx.lineTo(0, size * 0.6);
      ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.35})`;
      ctx.lineWidth = 0.6;
      ctx.stroke();

      ctx.restore();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      petals.forEach((p) => {
        // Update positions with gentle wind & sine oscillation
        p.swayAngle += p.swaySpeed;
        p.x += p.speedX + Math.sin(p.swayAngle) * p.swayDistance;
        p.y += p.speedY;

        // Update 3D rotations (tumbling)
        p.rotX += p.rotSpeedX;
        p.rotY += p.rotSpeedY;
        p.rotZ += p.rotSpeedZ;

        // Wrap around borders
        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }
        if (p.x > width + 20) {
          p.x = -20;
        } else if (p.x < -20) {
          p.x = width + 20;
        }

        drawPetal(p.x, p.y, p.size, p.rotX, p.rotY, p.rotZ, p.color, p.opacity);
      });

      animId = window.requestAnimationFrame(render);
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
      window.cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[6] w-full h-full"
    />
  );
};

export default SakuraPetals;
