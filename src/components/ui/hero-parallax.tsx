"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "motion/react";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  // Disable parallax effects on mobile
  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, isMobile ? 0 : 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, isMobile ? 0 : -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [isMobile ? 0 : 15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [isMobile ? 1 : 0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [isMobile ? 0 : 20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [isMobile ? 0 : -700, isMobile ? 0 : 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className={`${isMobile ? 'h-auto min-h-screen' : 'h-[200vh] md:h-[300vh]'} py-8 sm:py-12 md:py-20 lg:py-40 overflow-hidden antialiased relative flex flex-col self-auto bg-gradient-to-br from-[#0A0118] via-[#1A0B2E] to-[#1F1147] ${
        isMobile ? '' : '[perspective:1000px] [transform-style:preserve-3d]'
      }`}
    >
      {/* Background effects to match your theme */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_50%)]" />
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.1),transparent_25%)]" />
      </div>
      
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="relative z-10 px-4 md:px-0 mt-8 sm:mt-12 md:mt-16 lg:mt-20"
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-4 md:space-x-20 mb-6 sm:mb-8 md:mb-12 lg:mb-20 overflow-x-auto md:overflow-x-visible scrollbar-hide">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              isMobile={isMobile}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-6 sm:mb-8 md:mb-12 lg:mb-20 space-x-4 md:space-x-20 overflow-x-auto md:overflow-x-visible scrollbar-hide">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              isMobile={isMobile}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-4 md:space-x-20 overflow-x-auto md:overflow-x-visible scrollbar-hide">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              isMobile={isMobile}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-8 sm:py-12 md:py-20 lg:py-40 px-4 w-full left-0 top-0 z-10 mb-4 sm:mb-6 md:mb-8">
      {/* Brand badge */}
      <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-lg rounded-full px-4 py-2 border border-white/10 mb-8">
        <span className="w-2 h-2 bg-violet-400 rounded-full animate-pulse"></span>
        <span className="text-sm font-medium bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Portfolio Showcase</span>
      </div>
      
      <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white via-slate-200 to-slate-400 leading-tight mb-4 sm:mb-6">
        Crafting Digital <br />
        <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
          Experiences
        </span>
      </h1>
      
      <p className="max-w-2xl text-sm sm:text-base md:text-xl text-slate-300/90 leading-relaxed mb-6 sm:mb-8">
        From innovative web applications to cutting-edge AI solutions, explore our portfolio of 
        <span className="text-violet-400 font-medium"> transformative projects</span> that push the boundaries of technology.
      </p>
      
      {/* Stats */}
      <div className="flex items-center gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8">
        <div className="text-center">
          <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">100+</div>
          <div className="text-xs sm:text-sm text-slate-400">Projects Delivered</div>
        </div>
        <div className="h-8 sm:h-12 w-px bg-gradient-to-b from-violet-500/20 via-fuchsia-500/30 to-indigo-500/20"></div>
        <div className="text-center">
          <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">50+</div>
          <div className="text-xs sm:text-sm text-slate-400">Happy Clients</div>
        </div>
        <div className="h-8 sm:h-12 w-px bg-gradient-to-b from-violet-500/20 via-fuchsia-500/30 to-indigo-500/20"></div>
        <div className="text-center">
          <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">24/7</div>
          <div className="text-xs sm:text-sm text-slate-400">Support</div>
        </div>
      </div>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
  isMobile = false,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
  isMobile?: boolean;
}) => {
  return (
    <motion.div
      style={{
        x: isMobile ? 0 : translate,
      }}
      whileHover={{
        y: isMobile ? 0 : -20,
      }}
      key={product.title}
      className="group/product h-64 w-72 sm:h-72 sm:w-80 md:h-96 md:w-[30rem] relative shrink-0"
    >
      <a
        href={product.link}
        className="block group-hover/product:shadow-2xl group-hover/product:shadow-violet-500/20"
      >
        <Image
          src={product.thumbnail}
          height={600}
          width={600}
          className="object-cover object-left-top absolute h-full w-full inset-0 rounded-lg border border-violet-500/20"
          alt={product.title}
        />
      </a>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-gradient-to-t from-[#0A0118] via-transparent to-transparent pointer-events-none rounded-lg"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white font-semibold text-lg bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
        {product.title}
      </h2>
    </motion.div>
  );
};
