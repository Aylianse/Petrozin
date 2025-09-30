import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import VendorRegistrationForm from '@/components/sections/VendorRegistrationForm';

export const metadata: Metadata = {
  title: 'Vendor Registration - Petrozin',
  description: 'Submit your vendor registration details online.',
};

export default function VendorRegistrationPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-petrozin-navy mb-4">
              Vendor <span className="text-gradient">Registration</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Please complete the form below and our team will get back to you.
            </p>
          </div>

          <VendorRegistrationForm />
        </div>
      </section>
      <Footer />
    </main>
  );
}
