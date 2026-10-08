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
            I'm currently open for new opportunities. Whether you have a question or
            just want to say hi, I'll try my best to get back to you!
          </p>

          <a 
            href="mailto:sayantani@example.com" 
            className="inline-block px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 transition-colors duration-300 shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] text-sm font-semibold tracking-widest text-white uppercase mb-12"
          >
            Say Hello
          </a>

          <div className="flex items-center justify-center gap-6 mt-4">
            <a href="https://github.com/sayantani071" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/sayantanisinha" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
              <Linkedin size={24} />
            </a>
            <a href="https://instagram.com/sayantanisinha" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
              <Instagram size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
