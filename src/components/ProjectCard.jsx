import React, { useState } from 'react';
import { Skeleton } from '@mui/material';
import { ExternalLink } from 'lucide-react';

export default function ProjectCard({ project }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="group relative bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-rose-500/10 dark:hover:shadow-rose-500/10 border border-gray-100 dark:border-zinc-800 transition-all duration-300 hover:-translate-y-1">
      {/* Image container with fixed aspect ratio */}
      <div className="relative aspect-video w-full overflow-hidden bg-gray-100 dark:bg-zinc-800">
        {!imageLoaded && (
          <Skeleton 
            variant="rectangular" 
            width="100%" 
            height="100%" 
            animation="wave"
            sx={{ bgcolor: 'rgba(150, 150, 150, 0.1)' }}
          />
        )}
        <img
          src={project.image}
          alt={project.name}
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-gray-900 px-6 py-2 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-rose-50"
          >
            Visit Site
            <ExternalLink size={16} />
          </a>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.name}</h3>
        <p className="text-gray-600 dark:text-gray-400 line-clamp-2">
          {project.description}
        </p>
      </div>
    </div>
  );
}
