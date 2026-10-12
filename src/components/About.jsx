import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Code2, Sparkles, MapPin, GraduationCap, Terminal } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-28 relative z-10 font-sans">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-pink-400"></span>
            <p className="text-slate-400 font-mono tracking-[0.2em] text-[11px] md:text-xs uppercase font-medium">
              GET TO KNOW ME
            </p>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-rose-300 to-pink-200">Me</span>
          </h2>
          <div className="w-20 h-px bg-gradient-to-r from-pink-300/60 to-transparent mt-4"></div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Main Bio Card */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 p-8 md:p-10 border border-white/10 bg-white/[0.02] backdrop-blur-md relative overflow-hidden"
          >
            <div className="flex items-center gap-2 mb-6">
              <Terminal className="text-pink-300 w-4 h-4" />
              <span className="text-xs font-mono tracking-widest text-pink-300/90 uppercase">
                BIO // SAYANTANI SINHA
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl text-white font-medium mb-6 font-serif leading-snug">
              Passionate about engineering intelligent software and deep learning models.
            </h3>

            <p className="text-slate-300/80 leading-relaxed font-light mb-5 text-sm sm:text-base">
              I am a dedicated Computer Science student specializing in <strong className="text-white font-medium">Artificial Intelligence &amp; Machine Learning</strong> at JIS College of Engineering. Driven by curiosity, I focus on how intelligent algorithms and modern software architectures can be engineered into real-world applications.
            </p>

            <p className="text-slate-300/80 leading-relaxed font-light mb-8 text-sm sm:text-base">
              My technical interests span neural network design, computer vision, data structures, and responsive full-stack software development. I regularly experiment with new frameworks, contribute to projects, and compete in hackathons to continuously sharpen my problem-solving skills.
            </p>

            {/* Quick Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-white/10">
              <div className="p-3.5 border border-white/10 bg-white/[0.01]">
                <div className="flex items-center gap-2 text-pink-300 text-xs mb-1">
                  <MapPin size={13} />
                  <span className="font-mono uppercase tracking-wider text-[10px]">Location</span>
                </div>
                <p className="text-xs font-medium text-slate-200">Kolkata, India</p>
              </div>

              <div className="p-3.5 border border-white/10 bg-white/[0.01]">
                <div className="flex items-center gap-2 text-pink-300 text-xs mb-1">
                  <GraduationCap size={13} />
                  <span className="font-mono uppercase tracking-wider text-[10px]">Degree</span>
                </div>
                <p className="text-xs font-medium text-slate-200">B.Tech CSE (AI &amp; ML)</p>
              </div>

              <div className="p-3.5 border border-white/10 bg-white/[0.01]">
                <div className="flex items-center gap-2 text-pink-300 text-xs mb-1">
                  <Sparkles size={13} />
                  <span className="font-mono uppercase tracking-wider text-[10px]">Interests</span>
                </div>
                <p className="text-xs font-medium text-slate-200">AI / ML &amp; Web Dev</p>
              </div>
            </div>
          </motion.div>

          {/* Core Strengths Stack */}
          <div className="lg:col-span-5 space-y-4">
            {[
              {
                icon: <Cpu className="text-pink-300 w-5 h-5" />,
                title: "AI & Machine Learning",
                desc: "Designing neural networks, data preprocessing pipelines, and intelligent computer vision models with Python, PyTorch, and TensorFlow."
              },
              {
                icon: <Code2 className="text-pink-300 w-5 h-5" />,
                title: "Software & Web Engineering",
                desc: "Building clean, performant user interfaces and scalable full-stack applications with React, modern JavaScript, and Tailwind CSS."
              },
              {
                icon: <Terminal className="text-pink-300 w-5 h-5" />,
                title: "Algorithms & Problem Solving",
                desc: "Strong foundational problem solving in C/C++ and Python, focusing on optimal data structures, time complexity, and clean code."
              }
            ].map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="p-6 border border-white/10 bg-white/[0.02] hover:border-pink-300/35 hover:bg-white/[0.04] transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="p-2 border border-pink-300/30 bg-pink-300/10">
                    {pillar.icon}
                  </div>
                  <h4 className="text-base font-medium text-white tracking-wide">
                    {pillar.title}
                  </h4>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed font-light pl-11">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
