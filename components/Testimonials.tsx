import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    quote: "Working with Arianit has been a delight. Their intellect shines as they effortlessly decode intricate concepts, making them accessible to everyone. Their programming skills are remarkable, modelling and automating complex tasks; and as a friend, they're always warm, supportive, and ever-helpful",
    name: "Lorenzo Mantilla Gutierrez",
    title: "RBC BlueBay, Analyst",
    image: "https://i.pravatar.cc/150?img=1"
  },
  {
    quote: "Having worked closely with Arianit, I've witnessed their unwavering passion for financial markets. Their exceptional work ethic and ability to derive actionable insights from data are truly remarkable. They possess a rare talent for simplifying complex concepts, ensuring comprehension by all stakeholders.",
    name: "Peter Millington",
    title: "Santander, Head of Markets",
    image: "https://i.pravatar.cc/150?img=2"
  },
  {
    quote: "Arianit has always been eager to explore new subjects and put them to the test. He will always try to see how to apply things directly from the classroom into the real world. His coding skills and his ability to comprehend deep and complex concepts will enable him to integrate seamlessly into a variety of different teams.",
    name: "Nikos Gakis",
    title: "BNP Paribas, Analyst",
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
          Here&apos;s what others say about me
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