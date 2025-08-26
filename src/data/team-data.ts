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
    image: '/images/shayan.png',
    bio: 'Data Engineer with over 4+ years of experience, working in scalable ETL Pipelines, Data Warehousing, DevOps, and maintaining flow of all data sources and steps',
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
    image: '/images/qasim.jpeg',
    bio: 'Data Scientist with over 3+ years of experience AI/ML, LLM refinements, web-scraping, AI automation, and creating production ready environments.',
    social: {
      github: 'https://github.com/Qasim-Rizwan',
      linkedin: 'https://www.linkedin.com/in/qasim-rizwan-75502b230/',
      twitter: ''
    }
  },
  {
    id: 3,
    name: 'Fahad Ramzan',
    role: 'Sr Full Stack Developer',
    image: '/images/fahad_.png',
    bio: 'A skilled Senior Full Stack Developer with expertise in creating scalable, user-friendly, and efficient web and mobile solutions. ',
    social: {
      github: '',
      linkedin: 'https://www.linkedin.com/in/fahad-ramzan/',
      twitter: ''
    }
  },
    {
    id: 3,
    name: 'Hameed Ur Rehman',
    role: 'Full Stack Developer',
    image: '/images/hameed.jpeg',
    bio: 'With 2+ years of hands-on experience, this Full Stack Developer combines technical expertise and UI/UX skills to build seamless web and app experiences. ',
    social: {
      github: 'https://github.com/Hameed-Ur-Rehman25',
      linkedin: 'https://www.linkedin.com/in/hameed-ur-rehman-b249b927a/',
      twitter: ''
    }
  },
];
