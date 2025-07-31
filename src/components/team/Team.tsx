'use client';
import { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { team } from '@/data/team-data';
import Image from 'next/image';

interface SocialLinkProps {
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const SocialLink = ({ href, icon: Icon }: SocialLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative z-10 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer"
  >
    <Icon className="w-5 h-5 text-violet-400 group-hover:text-violet-300 transition-colors" />
  </a>
);

export default function Team() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Helper function to get initials from name
  const getInitials = (name: string) => {
    return name.split(' ').map(part => part[0]).join('');
  };

  return (
    <section id="team" className="relative min-h-screen bg-[radial-gradient(ellipse_at_center,#2a1458_0%,#0f051d_100%)] py-24 overflow-hidden">
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
        <div className={`mx-auto max-w-3xl text-center mb-24 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center space-x-2 rounded-full bg-white/5 px-4 py-1 ring-1 ring-white/10 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-400" />
            </span>
            <span className="text-sm font-medium bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Core Team
            </span>
          </div>
          
          <h2 className="mt-8 text-5xl font-bold text-white sm:text-7xl tracking-tight">
            <span className="relative inline-block">
              <span className="absolute -inset-2 blur-2xl bg-gradient-to-r from-violet-600/20 via-indigo-600/20 to-purple-600/20 animate-pulse-slow" />
              <span className="relative">Visionaries</span>
            </span>
            <span className="relative block mt-2">
              <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                Shaping Tomorrow
              </span>
            </span>
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={member.id}
              className={`group relative rounded-3xl bg-white/5 backdrop-blur-xl p-8 ring-1 ring-white/10 hover:ring-violet-500/50 transition-all duration-700 hover:-translate-y-2 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Image Container */}
              <div className="relative w-32 h-32 mx-auto mb-6">
                {member.image && member.image !== 'https://placehold.co/400x400' ? (
                  // Display actual image if available and not placeholder
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 animate-pulse-slow blur-sm" />
                    <div className="absolute inset-1 rounded-full bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600" />
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="absolute inset-1 rounded-full object-cover"
                      unoptimized
                      onError={(e) => {
                        // Fallback to initials if image fails to load
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center rounded-full p-[2px]">
                      <div className="w-full h-full rounded-full bg-violet-900/50 flex items-center justify-center">
                        <span className="text-2xl font-bold text-white/70">
                          {getInitials(member.name)}
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  // Fallback to gradient avatar with initials
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 animate-pulse-slow blur-sm" />
                    <div className="absolute inset-1 rounded-full bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600" />
                    
                    {/* Display initials in circle */}
                    <div className="absolute inset-0 flex items-center justify-center rounded-full p-[2px]">
                      <div className="w-full h-full rounded-full bg-violet-900/50 flex items-center justify-center">
                        <span className="text-2xl font-bold text-white/70">
                          {getInitials(member.name)}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="text-center space-y-3">
                <h3 className="text-xl font-semibold text-white group-hover:text-violet-400 transition-colors">
                  {member.name}
                </h3>
                <div className="flex items-center justify-center gap-2">
                  <span className="h-px flex-1 bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />
                  <p className="text-sm font-medium text-violet-400">{member.role}</p>
                  <span className="h-px flex-1 bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">{member.bio}</p>

                {/* Social Links */}
                <div className="flex justify-center items-center gap-3 pt-4 relative z-10">
                  <SocialLink href={member.social.github} icon={Github} />
                  <SocialLink href={member.social.linkedin} icon={Linkedin} />
                  <SocialLink href={member.social.twitter} icon={Twitter} />
                </div>
              </div>

              {/* Hover Effects */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-500/5 via-indigo-500/5 to-purple-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
            </div>
          ))}
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