"use client"
import { useState } from "react"
import { HoveredLink, Menu, MenuItem, ProductItem } from "./NavbarMenuUI"
import { NAVBAR_TABS } from "@/data/navbar/constants"
import { cn } from "@/lib/utils"
import { Menu as MenuIcon, X } from "lucide-react"

interface NavbarItem {
  text: string;
  href: string;
  src?: string;
  description?: string;
}

export default function NavbarMenu({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className={cn("fixed top-5 inset-x-0 max-w-4xl mx-auto z-50", className)}>
      {/* Desktop Menu */}
      <div className="hidden md:block">
        <Menu setActive={setActive}>
          <div className="flex items-center justify-between w-full">
            <div className="font-bold text-xl mr-8 bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-700 bg-clip-text text-transparent">KnevaTech</div>
            <div className="flex space-x-7">
              {NAVBAR_TABS.map(tab => (
                <MenuItem key={tab.label} setActive={setActive} active={active} item={tab.label}>
                  {tab.label === "Projects" ? (
                    <div className="text-sm grid grid-cols-2 gap-10 p-4">
                      {tab.details.map((item: NavbarItem) => (
                        <ProductItem
                          key={item.text}
                          title={item.text}
                          href={item.href}
                          src={item.src}
                          description={item.description}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col space-y-4 text-sm">
                      {tab.details.map((item: NavbarItem) => (
                        <HoveredLink key={item.text} href={item.href}>{item.text}</HoveredLink>
                      ))}
                    </div>
                  )}
                </MenuItem>
              ))}
            </div>
          </div>
        </Menu>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        {/* Mobile Navbar */}
        <nav className="relative rounded-full border border-[#232329] bg-gradient-to-br from-[#23232999] via-[#23232966] to-[#18181b33] backdrop-blur-3xl shadow-2xl flex justify-between items-center px-6 py-4 ring-1 ring-white/20 ring-inset mx-4">
          <div className="font-bold text-lg bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-700 bg-clip-text text-transparent">
            KnevaTech
          </div>
          <button
            onClick={toggleMobileMenu}
            className="text-white hover:text-purple-300 transition-colors p-2"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
        </nav>

        {/* Mobile Drawer */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-40 top-20">
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
              onClick={closeMobileMenu}
            />
            
            {/* Drawer */}
            <div className="fixed top-0 right-0 h-full w-80 bg-gradient-to-br from-[#1A0B2E] via-[#2A1B3E] to-[#0A0118] backdrop-blur-3xl border-l border-white/10 shadow-2xl">
              <div className="p-6">
                <div className="flex justify-between items-center mb-8">
                  <div className="font-bold text-xl bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-700 bg-clip-text text-transparent">
                    KnevaTech
                  </div>
                  <button
                    onClick={closeMobileMenu}
                    className="text-white hover:text-purple-300 transition-colors p-2"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                <nav className="space-y-4">
                  {NAVBAR_TABS.map((tab) => (
                    <a
                      key={tab.label}
                      href={tab.details[0]?.href || '#'}
                      onClick={closeMobileMenu}
                      className="block text-white hover:text-purple-300 hover:bg-white/5 rounded-lg px-4 py-3 transition-colors text-lg font-medium border-b border-white/10 last:border-b-0"
                    >
                      {tab.label}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
