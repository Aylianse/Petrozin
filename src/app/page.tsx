import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Introduction from '@/components/sections/Introduction';
import WhyChoosePetrozin from '@/components/sections/WhyChoosePetrozin';
import OurPromise from '@/components/sections/OurPromise';
import EmployeeReviews from '@/components/sections/EmployeeReviews';
import CTABanner from '@/components/sections/CTABanner';

export default function Home() {
  return (
    <>
      <Header />
    <main className="min-h-screen">
      <Hero />
      <Introduction />
      <WhyChoosePetrozin />
      <OurPromise />
      <EmployeeReviews />
      <CTABanner />
      <Footer />
    </main>
    </>
  );
}
