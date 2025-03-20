
import React from 'react';
import { Card } from "@/components/ui/card";
import { DollarSign, ShieldCheck, Crown, Diamond, Sparkles, Medal } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface NFTCardProps {
  amount: number;
  id: string;
  tier?: number;
  className?: string;
}

const NFTCard = ({ amount, id, tier, className }: NFTCardProps) => {
  // Format amount with commas or to millions/billions format
  const formatCurrency = (value: number) => {
    if (value >= 1000000000) {
      return `${(value / 1000000000).toFixed(0)}B`;
    }
    if (value >= 1000000) {
      return `${(value / 1000000).toFixed(0)}M`;
    }
    return new Intl.NumberFormat('en-US').format(value);
  };
  
  const formattedAmount = formatCurrency(amount);
  const fullFormattedAmount = new Intl.NumberFormat('en-US').format(amount);
  
  // Determine badge icon and colors based on amount
  const getBadgeDetails = () => {
    if (amount >= 100000000) return { 
      icon: <Diamond className="h-3 w-3 mr-1 text-[#E6B325]" />, 
      label: "Legendary",
      color: "from-wealth-gold to-wealth-gold/70"
    };
    if (amount >= 10000000) return { 
      icon: <Crown className="h-3 w-3 mr-1 text-[#E6B325]" />, 
      label: "Mythic",
      color: "from-wealth-gold to-wealth-gold/60"
    };
    if (amount >= 1000000) return { 
      icon: <Medal className="h-3 w-3 mr-1 text-[#E6B325]" />, 
      label: "Epic",
      color: "from-wealth-gold to-wealth-gold/50"
    };
    return { 
      icon: <Sparkles className="h-3 w-3 mr-1 text-[#E6B325]" />, 
      label: "Premium",
      color: "from-wealth-gold to-wealth-gold/40"
    };
  };
  
  const badge = getBadgeDetails();
  const actualTier = tier || Math.floor(Math.log10(amount / 10000)) + 7;

  // Determine if we should use a filled gold hexagon for higher tiers
  const useFilledHexagon = amount >= 10000000;
  
  return (
    <motion.div 
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={cn("", className)}
    >
      <Card className="overflow-hidden border-wealth-gold/30 shadow-premium group transition-all duration-300 bg-wealth-dark relative">
        {/* Gradient border effect */}
        <div className="absolute inset-0 p-0.5 bg-gradient-to-br from-wealth-gold via-wealth-gold/50 to-wealth-gold rounded-lg">
          <div className="absolute inset-0 bg-wealth-dark rounded-lg" />
        </div>
        
        {/* Top gold line with animated shine */}
        <div className="h-2 w-full bg-gradient-to-r from-wealth-gold/80 via-wealth-gold to-wealth-gold/80 relative overflow-hidden">
          <div className="absolute inset-0 premium-reflection" />
        </div>
        
        <div className="p-6 relative z-10">
          {/* Top information */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <div className="text-sm font-medium text-wealth-silver">PROOF OF WEALTH</div>
              <div className="text-xl font-display font-bold text-wealth-gold">PoW NFT</div>
            </div>
            <div className="flex items-center bg-wealth-gold/10 px-3 py-1 rounded-full border border-wealth-gold/20">
              {badge.icon}
              <span className="text-xs font-medium text-wealth-silver">{badge.label}</span>
            </div>
          </div>
          
          {/* Main amount display - SVG-based hexagon */}
          <div className="flex flex-col items-center justify-center py-8 mb-4">
            <div className="relative h-32 w-32">
              {/* Subtle glow effect */}
              <div className="absolute inset-0 blur-xl bg-wealth-gold/20 rounded-full transform scale-110 -z-10" />
              
              <svg 
                viewBox="0 0 100 100" 
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Background */}
                <polygon 
                  points="25,0 75,0 100,50 75,100 25,100 0,50" 
                  fill="#10121A"
                  stroke="#E6B325"
                  strokeWidth="3"
                />
                
                {/* Inner layer */}
                <polygon 
                  points="30,5 70,5 95,50 70,95 30,95 5,50" 
                  fill={useFilledHexagon ? "#E6B325" : "rgba(230, 179, 37, 0.05)"}
                  stroke="#E6B325"
                  strokeWidth="1"
                  strokeDasharray={useFilledHexagon ? "0" : "1,1"}
                />
                
                {/* Animated highlight */}
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
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className={`font-display text-2xl font-bold ${useFilledHexagon ? "text-black" : "text-wealth-gold"}`}>
                  {formattedAmount}
                </span>
                <span className={`text-xs ${useFilledHexagon ? "text-black" : "text-wealth-gold"}`}>
                  USDT
                </span>
              </div>
              
              {/* Badge for higher tier NFTs */}
              {useFilledHexagon && (
                <div className="absolute -top-2 -right-2 p-1 rounded-full bg-wealth-dark border-2 border-wealth-gold diamond-facet">
                  {amount >= 100000000 ? 
                    <Diamond className="h-4 w-4 text-wealth-gold" /> : 
                    <Crown className="h-4 w-4 text-wealth-gold" />
                  }
                </div>
              )}
            </div>
            
            {/* NFT name */}
            <div className="mt-4 font-medium text-center">
              <div className="font-bold text-wealth-gold">
                {amount >= 100000000 ? "Tier A10" : `Wealth Tier A${actualTier}`}
              </div>
              <div className="text-sm text-wealth-silver">Certified Holder</div>
            </div>
          </div>
          
          {/* Bottom info */}
          <div className="mt-4 space-y-2 p-3 bg-wealth-gold/5 rounded-xl border border-wealth-gold/10">
            <div className="flex justify-between text-sm">
              <span className="text-wealth-silver">NFT ID</span>
              <span className="font-medium text-white">{id}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-wealth-silver">Backed Value</span>
              <span className="font-bold text-wealth-gold">{fullFormattedAmount} USDT</span>
            </div>
            <div className="flex items-center mt-3 justify-center w-full py-2 text-xs font-medium bg-wealth-gold/10 text-wealth-gold rounded-full border border-wealth-gold/20">
              <ShieldCheck className="h-3 w-3 mr-1" />
              100% Backed by Stable Coins
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default NFTCard;
