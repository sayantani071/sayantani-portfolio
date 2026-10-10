import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import { GitHubCalendar } from 'react-github-calendar';

const GithubActivity = () => {
  return (
    <section id="github" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-4">
            <Github className="w-8 h-8 md:w-10 md:h-10 text-blue-500" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-400 bg-[length:200%_auto] animate-text-flow">
              My Contributions
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-5xl mx-auto bg-[#0a0f1a]/80 backdrop-blur-md border border-blue-500/10 rounded-2xl p-6 md:p-10 shadow-[0_0_30px_rgba(59,130,246,0.05)] hover:border-blue-500/30 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] transition-all duration-500"
        >
          {/* Contribution Graph */}
          <div>
            <div className="overflow-x-auto overflow-y-hidden pb-4 custom-scrollbar">
              <div className="flex justify-center p-4">
                <GitHubCalendar 
                  username="sayantani071" 
                  colorScheme="dark"
                  blockSize={14}
                  blockMargin={5}
                  fontSize={14}
                />
              </div>
            </div>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
};

export default GithubActivity;
