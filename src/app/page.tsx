// src/app/page.tsx
import Hero from '@/components/hero/Hero';
import Navbar from '@/components/Navbar/Navbar';
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
    </main>
  );
}