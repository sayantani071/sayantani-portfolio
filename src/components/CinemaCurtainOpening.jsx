import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * CinemaCurtainOpening
 * Luxury cinema curtain split with dark curved neon borders and smooth glassmorphism loader.
 * Duration: ~2.5 seconds, then splits open from the center to unveil the portfolio.
 */
const CinemaCurtainOpening = () => {
  const [progress, setProgress] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isDone, setIsDone] = useState(false);

  // Status logs that evolve with progress
  const getStatusText = (val) => {
    if (val < 28) return '🌸 Blooming neural architecture...';
    if (val < 62) return '🌸 Loading AI models & spring repositories...';
    if (val < 92) return '🌸 Tuning Sakura aesthetics & interface...';
    return '🌸 Welcome to Sakura // Access granted';
  };

  useEffect(() => {
    // Lock scroll during cinema entrance
    document.body.style.overflow = 'hidden';

    // Smooth realistic progress counter reaching 100% in ~2.2s
    let current = 0;
    const interval = window.setInterval(() => {
      // Non-linear realistic acceleration
      const increment = current < 30 ? 2 : current < 75 ? 3 : current < 92 ? 2 : 1;
      current = Math.min(100, current + increment);
      setProgress(current);

      if (current >= 100) {
        window.clearInterval(interval);
        // Small dramatic pause at 100% before curtains split
        window.setTimeout(() => {
          setIsOpen(true);
        }, 250);

        // Remove from DOM after curtain animation completes
        window.setTimeout(() => {
          setIsDone(true);
          document.body.style.overflow = 'unset';
        }, 1400);
      }
    }, 45);

    return () => {
      window.clearInterval(interval);
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (isDone) return null;

  return (
    <div className="fixed inset-0 z-[999999] pointer-events-none select-none overflow-hidden">
      <AnimatePresence>
        {!isOpen && (
          /* --- CENTER GLASSMORPHISM LOADER CARD --- */
          <motion.div
            key="center-card"
            initial={{ opacity: 0, scale: 0.92, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{
              opacity: 0,
              scale: 0.88,
              filter: 'blur(12px)',
              transition: { duration: 0.5, ease: 'easeInOut' },
            }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 flex items-center justify-center z-[1000002] px-6 pointer-events-auto"
          >
            <div className="relative w-full max-w-md p-8 sm:p-10 rounded-3xl bg-[#0c0517]/90 backdrop-blur-2xl border border-pink-500/20 shadow-[0_0_40px_rgba(244,114,182,0.12)] overflow-hidden">
              
              {/* Status Header Badge */}
              <div className="flex items-center justify-between mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-400" />
                  </span>
                  <span className="text-pink-300 font-mono text-[10px] tracking-[0.2em] uppercase font-semibold">
                    🌸 SAKURA CALIBRATION
                  </span>
                </div>
                <span className="text-pink-300/50 font-mono text-xs tracking-wider">
                  SYS // SAKURA
                </span>
              </div>

              {/* Name & Title */}
              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-sans">
                    Sayantani Sinha
                  </h2>
                  <span className="text-pink-400 text-3xl font-bold leading-none">.</span>
                </div>
                <p className="text-xs sm:text-sm text-pink-200/70 font-mono tracking-wider mt-1">
                  Software Engineer &amp; AI/ML Developer
                </p>
              </div>

              {/* Progress Counter & Percentage */}
              <div className="flex items-baseline justify-between mb-3">
                <span className="text-pink-300/60 font-mono text-xs tracking-widest uppercase">
                  PROGRESS
                </span>
                <span className="text-4xl sm:text-5xl font-light font-mono tracking-tight text-white">
                  {progress}
                  <span className="text-xl sm:text-2xl text-pink-400/80 font-normal">%</span>
                </span>
              </div>

              {/* Glowing Dynamic Progress Track - Sleek & Minimal */}
              <div className="relative w-full h-[3px] bg-white/5 rounded-full overflow-hidden mb-4">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-pink-400 to-rose-400 shadow-[0_0_10px_rgba(244,114,182,0.6)]"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: 'easeOut', duration: 0.1 }}
                />
              </div>

              {/* Dynamic Terminal Subtitle */}
              <div className="flex items-center gap-2">
                <span className="text-pink-400 font-mono text-xs font-bold">&gt;</span>
                <p className="text-xs font-mono text-pink-200/80 tracking-wide truncate">
                  {getStatusText(progress)}
                </p>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- CENTER SEAM LIGHT FLARE BURST --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="center-burst"
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: [0, 1, 0], scaleY: [0.2, 1, 1.2] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="fixed top-0 bottom-0 left-1/2 -translate-x-1/2 w-[3px] bg-white z-[1000003] shadow-[0_0_25px_#ffffff,0_0_50px_#f472b6,0_0_100px_#ec4899]"
          />
        )}
      </AnimatePresence>

      {/* --- LEFT CURVED SAKURA CINEMA CURTAIN --- */}
      <motion.div
        key="left-curtain"
        initial={{ x: '0%' }}
        animate={isOpen ? { x: '-105%' } : { x: '0%' }}
        transition={{
          duration: 1.15,
          ease: [0.77, 0, 0.175, 1],
        }}
        className="fixed top-0 left-0 w-[51.5vw] h-full bg-[#0c0517] z-[1000001] border-r-2 border-pink-400/80 shadow-[15px_0_45px_rgba(244,114,182,0.45)]"
        style={{
          borderTopRightRadius: '90px 50%',
          borderBottomRightRadius: '90px 50%',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-950/20 to-pink-500/10 pointer-events-none" />
        <div className="absolute top-1/4 right-0 w-56 h-96 bg-pink-500/15 rounded-full blur-3xl pointer-events-none" />
      </motion.div>

      {/* --- RIGHT CURVED SAKURA CINEMA CURTAIN --- */}
      <motion.div
        key="right-curtain"
        initial={{ x: '0%' }}
        animate={isOpen ? { x: '105%' } : { x: '0%' }}
        transition={{
          duration: 1.15,
          ease: [0.77, 0, 0.175, 1],
        }}
        className="fixed top-0 right-0 w-[51.5vw] h-full bg-[#0c0517] z-[1000001] border-l-2 border-rose-400/80 shadow-[-15px_0_45px_rgba(251,113,133,0.45)]"
        style={{
          borderTopLeftRadius: '90px 50%',
          borderBottomLeftRadius: '90px 50%',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-rose-950/20 to-rose-500/10 pointer-events-none" />
        <div className="absolute bottom-1/4 left-0 w-56 h-96 bg-rose-500/15 rounded-full blur-3xl pointer-events-none" />
      </motion.div>
    </div>
  );
};

export default CinemaCurtainOpening;
