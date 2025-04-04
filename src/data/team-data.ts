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
    name: 'Ahmed Shayan',
    role: 'Co-Founder',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQG-amqCIgmHHQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718909949843?e=1749081600&v=beta&t=nD_xSETD5y10x9Rit77S4331RySP5MMpnOuF4wLKx58',
    bio: 'AI researcher with 10+ years experience in deep learning and neural networks.',
    social: {
      github: 'https://github.com/Ahmed-Shayan-Arsalan',
      linkedin: 'https://www.linkedin.com/in/ahmed-shayan-46b014244/',
      twitter: ''
    }
  },
  {
    id: 2,
    name: 'Qasim Rizwan',
    role: 'Co-Founder',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQF-PUMVfaQkDg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724598687572?e=1749081600&v=beta&t=Dw8-0_FRLM8Ag-Y-6_AYPGqEWahRYKHgEfrQJYdSIFk',
    bio: 'Quantum computing expert specialized in quantum algorithms and optimization.',
    social: {
      github: 'https://github.com/Qasim-Rizwan',
      linkedin: 'https://www.linkedin.com/in/qasim- rizwan-75502b230/',
      twitter: ''
    }
  },
  {
    id: 3,
    name: 'Fahad Ramzan',
    role: 'Lead Engineer',
    image: 'https://placehold.co/400x400',
    bio: 'Full-stack developer focused on scalable cloud architectures and ML pipelines.',
    social: {
      github: 'https://github.com/michaelpark',
      linkedin: 'https://linkedin.com/in/michaelpark',
      twitter: 'https://twitter.com/michaelpark'
    }
  },
    {
    id: 4,
    name: 'Muhammad Talal',
    role: 'CTO',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQFtQ3Ho5EnHwQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1708283438090?e=1749081600&v=beta&t=iV3opZ9b9AdT0kFwE0huKMf0N0Ix5Sd2rYi7eJptj54',
    bio: 'Quantum computing expert specialized in quantum algorithms and optimization.',
    social: {
      github: 'https://github.com/mohdtalal3',
      linkedin: 'https://www.linkedin.com/in/muhammad-talal-84ab8b271/',
      twitter: ''
    }
  }
];
