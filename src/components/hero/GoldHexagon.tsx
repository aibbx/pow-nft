
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

  return (
    <div className="relative">
      {filled ? (
        // Filled gold hexagon (matching reference image)
        <div className={`relative ${sizeClasses[size]}`}>
          <div 
            className="w-full h-full"
            style={{
              clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
              backgroundColor: "#F0B90B",
            }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-center">
                <div className={`font-display ${textSizes[size]} font-bold text-white`}>
                  {value}
                </div>
                <div className="text-sm font-medium mt-2 text-white/90">{currency}</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Outlined gold hexagon with sharp edges
        <div className={`relative ${sizeClasses[size]}`}>
          <div 
            className="w-full h-full"
            style={{
              clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
              border: "4px solid #F0B90B",
              backgroundColor: "white",
            }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-center">
                <div className={`font-display ${textSizes[size]} font-bold text-wealth-gold`}>
                  {value}
                </div>
                <div className="text-sm font-medium mt-2 text-wealth-gold/80">{currency}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GoldHexagon;
