// data/service-data.ts
import { Service } from '@/types/service';

export const services: Service[] = [
  {
    id: 'ai-automation',
    title: 'AI Automation',
    description: 'Harness the power of neural networks and machine learning to automate complex business processes',
    icon: 'cpu',
    features: ['Neural Networks', 'Machine Learning', 'Process Optimization']
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Infrastructure',
    description: 'Enterprise-grade cloud solutions with guaranteed uptime and scalability',
    icon: 'cloud',
    features: ['Multi-Cloud Integration', 'Zero-Downtime Migration', 'Auto-Scaling']
  },
  {
    id: 'data-analytics',
    title: 'Advanced Analytics',
    description: 'Transform big data into strategic insights using cutting-edge analytics',
    icon: 'bar-chart',
    features: ['Predictive Modeling', '3D Visualization', 'Real-time Insights']
  },
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Modern, responsive websites built with cutting-edge technologies and best practices',
    icon: 'globe',
    features: ['Responsive Design', 'Performance Optimization', 'SEO Ready']
  },
  {
    id: 'app-development',
    title: 'App Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences',
    icon: 'smartphone',
    features: ['Cross-Platform', 'Native Performance', 'App Store Ready']
  },
  {
    id: 'ui-ux',
    title: 'UI & UX Design',
    description: 'User-centered design solutions that create intuitive and engaging digital experiences',
    icon: 'palette',
    features: ['User Research', 'Prototyping', 'Design Systems']
  },
];
