import React from 'react';
import { motion } from 'framer-motion';

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
          <h2 className="text-3xl md:text-4xl font-light text-white tracking-wide mb-3">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-rose-300">Featured</span>{' '}
            <span className="text-white">Projects</span>
          </h2>
          <div className="w-12 h-[1px] bg-pink-500/30 mx-auto mt-4"></div>
        </motion.div>

        <div className="min-h-[240px] rounded-2xl border border-dashed border-pink-500/20 bg-[#0d0617]/40" />
      </div>
    </section>
  );
};

export default Projects;
