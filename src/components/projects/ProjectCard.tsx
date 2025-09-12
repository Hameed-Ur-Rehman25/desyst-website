'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  link: string;
  github: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [showAllTech, setShowAllTech] = useState(false);

  const displayedTech = showAllTech ? project.tech : project.tech.slice(0, 3);
  const remainingTechCount = project.tech.length - 3;

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      {/* Project Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={`/${project.image}`}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Project Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {displayedTech.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full border border-blue-200"
            >
              {tech}
            </span>
          ))}
          {!showAllTech && remainingTechCount > 0 && (
            <button
              onClick={() => setShowAllTech(true)}
              className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full border border-gray-200 hover:bg-gray-200 hover:text-gray-700 transition-colors cursor-pointer"
            >
              +{remainingTechCount} more
            </button>
          )}
          {showAllTech && project.tech.length > 3 && (
            <button
              onClick={() => setShowAllTech(false)}
              className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full border border-gray-200 hover:bg-gray-200 hover:text-gray-700 transition-colors cursor-pointer"
            >
              Show less
            </button>
          )}
        </div>

        {/* Date and Visit Button */}
        <div className="flex items-center justify-between">
          <span className="text-gray-500 text-sm">
            {new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
          </span>
          
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white text-sm font-semibold rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
          >
            Visit
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
