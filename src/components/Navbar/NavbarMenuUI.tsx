"use client"
import type React from "react"
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
}: {
  setActive: (item: string) => void
  active: string | null
  item: string
  children?: React.ReactNode
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative ">
      <motion.p
        transition={{ duration: 0.3 }} 
  className="cursor-pointer text-white hover:opacity-80"
      >
        {item}
      </motion.p>
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
                className="bg-gradient-to-br from-[#23232999] via-[#23232966] to-[#18181b33] text-white backdrop-blur-3xl rounded-2xl overflow-hidden border border-[#232329] shadow-2xl ring-1 ring-white/20 ring-inset "
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
                className="relative rounded-full border border-[#232329] bg-gradient-to-br from-[#23232999] via-[#23232966] to-[#18181b33] backdrop-blur-3xl shadow-2xl flex justify-center space-x-4 px-8 py-6 ring-1 ring-white/20 ring-inset "
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
  description: string
  href: string
  src: string
}) => {
  return (
    <a href={href} className="flex space-x-2">
      <img
        src={src || "/placeholder.svg"}
        width={140}
        height={70}
        alt={title}
        className="shrink-0 rounded-md shadow-2xl"
      />
      <div>
  <h4 className="text-xl font-bold mb-1 text-white">{title}</h4>
  <p className="text-white text-sm max-w-[10rem]">{description}</p>
      </div>
    </a>
  )
}

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <a {...rest} className="text-white hover:text-gray-300">
      {children}
    </a>
  );
}
