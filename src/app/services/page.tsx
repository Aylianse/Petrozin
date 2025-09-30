import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServicesHero from '@/components/sections/ServicesHero';
import ServicesDetails from '@/components/sections/ServicesDetails';
import IndustrySpecializations from '@/components/sections/IndustrySpecializations';
import CTABanner from '@/components/sections/CTABanner';
import LicensesCertifications from '@/components/sections/LicensesCertifications';
import ClientList from '@/components/sections/ClientList';

export const metadata: Metadata = {
  title: 'Our Services - Manpower Supply, Project Support & Technical Expertise',
  description: 'Discover Petrozin\'s comprehensive services: manpower supply, project support, and technical expertise for oil & gas, construction, manufacturing, and energy industries.',
  keywords: [
    'manpower supply services',
    'project support',
    'technical expertise',
    'industrial workforce',
    'oil and gas manpower',
    'construction staffing',
    'manufacturing workforce',
    'energy sector staffing'
  ],
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ServicesHero />
      <ServicesDetails />
      <LicensesCertifications />
      <ClientList />
      <IndustrySpecializations />
      <CTABanner />
      <Footer />
    </main>
  );
} 