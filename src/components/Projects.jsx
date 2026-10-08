import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "AI Image Recognition System",
    description: "Developed a deep learning model to accurately classify and detect objects in high-resolution images using PyTorch and OpenCV. Deployed as a REST API.",
    image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?q=80&w=800&auto=format&fit=crop",
    tags: ["Python", "PyTorch", "Computer Vision", "FastAPI"],
    github: "#",
    demo: "#"
  },
  {
    title: "Predictive Analytics Dashboard",
    description: "An interactive dashboard visualizing machine learning predictions on financial data. Implemented real-time data processing and interactive charts.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    tags: ["Python", "Pandas", "Scikit-Learn", "React", "Tailwind"],
    github: "#",
    demo: "#"
  },
  {
    title: "Autonomous Drone Navigation",
    description: "C++ based navigation algorithms for autonomous drones in simulated environments. Implemented pathfinding and obstacle avoidance.",
    image: "https://images.unsplash.com/photo-1579822981589-d0e1b6a386ad?q=80&w=800&auto=format&fit=crop",
    tags: ["C++", "ROS", "Algorithms", "Simulation"],
    github: "#",
    demo: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Featured Projects</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden group flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-6 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className="text-xs font-mono text-accent bg-accent/10 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/10">
                  <a href={project.github} className="text-gray-400 hover:text-white flex items-center gap-2 text-sm font-medium transition-colors">
                    <Github size={18} /> Code
                  </a>
                  <a href={project.demo} className="text-gray-400 hover:text-white flex items-center gap-2 text-sm font-medium transition-colors">
                    <ExternalLink size={18} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
