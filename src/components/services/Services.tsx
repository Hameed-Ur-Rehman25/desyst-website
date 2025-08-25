'use client';
import React from 'react';
import { Shield, Cloud, Cpu, BarChart } from 'lucide-react';
import { services } from '@/data/service-data';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';

const getIcon = (iconName: string) => {
  const icons = {
    shield: <Shield className="w-5 h-5" />,
    cloud: <Cloud className="w-5 h-5" />,
    cpu: <Cpu className="w-5 h-5" />,
    'bar-chart': <BarChart className="w-5 h-5" />
  };
  return icons[iconName as keyof typeof icons] || null;
};

export default function Services() {
  return (
    <section id="services" className="relative min-h-screen overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <div className="inline-flex items-center space-x-2 rounded-full bg-white/5 px-4 py-1 ring-1 ring-white/10 backdrop-blur-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              <span className="text-sm font-medium text-purple-400">Innovative Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-semibold text-white">
              Enterprise Solutions <br />
              <span className="text-4xl md:text-6xl font-bold mt-1 leading-none bg-gradient-to-r from-purple-400 via-purple-500 to-purple-700 bg-clip-text text-transparent">
                Engineered For Tomorrow
              </span>
            </h1>
            
            <p className="mt-6 text-lg leading-8 text-gray-300 max-w-2xl mx-auto">
              Experience next-generation technology solutions designed to transform your business operations and drive innovation.
            </p>
          </>
        }
      >
        {/* Services grid inside the card */}
        <div className="h-full w-full bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 rounded-2xl p-4 overflow-auto">
          {/* Animated background inside card */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1e1b4b_1px,transparent_1px)] [background-size:32px_32px] opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 to-transparent">
              <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-indigo-500/10 blur-3xl" />
            </div>
          </div>

          {/* Floating elements inside card */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-float-slow" />
            <div className="absolute top-1/3 right-1/2 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-float-slow animation-delay-2000" />
          </div>

          {/* Services grid with staggered animation */}
          <div className="relative grid grid-cols-1 gap-3 lg:grid-cols-2 xl:grid-cols-2 h-full">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="group relative flex flex-col rounded-2xl bg-white/5 backdrop-blur-sm p-4 ring-1 ring-white/10 hover:ring-indigo-500/50 transition-all duration-300 ease-out hover:shadow-2xl hover:shadow-indigo-500/10"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/5 via-violet-500/5 to-purple-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                
                <div className="flex items-center gap-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/10 via-violet-500/10 to-purple-500/10 group-hover:from-indigo-500/20 group-hover:via-violet-500/20 group-hover:to-purple-500/20 transition-colors duration-500">
                    <div className="text-indigo-400 group-hover:text-indigo-300 transition-colors duration-500">
                      {getIcon(service.icon)}
                    </div>
                  </div>
                  <h3 className="text-base font-semibold text-white tracking-tight group-hover:text-indigo-300 transition-colors duration-500">
                    {service.title}
                  </h3>
                </div>

                <p className="mt-2 text-xs text-gray-300 leading-relaxed line-clamp-2">
                  {service.description}
                </p>

                <div className="mt-3 flex flex-wrap gap-1">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="inline-flex items-center rounded-full bg-indigo-500/10 px-2 py-0.5 text-xs font-medium text-indigo-300 group-hover:bg-indigo-500/20 transition-colors duration-300"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </ContainerScroll>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { 
            transform: translate3d(0, 0, 0) scale3d(1, 1, 1); 
            filter: blur(60px);
            will-change: transform, filter;
          }
          50% { 
            transform: translate3d(-10px, 10px, 0) scale3d(1.02, 1.02, 1); 
            filter: blur(65px);
          }
        }
        
        .animate-float-slow { 
          animation: float-slow 20s ease-in-out infinite;
          will-change: transform, filter;
          backface-visibility: hidden;
        }
        
        .animation-delay-2000 { 
          animation-delay: 2s; 
        }
        
        /* Performance optimizations */
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        .group {
          will-change: transform;
          backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
}