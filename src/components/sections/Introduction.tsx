'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { Users, Briefcase, Wrench, ArrowRight, Sparkles, Zap, Target } from 'lucide-react';
import { useRef } from 'react';

const Introduction = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
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
    hidden: { opacity: 0, y: 60, rotateY: -15 },
    visible: { opacity: 1, y: 0, rotateY: 0 },
  };

  const services = [
    {
      icon: Users,
      title: 'Manpower Supply',
      description: 'Connect with highly skilled professionals tailored to your industry needs.',
      href: '/services#manpower',
      color: 'from-petrozin-gold to-petrozin-gold/80',
      image: '/images/manpower-supply.jpg',
      features: ['Skilled Professionals', 'Industry Expertise', 'Quality Assurance']
    },
    {
      icon: Briefcase,
      title: 'Project Support',
      description: 'Comprehensive assistance for specialized tasks and project execution.',
      href: '/services#project-support',
      color: 'from-petrozin-sky to-petrozin-sky/80',
      image: '/images/project-support.jpg',
      features: ['Project Management', 'Resource Planning', 'Timeline Control']
    },
    {
      icon: Wrench,
      title: 'Technical Expertise',
      description: 'Access to engineers, technicians, and skilled tradespeople.',
      href: '/services#technical',
      color: 'from-petrozin-gold to-petrozin-sky',
      image: '/images/technical-expertise.jpg',
      features: ['Engineering Support', 'Technical Solutions', 'Innovation']
    },
  ];

  return (
    <section id="content" ref={containerRef} className="section-padding bg-white relative overflow-hidden">
      {/* Background Elements with Parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 bg-petrozin-orange/5 rounded-full blur-3xl"
          style={{ y: y }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-40 h-40 bg-petrozin-red/5 rounded-full blur-3xl"
          style={{ y: y }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-petrozin-orange/3 rounded-full blur-2xl"
          style={{ y: y }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Mission Badge */}
          <motion.div
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-petrozin-orange/10 to-petrozin-red/10 border border-petrozin-orange/20 rounded-full px-4 py-2 mb-6"
            variants={itemVariants}
          >
            <Target className="w-4 h-4 text-petrozin-orange" />
            <span className="text-petrozin-orange font-inter font-medium text-sm">Our Mission</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h2 
            className="text-2xl sm:text-3xl lg:text-4xl font-poppins font-bold text-petrozin-dark-grey mb-4"
            variants={itemVariants}
          >
            At Petrozin, we{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-petrozin-orange to-petrozin-red">
              connect exceptional talent
            </span>{' '}
            with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-petrozin-orange to-petrozin-red">
              extraordinary opportunities
            </span>
          </motion.h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We streamline project execution and deliver tailored industrial workforce solutions that drive your business forward. 
            Our commitment to excellence ensures you get the right talent, at the right time, for the right project.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-petrozin-orange/20 overflow-hidden"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-petrozin-orange/5 to-petrozin-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              
              {/* Icon */}
              <motion.div 
                className="w-16 h-16 bg-gradient-to-br from-petrozin-orange to-petrozin-red rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <service.icon className="w-8 h-8 text-white" />
              </motion.div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-poppins font-bold text-petrozin-dark-grey mb-3 group-hover:text-petrozin-orange transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Feature List */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-petrozin-orange rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <div className="flex items-center text-petrozin-orange group-hover:text-petrozin-red transition-colors duration-300">
                  <span className="font-medium text-sm">Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link href="/services">
            <motion.button 
              className="btn-secondary text-base px-6 py-3 group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View All Services</span>
              <motion.div
                className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                whileHover={{ x: 5 }}
              >
                <ArrowRight size={16} />
              </motion.div>
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-1/4 w-2 h-2 bg-petrozin-orange rounded-full"
          animate={{
            y: [0, -10, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-petrozin-red rounded-full"
          animate={{
            y: [0, 8, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />
      </div>
    </section>
  );
};

export default Introduction; 