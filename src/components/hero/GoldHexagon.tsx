
import React from 'react';
import { Diamond, Crown } from "lucide-react";

interface GoldHexagonProps {
  value: string;
  currency?: string;
}

const GoldHexagon: React.FC<GoldHexagonProps> = ({ 
  value, 
  currency = "USDT" 
}) => {
  return (
    <div className="relative">
      {/* Outer glow effect */}
      <div className="absolute -inset-2 bg-gold-gradient opacity-30 blur-lg rounded-full"></div>
      
      {/* Gold Hexagon */}
      <div className="premium-hexagon relative aspect-square w-64 h-64 p-0.5 premium-gold-gradient">
        {/* Inner content with white background */}
        <div className="absolute inset-0 bg-white flex items-center justify-center p-6 overflow-hidden">
          <div className="text-center z-10">
            <div className="font-display text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gold-gradient">
              {value}
            </div>
            <div className="text-sm font-medium mt-2 text-wealth-gold/80">{currency}</div>
          </div>
          
          {/* Enhanced gold reflection effect */}
          <div className="absolute inset-0 premium-reflection"></div>
        </div>
        
        {/* Diamond icon on top right corner */}
        <div className="absolute -top-2 -right-2 p-1.5 rounded-full bg-gold-gradient shadow-premium diamond-facet z-10">
          <Diamond className="h-4 w-4 text-white" />
        </div>
        
        {/* Crown icon on bottom left corner */}
        <div className="absolute -bottom-2 -left-2 p-1.5 rounded-full bg-gold-gradient shadow-premium diamond-facet z-10">
          <Crown className="h-4 w-4 text-white" />
        </div>
      </div>
    </div>
  );
};

export default GoldHexagon;
