// data/project-data.ts

export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  link: string;
  github: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Neural Vision',
    description: 'Advanced computer vision platform leveraging deep learning for real-time object detection and scene analysis.',
    tech: ['TensorFlow', 'Python', 'React', 'AWS'],
    link: '#',
    github: '#',
    image: '/api/placeholder/800/600'
  },
  {
    id: 2,
    title: 'Quantum Core',
    description: 'Next-generation quantum computing interface for complex data processing and simulation.',
    tech: ['Q#', 'Python', 'TypeScript', 'Azure'],
    link: '#',
    github: '#',
    image: '/api/placeholder/800/600'
  },
  {
    id: 3,
    title: 'Neural Networks',
    description: 'Cutting-edge neural network development platform for advanced AI research and applications.',
    tech: ['PyTorch', 'CUDA', 'React', 'Docker'],
    link: '#',
    github: '#',
    image: '/api/placeholder/800/600'
  }
];