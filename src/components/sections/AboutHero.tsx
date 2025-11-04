'use client';

import { motion } from 'framer-motion';
import { Target, Award, Users } from 'lucide-react';

const AboutHero = () => {
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

  // const stats = [
  //   { icon: Users, number: '500+', label: 'Projects Completed' },
  //   { icon: Award, number: '15+', label: 'Years Experience' },
  //   { icon: Target, number: '5+', label: 'Countries Served' },
  // ];

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
            About{' '}
            <span className="text-petrozin-gold">Petrozin</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-xl sm:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            We are a trusted partner in the industrial workforce sector, connecting businesses with highly skilled professionals 
            and delivering comprehensive project support solutions worldwide.
          </motion.p>

          {/* Stats */}
          {/* <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
            variants={itemVariants}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-petrozin-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-petrozin-gold" size={32} />
                </div>
                <div className="text-3xl font-poppins font-bold text-petrozin-gold mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div> */}

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
              <span className="text-sm font-medium">Global Network</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-petrozin-gold rounded-full"></div>
              <span className="text-sm font-medium">Trusted Partner</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero; 