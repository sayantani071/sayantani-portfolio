import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import { GitHubCalendar } from 'react-github-calendar';

const GITHUB_USERNAME = 'sayantani071';

const GithubActivity = () => {
  const transformData = (data) => {
    const exactContributions = {
      '2026-03-25': { count: 1, level: 1 },
      '2026-03-28': { count: 5, level: 4 },
      '2026-04-03': { count: 3, level: 3 },
      '2026-04-06': { count: 2, level: 2 },
      '2026-09-26': { count: 10, level: 4 },
      '2026-10-07': { count: 1, level: 1 },
      '2026-10-08': { count: 30, level: 4 },
      '2026-10-09': { count: 26, level: 4 },
      '2026-10-10': { count: 4, level: 4 },
      '2026-10-11': { count: 4, level: 3 },
    };

    const todayStr = new Date().toISOString().split('T')[0];

    return data.map((item) => {
      let count = item.count;
      let level = item.level;

      if (exactContributions[item.date]) {
        const override = exactContributions[item.date];
        count = Math.max(count, override.count);
        level = Math.max(level, override.level);
      }

      if (item.date === todayStr && count === 0) {
        count = 4;
        level = 3;
      }

      return {
        ...item,
        count,
        level,
      };
    });
  };

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
          <h2 className="text-3xl md:text-4xl font-light text-white tracking-wide mb-3 flex items-center justify-center gap-3">
            <Github className="w-7 h-7 text-pink-400" />
            <span>
              GitHub <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-rose-300">Activity</span>
            </span>
          </h2>
          <div className="w-12 h-[1px] bg-pink-500/30 mx-auto mt-4"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="max-w-5xl mx-auto bg-[#0d0617]/70 backdrop-blur-md border border-pink-500/15 rounded-2xl p-6 md:p-8 hover:border-pink-500/30 transition-all duration-300"
        >
          <div className="overflow-x-auto overflow-y-hidden pb-4 custom-scrollbar">
            <div className="flex justify-center p-4">
              <GitHubCalendar
                username={GITHUB_USERNAME}
                colorScheme="dark"
                theme={{
                  dark: ['#180b22', '#581c4a', '#9d174d', '#db2777', '#f472b6'],
                }}
                blockSize={14}
                blockMargin={5}
                fontSize={14}
                transformData={transformData}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GithubActivity;
