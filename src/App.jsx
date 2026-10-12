import React, { useRef, useEffect } from 'react';

import Hero from './components/Hero';
import Education from './components/Education';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SakuraPetals from './components/SakuraPetals';
import GithubActivity from './components/GithubActivity';
import CustomCursor from './components/CustomCursor';
import CinemaCurtainOpening from './components/CinemaCurtainOpening';

function App() {
  const glowRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-background overflow-hidden font-sans selection:bg-pink-500/20 selection:text-pink-100">
      <CustomCursor />
      <CinemaCurtainOpening />

      {/* Clean, Serene Sakura Atmospheric Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <SakuraPetals />
        
        {/* Subtle, soft ambient top glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-pink-900/10 via-pink-950/5 to-transparent blur-[120px] pointer-events-none" />

        {/* Minimal soft mouse aura */}
        <div
          ref={glowRef}
          className="absolute w-[400px] h-[400px] bg-pink-500/[0.035] rounded-full blur-[100px] transition-transform duration-100 ease-out pointer-events-none will-change-transform"
          style={{ transform: `translate(-200px, -200px)` }}
        />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <Education />
          <GithubActivity />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
