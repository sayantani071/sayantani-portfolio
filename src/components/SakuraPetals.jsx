import React, { useEffect, useRef } from 'react';

/**
 * SakuraPetals - Dynamic HTML5 Canvas Sakura Blossom Petals
 * Features:
 * - Organic cherry blossom petal geometry with characteristic cleft notch
 * - 3D tumbling rotation (rotX, rotY, rotZ) simulating wind aerodynamic drift
 * - Sinusoidal wind sway & natural gusts
 * - Dynamic interactive breeze on mouse movement
 * - Multi-depth parallax layers with glowing blossom spore particles
 * - Vibrant sakura bloom pink palette with soft petal gradients
 */
const SakuraPetals = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = window.innerWidth;
    let height = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
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

    // Mouse breeze interaction
    let mouseX = width / 2;
    let mouseY = height / 2;
    let mouseSpeedX = 0;
    let lastMouseX = width / 2;
    let lastMouseTime = Date.now();

    const handleMouseMove = (e) => {
      const now = Date.now();
      const dt = Math.max(1, now - lastMouseTime);
      mouseSpeedX = ((e.clientX - lastMouseX) / dt) * 15;
      mouseX = e.clientX;
      mouseY = e.clientY;
      lastMouseX = e.clientX;
      lastMouseTime = now;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Sakura Bloom Pink Palette
    const petalColors = [
      {
        base: 'rgba(255, 143, 171, ', // Vibrant rose pink
        tip: 'rgba(255, 225, 235, ',  // Soft pale blossom tip
        glow: 'rgba(244, 114, 182, 0.4)',
      },
      {
        base: 'rgba(244, 114, 182, ', // Classic sakura pink
        tip: 'rgba(255, 210, 225, ',
        glow: 'rgba(251, 113, 133, 0.35)',
      },
      {
        base: 'rgba(251, 113, 133, ', // Warm blush pink
        tip: 'rgba(254, 205, 211, ',
        glow: 'rgba(244, 114, 182, 0.3)',
      },
      {
        base: 'rgba(236, 72, 153, ',  // Deep blossom magenta-rose
        tip: 'rgba(253, 164, 175, ',
        glow: 'rgba(219, 39, 119, 0.4)',
      },
      {
        base: 'rgba(255, 182, 193, ', // Light cherry pink
        tip: 'rgba(255, 240, 245, ',
        glow: 'rgba(244, 114, 182, 0.35)',
      },
    ];

    // Petal configuration - Rich & dynamic
    const petalCount = 55;
    const petals = [];

    for (let i = 0; i < petalCount; i++) {
      const depth = Math.random() * 0.7 + 0.5; // 0.5 (far) to 1.2 (near)
      petals.push({
        x: Math.random() * width,
        y: Math.random() * (height + 200) - 100,
        depth,
        baseSize: Math.random() * 7 + 10, // 10 to 17px
        speedY: (Math.random() * 0.8 + 0.9) * depth,
        speedX: (Math.random() * 0.5 + 0.35) * depth,
        swayAngle: Math.random() * Math.PI * 2,
        swaySpeed: Math.random() * 0.02 + 0.012,
        swayDistance: (Math.random() * 1.8 + 1.2) * depth,
        rotX: Math.random() * Math.PI * 2,
        rotY: Math.random() * Math.PI * 2,
        rotZ: Math.random() * Math.PI * 2,
        rotSpeedX: Math.random() * 0.03 - 0.015,
        rotSpeedY: Math.random() * 0.04 + 0.01,
        rotSpeedZ: Math.random() * 0.025 + 0.008,
        color: petalColors[Math.floor(Math.random() * petalColors.length)],
        opacity: (Math.random() * 0.35 + 0.6) * Math.min(1, depth * 1.1),
        hasCleft: Math.random() > 0.15, // Most petals have the characteristic Sakura notch
      });
    }

    // Floating glowing blossom spores / pollen dust
    const sporeCount = 30;
    const spores = [];
    for (let i = 0; i < sporeCount; i++) {
      spores.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.6,
        speedY: Math.random() * 0.3 + 0.2,
        speedX: Math.random() * 0.25 - 0.1,
        opacity: Math.random() * 0.5 + 0.2,
        pulseSpeed: Math.random() * 0.03 + 0.01,
        pulseAngle: Math.random() * Math.PI * 2,
      });
    }

    // Global wind simulation
    let globalWindTime = 0;
    let animId;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      globalWindTime += 0.015;
      // Gentle natural gusting wind
      const gust = Math.sin(globalWindTime * 0.5) * 0.4 + Math.sin(globalWindTime * 0.2) * 0.25;

      // Mouse speed decay
      mouseSpeedX *= 0.92;

      // 1. Render Blossom Spores / Pink Stardust
      for (let i = 0; i < sporeCount; i++) {
        const s = spores[i];
        s.y += s.speedY;
        s.x += s.speedX + gust * 0.3;
        s.pulseAngle += s.pulseSpeed;

        if (s.y > height) {
          s.y = -10;
          s.x = Math.random() * width;
        }
        if (s.x > width) s.x = 0;
        if (s.x < 0) s.x = width;

        const currentOpacity = s.opacity * (0.6 + 0.4 * Math.sin(s.pulseAngle));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 182, 193, ${currentOpacity})`;
        ctx.shadowColor = 'rgba(244, 114, 182, 0.6)';
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // 2. Render Falling Sakura Petals
      for (let i = 0; i < petalCount; i++) {
        const p = petals[i];

        // Animate positions
        p.swayAngle += p.swaySpeed;
        const currentSway = Math.sin(p.swayAngle) * p.swayDistance;

        // Interactive mouse breeze proximity effect
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        let breeze = 0;
        if (dist < 180) {
          breeze = (1 - dist / 180) * mouseSpeedX * 0.6;
        }

        p.y += p.speedY;
        p.x += p.speedX + currentSway + gust * p.depth + breeze;

        // Animate 3D tumbling rotation
        p.rotX += p.rotSpeedX;
        p.rotY += p.rotSpeedY;
        p.rotZ += p.rotSpeedZ;

        // Wrap around boundaries
        if (p.y > height + 40) {
          p.y = -30;
          p.x = Math.random() * width;
        }
        if (p.x > width + 40) {
          p.x = -30;
        } else if (p.x < -40) {
          p.x = width + 30;
        }

        // Draw organic sakura petal
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotZ);

        // 3D perspective foreshortening
        const scaleX = Math.cos(p.rotX);
        const scaleY = Math.sin(p.rotY);
        ctx.scale(Math.abs(scaleX) < 0.1 ? 0.1 : scaleX, Math.abs(scaleY) < 0.1 ? 0.1 : scaleY);

        const size = p.baseSize * p.depth;

        // Organic Cherry Blossom Petal Path
        ctx.beginPath();
        ctx.moveTo(0, size * 0.9); // Petal base (stem attachment)

        if (p.hasCleft) {
          // Right curve up to cleft lobe
          ctx.bezierCurveTo(
            size * 0.75, size * 0.5,
            size * 0.85, -size * 0.4,
            size * 0.28, -size
          );
          // Characteristic Sakura tip notch / cleft indent
          ctx.quadraticCurveTo(0, -size * 0.82, -size * 0.28, -size);
          // Left curve back down to base
          ctx.bezierCurveTo(
            -size * 0.85, -size * 0.4,
            -size * 0.75, size * 0.5,
            0, size * 0.9
          );
        } else {
          // Smooth rounded petal
          ctx.bezierCurveTo(
            size * 0.8, size * 0.4,
            size * 0.8, -size * 0.6,
            0, -size
          );
          ctx.bezierCurveTo(
            -size * 0.8, -size * 0.6,
            -size * 0.8, size * 0.4,
            0, size * 0.9
          );
        }
        ctx.closePath();

        // Realistic petal gradient (deep blush base fading to soft light tip)
        const grad = ctx.createLinearGradient(0, size * 0.8, 0, -size);
        grad.addColorStop(0, `${p.color.base}${p.opacity})`);
        grad.addColorStop(0.7, `${p.color.base}${p.opacity * 0.95})`);
        grad.addColorStop(1, `${p.color.tip}${p.opacity * 0.9})`);

        ctx.fillStyle = grad;

        // Soft petal glow for near/mid petals
        if (p.depth > 0.8) {
          ctx.shadowColor = p.color.glow;
          ctx.shadowBlur = 8;
        }

        ctx.fill();
        ctx.shadowBlur = 0;

        // Delicate central vein
        ctx.beginPath();
        ctx.moveTo(0, size * 0.8);
        ctx.quadraticCurveTo(
          size * 0.05 * Math.sin(p.swayAngle),
          0,
          0,
          -size * 0.55
        );
        ctx.strokeStyle = `rgba(255, 255, 255, ${p.opacity * 0.35})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();

        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none w-full h-full"
      style={{ display: 'block' }}
    />
  );
};

export default SakuraPetals;
