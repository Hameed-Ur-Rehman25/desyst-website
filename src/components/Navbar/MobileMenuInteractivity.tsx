// components/Navbar/MobileMenuInteractivity.tsx
'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { MenuItem } from '@/types/menu';
import { ChevronDown } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  menuItems: MenuItem[];
}

export default function MobileMenuInteractivity({ isOpen, onClose, menuItems }: Props) {
  const [openMenus, setOpenMenus] = useState(new Set<number>());
  const [openNestedMenus, setOpenNestedMenus] = useState(new Set<string>());
  const router = useRouter();

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const toggleSubMenu = (index: number) => {
    const newOpenMenus = new Set(openMenus);
    if (newOpenMenus.has(index)) newOpenMenus.delete(index);
    else newOpenMenus.add(index);
    setOpenMenus(newOpenMenus);
  };

  const toggleNestedMenu = (parentIndex: number, childIndex: number) => {
    const menuKey = `${parentIndex}-${childIndex}`;
    const newNestedMenus = new Set(openNestedMenus);
    if (newNestedMenus.has(menuKey)) newNestedMenus.delete(menuKey);
    else newNestedMenus.add(menuKey);
    setOpenNestedMenus(newNestedMenus);
  };

  const handleNavigation = (path: string) => {
    router.push(path);
    onClose();
    setOpenMenus(new Set());
    setOpenNestedMenus(new Set());
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-x-0 top-0 z-50 bg-white">
      <div className="flex items-center justify-between p-6 border-b">
        <div className="flex-1 text-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
            NOVA
          </span>
        </div>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <nav className="py-4">
        {menuItems.map((item, index) => (
          <div key={index} className="border-b border-gray-100">
            <div className="relative flex items-center justify-center px-6 py-4">
              <button
                onClick={() => item.subItems ? toggleSubMenu(index) : item.path && handleNavigation(item.path)}
                className="text-base font-semibold text-gray-800"
              >
                {item.title}
              </button>
              {item.subItems && (
                <ChevronDown 
                  className={`absolute right-6 w-5 h-5 text-gray-500 transition-transform duration-200 ${
                    openMenus.has(index) ? 'rotate-180' : ''
                  }`}
                  onClick={() => toggleSubMenu(index)}
                />
              )}
            </div>

            {item.subItems && openMenus.has(index) && (
              <div className="bg-gray-50">
                {item.subItems.map((subItem, subIndex) => (
                  <div key={subIndex}>
                    <div className="flex items-center justify-center relative px-8 py-3">
                      <button
                        onClick={() => subItem.subItems ? toggleNestedMenu(index, subIndex) : subItem.path && handleNavigation(subItem.path)}
                        className="text-sm text-gray-700"
                      >
                        {subItem.title}
                      </button>
                      {subItem.subItems && (
                        <ChevronDown 
                          className={`absolute right-6 w-4 h-4 text-gray-500 transition-transform duration-200 ${
                            openNestedMenus.has(`${index}-${subIndex}`) ? 'rotate-180' : ''
                          }`}
                          onClick={() => toggleNestedMenu(index, subIndex)}
                        />
                      )}
                    </div>
                    
                    {subItem.subItems && openNestedMenus.has(`${index}-${subIndex}`) && (
                      <div className="bg-gray-100">
                        {subItem.subItems.map((nestedItem, nestedIndex) => (
                          <button
                            key={nestedIndex}
                            onClick={() => nestedItem.path && handleNavigation(nestedItem.path)}
                            className="w-full text-center py-3 text-sm text-gray-600 hover:text-indigo-600 hover:bg-gray-50"
                          >
                            {nestedItem.title}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}