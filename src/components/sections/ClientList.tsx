'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const clients = [
  { name: 'TEKFEN', logo: '/clients/Tekfenlogo.svg' },
  { name: 'QCON', logo: '/clients/Qconlogo.jpeg' },
  { name: 'LUSAIL CIRCUIT', logo: '/clients/LusailLogo.png' },
  { name: 'SULZER', logo: '/clients/SulzerLogo.png' },
  { name: 'DESCON', logo: '/clients/Desconlogo.jpg' },
  { name: 'MEKDAM', logo: '/clients/Mekdamlogo.png' },
  { name: 'GETP', logo: '/clients/Getplogo.jpeg' },
  { name: 'RAY PROJECTS', logo: '/clients/Raylogo.gif' },
  { name: 'ETHOS ENERGY', logo: '/clients/EthosEnergylogo.png' },
  { name: 'METITO', logo: '/clients/Metitologo.png' },
  { name: 'OTC', logo: '/clients/Otclogo.jpeg' },
  { name: 'INCO', logo: '/clients/INCOlogo.png' },
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
            Trusted by <span className="text-gradient">Industry Leaders</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Proud to serve leading organizations across Qatar, UAE, and Oman with qualified workforce solutions.
          </p>
        </motion.div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              className="group text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <motion.div
                className="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-petrozin-gold/50 transition-all duration-300 hover:shadow-lg mb-4"
                whileHover={{ y: -5 }}
              >
                <div className="aspect-video relative flex items-center justify-center">
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-petrozin-navy/5 to-petrozin-gold/5 rounded-lg p-4">
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      fill
                      className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300 p-2"
                    />
                  </div>
                </div>
              </motion.div>
              <h3 className="text-sm font-semibold text-petrozin-navy group-hover:text-petrozin-gold transition-colors">
                {client.name}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="text-center p-6 bg-petrozin-gray rounded-2xl border border-gray-200">
            <div className="text-3xl md:text-4xl font-bold text-petrozin-gold mb-2">12+</div>
            <div className="text-sm text-gray-600">Major Clients</div>
          </div>
          <div className="text-center p-6 bg-petrozin-gray rounded-2xl border border-gray-200">
            <div className="text-3xl md:text-4xl font-bold text-petrozin-gold mb-2">500+</div>
            <div className="text-sm text-gray-600">Staff Deployed</div>
          </div>
          <div className="text-center p-6 bg-petrozin-gray rounded-2xl border border-gray-200">
            <div className="text-3xl md:text-4xl font-bold text-petrozin-gold mb-2">98%</div>
            <div className="text-sm text-gray-600">Client Retention</div>
          </div>
          <div className="text-center p-6 bg-petrozin-gray rounded-2xl border border-gray-200">
            <div className="text-3xl md:text-4xl font-bold text-petrozin-gold mb-2">3</div>
            <div className="text-sm text-gray-600">Countries Served</div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-gray-600 mb-6">
            Want to join these industry leaders? Let&apos;s discuss your workforce needs.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-petrozin-gold text-white font-poppins font-semibold px-8 py-4 rounded-xl hover:bg-petrozin-gold/90 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Become a Client
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientList;
