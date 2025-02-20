import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Social Fly Media',
  description: 'SocialFly Media is a results-driven social media marketing agency specializing in content creation, engagement, targeted ads, and analytics to help businesses grow and thrive online.',
  keywords: 'Social media marketing, digital marketing, content creation, brand growth, targeted advertising, social media strategy, business marketing, engagement, analytics, online presence.',
  authors: { name: "SocialFly Media" },
  robots: 'index, follow'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
