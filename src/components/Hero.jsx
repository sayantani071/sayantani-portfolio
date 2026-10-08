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
    <section id="home" className="relative w-full h-screen min-h-[700px] bg-black overflow-hidden flex items-center pt-16">
      
      {/* --- BACKGROUND ELEMENTS --- */}
      {/* Subtle ambient glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/20 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-blue-800/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      {/* Futuristic Network Lines Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
           style={{ 
             backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
             backgroundSize: '100px 100px'
           }}>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 h-full flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
          
          {/* --- LEFT SIDE: TEXT CONTENT --- */}
          <div className="flex flex-col justify-center items-center text-center order-2 lg:order-1 mt-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <p className="text-gray-400 font-mono tracking-[0.3em] text-xs md:text-sm mb-4">
                HELLO <span className="text-blue-500">|</span> I AM
              </p>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight mb-4 whitespace-nowrap"
            >
              <span className="bg-gradient-to-r from-blue-400 via-blue-100 to-white bg-clip-text text-transparent">
                Sayantani Sinha
              </span>
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-10 md:h-12 flex justify-center items-center w-full mb-10"
            >
              <div className="text-xl md:text-2xl text-gray-300 font-light flex justify-center w-full">
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
                      <span className="text-blue-500 font-bold">&gt;</span>
                      <span>{roles[currentRoleIndex]}</span>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="flex flex-wrap justify-center items-center gap-4 md:gap-6"
            >
              <a href="#projects" className="group relative px-8 py-3.5 rounded-full overflow-hidden bg-blue-600 hover:bg-blue-500 transition-colors duration-300 shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]">
                <span className="relative z-10 text-xs md:text-sm font-semibold tracking-widest text-white">VIEW MY WORK</span>
              </a>
              
              <a href="#" className="group relative px-8 py-3.5 rounded-full overflow-hidden bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="absolute inset-0 shadow-[0_0_20px_rgba(59,130,246,0)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-shadow duration-300 rounded-full"></div>
                <span className="relative z-10 text-xs md:text-sm font-semibold tracking-widest text-white group-hover:text-blue-100 transition-colors">DOWNLOAD CV</span>
              </a>

              <a href="#contact" className="group relative px-8 py-3.5 rounded-full overflow-hidden bg-blue-600 hover:bg-blue-500 transition-colors duration-300 shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]">
                <span className="relative z-10 text-xs md:text-sm font-semibold tracking-widest text-white">LET&apos;S CONNECT</span>
              </a>
            </motion.div>
          </div>

          {/* --- RIGHT SIDE: PORTRAIT IMAGE --- */}
          <div className="relative w-full h-[350px] sm:h-[450px] lg:h-[600px] flex items-center justify-center order-1 lg:order-2 mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
              className="relative w-full h-full flex justify-center items-center"
            >
              {/* Back subtle glow */}
              <div className="absolute w-[60%] h-[70%] bg-blue-500/15 blur-[80px] rounded-[100%] animate-pulse" style={{ animationDuration: '4s' }}></div>
              
              {/* Image Container with fading edges */}
              <div 
                className="absolute w-full h-full flex justify-center items-end pb-0 lg:pb-10"
                style={{
                  WebkitMaskImage: 'radial-gradient(circle at 50% 50%, black 40%, transparent 80%)',
                  maskImage: 'radial-gradient(circle at 50% 50%, black 40%, transparent 80%)',
                }}
              >
                <img 
                  src="/profile.jpg" 
                  alt="Sayantani Sinha" 
                  className="object-contain w-[70%] md:w-[65%] lg:w-[80%] h-[90%] lg:h-[95%] grayscale-[0.6] contrast-125 brightness-110 sepia-[0.1] mix-blend-lighten"
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <span className="text-[10px] tracking-[0.3em] text-gray-500 uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-white/10 relative overflow-hidden">
          <motion.div 
            className="w-full h-1/2 bg-blue-500 absolute top-0"
            animate={{ 
              y: [0, 48],
              opacity: [0, 1, 0]
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "linear"
            }}
          />
        </div>
      </motion.div>
      
    </section>
  );
};

export default Hero;
