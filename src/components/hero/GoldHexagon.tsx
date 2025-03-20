
import React from 'react';
import { motion } from 'framer-motion';

interface GoldHexagonProps {
  value: string;
  currency?: string;
  size?: 'md' | 'lg';
  filled?: boolean;
}

const GoldHexagon: React.FC<GoldHexagonProps> = ({ 
  value, 
  currency = "USDT",
  size = 'lg',
  filled = false
}) => {
  const sizeClasses = {
    md: "w-48 h-48",
    lg: "w-64 h-64"
  };

  const textSizes = {
    md: "text-4xl md:text-5xl",
    lg: "text-5xl md:text-6xl"
  };

  const currencySizes = {
    md: "text-sm",
    lg: "text-lg"
  };

  return (
    <motion.div 
      className="relative"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <div className={`relative ${sizeClasses[size]}`}>
        {/* Glow effect behind the hexagon */}
        <div className="absolute inset-0 blur-xl bg-wealth-gold/20 rounded-full transform scale-110" />
        
        <svg 
          viewBox="0 0 100 100" 
          className="w-full h-full relative z-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background layer */}
          <polygon 
            points="25,0 75,0 100,50 75,100 25,100 0,50" 
            fill="#10121A"
            stroke="#E6B325"
            strokeWidth="2"
          />
          
          {/* Inner layer */}
          <polygon 
            points="27,2 73,2 98,50 73,98 27,98 2,50" 
            fill={filled ? "#E6B325" : "rgba(230, 179, 37, 0.05)"}
            stroke="#E6B325"
            strokeWidth="0.5"
            strokeDasharray={filled ? "0" : "1,1"}
          />
          
          {/* Animated gradient highlight */}
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E6B325" stopOpacity="0.8">
                <animate
                  attributeName="offset"
                  values="0;0.3;0"
                  dur="5s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="50%" stopColor="#FFDC62" stopOpacity="0.6">
                <animate
                  attributeName="offset"
                  values="0.5;0.7;0.5"
                  dur="5s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="#E6B325" stopOpacity="0.8">
                <animate
                  attributeName="offset"
                  values="1;0.7;1"
                  dur="5s"
                  repeatCount="indefinite"
                />
              </stop>
            </linearGradient>
          </defs>
          
          {/* Highlight layer */}
          <polygon 
            points="25,0 75,0 100,50 75,100 25,100 0,50" 
            fill="none"
            stroke="url(#goldGradient)"
            strokeWidth="1"
          />
        </svg>

        {/* Content positioned absolutely over the SVG */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
          <div className="text-center">
            <div className={`font-display ${textSizes[size]} font-bold ${filled ? "text-black" : "text-wealth-gold"}`}>
              {value}
            </div>
            <div className={`${currencySizes[size]} font-medium mt-2 ${filled ? "text-black" : "text-wealth-gold"}`}>
              {currency}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GoldHexagon;
