// src/app/page.tsx
import Hero from '@/components/hero/Hero';
import Navbar from '@/components/Navbar/Navbar';
import Services from '@/components/services/Services';
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
    </main>
  );
}