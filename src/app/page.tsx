// src/app/page.tsx
import Hero from '@/components/hero/Hero';
import Navbar from '@/components/Navbar/Navbar';
import Services from '@/components/services/Services';
import Projects from '@/components/projects/Project';
import Team from '@/components/team/Team';
import Contact from '@/components/contact/ContactForm';

export default function Home() {
  return (
    <section id = "home">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      {/* <Team />
      <Contact /> */}
    </section>
  );
}