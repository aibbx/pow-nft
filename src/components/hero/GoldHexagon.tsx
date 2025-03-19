
import React from 'react';

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
    <div className="relative">
      <div className={`relative ${sizeClasses[size]}`}>
        <svg 
          viewBox="0 0 100 100" 
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon 
            points="25,0 75,0 100,50 75,100 25,100 0,50" 
            fill={filled ? "#E6B325" : "white"}
            stroke="#E6B325"
            strokeWidth="5"
          />
        </svg>

        {/* Content positioned absolutely over the SVG */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-center">
            <div className={`font-display ${textSizes[size]} font-bold ${filled ? "text-white" : "text-[#E6B325]"}`}>
              {value}
            </div>
            <div className={`${currencySizes[size]} font-medium mt-2 ${filled ? "text-white" : "text-[#E6B325]"}`}>
              {currency}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoldHexagon;
