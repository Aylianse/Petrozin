'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, Sparkles, Zap } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.95]);
  const headerBlur = useTransform(scrollY, [0, 100], [0, 10]);
  const headerScale = useTransform(scrollY, [0, 100], [1, 0.98]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: 'Home', href: '/', hasDropdown: false },
    { name: 'About', href: '/about', hasDropdown: false },
    { name: 'Services', href: '/services', hasDropdown: true },
    { name: 'Contact', href: '/contact', hasDropdown: false },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-petrozin-light-grey/50' 
          : 'bg-transparent'
      }`}
      style={{
        opacity: headerOpacity,
        backdropFilter: `blur(${headerBlur}px)`,
        transform: `scale(${headerScale})`,
      }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/PetrozinLogos/Petrozin-LogoTransparent.png"
                  alt="Petrozin Logo"
                  width={180}
                  height={60}
                  className="h-12 lg:h-16 w-auto object-contain"
                  priority
                />
              </motion.div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.4, duration: 0.6 }}
                className="relative group"
              >
                <Link href={item.href}>
                  <motion.span
                    className="text-base font-poppins font-semibold text-petrozin-dark-grey hover:text-petrozin-orange transition-colors duration-300 cursor-pointer flex items-center space-x-1"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span>{item.name}</span>
                    {item.hasDropdown && (
                      <motion.div
                        animate={{ rotate: 0 }}
                        whileHover={{ rotate: 180 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown size={16} />
                      </motion.div>
                    )}
                  </motion.span>
                </Link>
                
                {/* Hover Underline Effect */}
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-petrozin-orange to-petrozin-red rounded-full"
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Link href="/contact">
              <motion.button
                className="bg-gradient-to-r from-petrozin-orange to-petrozin-red text-white font-poppins font-bold text-base px-6 py-3 rounded-xl hover:from-petrozin-orange/90 hover:to-petrozin-red/90 transition-all duration-300 shadow-lg border-2 border-transparent hover:border-petrozin-orange/30 flex items-center space-x-2 group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Get Started</span>
                <motion.div
                  className="group-hover:translate-x-1 transition-transform duration-300"
                  whileHover={{ x: 3 }}
                >
                  <Zap size={16} />
                </motion.div>
              </motion.button>
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors duration-200"
            onClick={toggleMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-xl border-t border-gray-200/50 ${
          isOpen ? 'block' : 'hidden'
        }`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isOpen ? 1 : 0, 
          height: isOpen ? 'auto' : 0 
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="container-custom py-6">
          <nav className="space-y-4">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                <Link 
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-lg font-poppins font-semibold text-petrozin-dark-grey hover:text-petrozin-orange transition-colors duration-300 py-2"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            
            {/* Mobile CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
              transition={{ delay: 0.4, duration: 0.3 }}
              className="pt-4"
            >
              <Link href="/contact">
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-gradient-to-r from-petrozin-orange to-petrozin-red text-white font-poppins font-bold text-lg py-3 rounded-xl hover:from-petrozin-orange/90 hover:to-petrozin-red/90 transition-all duration-300 shadow-lg"
                >
                  Get Started
                </button>
              </Link>
            </motion.div>
          </nav>
        </div>
      </motion.div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/2 right-1/4 w-1 h-1 bg-petrozin-orange rounded-full"
          animate={{
            y: [0, -10, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/3 left-1/4 w-1.5 h-1.5 bg-petrozin-red rounded-full"
          animate={{
            y: [0, 8, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />
      </div>
    </motion.header>
  );
};

export default Header; 