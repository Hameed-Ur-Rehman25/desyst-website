'use client';
import { useState, useEffect } from 'react';
import { team } from '@/data/team-data';
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';

export default function Team() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Transform team data to testimonials format
  const testimonials = team.map(member => ({
    quote: member.bio,
    name: member.name,
    designation: member.role,
    src: member.image === 'https://placehold.co/400x400' 
      ? `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D` 
      : member.image,
    social: member.social
  }));

  return (
    <section id="team" className="relative min-h-screen bg-[radial-gradient(ellipse_at_center,#2a1458_0%,#0f051d_100%)] py-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:14px_14px] opacity-30" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
      </div>

      {/* Dynamic Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl animate-float-reverse" />
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl animate-float-slow delay-1000" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className={`mx-auto max-w-3xl text-center mb-12 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center space-x-2 rounded-full bg-white/5 px-4 py-1 ring-1 ring-white/10 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-400" />
            </span>
            <span className="text-sm font-medium bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Core Team
            </span>
          </div>
          
          <h2 className="mt-4 text-5xl font-bold text-white sm:text-7xl tracking-tight">
            <span className="relative inline-block">
              <span className="absolute -inset-2 blur-2xl bg-gradient-to-r from-violet-600/20 via-indigo-600/20 to-purple-600/20 animate-pulse-slow" />
              <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                Our Team
              </span>
            </span>
          </h2>
        </div>

        {/* Animated Testimonials */}
        <div className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
        </div>
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-20px, 20px) scale(1.05); }
        }
        @keyframes float-reverse {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, -20px) scale(1.05); }
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
        .animate-float-slow { animation: float-slow 20s ease-in-out infinite; }
        .animate-float-reverse { animation: float-reverse 20s ease-in-out infinite; }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 8s linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}