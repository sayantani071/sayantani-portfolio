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
          <h2 className="text-4xl md:text-5xl font-medium mb-4 text-white font-sans tracking-wide">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-100 via-pink-300 to-rose-300">
              Get In Touch
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-pink-400 to-rose-500 mx-auto rounded-full shadow-[0_0_12px_rgba(244,114,182,0.8)] mb-6"></div>
          
          <p className="mt-4 text-gray-300 max-w-xl mx-auto font-light text-lg mb-10 leading-relaxed">
            I&apos;m currently open for new opportunities. Whether you have a question or
            just want to say hi, I&apos;ll try my best to get back to you!
          </p>

          <a 
            href="mailto:sayantani@example.com" 
            className="inline-block px-8 py-3.5 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 hover:from-pink-400 hover:via-rose-400 hover:to-pink-500 transition-all duration-300 shadow-[0_0_20px_rgba(244,114,182,0.45)] hover:shadow-[0_0_35px_rgba(244,114,182,0.7)] text-sm font-semibold tracking-widest text-white uppercase mb-12 transform hover:scale-105"
          >
            Say Hello 🌸
          </a>

          <div className="flex items-center justify-center gap-6 mt-4">
            <a href="https://github.com/sayantani071" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-300 hover:scale-110 transition-all duration-300">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/sayantani-sinha-a81a44424/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-300 hover:scale-110 transition-all duration-300">
              <Linkedin size={24} />
            </a>
            <a href="https://www.instagram.com/_flicker_in_stardust_/?hl=en" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-300 hover:scale-110 transition-all duration-300">
              <Instagram size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
