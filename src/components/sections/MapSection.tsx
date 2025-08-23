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
            Located in the heart of the business district, our office is easily accessible 
            and ready to welcome you for in-person consultations.
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
              <div className="aspect-video bg-gradient-to-br from-petrozin-navy to-petrozin-sky rounded-2xl overflow-hidden relative">
                {/* Placeholder for Google Maps - Replace with actual embed */}
                <div className="absolute inset-0 bg-[url('/office-map.jpg')] bg-cover bg-center bg-no-repeat opacity-60"></div>
                
                {/* Map Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-petrozin-navy via-transparent to-transparent"></div>
                
                {/* Location Pin */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-16 h-16 bg-petrozin-gold rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                    <MapPin className="text-petrozin-navy" size={24} />
                  </div>
                </div>

                {/* Map Controls */}
                <div className="absolute bottom-4 right-4 flex space-x-2">
                  <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white transition-colors duration-300">
                    <Navigation className="text-petrozin-navy" size={20} />
                  </button>
                </div>
              </div>

              {/* Map Info */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-petrozin-gold" />
                  <span className="text-gray-700">123 Business District, Suite 100, New York, NY 10001</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-petrozin-sky" />
                  <span className="text-gray-700">Open Mon-Fri: 8AM-6PM EST</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-petrozin-gold" />
                  <span className="text-gray-700">+1 (555) 123-4567</span>
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
                Our centrally located office provides easy access for clients and partners. 
                We offer comfortable meeting spaces and modern facilities for consultations and presentations.
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
                    Subway: A, C, E trains to 42nd Street-Port Authority Bus Terminal<br />
                    Bus: M42, M104, M11 routes
                  </p>
                </div>
                <div className="bg-petrozin-gray/50 rounded-xl p-4">
                  <h5 className="font-semibold text-petrozin-navy mb-2">Parking</h5>
                  <p className="text-gray-600 text-sm">
                    Street parking available (metered)<br />
                    Nearby parking garages with hourly rates
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