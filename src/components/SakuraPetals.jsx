import React, { useEffect, useRef } from 'react';

/**
 * SakuraPetals - Minimal Bio-Digital Neural Link Effect
 * 
 * Features:
 * - Minimal, sparse neural constellation (hairline connections, subtle whisper-light opacity)
 * - Tranquil falling cherry blossom petals (18 delicate petals with 3D tumbling rotation)
 * - Subtle interactive cursor probe (refined hairline connections without visual clutter)
 * - Pristine, high-end minimal aesthetic with ample negative space
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

    // Mouse tracking for subtle Neural Probe
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
      mouseSpeedX = ((e.clientX - lastMouseX) / dt) * 12;
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

    // Minimal, soft Sakura Pink Palette
    const petalColors = [
      {
        base: 'rgba(255, 160, 185, ',
        tip: 'rgba(255, 230, 240, ',
      },
      {
        base: 'rgba(244, 114, 182, ',
        tip: 'rgba(255, 220, 235, ',
      },
      {
        base: 'rgba(251, 113, 133, ',
        tip: 'rgba(254, 225, 230, ',
      },
    ];

    // --- 1. MINIMAL NEURAL CONSTELLATION NODES ---
    const nodeCount = 28; // Minimal, non-congested count
    const neuralNodes = [];
    for (let i = 0; i < nodeCount; i++) {
      neuralNodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35, // Slow, peaceful drift
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 0.9 + 1.0, // Small refined dots
        pulseSpeed: Math.random() * 0.02 + 0.01,
        pulseAngle: Math.random() * Math.PI * 2,
        connections: 0,
      });
    }

    // --- 2. MINIMAL SAKURA PETALS ---
    const petalCount = 18; // Clean, airy, serene petal count
    const petals = [];

    for (let i = 0; i < petalCount; i++) {
      const depth = Math.random() * 0.6 + 0.5;
      petals.push({
        x: Math.random() * width,
        y: Math.random() * (height + 200) - 100,
        depth,
        baseSize: Math.random() * 5 + 8, // 8 to 13px - small & delicate
        speedY: (Math.random() * 0.5 + 0.55) * depth,
        speedX: (Math.random() * 0.3 + 0.2) * depth,
        swayAngle: Math.random() * Math.PI * 2,
        swaySpeed: Math.random() * 0.018 + 0.008,
        swayDistance: (Math.random() * 1.4 + 0.8) * depth,
        rotX: Math.random() * Math.PI * 2,
        rotY: Math.random() * Math.PI * 2,
        rotZ: Math.random() * Math.PI * 2,
        rotSpeedX: Math.random() * 0.02 - 0.01,
        rotSpeedY: Math.random() * 0.03 + 0.008,
        rotSpeedZ: Math.random() * 0.02 + 0.006,
        color: petalColors[Math.floor(Math.random() * petalColors.length)],
        opacity: (Math.random() * 0.25 + 0.45) * depth,
        hasCleft: Math.random() > 0.2,
        activeLinksCount: 0,
      });
    }

    // Subtle impulses
    const impulses = [];
    const maxImpulses = 6;

    const spawnImpulse = (x1, y1, x2, y2) => {
      if (impulses.length >= maxImpulses) return;
      impulses.push({
        x1, y1, x2, y2,
        progress: 0,
        speed: Math.random() * 0.02 + 0.015,
        size: 1.2,
      });
    };

    // Connection thresholds - tight & minimal
    const NODE_LINK_DIST = 115;
    const NODE_LINK_DIST_SQ = NODE_LINK_DIST * NODE_LINK_DIST;
    const PETAL_NODE_LINK_DIST = 120;
    const PETAL_NODE_LINK_DIST_SQ = PETAL_NODE_LINK_DIST * PETAL_NODE_LINK_DIST;
    const MOUSE_LINK_DIST = 150;
    const MOUSE_LINK_DIST_SQ = MOUSE_LINK_DIST * MOUSE_LINK_DIST;

    let globalWindTime = 0;
    let animId;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      globalWindTime += 0.012;
      const gust = Math.sin(globalWindTime * 0.4) * 0.25;
      mouseSpeedX *= 0.92;

      // Update Nodes
      for (let i = 0; i < nodeCount; i++) {
        const n = neuralNodes[i];
        n.x += n.vx + gust * 0.1;
        n.y += n.vy;
        n.pulseAngle += n.pulseSpeed;
        n.connections = 0;

        if (n.x < 0) { n.x = 0; n.vx *= -1; }
        if (n.x > width) { n.x = width; n.vx *= -1; }
        if (n.y < 0) { n.y = 0; n.vy *= -1; }
        if (n.y > height) { n.y = height; n.vy *= -1; }
      }

      // Update Petals
      for (let i = 0; i < petalCount; i++) {
        const p = petals[i];
        p.activeLinksCount = 0;

        p.swayAngle += p.swaySpeed;
        const currentSway = Math.sin(p.swayAngle) * p.swayDistance;

        let breeze = 0;
        if (isMouseOnScreen) {
          const dx = mouseX - p.x;
          const dy = mouseY - p.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < 22500) { // 150px
            const dist = Math.sqrt(distSq);
            breeze = (1 - dist / 150) * mouseSpeedX * 0.4;
          }
        }

        p.y += p.speedY;
        p.x += p.speedX + currentSway + gust * p.depth + breeze;

        p.rotX += p.rotSpeedX;
        p.rotY += p.rotSpeedY;
        p.rotZ += p.rotSpeedZ;

        if (p.y > height + 30) {
          p.y = -25;
          p.x = Math.random() * width;
        }
        if (p.x > width + 30) {
          p.x = -25;
        } else if (p.x < -30) {
          p.x = width + 25;
        }
      }

      // --- DRAW MINIMAL NEURAL LINKS ---
      // A. Node-to-Node Hairline Links
      for (let i = 0; i < nodeCount; i++) {
        const n1 = neuralNodes[i];
        for (let j = i + 1; j < nodeCount; j++) {
          const n2 = neuralNodes[j];
          const dx = n1.x - n2.x;
          if (Math.abs(dx) > NODE_LINK_DIST) continue;
          const dy = n1.y - n2.y;
          if (Math.abs(dy) > NODE_LINK_DIST) continue;

          const distSq = dx * dx + dy * dy;
          if (distSq < NODE_LINK_DIST_SQ) {
            const dist = Math.sqrt(distSq);
            const factor = 1 - dist / NODE_LINK_DIST;
            const alpha = factor * 0.22; // Whisper-soft

            n1.connections++;
            n2.connections++;

            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = `rgba(244, 114, 182, ${alpha})`;
            ctx.lineWidth = 0.65;
            ctx.stroke();

            if (Math.random() < 0.0015 && factor > 0.6) {
              spawnImpulse(n1.x, n1.y, n2.x, n2.y);
            }
          }
        }
      }

      // B. Petal-to-Node Subtle Connections
      for (let i = 0; i < petalCount; i++) {
        const p = petals[i];
        for (let j = 0; j < nodeCount; j++) {
          const n = neuralNodes[j];
          const dx = p.x - n.x;
          if (Math.abs(dx) > PETAL_NODE_LINK_DIST) continue;
          const dy = p.y - n.y;
          if (Math.abs(dy) > PETAL_NODE_LINK_DIST) continue;

          const distSq = dx * dx + dy * dy;
          if (distSq < PETAL_NODE_LINK_DIST_SQ) {
            const dist = Math.sqrt(distSq);
            const factor = 1 - dist / PETAL_NODE_LINK_DIST;
            const alpha = factor * 0.25 * p.depth;

            p.activeLinksCount++;
            n.connections++;

            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(n.x, n.y);
            ctx.strokeStyle = `rgba(251, 113, 133, ${alpha})`;
            ctx.lineWidth = 0.65;
            ctx.stroke();
          }
        }
      }

      // C. Interactive Mouse Probe (Minimal & Refined)
      if (isMouseOnScreen) {
        // Small, subtle cursor node
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, 2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 230, 240, 0.7)';
        ctx.fill();

        // Soft hairline to nearby Petals & Nodes
        for (let i = 0; i < petalCount; i++) {
          const p = petals[i];
          const dx = mouseX - p.x;
          if (Math.abs(dx) > MOUSE_LINK_DIST) continue;
          const dy = mouseY - p.y;
          if (Math.abs(dy) > MOUSE_LINK_DIST) continue;

          const distSq = dx * dx + dy * dy;
          if (distSq < MOUSE_LINK_DIST_SQ) {
            const dist = Math.sqrt(distSq);
            const factor = 1 - dist / MOUSE_LINK_DIST;
            const alpha = factor * 0.35;

            p.activeLinksCount++;

            ctx.beginPath();
            ctx.moveTo(mouseX, mouseY);
            ctx.lineTo(p.x, p.y);
            ctx.strokeStyle = `rgba(244, 114, 182, ${alpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }

        for (let i = 0; i < nodeCount; i++) {
          const n = neuralNodes[i];
          const dx = mouseX - n.x;
          if (Math.abs(dx) > MOUSE_LINK_DIST) continue;
          const dy = mouseY - n.y;
          if (Math.abs(dy) > MOUSE_LINK_DIST) continue;

          const distSq = dx * dx + dy * dy;
          if (distSq < MOUSE_LINK_DIST_SQ) {
            const dist = Math.sqrt(distSq);
            const factor = 1 - dist / MOUSE_LINK_DIST;
            const alpha = factor * 0.3;

            ctx.beginPath();
            ctx.moveTo(mouseX, mouseY);
            ctx.lineTo(n.x, n.y);
            ctx.strokeStyle = `rgba(255, 215, 230, ${alpha})`;
            ctx.lineWidth = 0.65;
            ctx.stroke();
          }
        }
      }

      // D. Draw Minimal Impulses
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
        ctx.fillStyle = 'rgba(255, 235, 245, 0.7)';
        ctx.fill();
      }

      // E. Draw Neural Constellation Nodes (Clean, small points)
      for (let i = 0; i < nodeCount; i++) {
        const n = neuralNodes[i];
        const pulse = Math.sin(n.pulseAngle) * 0.25 + 0.65;

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 215, 230, ${pulse * 0.5})`;
        ctx.fill();
      }

      // F. Render Sakura Petals (Clean & Delicate)
      for (let i = 0; i < petalCount; i++) {
        const p = petals[i];

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotZ);

        const scaleX = Math.cos(p.rotX);
        const scaleY = Math.sin(p.rotY);
        ctx.scale(Math.abs(scaleX) < 0.1 ? 0.1 : scaleX, Math.abs(scaleY) < 0.1 ? 0.1 : scaleY);

        const size = p.baseSize * p.depth;

        ctx.beginPath();
        ctx.moveTo(0, size * 0.9);

        if (p.hasCleft) {
          ctx.bezierCurveTo(
            size * 0.75, size * 0.5,
            size * 0.85, -size * 0.4,
            size * 0.28, -size
          );
          ctx.quadraticCurveTo(0, -size * 0.82, -size * 0.28, -size);
          ctx.bezierCurveTo(
            -size * 0.85, -size * 0.4,
            -size * 0.75, size * 0.5,
            0, size * 0.9
          );
        } else {
          ctx.bezierCurveTo(size * 0.8, size * 0.4, size * 0.8, -size * 0.6, 0, -size);
          ctx.bezierCurveTo(-size * 0.8, -size * 0.6, -size * 0.8, size * 0.4, 0, size * 0.9);
        }
        ctx.closePath();

        const grad = ctx.createLinearGradient(0, size * 0.8, 0, -size);
        grad.addColorStop(0, `${p.color.base}${p.opacity})`);
        grad.addColorStop(1, `${p.color.tip}${p.opacity * 0.85})`);

        ctx.fillStyle = grad;
        ctx.fill();

        ctx.restore();

        // Subtle core node
        if (p.activeLinksCount > 0) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, 1.2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 240, 248, 0.6)`;
          ctx.fill();
        }
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
