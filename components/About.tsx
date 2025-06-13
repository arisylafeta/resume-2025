'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const aboutSections: {
  [key: string]: {
    title: string;
    content: string | React.ReactNode;
    button?: {
      text: string;
      url: string;
    }
  }
} = {
  summary: {
    title: 'Summary',
    content: (
      <div className="space-y-4">
        <p className="text-lg leading-relaxed">
          I&apos;m a <span className="text-[#38A391] font-semibold">founder</span> passionate about building 
          <span className="text-[#38A391] font-semibold"> AI-native applications</span> that push the boundaries of what&apos;s possible.
        </p>
        <p className="text-lg leading-relaxed">
          Currently exploring the fascinating intersection between 
          <span className="text-[#38A391] font-semibold"> Conversational and GUI Agents</span>, 
          where the future of human-computer interaction is being shaped.
        </p>
        <p className="text-lg leading-relaxed">
          When I&apos;m not coding or strategizing the next breakthrough, you&apos;ll find me on the 
          <span className="text-[#38A391] font-semibold"> chess board</span> plotting my next move or on the 
          <span className="text-[#38A391] font-semibold"> BJJ mats</span> perfecting my technique.
        </p>
        <p className="text-lg leading-relaxed font-medium text-white/90">
          I believe the best innovations come from those who never stop learning and challenging themselves.
        </p>
      </div>
    )
  },
  education: {
    title: 'Education',
    content: (
      <div className="space-y-6">
        <div>
          <div className="text-xl font-bold text-[#38A391] italic mb-2">2023-2024</div>
          <div className="text-lg font-semibold italic">Birkbeck, University of London</div>
          <div className="text-white/80">MSc, Quantitative Finance w/ Data Science</div>
        </div>
        <div>
          <div className="text-xl font-bold text-[#38A391] italic mb-2">2018-2022</div>
          <div className="text-lg font-semibold italic">Rochester Institute of Technology</div>
          <div className="text-white/80">BAASc, Web & Mobile Computing in IT</div>
        </div>
      </div>
    )
  },
  //    certifications: {
  //    title: 'Certifications',
  //    content: (
  //      <div className="space-y-6">
  //        <div>
  //          <div className="text-xl font-bold text-[#38A391] italic mb-2">2022</div>
  //          <div className="text-lg font-semibold italic">Stanford University</div>
  //          <div className="text-white/80">Machine Learning</div>
  //        </div>
  //        <div>
  //          <div className="text-xl font-bold text-[#38A391] italic mb-2">2021</div>
  //          <div className="text-lg font-semibold italic">University of Virginia</div>
  //          <div className="text-white/80">Digital Product Management</div>
  //        </div>
  //      </div>
  //    )
  //  },
      experience: {
      title: 'Work Experience',
      content: (
        <div className="space-y-8">
          <div>
            <div className="text-xl font-bold text-[#38A391] italic mb-2">Dec 2024 - Present</div>
            <div className="text-lg font-semibold italic">Co-Founder • SALESPEAK</div>
            <div className="text-white/60 text-sm mb-3">London, England, United Kingdom • Remote</div>
          </div>
          <div>
            <div className="text-xl font-bold text-[#38A391] italic mb-2">Oct 2022 - Sep 2023</div>
            <div className="text-lg font-semibold italic">Quantitative Analyst • Quantera</div>
            <div className="text-white/60 text-sm mb-3">London, England, United Kingdom • On-site</div>
          </div>
          <div>
            <div className="text-xl font-bold text-[#38A391] italic mb-2">Jul 2022 - Sep 2022</div>
            <div className="text-lg font-semibold italic">Machine Learning Intern • Solaborate</div>
            <div className="text-white/60 text-sm mb-3">Pristina, District of Pristina, Kosovo • On-site</div>
          </div>
        </div>
      ),
      button: {
        text: 'Download CV',
        url: '/cv.pdf'
      }
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
              src="/user-picture.png" 
              alt="Ari" 
              className="object-contain w-full h-full rounded-lg shadow-2xl max-h-[600px]"
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
                  <h3 className="text-3xl font-bold mb-4 text-[#38A391]">{aboutSections[activeSection].title}</h3>
                  <div className="text-lg text-white/80">
                    {typeof aboutSections[activeSection].content === 'string' ? (
                      <p>{aboutSections[activeSection].content}</p>
                    ) : (
                      aboutSections[activeSection].content
                    )}
                  </div>
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
