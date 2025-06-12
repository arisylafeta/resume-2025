'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const aboutSections: {
  [key: string]: {
    title: string;
    content: string;
    button?: {
      text: string;
      url: string;
    }
  }
} = {
  summary: {
    title: 'Summary',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
  },
  education: {
    title: 'Education',
    content: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
  },
  experience: {
    title: 'Work Experience',
    content: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
    button: {
      text: 'Download CV',
      url: '/cv.pdf'
    }
  },
  interests: {
    title: 'Likes and Interests',
    content: `Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.`
  }
};

type AboutSectionKey = keyof typeof aboutSections;

const About = () => {
  const [activeSection, setActiveSection] = useState<AboutSectionKey>('summary');
  const sectionKeys = Object.keys(aboutSections) as AboutSectionKey[];
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start start', 'end end']
  });

  const sectionProgress = useTransform(scrollYProgress, (latest) => {
    const sectionIndex = Math.min(sectionKeys.length - 1, Math.floor(latest * sectionKeys.length));
    return sectionKeys[sectionIndex];
  });

  useEffect(() => {
    return sectionProgress.onChange((latest) => {
      setActiveSection(latest);
    })
  }, [sectionProgress]);

  const timelineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="about" className="relative z-10 text-white bg-transparent container mx-auto">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="mb-12 text-5xl font-bold text-center md:text-6xl"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          Who am I?
        </motion.h2>
        <div className="flex flex-col gap-16 px-4 md:flex-row">
          <div className="py-20 md:w-1/2 md:sticky top-0 h-screen flex items-center justify-center">
            <motion.img 
              src="https://picsum.photos/seed/picsum/400/600" 
              alt="Ari" 
              className="object-cover w-full h-full rounded-lg shadow-2xl max-h-[600px]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
          </div>

          <div ref={scrollRef} className="relative md:w-1/2" style={{ height: `${sectionKeys.length * 100}vh` }}>
            <div className="sticky top-0 flex items-center h-screen">
              <div className="relative w-full pl-12">
                <div className="absolute top-1/2 -translate-y-1/2 -left-4 h-[80vh] w-0.5 bg-white/20">
                   <motion.div className="w-full bg-[#38A391]" style={{ height: timelineHeight }} />
                </div>
                
                <motion.div
                  key={activeSection}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 1 }}
                >
                  <h3 className="text-2xl font-bold mb-4 text-[#38A391]">{aboutSections[activeSection].title}</h3>
                  <p className="text-lg text-white/80">{aboutSections[activeSection].content}</p>
                  {aboutSections[activeSection].button && (
                    <div className="inline-block mt-6 rounded-lg p-px bg-gradient-to-r from-[#38A391] to-transparent group transition-transform duration-300 ease-in-out hover:scale-105">
                       <a
                        href={aboutSections[activeSection].button!.url}
                        download
                        className="block px-6 py-3 text-lg font-semibold text-center text-white transition-colors duration-300 rounded-lg bg-slate-900/80 backdrop-blur-md group-hover:bg-slate-900/95"
                      >
                        {aboutSections[activeSection].button!.text}
                      </a>
                    </div>
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
