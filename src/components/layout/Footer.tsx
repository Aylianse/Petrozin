'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Linkedin, Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

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
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Phone size={16} />
                <span>Landline: +97444512393</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Phone size={16} />
                <span>WhatsApp: +97470820576</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Mail size={16} />
                <span>admin@petrozin.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <MapPin size={16} />
                <span>P.O. Box 18914, 5th Floor, Office 502, Above Al Anees Store, Near Al Jadeeda Metro Station, Umm Ghuwailina, Doha, Qatar</span>
              </div>
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