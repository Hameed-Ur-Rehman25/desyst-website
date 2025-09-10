import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
// Make sure the ProjectsGrid component exists at the specified path.
// If it does not, either create it or update the import path accordingly.
import ProjectsGrid from '@/components/projects/ProjectsGrid';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      {/* Add top padding to account for fixed navbar */}
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Page Header */}
          <div className="text-center mb-24">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-700 bg-clip-text text-transparent mb-8">
              Our Projects
            </h1>
            <p className="text-gray-300 text-xl max-w-4xl mx-auto leading-relaxed">
              Discover our innovative solutions and cutting-edge projects that showcase our expertise in AI automation, 
              web development, and modern technology stack implementations.
            </p>
          </div>
          
          {/* Projects Grid */}
          <ProjectsGrid />
        </div>
      </div>
    </div>
  );
}
