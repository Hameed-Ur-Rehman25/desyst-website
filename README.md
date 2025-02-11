# DeSyst - Modern Tech Solutions Website

A modern, responsive website built with Next.js 15, React 19, and TailwindCSS, featuring stunning animations and a clean, professional design.

<!-- ![DeSyst Website](screenshot.png) -->

## 🌟 Features

- **Modern Design**: Sleek, professional interface with animated gradients and interactive elements
- **Responsive Layout**: Fully responsive design that works beautifully on all devices
- **Performance Optimized**: Built with Next.js 15 for optimal performance and SEO
- **Interactive Components**: 
  - Animated hero section with floating elements
  - Smooth scroll navigation
  - Interactive service cards
  - Project showcase with hover effects
  - Team member cards with social links
  - Contact form with validation

## 🚀 Tech Stack

- **Framework**: Next.js 15.1.6
- **UI Library**: React 19.0.0
- **Styling**: TailwindCSS 3.4.1
- **Icons**: 
  - Lucide React 0.475.0
  - Hero Icons 2.2.0
- **Animations**: Framer Motion 12.4.2
- **Type Safety**: TypeScript
- **Code Quality**: ESLint

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Ninjaa-aa/desyst-website.git
cd desyst-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠️ Project Structure

```
desyst-website/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── hero/
│   │   ├── navbar/
│   │   ├── services/
│   │   ├── projects/
│   │   ├── team/
│   │   └── contact/
│   ├── data/
│   │   ├── menuItems.ts
│   │   ├── project-data.ts
│   │   ├── service-data.ts
│   │   └── team-data.ts
│   └── types/
│       ├── menu.ts
│       └── service.ts
├── public/
├── styles/
│   └── globals.css
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## 🎨 Customization

### Tailwind Configuration

The project uses a custom Tailwind configuration with extended themes:

- Custom colors (primary: indigo, secondary: purple)
- Custom animations
- Extended background patterns
- Gradient utilities

You can modify these in `tailwind.config.js`.

### Components

Each major section is built as a standalone component:

- `Hero.tsx`: Landing section with animated graphics
- `Services.tsx`: Service offerings with interactive cards
- `Projects.tsx`: Project showcase with hover effects
- `Team.tsx`: Team member profiles with social links
- `Contact.tsx`: Contact form with validation

### Data Management

All content is managed through TypeScript files in the `data` directory:

- `menuItems.ts`: Navigation menu structure
- `project-data.ts`: Project showcase information
- `service-data.ts`: Service offerings
- `team-data.ts`: Team member information

## 🔧 Development

### Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run lint`: Run ESLint

### Adding New Features

1. Create new components in `src/components`
2. Add data files in `src/data` if needed
3. Define types in `src/types`
4. Import and use in `page.tsx`

## 🚀 Deployment

The project is ready for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure your deployment settings
4. Deploy!

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📬 Contact

[Hammad Zahid](https://www.linkedin.com/in/hammad-zahid-61b502241/)

Project Link: [https://github.com/Ninjaa-aa/desyst-website](https://github.com/Ninjaa-aa/desyst-website)

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [React](https://reactjs.org)
- [Lucide Icons](https://lucide.dev)
- [Framer Motion](https://www.framer.com/motion/)