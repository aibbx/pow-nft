
import React from 'react';
import { motion } from "framer-motion";

const BackgroundEffects: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Luxury dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-wealth-dark to-black opacity-10" />
      
      {/* Gold glow effects */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-wealth-gold/10 to-transparent opacity-80" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-wealth-gold/10 to-transparent opacity-80" />
      
      {/* Animated gold orbs */}
      <motion.div 
        className="absolute top-1/3 left-1/4 w-24 h-24 bg-wealth-gold/5 rounded-full blur-xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-wealth-gold/5 rounded-full blur-xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      {/* Enhanced floating gold particles */}
      <motion.div 
        className="absolute top-1/4 left-1/3 w-3 h-3 bg-wealth-gold/20 rounded-full blur-sm"
        animate={{ 
          y: [0, -25, 0], 
          opacity: [0.2, 0.7, 0.2],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/3 w-4 h-4 bg-wealth-gold/20 rounded-full blur-sm"
        animate={{ 
          y: [0, 20, 0], 
          opacity: [0.2, 0.8, 0.2],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div 
        className="absolute top-2/3 left-2/3 w-5 h-5 bg-wealth-gold/20 rounded-full blur-sm"
        animate={{ 
          y: [0, -15, 0], 
          opacity: [0.2, 0.6, 0.2],
          scale: [1, 1.3, 1]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      
      {/* Premium subtle light rays */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-screen h-screen">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[200%] h-[200%] bg-radial-light opacity-3" />
      </div>
    </div>
  );
};

export default BackgroundEffects;
