'use client';

import { motion } from 'framer-motion';
import { Award, Shield, FileCheck } from 'lucide-react';

const LicensesCertifications = () => {
  const items = [
    {
      icon: Shield,
      title: 'ICV Certificates',
      description: 'Committed to local value creation and compliance with In-Country Value requirements.',
      color: 'from-petrozin-gold to-petrozin-gold/80',
      bgColor: 'bg-petrozin-gold/5',
    },
    {
      icon: Award,
      title: 'ISO Certificates',
      description: 'Adhering to international standards for quality, safety, and management systems.',
      color: 'from-petrozin-sky to-petrozin-sky/80',
      bgColor: 'bg-petrozin-sky/5',
    },
    {
      icon: FileCheck,
      title: 'Manpower Supply License',
      description: 'A rare advantage enabling direct, compliant manpower deployments across sectors.',
      color: 'from-petrozin-gold to-petrozin-sky',
      bgColor: 'bg-gradient-to-br from-petrozin-gold/5 to-petrozin-sky/5',
    },
  ];

  return (
    <section className="section-padding bg-petrozin-gray">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-petrozin-navy mb-6">
            Licenses & <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Recognitions that validate our compliance, capability, and commitment to quality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item) => (
            <motion.div
              key={item.title}
              className={`${item.bgColor} rounded-2xl p-8 border-2 border-transparent hover:border-petrozin-gold/20 transition-all duration-300`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                <item.icon className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-poppins font-semibold text-petrozin-navy mb-3">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LicensesCertifications;
