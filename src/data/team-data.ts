export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  social: {
    github: string;
    linkedin: string;
    twitter: string;
  };
}

export const team: TeamMember[] = [
  {
    id: 1,
    name: 'Alex Chen',
    role: 'Founder & CEO',
    image: '/api/placeholder/400/400',
    bio: 'AI researcher with 10+ years experience in deep learning and neural networks.',
    social: {
      github: 'https://github.com/alexchen',
      linkedin: 'https://linkedin.com/in/alexchen',
      twitter: 'https://twitter.com/alexchen'
    }
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'CTO',
    image: '/api/placeholder/400/400',
    bio: 'Quantum computing expert specialized in quantum algorithms and optimization.',
    social: {
      github: 'https://github.com/sarahjohnson',
      linkedin: 'https://linkedin.com/in/sarahjohnson',
      twitter: 'https://twitter.com/sarahjohnson'
    }
  },
  {
    id: 3,
    name: 'Michael Park',
    role: 'Lead Engineer',
    image: '/api/placeholder/400/400',
    bio: 'Full-stack developer focused on scalable cloud architectures and ML pipelines.',
    social: {
      github: 'https://github.com/michaelpark',
      linkedin: 'https://linkedin.com/in/michaelpark',
      twitter: 'https://twitter.com/michaelpark'
    }
  }
];