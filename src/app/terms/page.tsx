import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Terms of Service - Petrozin',
  description: 'Terms of Service for Petrozin Arabia Contracting & Facilities Management LLC. Read our terms and conditions for using our services.',
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-32 pb-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-poppins font-bold text-petrozin-navy mb-6">
              Terms of Service
            </h1>
            <p className="text-gray-600 mb-8">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-poppins font-semibold text-petrozin-navy mb-4">
                  1. Acceptance of Terms
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  By accessing and using the website and services of Petrozin Arabia Contracting & Facilities Management LLC (&quot;Petrozin,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-poppins font-semibold text-petrozin-navy mb-4">
                  2. Services Description
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Petrozin provides the following services:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Manpower supply (white collar and blue collar positions)</li>
                  <li>Recruitment services</li>
                  <li>Project support and technical expertise</li>
                  <li>Vendor registration and management</li>
                  <li>Workforce solutions for various industries</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  We reserve the right to modify, suspend, or discontinue any service at any time without prior notice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-poppins font-semibold text-petrozin-navy mb-4">
                  3. Eligibility
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  You must be at least 18 years old and have the legal capacity to enter into contracts to use our services. By using our services, you represent and warrant that you meet these eligibility requirements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-poppins font-semibold text-petrozin-navy mb-4">
                  4. Vendor Registration
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  When registering as a vendor:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>You agree to provide accurate, current, and complete information</li>
                  <li>You are responsible for maintaining the confidentiality of your account</li>
                  <li>You must notify us immediately of any unauthorized use of your account</li>
                  <li>We reserve the right to reject or terminate any vendor registration at our discretion</li>
                  <li>You agree to comply with all applicable laws and regulations in Qatar</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-poppins font-semibold text-petrozin-navy mb-4">
                  5. Job Placement Services
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  For candidates and job seekers:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>We facilitate connections between candidates and employers but do not guarantee employment</li>
                  <li>Candidates are responsible for verifying the accuracy of job listings and employer information</li>
                  <li>We are not responsible for the terms and conditions of employment offered by third-party employers</li>
                  <li>All employment relationships are between the candidate and the employer</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-poppins font-semibold text-petrozin-navy mb-4">
                  6. Fees and Payment
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Service fees, if applicable, will be communicated to you before services are rendered. All fees are non-refundable unless otherwise specified in a written agreement. Payment terms will be outlined in individual service agreements or contracts.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-poppins font-semibold text-petrozin-navy mb-4">
                  7. Intellectual Property
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  All content on this website, including text, graphics, logos, images, and software, is the property of Petrozin or its licensors and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our written permission.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-poppins font-semibold text-petrozin-navy mb-4">
                  8. User Conduct
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You agree not to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Use our services for any illegal or unauthorized purpose</li>
                  <li>Violate any laws in your jurisdiction or Qatar</li>
                  <li>Infringe upon the rights of others</li>
                  <li>Transmit any viruses, malware, or harmful code</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with or disrupt our services</li>
                  <li>Provide false or misleading information</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-poppins font-semibold text-petrozin-navy mb-4">
                  9. Disclaimers and Limitations of Liability
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our services are provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either express or implied. We do not warrant that:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Our services will be uninterrupted or error-free</li>
                  <li>Defects will be corrected</li>
                  <li>Our website or services are free of viruses or other harmful components</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  To the maximum extent permitted by law, Petrozin shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-poppins font-semibold text-petrozin-navy mb-4">
                  10. Indemnification
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  You agree to indemnify, defend, and hold harmless Petrozin, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses arising from your use of our services or violation of these Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-poppins font-semibold text-petrozin-navy mb-4">
                  11. Termination
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right to terminate or suspend your access to our services immediately, without prior notice, for any reason, including breach of these Terms. Upon termination, your right to use our services will cease immediately.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-poppins font-semibold text-petrozin-navy mb-4">
                  12. Governing Law and Jurisdiction
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of the State of Qatar. Any disputes arising from these Terms or our services shall be subject to the exclusive jurisdiction of the courts of Qatar.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-poppins font-semibold text-petrozin-navy mb-4">
                  13. Changes to Terms
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the updated Terms on our website and updating the &quot;Last Updated&quot; date. Your continued use of our services after changes constitutes acceptance of the modified Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-poppins font-semibold text-petrozin-navy mb-4">
                  14. Severability
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-poppins font-semibold text-petrozin-navy mb-4">
                  15. Contact Information
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have any questions about these Terms of Service, please contact us:
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

