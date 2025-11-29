'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Phone, Mail, FileText, Facebook, Linkedin } from 'lucide-react';

const CTABanner = () => {
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
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-petrozin-dark-grey via-petrozin-dark-grey/95 to-petrozin-dark-grey/90">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-64 h-64 bg-petrozin-orange/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-petrozin-red/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-petrozin-orange/3 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center">
        <motion.div
          className="max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Main Headline */}
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-bold text-white mb-6 leading-tight"
            variants={itemVariants}
          >
            Ready to Transform Your{' '}
            <span className="text-petrozin-orange">Workforce</span>?
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            className="text-xl sm:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Let&apos;s discuss how Petrozin can provide the skilled professionals and project support your business needs to succeed.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 flex-wrap"
            variants={itemVariants}
          >
            <Link href="/contact">
              <button className="bg-gradient-to-r from-petrozin-orange to-petrozin-red text-white font-poppins font-bold text-lg px-10 py-5 rounded-xl hover:from-petrozin-orange/90 hover:to-petrozin-red/90 transition-all duration-300 shadow-lg border-2 border-transparent hover:border-petrozin-orange/30 flex items-center space-x-2 group transform hover:scale-105">
                <span>Get in Touch</span>
                <ArrowRight className="ml-3 inline-block group-hover:translate-x-1 transition-transform duration-300" size={24} />
              </button>
            </Link>
            <Link href="/services">
              <button className="border-2 border-petrozin-orange text-petrozin-orange hover:bg-petrozin-orange hover:text-white font-poppins font-bold px-10 py-5 rounded-xl transition-all duration-300 transform hover:scale-105 text-lg backdrop-blur-sm">
                Explore Services
              </button>
            </Link>
            <Link href="/vendor-registration">
              <button className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white hover:text-petrozin-navy font-poppins font-bold px-10 py-5 rounded-xl transition-all duration-300 transform hover:scale-105 text-lg flex items-center space-x-2 group">
                <FileText size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                <span>Vendor Registration</span>
              </button>
            </Link>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            className="flex flex-col sm:flex-row gap-8 justify-center items-center text-white"
            variants={itemVariants}
          >
            <div className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-petrozin-orange/20 rounded-full flex items-center justify-center group-hover:bg-petrozin-orange/30 transition-colors duration-300">
                <Phone size={24} className="text-petrozin-orange" />
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-300">Call Us</p>
                <p className="font-semibold">+97444512393</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-petrozin-red/20 rounded-full flex items-center justify-center group-hover:bg-petrozin-red/30 transition-colors duration-300">
                <Mail size={24} className="text-petrozin-red" />
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-300">Email Us</p>
                <p className="font-semibold">info@petrozin.com</p>
              </div>
            </div>
          </motion.div>

          {/* Social Media Links */}
          <motion.div
            className="flex justify-center items-center gap-4 mt-8"
            variants={itemVariants}
          >
            <span className="text-gray-300 text-sm font-medium">Follow Us:</span>
            <motion.a
              href="https://www.facebook.com/Qatarshorttermwork"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300 border border-white/20"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Facebook size={20} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/admin-petrozin-arabia-265336300/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300 border border-white/20"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={20} />
            </motion.a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="mt-12 pt-8 border-t border-white/20"
            variants={itemVariants}
          >
            <p className="text-gray-300 text-sm">
              Trusted by 50+ companies worldwide • ISO 9001:2015 Certified • 24/7 Support Available
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-10 right-10 w-20 h-20 bg-petrozin-orange/20 rounded-full"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-16 h-16 bg-petrozin-red/20 rounded-full"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      />
    </section>
  );
};

export default CTABanner; 