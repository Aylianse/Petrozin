import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Introduction from '@/components/sections/Introduction';
import WhyChoosePetrozin from '@/components/sections/WhyChoosePetrozin';
import OurPromise from '@/components/sections/OurPromise';
import Testimonials from '@/components/sections/Testimonials';
import CTABanner from '@/components/sections/CTABanner';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Introduction />
      <WhyChoosePetrozin />
      <OurPromise />
      <Testimonials />
      <CTABanner />
      <Footer />
    </main>
  );
}
