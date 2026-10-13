import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12 max-w-[1200px]">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-12"
        >
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white tracking-tight">
            About Me
          </h2>
          <div className="h-[1px] bg-white/10 max-w-[300px] flex-1" />
        </motion.div>

        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-sans text-[#888888] text-[1.125rem] sm:text-[1.15rem] leading-[1.9] max-w-[800px] space-y-6"
        >
          <p>
            Namaste 🙏, I&apos;m Sayantani Sinha, a second-year B.Tech student pursuing Computer Science and Engineering with a specialization in Artificial Intelligence and Machine Learning (AI &amp; ML) at JIS College of Engineering.
          </p>

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

          <p className="text-[1.25rem] sm:text-[1.3rem] text-white font-medium tracking-[1px] my-10 border-l-[3px] border-[#2563eb] pl-6 italic">
            &ldquo;Curiosity starts the journey; the courage to keep going defines it.&rdquo;
          </p>

          <p>
            My vision is to keep learning, keep creating, and use technology not just to build something new, but to build something that matters. 🚀
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
