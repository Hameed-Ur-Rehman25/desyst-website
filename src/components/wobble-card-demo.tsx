"use client"
import { WobbleCard } from "@/components/ui/wobble-card"
import Image from "next/image"

export default function WobbleCardDemo() {
  return (
    <section className="relative bg-gradient-to-b from-[#2A1458] via-[#1F1147] to-[#2a1458] py-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_50%)]" />
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(99,102,241,0.1),transparent_25%)]" />
      </div>
      
      <div className="relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 rounded-full bg-white/5 px-4 py-1 ring-1 ring-white/10 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-sm font-medium text-blue-400">AI Solutions</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Intelligent Innovation
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Harness the power of artificial intelligence to transform your business operations and unlock new possibilities
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-gradient-to-br from-blue-900 to-indigo-800 min-h-[500px] lg:min-h-[300px]"
          className=""
        >
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              AI-Powered Solutions That Transform Business
            </h2>
            <p className="mt-4 text-left text-base/6 text-neutral-200">
              From intelligent automation to predictive analytics, we build cutting-edge AI applications that
              revolutionize how your business operates and makes decisions.
            </p>
          </div>
          <Image
            src="/modern-software-development-dashboard-interface.png"
            width={500}
            height={500}
            alt="AI dashboard interface"
            className="absolute -right-4 lg:-right-[20%] filter grayscale -bottom-10 object-contain rounded-2xl max-w-[300px] lg:max-w-[400px]"
          />
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-gradient-to-br from-purple-800 to-indigo-900">
          <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            AI & Machine Learning Experts
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
            Our team specializes in TensorFlow, PyTorch, OpenAI APIs, and cloud AI services to deliver intelligent
            solutions that learn and adapt.
          </p>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-gradient-to-r from-slate-800 to-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="max-w-sm">
            <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Ready to Harness the Power of AI for Your Business?
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
              Schedule a free AI consultation and discover how machine learning and intelligent automation can optimize
              your processes and unlock new opportunities.
            </p>
          </div>
          <Image
            src="/modern-ai-robot-collaborating-with-human-developer.png"
            width={500}
            height={500}
            alt="AI consultation meeting"
            className="absolute -right-10 md:-right-[30%] lg:-right-[15%] -bottom-10 object-contain rounded-2xl max-w-[300px] lg:max-w-[450px]"
          />
        </WobbleCard>
      </div>
    </div>
    </section>
  )
}
