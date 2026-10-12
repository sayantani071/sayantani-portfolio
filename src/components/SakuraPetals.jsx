import React, { useEffect, useRef } from 'react';

/**
 * SakuraPetals - Dynamic HTML5 Canvas Sakura Blossom Petals with Neural Link Effect
 * 
 * Features:
 * 1. Bio-Digital Neural Link Network:
 *    - Delicate luminous synaptic lines connecting neighboring sakura petals (axons)
 *    - Dynamic neural links reaching toward the mouse cursor (neural probe)
 *    - Synaptic electrical light impulses traveling along active connection filaments
 *    - Glowing synaptic core nodes at the center of each petal
 * 2. Organic Cherry Blossom Simulation:
 *    - Real petal geometry with curved base & signature cleft/notched tip
 *    - 3D tumbling rotation (rotX, rotY, rotZ) simulating aerodynamic drift
 *    - Sinusoidal wind sway and mouse-reactive aerodynamic breeze
 *    - Parallax depth layers with glowing blossom spores/pollen stardust
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

    // Mouse tracking for interactive Neural Link & breeze
    let mouseX = -1000;
    let mouseY = -1000;
    let isMouseOnScreen = false;
    let mouseSpeedX = 0;
    let lastMouseX = width / 2;
    let lastMouseTime = Date.now();

    const handleMouseMove = (e) => {
      isMouseOnScreen = true;
      const now = Date.now();
      const dt = Math.max(1, now - lastMouseTime);
      mouseSpeedX = ((e.clientX - lastMouseX) / dt) * 15;
      mouseX = e.clientX;
      mouseY = e.clientY;
      lastMouseX = e.clientX;
      lastMouseTime = now;
    };

    const handleMouseLeave = () => {
      isMouseOnScreen = false;
      mouseX = -1000;
      mouseY = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    document.documentElement.addEventListener('mouseenter', () => { isMouseOnScreen = true; });

    // Sakura Bloom Pink Palette
    const petalColors = [
      {
        base: 'rgba(255, 143, 171, ', // Vibrant rose pink
        tip: 'rgba(255, 230, 240, ',  // Soft pale blossom tip
        glow: 'rgba(244, 114, 182, 0.45)',
        neuralLine: '244, 114, 182',
      },
      {
        base: 'rgba(244, 114, 182, ', // Classic sakura pink
        tip: 'rgba(255, 215, 230, ',
        glow: 'rgba(251, 113, 133, 0.4)',
        neuralLine: '251, 113, 133',
      },
      {
        base: 'rgba(251, 113, 133, ', // Warm blush pink
        tip: 'rgba(254, 215, 225, ',
        glow: 'rgba(244, 114, 182, 0.35)',
        neuralLine: '253, 164, 175',
      },
      {
        base: 'rgba(236, 72, 153, ',  // Deep blossom magenta-rose
        tip: 'rgba(253, 180, 195, ',
        glow: 'rgba(219, 39, 119, 0.45)',
        neuralLine: '236, 72, 153',
      },
    ];

    // Petal configuration
    const petalCount = 52;
    const petals = [];

    for (let i = 0; i < petalCount; i++) {
      const depth = Math.random() * 0.7 + 0.5; // 0.5 (far) to 1.2 (near)
      petals.push({
        id: i,
        x: Math.random() * width,
        y: Math.random() * (height + 200) - 100,
        depth,
        baseSize: Math.random() * 6 + 10, // 10 to 16px
        speedY: (Math.random() * 0.75 + 0.8) * depth,
        speedX: (Math.random() * 0.45 + 0.3) * depth,
        swayAngle: Math.random() * Math.PI * 2,
        swaySpeed: Math.random() * 0.02 + 0.01,
        swayDistance: (Math.random() * 1.8 + 1.2) * depth,
        rotX: Math.random() * Math.PI * 2,
        rotY: Math.random() * Math.PI * 2,
        rotZ: Math.random() * Math.PI * 2,
        rotSpeedX: Math.random() * 0.03 - 0.015,
        rotSpeedY: Math.random() * 0.04 + 0.01,
        rotSpeedZ: Math.random() * 0.025 + 0.008,
        color: petalColors[Math.floor(Math.random() * petalColors.length)],
        opacity: (Math.random() * 0.35 + 0.6) * Math.min(1, depth * 1.1),
        hasCleft: Math.random() > 0.15,
        activeLinksCount: 0,
      });
    }

    // Floating glowing blossom spores / pollen dust
    const sporeCount = 28;
    const spores = [];
    for (let i = 0; i < sporeCount; i++) {
      spores.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.6,
        speedY: Math.random() * 0.3 + 0.15,
        speedX: Math.random() * 0.25 - 0.1,
        opacity: Math.random() * 0.5 + 0.25,
        pulseSpeed: Math.random() * 0.03 + 0.015,
        pulseAngle: Math.random() * Math.PI * 2,
      });
    }

    // Traveling synaptic electrical impulses (data signals firing along neural links)
    const impulses = [];
    const maxImpulses = 14;

    const spawnImpulse = (x1, y1, x2, y2, color) => {
      if (impulses.length >= maxImpulses) return;
      impulses.push({
        x1, y1, x2, y2,
        progress: 0,
        speed: Math.random() * 0.025 + 0.02,
        size: Math.random() * 1.5 + 1.8,
        color: color || 'rgba(255, 235, 245, 0.9)',
      });
    };

    // Global wind & animation variables
    let globalWindTime = 0;
    let animId;

    const PETAL_NEURAL_DIST = 140;
    const PETAL_NEURAL_DIST_SQ = PETAL_NEURAL_DIST * PETAL_NEURAL_DIST;
    const MOUSE_NEURAL_DIST = 190;
    const MOUSE_NEURAL_DIST_SQ = MOUSE_NEURAL_DIST * MOUSE_NEURAL_DIST;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      globalWindTime += 0.015;
      const gust = Math.sin(globalWindTime * 0.5) * 0.35 + Math.sin(globalWindTime * 0.2) * 0.2;
      mouseSpeedX *= 0.92;

      // --- 1. UPDATE POSITIONS ---
      // Update spores
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
      }

      // Update petals
      for (let i = 0; i < petalCount; i++) {
        const p = petals[i];
        p.activeLinksCount = 0;

        p.swayAngle += p.swaySpeed;
        const currentSway = Math.sin(p.swayAngle) * p.swayDistance;

        // Interactive mouse breeze push
        let breeze = 0;
        if (isMouseOnScreen) {
          const dx = mouseX - p.x;
          const dy = mouseY - p.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < 32400) { // 180px squared
            const dist = Math.sqrt(distSq);
            breeze = (1 - dist / 180) * mouseSpeedX * 0.6;
          }
        }

        p.y += p.speedY;
        p.x += p.speedX + currentSway + gust * p.depth + breeze;

        p.rotX += p.rotSpeedX;
        p.rotY += p.rotSpeedY;
        p.rotZ += p.rotSpeedZ;

        if (p.y > height + 40) {
          p.y = -30;
          p.x = Math.random() * width;
        }
        if (p.x > width + 40) {
          p.x = -30;
        } else if (p.x < -40) {
          p.x = width + 30;
        }
      }

      // --- 2. RENDER NEURAL LINK NETWORK ---
      // A. Inter-Petal Neural Synaptic Connections
      for (let i = 0; i < petalCount; i++) {
        const p1 = petals[i];

        for (let j = i + 1; j < petalCount; j++) {
          const p2 = petals[j];

          const dx = p1.x - p2.x;
          if (Math.abs(dx) > PETAL_NEURAL_DIST) continue;
          const dy = p1.y - p2.y;
          if (Math.abs(dy) > PETAL_NEURAL_DIST) continue;

          const distSq = dx * dx + dy * dy;
          if (distSq < PETAL_NEURAL_DIST_SQ) {
            const dist = Math.sqrt(distSq);
            const factor = 1 - dist / PETAL_NEURAL_DIST;
            const alpha = factor * 0.38 * Math.min(p1.depth, p2.depth);

            p1.activeLinksCount++;
            p2.activeLinksCount++;

            // Draw glowing neural axon line
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(244, 114, 182, ${alpha})`;
            ctx.lineWidth = factor * 1.1;
            ctx.stroke();

            // Randomly fire synaptic electrical impulse along active link
            if (Math.random() < 0.003 && factor > 0.45) {
              spawnImpulse(p1.x, p1.y, p2.x, p2.y, 'rgba(255, 235, 245, 0.95)');
            }
          }
        }
      }

      // B. Mouse Cursor Neural Link (Interactive Neural Probe)
      if (isMouseOnScreen) {
        // Soft pulsing core at cursor
        const cursorPulse = Math.sin(globalWindTime * 3) * 2 + 5;
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, cursorPulse, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(244, 114, 182, 0.35)';
        ctx.shadowColor = 'rgba(244, 114, 182, 0.8)';
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.shadowBlur = 0;

        ctx.beginPath();
        ctx.arc(mouseX, mouseY, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.fill();

        for (let i = 0; i < petalCount; i++) {
          const p = petals[i];
          const dx = mouseX - p.x;
          if (Math.abs(dx) > MOUSE_NEURAL_DIST) continue;
          const dy = mouseY - p.y;
          if (Math.abs(dy) > MOUSE_NEURAL_DIST) continue;

          const distSq = dx * dx + dy * dy;
          if (distSq < MOUSE_NEURAL_DIST_SQ) {
            const dist = Math.sqrt(distSq);
            const factor = 1 - dist / MOUSE_NEURAL_DIST;
            const alpha = factor * 0.65;

            p.activeLinksCount++;

            // Gradient neural filament from mouse to petal
            const grad = ctx.createLinearGradient(mouseX, mouseY, p.x, p.y);
            grad.addColorStop(0, `rgba(255, 240, 245, ${alpha})`);
            grad.addColorStop(0.5, `rgba(244, 114, 182, ${alpha * 0.9})`);
            grad.addColorStop(1, `rgba(251, 113, 133, ${alpha * 0.4})`);

            ctx.beginPath();
            ctx.moveTo(mouseX, mouseY);
            ctx.lineTo(p.x, p.y);
            ctx.strokeStyle = grad;
            ctx.lineWidth = factor * 1.5;
            ctx.shadowColor = 'rgba(244, 114, 182, 0.6)';
            ctx.shadowBlur = 8;
            ctx.stroke();
            ctx.shadowBlur = 0;

            // Occasional impulse towards petal
            if (Math.random() < 0.015 && factor > 0.5) {
              spawnImpulse(mouseX, mouseY, p.x, p.y, 'rgba(255, 255, 255, 0.95)');
            }
          }
        }
      }

      // C. Render Traveling Synaptic Impulses
      for (let i = impulses.length - 1; i >= 0; i--) {
        const imp = impulses[i];
        imp.progress += imp.speed;

        if (imp.progress >= 1) {
          impulses.splice(i, 1);
          continue;
        }

        const currX = imp.x1 + (imp.x2 - imp.x1) * imp.progress;
        const currY = imp.y1 + (imp.y2 - imp.y1) * imp.progress;

        ctx.beginPath();
        ctx.arc(currX, currY, imp.size, 0, Math.PI * 2);
        ctx.fillStyle = imp.color;
        ctx.shadowColor = 'rgba(255, 235, 245, 0.9)';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // --- 3. RENDER BLOSSOM SPORES / PINK STARDUST ---
      for (let i = 0; i < sporeCount; i++) {
        const s = spores[i];
        const currentOpacity = s.opacity * (0.6 + 0.4 * Math.sin(s.pulseAngle));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 182, 193, ${currentOpacity})`;
        ctx.shadowColor = 'rgba(244, 114, 182, 0.5)';
        ctx.shadowBlur = 5;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // --- 4. RENDER SAKURA PETALS WITH SYNAPTIC CORE NODES ---
      for (let i = 0; i < petalCount; i++) {
        const p = petals[i];

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

        // --- D. Petal Synaptic Core Node (Neural Junction) ---
        // When active in the neural link or naturally pulsing
        const coreIntensity = p.activeLinksCount > 0 
          ? Math.min(1, 0.4 + p.activeLinksCount * 0.2) 
          : 0.25;

        ctx.beginPath();
        ctx.arc(p.x, p.y, (p.depth * 1.8), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 240, 245, ${coreIntensity * p.opacity})`;
        ctx.shadowColor = 'rgba(244, 114, 182, 0.9)';
        ctx.shadowBlur = p.activeLinksCount > 0 ? 10 : 4;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
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
