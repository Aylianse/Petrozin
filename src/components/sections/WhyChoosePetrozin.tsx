'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Award, Globe, Shield, Headphones, Star, TrendingUp, Users } from 'lucide-react';
import { useRef } from 'react';

const WhyChoosePetrozin = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, rotateX: -15 },
    visible: { opacity: 1, y: 0, rotateX: 0 },
  };

  const features = [
    {
      icon: Award,
      title: 'Industry-Specific Expertise',
      description: 'Deep understanding of oil & gas, construction, manufacturing, and energy sectors with proven track records.',
      color: 'from-petrozin-gold to-petrozin-gold/80',
      image: '/images/industry-expertise.jpg',
      stats: 'Proven Expertise'
    },
    {
      icon: Shield,
      title: 'Quality & Compliance',
      description: 'ISO certified processes, rigorous quality checks, and full compliance with international standards.',
      color: 'from-petrozin-sky to-petrozin-sky/80',
      image: '/images/quality-compliance.jpg',
      stats: 'ISO 9001:2015'
    },
    {
      icon: Globe,
      title: 'Global Talent Network',
      description: 'Access to a worldwide pool of qualified professionals across diverse industries and specializations.',
      color: 'from-petrozin-gold to-petrozin-sky',
      image: '/images/global-talent.jpg',
      stats: '5+ Countries'
    },
    {
      icon: Headphones,
      title: 'End-to-End Support',
      description: 'Comprehensive service from initial consultation to project completion with ongoing support.',
      color: 'from-petrozin-sky to-petrozin-gold',
      image: '/images/end-to-end-support.jpg',
      stats: '24/7 Available'
    },
  ];

  return (
    <section ref={containerRef} className="section-padding bg-petrozin-gray relative overflow-hidden">
      {/* Background Elements with Parallax */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ y }}
      >
        <div className="absolute top-20 left-20 w-32 h-32 bg-petrozin-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-petrozin-sky/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-petrozin-gold/3 rounded-full blur-2xl"></div>
        
        {/* Geometric Shapes */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-16 h-16 border border-petrozin-gold/10 rotate-45"
          animate={{
            rotate: [45, 225, 45],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-12 h-12 border border-petrozin-sky/10 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{ duration: 6, repeat: Infinity, delay: 2 }}
        />
      </motion.div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-petrozin-gold/10 to-petrozin-sky/10 border border-petrozin-gold/20 rounded-full px-4 py-2 mb-6"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            <Star className="w-4 h-4 text-petrozin-gold" />
            <span className="text-petrozin-gold font-inter font-medium text-sm">Why Choose Us</span>
          </motion.div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-poppins font-bold text-petrozin-navy mb-4">
            Why Choose{' '}
            <span className="text-gradient">Petrozin</span>?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We don&apos;t just fill positions — we ensure the right fit for your business and your culture. 
            Our commitment to excellence sets us apart in the industry.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              className="group"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 h-full overflow-hidden relative"
                whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                transition={{ duration: 0.3 }}
              >
                {/* Feature Image */}
                <div className="relative w-full h-32 mb-4 rounded-lg overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  
                  {/* Stats Badge */}
                  <motion.div
                    className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <span className="text-xs font-poppins font-bold text-petrozin-navy">{feature.stats}</span>
                  </motion.div>
                </div>

                {/* Icon Container */}
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="text-white" size={28} />
                </motion.div>

                {/* Content */}
                <h3 className="text-lg font-poppins font-semibold text-petrozin-navy mb-3 group-hover:text-petrozin-gold transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {feature.description}
                </p>

                {/* Hover Effect Line */}
                <motion.div 
                  className="w-0 h-0.5 bg-gradient-to-r from-petrozin-gold to-petrozin-sky group-hover:w-full transition-all duration-500 rounded-full"
                  whileHover={{ width: "100%" }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Stats with Enhanced Animation */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div 
            className="space-y-2 p-6 bg-white rounded-xl shadow-lg border border-gray-100"
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="text-3xl font-poppins font-bold text-petrozin-gold"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, type: "spring" }}
            >
              500+
            </motion.div>
            <div className="text-sm text-gray-600 font-medium">Qualified Staff Deployed</div>
            <TrendingUp className="w-6 h-6 text-petrozin-gold mx-auto mt-2" />
          </motion.div>
          
          <motion.div 
            className="space-y-2 p-6 bg-white rounded-xl shadow-lg border border-gray-100"
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="text-3xl font-poppins font-bold text-petrozin-sky"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, type: "spring" }}
            >
              5+
            </motion.div>
            <div className="text-sm text-gray-600 font-medium">Countries Served</div>
            <Globe className="w-6 h-6 text-petrozin-sky mx-auto mt-2" />
          </motion.div>
          
          <motion.div 
            className="space-y-2 p-6 bg-white rounded-xl shadow-lg border border-gray-100"
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="text-3xl font-poppins font-bold text-petrozin-gold"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1, type: "spring" }}
            >
              98%
            </motion.div>
            <div className="text-sm text-gray-600 font-medium">Client Satisfaction</div>
            <Users className="w-6 h-6 text-petrozin-gold mx-auto mt-2" />
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-1/4 w-2 h-2 bg-petrozin-gold rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-petrozin-sky rounded-full"
          animate={{
            y: [0, 15, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-petrozin-gold rounded-full"
          animate={{
            y: [0, -25, 0],
            opacity: [0.2, 0.7, 0.2],
            scale: [1, 1.4, 1],
          }}
          transition={{ duration: 3.5, repeat: Infinity, delay: 2 }}
        />
      </div>
    </section>
  );
};

export default WhyChoosePetrozin; 