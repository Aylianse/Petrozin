'use client';

import { motion } from 'framer-motion';
import { Heart, Shield, Users, Zap, Target, Award } from 'lucide-react';

const CompanyValues = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const values = [
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We conduct business with honesty, transparency, and ethical practices in all our relationships.',
      color: 'from-red-500 to-pink-600',
    },
    {
      icon: Shield,
      title: 'Quality',
      description: 'We maintain the highest standards of excellence in every service we provide and every professional we place.',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'We build long-term relationships based on trust, collaboration, and mutual success with our clients.',
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We continuously improve our processes and embrace new technologies to deliver better solutions.',
      color: 'from-yellow-500 to-orange-600',
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from recruitment to project delivery and support.',
      color: 'from-purple-500 to-pink-600',
    },
    {
      icon: Award,
      title: 'Reliability',
      description: 'We deliver on our promises consistently, ensuring our clients can depend on us for their workforce needs.',
      color: 'from-teal-500 to-cyan-600',
    },
  ];

  return (
    <section className="section-padding bg-petrozin-gray">
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
            Our Core{' '}
            <span className="text-gradient">Values</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            These fundamental principles guide our actions, decisions, and relationships, 
            ensuring we maintain the highest standards of excellence and integrity.
          </p>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              variants={itemVariants}
              className="group"
            >
              <motion.div
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full card-hover"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <value.icon className="text-white" size={32} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-poppins font-semibold text-petrozin-navy mb-4 group-hover:text-petrozin-gold transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>

                {/* Hover Effect Line */}
                <div className={`mt-6 w-0 h-1 bg-gradient-to-r ${value.color} group-hover:w-full transition-all duration-500 rounded-full`}></div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Statement */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-petrozin-navy rounded-3xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-poppins font-bold mb-4">
              Living Our Values
            </h3>
            <p className="text-lg text-gray-200 leading-relaxed">
              Our values are not just words on paper — they are the foundation of our company culture and the principles 
              that guide every interaction with our clients, partners, and team members.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyValues; 