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
    <section id="home" className="relative w-full h-screen min-h-[700px] bg-transparent flex items-center pt-16">
      
      {/* --- BACKGROUND ELEMENTS --- */}
      {/* Soft, minimal ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-[35%] h-[35%] bg-pink-950/15 rounded-full blur-[140px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 h-full flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
          
          {/* --- LEFT SIDE: TEXT CONTENT --- */}
          <div className="flex flex-col justify-center items-center text-center order-2 lg:order-1 mt-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center justify-center gap-3 mb-4"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-400"></span>
              </span>
              <p className="text-pink-200/80 font-mono tracking-[0.35em] text-xs md:text-sm font-semibold uppercase">
                HELLO <span className="text-pink-400 font-bold mx-1">|</span> I AM
              </p>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 25, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight mb-4 whitespace-nowrap"
            >
              <span className="bg-gradient-to-r from-pink-100 via-pink-300 to-rose-200 bg-[length:200%_auto] animate-text-flow bg-clip-text text-transparent">
                Sayantani Sinha
              </span>
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
              className="h-10 md:h-12 flex justify-center items-center w-full mb-10"
            >
              <div className="text-lg md:text-xl text-gray-300 font-light flex justify-center w-full">
                <div className="relative overflow-hidden w-full max-w-[400px] h-[40px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentRoleIndex}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute left-0 top-0 w-full flex justify-center items-center gap-2"
                    >
                      <span className="text-pink-400 font-bold">&gt;</span>
                      <span className="text-pink-100/90 font-mono text-sm md:text-base tracking-wide">{roles[currentRoleIndex]}</span>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            {/* Minimal Two Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center justify-center gap-5"
            >
              <a 
                href="#contact" 
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-pink-500/90 via-rose-500/90 to-pink-600/90 hover:from-pink-400 hover:to-rose-400 text-xs font-semibold tracking-[0.25em] text-white uppercase transition-all duration-300 shadow-[0_0_15px_rgba(244,114,182,0.25)] hover:shadow-[0_0_25px_rgba(244,114,182,0.5)] transform hover:-translate-y-0.5"
              >
                LET&apos;S CONNECT
              </a>
              
              <a 
                href="#education" 
                className="px-8 py-3.5 rounded-full border border-pink-400/30 hover:border-pink-300/60 bg-pink-500/[0.03] hover:bg-pink-500/[0.08] text-xs font-semibold tracking-[0.25em] text-pink-100 uppercase transition-all duration-300 transform hover:-translate-y-0.5"
              >
                MY JOURNEY
              </a>
            </motion.div>
          </div>

          {/* --- RIGHT SIDE: PORTRAIT IMAGE --- */}
          <div className="relative w-full h-[350px] sm:h-[450px] lg:h-[600px] flex items-center justify-center order-1 lg:order-2 mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
              className="relative w-full h-full flex justify-center items-center"
            >
              {/* Back soft glow */}
              <div className="absolute w-[60%] h-[70%] bg-pink-500/10 blur-[80px] rounded-[100%] pointer-events-none"></div>
              
              {/* Image Container with fading edges */}
              <div 
                className="absolute w-full h-full flex justify-center items-end pb-0 lg:pb-10"
                style={{
                  WebkitMaskImage: 'radial-gradient(circle at 50% 50%, black 40%, transparent 80%)',
                  maskImage: 'radial-gradient(circle at 50% 50%, black 40%, transparent 80%)',
                }}
              >
                <img 
                  src="/profile.png" 
                  alt="Sayantani Sinha" 
                  className="object-contain w-[70%] md:w-[65%] lg:w-[80%] h-[90%] lg:h-[95%] grayscale-[0.4] contrast-125 brightness-110 sepia-[0.1] mix-blend-lighten"
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
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 group cursor-pointer"
        onClick={() => document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-[9px] font-mono tracking-[0.5em] text-pink-400/80 uppercase group-hover:text-pink-300 transition-colors">Scroll</span>
        
        {/* Futuristic Mouse Capsule */}
        <div className="w-[22px] h-[36px] rounded-full border border-pink-500/30 flex justify-center p-[3px] relative shadow-[0_0_15px_rgba(244,114,182,0.2)] bg-[#13071b]/60 backdrop-blur-sm group-hover:border-pink-400/60 transition-all duration-300">
          <motion.div 
            className="w-1 h-2 rounded-full bg-pink-400 shadow-[0_0_8px_rgba(244,114,182,1)]"
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
        <div className="w-[1px] h-8 bg-gradient-to-b from-pink-500/50 to-transparent"></div>
      </motion.div>
      
    </section>
  );
};

export default Hero;
