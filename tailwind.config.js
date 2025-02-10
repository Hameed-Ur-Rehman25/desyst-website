// tailwind.config.js
import colors from 'tailwindcss/colors';

module.exports = {
 content: [
   './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
   './src/components/**/*.{js,ts,jsx,tsx,mdx}', 
   './src/app/**/*.{js,ts,jsx,tsx,mdx}',
 ],
 theme: {
   extend: {
     colors: {
       primary: colors.indigo,
       secondary: colors.purple,
     },
     animation: {
       'float': 'float 6s ease-in-out infinite',
       'float-delayed': 'float-delayed 8s ease-in-out infinite',
       'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
       'spin-slow': 'spin 8s linear infinite',
       'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
       'circuit': 'draw 3s ease-in-out forwards',
       'gradient': 'gradient 8s ease infinite',
       'grid': 'grid 20s linear infinite',
     },
     keyframes: {
       float: {
         '0%, 100%': { transform: 'translateY(0)' },
         '50%': { transform: 'translateY(-20px)' },
       },
       'float-delayed': {
         '0%, 100%': { transform: 'translateY(0)' },
         '50%': { transform: 'translateY(-20px)' },
       },
       draw: {
         '0%': { strokeDashoffset: '1000' },
         '100%': { strokeDashoffset: '0' },
       },
       gradient: {
         '0%': { backgroundPosition: '0% 50%' },
         '50%': { backgroundPosition: '100% 50%' },
         '100%': { backgroundPosition: '0% 50%' },
       },
       grid: {
         '0%': { transform: 'translateX(0) translateY(0)' },
         '100%': { transform: 'translateX(20px) translateY(20px)' },
       }
     },
     backgroundImage: {
       'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
       'grid-pattern': 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
     },
     backgroundSize: {
       'grid': '20px 20px',
     }
   },
 },
 plugins: [],
};