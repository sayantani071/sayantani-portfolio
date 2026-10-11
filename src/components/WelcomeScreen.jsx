import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const words = ["Welcome", "to", "My", "Portfolio"];

const WelcomeScreen = ({ onComplete }) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Total display time: ~1.7s of dynamic presence, then smooth upward curtain wipe
    const textTimer = setTimeout(() => {
      setIsExiting(true);
    }, 1700);

    const finishTimer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 2550);

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
      {/* Dynamic Ambient Background Glows */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.12, 0.2, 0.12] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[160px] pointer-events-none top-[-10%] left-[15%]"
      />
      <motion.div 
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.12, 0.2, 0.12] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[160px] pointer-events-none bottom-[-10%] right-[15%]"
      />

      {/* Subtle background grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      ></div>

      {/* Floating Sparkles around title */}
      <motion.div 
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: [0, 1, 0.6, 1], scale: [0.8, 1.2, 1] }}
        transition={{ delay: 0.4, duration: 2, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute top-[32%] left-[18%] md:left-[26%] text-cyan-300 pointer-events-none"
      >
        <Sparkles className="w-5 h-5 drop-shadow-[0_0_8px_#00f0ff]" />
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: [0, 1, 0.4, 1], scale: [0.8, 1.3, 0.9] }}
        transition={{ delay: 0.7, duration: 2.5, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute top-[34%] right-[18%] md:right-[26%] text-purple-300 pointer-events-none"
      >
        <Sparkles className="w-5 h-5 drop-shadow-[0_0_8px_#a855f7]" />
      </motion.div>

      {/* Center Typography Reveal */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl">
        {/* Top Tagline */}
        <div className="overflow-hidden mb-3">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={isExiting ? { y: -30, opacity: 0 } : { y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
            className="flex items-center gap-2.5 text-xs sm:text-sm font-mono tracking-[0.25em] text-cyan-400 uppercase"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f0ff] animate-ping"></span>
            HELLO & WELCOME
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_8px_#a855f7]"></span>
          </motion.div>
        </div>

        {/* Main Headline with Staggered Character Wave & Ambient Glow */}
        <motion.div 
          animate={isExiting ? { y: -40, opacity: 0 } : { y: [0, -4, 0] }}
          transition={
            isExiting 
              ? { duration: 0.5 }
              : { y: { duration: 3, repeat: Infinity, ease: 'easeInOut' } }
          }
          className="relative mb-5 py-2"
        >
          {/* Ambient Blurred Glowing Aura behind text */}
          <div className="absolute inset-0 blur-2xl opacity-40 select-none pointer-events-none flex items-center justify-center">
            <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-transparent bg-clip-text bg-[linear-gradient(90deg,#00f0ff,#a855f7,#00f0ff)]">
              Welcome to My Portfolio
            </span>
          </div>

          {/* Staggered Wave Heading */}
          <h1 className="relative text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-transparent bg-clip-text bg-[linear-gradient(90deg,#00f0ff_0%,#a855f7_30%,#ffffff_50%,#a855f7_70%,#00f0ff_100%)] bg-[length:200%_auto] animate-text-flow drop-shadow-[0_0_35px_rgba(0,240,255,0.4)]">
            {words.map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block whitespace-nowrap mr-3 sm:mr-5 last:mr-0">
                {word.split('').map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    initial={{ y: 50, opacity: 0, scale: 0.7, filter: 'blur(8px)' }}
                    animate={{ y: 0, opacity: 1, scale: 1, filter: 'blur(0px)' }}
                    transition={{
                      duration: 0.5,
                      delay: 0.08 + (wordIndex * 6 + charIndex) * 0.035,
                      ease: [0.215, 0.61, 0.355, 1],
                    }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>
        </motion.div>

        {/* Dynamic Glowing Accent Bar */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isExiting ? { scaleX: 0, opacity: 0 } : { scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
          className="w-24 sm:w-36 h-1 bg-[linear-gradient(90deg,#00f0ff,#a855f7,#ffffff,#00f0ff)] bg-[length:200%_auto] animate-text-flow rounded-full mb-6 shadow-[0_0_15px_rgba(0,240,255,0.7),0_0_25px_rgba(168,85,247,0.5)]"
        ></motion.div>

        {/* Name and Tagline */}
        <div className="overflow-hidden">
          <motion.p
            initial={{ y: 25, opacity: 0 }}
            animate={isExiting ? { y: -20, opacity: 0 } : { y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55, ease: [0.33, 1, 0.68, 1] }}
            className="text-sm sm:text-base md:text-lg font-mono text-gray-400 tracking-wider"
          >
            <span className="text-white font-medium">Sayantani Sinha</span>
            <span className="text-cyan-400 mx-2">•</span>
            <span>Software Engineer & AI ML Developer</span>
          </motion.p>
        </div>

        {/* Subtle click-to-enter hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: isExiting ? 0 : [0.4, 0.8, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.8 }}
          className="mt-8 text-[11px] font-mono text-gray-500 uppercase tracking-widest"
        >
          [ Click anywhere to enter ]
        </motion.p>
      </div>

      {/* Bottom Glowing Border on the lifting curtain edge */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 via-purple-500 to-transparent opacity-80 shadow-[0_0_20px_rgba(0,240,255,0.8),0_0_35px_rgba(168,85,247,0.6)]"></div>
    </motion.div>
  );
};

export default WelcomeScreen;
