import React, { useEffect, useRef } from 'react';

/**
 * SakuraPetals - Dynamic Sakura Petals with Bio-Digital Neural Link Effect
 * 
 * Interweaves:
 * 1. An active Neural Constellation Network (synaptic nodes & neural filaments)
 * 2. 3D Tumbling Falling Sakura Cherry Blossom Petals
 * 3. Dynamic Neural Links bridging petals, neural nodes, and the interactive cursor
 * 4. Firing synaptic light impulses traveling along active connection pathways
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

    // Mouse tracking for Neural Probe
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

    // Sakura Bloom Pink Color Palette
    const petalColors = [
      {
        base: 'rgba(255, 143, 171, ', // Vibrant rose pink
        tip: 'rgba(255, 230, 240, ',  // Soft pale blossom tip
        glow: 'rgba(244, 114, 182, 0.5)',
      },
      {
        base: 'rgba(244, 114, 182, ', // Classic sakura pink
        tip: 'rgba(255, 215, 230, ',
        glow: 'rgba(251, 113, 133, 0.45)',
      },
      {
        base: 'rgba(251, 113, 133, ', // Warm blush pink
        tip: 'rgba(254, 215, 225, ',
        glow: 'rgba(244, 114, 182, 0.4)',
      },
      {
        base: 'rgba(236, 72, 153, ',  // Deep blossom magenta-rose
        tip: 'rgba(253, 180, 195, ',
        glow: 'rgba(219, 39, 119, 0.5)',
      },
    ];

    // --- 1. NEURAL CONSTELLATION NODES ---
    // Floating synaptic network nodes that form the background neural web
    const nodeCount = 55;
    const neuralNodes = [];
    for (let i = 0; i < nodeCount; i++) {
      neuralNodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 1.5 + 1.2,
        pulseSpeed: Math.random() * 0.03 + 0.015,
        pulseAngle: Math.random() * Math.PI * 2,
        connections: 0,
      });
    }

    // --- 2. FALLING SAKURA PETALS ---
    const petalCount = 48;
    const petals = [];

    for (let i = 0; i < petalCount; i++) {
      const depth = Math.random() * 0.7 + 0.5; // 0.5 (far) to 1.2 (near)
      petals.push({
        x: Math.random() * width,
        y: Math.random() * (height + 200) - 100,
        depth,
        baseSize: Math.random() * 6 + 10, // 10 to 16px
        speedY: (Math.random() * 0.7 + 0.8) * depth,
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

    // --- 3. SYNAPTIC ELECTRICAL IMPULSES ---
    // Tiny light signals traveling along neural lines
    const impulses = [];
    const maxImpulses = 18;

    const spawnImpulse = (x1, y1, x2, y2, color) => {
      if (impulses.length >= maxImpulses) return;
      impulses.push({
        x1, y1, x2, y2,
        progress: 0,
        speed: Math.random() * 0.028 + 0.02,
        size: Math.random() * 1.5 + 1.6,
        color: color || 'rgba(255, 240, 248, 0.95)',
      });
    };

    // Constants for neural connection distances
    const NODE_LINK_DIST = 135;
    const NODE_LINK_DIST_SQ = NODE_LINK_DIST * NODE_LINK_DIST;
    const PETAL_NODE_LINK_DIST = 145;
    const PETAL_NODE_LINK_DIST_SQ = PETAL_NODE_LINK_DIST * PETAL_NODE_LINK_DIST;
    const MOUSE_LINK_DIST = 200;
    const MOUSE_LINK_DIST_SQ = MOUSE_LINK_DIST * MOUSE_LINK_DIST;

    let globalWindTime = 0;
    let animId;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      globalWindTime += 0.015;
      const gust = Math.sin(globalWindTime * 0.5) * 0.35 + Math.sin(globalWindTime * 0.2) * 0.2;
      mouseSpeedX *= 0.92;

      // Update Neural Nodes
      for (let i = 0; i < nodeCount; i++) {
        const n = neuralNodes[i];
        n.x += n.vx + gust * 0.15;
        n.y += n.vy;
        n.pulseAngle += n.pulseSpeed;
        n.connections = 0;

        // Bounce gently inside canvas bounds
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

      // --- DRAW NEURAL LINKS ---
      // A. Node-to-Node Synaptic Network
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
            const alpha = factor * 0.42;

            n1.connections++;
            n2.connections++;

            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = `rgba(244, 114, 182, ${alpha})`;
            ctx.lineWidth = factor * 1.1;
            ctx.stroke();

            // Fire synaptic impulse
            if (Math.random() < 0.0025 && factor > 0.5) {
              spawnImpulse(n1.x, n1.y, n2.x, n2.y, 'rgba(255, 235, 245, 0.95)');
            }
          }
        }
      }

      // B. Petal-to-Node & Petal-to-Petal Bio-Digital Bridges
      for (let i = 0; i < petalCount; i++) {
        const p = petals[i];

        // Connect Petal to nearby Neural Nodes
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
            const alpha = factor * 0.48 * p.depth;

            p.activeLinksCount++;
            n.connections++;

            // Dynamic bio-digital neural filament
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(n.x, n.y);
            ctx.strokeStyle = `rgba(251, 113, 133, ${alpha})`;
            ctx.lineWidth = factor * 1.2;
            ctx.shadowColor = 'rgba(244, 114, 182, 0.5)';
            ctx.shadowBlur = 6;
            ctx.stroke();
            ctx.shadowBlur = 0;

            if (Math.random() < 0.003 && factor > 0.45) {
              spawnImpulse(n.x, n.y, p.x, p.y, 'rgba(255, 240, 245, 0.95)');
            }
          }
        }

        // Connect Petal to nearby Petals
        for (let j = i + 1; j < petalCount; j++) {
          const p2 = petals[j];
          const dx = p.x - p2.x;
          if (Math.abs(dx) > 130) continue;
          const dy = p.y - p2.y;
          if (Math.abs(dy) > 130) continue;

          const distSq = dx * dx + dy * dy;
          if (distSq < 16900) {
            const dist = Math.sqrt(distSq);
            const factor = 1 - dist / 130;
            const alpha = factor * 0.45 * Math.min(p.depth, p2.depth);

            p.activeLinksCount++;
            p2.activeLinksCount++;

            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(244, 114, 182, ${alpha})`;
            ctx.lineWidth = factor * 1.2;
            ctx.stroke();
          }
        }
      }

      // C. Interactive Mouse Neural Probe Links
      if (isMouseOnScreen) {
        // Glowing cursor core node
        const cursorPulse = Math.sin(globalWindTime * 3) * 2 + 6;
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, cursorPulse, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(244, 114, 182, 0.3)';
        ctx.shadowColor = 'rgba(244, 114, 182, 0.9)';
        ctx.shadowBlur = 14;
        ctx.fill();
        ctx.shadowBlur = 0;

        ctx.beginPath();
        ctx.arc(mouseX, mouseY, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.fill();

        // Connect cursor to Petals
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
            const alpha = factor * 0.75;

            p.activeLinksCount++;

            const grad = ctx.createLinearGradient(mouseX, mouseY, p.x, p.y);
            grad.addColorStop(0, `rgba(255, 240, 245, ${alpha})`);
            grad.addColorStop(0.5, `rgba(244, 114, 182, ${alpha * 0.9})`);
            grad.addColorStop(1, `rgba(251, 113, 133, ${alpha * 0.4})`);

            ctx.beginPath();
            ctx.moveTo(mouseX, mouseY);
            ctx.lineTo(p.x, p.y);
            ctx.strokeStyle = grad;
            ctx.lineWidth = factor * 1.6;
            ctx.shadowColor = 'rgba(244, 114, 182, 0.7)';
            ctx.shadowBlur = 8;
            ctx.stroke();
            ctx.shadowBlur = 0;

            if (Math.random() < 0.018 && factor > 0.4) {
              spawnImpulse(mouseX, mouseY, p.x, p.y, 'rgba(255, 255, 255, 0.98)');
            }
          }
        }

        // Connect cursor to Neural Nodes
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
            const alpha = factor * 0.7;

            ctx.beginPath();
            ctx.moveTo(mouseX, mouseY);
            ctx.lineTo(n.x, n.y);
            ctx.strokeStyle = `rgba(255, 210, 230, ${alpha})`;
            ctx.lineWidth = factor * 1.3;
            ctx.stroke();
          }
        }
      }

      // D. Draw Synaptic Electrical Impulses
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
        ctx.shadowColor = 'rgba(255, 235, 245, 0.95)';
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // E. Draw Neural Constellation Nodes
      for (let i = 0; i < nodeCount; i++) {
        const n = neuralNodes[i];
        const pulse = Math.sin(n.pulseAngle) * 0.35 + 0.65;
        const currentRadius = n.radius * (n.connections > 0 ? 1.3 : 1);

        ctx.beginPath();
        ctx.arc(n.x, n.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 210, 230, ${pulse * (n.connections > 0 ? 0.9 : 0.5)})`;
        ctx.shadowColor = 'rgba(244, 114, 182, 0.7)';
        ctx.shadowBlur = n.connections > 0 ? 8 : 4;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // F. Render Sakura Petals with Synaptic Junction Cores
      for (let i = 0; i < petalCount; i++) {
        const p = petals[i];

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotZ);

        const scaleX = Math.cos(p.rotX);
        const scaleY = Math.sin(p.rotY);
        ctx.scale(Math.abs(scaleX) < 0.1 ? 0.1 : scaleX, Math.abs(scaleY) < 0.1 ? 0.1 : scaleY);

        const size = p.baseSize * p.depth;

        // Organic Sakura Cleft Geometry
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

        // Realistic petal gradient
        const grad = ctx.createLinearGradient(0, size * 0.8, 0, -size);
        grad.addColorStop(0, `${p.color.base}${p.opacity})`);
        grad.addColorStop(0.7, `${p.color.base}${p.opacity * 0.95})`);
        grad.addColorStop(1, `${p.color.tip}${p.opacity * 0.9})`);

        ctx.fillStyle = grad;

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

        // Synaptic Core Node at Petal Center
        const coreIntensity = p.activeLinksCount > 0 
          ? Math.min(1, 0.5 + p.activeLinksCount * 0.2) 
          : 0.3;

        ctx.beginPath();
        ctx.arc(p.x, p.y, (p.depth * 2), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 240, 245, ${coreIntensity * p.opacity})`;
        ctx.shadowColor = 'rgba(244, 114, 182, 0.95)';
        ctx.shadowBlur = p.activeLinksCount > 0 ? 12 : 5;
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
