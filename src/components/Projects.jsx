import React from 'react';
import ProjectCard from './ProjectCard';
import { PROJECTS } from '../common/constants/config';

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-[#09090b] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="text-rose-500 dark:text-rose-400">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A selection of my recent work, showcasing modern, responsive, and high-performance web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <div 
              key={project.id} 
              className="animate-fade-in-up"
              style={{ animationDelay: `${(index % 3) * 150}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
