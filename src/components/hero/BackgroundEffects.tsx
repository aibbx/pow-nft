
import React from 'react';
import { motion } from "framer-motion";

const BackgroundEffects: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-wealth-gold/10 to-transparent opacity-70" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-wealth-gold/10 to-transparent opacity-70" />
      <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-wealth-gold/5 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-20 h-20 bg-wealth-gold/5 rounded-full blur-xl animate-pulse delay-200" />
      
      {/* Add floating gold particles for luxury feel */}
      <motion.div 
        className="absolute top-1/4 left-1/3 w-3 h-3 bg-wealth-gold/20 rounded-full blur-sm"
        animate={{ y: [0, -15, 0], opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-wealth-gold/20 rounded-full blur-sm"
        animate={{ y: [0, 15, 0], opacity: [0.2, 0.7, 0.2] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div 
        className="absolute top-2/3 left-2/3 w-4 h-4 bg-wealth-gold/20 rounded-full blur-sm"
        animate={{ y: [0, -10, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
    </div>
  );
};

export default BackgroundEffects;
