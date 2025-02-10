'use client';
import React from 'react';
import { Shield, Cloud, Cpu, BarChart } from 'lucide-react';
import { services } from '@/data/service-data';

const getIcon = (iconName: string) => {
  const icons = {
    shield: <Shield className="w-7 h-7" />,
    cloud: <Cloud className="w-7 h-7" />,
    cpu: <Cpu className="w-7 h-7" />,
    'bar-chart': <BarChart className="w-7 h-7" />
  };
  return icons[iconName as keyof typeof icons] || null;
};

export default function Services() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 py-24 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1e1b4b_1px,transparent_1px)] [background-size:32px_32px] opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 to-transparent">
          <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-indigo-500/10 blur-3xl" />
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-1/3 right-1/2 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-float-slow animation-delay-2000" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header section with animation */}
        <div className="mx-auto max-w-3xl text-center animate-fade-in">
          <div className="inline-flex items-center space-x-2 rounded-full bg-white/5 px-4 py-1 ring-1 ring-white/10 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
            <span className="text-sm font-medium text-indigo-400">Innovative Solutions</span>
          </div>
          
          <h1 className="mt-8 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Enterprise Solutions
            <span className="block mt-2 bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
              Engineered for Tomorrow
            </span>
          </h1>
          
          <p className="mt-6 text-lg leading-8 text-gray-300 max-w-2xl mx-auto">
            Experience next-generation technology solutions designed to transform your business operations and drive innovation.
          </p>
        </div>

        {/* Services grid with staggered animation */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative flex flex-col rounded-3xl bg-white/5 backdrop-blur-sm p-8 ring-1 ring-white/10 hover:ring-indigo-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10 animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/5 via-violet-500/5 to-purple-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              
              <div className="flex items-center gap-x-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/10 via-violet-500/10 to-purple-500/10 group-hover:from-indigo-500/20 group-hover:via-violet-500/20 group-hover:to-purple-500/20 transition-colors duration-500">
                  <div className="text-indigo-400 group-hover:text-indigo-300 transition-colors duration-500">
                    {getIcon(service.icon)}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white tracking-tight group-hover:text-indigo-300 transition-colors duration-500">
                  {service.title}
                </h3>
              </div>

              <p className="mt-4 text-base text-gray-300 leading-relaxed">
                {service.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="inline-flex items-center rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-medium text-indigo-300 group-hover:bg-indigo-500/20 transition-colors duration-300"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-10px, 10px) scale(1.05); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-float-slow { animation: float-slow 15s infinite; }
        .animate-fade-in { animation: fade-in 1s ease-out forwards; }
        .animate-fade-up { animation: fade-up 1s ease-out forwards; }
        .animate-gradient { 
          background-size: 200% auto;
          animation: gradient 8s linear infinite;
        }
        .animation-delay-2000 { animation-delay: 2s; }
      `}</style>
    </div>
  );
}