"use client"

import { useEffect, useRef } from "react"
import { Code2, Smartphone, Cloud, Brain, Shield, Zap } from "lucide-react"

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Custom web applications built with modern frameworks and best practices. Scalable, performant, and user-friendly solutions.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Native and cross-platform mobile applications for iOS and Android. Seamless user experiences on any device.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Enterprise-grade cloud infrastructure and migration services. Secure, scalable, and cost-effective deployments.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Intelligent automation and predictive analytics powered by cutting-edge AI. Transform data into actionable insights.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Comprehensive security solutions to protect your digital assets. Proactive threat detection and prevention.",
    color: "from-indigo-500 to-blue-500",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Speed up your applications and improve user experience. Advanced optimization techniques for maximum efficiency.",
    color: "from-yellow-500 to-orange-500",
  },
]

export function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const cards = containerRef.current.querySelectorAll(".service-card")
      const containerTop = containerRef.current.offsetTop
      const scrollY = window.scrollY

      cards.forEach((card, index) => {
        const cardElement = card as HTMLElement
        const cardTop = containerTop + index * 100
        const progress = Math.max(0, Math.min(1, (scrollY - cardTop) / 300))

        // Scale down and fade slightly as cards get overlapped
        const scale = 1 - progress * 0.05

        cardElement.style.transform = `scale(${scale})`
      })
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial call

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="bg-gradient-to-b from-[#1F1147] via-[#0A0118] to-[#1A0B2E] py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-16">
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center space-x-2 rounded-full bg-white/5 px-4 py-1.5 ring-1 ring-white/10 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-fuchsia-500 bg-clip-text text-transparent">
              Our Services
            </span>
          </div>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3 md:mb-4 text-balance bg-gradient-to-r from-white via-purple-200 to-fuchsia-300 bg-clip-text text-transparent">
          Comprehensive Solutions for Your Business
        </h2>
        <p className="text-base md:text-lg text-gray-400 text-center max-w-2xl mx-auto text-balance">
          Transform your ideas into reality with cutting-edge technology solutions tailored to your unique needs
        </p>
      </div>

      <div ref={containerRef} className="relative max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 mt-32 sm:mt-40 md:mt-52 lg:mt-64">
        {services.map((service, index) => {
          const Icon = service.icon
          return (
            <div
              key={index}
              className="service-card sticky"
              style={{
                top: `${120 + index * 80}px`,
                zIndex: index + 1,
                marginBottom: index === services.length - 1 ? "0" : "80px",
              }}
            >
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-purple-500/20">
                <div className="flex items-start gap-3 sm:gap-4 md:gap-6">
                  <div
                    className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg md:rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center`}
                  >
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1.5 sm:mb-2 md:mb-3 text-white">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="h-16 md:h-24" />
    </div>
  )
}
