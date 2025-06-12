import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    quote: "Working with them was a transformative experience. Their expertise in AI and design resulted in a product that exceeded all our expectations.",
    name: "Jane Doe",
    title: "CEO, Innovate Inc.",
    image: "https://i.pravatar.cc/150?img=1"
  },
  {
    quote: "The attention to detail and creative problem-solving were outstanding. They are not just developers; they are true partners in innovation.",
    name: "John Smith",
    title: "CTO, Future Forward",
    image: "https://i.pravatar.cc/150?img=2"
  },
  {
    quote: "An unparalleled ability to turn complex concepts into beautiful, intuitive user interfaces. I can't recommend them highly enough.",
    name: "Alex Johnson",
    title: "Lead Designer, Creative Solutions",
    image: "https://i.pravatar.cc/150?img=3"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative z-10 text-white bg-transparent py-20 container mx-auto">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="mb-16 text-4xl md:text-5xl font-bold text-center"
          style={{ textShadow: '0 0 10px rgba(0,0,0,0.7)' }}
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          What Others Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="rounded-lg p-px bg-gradient-to-br from-[#38A391]/50 via-transparent to-transparent"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-slate-900/80 backdrop-blur-xl rounded-lg p-8 h-full flex flex-col items-center text-center">
                <Image src={testimonial.image} alt={testimonial.name} className="w-24 h-24 rounded-full mb-6 border-2 border-[#38A391]/70" width={96} height={96} />
                <p className="text-lg italic text-white/80 mb-6 flex-grow">&quot;{testimonial.quote}&quot;</p>
                <div>
                  <h3 className="font-bold text-xl text-[#38A391]">{testimonial.name}</h3>
                  <p className="font-light text-white/60">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 