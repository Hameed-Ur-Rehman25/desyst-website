"use client"
import { useState } from "react"
import { HoveredLink, Menu, MenuItem, ProductItem } from "./NavbarMenuUI"
import { NAVBAR_TABS } from "@/data/navbar/constants"
import { cn } from "@/lib/utils"

export default function NavbarMenu({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-5 inset-x-0 max-w-4xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <div className="flex items-center justify-between w-full">
          <div className="font-bold text-xl mr-8 bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-700 bg-clip-text text-transparent">KnevaTech</div>
          <div className="flex space-x-7">
            {NAVBAR_TABS.map(tab => (
              <MenuItem key={tab.label} setActive={setActive} active={active} item={tab.label}>
                {tab.label === "Projects" ? (
                  <div className="text-sm grid grid-cols-2 gap-10 p-4">
                    {tab.details.map((item: any) => (
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
                    {tab.details.map((item: any) => (
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
  );
}
