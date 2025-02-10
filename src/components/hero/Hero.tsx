'use client';
import React from 'react';

export default function Hero() {
  return (
    // Add pt-20 to account for navbar height
    <div className="relative min-h-screen pt-20 bg-gradient-to-br from-[#0A0118] via-[#1A0B2E] to-[#1F1147] overflow-hidden">
      {/* Ambient background effects */}
      <div className="absolute inset-0 top-20"> {/* Adjust top to match navbar */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_50%)]" />
        </div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.1),transparent_25%)]" />
      </div>

      {/* Floating accent elements */}
      <div className="absolute inset-0 top-20 overflow-hidden"> {/* Adjust top to match navbar */}
        <div className="absolute -top-4 left-1/4 w-64 h-64 bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 blur-3xl animate-aurora" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 blur-3xl animate-aurora delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-5rem)]"> {/* Adjust height to account for navbar */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 h-full items-center py-12"> {/* Add padding for better spacing */}
          {/* Content section */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-lg rounded-full px-4 py-2 border border-white/10">
                <span className="w-2 h-2 bg-violet-400 rounded-full animate-glow"></span>
                <span className="text-sm font-medium bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">DeSyst</span>
              </div>
              <h1 className="text-4xl md:text-7xl font-bold tracking-tight leading-none">
                <span className="text-white">Simplify Your</span>
                <span className="block mt-2 bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent animate-gradient">
                  Digital Future
                </span>
              </h1>
              <p className="text-lg text-slate-300/90 leading-relaxed max-w-xl font-light">
                Transform your workflow with AI-powered solutions designed for tomorrow&apos;s challenges.
              </p>
            </div>

            <button className="group relative px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-xl text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/25">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 blur-xl opacity-0 group-hover:opacity-50 transition-opacity" />
              <span className="relative flex items-center justify-center gap-2">
                Get Started
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
          </div>

          {/* Animated visualization - Hide on mobile for better UX */}
          <div className="relative h-full hidden lg:flex items-center justify-center">
            <div className="relative w-[500px] h-[500px]">
              {/* Core orb */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 blur-xl animate-pulse-slow" />
              </div>
              
              {/* Orbital rings */}
              <div className="absolute inset-0 animate-spin-slow">
                <svg className="w-full h-full" viewBox="0 0 500 500">
                  <circle cx="250" cy="250" r="200" fill="none" stroke="url(#orbital-gradient)" strokeWidth="0.5" strokeDasharray="3 3" />
                  <circle cx="250" cy="250" r="160" fill="none" stroke="url(#orbital-gradient)" strokeWidth="0.5" strokeDasharray="3 3" />
                  <circle cx="250" cy="250" r="120" fill="none" stroke="url(#orbital-gradient)" strokeWidth="0.5" strokeDasharray="3 3" />
                  <defs>
                    <linearGradient id="orbital-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
                      <stop offset="50%" stopColor="#D946EF" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Floating particles */}
              <div className="absolute inset-0 animate-spin-reverse-slow">
                <svg className="w-full h-full" viewBox="0 0 500 500">
                  <circle cx="450" cy="250" r="4" fill="#8B5CF6" className="animate-ping" />
                  <circle cx="50" cy="250" r="4" fill="#D946EF" className="animate-ping delay-300" />
                  <circle cx="250" cy="450" r="4" fill="#818CF8" className="animate-ping delay-700" />
                  <circle cx="250" cy="50" r="4" fill="#C084FC" className="animate-ping delay-500" />
                </svg>
              </div>

              {/* Connection lines */}
              <div className="absolute inset-0 animate-pulse-slow">
                <svg className="w-full h-full" viewBox="0 0 500 500">
                  <line x1="250" y1="50" x2="450" y2="250" stroke="url(#line-gradient)" strokeWidth="0.5" />
                  <line x1="450" y1="250" x2="250" y2="450" stroke="url(#line-gradient)" strokeWidth="0.5" />
                  <line x1="250" y1="450" x2="50" y2="250" stroke="url(#line-gradient)" strokeWidth="0.5" />
                  <line x1="50" y1="250" x2="250" y2="50" stroke="url(#line-gradient)" strokeWidth="0.5" />
                  <defs>
                    <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#D946EF" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
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
        @keyframes spin-reverse-slow {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
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
        .animate-spin-reverse-slow { animation: spin-reverse-slow 20s linear infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
      `}</style>
    </div>
  );
}