'use client';

import { motion } from 'framer-motion';
import { Globe, MapPin, Users } from 'lucide-react';

const GlobalOperations = () => {
  const countries = [
    {
      name: 'Qatar',
      flag: '🇶🇦',
      description: 'Headquarters & Main Operations',
      services: ['Temporary Manpower Supply', 'Permanent Staffing', 'Project Support'],
    },
    {
      name: 'UAE (Dubai)',
      flag: '🇦🇪',
      description: 'Supply & Support Services',
      services: ['Manpower Supply', 'Technical Expertise', 'Recruitment Services'],
    },
    {
      name: 'Saudi Arabia (KSA)',
      flag: '🇸🇦',
      description: 'Regional Operations Center',
      services: ['Project Staffing', 'Workforce Solutions', 'Onsite Support'],
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Globe className="text-petrozin-gold" size={32} />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-petrozin-navy">
              Global <span className="text-gradient">Operations</span>
            </h2>
          </div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Serving clients across the Gulf region with dedicated teams and local expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {countries.map((country, index) => (
            <motion.div
              key={country.name}
              className="bg-petrozin-gray rounded-2xl p-8 border-2 border-transparent hover:border-petrozin-gold/30 transition-all duration-300 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="text-6xl mb-4">{country.flag}</div>
              <h3 className="text-2xl font-poppins font-bold text-petrozin-navy mb-2">
                {country.name}
              </h3>
              <p className="text-petrozin-gold font-medium mb-4">{country.description}</p>
              
              <div className="space-y-2 mt-6">
                {country.services.map((service, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-center gap-2 text-sm text-gray-700"
                  >
                    <MapPin size={14} className="text-petrozin-gold" />
                    <span>{service}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-center gap-2 text-petrozin-navy">
                  <Users size={18} />
                  <span className="text-sm font-medium">Qualified Staff Available</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalOperations;

