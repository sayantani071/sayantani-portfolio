import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star, FileBadge } from 'lucide-react';

const achievements = [
  {
    title: "AWS Certified Machine Learning – Specialty",
    issuer: "Amazon Web Services",
    date: "2026",
    icon: <FileBadge size={24} className="text-accent" />
  },
  {
    title: "Top 1% in National Coding Olympiad",
    issuer: "National Tech Board",
    date: "2025",
    icon: <Award size={24} className="text-yellow-400" />
  },
  {
    title: "DeepLearning.AI TensorFlow Developer",
    issuer: "Coursera",
    date: "2024",
    icon: <FileBadge size={24} className="text-primary" />
  },
  {
    title: "Excellence in AI Research Award",
    issuer: "University Department of CSE",
    date: "2025",
    icon: <Star size={24} className="text-secondary" />
  }
];

const Achievements = () => {
  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-accent">Achievements & Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-6 rounded-2xl text-center group flex flex-col items-center justify-center h-full"
            >
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400 mb-2">{item.issuer}</p>
              <span className="text-xs font-mono text-primary px-3 py-1 bg-primary/10 rounded-full mt-auto">{item.date}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
