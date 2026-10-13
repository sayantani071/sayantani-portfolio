import React from 'react';

import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SakuraPetals from './components/SakuraPetals';
import BackgroundGlitters from './components/BackgroundGlitters';
import Projects from './components/Projects';
import GithubActivity from './components/GithubActivity';
import CinemaCurtainOpening from './components/CinemaCurtainOpening';

function App() {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden font-sans selection:bg-pink-500/20 selection:text-pink-100">
      <CinemaCurtainOpening />

      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <BackgroundGlitters />
        <SakuraPetals />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <About />
          <Education />
          <GithubActivity />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
