import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Calendar, Building2 } from 'lucide-react';

const educationData = [
  {
    degree: "B.Tech in Computer Science & Engineering (AI & ML)",
    institution: "JIS College of Engineering",
    period: "2024 — Present",
    status: "Currently Pursuing",
    isCurrent: true,
    description: "Specializing in Artificial Intelligence and Machine Learning with deep immersion in intelligent systems, machine learning theory, and core computer science fundamentals.",
    highlights: [
      "Artificial Intelligence & Machine Learning",
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems",
    ],
  },
  {
    degree: "Higher Secondary Education (10+2 Science)",
    institution: "Gaighata High School",
    period: "2022 — 2024",
    status: "Completed",
    isCurrent: false,
    description: "Completed higher secondary curriculum with a strong focus on pure sciences, mathematics, and computing foundations.",
    highlights: [
      "Physics",
      "Chemistry",
      "Mathematics",
      "Computer Science",
    ],
  },
  {
    degree: "Secondary School Examination (10th)",
    institution: "Gaighata High School",
    period: "2010 — 2022",
    status: "Completed",
    isCurrent: false,
    description: "Built foundational analytical, mathematical, and linguistic capabilities with strong academic distinction.",
    highlights: [
      "Physical Science",
      "Life Science",
      "Mathematics",
      "Languages",
    ],
  },
];

const Education = () => {
  return (
    <section id="education" className="py-28 relative z-10 font-sans">
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
              ACADEMIC BACKGROUND
            </p>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-rose-300 to-pink-200">Education</span>
          </h2>
          <div className="w-20 h-px bg-gradient-to-r from-pink-300/60 to-transparent mt-4"></div>
        </motion.div>

        {/* Education Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {educationData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className={`p-7 border transition-all duration-300 flex flex-col justify-between ${
                item.isCurrent
                  ? 'border-pink-300/35 bg-pink-300/[0.03] hover:border-pink-300/60'
                  : 'border-white/10 bg-white/[0.02] hover:border-pink-300/30'
              }`}
            >
              <div>
                {/* Status & Period Bar */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="flex items-center gap-1.5 text-pink-300 text-[11px] font-mono tracking-wider">
                    <Calendar size={13} />
                    <span>{item.period}</span>
                  </div>
                  {item.isCurrent ? (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 border border-pink-300/35 bg-pink-300/10 text-pink-200 text-[10px] font-mono uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse"></span>
                      IN PROGRESS
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 border border-white/10 text-slate-400 text-[10px] font-mono uppercase tracking-wider">
                      <Award size={11} className="text-slate-400" />
                      COMPLETED
                    </span>
                  )}
                </div>

                {/* Degree & Institution */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 border border-pink-300/25 bg-pink-300/10 text-pink-300 mt-1 shrink-0">
                    <GraduationCap size={18} />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-medium text-white leading-snug font-serif">
                      {item.degree}
                    </h3>
                    <div className="flex items-center gap-1.5 text-slate-400 text-xs font-mono mt-1">
                      <Building2 size={12} className="text-pink-300/80" />
                      <span>{item.institution}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300/75 text-xs leading-relaxed font-light mb-6">
                  {item.description}
                </p>
              </div>

              {/* Coursework / Focus Chips */}
              <div className="pt-4 border-t border-white/10">
                <div className="flex items-center gap-1.5 text-slate-400 text-[10px] font-mono uppercase tracking-wider mb-2.5">
                  <BookOpen size={11} className="text-pink-300/80" />
                  <span>Key Coursework</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {item.highlights.map((course, cIdx) => (
                    <span
                      key={cIdx}
                      className="px-2 py-1 text-[10px] font-mono border border-white/10 bg-white/[0.01] text-slate-300"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
