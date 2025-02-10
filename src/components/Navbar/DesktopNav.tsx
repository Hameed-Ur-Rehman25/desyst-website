// components/Navbar/DesktopNav.tsx
'use client';
import { MenuItem } from '@/types/menu';
import { useState } from 'react';

export default function DesktopNav({ menuItems, scrolled }: { menuItems: MenuItem[]; scrolled: boolean }) {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const scrollToSection = (path: string) => {
    const element = document.querySelector(path);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="hidden lg:flex items-center gap-2">
      {menuItems.map((item, index) => (
        <button
          key={index}
          onClick={() => {
            if (item.path) {
              scrollToSection(item.path);
            }
            setActiveItem(item.path || null);
          }}
          onMouseEnter={() => setActiveItem(item.path || null)}
          onMouseLeave={() => setActiveItem(null)}
          className={`
            relative px-5 py-2
            text-sm
            font-medium
            tracking-wide
            transition-all
            duration-300
            rounded-full
            ${scrolled 
              ? 'text-gray-200 hover:text-white' 
              : 'text-gray-200 hover:text-white'
            }
            ${activeItem === item.path ? 'bg-white/10' : 'hover:bg-white/5'}
          `}
        >
          {item.title}
          <span className={`
            absolute bottom-0 left-1/2 
            w-12 h-0.5 
            -translate-x-1/2
            transform
            transition-all
            duration-300
            ${activeItem === item.path 
              ? 'bg-gradient-to-r from-violet-400 to-fuchsia-400 opacity-100 scale-100' 
              : 'opacity-0 scale-0'
            }
          `} />
        </button>
      ))}
    </div>
  );
}