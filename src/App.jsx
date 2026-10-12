import React, { useRef, useEffect } from 'react';

import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackgroundGlitters from './components/BackgroundGlitters';
import SakuraPetals from './components/SakuraPetals';
import GithubActivity from './components/GithubActivity';
import CustomCursor from './components/CustomCursor';
import CinemaCurtainOpening from './components/CinemaCurtainOpening';

function App() {
  const glowRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${e.clientX - 250}px, ${e.clientY - 250}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-background overflow-hidden font-sans">
      <CustomCursor />
      <CinemaCurtainOpening />
      {/* Sakura Atmospheric Background with Petals & Glows */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <BackgroundGlitters />
        <SakuraPetals />
        <div className="absolute top-0 -left-4 w-96 h-96 bg-pink-600/30 rounded-full mix-blend-screen filter blur-[140px] animate-blob"></div>
        <div className="absolute top-1/4 -right-4 w-96 h-96 bg-rose-500/25 rounded-full mix-blend-screen filter blur-[140px] animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-fuchsia-800/20 rounded-full mix-blend-screen filter blur-[140px] animate-blob animation-delay-4000"></div>

        {/* Interactive sakura glow following mouse */}
        <div
          ref={glowRef}
          className="absolute w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[110px] transition-transform duration-75 ease-out pointer-events-none will-change-transform"
          style={{ transform: `translate(-250px, -250px)` }}
        ></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <About />
          <Education />
          <Projects />
          <GithubActivity />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
