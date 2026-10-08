import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/10 relative z-10 bg-black/40">
      <div className="container mx-auto px-6 text-center flex flex-col items-center justify-center">
        <p className="text-gray-400 text-sm flex items-center justify-center gap-1">
          Designed & Built with <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" /> by Sayantani
        </p>
        <p className="text-gray-600 text-xs mt-2 font-mono">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
