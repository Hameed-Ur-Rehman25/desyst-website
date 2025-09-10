import { NAVBAR_PROJECTS } from './projects';

interface NavbarTab {
  label: string;
  href?: string;
  details: {
    text: string;
    href: string;
    src?: string;
    description?: string;
  }[];
}

export const NAVBAR_TABS: NavbarTab[] = [
  {
    label: "Services",
    href: "#services",
    details: [
      { text: "AI Automation", href: "#services" },
      { text: "Cloud Infrastructure", href: "#services" },
      { text: "Advanced Analytics", href: "#services" },
      { text: "Web Development", href: "#services" },
      { text: "App Development", href: "#services" },
      { text: "UI & UX Design", href: "#services" },
    ],
  },
  {
    label: "Projects",
    href: "/projects",
    details: NAVBAR_PROJECTS,
  },
  {
    label: "Team",
    href: "#team",
    details: [
    // { text: "Leadership", href: "/leadership" },
    //   { text: "Developers", href: "/developers" },
    //   { text: "Designers", href: "/designers" },
    //   { text: "Careers", href: "/careers" },
    ],
  },
  {
    label: "Contact",
    href: "#contact",
    details: [
    //   { text: "Sales", href: "/sales" },
    //   { text: "Support", href: "/support" },
    //   { text: "Partnerships", href: "/partnerships" },
    //   { text: "Office Locations", href: "/locations" },
    ],
  },
];
