import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
              GitHub Activity
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
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6 text-gray-300">Contributions</h3>
            <div className="overflow-x-auto overflow-y-hidden pb-4 custom-scrollbar">
              <div className="min-w-[800px] flex justify-center">
                <img 
                  src="https://ghchart.rshah.org/3b82f6/sayantani071" 
                  alt="Sayantani Sinha's Github Activity" 
                  className="w-full h-auto opacity-90 hover:opacity-100 transition-opacity duration-300"
                  style={{ filter: 'invert(1) hue-rotate(180deg) brightness(1.2) contrast(1.2)' }}
                />
              </div>
            </div>
          </div>
          
          {/* Stats Cards */}
          <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
            <a href="https://github.com/sayantani071" target="_blank" rel="noopener noreferrer" className="group">
              <div className="rounded-xl overflow-hidden bg-black/40 border border-white/5 group-hover:border-blue-500/30 transition-colors duration-300">
                <img 
                  src="https://github-readme-stats.vercel.app/api?username=sayantani071&show_icons=true&theme=transparent&hide_border=true&title_color=3b82f6&text_color=9ca3af&icon_color=8b5cf6&bg_color=transparent" 
                  alt="GitHub Stats" 
                  className="h-48"
                />
              </div>
            </a>
            
            <a href="https://github.com/sayantani071" target="_blank" rel="noopener noreferrer" className="group">
              <div className="rounded-xl overflow-hidden bg-black/40 border border-white/5 group-hover:border-indigo-500/30 transition-colors duration-300">
                <img 
                  src="https://github-readme-stats.vercel.app/api/top-langs/?username=sayantani071&layout=compact&theme=transparent&hide_border=true&title_color=8b5cf6&text_color=9ca3af&bg_color=transparent" 
                  alt="Top Languages" 
                  className="h-48"
                />
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GithubActivity;
