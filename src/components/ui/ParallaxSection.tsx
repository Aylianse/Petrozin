'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  offset?: ("start end" | "end start" | "start start" | "end end")[];
  backgroundElements?: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  intensity?: number;
}

const ParallaxSection = ({
  children,
  className = "",
  speed = 0.5,
  offset = ["start end", "end start"],
  backgroundElements,
  direction = 'up',
  intensity = 1
}: ParallaxSectionProps) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset
  });

  // Calculate transforms based on direction
  const yUp = useTransform(scrollYProgress, [0, 1], ["0%", `-${speed * 100 * intensity}%`]);
  const yDown = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100 * intensity}%`]);
  const xLeft = useTransform(scrollYProgress, [0, 1], ["0%", `-${speed * 100 * intensity}%`]);
  const xRight = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100 * intensity}%`]);

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  // Get transform based on direction
  const getTransform = () => {
    switch (direction) {
      case 'up':
        return { y: yUp };
      case 'down':
        return { y: yDown };
      case 'left':
        return { x: xLeft };
      case 'right':
        return { x: xRight };
      default:
        return { y: yUp };
    }
  };

  const transform = getTransform();

  return (
    <section ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {/* Background Elements with Parallax */}
      {backgroundElements && (
        <motion.div 
          className="absolute inset-0 pointer-events-none"
          style={transform}
        >
          {backgroundElements}
        </motion.div>
      )}

      {/* Content with Parallax */}
      <motion.div 
        className="relative z-10"
        style={{ 
          ...transform,
          opacity,
          scale
        }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default ParallaxSection; 