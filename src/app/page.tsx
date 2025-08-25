// src/app/page.tsx
import React from 'react';
import Hero from '@/components/hero/Hero';
import Navbar from '@/components/Navbar/Navbar';
import Projects from '@/components/projects/Project';
import Services from '@/components/services/Services';
import CoverDemo from '@/components/cover-demo';
import Team from '@/components/team/Team';
import Contact from '@/components/contact/ContactForm';

export default function Home() {
  return (
    <section id = "home">
      <Navbar />
      <Hero />
      <Services />
      <CoverDemo />
      <Projects />
      <Team />
      <Contact />
    </section>
  );
}