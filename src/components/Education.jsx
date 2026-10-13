import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  const containerRef = useRef(null);
  const thirdDotRef = useRef(null);
  const lastDotRef = useRef(null);
  const [thirdDotLineHeight, setThirdDotLineHeight] = useState(0);
  const [lastDotLineHeight, setLastDotLineHeight] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  useEffect(() => {
    const updateLineHeight = () => {
      const container = containerRef.current;
      const thirdDot = thirdDotRef.current;
      const lastDot = lastDotRef.current;
      if (!container || !thirdDot || !lastDot) return;

      const containerTop = container.getBoundingClientRect().top;
      const thirdDotCenter = thirdDot.getBoundingClientRect().top + thirdDot.offsetHeight / 2;
      const lastDotCenter = lastDot.getBoundingClientRect().top + lastDot.offsetHeight / 2;
      setThirdDotLineHeight(Math.max(0, thirdDotCenter - containerTop - 50));
      setLastDotLineHeight(Math.max(0, lastDotCenter - containerTop - 50));
    };

    updateLineHeight();
    const observer = new window.ResizeObserver(updateLineHeight);
    if (containerRef.current) observer.observe(containerRef.current);
    window.addEventListener('resize', updateLineHeight);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateLineHeight);
    };
  }, []);

  const lineHeight = useTransform(scrollYProgress, [0, 0.7], [0, thirdDotLineHeight]);

  // Transforms for Step 1 - Minimal & Subtle
  const dot1Scale = useTransform(scrollYProgress, [0, 0.05], [1, 1.2]);
  const box1Scale = useTransform(scrollYProgress, [0, 0.05], [1, 1.01]);
  const box1Border = useTransform(scrollYProgress, [0, 0.05], ["rgba(255,255,255,0.06)", "rgba(244,114,182,0.35)"]);
  const box1Shadow = useTransform(scrollYProgress, [0, 0.05], ["0px 0px 0px rgba(0,0,0,0)", "0px 0px 20px rgba(244,114,182,0.08)"]);

  // Transforms for Step 2
  const dot2Opacity = useTransform(scrollYProgress, [0.2, 0.35], [0, 1]);
  const box2Scale = useTransform(scrollYProgress, [0.2, 0.35], [1, 1.01]);
  const box2Border = useTransform(scrollYProgress, [0.2, 0.35], ["rgba(255,255,255,0.06)", "rgba(244,114,182,0.35)"]);
  const box2Shadow = useTransform(scrollYProgress, [0.2, 0.35], ["0px 0px 0px rgba(0,0,0,0)", "0px 0px 20px rgba(244,114,182,0.08)"]);

  // Transforms for Step 3
  const dot3Scale = useTransform(scrollYProgress, [0.55, 0.7], [1, 1.2]);
  const box3Scale = useTransform(scrollYProgress, [0.55, 0.7], [1, 1.01]);
  const box3Border = useTransform(scrollYProgress, [0.55, 0.7], ["rgba(244,114,182,0.15)", "rgba(244,114,182,0.45)"]);
  const box3Shadow = useTransform(scrollYProgress, [0.55, 0.7], ["0px 0px 0px rgba(0,0,0,0)", "0px 0px 25px rgba(244,114,182,0.12)"]);

  // Transforms for Step 4
  const dot4Opacity = useTransform(scrollYProgress, [0.85, 1], [0, 1]);
  const box4Scale = useTransform(scrollYProgress, [0.85, 1], [1, 1.01]);
  const box4Border = useTransform(scrollYProgress, [0.85, 1], ["rgba(255,255,255,0.06)", "rgba(244,114,182,0.35)"]);
  const box4Shadow = useTransform(scrollYProgress, [0.85, 1], ["0px 0px 0px rgba(0,0,0,0)", "0px 0px 20px rgba(244,114,182,0.08)"]);

  return (
    <section id="education" className="py-24 relative z-10 font-sans">
      <div className="container mx-auto px-6 md:px-12">
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

        <div ref={containerRef} className="relative max-w-4xl mx-auto">
          {/* Subtle background line */}
          <div
            className="absolute left-1/2 top-[50px] w-[2px] -translate-x-1/2 bg-white/5 hidden md:block"
            style={{ height: lastDotLineHeight }}
          ></div>
          
          {/* Dynamic Glowy Line */}
          <motion.div 
            style={{ height: lineHeight }}
            className="absolute left-1/2 transform -translate-x-1/2 top-[50px] max-h-[calc(100%-100px)] w-[2px] bg-gradient-to-b from-pink-400 via-rose-500 to-transparent hidden md:block origin-top shadow-[0_0_20px_rgba(244,114,182,1)] z-0"
          ></motion.div>

          {/* Born */}
          <div className="relative flex flex-col md:flex-row justify-between w-full mb-16 items-start">
            <div className="md:w-5/12 md:pr-8 w-full text-left md:text-right mb-8 md:mb-0">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                style={{ scale: box1Scale, borderColor: box1Border, boxShadow: box1Shadow }}
                className="bg-[#0e0618]/80 backdrop-blur-sm border p-8 rounded-2xl inline-block w-full max-w-sm relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-400 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <p className="text-pink-400 font-mono text-sm tracking-widest mb-3">1st AUGUST 2005</p>
                <h3 className="text-2xl text-white font-medium mb-3">Born</h3>
                <p className="text-gray-400 font-mono text-sm">The beginning of the journey.</p>
              </motion.div>
            </div>
            <motion.div 
              style={{ x: "-50%", scale: dot1Scale }} 
              className="hidden md:block absolute left-1/2 top-[50px] w-3 h-3 bg-pink-400 rounded-full z-10 shadow-[0_0_12px_rgba(244,114,182,0.9)]"
            ></motion.div>
            <div className="hidden md:block w-5/12 pl-8"></div>
          </div>

          {/* Higher Secondary */}
          <div className="relative flex flex-col md:flex-row justify-between w-full mb-16 items-start">
            <div className="hidden md:block w-5/12 pr-8"></div>
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-[50px] w-3 h-3 bg-[#110619] border-[1.5px] border-pink-400 rounded-full z-10 overflow-hidden">
              <motion.div style={{ opacity: dot2Opacity }} className="w-full h-full bg-pink-400 shadow-[0_0_10px_rgba(244,114,182,0.9)]" />
            </div>
            <div className="md:w-5/12 md:pl-8 w-full">
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                style={{ scale: box2Scale, borderColor: box2Border, boxShadow: box2Shadow }}
                className="bg-[#0e0618]/80 backdrop-blur-sm border p-8 rounded-2xl inline-block w-full max-w-sm relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-400 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <p className="text-pink-400 font-mono text-sm tracking-widest mb-3">2010 - 2024</p>
                <h3 className="text-2xl text-white font-medium mb-3">Higher Secondary<br/>Education</h3>
                <p className="text-gray-400 font-mono text-sm">Gaighata High School</p>
              </motion.div>
            </div>
          </div>

          {/* B.Tech */}
          <div className="relative flex flex-col md:flex-row justify-between w-full mb-16 items-start">
            <div className="md:w-5/12 md:pr-8 w-full text-left md:text-right flex md:justify-end mb-8 md:mb-0">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                style={{ scale: box3Scale, borderColor: box3Border, boxShadow: box3Shadow }}
                className="bg-[#0e0618]/80 backdrop-blur-sm border p-8 rounded-2xl w-full max-w-md relative overflow-hidden group"
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

                <div className="w-full bg-white/5 border border-pink-500/20 h-1.5 rounded-full overflow-hidden relative">
                  <div className="bg-gradient-to-r from-pink-400 to-rose-400 w-[45%] h-full rounded-full shadow-[0_0_8px_rgba(244,114,182,0.4)]"></div>
                </div>
                <p className="md:text-right text-left text-[10px] font-mono mt-2 uppercase tracking-widest text-pink-300/70">IN PROGRESS</p>
              </motion.div>
            </div>
            <motion.div 
              ref={thirdDotRef}
              style={{ x: "-50%", scale: dot3Scale }} 
              className="hidden md:block absolute left-1/2 top-[50px] w-3 h-3 bg-pink-400 rounded-full z-10 shadow-[0_0_15px_rgba(244,114,182,1)]"
            ></motion.div>
            <div className="hidden md:block w-5/12 pl-8"></div>
          </div>

          {/* End of Journey */}
          <div className="relative flex flex-col md:flex-row justify-between w-full items-start">
            <div className="hidden md:block w-5/12 pr-8"></div>
            <div ref={lastDotRef} className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-[50px] w-3 h-3 bg-[#110619] border-[1.5px] border-pink-400/60 rounded-full z-10 overflow-hidden">
              <motion.div style={{ opacity: dot4Opacity }} className="w-full h-full bg-pink-400 shadow-[0_0_10px_rgba(244,114,182,0.8)]" />
            </div>
            <div className="md:w-5/12 md:pl-8 w-full">
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                style={{ scale: box4Scale, borderColor: box4Border, boxShadow: box4Shadow }}
                className="bg-[#0e0618]/80 backdrop-blur-sm border p-8 rounded-2xl inline-block w-full max-w-sm relative overflow-hidden group"
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
    </section>
  );
};

export default Education;
