import React from 'react';
import { motion } from 'framer-motion';

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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-100 via-pink-400 to-rose-300">About Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-rose-500 mx-auto rounded-full shadow-[0_0_10px_rgba(244,114,182,0.5)]"></div>
        </motion.div>

        {/* Content removed as requested, ready for new design */}
      </div>
    </section>
  );
};

export default About;
