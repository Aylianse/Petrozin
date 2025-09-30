import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AboutHero from '@/components/sections/AboutHero';
import VisionMission from '@/components/sections/VisionMission';
import CompanyValues from '@/components/sections/CompanyValues';
import CompanyTimeline from '@/components/sections/CompanyTimeline';
import CTABanner from '@/components/sections/CTABanner';

export const metadata: Metadata = {
  title: 'About Petrozin - Our Vision, Mission & Company Values',
  description: 'Learn about Petrozin\'s vision to be the most trusted manpower partner for global industries, our mission of delivering quality workforce solutions, and our core company values.',
  keywords: [
    'about Petrozin',
    'company vision',
    'company mission',
    'company values',
    'manpower partner',
    'workforce solutions',
    'industrial expertise'
  ],
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <AboutHero />
      <VisionMission />
      <CompanyValues />
      <CompanyTimeline />
      <CTABanner />
      <Footer />
    </main>
  );
} 