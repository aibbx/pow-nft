
import React from 'react';
import { Card } from "@/components/ui/card";
import { DollarSign, ShieldCheck, Crown, Star, Gem, Sparkles, Medal, Diamond } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Avatar } from "@/components/ui/avatar";

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
      icon: <Diamond className="h-3 w-3 mr-1 text-wealth-gold" />, 
      label: "Legendary"
    };
    if (amount >= 10000000) return { 
      icon: <Crown className="h-3 w-3 mr-1 text-wealth-gold" />, 
      label: "Mythic"
    };
    if (amount >= 1000000) return { 
      icon: <Medal className="h-3 w-3 mr-1 text-wealth-gold" />, 
      label: "Epic" 
    };
    return { 
      icon: <Sparkles className="h-3 w-3 mr-1 text-wealth-gold" />, 
      label: "Premium" 
    };
  };
  
  const badge = getBadgeDetails();
  const actualTier = tier || Math.floor(Math.log10(amount / 10000)) + 7;
  
  return (
    <motion.div 
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={cn("", className)}
    >
      <Card className="overflow-hidden border-wealth-gold/50 shadow-premium group transition-all duration-300 bg-white relative">
        {/* Top gold line - made thicker */}
        <div className="h-2 w-full bg-wealth-gold relative overflow-hidden" />
        
        <div className="p-6 relative">
          {/* Top information */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <div className="text-sm font-medium text-wealth-muted">PROOF OF WEALTH</div>
              <div className="text-xl font-display font-bold text-wealth-gold">PoW NFT</div>
            </div>
            <div className="flex items-center bg-wealth-gold/10 px-3 py-1 rounded-full border border-wealth-gold/50">
              {badge.icon}
              <span className="text-xs font-medium">{badge.label}</span>
            </div>
          </div>
          
          {/* Main amount display - hexagonal avatar with clear gold border */}
          <div className="flex flex-col items-center justify-center py-8 mb-4">
            <div className="relative">
              <div 
                className="h-32 w-32 bg-white overflow-hidden"
                style={{
                  clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                  border: "3px solid #F0B90B",
                }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white">
                  <span className="font-display text-2xl font-bold text-wealth-gold">
                    {formattedAmount}
                  </span>
                  <span className="text-xs text-wealth-gold/80">USDT</span>
                </div>
              </div>
              
              {/* Badge for higher tier NFTs with clean styling */}
              {amount >= 1000000 && (
                <div className="absolute -top-2 -right-2 p-1 rounded-full bg-white border-2 border-wealth-gold">
                  {amount >= 10000000 ? 
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
              <div className="text-sm text-wealth-muted">Certified Holder</div>
            </div>
          </div>
          
          {/* Bottom info with enhanced styling */}
          <div className="mt-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-wealth-muted">NFT ID</span>
              <span className="font-medium">{id}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-wealth-muted">Backed Value</span>
              <span className="font-bold text-wealth-gold">{fullFormattedAmount} USDT</span>
            </div>
            <div className="flex items-center mt-3 justify-center w-full py-2 text-xs font-medium bg-wealth-gold/10 text-wealth-gold rounded-full border border-wealth-gold/50">
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
