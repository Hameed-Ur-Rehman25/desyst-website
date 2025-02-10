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
  const [openMenus, setOpenMenus] = useState(new Set());
  const [openNestedMenus, setOpenNestedMenus] = useState(new Set());
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
    if (path.startsWith('#')) {
      const element = document.querySelector(path);
      if (element) {
        const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    } else {
      router.push(path);
    }
    onClose();
    setOpenMenus(new Set());
    setOpenNestedMenus(new Set());
  };

  if (!isOpen) return null;

  return (
    <div className="absolute top-20 left-0 right-0 z-50 bg-[#1A0B2E]/95 backdrop-blur-lg border-b border-white/10">
      {/* Scrollable menu content */}
      <div className="max-h-[70vh] overflow-y-auto">
        <nav className="py-4">
          {menuItems.map((item, index) => (
            <div key={index} className="border-b border-white/5">
              <div className="relative flex items-center justify-center px-6 py-4">
                <button
                  onClick={() => item.subItems ? toggleSubMenu(index) : item.path && handleNavigation(item.path)}
                  className="text-base font-medium text-gray-200 hover:text-white transition-colors"
                >
                  {item.title}
                </button>
                {item.subItems && (
                  <ChevronDown 
                    className={`absolute right-6 w-5 h-5 text-gray-400 transition-transform duration-200 ${
                      openMenus.has(index) ? 'rotate-180' : ''
                    }`}
                    onClick={() => toggleSubMenu(index)}
                  />
                )}
              </div>

              {item.subItems && openMenus.has(index) && (
                <div className="bg-[#2A1B3E]/50">
                  {item.subItems.map((subItem, subIndex) => (
                    <div key={subIndex}>
                      <div className="flex items-center justify-center relative px-8 py-3">
                        <button
                          onClick={() => subItem.subItems ? toggleNestedMenu(index, subIndex) : subItem.path && handleNavigation(subItem.path)}
                          className="text-sm text-gray-300 hover:text-white transition-colors"
                        >
                          {subItem.title}
                        </button>
                        {subItem.subItems && (
                          <ChevronDown 
                            className={`absolute right-6 w-4 h-4 text-gray-400 transition-transform duration-200 ${
                              openNestedMenus.has(`${index}-${subIndex}`) ? 'rotate-180' : ''
                            }`}
                            onClick={() => toggleNestedMenu(index, subIndex)}
                          />
                        )}
                      </div>
                      
                      {subItem.subItems && openNestedMenus.has(`${index}-${subIndex}`) && (
                        <div className="bg-[#3A2B4E]/50">
                          {subItem.subItems.map((nestedItem, nestedIndex) => (
                            <button
                              key={nestedIndex}
                              onClick={() => nestedItem.path && handleNavigation(nestedItem.path)}
                              className="w-full text-center py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
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
    </div>
  );
}