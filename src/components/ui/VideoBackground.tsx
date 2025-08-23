'use client';

import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface VideoBackgroundProps {
  src: string;
  fallbackImage?: string;
  opacity?: number;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  showControls?: boolean;
}

const VideoBackground = ({
  src,
  fallbackImage,
  opacity = 0.3,
  className = "",
  autoPlay = true,
  loop = true,
  muted = true,
  showControls = false
}: VideoBackgroundProps) => {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(muted);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying && !hasError) {
        videoRef.current.play().catch(() => {
          // Fallback if autoplay fails
          setIsPlaying(false);
          setHasError(true);
        });
      } else if (!isPlaying) {
        videoRef.current.pause();
      }
    }
  }, [isPlaying, hasError]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const togglePlay = () => {
    if (!hasError) {
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleVideoLoad = () => {
    setIsLoaded(true);
    setHasError(false);
  };

  const handleVideoError = () => {
    setHasError(true);
    setIsLoaded(false);
  };

  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* Video Element */}
      <video
        ref={videoRef}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          isLoaded && !hasError ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ opacity: opacity }}
        onLoadedData={handleVideoLoad}
        onError={handleVideoError}
        playsInline
      >
        <source src={src} type="video/mp4" />
        {/* Fallback content */}
        {fallbackImage && (
          <img 
            src={fallbackImage} 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        )}
      </video>

      {/* Fallback Background if video doesn't load or has error */}
      {(hasError || !isLoaded) && fallbackImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${fallbackImage})`,
            opacity: opacity 
          }}
        />
      )}

      {/* Video Controls (if enabled) */}
      {showControls && (
        <motion.div
          className="absolute bottom-4 right-4 flex items-center space-x-2 bg-black/50 backdrop-blur-sm rounded-lg p-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <button
            onClick={togglePlay}
            className="text-white hover:text-petrozin-gold transition-colors duration-200 p-1"
          >
            {isPlaying ? <Pause size={16} /> : <Play size={16} />}
          </button>
          
          <button
            onClick={toggleMute}
            className="text-white hover:text-petrozin-gold transition-colors duration-200 p-1"
          >
            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </button>
        </motion.div>
      )}

      {/* Loading Indicator */}
      {!isLoaded && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="w-8 h-8 border-2 border-petrozin-gold border-t-transparent rounded-full animate-spin"></div>
        </motion.div>
      )}
    </div>
  );
};

export default VideoBackground; 