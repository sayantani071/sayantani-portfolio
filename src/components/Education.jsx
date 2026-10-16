import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GraduationCap, Sparkles, BookOpen, Compass, Calendar, CheckCircle2 } from 'lucide-react';

const educationData = [
  {
    id: 'born',
    period: '1st AUGUST 2005',
    badge: 'ORIGIN',
    status: 'origin',
    title: 'Born',
    institution: 'The Beginning of the Journey',
    description: 'Where every line of this story began. Taking the first steps into the world with curiosity and a passion for discovering how things work.',
    icon: Sparkles,
    tags: ['Origin', 'Curiosity'],
  },
  {
    id: 'schooling',
    period: '2010 - 2024',
    badge: 'COMPLETED',
    status: 'completed',
    title: 'Higher Secondary Education',
    institution: 'Gaighata High School',
    description: 'Completed primary, secondary, and higher secondary education with a strong academic grounding in Science, Mathematics, and Computer Science.',
    icon: BookOpen,
    tags: ['Science Stream', 'High School Graduate', 'Mathematics'],
  },
  {
    id: 'btech',
    period: '2025 - PRESENT',
    badge: 'CURRENTLY STUDYING',
    status: 'active',
    title: 'B.Tech CSE (AI & ML)',
    institution: 'JIS COLLEGE OF ENGINEERING',
    description: 'Deep diving into Artificial Intelligence, Machine Learning, and Database Management Systems. Actively participating in hackathons and building practical applications.',
    icon: GraduationCap,
    progress: {
      percentage: 45,
      label: 'IN PROGRESS',
    },
    tags: ['AI & Machine Learning', 'DBMS', 'Hackathons', 'App Dev'],
  },
  {
    id: 'future',
    period: 'TBD',
    badge: 'NEXT HORIZON',
    status: 'upcoming',
    title: 'End of Journey',
    institution: 'To Be Continued...',
    description: 'To be continued — constantly learning, building scalable systems, and striving to make impactful contributions across technology.',
    icon: Compass,
    tags: ['Continuous Learning', 'Innovation', 'Future Goals'],
  },
];

