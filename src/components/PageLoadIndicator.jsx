import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * PageLoadIndicator
 * Authentic, industry-standard top loading beam (Vercel / GitHub / Apple style).
 * Sweeps across the top of the viewport on initial site mount with a neon cyan/purple/white flare,
 * then gently fades out to reveal the fully rendered application without blocking the user.
 */
const PageLoadIndicator = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Smooth, realistic loading progression timeline
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="top-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: 'easeInOut' }}
          className="fixed top-0 left-0 right-0 z-[999999] pointer-events-none h-[2.5px] overflow-visible"
        >
          {/* Subtle top ambient glow bloom */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.45, 0.15, 0] }}
            transition={{ duration: 1.1, ease: 'easeOut' }}
            className="absolute -top-6 left-1/2 -translate-x-1/2 w-96 h-12 bg-cyan-400/25 blur-xl rounded-full"
          />

          {/* Glowing beam line */}
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: ['0%', '35%', '78%', '100%'] }}
            transition={{
              duration: 0.95,
              times: [0, 0.25, 0.65, 1],
              ease: [0.16, 1, 0.3, 1],
            }}
            className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 via-purple-400 to-white relative"
            style={{
              boxShadow: '0 0 12px rgba(56, 189, 248, 0.8), 0 0 20px rgba(168, 85, 247, 0.5)',
            }}
          >
            {/* Leading edge flare particle */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full blur-[2px] shadow-[0_0_12px_#ffffff,0_0_20px_#38bdf8]" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoadIndicator;
