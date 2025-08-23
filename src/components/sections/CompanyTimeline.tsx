'use client';

import { motion } from 'framer-motion';
import { Calendar, Award, Globe, Users, Target, Star } from 'lucide-react';

const CompanyTimeline = () => {
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

  const timeline = [
    {
      year: '2009',
      title: 'Company Founded',
      description: 'Petrozin was established with a vision to revolutionize industrial workforce solutions.',
      icon: Calendar,
      color: 'from-petrozin-gold to-petrozin-gold/80',
    },
    {
      year: '2012',
      title: 'First Major Contract',
      description: 'Secured our first major oil & gas industry contract, establishing credibility in the sector.',
      icon: Award,
      color: 'from-petrozin-sky to-petrozin-sky/80',
    },
    {
      year: '2015',
      title: 'ISO Certification',
      description: 'Achieved ISO 9001:2015 certification, demonstrating our commitment to quality standards.',
      icon: Star,
      color: 'from-petrozin-gold to-petrozin-sky',
    },
    {
      year: '2018',
      title: 'Global Expansion',
      description: 'Expanded operations to 25+ countries, building a truly global talent network.',
      icon: Globe,
      color: 'from-petrozin-sky to-petrozin-gold',
    },
    {
      year: '2021',
      title: 'Digital Transformation',
      description: 'Launched advanced digital platforms for streamlined workforce management and client services.',
      icon: Target,
      color: 'from-petrozin-gold to-petrozin-gold/80',
    },
    {
      year: '2024',
      title: 'Industry Leader',
      description: 'Recognized as a leading manpower solutions provider with 500+ successful projects completed.',
      icon: Users,
      color: 'from-petrozin-sky to-petrozin-sky/80',
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-petrozin-navy mb-6">
            Our{' '}
            <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From humble beginnings to industry leadership, discover the key milestones that have shaped 
            Petrozin into the trusted workforce partner we are today.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="relative max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-petrozin-gold to-petrozin-sky"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                className="relative flex items-start space-x-8"
                variants={itemVariants}
              >
                {/* Year Badge */}
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center shadow-lg`}>
                    <span className="text-white font-poppins font-bold text-sm">{item.year}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-petrozin-gray/50 rounded-2xl p-6 border-l-4 border-petrozin-gold">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className={`w-8 h-8 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center`}>
                      <item.icon className="text-white" size={18} />
                    </div>
                    <h3 className="text-xl font-poppins font-semibold text-petrozin-navy">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Future Vision */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-gradient-to-r from-petrozin-navy to-petrozin-sky rounded-3xl p-8 text-white max-w-3xl mx-auto">
            <h3 className="text-2xl font-poppins font-bold mb-4">
              Looking Forward
            </h3>
            <p className="text-lg text-gray-200 leading-relaxed">
              As we continue to grow and evolve, our commitment to excellence, innovation, and partnership remains unwavering. 
              The future holds exciting opportunities for Petrozin and our valued clients.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyTimeline; 