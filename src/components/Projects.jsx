import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
const projects = [];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-100 via-pink-300 to-rose-300">Featured Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-rose-500 mx-auto rounded-full shadow-[0_0_12px_rgba(244,114,182,0.8)]"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden group flex flex-col h-full border border-pink-500/20 hover:border-pink-500/40 hover:shadow-[0_0_30px_rgba(244,114,182,0.2)] transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-pink-500/15 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-pink-300 transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-6 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className="text-xs font-mono text-pink-300 bg-pink-500/10 border border-pink-500/20 px-2.5 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-pink-500/15">
                  <a href={project.github} className="text-gray-400 hover:text-pink-300 flex items-center gap-2 text-sm font-medium transition-colors">
                    <Github size={18} /> Code
                  </a>
                  <a href={project.demo} className="text-gray-400 hover:text-pink-300 flex items-center gap-2 text-sm font-medium transition-colors">
                    <ExternalLink size={18} /> Live Demo
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
