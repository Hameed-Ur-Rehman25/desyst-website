'use client';

import React from 'react';

// Shimmer loading component with purple theme
export const ShimmerCard = () => (
  <div className="animate-pulse">
    <div className="bg-gradient-to-r from-[#2A1458] via-[#1F1147] to-[#2A1458] rounded-lg p-6 space-y-4">
      {/* Header shimmer */}
      <div className="flex items-center space-x-3">
        <div className="h-8 w-8 shimmer rounded-full"></div>
        <div className="h-4 shimmer rounded w-24"></div>
      </div>
      
      {/* Title shimmer */}
      <div className="space-y-2">
        <div className="h-6 shimmer rounded w-3/4"></div>
        <div className="h-6 shimmer rounded w-1/2"></div>
      </div>
      
      {/* Content shimmer */}
      <div className="space-y-2">
        <div className="h-4 shimmer rounded w-full"></div>
        <div className="h-4 shimmer rounded w-5/6"></div>
        <div className="h-4 shimmer rounded w-4/6"></div>
      </div>
      
      {/* Button shimmer */}
      <div className="h-10 shimmer rounded-lg w-32"></div>
    </div>
  </div>
);

// Shimmer for hero section
export const ShimmerHero = () => (
  <div className="min-h-[200vh] md:min-h-[300vh] bg-gradient-to-br from-[#0A0118] via-[#1A0B2E] to-[#1F1147] py-20 md:py-40">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="animate-pulse space-y-8">
        {/* Header shimmer */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-lg rounded-full px-4 py-2 border border-white/10">
            <div className="w-2 h-2 bg-gradient-to-r from-violet-400/30 to-fuchsia-400/30 rounded-full animate-pulse"></div>
            <div className="h-4 bg-gradient-to-r from-violet-400/30 to-fuchsia-400/30 rounded w-32"></div>
          </div>
          
          <div className="space-y-4">
            <div className="h-16 md:h-20 bg-gradient-to-r from-violet-400/20 to-fuchsia-400/20 rounded w-3/4 mx-auto"></div>
            <div className="h-16 md:h-20 bg-gradient-to-r from-violet-400/20 to-fuchsia-400/20 rounded w-1/2 mx-auto"></div>
          </div>
          
          <div className="h-6 bg-gradient-to-r from-violet-400/20 to-fuchsia-400/20 rounded w-2/3 mx-auto"></div>
          
          {/* Stats shimmer */}
          <div className="flex items-center justify-center gap-8 mt-8">
            <div className="text-center space-y-2">
              <div className="h-8 bg-gradient-to-r from-violet-400/20 to-fuchsia-400/20 rounded w-16"></div>
              <div className="h-4 bg-gradient-to-r from-violet-400/20 to-fuchsia-400/20 rounded w-20"></div>
            </div>
            <div className="h-12 w-px bg-gradient-to-b from-violet-500/20 via-fuchsia-500/30 to-indigo-500/20"></div>
            <div className="text-center space-y-2">
              <div className="h-8 bg-gradient-to-r from-violet-400/20 to-fuchsia-400/20 rounded w-16"></div>
              <div className="h-4 bg-gradient-to-r from-violet-400/20 to-fuchsia-400/20 rounded w-20"></div>
            </div>
            <div className="h-12 w-px bg-gradient-to-b from-violet-500/20 via-fuchsia-500/30 to-indigo-500/20"></div>
            <div className="text-center space-y-2">
              <div className="h-8 bg-gradient-to-r from-violet-400/20 to-fuchsia-400/20 rounded w-16"></div>
              <div className="h-4 bg-gradient-to-r from-violet-400/20 to-fuchsia-400/20 rounded w-20"></div>
            </div>
          </div>
        </div>
        
        {/* Cards shimmer */}
        <div className="space-y-12">
          <div className="flex gap-4 overflow-x-auto">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex-shrink-0 w-80 h-72 bg-gradient-to-r from-violet-400/10 to-fuchsia-400/10 rounded-lg animate-pulse"></div>
            ))}
          </div>
          <div className="flex gap-4 overflow-x-auto">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex-shrink-0 w-80 h-72 bg-gradient-to-r from-violet-400/10 to-fuchsia-400/10 rounded-lg animate-pulse"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Shimmer for team section
export const ShimmerTeam = () => (
  <div className="min-h-screen bg-gradient-to-b from-[#2a1458] via-[#1F1147] to-[#0f051d] py-16">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="animate-pulse space-y-12">
        {/* Header shimmer */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-lg rounded-full px-4 py-2 border border-white/10">
            <div className="w-2 h-2 bg-gradient-to-r from-violet-400/30 to-fuchsia-400/30 rounded-full animate-pulse"></div>
            <div className="h-4 bg-gradient-to-r from-violet-400/30 to-fuchsia-400/30 rounded w-24"></div>
          </div>
          <div className="h-16 bg-gradient-to-r from-violet-400/20 to-fuchsia-400/20 rounded w-48 mx-auto"></div>
        </div>
        
        {/* Team card shimmer */}
        <div className="max-w-sm mx-auto px-4 py-12">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="h-80 w-full bg-gradient-to-r from-violet-400/10 to-fuchsia-400/10 rounded-3xl animate-pulse"></div>
            <div className="space-y-4">
              <div className="h-8 bg-gradient-to-r from-violet-400/20 to-fuchsia-400/20 rounded w-3/4"></div>
              <div className="h-4 bg-gradient-to-r from-violet-400/20 to-fuchsia-400/20 rounded w-1/2"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gradient-to-r from-violet-400/20 to-fuchsia-400/20 rounded w-full"></div>
                <div className="h-4 bg-gradient-to-r from-violet-400/20 to-fuchsia-400/20 rounded w-5/6"></div>
                <div className="h-4 bg-gradient-to-r from-violet-400/20 to-fuchsia-400/20 rounded w-4/6"></div>
              </div>
              <div className="flex gap-3">
                <div className="h-10 w-10 bg-gradient-to-r from-violet-400/20 to-fuchsia-400/20 rounded-full"></div>
                <div className="h-10 w-10 bg-gradient-to-r from-violet-400/20 to-fuchsia-400/20 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Shimmer for AI solutions section
export const ShimmerAISolutions = () => (
  <div className="relative bg-gradient-to-b from-[#2A1458] via-[#1F1147] to-[#2a1458] py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="animate-pulse space-y-16">
        {/* Header shimmer */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-lg rounded-full px-4 py-2 border border-white/10">
            <div className="w-2 h-2 bg-gradient-to-r from-violet-400/30 to-fuchsia-400/30 rounded-full animate-pulse"></div>
            <div className="h-4 bg-gradient-to-r from-violet-400/30 to-fuchsia-400/30 rounded w-24"></div>
          </div>
          <div className="h-16 bg-gradient-to-r from-violet-400/20 to-fuchsia-400/20 rounded w-64 mx-auto"></div>
          <div className="h-6 bg-gradient-to-r from-violet-400/20 to-fuchsia-400/20 rounded w-2/3 mx-auto"></div>
        </div>
        
        {/* Cards shimmer */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 h-96 bg-gradient-to-r from-violet-400/10 to-fuchsia-400/10 rounded-lg animate-pulse"></div>
          <div className="h-96 bg-gradient-to-r from-violet-400/10 to-fuchsia-400/10 rounded-lg animate-pulse"></div>
          <div className="lg:col-span-3 h-96 bg-gradient-to-r from-violet-400/10 to-fuchsia-400/10 rounded-lg animate-pulse"></div>
        </div>
      </div>
    </div>
  </div>
);
