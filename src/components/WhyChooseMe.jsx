import React from 'react';
import { WHY_CHOOSE_ME } from '../common/constants/config';
import { Zap, Code2, Smartphone, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap = {
  Zap: <Zap size={24} className="text-rose-500 dark:text-rose-400" />,
  Code2: <Code2 size={24} className="text-rose-500 dark:text-rose-400" />,
  Smartphone: <Smartphone size={24} className="text-rose-500 dark:text-rose-400" />,
  Users: <Users size={24} className="text-rose-500 dark:text-rose-400" />
};

export default function WhyChooseMe() {
  return (
    <section id="why-choose-me" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-[#121214] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose <span className="text-rose-500 dark:text-rose-400">Me?</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I deliver high-quality code and client-focused solutions that match your specific business requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_ME.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-gray-100 dark:border-zinc-800 shadow-sm text-center flex flex-col items-center hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-12 h-12 bg-rose-50 dark:bg-rose-500/10 rounded-full flex items-center justify-center mb-4">
                {iconMap[item.icon]}
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
