import React, { useState } from 'react';
import { PROJECT_DETAILS } from '../common/constants/config';
import { MessageSquare, ArrowRight } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const { name, mobile, message } = formData;
    
    // Construct the WhatsApp message
    const whatsappMessage = `Hello Nethaji,\n\nMy Name is: ${name}\nMobile: ${mobile}\n\nMessage: ${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Change out this number to the actual WhatsApp number
    const whatsappNumber = PROJECT_DETAILS.whatsappNumber || "919025888240"; 
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#09090b] transition-colors duration-300 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-rose-300/20 dark:bg-rose-900/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto z-10 animate-fade-in-up">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-6">
            Let's work <span className="text-rose-500 dark:text-rose-400">together</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            I'm currently available for freelance work. Fill out the form below to send me a direct message on WhatsApp.
          </p>
        </div>

        <form onSubmit={handleWhatsAppSubmit} className="max-w-xl mx-auto bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm p-8 rounded-3xl border border-gray-100 dark:border-zinc-800 shadow-xl">
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Client Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-zinc-950 border border-gray-200 dark:border-zinc-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all outline-none"
              />
            </div>
            
            <div>
              <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Mobile Number</label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                required
                value={formData.mobile}
                onChange={handleChange}
                placeholder="+91 90258 88240"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-zinc-950 border border-gray-200 dark:border-zinc-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all outline-none"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-zinc-950 border border-gray-200 dark:border-zinc-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all outline-none resize-none"
              />
            </div>

            <button 
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-4 rounded-xl font-medium hover:bg-rose-500 dark:hover:bg-rose-400 transition-all duration-300 shadow-lg hover:shadow-rose-500/25 group"
            >
              <MessageSquare size={18} />
              Send via WhatsApp
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform ml-2" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
