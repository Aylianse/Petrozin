import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy - Petrozin',
  description: 'Privacy Policy for Petrozin Arabia Contracting & Facilities Management LLC. Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-32 pb-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-poppins font-bold text-petrozin-navy mb-6">
              Privacy Policy
            </h1>
            <p className="text-gray-600 mb-8">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-poppins font-semibold text-petrozin-navy mb-4">
                  1. Introduction
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Petrozin Arabia Contracting & Facilities Management LLC (&quot;we,&quot; &quot;our,&quot; or &quot;Petrozin&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-poppins font-semibold text-petrozin-navy mb-4">
                  2. Information We Collect
                </h2>
                <h3 className="text-xl font-poppins font-semibold text-petrozin-navy mb-3 mt-6">
                  2.1 Personal Information
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may collect personal information that you provide to us, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Name, email address, phone number, and mailing address</li>
                  <li>Company name and business information</li>
                  <li>Job title and professional qualifications</li>
                  <li>Resume, CV, or employment history</li>
                  <li>Payment and billing information (for vendor registration)</li>
                  <li>Any other information you choose to provide</li>
                </ul>

                <h3 className="text-xl font-poppins font-semibold text-petrozin-navy mb-3 mt-6">
                  2.2 Automatically Collected Information
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  When you visit our website, we may automatically collect certain information, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>IP address and browser type</li>
                  <li>Device information and operating system</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referring website addresses</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-poppins font-semibold text-petrozin-navy mb-4">
                  3. How We Use Your Information
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process vendor registrations and applications</li>
                  <li>Match job candidates with employment opportunities</li>
                  <li>Communicate with you about our services</li>
                  <li>Respond to your inquiries and requests</li>
                  <li>Send you marketing communications (with your consent)</li>
                  <li>Comply with legal obligations and enforce our agreements</li>
                  <li>Protect our rights and prevent fraud</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-poppins font-semibold text-petrozin-navy mb-4">
                  4. Information Sharing and Disclosure
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may share your information in the following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Service Providers:</strong> With third-party service providers who assist us in operating our business</li>
                  <li><strong>Clients:</strong> With potential employers or clients when matching candidates with job opportunities</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our legal rights</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                  <li><strong>With Your Consent:</strong> When you explicitly consent to sharing your information</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-poppins font-semibold text-petrozin-navy mb-4">
                  5. Data Security
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-poppins font-semibold text-petrozin-navy mb-4">
                  6. Your Rights
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Depending on your location, you may have the following rights regarding your personal information:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Access to your personal information</li>
                  <li>Correction of inaccurate information</li>
                  <li>Deletion of your personal information</li>
                  <li>Objection to processing of your information</li>
                  <li>Data portability</li>
                  <li>Withdrawal of consent</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  To exercise these rights, please contact us at <a href="mailto:admin@petrozin.com" className="text-petrozin-gold hover:underline">admin@petrozin.com</a>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-poppins font-semibold text-petrozin-navy mb-4">
                  7. Cookies and Tracking Technologies
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookies through your browser settings, but disabling cookies may affect website functionality.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-poppins font-semibold text-petrozin-navy mb-4">
                  8. Third-Party Links
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-poppins font-semibold text-petrozin-navy mb-4">
                  9. Children&apos;s Privacy
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-poppins font-semibold text-petrozin-navy mb-4">
                  10. Changes to This Privacy Policy
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date. You are advised to review this Privacy Policy periodically.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-poppins font-semibold text-petrozin-navy mb-4">
                  11. Contact Us
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <div className="bg-petrozin-gray rounded-xl p-6">
                  <p className="text-gray-700 mb-2"><strong>Petrozin Arabia Contracting & Facilities Management LLC</strong></p>
                  <p className="text-gray-700 mb-2">BIN SHEIKH BUILDING, 5th Floor, Office 502</p>
                  <p className="text-gray-700 mb-2">Above Al Anees Store, Near Doha Al Jadeeda Metro Station</p>
                  <p className="text-gray-700 mb-2">Doha, Qatar</p>
                  <p className="text-gray-700 mb-2">Email: <a href="mailto:info@petrozin.com" className="text-petrozin-gold hover:underline">admin@petrozin.com</a></p>
                  <p className="text-gray-700">Phone: +97444512393</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

