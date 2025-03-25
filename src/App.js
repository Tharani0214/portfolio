import React from 'react';

import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Footer from './components/Footer';
import Links from './components/Links';
import Resume from './components/Resume';
import Contact from './components/Contact';

import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Achievements />
      <Links/>
      <Resume />
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
