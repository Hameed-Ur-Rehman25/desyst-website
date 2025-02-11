'use client';
import React from 'react';

export default function Hero() {
  const scrollToServices = () => {
    const servicesSection = document.querySelector('#services');
    if (servicesSection) {
      const offsetTop = servicesSection.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative min-h-screen pt-20 bg-gradient-to-br from-[#0A0118] via-[#1A0B2E] to-[#1F1147] overflow-hidden">
      {/* Background effects - Lower z-index */}
      <div className="absolute inset-0 top-20 -z-10">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_50%)]" />
        </div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.1),transparent_25%)]" />
      </div>

      {/* Accent elements - Lower z-index */}
      <div className="absolute inset-0 top-20 overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-4 left-1/4 w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 blur-3xl animate-aurora" />
        <div className="absolute top-1/3 right-1/4 w-56 h-56 md:w-72 md:h-72 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 blur-3xl animate-aurora delay-1000" />
      </div>

      {/* Main content - Higher z-index */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-5rem)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 h-full items-center py-8 md:py-12">
          {/* Content section */}
          <div className="relative z-20 space-y-6 md:space-y-8 text-center lg:text-left animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-lg rounded-full px-4 py-2 border border-white/10">
              <span className="w-2 h-2 bg-violet-400 rounded-full animate-glow"></span>
              <span className="text-sm font-medium bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">DeSyst</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-none">
              <span className="text-white">Simplify Your</span>
              <span className="block mt-2 bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent animate-gradient">
                Digital Future
              </span>
            </h1>
            
            <p className="text-base md:text-lg text-slate-300/90 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
              Transform your workflow with AI-powered solutions designed for tomorrow&apos;s challenges.
            </p>

            {/* Button container with explicit z-index */}
            <div className="relative z-20 flex justify-center lg:justify-start space-x-4">
              <button 
                onClick={scrollToServices}
                className="relative z-20 group px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-xl text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/25 cursor-pointer"
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 blur-xl opacity-0 group-hover:opacity-50 transition-opacity" />
                <span className="relative flex items-center justify-center gap-2">
                  Get Started
                  <svg className="w-4 h-4 md:w-5 md:h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
            </div>

            {/* Mobile-only visualization */}
            <div className="block lg:hidden mt-8">
              <div className="relative mx-auto w-64 h-64 sm:w-72 sm:h-72">
                <svg className="w-full h-full" viewBox="0 0 300 300">
                  <defs>
                    <linearGradient id="mobile-sphere" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgba(139, 92, 246, 0.2)" />
                      <stop offset="100%" stopColor="rgba(217, 70, 239, 0.2)" />
                    </linearGradient>
                    <pattern id="mobile-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                      <circle cx="2" cy="2" r="1" fill="rgba(139, 92, 246, 0.3)" />
                    </pattern>
                  </defs>
                  
                  {/* Background pattern */}
                  <rect width="100%" height="100%" fill="url(#mobile-dots)" className="animate-pulse-slow" />
                  
                  {/* Central sphere */}
                  <circle cx="150" cy="150" r="80" fill="url(#mobile-sphere)" className="animate-pulse-slow" />
                  <circle cx="150" cy="150" r="100" fill="none" stroke="rgba(139, 92, 246, 0.2)" strokeWidth="0.5" className="animate-spin-slow" />
                  
                  {/* Orbiting elements */}
                  <g className="animate-spin-slow">
                    <circle cx="150" cy="50" r="4" fill="rgba(139, 92, 246, 0.4)" />
                    <circle cx="250" cy="150" r="4" fill="rgba(217, 70, 239, 0.4)" />
                    <circle cx="150" cy="250" r="4" fill="rgba(168, 85, 247, 0.4)" />
                    <circle cx="50" cy="150" r="4" fill="rgba(129, 140, 248, 0.4)" />
                  </g>
                </svg>

                {/* Floating accent elements */}
                <div className="absolute inset-0">
                  <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-violet-400/30 rounded-full animate-float-delay" />
                  <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-fuchsia-400/30 rounded-full animate-float-delay-2" />
                  <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-indigo-400/30 rounded-full animate-float-delay-3" />
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Animation - Unchanged */}
           <div className="relative z-0 h-full hidden lg:flex items-center justify-center">
            <div className="relative w-[500px] h-[500px] animate-float">
              {/* Main hexagon grid */}
              <div className="absolute inset-0">
                <svg className="w-full h-full" viewBox="0 0 500 500">
                  <defs>
                    <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(139, 92, 246, 0.1)" strokeWidth="0.5" />
                    </pattern>
                    <linearGradient id="sphere-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgba(139, 92, 246, 0.2)" />
                      <stop offset="100%" stopColor="rgba(217, 70, 239, 0.2)" />
                    </linearGradient>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                  <circle cx="250" cy="250" r="150" fill="url(#sphere-gradient)" className="animate-pulse-slow" />
                  <circle cx="250" cy="250" r="100" fill="none" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="0.5" className="animate-spin-slow" />
                </svg>
              </div>

              {/* Floating elements */}
              <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-violet-400/30 rounded-full animate-float-delay" />
                <div className="absolute top-3/4 right-1/4 w-4 h-4 bg-fuchsia-400/30 rounded-full animate-float-delay-2" />
                <div className="absolute top-1/2 right-1/3 w-4 h-4 bg-indigo-400/30 rounded-full animate-float-delay-3" />
              </div>

              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full animate-pulse-slow" viewBox="0 0 500 500">
                <line x1="150" y1="150" x2="350" y2="350" stroke="url(#line-gradient)" strokeWidth="0.5" />
                <line x1="350" y1="150" x2="150" y2="350" stroke="url(#line-gradient)" strokeWidth="0.5" />
                <defs>
                  <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(139, 92, 246, 0.2)" />
                    <stop offset="100%" stopColor="rgba(217, 70, 239, 0.2)" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes aurora {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.5; }
          50% { transform: translate(-10px, 10px) scale(1.1); opacity: 0.7; }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes glow {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delay {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(10px, -10px); }
        }
        @keyframes float-delay-2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-10px, -10px); }
        }
        @keyframes float-delay-3 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(10px, 10px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
        .animate-aurora { animation: aurora 10s ease-in-out infinite; }
        .animate-fade-in { animation: fade-in 1.5s ease-out forwards; }
        .animate-gradient { background-size: 200% auto; animation: gradient 8s linear infinite; }
        .animate-glow { animation: glow 2s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 30s linear infinite; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delay { animation: float-delay 5s ease-in-out infinite; }
        .animate-float-delay-2 { animation: float-delay-2 7s ease-in-out infinite; }
        .animate-float-delay-3 { animation: float-delay-3 6s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
      `}</style>
    </div>
  );
}