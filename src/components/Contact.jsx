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
          <h2 className="text-3xl md:text-4xl font-light text-white tracking-wide mb-3">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-rose-300 to-pink-200">Touch</span>
          </h2>
          <div className="w-12 h-[1px] bg-pink-500/30 mx-auto mb-8"></div>
          
          <p className="text-gray-300 max-w-lg mx-auto font-light text-base md:text-lg mb-10 leading-relaxed">
            I&apos;m currently open for new opportunities. Whether you have a question or
            just want to say hi, I&apos;ll try my best to get back to you!
          </p>

          <a 
            href="mailto:sayantani@example.com" 
            className="inline-block px-8 py-3.5 rounded-full bg-gradient-to-r from-pink-500/90 via-rose-500/90 to-pink-600/90 hover:from-pink-400 hover:to-rose-400 transition-all duration-300 shadow-[0_0_15px_rgba(244,114,182,0.3)] hover:shadow-[0_0_25px_rgba(244,114,182,0.5)] text-xs font-semibold tracking-[0.25em] text-white uppercase mb-12 transform hover:-translate-y-0.5"
          >
            Say Hello 🌸
          </a>

          <div className="flex items-center justify-center gap-7 mt-2">
            <a href="https://github.com/sayantani071" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-300 hover:scale-110 transition-all duration-300">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/sayantani-sinha-a81a44424/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-300 hover:scale-110 transition-all duration-300">
              <Linkedin size={20} />
            </a>
            <a href="https://www.instagram.com/_flicker_in_stardust_/?hl=en" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-300 hover:scale-110 transition-all duration-300">
              <Instagram size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
