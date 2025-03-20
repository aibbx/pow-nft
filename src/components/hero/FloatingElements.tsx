
import React from 'react';
import { motion } from "framer-motion";
import { ShieldCheck, Diamond, Trophy, Crown, Star } from "lucide-react";

const FloatingElements: React.FC = () => {
  return (
    <>
      {/* Bottom right verification badge */}
      <motion.div 
        className="absolute -bottom-6 -right-6 p-3 bg-wealth-dark glassmorphism rounded-xl shadow-premium flex items-center border border-wealth-gold/20"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="p-1.5 bg-wealth-gold/10 rounded-full mr-3 diamond-facet">
          <ShieldCheck className="h-4 w-4 text-wealth-gold" />
        </div>
        <div className="text-xs">
          <div className="font-medium text-wealth-gold">Verified Asset</div>
          <div className="text-wealth-silver">100% Backed</div>
        </div>
      </motion.div>
      
      {/* Top left status badge */}
      <motion.div 
        className="absolute -top-4 -left-6 p-2 bg-wealth-dark glassmorphism rounded-lg shadow-premium border border-wealth-gold/20"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="text-sm font-bold px-2 py-1 bg-wealth-gold/10 rounded-md text-wealth-gold flex items-center">
          <Diamond className="h-3 w-3 mr-1" />
          Legendary Status
        </div>
      </motion.div>
      
      {/* Additional luxury badges */}
      <motion.div 
        className="absolute -top-2 right-8 p-2 bg-wealth-dark glassmorphism rounded-lg shadow-premium border border-wealth-gold/20"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="text-sm font-bold px-2 py-1 bg-wealth-gold/10 rounded-md text-wealth-gold flex items-center">
          <Crown className="h-3 w-3 mr-1" />
          Elite Member
        </div>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-12 -left-8 p-2 bg-wealth-dark glassmorphism rounded-lg shadow-premium border border-wealth-gold/20"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="text-sm font-bold px-2 py-1 bg-wealth-gold/10 rounded-md text-wealth-gold flex items-center">
          <Trophy className="h-3 w-3 mr-1" />
          Premium Asset
        </div>
      </motion.div>
      
      {/* Subtle floating particles */}
      <motion.div
        className="absolute top-1/4 left-0 w-2 h-2 rounded-full bg-wealth-gold/30"
        animate={{ 
          x: [0, 20, 0],
          y: [0, -10, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-0 w-3 h-3 rounded-full bg-wealth-gold/30"
        animate={{ 
          x: [0, -15, 0],
          y: [0, -15, 0],
          opacity: [0.3, 0.7, 0.3]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      
      <motion.div
        className="absolute top-3/4 left-1/2 w-2 h-2 rounded-full bg-wealth-gold/30"
        animate={{ 
          x: [0, 10, 0],
          y: [0, 15, 0],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
    </>
  );
};

export default FloatingElements;
