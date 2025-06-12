'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Scene from '@/components/Scene';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [currentSection, setCurrentSection] = useState('hero');

  const handleSectionChange = (section: string) => {
    setCurrentSection(section);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      const sections = ['hero', 'about', 'projects', 'contact'];
      // An offset to trigger the change when a section is halfway into the viewport
      const offset = window.innerHeight / 2; 

      const current = sections.reduce((acc, id) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - offset) {
          return id;
        }
        return acc;
      }, 'hero');

      setCurrentSection(current);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className="bg-transparent relative">
      <Header currentSection={currentSection} onSectionChange={handleSectionChange} />
      <Scene scrollY={scrollY} />
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </main>
  );
}
