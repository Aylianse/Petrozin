'use client';

import { motion } from 'framer-motion';

interface AnimatedBackgroundProps {
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
  color?: 'primary' | 'secondary' | 'mixed';
}

const AnimatedBackground = ({ 
  className = "", 
  intensity = 'medium',
  color = 'primary' 
}: AnimatedBackgroundProps) => {
  const getIntensity = () => {
    switch (intensity) {
      case 'low': return 0.1;
      case 'medium': return 0.2;
      case 'high': return 0.3;
      default: return 0.2;
    }
  };

  const getColors = () => {
    switch (color) {
      case 'primary':
        return {
          primary: '#F59E0B', // petrozin-gold
          secondary: '#0EA5E9', // petrozin-sky
        };
      case 'secondary':
        return {
          primary: '#0EA5E9', // petrozin-sky
          secondary: '#F59E0B', // petrozin-gold
        };
      case 'mixed':
        return {
          primary: '#F59E0B', // petrozin-gold
          secondary: '#0EA5E9', // petrozin-sky
        };
      default:
        return {
          primary: '#F59E0B',
          secondary: '#0EA5E9',
        };
    }
  };

  const colors = getColors();
  const opacity = getIntensity();

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-petrozin-navy via-petrozin-navy/90 to-petrozin-navy/80"
        animate={{
          background: [
            `linear-gradient(45deg, #1E293B ${opacity * 100}%, #334155 ${opacity * 150}%, #475569 ${opacity * 200}%)`,
            `linear-gradient(135deg, #1E293B ${opacity * 100}%, #334155 ${opacity * 150}%, #475569 ${opacity * 200}%)`,
            `linear-gradient(225deg, #1E293B ${opacity * 100}%, #334155 ${opacity * 150}%, #475569 ${opacity * 200}%)`,
            `linear-gradient(315deg, #1E293B ${opacity * 100}%, #334155 ${opacity * 150}%, #475569 ${opacity * 200}%)`,
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating Geometric Shapes */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 border border-petrozin-orange/20 rotate-45"
        animate={{
          rotate: [45, 225, 45],
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-petrozin-red/20 rounded-full"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.1, 0.4, 0.1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-20 h-20 border border-petrozin-orange/15 rotate-12"
        animate={{
          rotate: [12, 372, 12],
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />

      {/* Workforce-Specific Elements */}
      <motion.div
        className="absolute top-1/3 right-1/3 w-16 h-16 border border-petrozin-orange/15 rotate-90"
        animate={{
          rotate: [90, 450, 90],
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className="absolute bottom-1/3 left-1/3 w-12 h-12 border border-petrozin-red/15 rounded-lg"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1],
          rotate: [0, 180, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      {/* Animated Energy Lines */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-32 h-1 bg-gradient-to-r from-transparent via-petrozin-orange to-transparent rounded-full"
        animate={{
          opacity: [0.2, 0.6, 0.2],
          scaleX: [0.8, 1.2, 0.8],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/3 right-1/4 w-24 h-1 bg-gradient-to-r from-transparent via-petrozin-red to-transparent rounded-full"
        animate={{
          opacity: [0.2, 0.6, 0.2],
          scaleX: [0.8, 1.2, 0.8],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      {/* Additional Energy Lines */}
      <motion.div
        className="absolute top-1/2 left-1/3 w-28 h-1 bg-gradient-to-r from-transparent via-petrozin-orange to-transparent rounded-full"
        animate={{
          opacity: [0.2, 0.5, 0.2],
          scaleX: [0.8, 1.1, 0.8],
          x: [0, 25, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />

      {/* Floating Particles */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-2 h-2 bg-petrozin-orange rounded-full"
        animate={{
          y: [0, -30, 0],
          opacity: [0.2, 0.8, 0.2],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-petrozin-red rounded-full"
        animate={{
          y: [0, 25, 0],
          opacity: [0.3, 0.9, 0.3],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <motion.div
        className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-petrozin-orange rounded-full"
        animate={{
          y: [0, -25, 0],
          opacity: [0.2, 0.7, 0.2],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />

      {/* Additional Workforce Particles */}
      <motion.div
        className="absolute top-1/3 left-1/2 w-2 h-2 bg-petrozin-red rounded-full"
        animate={{
          y: [0, -20, 0],
          opacity: [0.2, 0.6, 0.2],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2.5,
        }}
      />

      <motion.div
        className="absolute bottom-1/3 right-1/2 w-2.5 h-2.5 bg-petrozin-orange rounded-full"
        animate={{
          y: [0, 18, 0],
          opacity: [0.3, 0.8, 0.3],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 6.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3.5,
        }}
      />
    </div>
  );
};

export default AnimatedBackground; 