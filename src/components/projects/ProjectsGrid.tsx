import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '@/data/project-data';

interface ProjectsGridProps {
  serviceFilter?: string | null;
}

const ProjectsGrid = ({ serviceFilter }: ProjectsGridProps) => {
  // Filter projects based on service category
  const filteredProjects = serviceFilter 
    ? projects.filter(project => project.category === serviceFilter)
    : projects;

  return (
    <div>
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 lg:gap-16 pb-32">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-xl text-gray-400">No projects found for this service category.</p>
          <p className="text-sm text-gray-500 mt-2">Check back later for updates!</p>
        </div>
      )}
    </div>
  );
};

export default ProjectsGrid;
