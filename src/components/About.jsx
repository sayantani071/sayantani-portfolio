import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Code, Cpu } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">About Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 rounded-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
            <h3 className="text-2xl font-bold mb-4 text-white">Hello, I&apos;m <span className="text-primary">Sayantani</span></h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              I am a dedicated B.Tech student specializing in Computer Science and Engineering with a focus on Artificial Intelligence and Machine Learning. My journey in tech is driven by an insatiable curiosity to understand how intelligent systems can solve complex real-world problems.
            </p>
            <p className="text-gray-400 leading-relaxed">
              When I&apos;m not training models or debugging code, you can find me participating in hackathons, contributing to open-source projects, and constantly learning new frameworks to stay at the cutting edge of technology.
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                icon: <Cpu className="text-secondary" size={24} />,
                title: "AI & ML Enthusiast",
                desc: "Passionate about deep learning, neural networks, and creating intelligent algorithms."
              },
              {
                icon: <Code className="text-primary" size={24} />,
                title: "Software Engineering",
                desc: "Strong foundation in C, C++, and Python for building scalable software."
              },
              {
                icon: <BookOpen className="text-accent" size={24} />,
                title: "Continuous Learner",
                desc: "Always exploring new technologies, participating in tech communities and hackathons."
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex gap-4 items-start p-6 rounded-2xl glass hover:bg-white/5 transition-colors border border-white/5"
              >
                <div className="p-3 rounded-lg bg-white/5">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-200 mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
