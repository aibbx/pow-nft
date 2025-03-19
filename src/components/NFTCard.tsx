
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
      label: "Legendary"
    };
    if (amount >= 10000000) return { 
      icon: <Crown className="h-3 w-3 mr-1 text-[#E6B325]" />, 
      label: "Mythic"
    };
    if (amount >= 1000000) return { 
      icon: <Medal className="h-3 w-3 mr-1 text-[#E6B325]" />, 
      label: "Epic" 
    };
    return { 
      icon: <Sparkles className="h-3 w-3 mr-1 text-[#E6B325]" />, 
      label: "Premium" 
    };
  };
  
  const badge = getBadgeDetails();
  const actualTier = tier || Math.floor(Math.log10(amount / 10000)) + 7;

  // Determine if we should use a filled gold hexagon for higher tiers
  const useFilledHexagon = amount >= 10000000;
  
  return (
    <motion.div 
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={cn("", className)}
    >
      <Card className="overflow-hidden border-[#E6B325]/50 shadow-premium group transition-all duration-300 bg-white relative">
        {/* Top gold line */}
        <div className="h-2 w-full bg-[#E6B325] relative overflow-hidden" />
        
        <div className="p-6 relative">
          {/* Top information */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <div className="text-sm font-medium text-wealth-muted">PROOF OF WEALTH</div>
              <div className="text-xl font-display font-bold text-[#E6B325]">PoW NFT</div>
            </div>
            <div className="flex items-center bg-[#E6B325]/10 px-3 py-1 rounded-full border border-[#E6B325]/50">
              {badge.icon}
              <span className="text-xs font-medium">{badge.label}</span>
            </div>
          </div>
          
          {/* Main amount display - SVG-based hexagon */}
          <div className="flex flex-col items-center justify-center py-8 mb-4">
            <div className="relative h-32 w-32">
              <svg 
                viewBox="0 0 100 100" 
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon 
                  points="25,0 75,0 100,50 75,100 25,100 0,50" 
                  fill={useFilledHexagon ? "#E6B325" : "white"}
                  stroke="#E6B325"
                  strokeWidth="5"
                />
              </svg>
              
              {/* Content positioned absolutely over the SVG */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className={`font-display text-2xl font-bold ${useFilledHexagon ? "text-white" : "text-[#E6B325]"}`}>
                  {formattedAmount}
                </span>
                <span className={`text-xs ${useFilledHexagon ? "text-white" : "text-[#E6B325]"}`}>
                  USDT
                </span>
              </div>
              
              {/* Badge for higher tier NFTs */}
              {useFilledHexagon && (
                <div className="absolute -top-2 -right-2 p-1 rounded-full bg-white border-2 border-[#E6B325]">
                  {amount >= 100000000 ? 
                    <Diamond className="h-4 w-4 text-[#E6B325]" /> : 
                    <Crown className="h-4 w-4 text-[#E6B325]" />
                  }
                </div>
              )}
            </div>
            
            {/* NFT name */}
            <div className="mt-4 font-medium text-center">
              <div className="font-bold text-[#E6B325]">
                {amount >= 100000000 ? "Tier A10" : `Wealth Tier A${actualTier}`}
              </div>
              <div className="text-sm text-wealth-muted">Certified Holder</div>
            </div>
          </div>
          
          {/* Bottom info */}
          <div className="mt-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-wealth-muted">NFT ID</span>
              <span className="font-medium">{id}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-wealth-muted">Backed Value</span>
              <span className="font-bold text-[#E6B325]">{fullFormattedAmount} USDT</span>
            </div>
            <div className="flex items-center mt-3 justify-center w-full py-2 text-xs font-medium bg-[#E6B325]/10 text-[#E6B325] rounded-full border border-[#E6B325]/50">
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
