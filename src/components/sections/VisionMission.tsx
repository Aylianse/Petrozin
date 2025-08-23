'use client';

import { motion } from 'framer-motion';
import { Eye, Target, Star, Award } from 'lucide-react';

const VisionMission = () => {
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
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Section Header */}
          <motion.div
            className="text-center mb-20"
            variants={itemVariants}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-petrozin-navy mb-6">
              Our{' '}
              <span className="text-gradient">Vision</span>{' '}
              &{' '}
              <span className="text-gradient">Mission</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We are driven by a clear vision and mission that guides everything we do, 
              ensuring we deliver exceptional value to our clients and partners.
            </p>
          </motion.div>

          {/* Vision & Mission Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Vision Card */}
            <motion.div
              className="relative group"
              variants={itemVariants}
            >
              <div className="bg-gradient-to-br from-petrozin-gold/5 to-petrozin-gold/10 rounded-3xl p-8 border-2 border-petrozin-gold/20 h-full">
                {/* Icon */}
                <div className="w-20 h-20 bg-gradient-to-br from-petrozin-gold to-petrozin-gold/80 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Eye className="text-white" size={40} />
                </div>

                {/* Content */}
                <h3 className="text-2xl sm:text-3xl font-poppins font-bold text-petrozin-navy mb-4">
                  Our Vision
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  To be the most trusted manpower partner for global industries, recognized for our unwavering commitment to excellence, 
                  innovation, and sustainable workforce solutions.
                </p>

                {/* Vision Points */}
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Star className="w-5 h-5 text-petrozin-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Global leadership in industrial workforce solutions</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Star className="w-5 h-5 text-petrozin-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Trusted partner for Fortune 500 companies</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Star className="w-5 h-5 text-petrozin-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Innovation in workforce management and technology</span>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-petrozin-gold/10 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-petrozin-gold/20 rounded-full blur-lg"></div>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              className="relative group"
              variants={itemVariants}
            >
              <div className="bg-gradient-to-br from-petrozin-sky/5 to-petrozin-sky/10 rounded-3xl p-8 border-2 border-petrozin-sky/20 h-full">
                {/* Icon */}
                <div className="w-20 h-20 bg-gradient-to-br from-petrozin-sky to-petrozin-sky/80 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Target className="text-white" size={40} />
                </div>

                {/* Content */}
                <h3 className="text-2xl sm:text-3xl font-poppins font-bold text-petrozin-navy mb-4">
                  Our Mission
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Delivering quality workforce solutions with integrity, expertise, and efficiency, 
                  while fostering long-term partnerships that drive mutual success and industry advancement.
                </p>

                {/* Mission Points */}
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Award className="w-5 h-5 text-petrozin-sky mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Excellence in service delivery and quality assurance</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Award className="w-5 h-5 text-petrozin-sky mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Ethical business practices and transparency</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Award className="w-5 h-5 text-petrozin-sky mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Continuous improvement and innovation</span>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-petrozin-sky/10 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-petrozin-sky/20 rounded-full blur-lg"></div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Statement */}
          <motion.div
            className="text-center mt-16"
            variants={itemVariants}
          >
            <div className="bg-petrozin-navy rounded-3xl p-8 text-white max-w-4xl mx-auto">
              <h3 className="text-2xl font-poppins font-bold mb-4">
                Our Commitment
              </h3>
              <p className="text-lg text-gray-200 leading-relaxed">
                &ldquo;Every decision we make, every service we provide, and every partnership we build is guided by our vision and mission. 
                We are committed to being the workforce partner that industries can rely on, today and tomorrow.&rdquo;
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionMission; 