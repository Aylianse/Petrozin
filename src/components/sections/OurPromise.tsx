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

  const rightItemVariants = {
    hidden: { opacity: 0, x: 30 },
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
          {/* Left Side - Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-petrozin-navy to-petrozin-navy/80 relative">
                {/* Placeholder for actual image */}
                <div className="absolute inset-0 bg-[url('/promise-image.jpg')] bg-cover bg-center bg-no-repeat opacity-60"></div>
                
                {/* Overlay Elements */}
                <div className="absolute inset-0 bg-gradient-to-t from-petrozin-navy via-transparent to-transparent"></div>
                
                {/* Floating Elements */}
                <motion.div
                  className="absolute top-8 right-8 w-16 h-16 bg-petrozin-gold/20 rounded-full backdrop-blur-sm border border-petrozin-gold/30"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div
                  className="absolute bottom-8 left-8 w-12 h-12 bg-petrozin-sky/20 rounded-full backdrop-blur-sm border border-petrozin-sky/30"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, -5, 0],
                  }}
                  transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-petrozin-gold/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-petrozin-sky/10 rounded-full blur-xl"></div>
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