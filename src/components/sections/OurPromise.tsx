'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Star, Award } from 'lucide-react';

const OurPromise = () => {
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
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  };

  const promises = [
    {
      icon: CheckCircle,
      text: 'Rigorous screening and qualification processes',
      color: 'text-petrozin-gold',
    },
    {
      icon: Star,
      text: 'Industry-specific expertise and certifications',
      color: 'text-petrozin-sky',
    },
    {
      icon: Award,
      text: 'Ongoing support and performance monitoring',
      color: 'text-petrozin-gold',
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Interactive Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Main Interactive Container */}
              <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-petrozin-navy via-petrozin-navy/95 to-petrozin-navy/90 relative p-8 flex items-center justify-center">
                
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-full h-full" style={{
                    backgroundImage: 'radial-gradient(circle, rgba(230,126,34,0.3) 1px, transparent 1px)',
                    backgroundSize: '50px 50px'
                  }}></div>
                </div>
                
                {/* Central Focus Area */}
                <div className="relative z-10 text-center">
                  <motion.div
                    className="mb-8"
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-petrozin-gold to-petrozin-orange rounded-full flex items-center justify-center shadow-2xl">
                      <CheckCircle size={64} className="text-white" />
                    </div>
                    <h3 className="text-white text-2xl font-bold mb-2">Quality Guaranteed</h3>
                    <p className="text-gray-300 text-sm">Every hire, every time</p>
                  </motion.div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <motion.div
                      className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-3xl font-bold text-petrozin-gold mb-1">98%</div>
                      <div className="text-xs text-gray-300">Client Satisfaction</div>
                    </motion.div>
                    <motion.div
                      className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-3xl font-bold text-petrozin-gold mb-1">2000+</div>
                      <div className="text-xs text-gray-300">Staff Deployed</div>
                    </motion.div>
                  </div>
                </div>
                
                {/* Floating Animated Elements */}
                <motion.div
                  className="absolute top-12 right-12 w-20 h-20 bg-petrozin-gold/20 rounded-full backdrop-blur-sm border border-petrozin-gold/30 flex items-center justify-center"
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Star size={32} className="text-petrozin-gold" />
                </motion.div>
                
                <motion.div
                  className="absolute bottom-12 left-12 w-16 h-16 bg-petrozin-orange/20 rounded-full backdrop-blur-sm border border-petrozin-orange/30 flex items-center justify-center"
                  animate={{
                    y: [0, 20, 0],
                    rotate: [0, -5, 0],
                  }}
                  transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                >
                  <Award size={28} className="text-petrozin-orange" />
                </motion.div>

                {/* Corner Decorations */}
                <motion.div
                  className="absolute top-6 left-6 w-3 h-3 bg-petrozin-gold rounded-full"
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute bottom-6 right-6 w-3 h-3 bg-petrozin-orange rounded-full"
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
              </div>

              {/* Outer Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-petrozin-gold/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-petrozin-orange/10 rounded-full blur-xl"></div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-petrozin-navy mb-6">
                Our Promise to{' '}
                <span className="text-gradient">You</span>
              </h2>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8">
                We don&apos;t just fill positions — we ensure the right fit for your business and your culture. 
                Every professional we provide is carefully selected, thoroughly vetted, and perfectly matched to your specific requirements.
              </p>
            </motion.div>

            {/* Promise Points */}
            <motion.div variants={itemVariants} className="space-y-6">
              {promises.map((promise, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`flex-shrink-0 w-6 h-6 ${promise.color}`}>
                    <promise.icon size={24} />
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {promise.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Trust Statement */}
            <motion.div
              variants={itemVariants}
              className="bg-petrozin-gray/50 rounded-2xl p-6 border-l-4 border-petrozin-gold"
            >
              <p className="text-petrozin-navy font-medium text-lg leading-relaxed">
                &ldquo;When you choose Petrozin, you&apos;re choosing a partner who understands that your success is our success.&rdquo;
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurPromise; 