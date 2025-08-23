'use client';

import { motion } from 'framer-motion';
import { Users, Briefcase, Wrench } from 'lucide-react';

const ServicesHero = () => {
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

  const serviceIcons = [
    { icon: Users, color: 'from-petrozin-gold to-petrozin-gold/80' },
    { icon: Briefcase, color: 'from-petrozin-sky to-petrozin-sky/80' },
    { icon: Wrench, color: 'from-petrozin-gold to-petrozin-sky' },
  ];

  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-petrozin-navy via-petrozin-navy/90 to-petrozin-navy/80 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-petrozin-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-petrozin-sky/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container-custom text-center">
        <motion.div
          className="max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Headline */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-bold text-white mb-6 leading-tight"
            variants={itemVariants}
          >
            Comprehensive{' '}
            <span className="text-petrozin-gold">Workforce</span>{' '}
            Solutions
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-xl sm:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            From skilled manpower supply to complete project support, we deliver tailored solutions that drive your business success across all industrial sectors.
          </motion.p>

          {/* Service Icons */}
          <motion.div
            className="flex justify-center items-center space-x-8 mb-8"
            variants={itemVariants}
          >
            {serviceIcons.map((service, index) => (
              <motion.div
                key={index}
                className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center shadow-lg`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <service.icon className="text-white" size={32} />
              </motion.div>
            ))}
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="flex flex-wrap justify-center items-center gap-8 text-gray-300"
            variants={itemVariants}
          >
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-petrozin-gold rounded-full"></div>
              <span className="text-sm font-medium">ISO 9001:2015 Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-petrozin-sky rounded-full"></div>
              <span className="text-sm font-medium">Global Talent Network</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-petrozin-gold rounded-full"></div>
              <span className="text-sm font-medium">24/7 Project Support</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesHero; 