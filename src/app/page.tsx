// src/app/page.tsx
import Hero from '@/components/hero/Hero';
import Navbar from '@/components/Navbar/Navbar';
import Services from '@/components/services/Services';
import Projects from '@/components/projects/Project';
import Team from '@/components/team/Team';
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Team />
    </main>
  );
}