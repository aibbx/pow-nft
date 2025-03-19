
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
        {filled ? (
          // Filled gold hexagon
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
                <div className={`${currencySizes[size]} font-medium mt-2 text-white`}>{currency}</div>
              </div>
            </div>
          </div>
        ) : (
          // Simple outlined hexagon with clean gold border as in reference image
          <div
            className="w-full h-full"
            style={{
              clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
              border: "5px solid #F0B90B",
              backgroundColor: "white",
            }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-center">
                <div className={`font-display ${textSizes[size]} font-bold text-wealth-gold`}>
                  {value}
                </div>
                <div className={`${currencySizes[size]} font-medium mt-2 text-wealth-gold`}>{currency}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GoldHexagon;
