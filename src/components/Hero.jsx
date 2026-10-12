import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const roles = [
  "Software Engineer",
  "AI/ML Engineer",
  "App Developer"
];

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative w-full min-h-[680px] lg:min-h-screen bg-transparent flex items-center pt-20 pb-16">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* --- LEFT SIDE: TEXT CONTENT --- */}
          <div className="flex flex-col justify-center items-center text-center order-2 lg:order-1 mt-4 lg:mt-0 lg:items-start lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center justify-center gap-3 mb-5 lg:justify-start"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-400"></span>
              </span>
              <p className="text-slate-300/75 font-mono tracking-[0.2em] text-[11px] md:text-xs font-medium uppercase">
                HELLO <span className="text-pink-300 mx-1">/</span> I AM
              </p>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 25, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-medium leading-[0.95] mb-5 whitespace-nowrap"
            >
              <span className="animated-fill-text" data-text="Sayantani Sinha">
                Sayantani Sinha
              </span>
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
              className="h-10 md:h-12 flex justify-center items-center w-full mb-8 lg:justify-start"
            >
              <div className="text-lg md:text-xl text-slate-300/80 font-light flex justify-center w-full lg:justify-start">
                <div className="relative overflow-hidden w-full max-w-[400px] h-[40px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentRoleIndex}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute left-0 top-0 w-full flex justify-center items-center gap-2 lg:justify-start"
                    >
                      <span className="text-pink-300 font-bold">/</span>
                      <span className="text-slate-200/90 font-mono text-sm md:text-base tracking-wide">{roles[currentRoleIndex]}</span>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center justify-center gap-3 lg:justify-start"
            >
              <a 
                href="#education" 
                className="px-6 py-3 border border-pink-300/45 bg-pink-300/15 hover:bg-pink-300/25 text-[11px] font-semibold tracking-[0.16em] text-pink-50 uppercase transition-colors duration-300"
              >
                VIEW MY WORK
              </a>

              <a 
                href="#" 
                className="px-6 py-3 border border-white/15 hover:border-pink-200/50 bg-white/[0.02] hover:bg-white/[0.05] text-[11px] font-semibold tracking-[0.16em] text-slate-200 uppercase transition-colors duration-300"
              >
                DOWNLOAD CV
              </a>
              
              <a 
                href="#contact" 
                className="px-6 py-3 border border-pink-300/45 bg-pink-300/15 hover:bg-pink-300/25 text-[11px] font-semibold tracking-[0.16em] text-pink-50 uppercase transition-colors duration-300"
              >
                LET&apos;S CONNECT
              </a>
            </motion.div>
          </div>

          {/* --- RIGHT SIDE: PORTRAIT IMAGE --- */}
          <div className="relative w-full h-[320px] sm:h-[410px] lg:h-[560px] flex items-center justify-center order-1 lg:order-2 mt-4 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
              className="relative w-full h-full flex justify-center items-center"
            >
              <div className="absolute w-[64%] h-[78%] border border-white/10 rounded-[48%_48%_8px_8px]" />
              <div 
                className="absolute w-full h-full flex justify-center items-end pb-0 lg:pb-6"
                style={{
                  WebkitMaskImage: 'radial-gradient(ellipse 68% 76% at 50% 48%, black 56%, transparent 100%)',
                  maskImage: 'radial-gradient(ellipse 68% 76% at 50% 48%, black 56%, transparent 100%)',
                }}
              >
                <img 
                  src="/profile.png" 
                  alt="Sayantani Sinha" 
                  className="object-contain w-[70%] md:w-[65%] lg:w-[80%] h-[90%] lg:h-[95%] grayscale-[0.3] contrast-110 brightness-105 mix-blend-lighten"
                  style={{ objectPosition: 'center bottom' }}
                />
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* --- BOTTOM SCROLL INDICATOR --- */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 group cursor-pointer"
        onClick={() => document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-[9px] font-mono tracking-[0.28em] text-slate-300/65 uppercase group-hover:text-pink-200 transition-colors">Scroll</span>
        
        {/* Futuristic Mouse Capsule */}
        <div className="w-[22px] h-[36px] rounded-full border border-white/20 flex justify-center p-[3px] relative bg-[#111a29]/70 backdrop-blur-sm group-hover:border-pink-200/60 transition-colors duration-300">
          <motion.div 
            className="w-1 h-2 rounded-full bg-pink-200"
            animate={{ 
              y: [0, 16, 0],
              opacity: [1, 0.4, 1]
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut"
            }}
          />
        </div>
        
        {/* Connecting line fading down */}
        <div className="w-[1px] h-6 bg-gradient-to-b from-pink-200/45 to-transparent"></div>
      </motion.div>
      
    </section>
  );
};

export default Hero;
