import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative z-10 bg-black/20">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Get In Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            Whether you have a question, a project idea, or just want to say hi, my inbox is always open. I&apos;ll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="md:col-span-2 space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass p-6 rounded-2xl flex items-center gap-4 group"
            >
              <div className="p-4 bg-primary/10 text-primary rounded-full group-hover:bg-primary group-hover:text-white transition-colors">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-sm text-gray-400 uppercase tracking-wider font-bold mb-1">Email</h4>
                <a href="mailto:hello@example.com" className="text-white hover:text-primary transition-colors text-lg">sayantani@example.com</a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass p-6 rounded-2xl flex items-center gap-4 group"
            >
              <div className="p-4 bg-secondary/10 text-secondary rounded-full group-hover:bg-secondary group-hover:text-white transition-colors">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-sm text-gray-400 uppercase tracking-wider font-bold mb-1">Location</h4>
                <p className="text-white text-lg">India</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass p-6 rounded-2xl flex items-center gap-4 group"
            >
              <div className="p-4 bg-accent/10 text-accent rounded-full group-hover:bg-accent group-hover:text-white transition-colors">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-sm text-gray-400 uppercase tracking-wider font-bold mb-1">Phone</h4>
                <a href="tel:+1234567890" className="text-white hover:text-accent transition-colors text-lg">+91 XXXXX XXXXX</a>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3 glass-card p-8 rounded-3xl"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm text-gray-400 font-medium ml-1">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-gray-400 font-medium ml-1">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm text-gray-400 font-medium ml-1">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="Project Inquiry"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm text-gray-400 font-medium ml-1">Message</label>
                <textarea 
                  id="message" 
                  rows="5"
                  className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                  placeholder="Hello Sayantani, I would like to talk about..."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full py-4 bg-primary hover:bg-blue-600 text-white font-bold rounded-xl transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] flex items-center justify-center gap-2"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
