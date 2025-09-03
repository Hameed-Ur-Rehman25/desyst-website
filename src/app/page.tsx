// src/app/page.tsx
import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Services from '@/components/services/Services';
import CoverDemo from '@/components/cover-demo';
import WobbleCardDemo from '@/components/wobble-card-demo';
import HeroParallaxDemo from '@/components/hero-parallax-demo';
import Team from '@/components/team/Team';
import Reviews from '@/components/reviews/Reviews';
import Contact from '@/components/contact/ContactForm';

export default function Home() {
  return (
    <section id = "home">
      <Navbar />
      <HeroParallaxDemo />
      <Services />
      <CoverDemo />
      <WobbleCardDemo />
      <Team />
      <Reviews />
      <Contact />
    </section>
  );
}