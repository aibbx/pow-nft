
import React from 'react';
import { motion } from "framer-motion";
import { Diamond } from "lucide-react";
import GoldHexagon from './GoldHexagon';
import FloatingElements from './FloatingElements';

const NFTCardVisualization: React.FC = () => {
  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Card frame */}
      <motion.div 
        className="relative rounded-2xl overflow-hidden shadow-lg bg-white"
        whileHover={{ scale: 1.03, rotate: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        {/* Card background */}
        <div className="aspect-[3/4] bg-white p-6 border border-wealth-gold/20 relative">
          {/* NFT Content */}
          <div className="h-full flex flex-col">
            {/* Top Row */}
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="text-sm font-medium text-wealth-muted">PROOF OF WEALTH</div>
                <div className="text-xl font-display font-bold text-wealth-gold">Legendary NFT</div>
              </div>
              <div className="flex items-center bg-wealth-gold/10 px-3 py-1 rounded-full border border-wealth-gold/20">
                <Diamond className="h-3 w-3 mr-1 text-wealth-gold" />
                <span className="text-xs font-medium">TIER A10</span>
              </div>
            </div>
            
            {/* Main NFT Visual - hexagon with gold outline */}
            <div className="flex-1 flex items-center justify-center">
              <GoldHexagon value="100M" />
            </div>
            
            {/* Bottom Info */}
            <div className="mt-6">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-wealth-muted">NFT ID</span>
                <span className="font-medium">#POW0001</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-wealth-muted">Backed Value</span>
                <span className="font-bold text-wealth-gold">100,000,000 USDT</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Floating elements */}
      <FloatingElements />
    </div>
  );
};

export default NFTCardVisualization;
