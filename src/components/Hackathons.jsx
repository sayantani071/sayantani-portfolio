import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Calendar, MapPin } from 'lucide-react';

const hackathons = [
  {
    title: "Global AI Hackathon 2026",
    role: "Lead Machine Learning Engineer",
    date: "Aug 2026",
    location: "Virtual / Global",
    description: "Built an AI-powered accessibility tool for visually impaired users. Placed in the top 10 out of 500+ participating teams.",
    tech: ["Python", "TensorFlow", "React Native"],
    result: "Top 10 Finalist"
  },
  {
    title: "Innovate India Codefest",
    role: "Backend Developer & AI Specialist",
    date: "Mar 2026",
    location: "New Delhi, India",
    description: "Developed a smart city traffic optimization system using reinforcement learning. Reduced simulated wait times by 30%.",
    tech: ["C++", "Python", "OpenAI Gym", "Flask"],
    result: "1st Runner Up"
  },
  {
    title: "UniTech Hack 2025",
    role: "Full Stack Developer",
    date: "Oct 2025",
    location: "University Campus",
    description: "Created a peer-to-peer mentoring platform for students with an AI matching algorithm.",
    tech: ["React", "Node.js", "MongoDB", "Scikit-learn"],
    result: "Winner - Best Student Hack"
  }
];

const Hackathons = () => {
  return (
    <section id="hackathons" className="py-24 relative z-10 bg-white/[0.02]">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Hackathons & Competitions</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {hackathons.map((hackathon, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-6 md:p-8 rounded-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-secondary to-primary"></div>
              
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{hackathon.title}</h3>
                  <p className="text-primary font-medium text-lg mb-2">{hackathon.role}</p>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-gray-400 font-mono">
                    <span className="flex items-center gap-1"><Calendar size={14} /> {hackathon.date}</span>
                    <span className="flex items-center gap-1"><MapPin size={14} /> {hackathon.location}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-500 font-bold whitespace-nowrap">
                  <Trophy size={16} />
                  {hackathon.result}
                </div>
              </div>

              <p className="text-gray-300 mb-6">{hackathon.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {hackathon.tech.map((tech, techIdx) => (
                  <span key={techIdx} className="px-3 py-1 bg-white/5 border border-white/10 rounded text-xs text-gray-300">
                    {tech}
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

export default Hackathons;
