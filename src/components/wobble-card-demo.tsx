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
          <div className="max-w-xs pr-4 sm:pr-8 md:pr-0">
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
            className="absolute -right-8 sm:-right-4 lg:-right-[20%] filter grayscale -bottom-10 object-contain rounded-2xl max-w-[250px] sm:max-w-[300px] lg:max-w-[400px]"
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
          <div className="max-w-sm pr-4 sm:pr-8 md:pr-0">
            <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Ready to Harness the Power of AI for Your Business?
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
              Schedule a free AI consultation and discover how machine learning and intelligent automation can optimize
              your processes and unlock new opportunities.
            </p>
            
            {/* Contact Button */}
            <button 
              onClick={() => {
                const contactSection = document.querySelector('#contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="mt-8 inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-800 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:shadow-xl hover:shadow-white/20 transform hover:scale-105 border border-white/10"
            >
              <span>Get Free Consultation</span>
              <svg 
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M17 8l4 4m0 0l-4 4m4-4H3" 
                />
              </svg>
            </button>
          </div>
          <Image
            src="/modern-ai-robot-collaborating-with-human-developer.png"
            width={500}
            height={500}
            alt="AI consultation meeting"
            className="hidden md:block absolute -right-16 md:-right-[30%] lg:-right-[15%] -bottom-10 object-contain rounded-2xl max-w-[280px] md:max-w-[300px] lg:max-w-[450px]"
          />
        </WobbleCard>
      </div>
    </div>
    </section>
  )
}
