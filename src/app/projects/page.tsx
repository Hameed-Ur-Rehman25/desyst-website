import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
// Make sure the ProjectsGrid component exists at the specified path.
// If it does not, either create it or update the import path accordingly.
import ProjectsGrid from '@/components/projects/ProjectsGrid';
import Link from 'next/link';
import { services } from '@/data/service-data';

interface ProjectsPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function ProjectsPage({ searchParams }: ProjectsPageProps) {
  const serviceFilter = typeof searchParams?.service === 'string' ? searchParams.service : null;
  
  // Get the service title for display
  const selectedService = serviceFilter 
    ? services.find(s => s.id === serviceFilter)
    : null;

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
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-700 bg-clip-text text-transparent mb-8">
              Our Projects
            </h1>
            
            {/* Filter Indicator */}
            {selectedService && (
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-6 py-2 ring-1 ring-purple-500/20 backdrop-blur-sm">
                  <span className="text-sm font-medium text-purple-300">
                    Showing: {selectedService.title}
                  </span>
                </div>
                <Link 
                  href="/projects"
                  className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 ring-1 ring-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors"
                >
                  <span className="text-sm font-medium text-gray-300">Clear Filter</span>
                  <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </Link>
              </div>
            )}
          </div>
          
          {/* Projects Grid */}
          <ProjectsGrid serviceFilter={serviceFilter} />
        </div>
      </div>
    </div>
  );
}
