import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const WelcomeScreen = ({ onComplete }) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Total display time: ~1.4s of elegant presence, then smooth upward curtain wipe
    const textTimer = setTimeout(() => {
      setIsExiting(true);
    }, 1400);

    const finishTimer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 2250);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(finishTimer);
    };
  }, [onComplete]);

  const handleInstantEnter = () => {
    if (!isExiting) {
      setIsExiting(true);
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 750);
    }
  };

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={isExiting ? { y: '-100%' } : { y: 0 }}
      transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
      onClick={handleInstantEnter}
      className="fixed inset-0 z-[99990] bg-[#060810] flex flex-col items-center justify-center cursor-pointer select-none overflow-hidden rounded-b-[40px] md:rounded-b-[80px] shadow-[0_30px_100px_rgba(0,0,0,0.9)]"
    >
      {/* Ambient background glows */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none top-[-10%] left-[20%]"></div>
      <div className="absolute w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none bottom-[-10%] right-[20%]"></div>

      {/* Subtle background grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      ></div>

      {/* Center Typography Reveal */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl">
        {/* Top Tagline */}
        <div className="overflow-hidden mb-3">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={isExiting ? { y: -30, opacity: 0 } : { y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
            className="flex items-center gap-2.5 text-xs sm:text-sm font-mono tracking-[0.25em] text-cyan-400 uppercase"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f0ff] animate-ping"></span>
            HELLO & WELCOME
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_8px_#a855f7]"></span>
          </motion.div>
        </div>

        {/* Main Headline */}
        <div className="overflow-hidden mb-4 py-1">
          <motion.h1
            initial={{ y: 80, opacity: 0 }}
            animate={isExiting ? { y: -50, opacity: 0 } : { y: 0, opacity: 1 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight"
          >
            <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#00f0ff_0%,#a855f7_30%,#ffffff_50%,#a855f7_70%,#00f0ff_100%)] bg-[length:200%_auto] animate-text-flow drop-shadow-[0_0_40px_rgba(0,240,255,0.35)]">
              Welcome to My Portfolio
            </span>
          </motion.h1>
        </div>

        {/* Accent Bar */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isExiting ? { scaleX: 0, opacity: 0 } : { scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
          className="w-20 sm:w-28 h-1 bg-[linear-gradient(90deg,#00f0ff,#a855f7,#ffffff,#00f0ff)] bg-[length:200%_auto] animate-text-flow rounded-full mb-6 shadow-[0_0_15px_rgba(0,240,255,0.6)]"
        ></motion.div>

        {/* Name and Tagline */}
        <div className="overflow-hidden">
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={isExiting ? { y: -20, opacity: 0 } : { y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
            className="text-sm sm:text-base md:text-lg font-mono text-gray-400 tracking-wider"
          >
            <span className="text-white font-medium">Sayantani Sinha</span>
            <span className="text-cyan-400 mx-2">•</span>
            <span>Software Engineer & AI ML Developer</span>
          </motion.p>
        </div>
      </div>

      {/* Bottom Glowing Border on the lifting curtain edge */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 via-purple-500 to-transparent opacity-80 shadow-[0_0_20px_rgba(0,240,255,0.8),0_0_35px_rgba(168,85,247,0.6)]"></div>
    </motion.div>
  );
};

export default WelcomeScreen;
