import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "C", "C++", "JavaScript", "SQL"]
  },
  {
    title: "AI & Machine Learning",
    skills: ["TensorFlow", "PyTorch", "Scikit-Learn", "Pandas", "NumPy", "Computer Vision", "NLP"]
  },
  {
    title: "Tools & Technologies",
    skills: ["Git", "GitHub", "Linux", "Docker", "VS Code", "Jupyter"]
  },
  {
    title: "Web Development",
    skills: ["React", "HTML5", "CSS3", "Tailwind CSS", "Node.js"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative z-10 bg-white/[0.02]">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Technical Skills</span>
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-8 rounded-2xl"
            >
              <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIdx) => (
                  <span 
                    key={skillIdx}
                    className="px-4 py-2 rounded-full text-sm font-medium bg-white/5 border border-white/10 text-gray-300 hover:bg-primary/20 hover:text-primary hover:border-primary/50 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
