import React, { useState, useMemo } from 'react';
import { IconType } from 'react-icons';
import { SiPytorch, SiHuggingface, SiNextdotjs, SiVercel, SiTensorflow, SiReact, SiOpenai, SiGooglecloud, SiThreedotjs } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { FaBrain } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    title: 'KAI Voice Agent',
    description: 'A voice agent that can help you with your daily tasks and answer your questions. It is built with Next.js, Vercel, and the OpenAI API.',
    tags: ['Next.js', 'Vercel', 'Livekit', 'Gemini'],
    category: 'Generative AI',
    image: '/kai.png',
  },
  {
    title: 'Salespeak',
    description: 'An adaptive user interface that learns from user behavior to personalize layouts and workflows in real-time.',
    tags: ['TensorFlow.js', 'React', 'WebSockets'],
    category: 'Interactive UI',
    image: 'https://picsum.photos/seed/sentient/800/600',
  },
  {
    title: '20 Punches',
    description: 'A multi-modal AI assistant that understands and responds to a combination of text, voice, and visual cues.',
    tags: ['OpenAI API', 'Google Cloud Speech', 'Three.js'],
    category: 'Multi-modal Systems',
    image: 'https://picsum.photos/seed/chimera/800/600',
  },
  {
    title: 'ECOTEK',
    description: 'Exploring the frontiers of AI with another exciting project.',
    tags: ['PyTorch', 'Next.js'],
    category: 'Generative AI',
    image: 'https://picsum.photos/seed/another/800/600',
  },{
    title: 'Side Projects',
    description: 'Exploring the frontiers of AI with another exciting project.',
    tags: ['PyTorch', 'Next.js'],
    category: 'Generative AI',
    image: 'https://picsum.photos/seed/another/800/600',
  },
];

const categories = ['All', 'Generative AI', 'Interactive UI', 'Multi-modal Systems'];

const TechIcon = ({ tag }: { tag: string }) => {
  const iconMap: { [key: string]: IconType } = {
    'PyTorch': SiPytorch,
    'Hugging Face': SiHuggingface,
    'Next.js': SiNextdotjs,
    'Vercel': SiVercel,
    'TensorFlow.js': SiTensorflow,
    'React': SiReact,
    'WebSockets': BsGlobe,
    'OpenAI API': SiOpenai,
    'Google Cloud Speech': SiGooglecloud,
    'Three.js': SiThreedotjs,
  };
  const Icon = iconMap[tag] || FaBrain;
  return <Icon className="inline-block mr-2"/>;
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') {
      return projects;
    }
    return projects.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="projects" className="min-h-screen flex flex-col items-center justify-center bg-transparent text-white relative z-10 py-20 container mx-auto">
      <div className="max-w-4xl mx-auto text-center p-4" style={{ textShadow: '0 0 10px rgba(0,0,0,0.7)' }}>
        <h2 className="text-4xl md:text-5xl font-bold mb-8">What I&apos;ve built</h2>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-base font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-[#38A391] text-white shadow-lg'
                  : 'bg-slate-800/70 text-white/70 hover:bg-slate-700/90'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className="flex flex-col gap-12">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="rounded-lg p-px bg-gradient-to-bl from-[#38A391] via-transparent to-transparent hover:from-[#38A391]/80"
              >
                <div className="relative bg-gradient-to-b from-slate-900/90 to-slate-900/70 backdrop-blur-xl rounded-lg p-8 text-left h-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title} background image`}
                    layout="fill"
                    className="absolute inset-0 w-full h-full object-cover opacity-5 blur-md scale-110 transition-transform duration-500 group-hover:scale-100"
                  />
                  <div className="relative">
                    <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                    <p className="text-lg mb-6">{project.description}</p>
                    <div className="flex flex-wrap gap-4 items-center">
                      {project.tags.map(tag => (
                        <div key={tag} className="flex items-center bg-white/10 text-sm font-semibold px-4 py-2 rounded-full">
                          <TechIcon tag={tag} />
                          <span>{tag}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
