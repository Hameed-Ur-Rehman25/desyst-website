import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
// Make sure the ProjectsGrid component exists at the specified path.
// If it does not, either create it or update the import path accordingly.
import ProjectsGrid from '@/components/projects/ProjectsGrid';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2a1458] via-[#1F1147] to-[#0f051d] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:14px_14px] opacity-30" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
      </div>

      {/* Dynamic Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl animate-float-reverse" />
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl animate-float-slow delay-1000" />
      </div>

      <Navbar />
      {/* Add top padding to account for fixed navbar */}
      <div className="relative pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Page Header */}
          <div className="text-center mb-24">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-700 bg-clip-text text-transparent mb-8">
              Our Projects
            </h1>
          </div>
          
          {/* Projects Grid */}
          <ProjectsGrid />
        </div>
      </div>
    </div>
  );
}
