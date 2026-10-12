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
    if (val < 28) return 'Initializing neural architecture...';
    if (val < 62) return 'Decrypting AI & software modules...';
    if (val < 92) return 'Calibrating interface & aesthetics...';
    return 'Welcome // Access granted';
  };

  useEffect(() => {
    // Lock scroll during cinema entrance
    document.body.style.overflow = 'hidden';

    // Smooth realistic progress counter reaching 100% in ~2.2s
    let current = 0;
    const interval = setInterval(() => {
      // Non-linear realistic acceleration
      const increment = current < 30 ? 2 : current < 75 ? 3 : current < 92 ? 2 : 1;
      current = Math.min(100, current + increment);
      setProgress(current);

      if (current >= 100) {
        clearInterval(interval);
        // Small dramatic pause at 100% before curtains split
        setTimeout(() => {
          setIsOpen(true);
        }, 250);

        // Remove from DOM after curtain animation completes
        setTimeout(() => {
          setIsDone(true);
          document.body.style.overflow = 'unset';
        }, 1400);
      }
    }, 45);

    return () => {
      clearInterval(interval);
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
            <div className="relative w-full max-w-md p-8 sm:p-10 rounded-3xl bg-[#070c1e]/85 backdrop-blur-2xl border border-cyan-500/25 shadow-[0_0_60px_rgba(56,189,248,0.2),0_0_100px_rgba(168,85,247,0.18)] overflow-hidden">
              
              {/* Subtle ambient corner flares inside card */}
              <div className="absolute -top-12 -left-12 w-36 h-36 bg-cyan-500/20 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-12 -right-12 w-36 h-36 bg-purple-500/20 rounded-full blur-2xl pointer-events-none" />

              {/* Status Header Badge */}
              <div className="flex items-center justify-between mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
                  </span>
                  <span className="text-cyan-300 font-mono text-[10px] tracking-[0.2em] uppercase font-semibold">
                    CINEMA INITIALIZATION
                  </span>
                </div>
                <span className="text-gray-400 font-mono text-xs tracking-wider">
                  SYS // 2.0
                </span>
              </div>

              {/* Name & Title */}
              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white font-sans">
                    Sayantani Sinha
                  </h2>
                  <span className="text-cyan-400 text-3xl font-black leading-none">.</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-400 font-mono tracking-wider mt-1">
                  Software Engineer &amp; AI/ML Developer
                </p>
              </div>

              {/* Progress Counter & Percentage */}
              <div className="flex items-baseline justify-between mb-3">
                <span className="text-gray-400 font-mono text-xs tracking-widest uppercase">
                  PROGRESS
                </span>
                <span className="text-4xl sm:text-5xl font-black font-mono tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-purple-300">
                  {progress}
                  <span className="text-xl sm:text-2xl text-cyan-400 font-normal">%</span>
                </span>
              </div>

              {/* Glowing Dynamic Progress Track */}
              <div className="relative w-full h-[5px] bg-slate-800/80 rounded-full overflow-hidden mb-4 p-[1px]">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 shadow-[0_0_12px_rgba(56,189,248,0.9)]"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: 'easeOut', duration: 0.1 }}
                />
              </div>

              {/* Dynamic Terminal Subtitle */}
              <div className="flex items-center gap-2">
                <span className="text-cyan-400 font-mono text-xs font-bold">&gt;</span>
                <p className="text-xs font-mono text-cyan-300/80 tracking-wide truncate">
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
            className="fixed top-0 bottom-0 left-1/2 -translate-x-1/2 w-[3px] bg-white z-[1000003] shadow-[0_0_25px_#ffffff,0_0_50px_#38bdf8,0_0_100px_#a855f7]"
          />
        )}
      </AnimatePresence>

      {/* --- LEFT CURVED CINEMA CURTAIN --- */}
      <motion.div
        key="left-curtain"
        initial={{ x: '0%' }}
        animate={isOpen ? { x: '-105%' } : { x: '0%' }}
        transition={{
          duration: 1.15,
          ease: [0.77, 0, 0.175, 1], // Luxury cinematic curve
        }}
        className="fixed top-0 left-0 w-[51.5vw] h-full bg-[#050814] z-[1000001] border-r-2 border-cyan-400/80 shadow-[15px_0_45px_rgba(56,189,248,0.4)]"
        style={{
          borderTopRightRadius: '90px 50%',
          borderBottomRightRadius: '90px 50%',
        }}
      >
        {/* Subtle interior lighting inside left curtain */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-950/10 to-cyan-500/5 pointer-events-none" />
        <div className="absolute top-1/4 right-0 w-48 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      </motion.div>

      {/* --- RIGHT CURVED CINEMA CURTAIN --- */}
      <motion.div
        key="right-curtain"
        initial={{ x: '0%' }}
        animate={isOpen ? { x: '105%' } : { x: '0%' }}
        transition={{
          duration: 1.15,
          ease: [0.77, 0, 0.175, 1], // Luxury cinematic curve
        }}
        className="fixed top-0 right-0 w-[51.5vw] h-full bg-[#050814] z-[1000001] border-l-2 border-purple-500/80 shadow-[-15px_0_45px_rgba(168,85,247,0.4)]"
        style={{
          borderTopLeftRadius: '90px 50%',
          borderBottomLeftRadius: '90px 50%',
        }}
      >
        {/* Subtle interior lighting inside right curtain */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-purple-950/10 to-purple-500/5 pointer-events-none" />
        <div className="absolute bottom-1/4 left-0 w-48 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      </motion.div>
    </div>
  );
};

export default CinemaCurtainOpening;
