'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Linkedin, Facebook, Instagram, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Services', href: '/services' },
      { name: 'Vendor Registration', href: '/vendor-registration' },
      { name: 'Contact', href: '/contact' },
    ],
    services: [
      { name: 'Manpower Supply', href: '/services#manpower' },
      { name: 'Project Support', href: '/services#project-support' },
      { name: 'Technical Expertise', href: '/services#technical' },
    ],
    industries: [
      { name: 'Oil & Gas', href: '/services#oil-gas' },
      { name: 'Construction', href: '/services#construction' },
      { name: 'Manufacturing', href: '/services#manufacturing' },
    ],
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/petrozin', color: 'hover:text-blue-600' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/petrozin', color: 'hover:text-blue-600' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/petrozin', color: 'hover:text-pink-600' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="bg-petrozin-dark-grey text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image
                src="/PetrozinLogos/Petrozin-LogoTransparent.png"
                alt="Petrozin Logo"
                width={120}
                height={40}
                className="h-8 w-auto object-contain"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering industries with trusted manpower solutions, project support, and technical expertise worldwide.
            </p>
            <div className="space-y-3">
             
              <a 
                href="https://wa.me/97470820576"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-sm text-gray-300 hover:text-petrozin-orange transition-colors duration-300 group"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#25D366]/20 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <span> +97470820576</span>
              </a>
              <a 
                href="mailto:admin@petrozin.com"
                className="flex items-center space-x-3 text-sm text-gray-300 hover:text-petrozin-orange transition-colors duration-300 group"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-petrozin-orange/20 transition-colors">
                  <Mail size={16} />
                </div>
                <span>admin@petrozin.com</span>
              </a>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=BIN+SHEIKH+BUILDING+Doha+Qatar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-3 text-sm text-gray-300 hover:text-petrozin-orange transition-colors duration-300 group"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-petrozin-orange/20 transition-colors mt-0.5 flex-shrink-0">
                  <MapPin size={16} />
                </div>
                <span>BIN SHEIKH BUILDING, 5th Floor, Office 502, Above Al Anees Store, Near Al Jadeeda Metro Station, Doha, Qatar</span>
              </a>
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-poppins font-semibold text-petrozin-orange">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-petrozin-orange transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-poppins font-semibold text-petrozin-orange">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-petrozin-orange transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Industries & Social */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-poppins font-semibold text-petrozin-orange">Industries</h3>
            <ul className="space-y-2 mb-6">
              {footerLinks.industries.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-petrozin-orange transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-gray-300">Follow Us</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 bg-white/10 rounded-lg text-gray-300 transition-all duration-300 ${social.color} hover:bg-white/20`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-gray-700"></div>

        {/* Bottom Footer */}
        <motion.div
          className="py-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="space-y-4">
            <p className="text-petrozin-orange font-poppins font-semibold text-lg">
              Ready to get started?
            </p>
            <p className="text-gray-300 text-sm">
              © {currentYear} Petrozin. All rights reserved. |
              <Link href="/privacy" className="hover:text-petrozin-orange transition-colors duration-300 ml-1">
                Privacy Policy
              </Link>
              {' | '}
              <Link href="/terms" className="hover:text-petrozin-orange transition-colors duration-300">
                Terms of Service
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 