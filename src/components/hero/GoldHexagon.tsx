
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
      {/* Hexagon using an explicit SVG background for maximum compatibility */}
      <div className="relative w-64 h-64">
        <img 
          src="/hexagon-outline.svg" 
          alt="Gold Hexagon" 
          className="w-full h-full"
        />
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
