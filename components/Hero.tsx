'use client';

import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import { FaArrowDown } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Hero = () => {
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const subtitleTimer = setTimeout(() => {
      setShowSubtitle(true);
    }, 2500); // Adjusted for typewriter speed

    const arrowTimer = setTimeout(() => {
      setShowArrow(true);
    }, 4500); // Shows up after subtitle animation
    
    return () => {
      clearTimeout(subtitleTimer);
      clearTimeout(arrowTimer);
    };
  }, []);

  return (
    <section id="hero" className="h-screen flex flex-col items-center justify-center bg-transparent text-white relative z-10 container mx-auto">
      <div className="text-center p-4" style={{ textShadow: '0 0 10px rgba(0,0,0,0.7)' }}>
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString('Hi there,<br/>my name is <span style="color: #40E0D0;">Ari</span>')
                .start();
            }}
          />
        </h1>
        {showSubtitle && (
          <motion.p 
            className="text-lg md:text-xl max-w-2xl py-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            I&apos;ve cofounded Salespeak, a startup helping SMBs reach out to and qualify leads using Conversational AI. Sounds interesting?
          </motion.p>
        )}
      </div>
      {showArrow && (
        <div className="absolute bottom-10 animate-bounce">
          <a href="#about" className="text-white">
            <p className='mb-2'>Learn More</p>
            <FaArrowDown size={24} className="mx-auto" />
          </a>
        </div>
      )}
    </section>
  );
};

export default Hero;
