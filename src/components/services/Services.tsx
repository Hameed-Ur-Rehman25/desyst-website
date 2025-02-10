'use client';
import React from 'react';
import { Shield, Cloud, Cpu, BarChart } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

const services: Service[] = [
  {
    id: 'ai-automation',
    title: 'AI Automation',
    description: 'Intelligent automation solutions powered by advanced AI algorithms',
    icon: 'cpu',
    features: ['Workflow Automation', 'Predictive Analytics', 'Smart Decisions']
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Integration',
    description: 'Seamless cloud infrastructure and deployment services',
    icon: 'cloud',
    features: ['Cloud Migration', 'Scalable Infrastructure', 'High Availability']
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics',
    description: 'Transform raw data into actionable business insights',
    icon: 'bar-chart',
    features: ['Real-time Analytics', 'Data Visualization', 'Business Intelligence']
  },
  {
    id: 'security',
    title: 'Cyber Security',
    description: 'Enterprise-grade security solutions for digital assets',
    icon: 'shield',
    features: ['Threat Detection', 'Data Protection', 'Security Audits']
  }
];

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'shield': return <Shield className="w-6 h-6" />;
    case 'cloud': return <Cloud className="w-6 h-6" />;
    case 'cpu': return <Cpu className="w-6 h-6" />;
    case 'bar-chart': return <BarChart className="w-6 h-6" />;
    default: return null;
  }
};

export default function Services() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Our Services</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Transform Your Business
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Comprehensive digital solutions to drive your business forward
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative isolate flex flex-col justify-between rounded-2xl bg-white px-8 py-10 border border-gray-200 hover:border-indigo-600/20 transition-colors duration-300"
            >
              <div className="absolute inset-0 -z-10 bg-gradient-to-b from-indigo-50/50 opacity-0 transition group-hover:opacity-100 rounded-2xl" />
              
              <div>
                <div className="flex items-center gap-x-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600/5 group-hover:bg-indigo-600/10 transition-colors">
                    {getIcon(service.icon)}
                  </span>
                  <h3 className="text-xl font-semibold leading-7 tracking-tight text-gray-900">
                    {service.title}
                  </h3>
                </div>
                <p className="mt-4 text-base leading-7 text-gray-600">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-x-3 text-sm leading-6 text-gray-600">
                      <svg className="h-1.5 w-1.5 fill-indigo-600" viewBox="0 0 6 6" aria-hidden="true">
                        <circle cx="3" cy="3" r="3" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex items-center gap-x-3">
                <button className="text-sm font-semibold leading-6 text-indigo-600 group-hover:text-indigo-500">
                  Learn more
                  <span className="inline-block translate-x-0 group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl">
        <div className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25" />
      </div>
    </div>
  );
}