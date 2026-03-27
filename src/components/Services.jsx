import React from 'react';
import { SERVICES } from '../common/constants/config';
import { Layers, Building2, Palette } from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap = {
  Layers: <Layers size={32} className="text-rose-500 dark:text-rose-400" />,
  Building2: <Building2 size={32} className="text-rose-500 dark:text-rose-400" />,
  Palette: <Palette size={32} className="text-rose-500 dark:text-rose-400" />
};

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#09090b] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-rose-500 dark:text-rose-400">Services</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive web development solutions designed to scale your business and engage your audience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-gray-50 dark:bg-zinc-900/50 p-8 rounded-2xl border border-gray-100 dark:border-zinc-800 hover:border-rose-500/30 dark:hover:border-rose-500/30 transition-colors shadow-sm hover:shadow-xl hover:shadow-rose-500/5 group"
            >
              <div className="w-16 h-16 bg-white dark:bg-zinc-800 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                {iconMap[service.icon]}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
