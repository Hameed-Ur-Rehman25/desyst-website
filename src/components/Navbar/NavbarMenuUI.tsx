"use client"
import type React from "react"
import Image from "next/image"
import { motion } from "framer-motion"

const transition = {
  type: "spring" as const,
  stiffness: 100,
  damping: 20,
}

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
  href,
  onNavigate,
}: {
  setActive: (item: string) => void
  active: string | null
  item: string
  children?: React.ReactNode
  href?: string
  onNavigate?: (href: string) => void
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative ">
      {href ? (
        <motion.button
          onClick={() => {
            if (onNavigate) {
              onNavigate(href);
            } else {
              if (href.startsWith('#')) {
                // Handle smooth scrolling for anchor links
                const targetElement = document.querySelector(href);
                targetElement?.scrollIntoView({ behavior: 'smooth' });
              } else {
                // Handle regular navigation for external links
                window.location.href = href;
              }
            }
          }}
          transition={{ duration: 0.3 }} 
          className="cursor-pointer text-white hover:opacity-80"
        >
          {item}
        </motion.button>
      ) : (
        <motion.p
          transition={{ duration: 0.3 }} 
          className="cursor-pointer text-white hover:opacity-80"
        >
          {item}
        </motion.p>
      )}
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-gradient-to-br from-[#232329cc] via-[#232329aa] to-[#18181b88] text-white backdrop-blur-3xl rounded-2xl overflow-hidden border border-[#232329] shadow-2xl ring-1 ring-white/20 ring-inset "
              >
                <motion.div
                  layout
                  className="w-max h-full p-4 text-white"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  )
}

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void
  children: React.ReactNode
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
                className="relative rounded-full border border-[#232329] bg-gradient-to-br from-[#232329cc] via-[#232329aa] to-[#18181b88] backdrop-blur-3xl shadow-2xl flex justify-center space-x-4 px-8 py-6 ring-1 ring-white/20 ring-inset "
    >
      {children}
    </nav>
  )
}

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string
  description?: string
  href: string
  src?: string
}) => {
  return (
    <a href={href} className="flex space-x-2">
      <Image
        src={src || "/placeholder.svg"}
        width={140}
        height={70}
        alt={title}
        className="shrink-0 rounded-md shadow-2xl"
      />
      <div>
  <h4 className="text-xl font-bold mb-1 text-white">{title}</h4>
  <p className="text-white text-sm max-w-[10rem]">{description || ""}</p>
      </div>
    </a>
  )
}

export const HoveredLink = ({ 
  children, 
  href,
  onNavigate,
  ...rest 
}: { 
  children: React.ReactNode;
  href: string;
  onNavigate?: (href: string) => void;
  [key: string]: unknown;
}) => {
  return (
    <button 
      onClick={() => {
        if (onNavigate) {
          onNavigate(href);
        } else {
          if (href.startsWith('#')) {
            const targetElement = document.querySelector(href);
            targetElement?.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.location.href = href;
          }
        }
      }}
      {...rest} 
      className="text-white hover:text-gray-300 text-left"
    >
      {children}
    </button>
  );
}
