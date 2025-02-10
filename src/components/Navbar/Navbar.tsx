// components/Navbar/Navbar.tsx
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { menuItems } from '@/data/menuItems';
import MobileMenu from '@/components/Navbar/MobileMenu';
import DesktopNav from '@/components/Navbar/DesktopNav';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`
        fixed w-full z-50 
        transition-all duration-300
        ${scrolled 
          ? 'bg-[#1A0B2E]/90 backdrop-blur-md border-b border-white/5 shadow-lg shadow-purple-900/10' 
          : 'bg-transparent'
        }
      `}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link 
              href="/" 
              className={`
                text-2xl font-bold 
                bg-gradient-to-r from-violet-400 to-fuchsia-400 
                bg-clip-text text-transparent 
                hover:opacity-80 
                transition-opacity duration-300
                z-50
              `}
            >
              Desyst
            </Link>

            <DesktopNav menuItems={menuItems} scrolled={scrolled} />

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`
                lg:hidden p-2 
                rounded-lg 
                transition-colors duration-300
                hover:bg-white/5
                ${scrolled 
                  ? 'text-gray-300 hover:text-white' 
                  : 'text-gray-200 hover:text-white'
                }
              `}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>

      <MobileMenu 
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        menuItems={menuItems}
      />
    </>
  );
}