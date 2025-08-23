import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ContactHero from '@/components/sections/ContactHero';
import ContactForm from '@/components/sections/ContactForm';
import ContactInfo from '@/components/sections/ContactInfo';
import MapSection from '@/components/sections/MapSection';

export const metadata: Metadata = {
  title: 'Contact Petrozin - Get in Touch for Workforce Solutions',
  description: 'Contact Petrozin for all your manpower supply, project support, and technical expertise needs. Get in touch with our team today.',
  keywords: [
    'contact Petrozin',
    'workforce solutions contact',
    'manpower supply contact',
    'project support contact',
    'technical expertise contact'
  ],
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ContactHero />
      <ContactForm />
      <ContactInfo />
      <MapSection />
      <Footer />
    </main>
  );
} 