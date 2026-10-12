import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Database, Smartphone, Radio, Quote, Sparkles } from 'lucide-react';

const technicalInterests = [
  {
    icon: <Cpu className="text-pink-300 w-5 h-5" />,
    title: "AI & Machine Learning",
    description: "Fascinates me because of its potential to make systems more intelligent and improve decision-making across complex problems.",
  },
  {
    icon: <Database className="text-pink-300 w-5 h-5" />,
    title: "Database Management (DBMS)",
    description: "Helps me understand how data can be structured, stored, and managed efficiently for robust applications.",
  },
  {
    icon: <Smartphone className="text-pink-300 w-5 h-5" />,
    title: "App Development",
    description: "Allows me to explore how creative ideas become interactive, intuitive, and user-friendly digital experiences.",
  },
  {
    icon: <Radio className="text-pink-300 w-5 h-5" />,
    title: "IoT & Hardware",
    description: "Enables me to bridge software with sensors, electronic circuits, and the physical environment to build connected solutions.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-28 relative z-10 font-sans">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-pink-400"></span>
            <p className="text-slate-400 font-mono tracking-[0.2em] text-[11px] md:text-xs uppercase font-medium">
              GET TO KNOW ME
            </p>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-rose-300 to-pink-200">Me</span>
          </h2>
          <div className="w-20 h-px bg-gradient-to-r from-pink-300/60 to-transparent mt-4"></div>
        </motion.div>

        {/* Main Narrative Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 sm:p-12 border border-white/10 bg-white/[0.02] backdrop-blur-md mb-12 relative overflow-hidden"
        >
          {/* Greeting Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-pink-300/30 bg-pink-300/10 text-pink-200 text-xs font-mono tracking-wider mb-6">
            <span>Namaste 🙏</span>
          </div>

          <h3 className="text-2xl sm:text-3xl lg:text-4xl text-white font-serif font-medium leading-snug mb-6 max-w-4xl">
            I&apos;m Sayantani Sinha, a second-year B.Tech student pursuing Computer Science &amp; Engineering with a specialization in Artificial Intelligence &amp; Machine Learning (AI &amp; ML) at JIS College of Engineering.
          </h3>

          <div className="space-y-4 text-slate-300/80 font-light text-sm sm:text-base leading-relaxed max-w-5xl">
            <p>
              I am an enthusiastic technology learner with a strong interest in innovation, problem-solving, and building solutions that can make a meaningful difference. For me, technology is more than just writing code; it is a way to explore possibilities, understand challenges, and transform creative ideas into practical applications. I enjoy discovering how different technologies work and continuously challenging myself to learn something new.
            </p>

            <p>
              My technical interests span Artificial Intelligence &amp; Machine Learning, Database Management Systems (DBMS), App Development, and IoT &amp; Hardware. AI and Machine Learning fascinate me because of their potential to make systems more intelligent and improve decision-making. DBMS helps me understand how data can be structured, stored, and managed efficiently. Through App Development, I explore how ideas can become interactive and user-friendly digital experiences, while IoT and Hardware allow me to understand how software interacts with sensors, electronic components, and the physical world.
            </p>

            <p>
              What excites me most is the possibility of connecting these different fields to create innovative and useful solutions. I enjoy exploring new concepts, experimenting with technologies, and learning through hands-on projects. I believe that practical experience plays an important role in understanding technical concepts and developing the confidence to approach unfamiliar challenges.
            </p>

            <p>
              My learning journey is guided by curiosity, consistency, and the willingness to improve. I understand that the world of technology evolves every day, and staying open to new ideas is essential for growth. Along with strengthening my technical knowledge, I aim to improve my logical thinking, creativity, teamwork, and problem-solving abilities so that I can approach challenges with confidence and a fresh perspective.
            </p>

            <p>
              As I continue my journey in computer science, I aspire to work on projects that combine intelligent systems, creative development, and real-world applications. I want to explore new opportunities, collaborate with like-minded people, and transform the knowledge I gain into projects that demonstrate both technical understanding and meaningful purpose.
            </p>

            <p>
              For me, every challenge is an opportunity to learn, every project is a chance to experiment, and every new idea is a step toward becoming a better developer. I believe that progress comes from asking questions, embracing mistakes, and having the determination to keep moving forward.
            </p>
          </div>

          {/* Inspirational Quote Banner */}
          <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 border border-pink-300/20 bg-pink-300/[0.04]">
            <div className="flex items-center gap-3">
              <Quote className="text-pink-300 w-6 h-6 shrink-0" />
              <p className="font-serif italic text-base sm:text-lg text-pink-100">
                &ldquo;Curiosity starts the journey; the courage to keep going defines it.&rdquo;
              </p>
            </div>
            <span className="font-mono text-xs text-pink-300/80 tracking-wider uppercase shrink-0">
              — Sayantani Sinha
            </span>
          </div>
        </motion.div>

        {/* 4 Technical Interests Grid */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="text-pink-300 w-4 h-4" />
            <h4 className="text-xs font-mono tracking-[0.2em] text-pink-300/90 uppercase font-medium">
              CORE TECHNICAL DOMAINS
            </h4>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {technicalInterests.map((interest, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 border border-white/10 bg-white/[0.02] hover:border-pink-300/35 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="p-2.5 border border-pink-300/30 bg-pink-300/10 inline-block mb-4">
                    {interest.icon}
                  </div>
                  <h5 className="text-base font-medium text-white mb-2.5 tracking-wide">
                    {interest.title}
                  </h5>
                  <p className="text-slate-400 text-xs leading-relaxed font-light">
                    {interest.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Vision Statement Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 border border-white/10 bg-gradient-to-r from-pink-950/15 via-white/[0.02] to-transparent flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div>
            <span className="text-[10px] font-mono tracking-[0.25em] text-pink-300 uppercase block mb-1">
              MY VISION
            </span>
            <p className="text-white text-base sm:text-lg font-serif">
              To keep learning, keep creating, and use technology not just to build something new, but to build something that matters.
            </p>
          </div>
          <a
            href="#contact"
            className="px-6 py-3 border border-pink-300/45 bg-pink-300/15 hover:bg-pink-300/25 text-[11px] font-semibold tracking-[0.16em] text-pink-50 uppercase transition-colors duration-300 shrink-0"
          >
            LET&apos;S CONNECT
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
