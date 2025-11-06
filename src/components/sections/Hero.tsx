'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ChevronDown, ArrowRight, Shield, Zap, Award, FileCheck, FileText } from 'lucide-react';
import { useRef } from 'react';
import AnimatedBackground from '../ui/AnimatedBackground';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
 

  const scrollToContent = () => {
    const element = document.getElementById('content');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background with Enhanced Fallback */}
      <div className="absolute inset-0 z-0">
        {/* Primary Animated Background */}
        <AnimatedBackground
          intensity="medium"
          color="primary"
        />
        
        {/* Enhanced Fallback Background */}
        <div className="absolute inset-0">
          {/* Video Background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/petrozinbanner.mp4" type="video/mp4" />
            {/* Fallback to image if video fails */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: "url('/images/hero-workforce.jpg')" }}
            />
          </video>
        </div>
        
        {/* Clean gradient overlays for better logo visibility */}
      
      </div>

      {/* Layered Background with Parallax */}
      <motion.div 
        className="absolute inset-0"
        style={{ y }}
      >
        {/* Sky Layer */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-blue-50/20 via-blue-100/20 to-blue-200/20"></div> */}
        
        {/* Corporate Skyline Layer */}
        <div className="absolute inset-0">
          {/* Abstract corporate buildings with floating animation */}
          <motion.div 
            className="absolute bottom-1/2 left-10 w-16 h-32 bg-gray-500/20 rounded-t-lg"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-1/2 left-32 w-12 h-40 bg-gray-600/25 rounded-t-lg"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          <motion.div 
            className="absolute bottom-1/2 left-48 w-20 h-36 bg-gray-500/20 rounded-t-lg"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          <motion.div 
            className="absolute bottom-1/2 right-20 w-14 h-44 bg-gray-600/25 rounded-t-lg"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
          <motion.div 
            className="absolute bottom-1/2 right-40 w-18 h-38 bg-gray-500/20 rounded-t-lg"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }}
          />
        </div>
        
        {/* Workforce Environment Layer */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-400/20 via-gray-500/20 to-petrozin-navy/30">
          {/* Professional workforce elements */}
          <motion.div 
            className="absolute bottom-20 left-1/4 w-24 h-24 bg-petrozin-gold/20 rounded-full blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-32 right-1/4 w-20 h-20 bg-petrozin-sky/20 rounded-full blur-xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          />
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-20 text-center max-w-6xl mx-auto px-4">
        {/* Funky Typography Headline */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {/* Main Headline with Funky Style */}
          <motion.h1 
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-poppins font-black text-white mb-4 leading-none tracking-tight drop-shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-petrozin-orange via-white to-petrozin-red drop-shadow-2xl">
              WORKFORCE
            </span>
            <span className="block text-white mt-2 drop-shadow-2xl">
              SOLUTIONS
            </span>
          </motion.h1>

          {/* Funky Subtitle */}
          <motion.p
            className="text-xl sm:text-2xl lg:text-3xl text-white font-inter font-light max-w-3xl mx-auto leading-relaxed drop-shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <span className="text-petrozin-orange font-semibold drop-shadow-xl">Connecting</span> exceptional talent with{' '}
            <span className="text-petrozin-red font-semibold drop-shadow-xl">extraordinary</span> opportunities
          </motion.p>
        </motion.div>

        {/* Clean CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 flex-wrap"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          {/* Primary CTA */}
          <Link href="/contact">
            <motion.button 
              className="group bg-gradient-to-r from-petrozin-orange to-petrozin-red text-white font-poppins font-bold text-lg px-12 py-4 rounded-full hover:from-petrozin-orange/90 hover:to-petrozin-red/90 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center space-x-3">
                <span>GET STARTED</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </motion.button>
          </Link>
          
          {/* Secondary CTA */}
          <Link href="/services">
            <motion.button 
              className="group border-2 border-white/30 text-white hover:bg-white hover:text-petrozin-dark-grey font-poppins font-semibold px-12 py-4 rounded-full transition-all duration-300 backdrop-blur-sm hover:border-white transform hover:scale-105 hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center space-x-3">
                <span>EXPLORE SERVICES</span>
                <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              </span>
            </motion.button>
          </Link>

          {/* Vendor Registration CTA */}
          <Link href="/vendor-registration">
            <motion.button 
              className="group bg-white/10 backdrop-blur-md border-2 border-white/40 text-white hover:bg-white hover:text-petrozin-navy font-poppins font-semibold px-12 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center space-x-3">
                <FileText className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span>VENDOR REGISTRATION</span>
              </span>
            </motion.button>
          </Link>
        </motion.div>

        {/* Clean Trust Indicators */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-4 md:gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          {/* ICV Certificates */}
          <motion.div
            className="flex items-center space-x-2 bg-white/90 backdrop-blur-md border-2 border-petrozin-orange/40 rounded-full px-4 py-2 shadow-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-6 h-6 bg-petrozin-orange rounded-full flex items-center justify-center">
              <Shield className="w-3 h-3 text-white" />
            </div>
            <span className="text-sm font-semibold text-petrozin-dark-grey">ICV Certified</span>
          </motion.div>


          {/* Manpower Supply License - Highlighted */}
          <motion.div
            className="flex items-center space-x-2 bg-gradient-to-r from-petrozin-gold/90 to-petrozin-orange/90 backdrop-blur-md border-2 border-petrozin-gold rounded-full px-4 py-2 shadow-xl relative"
            whileHover={{ scale: 1.08, y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="absolute inset-0 rounded-full bg-petrozin-gold/20"
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <div className="relative z-10 w-7 h-7 bg-white rounded-full flex items-center justify-center">
              <FileCheck className="w-4 h-4 text-petrozin-gold" />
            </div>
            <span className="relative z-10 text-sm font-bold text-white">Manpower Supply License</span>
          </motion.div>

          
          {/* ISO Certificates */}
          <motion.div
            className="flex items-center space-x-2 bg-white/90 backdrop-blur-md border-2 border-petrozin-orange/40 rounded-full px-4 py-2 shadow-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-6 h-6 bg-petrozin-orange rounded-full flex items-center justify-center">
              <Award className="w-3 h-3 text-white" />
            </div>
            <span className="text-sm font-semibold text-petrozin-dark-grey">ISO Certified</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.button
          onClick={scrollToContent}
          className="text-white hover:text-petrozin-gold transition-colors duration-300 group"
          whileHover={{ y: 5 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm font-inter font-medium tracking-wider opacity-80 group-hover:opacity-100">
              SCROLL
            </span>
            <ChevronDown size={20} className="group-hover:scale-110 transition-transform duration-300" />
          </div>
        </motion.button>
      </motion.div>

      {/* Enhanced Glowing Energy Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/3 left-1/4 w-32 h-1 bg-gradient-to-r from-transparent via-petrozin-gold to-transparent rounded-full"
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scaleX: [0.8, 1.2, 0.8],
            x: [0, 20, 0],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-24 h-1 bg-gradient-to-r from-transparent via-petrozin-sky to-transparent rounded-full"
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scaleX: [0.8, 1.2, 0.8],
            x: [0, -15, 0],
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-28 h-1 bg-gradient-to-r from-transparent via-petrozin-gold to-transparent rounded-full"
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scaleX: [0.8, 1.2, 0.8],
            x: [0, 25, 0],
          }}
          transition={{ duration: 4.5, repeat: Infinity, delay: 2 }}
        />
        
        {/* Additional floating particles */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-2 h-2 bg-petrozin-gold rounded-full"
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-petrozin-sky rounded-full"
          animate={{
            y: [0, 25, 0],
            opacity: [0.3, 0.9, 0.3],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />
      </div>
    </section>
  );
};

export default Hero; 