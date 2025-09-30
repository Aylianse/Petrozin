'use client';

import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';

const clients = [
  'TEKFEN',
  'QCON',
  'LUSAIL CIRCUIT',
  'SULZER',
  'CONSTRUCTION',
  'DESCON',
  'MEKDAM',
  'GULF ENERGY & TECHNOLOGY PROJECTS (GETP)',
  'RAY PROJECTS',
  'ETHOS ENERGY',
  'METITO',
  'OTC',
  'INCO',
];

const ClientList = () => {
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-petrozin-navy mb-6">
            Our <span className="text-gradient">Clients</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by leading organizations across the region.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {clients.map((name) => (
            <motion.div
              key={name}
              className="bg-petrozin-gray rounded-xl p-4 flex items-center justify-center text-center border border-gray-200"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center gap-2 text-petrozin-navy font-medium">
                <Building2 size={18} />
                <span className="text-sm sm:text-base">{name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientList;