const EducationCard = ({ item }) => {
  const Icon = item.icon;

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.015 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="relative w-full bg-[#0e0618]/85 backdrop-blur-md border border-white/10 hover:border-pink-400/50 group-hover:border-pink-400/40 rounded-2xl p-6 sm:p-7 overflow-hidden transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_35px_rgba(244,114,182,0.22)] text-left"
    >
      {/* Top Accent Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-pink-400 via-rose-300 to-transparent group-hover:h-[3px] transition-all duration-300" />

      {/* Subtle Hover Background Aura */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/[0.08] via-rose-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Header: Period & Status Badge */}
      <div className="flex items-center justify-between gap-2 flex-wrap mb-4">
        {/* Period Badge */}
        <div className="inline-flex items-center gap-1.5 text-pink-300/90 font-mono text-xs tracking-wider uppercase bg-pink-500/10 border border-pink-400/25 px-3 py-1 rounded-full">
          <Calendar className="w-3.5 h-3.5 text-pink-400 shrink-0" />
          <span>{item.period}</span>
        </div>

        {/* Dynamic Status Pill */}
        {item.status === 'active' && (
          <span className="flex items-center gap-2 bg-gradient-to-r from-pink-500/20 via-rose-500/20 to-pink-500/10 border border-pink-400/40 text-pink-200 px-3 py-1 rounded-full text-[10px] sm:text-xs font-mono tracking-wider shadow-[0_0_15px_rgba(244,114,182,0.25)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-400 shadow-[0_0_8px_#f472b6]"></span>
            </span>
            {item.badge}
          </span>
        )}

        {item.status === 'completed' && (
          <span className="inline-flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 px-3 py-1 rounded-full text-[10px] sm:text-xs font-mono tracking-wider">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            {item.badge}
          </span>
        )}

        {item.status === 'origin' && (
          <span className="inline-flex items-center gap-1.5 bg-pink-500/10 border border-pink-400/30 text-pink-300 px-3 py-1 rounded-full text-[10px] sm:text-xs font-mono tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            {item.badge}
          </span>
        )}

        {item.status === 'upcoming' && (
          <span className="inline-flex items-center gap-1.5 bg-purple-500/10 border border-purple-400/30 text-purple-300 px-3 py-1 rounded-full text-[10px] sm:text-xs font-mono tracking-wider">
            <Compass className="w-3.5 h-3.5 text-purple-400" />
            {item.badge}
          </span>
        )}
      </div>

      {/* Title & Icon Row */}
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 className="text-xl sm:text-2xl font-medium text-white tracking-tight group-hover:text-pink-100 transition-colors leading-snug">
          {item.title}
        </h3>
        <div className="p-2.5 rounded-xl bg-pink-500/10 border border-pink-400/20 text-pink-300 group-hover:scale-110 group-hover:bg-pink-500/20 group-hover:border-pink-400/40 transition-all duration-300 shrink-0">
          <Icon className="w-5 h-5 text-pink-300" />
        </div>
      </div>

      {/* Subtitle / Institution */}
      <p className="text-pink-300/80 font-mono text-xs sm:text-sm tracking-wide mb-3 uppercase">
        {item.institution}
      </p>

      {/* Description */}
      <p className="text-gray-300/80 font-sans text-sm leading-relaxed mb-4">
        {item.description}
      </p>

      {/* Progress Bar (If applicable) */}
      {item.progress && (
        <div className="mt-4 pt-4 border-t border-white/5 space-y-2">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-pink-300/90 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
              {item.progress.label}
            </span>
            <span className="text-pink-300 font-semibold">{item.progress.percentage}%</span>
          </div>
          <div
            className="relative h-2 w-full overflow-hidden rounded-full border border-pink-500/20 bg-white/5"
            role="progressbar"
            aria-label={`${item.title} progress`}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={item.progress.percentage}
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${item.progress.percentage}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-full overflow-hidden rounded-full bg-gradient-to-r from-pink-400 via-rose-400 to-pink-500 shadow-[0_0_12px_rgba(244,114,182,0.6)]"
            >
              <motion.div
                aria-hidden="true"
                className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                animate={{ x: ['-100%', '300%'] }}
                transition={{ duration: 1.6, ease: 'easeInOut', repeat: Infinity, repeatDelay: 0.5 }}
              />
            </motion.div>
          </div>
        </div>
      )}

      {/* Dynamic Tags */}
      {item.tags && item.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-white/5">
          {item.tags.map((tag, i) => (
            <span
              key={i}
              className="text-[11px] font-mono text-gray-300 bg-white/5 hover:bg-pink-500/10 hover:text-pink-200 border border-white/10 hover:border-pink-400/30 px-2.5 py-0.5 rounded-md transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
};

const TimelineNode = ({ item }) => {
  const isActive = item.status === 'active';

  return (
    <div className="relative flex items-center justify-center">
      {isActive && (
        <span className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-pink-400/40 opacity-75" />
      )}
      <motion.div
        whileHover={{ scale: 1.25 }}
        className={`relative flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300 ${
          isActive
            ? 'bg-[#101622] border-pink-400 shadow-[0_0_20px_rgba(244,114,182,0.8)]'
            : 'bg-[#101622] border-pink-400/50 hover:border-pink-300 group-hover:border-pink-400'
        }`}
      >
        <div
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            isActive
              ? 'bg-gradient-to-r from-pink-400 to-rose-400 shadow-[0_0_10px_#f472b6]'
              : 'bg-pink-400/70 group-hover:bg-pink-300 group-hover:shadow-[0_0_8px_rgba(244,114,182,0.6)]'
          }`}
        />
      </motion.div>
    </div>
  );
};

const Education = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 75%', 'end 65%'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="education" className="py-24 relative z-10 font-sans">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-light text-white tracking-wide">
            My{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-rose-300 to-pink-200">
              Education
            </span>
          </h2>
          <div className="w-12 h-[1px] bg-pink-500/30 mx-auto mt-4"></div>
        </motion.div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative max-w-5xl mx-auto">
          {/* Desktop Timeline Track & Glowing Progress Line */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-10 bottom-10 w-[2px] bg-white/10 overflow-hidden rounded-full z-0">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-pink-400 via-rose-400 to-pink-500 shadow-[0_0_16px_rgba(244,114,182,0.9)] origin-top rounded-full"
            />
          </div>

          {/* Mobile Timeline Track & Glowing Progress Line */}
          <div className="md:hidden absolute left-6 -translate-x-1/2 top-8 bottom-8 w-[2px] bg-white/10 overflow-hidden rounded-full z-0">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-pink-400 via-rose-400 to-pink-500 shadow-[0_0_16px_rgba(244,114,182,0.9)] origin-top rounded-full"
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-14 md:space-y-20">
            {educationData.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative flex flex-col md:flex-row items-start md:items-center w-full group"
                >
                  {/* Mobile Node */}
                  <div className="md:hidden absolute left-6 top-8 -translate-x-1/2 -translate-y-1/2 z-20">
                    <TimelineNode item={item} />
                  </div>

                  {/* Mobile Connector Line */}
                  <div className="md:hidden absolute left-6 top-8 w-6 h-[2px] bg-gradient-to-r from-pink-400 to-pink-500/40 z-10" />

                  {/* Desktop Center Node */}
                  <div className="hidden md:flex absolute left-1/2 top-8 -translate-x-1/2 -translate-y-1/2 z-20">
                    <TimelineNode item={item} />
                  </div>

                  {/* Left Column (Desktop) */}
                  <div
                    className={`w-full md:w-1/2 md:pr-10 ${
                      isEven ? 'md:flex md:justify-end' : 'hidden md:block'
                    }`}
                  >
                    {isEven && (
                      <div className="relative w-full max-w-[460px] ml-12 sm:ml-14 md:ml-0">
                        {/* Desktop Connector from Card to Center Node */}
                        <div className="hidden md:block absolute -right-10 top-8 w-10 h-[2px] bg-gradient-to-r from-pink-500/30 via-pink-400/60 to-pink-400 group-hover:from-pink-400 group-hover:to-rose-300 transition-all duration-300 shadow-[0_0_8px_rgba(244,114,182,0.3)] z-10" />
                        <EducationCard item={item} />
                      </div>
                    )}
                  </div>

                  {/* Right Column (Desktop) */}
                  <div
                    className={`w-full md:w-1/2 md:pl-10 ${
                      !isEven ? 'md:flex md:justify-start' : 'hidden md:block'
                    }`}
                  >
                    {!isEven && (
                      <div className="relative w-full max-w-[460px] ml-12 sm:ml-14 md:ml-0">
                        {/* Desktop Connector from Center Node to Card */}
                        <div className="hidden md:block absolute -left-10 top-8 w-10 h-[2px] bg-gradient-to-l from-pink-500/30 via-pink-400/60 to-pink-400 group-hover:from-pink-400 group-hover:to-rose-300 transition-all duration-300 shadow-[0_0_8px_rgba(244,114,182,0.3)] z-10" />
                        <EducationCard item={item} />
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
