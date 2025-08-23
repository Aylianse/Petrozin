'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FloatingElement {
  id: string;
  className?: string;
  size?: number;
  color?: string;
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  animation: {
    duration: number;
    delay?: number;
    y?: [number, number, number];
    x?: [number, number, number];
    scale?: [number, number, number];
    opacity?: [number, number, number];
    rotate?: [number, number, number];
  };
}

interface FloatingElementsProps {
  elements: FloatingElement[];
  className?: string;
}

const FloatingElements = ({ elements, className = "" }: FloatingElementsProps) => {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className={`absolute ${element.className || ''}`}
          style={{
            top: element.position.top,
            bottom: element.position.bottom,
            left: element.position.left,
            right: element.position.right,
            width: element.size || 4,
            height: element.size || 4,
            backgroundColor: element.color || '#F59E0B',
            borderRadius: '50%',
          }}
          animate={{
            y: element.animation.y || [0, -20, 0],
            x: element.animation.x || [0, 0, 0],
            scale: element.animation.scale || [1, 1.5, 1],
            opacity: element.animation.opacity || [0.3, 0.8, 0.3],
            rotate: element.animation.rotate || [0, 0, 0],
          }}
          transition={{
            duration: element.animation.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: element.animation.delay || 0,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements; 