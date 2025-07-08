import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Project';
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <>
      <Navbar setActiveSection={setActiveSection} />

      {activeSection === 'home' && <Hero setActiveSection={setActiveSection} />}
      {activeSection === 'about' && <About />}
      {activeSection === 'skills' && <Skills />}
      {activeSection === 'projects' && <Projects />}
      {activeSection === 'contact' && <Contact />}
    </>
  );
}

export default App;
