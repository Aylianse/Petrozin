'use client';

import { motion } from 'framer-motion';
import { MapPin, Navigation, Clock, Phone } from 'lucide-react';

const MapSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-petrozin-navy mb-6">
            Visit Our{' '}
            <span className="text-gradient">Office</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Located in the core center of Doha, near Doha Al Jadeeda Metro Station. Our office is easily accessible 
            via public transportation and ready to welcome you for in-person consultations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Map */}
          <motion.div
            className="relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="bg-petrozin-gray rounded-3xl p-8 border-2 border-gray-100 shadow-lg"
              variants={itemVariants}
            >
              <div className="aspect-video rounded-2xl overflow-hidden relative">
                {/* Google Maps Embed */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.8!2d51.531!3d25.2854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE3JzA3LjQiTiA1McKwMzEnNTIuOCJF!5e0!3m2!1sen!2sqa!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                  title="Petrozin Office Location"
                ></iframe>
              </div>

              {/* Map Info */}
              <div className="mt-6 space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-petrozin-gold mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">BIN SHEIKH BUILDING, 5th Floor, Office 502, Above Al Anees Store, Near Doha Al Jadeeda Metro Station, Doha, Qatar</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-petrozin-sky flex-shrink-0" />
                  <span className="text-gray-700">Mon-Thu: 8AM-5PM | Sat: 8AM-12PM | Fri: Closed</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-petrozin-gold flex-shrink-0" />
                  <span className="text-gray-700">+97444512393 | WhatsApp: +97470820576</span>
                </div>
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-petrozin-gold/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-petrozin-sky/10 rounded-full blur-xl"></div>
          </motion.div>

          {/* Office Information */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl sm:text-3xl font-poppins font-bold text-petrozin-navy mb-4">
                Office Location & Details
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our centrally located office in BIN SHEIKH BUILDING provides easy access for clients and partners. 
                Located above Al Anees Store and just steps from Doha Al Jadeeda Metro Station, we&apos;re in the core center of Doha.
              </p>
            </motion.div>

            {/* Office Features */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h4 className="text-xl font-poppins font-semibold text-petrozin-navy">
                Office Features
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Conference Rooms',
                  'Client Meeting Areas',
                  'Modern Technology',
                  'Comfortable Waiting Area',
                  'Parking Available',
                  'Public Transport Access',
                ].map((feature, index) => (
                  <motion.div
                    key={feature}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-petrozin-gold rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Transportation */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h4 className="text-xl font-poppins font-semibold text-petrozin-navy">
                Getting Here
              </h4>
              <div className="space-y-3">
                <div className="bg-petrozin-gray/50 rounded-xl p-4">
                  <h5 className="font-semibold text-petrozin-navy mb-2">Public Transportation</h5>
                  <p className="text-gray-600 text-sm">
                    <strong>Doha Al Jadeeda Metro Station</strong> - 2 minutes walk<br />
                    <strong>Bus Station</strong> - Adjacent to metro<br />
                    Easy access from all parts of Doha
                  </p>
                </div>
                <div className="bg-petrozin-gray/50 rounded-xl p-4">
                  <h5 className="font-semibold text-petrozin-navy mb-2">Location Advantages</h5>
                  <p className="text-gray-600 text-sm">
                    ✓ Core center of Doha<br />
                    ✓ Above Al Anees Store (landmark)<br />
                    ✓ Excellent public transport connectivity
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div variants={itemVariants}>
              <div className="bg-gradient-to-r from-petrozin-navy to-petrozin-sky rounded-2xl p-6 text-white">
                <h4 className="text-xl font-poppins font-semibold mb-3">
                  Schedule an Office Visit
                </h4>
                <p className="text-gray-200 mb-4">
                  Prefer to meet in person? Schedule a visit to our office for a comprehensive consultation.
                </p>
                <button className="btn-primary">
                  Book Appointment
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MapSection; 