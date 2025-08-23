'use client';

import { motion } from 'framer-motion';
import { Play, Video, Download } from 'lucide-react';

interface VideoPlaceholderProps {
  title?: string;
  description?: string;
  className?: string;
  showInstructions?: boolean;
}

const VideoPlaceholder = ({ 
  title = "Workforce Video Background",
  description = "Professional workforce and industrial content",
  className = "",
  showInstructions = true
}: VideoPlaceholderProps) => {
  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* Video Placeholder Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-petrozin-navy via-petrozin-navy/90 to-petrozin-navy/80 rounded-lg">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(245, 158, 11, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(245, 158, 11, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }} />
        </div>

        {/* Center Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
          {/* Video Icon */}
          <motion.div
            className="w-20 h-20 bg-gradient-to-br from-petrozin-gold to-petrozin-sky rounded-full flex items-center justify-center mb-6 shadow-2xl"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Video className="w-10 h-10 text-white" />
          </motion.div>

          {/* Title */}
          <motion.h3
            className="text-xl font-poppins font-bold text-white mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {title}
          </motion.h3>

          {/* Description */}
          <motion.p
            className="text-gray-300 text-sm mb-6 max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {description}
          </motion.p>

          {/* Instructions */}
          {showInstructions && (
            <motion.div
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 max-w-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div className="flex items-center space-x-2 mb-3">
                <Download className="w-4 h-4 text-petrozin-gold" />
                <span className="text-white font-medium text-sm">To Add Video:</span>
              </div>
              <ul className="text-gray-300 text-xs space-y-1 text-left">
                <li>• Download workforce video (MP4 format)</li>
                <li>• Place in <code className="bg-black/20 px-1 rounded">public/videos/</code></li>
                <li>• Update Hero component to use VideoBackground</li>
                <li>• Recommended: 1920x1080, 30fps, 10-30 seconds</li>
              </ul>
            </motion.div>
          )}

          {/* Play Button */}
          <motion.button
            className="mt-6 bg-petrozin-gold text-petrozin-navy px-6 py-3 rounded-lg font-poppins font-bold flex items-center space-x-2 hover:bg-petrozin-gold/90 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <Play className="w-5 h-5" />
            <span>Add Video Content</span>
          </motion.button>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-4 right-4 w-2 h-2 bg-petrozin-gold rounded-full"
        animate={{
          y: [0, -10, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-petrozin-sky rounded-full"
        animate={{
          y: [0, 8, 0],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
      />
    </div>
  );
};

export default VideoPlaceholder; 