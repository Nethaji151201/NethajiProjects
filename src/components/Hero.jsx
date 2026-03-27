import React from 'react';
import { PROJECT_DETAILS } from '../common/constants/config';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white dark:bg-[#09090b] transition-colors duration-300">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-200/30 dark:bg-rose-900/10 rounded-full blur-[100px] -z-10 mix-blend-multiply dark:mix-blend-lighten pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center z-10">
        <div className="animate-fade-in-up">
          <span className="inline-block py-1 px-3 rounded-full bg-rose-50 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400 text-sm font-semibold tracking-wider mb-6 border border-rose-100 dark:border-rose-500/20 shadow-sm">
            {PROJECT_DETAILS.role}
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-8 leading-tight animate-fade-in-up animation-delay-100">
          {PROJECT_DETAILS.tagline}
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
          {PROJECT_DETAILS.services}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-300">
          <a 
            href="#projects" 
            className="group flex items-center justify-center gap-2 w-full sm:w-auto bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-4 rounded-full font-medium hover:bg-rose-500 dark:hover:bg-rose-400 transition-all duration-300 shadow-lg hover:shadow-rose-500/25"
          >
            View My Work
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#contact" 
            className="w-full sm:w-auto px-8 py-4 rounded-full font-medium text-gray-900 dark:text-white border border-gray-200 dark:border-zinc-800 hover:border-gray-300 dark:hover:border-zinc-700 hover:bg-gray-50 dark:hover:bg-zinc-800 transition-all duration-300"
          >
            Hire Me
          </a>
        </div>
      </div>
    </section>
  );
}
