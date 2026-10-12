import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Sparkles } from 'lucide-react';

const projects = [
  {
    title: "AI Image Recognition & Object Detection",
    description: "Deep learning computer vision pipeline utilizing convolutional networks and transfer learning to detect, localize, and classify multi-class objects in real-time visual streams with high precision.",
    image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?q=80&w=800&auto=format&fit=crop",
    tags: ["Python", "PyTorch", "OpenCV", "FastAPI", "Computer Vision"],
    github: "https://github.com/sayantani071",
    demo: "#",
  },
  {
    title: "Predictive Analytics & Intelligence Platform",
    description: "Interactive machine learning platform analyzing complex multivariate time-series datasets. Features automated model evaluation, anomaly detection, and dynamic metrics visualization.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    tags: ["Python", "Scikit-Learn", "Pandas", "React", "Tailwind CSS"],
    github: "https://github.com/sayantani071",
    demo: "#",
  },
  {
    title: "Autonomous Agent Navigation & Pathfinding",
    description: "Reinforcement learning agent trained for intelligent spatial navigation, obstacle avoidance, and optimal path traversal across simulated dynamic grid environments.",
    image: "https://images.unsplash.com/photo-1579822981589-d0e1b6a386ad?q=80&w=800&auto=format&fit=crop",
    tags: ["Python", "C++", "Q-Learning", "Algorithms", "Simulation"],
    github: "https://github.com/sayantani071",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-28 relative z-10 font-sans">
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
              SHOWCASE OF WORK
            </p>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-rose-300 to-pink-200">Projects</span>
          </h2>
          <div className="w-20 h-px bg-gradient-to-r from-pink-300/60 to-transparent mt-4"></div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="border border-white/10 bg-white/[0.02] hover:border-pink-300/35 transition-all duration-300 flex flex-col h-full group"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden border-b border-white/10 bg-black/40">
                <div className="absolute inset-0 bg-pink-900/10 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-85 group-hover:opacity-100"
                />
                <div className="absolute top-3 right-3 z-20">
                  <span className="p-1.5 border border-white/10 bg-black/70 text-pink-300 flex items-center justify-center">
                    <Sparkles size={13} />
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-grow">
                <h3 className="font-serif text-xl sm:text-2xl font-medium text-white mb-3 group-hover:text-pink-200 transition-colors leading-snug">
                  {project.title}
                </h3>
                
                <p className="text-slate-300/75 text-xs sm:text-sm font-light leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag, tagIdx) => (
                    <span 
                      key={tagIdx} 
                      className="px-2 py-0.5 text-[10px] font-mono border border-pink-300/20 bg-pink-300/[0.06] text-pink-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Boxy Action Buttons */}
                <div className="flex items-center gap-3 pt-5 border-t border-white/10 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-white/15 hover:border-pink-300/50 bg-white/[0.02] hover:bg-white/[0.06] text-slate-200 hover:text-white flex items-center gap-2 text-[11px] font-mono tracking-wider uppercase transition-colors"
                  >
                    <Github size={14} className="text-pink-300" />
                    <span>Code</span>
                  </a>

                  <a
                    href={project.demo}
                    className="px-4 py-2 border border-pink-300/40 hover:border-pink-300/70 bg-pink-300/10 hover:bg-pink-300/20 text-pink-100 flex items-center gap-2 text-[11px] font-mono tracking-wider uppercase transition-colors"
                  >
                    <ExternalLink size={14} className="text-pink-200" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
