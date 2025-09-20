'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { ShimmerHero, ShimmerAISolutions, ShimmerTeam } from './ui/shimmer';

// Loading components with shimmer effects for better UX
const HeroLoading = () => <ShimmerHero />;
const AISolutionsLoading = () => <ShimmerAISolutions />;
const TeamLoading = () => <ShimmerTeam />;
const DefaultLoading = () => (
  <div className="flex items-center justify-center min-h-[200px]">
    <div className="animate-pulse">
      <div className="h-8 w-8 bg-gradient-to-r from-violet-400/20 to-fuchsia-400/20 rounded-full"></div>
    </div>
  </div>
);

// Dynamically import heavy components with shimmer loading fallbacks
export const LazyHeroParallax = dynamic(
  () => import('./hero-parallax-demo'),
  {
    loading: () => <HeroLoading />,
    ssr: false, // Disable SSR for heavy animation components
  }
);

export const LazyWobbleCardDemo = dynamic(
  () => import('./wobble-card-demo'),
  {
    loading: () => <AISolutionsLoading />,
    ssr: false,
  }
);

export const LazyCoverDemo = dynamic(
  () => import('./cover-demo'),
  {
    loading: () => <DefaultLoading />,
    ssr: false,
  }
);

export const LazyAnimatedTestimonials = dynamic(
  () => import('./ui/animated-testimonials').then(mod => ({ default: mod.AnimatedTestimonials })),
  {
    loading: () => <TeamLoading />,
    ssr: false,
  }
);

// Wrapper component for Suspense with shimmer fallback
export const SuspenseWrapper = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<DefaultLoading />}>
    {children}
  </Suspense>
);
