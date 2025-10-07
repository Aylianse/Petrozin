'use client';

import { motion } from 'framer-motion';
import { Users, Briefcase, Wrench, CheckCircle, Globe, Clock, Award, Shield, UserCheck } from 'lucide-react';

const ServicesDetails = () => {
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

  const services = [
    {
      id: 'manpower',
      icon: Users,
      title: 'Manpower Supply',
      subtitle: 'White & Blue Collar Workforce',
      description: 'End-to-end manpower supply for white collar and blue collar roles across industries—screened, compliant, and deployment-ready.',
      features: [
        'White collar: Engineers, Supervisors, Coordinators, Admin',
        'Blue collar: Technicians, Welders, Fabricators, Helpers',
        'Rigorous compliance and background checks',
        'Industry-specific qualification verification',
        'Reliable and timely mobilization',
        'Flexible short/long-term contracts'
      ],
      color: 'from-petrozin-gold to-petrozin-gold/80',
      bgColor: 'bg-petrozin-gold/5',
    },
    {
      id: 'recruitment',
      icon: UserCheck,
      title: 'Recruitment Services',
      subtitle: 'Sourcing, Screening & Onboarding',
      description: 'Comprehensive recruitment solutions from role scoping and talent sourcing to interviews, shortlisting, and onboarding.',
      features: [
        'Targeted sourcing across local and global markets',
        'Structured interviews and technical assessments',
        'Credentialing and reference verification',
        'Offer management and onboarding support',
        'Scalable hiring for project ramps',
        'Ongoing candidate care and retention'
      ],
      color: 'from-petrozin-sky to-petrozin-sky/80',
      bgColor: 'bg-petrozin-sky/5',
    },
    {
      id: 'project-support',
      icon: Briefcase,
      title: 'Project Support',
      subtitle: 'End-to-End Project Assistance',
      description: 'From specialized task execution to long-term project management, we provide comprehensive support that ensures your projects are completed on time, within budget, and to the highest standards.',
      features: [
        'Specialized task execution and support',
        'Short-term and long-term contracts',
        'Project planning and coordination',
        'Resource allocation and management',
        'Quality control and assurance',
        'Risk assessment and mitigation'
      ],
      color: 'from-petrozin-sky to-petrozin-sky/80',
      bgColor: 'bg-petrozin-sky/5',
    },
    {
      id: 'technical',
      icon: Wrench,
      title: 'Technical Expertise',
      subtitle: 'Engineers, Technicians & Skilled Trades',
      description: 'Access to a diverse pool of technical professionals including engineers, technicians, and skilled tradespeople who bring specialized knowledge and hands-on experience to your projects.',
      features: [
        'Mechanical and electrical engineers',
        'Process and control technicians',
        'Welding and fabrication specialists',
        'Quality control and inspection experts',
        'Maintenance and repair professionals',
        'Safety and compliance specialists'
      ],
      color: 'from-petrozin-gold to-petrozin-sky',
      bgColor: 'bg-gradient-to-br from-petrozin-gold/5 to-petrozin-sky/5',
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
            Our Core{' '}
            <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We deliver comprehensive workforce solutions that address every aspect of your industrial manpower needs, 
            ensuring quality, reliability, and efficiency in every project.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <span className="inline-flex items-center gap-2 text-sm px-3 py-1 rounded-full bg-petrozin-gray text-petrozin-navy border border-gray-200">
              <Shield size={16} /> ICV Certificates
            </span>
            <span className="inline-flex items-center gap-2 text-sm px-3 py-1 rounded-full bg-petrozin-gray text-petrozin-navy border border-gray-200">
              <Award size={16} /> ISO Certificates
            </span>
            <span className="inline-flex items-center gap-2 text-sm px-3 py-1 rounded-full bg-petrozin-gold/20 text-petrozin-navy border border-petrozin-gold/40 font-semibold">
              <Shield size={16} /> Manpower Supply License (Rare Advantage)
            </span>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="space-y-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
              variants={itemVariants}
            >
              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, x: index % 2 === 1 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  {/* Service Header */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <service.icon className="text-white" size={32} />
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-poppins font-bold text-petrozin-navy">
                        {service.title}
                      </h3>
                      <p className="text-petrozin-sky font-medium">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="flex items-start space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: featureIndex * 0.1 }}
                      >
                        <CheckCircle className="w-5 h-5 text-petrozin-gold mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Service Highlights */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
                    <div className="text-center p-4 bg-white rounded-lg shadow-md border-2 border-petrozin-gold/20 hover:border-petrozin-gold transition-all">
                      <Globe className="w-8 h-8 text-petrozin-gold mx-auto mb-2" />
                      <p className="text-sm font-semibold text-petrozin-navy">Qatar, UAE & Oman</p>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg shadow-md border-2 border-petrozin-gold/20 hover:border-petrozin-gold transition-all">
                      <Clock className="w-8 h-8 text-petrozin-gold mx-auto mb-2" />
                      <p className="text-sm font-semibold text-petrozin-navy">10 Min Response</p>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg shadow-md border-2 border-petrozin-gold/20 hover:border-petrozin-gold transition-all">
                      <Award className="w-8 h-8 text-petrozin-gold mx-auto mb-2" />
                      <p className="text-sm font-semibold text-petrozin-navy">Licensed & Certified</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Visual Element */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <motion.div
                  className={`relative ${service.bgColor} rounded-3xl p-12 aspect-square flex items-center justify-center`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {/* Service Icon */}
                  <div className={`w-32 h-32 bg-gradient-to-br ${service.color} rounded-3xl flex items-center justify-center shadow-2xl`}>
                    <service.icon className="text-white" size={64} />
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-8 right-8 w-16 h-16 bg-petrozin-gold/20 rounded-full"></div>
                  <div className="absolute bottom-8 left-8 w-12 h-12 bg-petrozin-sky/20 rounded-full"></div>
                  <div className="absolute top-1/2 left-8 w-8 h-8 bg-petrozin-gold/30 rounded-full"></div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesDetails; 