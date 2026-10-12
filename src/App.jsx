import React, { useRef, useEffect } from 'react';

import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
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
        glowRef.current.style.transform = `translate(${e.clientX - 225}px, ${e.clientY - 225}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-background overflow-hidden font-sans">
      <CustomCursor />
      <CinemaCurtainOpening />
      {/* Bio-Digital Sakura Neural Link Background Theme */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <SakuraPetals />
        {/* Soft atmospheric ambient Sakura night glow */}
        <div className="absolute top-0 left-1/4 w-[650px] h-[650px] bg-pink-950/20 rounded-full blur-[160px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[550px] h-[550px] bg-rose-950/20 rounded-full blur-[150px] pointer-events-none"></div>

        {/* Interactive soft mouse aura */}
        <div
          ref={glowRef}
          className="absolute w-[450px] h-[450px] bg-pink-500/[0.04] rounded-full blur-[100px] transition-transform duration-75 ease-out pointer-events-none will-change-transform"
          style={{ transform: `translate(-225px, -225px)` }}
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
