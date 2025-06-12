import React, { useState } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically handle the form submission, e.g., send to an API
    console.log('Form data submitted:', formData);
    alert('Thank you for your message!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center bg-transparent text-white relative z-10 py-20">
      <div className="w-full max-w-2xl mx-auto text-center p-4" style={{ textShadow: '0 0 10px rgba(0,0,0,0.7)' }}>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Let&apos;s Build the Future</h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          I&apos;m always open to discussing new projects, creative ideas, or opportunities to collaborate. Feel free to reach out.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-left">
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex-1">
              <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
              <div className="rounded-lg p-px bg-gradient-to-r from-white/10 to-transparent focus-within:from-[#38A391] transition-colors duration-300">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-900/80 rounded-lg p-3 outline-none transition-all duration-300"
                  placeholder="Ada Lovelace"
                />
              </div>
            </div>
            <div className="flex-1">
              <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
              <div className="rounded-lg p-px bg-gradient-to-r from-white/10 to-transparent focus-within:from-[#38A391] transition-colors duration-300">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-900/80 rounded-lg p-3 outline-none transition-all duration-300"
                  placeholder="ada@example.com"
                />
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
            <div className="rounded-lg p-px bg-gradient-to-r from-white/10 to-transparent focus-within:from-[#38A391] transition-colors duration-300">
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-slate-900/80 rounded-lg p-3 outline-none transition-all duration-300"
                placeholder="Let's collaborate on a project..."
              />
            </div>
          </div>
          <div className="w-full md:w-auto self-center rounded-full p-px bg-gradient-to-r from-[#38A391] to-transparent group transition-transform duration-300 ease-in-out hover:scale-105">
            <button type="submit" className="w-full bg-slate-900/80 backdrop-blur-md text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 group-hover:bg-slate-900/95">
              Send Message
            </button>
          </div>
        </form>

        <div className="flex justify-center items-center space-x-6 mt-12">
          <a href="mailto:your-email@example.com" className="group rounded-full bg-white/10 p-4 transition-all duration-300 hover:bg-[#38A391] hover:scale-110" aria-label="Email">
            <FaEnvelope className="h-6 w-6 text-white transition-all duration-300 group-hover:text-slate-900" />
          </a>
          <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="group rounded-full bg-white/10 p-4 transition-all duration-300 hover:bg-[#38A391] hover:scale-110" aria-label="LinkedIn">
            <FaLinkedin className="h-6 w-6 text-white transition-all duration-300 group-hover:text-slate-900" />
          </a>
          <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="group rounded-full bg-white/10 p-4 transition-all duration-300 hover:bg-[#38A391] hover:scale-110" aria-label="GitHub">
            <FaGithub className="h-6 w-6 text-white transition-all duration-300 group-hover:text-slate-900" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
