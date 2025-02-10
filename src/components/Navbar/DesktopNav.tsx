// components/Navbar/DesktopNav.tsx
import Link from 'next/link';
import { MenuItem } from '@/types/menu';

export default function DesktopNav({ menuItems }: { menuItems: MenuItem[] }) {
  return (
    <div className="hidden lg:flex items-center space-x-8">
      {menuItems.map((item, index) => (
        <Link
          key={index}
          href={item.path || '#'}
          className="relative text-gray-800 hover:text-indigo-600 transition-colors group text-sm tracking-wide"
        >
          {item.title}
          <span className="absolute inset-x-0 bottom-0 h-0.5 bg-indigo-600 transform scale-x-0 origin-left transition-transform group-hover:scale-x-100" />
        </Link>
      ))}
      <button className="px-6 py-2 text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full hover:opacity-90 transition-opacity text-sm font-medium">
        Get Started
      </button>
    </div>
  );
}