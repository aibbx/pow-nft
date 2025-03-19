
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
      {/* Gold Hexagon with prominent outline */}
      <div className="hexagon relative w-64 h-64 bg-white" style={{
        clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
        border: "3px solid #F0B90B",
      }}>
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
