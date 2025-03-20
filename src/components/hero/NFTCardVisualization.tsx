
import React from 'react';
import { motion } from "framer-motion";
import { Diamond, ShieldCheck, Crown } from "lucide-react";
import GoldHexagon from './GoldHexagon';
import FloatingElements from './FloatingElements';

const NFTCardVisualization: React.FC = () => {
  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Premium glow effect */}
      <div className="absolute inset-0 bg-wealth-gold/10 blur-3xl rounded-full transform scale-110" />

      {/* Card frame with premium border */}
      <motion.div 
        className="relative rounded-2xl overflow-hidden shadow-premium"
        whileHover={{ scale: 1.05, rotate: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        {/* Gold gradient border */}
        <div className="absolute inset-0 bg-gradient-to-br from-wealth-gold via-wealth-gold/50 to-wealth-gold p-0.5 rounded-2xl z-0">
          <div className="absolute inset-0.5 bg-wealth-dark/90 rounded-2xl" />
        </div>

        {/* Card background */}
        <div className="aspect-[3/4] bg-wealth-dark/90 p-6 rounded-2xl relative z-10">
          {/* Subtle animated pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-grid-pattern" />
          </div>

          {/* NFT Content */}
          <div className="h-full flex flex-col">
            {/* Top Row */}
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="text-sm font-medium text-wealth-gold/80">PROOF OF WEALTH</div>
                <div className="text-xl font-display font-bold text-wealth-gold">Legendary NFT</div>
              </div>
              <div className="flex items-center bg-wealth-gold/10 px-3 py-1 rounded-full border border-wealth-gold/20">
                <Diamond className="h-3 w-3 mr-1 text-wealth-gold" />
                <span className="text-xs font-medium text-wealth-silver">TIER A10</span>
              </div>
            </div>
            
            {/* Main NFT Visual - hexagon with gold outline */}
            <div className="flex-1 flex items-center justify-center">
              <GoldHexagon value="100M" />
            </div>
            
            {/* Bottom Info */}
            <div className="mt-6 bg-wealth-gold/5 rounded-xl p-3 border border-wealth-gold/10">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-wealth-silver">NFT ID</span>
                <span className="font-medium text-white">#POW0001</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-wealth-silver">Backed Value</span>
                <span className="font-bold text-wealth-gold">100,000,000 USDT</span>
              </div>
              
              {/* Verification badge */}
              <div className="mt-4 flex items-center justify-center text-xs text-wealth-gold bg-wealth-gold/10 py-1.5 px-3 rounded-full border border-wealth-gold/20">
                <ShieldCheck className="h-3 w-3 mr-1.5" />
                100% Verified Asset
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Enhanced floating elements */}
      <FloatingElements />
    </div>
  );
};

export default NFTCardVisualization;
