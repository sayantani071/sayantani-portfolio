import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 75%', 'end 65%'],
  });

  // Dynamic Scroll Progress Line Height
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  // Scroll Transforms for Steps (Subtle scale & glow effects)
  const dot1Scale = useTransform(scrollYProgress, [0, 0.15], [1, 1.25]);
  const box1Scale = useTransform(scrollYProgress, [0, 0.15], [1, 1.01]);
  const box1Border = useTransform(scrollYProgress, [0, 0.15], ['rgba(255,255,255,0.08)', 'rgba(192,132,252,0.45)']);
  const box1Shadow = useTransform(scrollYProgress, [0, 0.15], ['0px 0px 0px rgba(0,0,0,0)', '0px 0px 25px rgba(192,132,252,0.15)']);

  const dot2Opacity = useTransform(scrollYProgress, [0.2, 0.4], [0.3, 1]);
  const box2Scale = useTransform(scrollYProgress, [0.2, 0.4], [1, 1.01]);
  const box2Border = useTransform(scrollYProgress, [0.2, 0.4], ['rgba(255,255,255,0.08)', 'rgba(0,210,255,0.45)']);
  const box2Shadow = useTransform(scrollYProgress, [0.2, 0.4], ['0px 0px 0px rgba(0,0,0,0)', '0px 0px 25px rgba(0,210,255,0.15)']);

  const dot3Scale = useTransform(scrollYProgress, [0.5, 0.75], [1, 1.3]);
  const box3Scale = useTransform(scrollYProgress, [0.5, 0.75], [1, 1.01]);
  const box3Border = useTransform(scrollYProgress, [0.5, 0.75], ['rgba(0,210,255,0.2)', 'rgba(16,185,129,0.5)']);
  const box3Shadow = useTransform(scrollYProgress, [0.5, 0.75], ['0px 0px 0px rgba(0,0,0,0)', '0px 0px 30px rgba(0,210,255,0.18)']);

  const box4Scale = useTransform(scrollYProgress, [0.8, 1], [1, 1.01]);
  const box4Border = useTransform(scrollYProgress, [0.8, 1], ['rgba(255,255,255,0.08)', 'rgba(16,185,129,0.45)']);
  const box4Shadow = useTransform(scrollYProgress, [0.8, 1], ['0px 0px 0px rgba(0,0,0,0)', '0px 0px 25px rgba(16,185,129,0.15)']);

  return (
    <section id="education" className="py-24 relative z-10 font-sans">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-light text-white tracking-wide">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-rose-300 to-pink-200">Education</span>
          </h2>
          <div className="w-12 h-[1px] bg-pink-500/30 mx-auto mt-4"></div>
        </motion.div>

        <div ref={containerRef} className="relative max-w-5xl mx-auto">
          {/* Desktop Central Spine Track */}
          <div className="hidden md:block absolute left-1/2 top-10 bottom-10 w-[3px] -translate-x-1/2 bg-white/10 rounded-full overflow-hidden z-0">
            {/* Dynamic Line: Lavender -> Neon Blue -> Touch of Green */}
            <motion.div 
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-[#c084fc] via-[#818cf8] via-[#00d2ff] to-[#10b981] origin-top shadow-[0_0_20px_rgba(0,210,255,0.9),0_0_30px_rgba(192,132,252,0.8)] rounded-full"
            />
          </div>

          {/* Mobile Left Spine Track */}
          <div className="md:hidden absolute left-6 top-10 bottom-10 w-[3px] -translate-x-1/2 bg-white/10 rounded-full overflow-hidden z-0">
            {/* Dynamic Line: Lavender -> Neon Blue -> Touch of Green */}
            <motion.div 
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-[#c084fc] via-[#818cf8] via-[#00d2ff] to-[#10b981] origin-top shadow-[0_0_15px_rgba(0,210,255,0.9),0_0_25px_rgba(192,132,252,0.8)] rounded-full"
            />
          </div>

          {/* 1. Born */}
          <div className="relative flex flex-col md:flex-row justify-between w-full mb-16 md:mb-20 items-start group">
            {/* Left Box (Desktop) */}
            <div className="w-full md:w-1/2 md:pr-10 flex md:justify-end text-left md:text-right pl-12 sm:pl-14 md:pl-0">
              <div className="relative w-full max-w-md">
                {/* Horizontal Connector to Center Timeline (Desktop) */}
                <div className="hidden md:block absolute -right-10 top-10 w-10 h-[2px] bg-gradient-to-r from-purple-500/20 via-[#c084fc]/50 to-[#c084fc] group-hover:to-[#d8b4fe] transition-all duration-300 z-0" />

                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  whileHover={{ y: -4, scale: 1.015 }}
                  transition={{ duration: 0.3 }}
                  style={{ scale: box1Scale, borderColor: box1Border, boxShadow: box1Shadow }}
                  className="bg-[#0e0618]/80 backdrop-blur-sm border p-6 sm:p-8 rounded-2xl w-full relative overflow-hidden group transition-all duration-300"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-400 to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <p className="text-pink-400 font-mono text-sm tracking-widest mb-3">1st AUGUST 2005</p>
                  <h3 className="text-2xl text-white font-medium mb-3">Born</h3>
                  <p className="text-gray-400 font-mono text-sm">The beginning of the journey.</p>
                </motion.div>
              </div>
            </div>

            {/* Mobile Node & Connector */}
            <div className="md:hidden absolute left-6 top-10 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-[#c084fc] rounded-full z-10 shadow-[0_0_14px_rgba(192,132,252,0.95)]" />
            <div className="md:hidden absolute left-6 top-10 w-6 sm:w-8 h-[2px] bg-gradient-to-r from-[#c084fc] to-[#c084fc]/30 z-0" />

            {/* Desktop Center Dot (Lavender) */}
            <motion.div 
              style={{ scale: dot1Scale }} 
              className="hidden md:block absolute left-1/2 top-10 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-[#c084fc] rounded-full z-10 shadow-[0_0_16px_rgba(192,132,252,1)]"
            ></motion.div>

            {/* Right Spacer (Desktop) */}
            <div className="hidden md:block md:w-1/2 md:pl-10"></div>
          </div>

          {/* 2. Higher Secondary */}
          <div className="relative flex flex-col md:flex-row justify-between w-full mb-16 md:mb-20 items-start group">
            {/* Left Spacer (Desktop) */}
            <div className="hidden md:block md:w-1/2 md:pr-10"></div>

            {/* Mobile Node & Connector */}
            <div className="md:hidden absolute left-6 top-10 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-[#110619] border-[1.5px] border-[#00d2ff] rounded-full z-10 overflow-hidden">
              <motion.div style={{ opacity: dot2Opacity }} className="w-full h-full bg-[#00d2ff] shadow-[0_0_12px_rgba(0,210,255,0.95)]" />
            </div>
            <div className="md:hidden absolute left-6 top-10 w-6 sm:w-8 h-[2px] bg-gradient-to-r from-[#00d2ff] to-[#00d2ff]/30 z-0" />

            {/* Desktop Center Dot (Neon Blue) */}
            <div className="hidden md:block absolute left-1/2 top-10 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-[#110619] border-[1.5px] border-[#00d2ff] rounded-full z-10 overflow-hidden">
              <motion.div style={{ opacity: dot2Opacity }} className="w-full h-full bg-[#00d2ff] shadow-[0_0_14px_rgba(0,210,255,1)]" />
            </div>

            {/* Right Box (Desktop) */}
            <div className="w-full md:w-1/2 md:pl-10 flex md:justify-start pl-12 sm:pl-14 md:pl-0">
              <div className="relative w-full max-w-md">
                {/* Horizontal Connector to Center Timeline (Desktop) */}
                <div className="hidden md:block absolute -left-10 top-10 w-10 h-[2px] bg-gradient-to-l from-cyan-500/20 via-[#00d2ff]/50 to-[#00d2ff] group-hover:to-[#38bdf8] transition-all duration-300 z-0" />

                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  whileHover={{ y: -4, scale: 1.015 }}
                  transition={{ duration: 0.3 }}
                  style={{ scale: box2Scale, borderColor: box2Border, boxShadow: box2Shadow }}
                  className="bg-[#0e0618]/80 backdrop-blur-sm border p-6 sm:p-8 rounded-2xl w-full relative overflow-hidden group transition-all duration-300"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-400 to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <p className="text-pink-400 font-mono text-sm tracking-widest mb-3">2010 - 2024</p>
                  <h3 className="text-2xl text-white font-medium mb-3">Higher Secondary<br/>Education</h3>
                  <p className="text-gray-400 font-mono text-sm">Gaighata High School</p>
                </motion.div>
              </div>
            </div>
          </div>

          {/* 3. B.Tech */}
          <div className="relative flex flex-col md:flex-row justify-between w-full mb-16 md:mb-20 items-start group">
            {/* Left Box (Desktop) */}
            <div className="w-full md:w-1/2 md:pr-10 flex md:justify-end text-left md:text-right pl-12 sm:pl-14 md:pl-0">
              <div className="relative w-full max-w-md">
                {/* Horizontal Connector to Center Timeline (Desktop) */}
                <div className="hidden md:block absolute -right-10 top-10 w-10 h-[2px] bg-gradient-to-r from-blue-500/20 via-[#00d2ff]/50 to-[#10b981] group-hover:to-[#34d399] transition-all duration-300 z-0" />

                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  whileHover={{ y: -4, scale: 1.015 }}
                  transition={{ duration: 0.3 }}
                  style={{ scale: box3Scale, borderColor: box3Border, boxShadow: box3Shadow }}
                  className="bg-[#0e0618]/80 backdrop-blur-sm border p-6 sm:p-8 rounded-2xl w-full relative overflow-hidden group transition-all duration-300"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-rose-400"></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="flex md:justify-end mb-4">
                    <GraduationCap className="text-pink-400 w-8 h-8" />
                  </div>
                  
                  <p className="text-pink-400 font-mono text-sm tracking-widest mb-3 uppercase">2025 - PRESENT</p>
                  <h3 className="text-2xl text-white font-medium mb-2">B.Tech CSE (AI & ML)</h3>
                  <p className="text-gray-200 font-mono text-sm mb-6">JIS COLLEGE OF ENGINEERING</p>
                  
                  <p className="text-gray-400 font-mono text-xs leading-relaxed mb-8 md:text-right text-left">
                    Deep diving into Artificial Intelligence, Machine Learning, and DBMS. 
                    Active participant in hackathons.
                  </p>

                  <div className="flex md:justify-end mb-6">
                    <span className="flex items-center gap-2 bg-gradient-to-r from-pink-500/15 via-rose-500/15 to-transparent border border-pink-400/30 text-pink-300 px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-mono tracking-wider shadow-[0_0_15px_rgba(244,114,182,0.2)]">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-400 shadow-[0_0_8px_#f472b6]"></span>
                      </span>
                      CURRENTLY STUDYING
                    </span>
                  </div>

                  <div
                    className="relative h-1.5 w-full overflow-hidden rounded-full border border-pink-500/20 bg-white/5"
                    role="progressbar"
                    aria-label="B.Tech program progress"
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={45}
                  >
                    <motion.div
                      initial={{ width: '0%' }}
                      whileInView={{ width: '45%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                      className="relative h-full overflow-hidden rounded-full bg-gradient-to-r from-pink-400 to-rose-400 shadow-[0_0_8px_rgba(244,114,182,0.4)]"
                    >
                      <motion.div
                        aria-hidden="true"
                        className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-white/45 to-transparent"
                        animate={{ x: ['-100%', '300%'] }}
                        transition={{ duration: 1.4, ease: 'easeInOut', repeat: Infinity, repeatDelay: 0.6 }}
                      />
                    </motion.div>
                  </div>
                  <p className="md:text-right text-left text-[10px] font-mono mt-2 uppercase tracking-widest text-pink-300/70">IN PROGRESS</p>
                </motion.div>
              </div>
            </div>

            {/* Mobile Node & Connector */}
            <div className="md:hidden absolute left-6 top-10 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-gradient-to-br from-[#00d2ff] to-[#10b981] rounded-full z-10 shadow-[0_0_16px_rgba(0,210,255,1)]" />
            <div className="md:hidden absolute left-6 top-10 w-6 sm:w-8 h-[2px] bg-gradient-to-r from-[#00d2ff] to-[#10b981]/40 z-0" />

            {/* Desktop Center Dot (Cyan / Green blend) */}
            <motion.div 
              style={{ scale: dot3Scale }} 
              className="hidden md:block absolute left-1/2 top-10 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-gradient-to-br from-[#00d2ff] to-[#10b981] rounded-full z-10 shadow-[0_0_18px_rgba(0,210,255,1)]"
            ></motion.div>

            {/* Right Spacer (Desktop) */}
            <div className="hidden md:block md:w-1/2 md:pl-10"></div>
          </div>

          {/* 4. End of Journey */}
          <div className="relative flex flex-col md:flex-row justify-between w-full items-start group">
            {/* Left Spacer (Desktop) */}
            <div className="hidden md:block md:w-1/2 md:pr-10"></div>

            {/* Mobile Node & Connector */}
            <div className="md:hidden absolute left-6 top-10 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-[#110619] border-[1.5px] border-[#10b981] rounded-full z-10 overflow-hidden">
              <div className="w-full h-full bg-[#10b981] shadow-[0_0_12px_rgba(16,185,129,0.9)]" />
            </div>
            <div className="md:hidden absolute left-6 top-10 w-6 sm:w-8 h-[2px] bg-gradient-to-r from-[#10b981] to-[#10b981]/30 z-0" />

            {/* Desktop Center Dot (Neon Green) */}
            <div className="hidden md:block absolute left-1/2 top-10 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-[#110619] border-[1.5px] border-[#10b981] rounded-full z-10 overflow-hidden shadow-[0_0_12px_rgba(16,185,129,0.7)]">
              <div className="w-full h-full bg-[#10b981] shadow-[0_0_10px_rgba(16,185,129,0.9)]" />
            </div>

            {/* Right Box (Desktop) */}
            <div className="w-full md:w-1/2 md:pl-10 flex md:justify-start pl-12 sm:pl-14 md:pl-0">
              <div className="relative w-full max-w-md">
                {/* Horizontal Connector to Center Timeline (Desktop) */}
                <div className="hidden md:block absolute -left-10 top-10 w-10 h-[2px] bg-gradient-to-l from-emerald-500/20 via-[#10b981]/50 to-[#10b981] group-hover:to-[#34d399] transition-all duration-300 z-0" />

                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  whileHover={{ y: -4, scale: 1.015 }}
                  transition={{ duration: 0.3 }}
                  style={{ scale: box4Scale, borderColor: box4Border, boxShadow: box4Shadow }}
                  className="bg-[#0e0618]/80 backdrop-blur-sm border p-6 sm:p-8 rounded-2xl w-full relative overflow-hidden group transition-all duration-300"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-400 to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <p className="text-pink-400 font-mono text-sm tracking-widest mb-3">TBD</p>
                  <h3 className="text-2xl text-white font-medium mb-3">End of Journey</h3>
                  <p className="text-gray-400 font-mono text-sm leading-relaxed">To be continued — hopefully after a very long changelog.</p>
                </motion.div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
