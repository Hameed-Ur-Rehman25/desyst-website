// data/menuItems.ts
import { MenuItem } from '@/types/menu';
export const menuItems: MenuItem[] = [
  {
    title: 'Products',
    subItems: [
      {
        title: 'Features',
        path: '/features',
      },
      {
        title: 'Solutions',
        subItems: [
          { title: 'Enterprise', path: '/enterprise' },
          { title: 'Startup', path: '/startup' },
        ],
      },
    ],
  },
  {
    title: 'Resources',
    subItems: [
      { title: 'Documentation', path: '/docs' },
      { title: 'Blog', path: '/blog' },
    ],
  },
  { title: 'Pricing', path: '/pricing' },
  { title: 'Contact', path: '/contact' },
];