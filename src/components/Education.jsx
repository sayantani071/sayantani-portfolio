import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="education" className="py-24 relative z-10 font-sans">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-medium text-white tracking-wide">
            Education
          </h2>
          <div className="w-24 h-[1px] bg-white/20 mt-6"></div>
        </motion.div>

        <div ref={containerRef} className="relative max-w-4xl mx-auto">
          {/* Subtle background line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-white/5 hidden md:block"></div>
          
          {/* Dynamic Glowy Line */}
          <motion.div 
            style={{ height: lineHeight }}
            className="absolute left-1/2 transform -translate-x-1/2 w-[2px] bg-gradient-to-b from-blue-400 via-blue-600 to-transparent hidden md:block origin-top shadow-[0_0_20px_rgba(59,130,246,1)] z-0"
          ></motion.div>

          {/* Born */}
          <div className="relative flex flex-col md:flex-row justify-between items-center w-full mb-16">
            <div className="md:w-5/12 md:pr-8 w-full text-left md:text-right mb-8 md:mb-0">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-[#111315]/80 backdrop-blur-sm border border-white/5 p-8 rounded-2xl inline-block w-full max-w-sm"
              >
                <p className="text-blue-500 font-mono text-sm tracking-widest mb-3 uppercase">1st August 2005</p>
                <h3 className="text-2xl text-white font-medium mb-3">Born</h3>
                <p className="text-gray-400 font-mono text-sm">The beginning of the journey.</p>
              </motion.div>
            </div>
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full z-10 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
            <div className="hidden md:block w-5/12 pl-8"></div>
          </div>

          {/* Higher Secondary */}
          <div className="relative flex flex-col md:flex-row justify-between items-center w-full mb-16">
            <div className="hidden md:block w-5/12 pr-8"></div>
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#111315] border-2 border-blue-500 rounded-full z-10"></div>
            <div className="md:w-5/12 md:pl-8 w-full">
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-[#111315]/80 backdrop-blur-sm border border-white/5 p-8 rounded-2xl inline-block w-full max-w-sm"
              >
                <p className="text-blue-500 font-mono text-sm tracking-widest mb-3 uppercase">2010 - 2024</p>
                <h3 className="text-2xl text-white font-medium mb-3">Higher Secondary<br/>Education</h3>
                <p className="text-gray-400 font-mono text-sm">Gaighata High School</p>
              </motion.div>
            </div>
          </div>

          {/* B.Tech */}
          <div className="relative flex flex-col md:flex-row justify-between items-center w-full mb-16">
            <div className="md:w-5/12 md:pr-8 w-full text-left md:text-right flex md:justify-end mb-8 md:mb-0">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-[#0a0f1a]/80 backdrop-blur-sm border border-blue-500/30 p-8 rounded-2xl w-full max-w-md relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-400"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="flex md:justify-end mb-4">
                  <GraduationCap className="text-blue-500 w-8 h-8" />
                </div>
                
                <p className="text-blue-500 font-mono text-sm tracking-widest mb-3 uppercase">2025 - PRESENT</p>
                <h3 className="text-2xl text-white font-medium mb-2">B.Tech CSE (AI & ML)</h3>
                <p className="text-gray-300 font-mono text-sm mb-6">JIS COLLEGE OF ENGINEERING</p>
                
                <p className="text-gray-400 font-mono text-xs leading-relaxed mb-8 md:text-right text-left">
                  Deep diving into Artificial Intelligence, Machine Learning, and DBMS. 
                  Active participant in hackathons.
                </p>

                <div className="flex md:justify-end mb-6">
                  <span className="flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-blue-400 px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-mono tracking-wider">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
                    </span>
                    CURRENTLY STUDYING
                  </span>
                </div>

                <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden relative">
                  <motion.div 
                    initial={{ x: "-100%" }}
                    animate={{ x: "250%" }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                    className="absolute top-0 left-0 h-full w-[40%] bg-gradient-to-r from-transparent via-blue-500 to-transparent shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                  ></motion.div>
                </div>
                <p className="md:text-right text-left text-[10px] text-gray-500 font-mono mt-2 uppercase tracking-widest">IN PROGRESS</p>
              </motion.div>
            </div>
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full z-10 shadow-[0_0_15px_rgba(59,130,246,1)]"></div>
            <div className="hidden md:block w-5/12 pl-8"></div>
          </div>

          {/* End of Journey */}
          <div className="relative flex flex-col md:flex-row justify-between items-center w-full">
            <div className="hidden md:block w-5/12 pr-8"></div>
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-transparent border border-gray-600 rounded-full z-10"></div>
            <div className="md:w-5/12 md:pl-8 w-full">
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-[#111315]/80 backdrop-blur-sm border border-white/5 p-8 rounded-2xl inline-block w-full max-w-sm"
              >
                <p className="text-blue-500 font-mono text-sm tracking-widest mb-3 uppercase">TBD</p>
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
