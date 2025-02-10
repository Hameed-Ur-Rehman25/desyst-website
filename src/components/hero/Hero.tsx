// src/components/Hero/Hero.tsx
export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Future of Innovation
            </span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600">
            Revolutionizing the way we build tomorrow&apos;s solutions with cutting-edge technology and innovative thinking.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <button className="px-8 py-4 text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full hover:opacity-90 transition-opacity">
              Get Started
            </button>
            <button className="px-8 py-4 text-indigo-600 border-2 border-indigo-600 rounded-full hover:bg-indigo-50 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
