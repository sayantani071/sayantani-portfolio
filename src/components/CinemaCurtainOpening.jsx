import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const getStatusText = (value) => {
  if (value < 28) return 'Preparing the scene';
  if (value < 62) return 'Gathering small ideas';
  if (value < 92) return 'Arranging the details';
  return 'Ready to explore';
};

const CinemaCurtainOpening = () => {
  const [progress, setProgress] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    let current = 0;
    const interval = window.setInterval(() => {
      const increment = current < 30 ? 2 : current < 75 ? 3 : current < 92 ? 2 : 1;
      current = Math.min(100, current + increment);
      setProgress(current);

      if (current >= 100) {
        window.clearInterval(interval);
        window.setTimeout(() => setIsOpen(true), 250);
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
    <div className="fixed inset-0 z-[999999] overflow-hidden bg-[#100d16] text-[#f6edf0] select-none">
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            key="opening-title"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8, transition: { duration: 0.35 } }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[20] flex items-center justify-center px-6"
          >
            <div className="w-full max-w-sm text-center">
              <div className="flex items-center justify-center gap-3 text-[9px] font-mono uppercase tracking-[0.3em] text-[#d7b4c0]/75 sm:text-[10px]">
                <span className="h-px w-7 bg-[#b77f91]/60" />
                <span>Portfolio · 2026</span>
                <span className="h-px w-7 bg-[#b77f91]/60" />
              </div>

              <div className="relative mt-7">
                <span className="absolute -right-1 -top-5 text-lg text-[#d7a3b3]" aria-hidden="true">
                  花
                </span>
                <h1 className="font-serif text-5xl font-semibold leading-[0.9] text-white sm:text-6xl">
                  Sayantani
                  <br />
                  <span className="text-[#d9a8b6]">Sinha</span>
                </h1>
              </div>

              <p className="mt-5 text-[11px] font-medium tracking-[0.16em] text-white/70 sm:text-xs">
                SOFTWARE ENGINEER <span className="text-[#c99aaa]">·</span> AI/ML DEVELOPER
              </p>
              <p className="mt-2 font-serif text-sm tracking-[0.08em] text-[#cdb9c2]/65">
                花ひらく <span className="px-1 text-[#b77f91]">·</span> 꽃이 피다
              </p>

              <div className="mx-auto mt-12 max-w-[17rem] text-left">
                <div className="mb-2 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.2em] text-white/45">
                  <span>{getStatusText(progress)}</span>
                  <span className="tabular-nums text-[#e8c7d0]">{String(progress).padStart(2, '0')}</span>
                </div>
                <div
                  className="h-[3px] w-full overflow-hidden bg-white/10"
                  role="progressbar"
                  aria-label="Loading portfolio"
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={progress}
                >
                  <motion.div
                    className="h-full bg-[#d9a8b6]"
                    style={{ width: `${progress}%` }}
                    transition={{ ease: 'easeOut', duration: 0.1 }}
                  />
                </div>
                <div className="mt-3 flex items-center justify-between font-mono text-[8px] uppercase tracking-[0.2em] text-white/30">
                  <span>Now loading</span>
                  <span>01 / 01</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="center-burst"
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: [0, 0.8, 0], scaleY: [0.15, 1, 1.1] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="fixed bottom-0 left-1/2 top-0 z-[30] w-px origin-center bg-[#f6e6eb]"
          />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ x: '0%' }}
        animate={isOpen ? { x: '-101%' } : { x: '0%' }}
        transition={{ duration: 1.15, ease: [0.77, 0, 0.175, 1] }}
        className="fixed inset-y-0 left-0 z-[10] w-1/2 border-r border-[#d9a8b6]/30 bg-[#100d16]"
        style={{
          backgroundImage: 'linear-gradient(rgba(217, 168, 182, 0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(217, 168, 182, 0.045) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      >
        <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[#d9a8b6]/[0.06] to-transparent" />
      </motion.div>

      <motion.div
        initial={{ x: '0%' }}
        animate={isOpen ? { x: '101%' } : { x: '0%' }}
        transition={{ duration: 1.15, ease: [0.77, 0, 0.175, 1] }}
        className="fixed inset-y-0 right-0 z-[10] w-1/2 border-l border-[#d9a8b6]/30 bg-[#100d16]"
        style={{
          backgroundImage: 'linear-gradient(rgba(217, 168, 182, 0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(217, 168, 182, 0.045) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      >
        <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[#d9a8b6]/[0.06] to-transparent" />
      </motion.div>
    </div>
  );
};

export default CinemaCurtainOpening;
