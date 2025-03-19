
import React from 'react';
import { motion } from "framer-motion";
import { ShieldCheck, Diamond } from "lucide-react";

const FloatingElements: React.FC = () => {
  return (
    <>
      <motion.div 
        className="absolute -bottom-6 -right-6 p-3 bg-white glassmorphism rounded-xl shadow-premium flex items-center border border-wealth-gold/20"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="p-1.5 bg-wealth-gold/10 rounded-full mr-3 diamond-facet">
          <ShieldCheck className="h-4 w-4 text-wealth-gold" />
        </div>
        <div className="text-xs">
          <div className="font-medium">Verified Asset</div>
          <div className="text-wealth-muted">100% Backed</div>
        </div>
      </motion.div>
      
      <motion.div 
        className="absolute -top-4 -left-6 p-2 bg-white glassmorphism rounded-lg shadow-premium border border-wealth-gold/20"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="text-sm font-bold px-2 py-1 bg-wealth-gold/10 rounded-md text-wealth-gold flex items-center">
          <Diamond className="h-3 w-3 mr-1" />
          Legendary Status
        </div>
      </motion.div>
    </>
  );
};

export default FloatingElements;
