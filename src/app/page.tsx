// src/app/page.tsx
import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Services from '@/components/services/Services';
import Team from '@/components/team/Team';
import Reviews from '@/components/reviews/Reviews';
import Contact from '@/components/contact/ContactForm';
import { 
  LazyHeroParallax, 
  LazyWobbleCardDemo, 
  LazyCoverDemo,
  SuspenseWrapper 
} from '@/components/LazyComponents';

export default function Home() {
  return (
    <section id = "home">
      <Navbar />
      <SuspenseWrapper>
        <LazyHeroParallax />
      </SuspenseWrapper>
      <Services />
      <SuspenseWrapper>
        <LazyCoverDemo />
      </SuspenseWrapper>
      <SuspenseWrapper>
        <LazyWobbleCardDemo />
      </SuspenseWrapper>
      <Team />
      <Reviews />
      <Contact />
    </section>
  );
}