'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '@/data/project-data';

export default function Projects() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="projects" className="relative min-h-screen bg-[radial-gradient(ellipse_at_top,#1a0b2e_0%,#0f051d_100%)] py-24 overflow-hidden">
      {/* Grid Pattern */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:14px_14px] opacity-40" />
      
      {/* Gradient Lines */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-3xl animate-drift-1" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl animate-drift-2" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className={`mx-auto max-w-3xl text-center mb-24 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center space-x-2 rounded-full bg-white/5 px-4 py-1 ring-1 ring-white/10">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-400" />
            </span>
            <span className="text-sm font-medium bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Our Projects
            </span>
          </div>
          
          <h2 className="mt-8 text-5xl font-bold text-white sm:text-7xl tracking-tight">
            <span className="relative">
              <span className="absolute -inset-2 blur-2xl bg-gradient-to-r from-violet-600/20 via-indigo-600/20 to-purple-600/20 animate-pulse-slow" />
              <span className="relative">Building The</span>
            </span>
            <span className="relative block mt-2">
              <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                Future of Tech
              </span>
            </span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative rounded-3xl bg-white/5 backdrop-blur-xl p-6 ring-1 ring-white/10 hover:ring-violet-500/50 transition-all duration-700 hover:-translate-y-1 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Project Image */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-white group-hover:text-violet-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-full bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-400 ring-1 ring-violet-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm relative">
                      Live Demo
                      <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-violet-500/0 via-violet-500/70 to-violet-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </span>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm relative">
                      Source
                      <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-violet-500/0 via-violet-500/70 to-violet-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes drift-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-30px, 20px) scale(1.05); }
        }
        @keyframes drift-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -20px) scale(1.05); }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.6; }
        }
        .animate-drift-1 { animation: drift-1 25s ease-in-out infinite; }
        .animate-drift-2 { animation: drift-2 25s ease-in-out infinite; }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 8s linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}