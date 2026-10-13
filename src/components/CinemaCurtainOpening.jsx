import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SakuraPetals from './SakuraPetals';

const CinemaCurtainOpening = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const openTimer = window.setTimeout(() => setIsOpen(true), 2200);
    const exitTimer = window.setTimeout(() => {
      setIsDone(true);
      document.body.style.overflow = 'unset';
    }, 3700);

    return () => {
      window.clearTimeout(openTimer);
      window.clearTimeout(exitTimer);
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (isDone) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[999999] overflow-hidden bg-[#100d16] text-[#f6edf0] select-none"
      animate={{ opacity: isOpen ? 0 : 1 }}
      transition={{ delay: isOpen ? 0.62 : 0, duration: 0.88, ease: 'easeInOut' }}
    >
      <SakuraPetals className="!z-[15] opacity-80" />

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
                <span>Spring chapter</span>
                <span className="h-px w-7 bg-[#b77f91]/60" />
              </div>

              <div className="mt-8">
                <h1 className="font-serif text-5xl font-semibold leading-[0.95] text-white sm:text-6xl">
                  A world
                  <br />
                  <span className="text-[#d9a8b6]">in bloom</span>
                </h1>
                <p className="mt-6 text-[10px] font-medium tracking-[0.16em] text-white/65 sm:text-[11px]">
                  SOFTWARE ENGINEER <span className="text-[#c99aaa]">·</span> AI/ML DEVELOPER
                </p>
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
            animate={{ opacity: [0, 0.28, 0], scaleY: [0.15, 1, 1.05] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="fixed bottom-0 left-1/2 top-0 z-[30] w-px origin-center bg-[#f6e6eb]/80"
          />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ x: '0%' }}
        animate={isOpen ? { x: '-101%' } : { x: '0%' }}
        transition={{ duration: 1.15, ease: [0.77, 0, 0.175, 1] }}
        className="fixed inset-y-0 left-0 z-[10] w-1/2 border-r border-[#d9a8b6]/25 bg-[#100d16]"
        style={{
          backgroundImage: 'linear-gradient(rgba(217, 168, 182, 0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(217, 168, 182, 0.025) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      >
        <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#d9a8b6]/[0.04] to-transparent" />
      </motion.div>

      <motion.div
        initial={{ x: '0%' }}
        animate={isOpen ? { x: '101%' } : { x: '0%' }}
        transition={{ duration: 1.15, ease: [0.77, 0, 0.175, 1] }}
        className="fixed inset-y-0 right-0 z-[10] w-1/2 border-l border-[#d9a8b6]/25 bg-[#100d16]"
        style={{
          backgroundImage: 'linear-gradient(rgba(217, 168, 182, 0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(217, 168, 182, 0.025) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      >
        <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#d9a8b6]/[0.04] to-transparent" />
      </motion.div>
    </motion.div>
  );
};

export default CinemaCurtainOpening;
