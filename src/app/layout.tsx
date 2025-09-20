// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
// import { reportWebVitals } from '@/lib/analytics';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'knevaTech - Digital Solutions for Tomorrow',
  description: 'Transform your workflow with AI-powered solutions designed for tomorrow\'s challenges',
  keywords: 'AI, automation, web development, mobile apps, digital solutions',
  authors: [{ name: 'knevaTech' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'knevaTech - Digital Solutions for Tomorrow',
    description: 'Transform your workflow with AI-powered solutions designed for tomorrow\'s challenges',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark:bg-gray-900`}>
        {children}
      </body>
    </html>
  );
}