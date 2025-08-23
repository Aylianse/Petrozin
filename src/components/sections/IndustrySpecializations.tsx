'use client';

import { motion } from 'framer-motion';
import { Flame, Building2, Factory, Zap, ArrowRight } from 'lucide-react';

const IndustrySpecializations = () => {
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

  const industries = [
    {
      id: 'oil-gas',
      icon: Flame,
      title: 'Oil & Gas',
      description: 'Comprehensive manpower solutions for upstream, midstream, and downstream operations including drilling, production, refining, and distribution.',
      specialties: ['Drilling Engineers', 'Production Technicians', 'Refinery Operators', 'Pipeline Specialists'],
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
    },
    {
      id: 'construction',
      icon: Building2,
      title: 'Construction & Engineering',
      description: 'Skilled professionals for infrastructure projects, commercial buildings, industrial facilities, and specialized construction services.',
      specialties: ['Civil Engineers', 'Project Managers', 'Safety Officers', 'Quality Inspectors'],
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
    },
    {
      id: 'manufacturing',
      icon: Factory,
      title: 'Manufacturing',
      description: 'Expert workforce for automotive, aerospace, electronics, and general manufacturing operations with focus on quality and efficiency.',
      specialties: ['Process Engineers', 'Quality Control', 'Maintenance Techs', 'Production Supervisors'],
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
    },
    {
      id: 'energy-utilities',
      icon: Zap,
      title: 'Energy & Utilities',
      description: 'Specialized professionals for power generation, renewable energy, water treatment, and utility infrastructure maintenance.',
      specialties: ['Power Engineers', 'Solar Technicians', 'Water Treatment', 'Grid Operators'],
      color: 'from-yellow-500 to-amber-600',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
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
            Industry{' '}
            <span className="text-gradient">Specializations</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We serve diverse industrial sectors with specialized expertise and tailored workforce solutions 
            that meet the unique challenges and requirements of each industry.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {industries.map((industry, index) => (
            <motion.div
              key={industry.id}
              id={industry.id}
              variants={itemVariants}
              className="group"
            >
              <motion.div
                className={`${industry.bgColor} ${industry.borderColor} border-2 rounded-3xl p-8 h-full card-hover`}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Industry Header */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${industry.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <industry.icon className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-poppins font-bold text-petrozin-navy group-hover:text-petrozin-gold transition-colors duration-300">
                      {industry.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed mb-6">
                  {industry.description}
                </p>

                {/* Specialties */}
                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-petrozin-navy">Key Specialties:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {industry.specialties.map((specialty, specialtyIndex) => (
                      <motion.div
                        key={specialtyIndex}
                        className="flex items-center space-x-2 text-sm text-gray-600"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: specialtyIndex * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-petrozin-gold rounded-full"></div>
                        <span>{specialty}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <span className="text-sm font-medium text-petrozin-navy">
                    Learn More
                  </span>
                  <ArrowRight 
                    size={20} 
                    className="text-petrozin-gold group-hover:translate-x-1 transition-transform duration-300" 
                  />
                </div>

                {/* Hover Effect Line */}
                <div className={`mt-4 w-0 h-1 bg-gradient-to-r ${industry.color} group-hover:w-full transition-all duration-500 rounded-full`}></div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-poppins font-bold text-petrozin-navy mb-4">
              Need Specialized Expertise?
            </h3>
            <p className="text-gray-600 mb-6">
              Our industry specialists are ready to discuss your specific requirements and provide tailored solutions.
            </p>
            <button className="btn-primary">
              Schedule Consultation
              <ArrowRight className="ml-2 inline-block" size={20} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustrySpecializations; 