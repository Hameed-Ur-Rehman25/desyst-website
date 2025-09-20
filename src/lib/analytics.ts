// Performance monitoring and analytics
export const reportWebVitals = (metric: {
  name: string;
  value: number;
  id: string;
  delta: number;
  entries: PerformanceEntry[];
}) => {
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log(metric);
  }

  // Send to analytics service in production
  if (process.env.NODE_ENV === 'production') {
    // Example: Send to Google Analytics, Vercel Analytics, etc.
    // gtag('event', metric.name, {
    //   value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
    //   event_label: metric.id,
    //   non_interaction: true,
    // });
  }
};

// Performance optimization utilities
export const preloadImage = (src: string) => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = src;
  document.head.appendChild(link);
};

export const preloadComponent = (componentName: string) => {
  // Preload critical components
  const criticalComponents = ['HeroParallax', 'Services', 'Navbar'];
  if (criticalComponents.includes(componentName)) {
    // Implementation for preloading components
    console.log(`Preloading ${componentName}`);
  }
};
