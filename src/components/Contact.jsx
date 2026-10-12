import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative z-10 flex flex-col items-center justify-center text-center">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-medium mb-6 text-white font-sans tracking-wide">
            Get In Touch
          </h2>
          
          <p className="mt-4 text-gray-400 max-w-xl mx-auto font-light text-lg mb-10 leading-relaxed">
            I&apos;m currently open for new opportunities. Whether you have a question or
            just want to say hi, I&apos;ll try my best to get back to you!
          </p>

          <a 
            href="mailto:sayantani@example.com" 
            className="group relative inline-flex items-center justify-center px-10 py-4 rounded-none overflow-hidden transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.35)] hover:shadow-[0_0_35px_rgba(59,130,246,0.65)] hover:-translate-y-1 active:translate-y-0 text-sm font-semibold tracking-widest text-white uppercase mb-12"
            style={{
              clipPath: 'polygon(12px 0%, 100% 0%, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0% 100%, 0% 12px)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 opacity-95 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10">Say Hello</span>
          </a>

          <div className="flex items-center justify-center gap-6 mt-4">
            <a href="https://github.com/sayantani071" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/sayantani-sinha-a81a44424/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
              <Linkedin size={24} />
            </a>
            <a href="https://www.instagram.com/_flicker_in_stardust_/?hl=en" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
              <Instagram size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
