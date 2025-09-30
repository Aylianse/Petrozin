'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactHero = () => {
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

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      value: '+97444512393',
      color: 'from-petrozin-gold to-petrozin-gold/80',
    },
    {
      icon: Mail,
      title: 'Email Us',
      value: 'info@petrozin.com',
      color: 'from-petrozin-sky to-petrozin-sky/80',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      value: '123 Business District, Suite 100',
      color: 'from-petrozin-gold to-petrozin-sky',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: 'Mon-Fri: 8AM-6PM EST',
      color: 'from-petrozin-sky to-petrozin-gold',
    },
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
            Get in{' '}
            <span className="text-petrozin-gold">Touch</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-xl sm:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Ready to discuss your workforce needs? Our team is here to help you find the perfect solution 
            for your business requirements.
          </motion.p>

          {/* Contact Methods Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={itemVariants}
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <method.icon className="text-white" size={28} />
                </div>
                <h3 className="text-lg font-poppins font-semibold text-white mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-200 text-sm">
                  {method.value}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="flex flex-wrap justify-center items-center gap-8 text-gray-300 mt-12"
            variants={itemVariants}
          >
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-petrozin-gold rounded-full"></div>
              <span className="text-sm font-medium">24/7 Support Available</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-petrozin-sky rounded-full"></div>
              <span className="text-sm font-medium">Quick Response Time</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-petrozin-gold rounded-full"></div>
              <span className="text-sm font-medium">Expert Consultation</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero; 