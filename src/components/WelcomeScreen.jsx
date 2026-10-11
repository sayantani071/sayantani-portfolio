import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

const WelcomeScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('Initializing Systems...');
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Fast & engaging progress progression (~2.2 seconds total)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Organic step increments
        const increment = Math.floor(Math.random() * 8) + 3;
        const next = Math.min(prev + increment, 100);

        if (next < 30) {
          setStatusText('Initializing Portfolio Systems...');
        } else if (next < 65) {
          setStatusText('Loading AI & ML Projects...');
        } else if (next < 95) {
          setStatusText('Synthesizing Neural Experience...');
        } else {
          setStatusText('Welcome • Access Granted');
        }

        return next;
      });
    }, 45);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      // Hold for 350ms to let user see 100% and Welcome text, then trigger exit transition
      const timer = setTimeout(() => {
        setIsExiting(true);
      }, 350);

      // Once exit effect completes, notify parent App to unmount or unlock
      const exitTimer = setTimeout(() => {
        if (onComplete) onComplete();
      }, 1250);

      return () => {
        clearTimeout(timer);
        clearTimeout(exitTimer);
      };
    }
  }, [progress, onComplete]);

  const handleSkip = () => {
    setIsExiting(true);
    setTimeout(() => {
      if (onComplete) onComplete();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-[99990] pointer-events-auto overflow-hidden">
      {/* Top Shutter Panel */}
      <motion.div
        initial={{ y: 0 }}
        animate={isExiting ? { y: '-100%' } : { y: 0 }}
        transition={{ duration: 0.85, ease: [0.77, 0, 0.175, 1] }}
        className="absolute top-0 left-0 w-full h-1/2 bg-[#05070d] border-b border-cyan-500/20 z-10"
      >
        {/* Subtle grid and ambient background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent pointer-events-none"></div>
      </motion.div>

      {/* Bottom Shutter Panel */}
      <motion.div
        initial={{ y: 0 }}
        animate={isExiting ? { y: '100%' } : { y: 0 }}
        transition={{ duration: 0.85, ease: [0.77, 0, 0.175, 1] }}
        className="absolute bottom-0 left-0 w-full h-1/2 bg-[#05070d] border-t border-purple-500/20 z-10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent pointer-events-none"></div>
      </motion.div>

      {/* Main Content Area */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={
          isExiting
            ? { opacity: 0, scale: 1.1, filter: 'blur(15px)' }
            : { opacity: 1, scale: 1, filter: 'blur(0px)' }
        }
        transition={{ duration: 0.65, ease: 'easeInOut' }}
        className="relative z-20 w-full h-full flex flex-col items-center justify-center px-6 text-center select-none"
      >
        {/* Ambient background glows */}
        <div className="absolute w-[450px] h-[450px] bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none -top-24 -left-24 animate-pulse"></div>
        <div className="absolute w-[450px] h-[450px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none -bottom-24 -right-24 animate-pulse" style={{ animationDelay: '1s' }}></div>

        {/* Central Monogram / Emblem with spinning neon rings */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative mb-8"
        >
          {/* Rotating outer ring */}
          <div className="absolute -inset-4 rounded-full border border-dashed border-cyan-400/30 animate-spin" style={{ animationDuration: '10s' }}></div>
          {/* Glowing pulse ring */}
          <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 opacity-30 blur-md animate-pulse"></div>
          
          <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#0a0f1a]/90 border border-cyan-400/40 backdrop-blur-md flex items-center justify-center shadow-[0_0_30px_rgba(0,240,255,0.3)]">
            <span className="text-3xl md:text-4xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-[linear-gradient(90deg,#00f0ff_0%,#a855f7_40%,#ffffff_50%,#a855f7_60%,#00f0ff_100%)] bg-[length:200%_auto] animate-text-flow font-mono">
              SS<span className="text-cyan-400">.</span>
            </span>
          </div>
        </motion.div>

        {/* Status Chip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-4"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono tracking-widest uppercase shadow-[0_0_15px_rgba(0,240,255,0.2)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white shadow-[0_0_8px_#ffffff]"></span>
            </span>
            <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-spin" style={{ animationDuration: '6s' }} />
            WELCOME TO MY UNIVERSE
          </span>
        </motion.div>

        {/* Dynamic Welcome Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4 tracking-tight"
        >
          <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#00f0ff_0%,#a855f7_30%,#ffffff_50%,#a855f7_70%,#00f0ff_100%)] bg-[length:200%_auto] animate-text-flow drop-shadow-[0_0_35px_rgba(0,240,255,0.35)]">
            Welcome to My Portfolio
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-sm sm:text-base md:text-lg text-gray-300 font-mono tracking-wide max-w-xl mb-10"
        >
          Sayantani Sinha <span className="text-cyan-400">•</span> Software Engineer & AI ML Developer
        </motion.p>

        {/* Dynamic Multi-Stop Progress Bar with Purple, Neon Blue & White */}
        <div className="w-full max-w-xs sm:max-w-md flex flex-col items-center gap-3">
          <div className="w-full bg-[#0a0f1a]/90 border border-purple-500/30 h-3 rounded-full overflow-hidden relative p-[1px] shadow-[inset_0_1px_5px_rgba(0,0,0,0.8),0_0_15px_rgba(168,85,247,0.2)]">
            <motion.div
              style={{ width: `${progress}%` }}
              className="h-full relative overflow-hidden rounded-full bg-[linear-gradient(90deg,#00f0ff_0%,#a855f7_30%,#ffffff_50%,#a855f7_70%,#00f0ff_100%)] bg-[length:200%_auto] animate-text-flow shadow-[0_0_15px_rgba(0,240,255,0.8),0_0_25px_rgba(168,85,247,0.6)] transition-all duration-150 ease-out"
            >
              {/* Sweeping dynamic white beam */}
              <div className="absolute top-0 left-0 h-full w-[200%] bg-gradient-to-r from-transparent via-white/80 to-transparent animate-slide"></div>
              {/* Leading edge neon white-blue dot */}
              <div className="absolute right-0 top-0 bottom-0 w-3 bg-white rounded-full blur-[0.5px] shadow-[0_0_12px_#ffffff,0_0_20px_#00f0ff]"></div>
            </motion.div>
          </div>

          {/* Counter & Status Info */}
          <div className="w-full flex justify-between items-center text-xs font-mono px-1">
            <span className="text-gray-400 flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
              {statusText}
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-purple-400 font-bold text-sm tracking-wider">
              {progress}%
            </span>
          </div>
        </div>

        {/* Skip Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          whileHover={{ opacity: 1, scale: 1.05 }}
          onClick={handleSkip}
          className="mt-10 px-5 py-2 rounded-full border border-gray-700/60 bg-white/5 hover:bg-white/10 text-xs font-mono text-gray-400 hover:text-white flex items-center gap-2 transition-all duration-300"
        >
          Skip Intro <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
        </motion.button>
      </motion.div>
    </div>
  );
};

export default WelcomeScreen;
