import React from "react";
import { Cover } from "@/components/ui/cover";
import { coverDemoContent } from "@/data/constants/cover-demo";

export default function CoverDemo() {
  return (
    <div className="relative py-20 bg-gradient-to-b from-[#0A0118] via-[#1A0B2E] to-[#2A1458] overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_50%)]" />
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.1),transparent_25%)]" />
      </div>
      
      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-slate-200 to-slate-400 dark:from-neutral-800 dark:via-white dark:to-white leading-tight">
          {coverDemoContent.title.part1} <br /> 
          with <Cover>{coverDemoContent.title.part2}</Cover> {coverDemoContent.title.part3}
        </h1>
        
        <p className="text-lg md:text-xl text-slate-300/90 text-center max-w-3xl mx-auto mt-6 leading-relaxed">
          {coverDemoContent.description}
        </p>
      </div>
    </div>
  );
}
