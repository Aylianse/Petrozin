'use client';

import { motion, Variants, TargetAndTransition, Transition, Easing } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  initial?: string;
  animate?: string;
  whileHover?: TargetAndTransition;
  whileTap?: TargetAndTransition;
  transition?: Transition;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  intensity?: number;
  shadowIntensity?: 'light' | 'medium' | 'heavy';
  borderEffect?: boolean;
  scaleOnHover?: boolean;
}

const AnimatedCard = ({
  children,
  className = "",
  variants,
  initial = "hidden",
  animate = "visible",
  whileHover,
  whileTap,
  transition,
  delay = 0,
  direction = 'up',
  intensity = 1,
  shadowIntensity = 'medium',
  borderEffect = true,
  scaleOnHover = true
}: AnimatedCardProps) => {
  // Default variants if none provided
  const defaultVariants: Variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
      x: direction === 'left' ? 50 : direction === 'right' ? -50 : 0,
      scale: 0.9,
      rotateY: direction === 'left' || direction === 'right' ? -15 : 0,
      rotateX: direction === 'up' || direction === 'down' ? -15 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      rotateY: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: "easeOut" as Easing
      }
    }
  };

  // Default hover effects
  const defaultWhileHover: TargetAndTransition = {
    y: scaleOnHover ? -8 : 0,
    scale: scaleOnHover ? 1.02 : 1,
    rotateY: 0,
    rotateX: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut" as Easing
    }
  };

  // Shadow effects
  const getShadowClass = () => {
    switch (shadowIntensity) {
      case 'light':
        return 'shadow-lg hover:shadow-xl';
      case 'medium':
        return 'shadow-xl hover:shadow-2xl';
      case 'heavy':
        return 'shadow-2xl hover:shadow-[0_35px_60px_-12px_rgba(0,0,0,0.25)]';
      default:
        return 'shadow-lg hover:shadow-xl';
    }
  };

  // Border effect
  const getBorderEffect = () => {
    if (!borderEffect) return '';
    return 'before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r before:from-petrozin-gold/0 before:via-petrozin-gold/20 before:to-petrozin-sky/0 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 before:-z-10';
  };

  return (
    <motion.div
      className={`relative ${getShadowClass()} ${getBorderEffect()} ${className}`}
      variants={variants || defaultVariants}
      initial={initial}
      animate={animate}
      whileHover={whileHover || defaultWhileHover}
      whileTap={whileTap || { scale: 0.98 }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard; 