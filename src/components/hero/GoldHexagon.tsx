
import React from 'react';

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
      {/* Enhanced outer glow effect */}
      <div className="absolute -inset-3 bg-yellow-100/50 blur-xl rounded-full"></div>
      
      {/* Gold Hexagon with improved border */}
      <div className="hexagon relative w-64 h-64 bg-white border-2 border-wealth-gold shadow-premium">
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-center">
            <div className="font-display text-5xl md:text-6xl font-bold text-wealth-gold">
              {value}
            </div>
            <div className="text-sm font-medium mt-2 text-wealth-gold/80">{currency}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoldHexagon;
