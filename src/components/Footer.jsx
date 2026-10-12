import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-pink-500/15 relative z-10 bg-[#07030b]/80 backdrop-blur-md">
      <div className="container mx-auto px-6 text-center flex flex-col items-center justify-center">
        <p className="text-gray-300 text-sm flex items-center justify-center gap-1.5 font-light">
          Designed & Built with <Heart size={14} className="text-pink-400 fill-pink-400 animate-pulse drop-shadow-[0_0_8px_rgba(244,114,182,0.8)]" /> by Sayantani 🌸
        </p>
        <p className="text-pink-300/40 text-xs mt-2 font-mono">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
