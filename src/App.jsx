import React, { useRef, useEffect } from 'react';

import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';


import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackgroundGlitters from './components/BackgroundGlitters';
import GithubActivity from './components/GithubActivity';
import CustomCursor from './components/CustomCursor';

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
      {/* Futuristic Background Gradients with Mouse tracking */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <BackgroundGlitters />
        <div className="absolute top-0 -left-4 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-4000"></div>

        {/* Interactive glow following mouse */}
        <div
          ref={glowRef}
          className="absolute w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] transition-transform duration-75 ease-out pointer-events-none will-change-transform"
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
