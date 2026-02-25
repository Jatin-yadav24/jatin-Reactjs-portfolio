import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Journey from './components/Journey';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  useEffect(() => {
    // Preloader Failsafe
    const preloader = document.getElementById('preloader');
    if (preloader) {
      setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => preloader.style.display = 'none', 500);
      }, 500);
    }

    // Initialize Particles.js
    if (window.particlesJS) {
      window.particlesJS('particles-js', {
        particles: {
          number: { value: 40, density: { enable: true, value_area: 800 } },
          color: { value: "#2563eb" },
          shape: { type: "circle" },
          opacity: { value: 0.5 },
          size: { value: 3, random: true },
          line_linked: { enable: true, distance: 150, color: "#2563eb", opacity: 0.3, width: 1 },
          move: { enable: true, speed: 2 }
        },
        interactivity: {
          events: { onhover: { enable: true, mode: "grab" }, onclick: { enable: true, mode: "push" } },
          modes: { grab: { distance: 140, line_linked: { opacity: 1 } }, push: { particles_nb: 4 } }
        },
        retina_detect: true
      });
    }
  }, []);

  return (
    <>
      <div id="preloader"><div className="loader"></div></div>
      <div id="particles-js"></div>
      
      <header>
        <Navbar />
      </header>

      <main>
        <Hero />
        <About />
        <Skills />
        <Journey />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
};

export default App;