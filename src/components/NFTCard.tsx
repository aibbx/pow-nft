
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
      label: "Legendary",
      extra: <div className="absolute top-0 left-0 w-full h-full bg-wealth-gold/5 shimmer"></div>
    };
    if (amount >= 10000000) return { 
      icon: <Crown className="h-3 w-3 mr-1 text-wealth-gold" />, 
      label: "Mythic",
      extra: <div className="absolute top-0 left-0 w-full h-full bg-wealth-gold/5 shimmer"></div>
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
  
  // Get gradient class based on amount with enhanced luxury gradients
  const getGradient = () => {
    if (amount >= 100000000) return "bg-gradient-to-br from-amber-500 via-yellow-600 to-amber-700";
    if (amount >= 10000000) return "bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600";
    if (amount >= 1000000) return "bg-gradient-to-br from-amber-300 via-yellow-400 to-amber-500";
    return "bg-gradient-to-br from-amber-200 via-yellow-300 to-amber-400";
  };
  
  const badge = getBadgeDetails();
  const actualTier = tier || Math.floor(Math.log10(amount / 10000)) + 7;
  
  return (
    <motion.div 
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={cn("", className)}
    >
      <Card className="overflow-hidden border-wealth-gold/30 shadow-lg hover:shadow-premium group transition-all duration-300 bg-white relative">
        {/* Top gradient line with enhanced shine */}
        <div className="h-1.5 w-full bg-gold-gradient relative overflow-hidden">
          <div className="absolute inset-0 diamond-facet"></div>
        </div>
        
        {/* Conditional sparkling effect for high-value NFTs */}
        {amount >= 10000000 && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-10 right-10 w-8 h-8 bg-wealth-gold/20 rounded-full blur-sm animate-pulse"></div>
            <div className="absolute bottom-20 left-10 w-6 h-6 bg-wealth-gold/20 rounded-full blur-sm animate-pulse delay-300"></div>
            <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-wealth-gold/20 rounded-full blur-sm animate-pulse delay-500"></div>
          </div>
        )}
        
        <div className="p-6 relative">
          {badge.extra}
          
          {/* Top information with enhanced styling */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <div className="text-sm font-medium text-wealth-muted">PROOF OF WEALTH</div>
              <div className="text-xl font-display font-bold bg-clip-text text-transparent bg-gold-gradient">PoW NFT</div>
            </div>
            <div className="flex items-center bg-wealth-gold/10 px-3 py-1 rounded-full border border-wealth-gold/20">
              {badge.icon}
              <span className="text-xs font-medium">{badge.label}</span>
            </div>
          </div>
          
          {/* Main amount display - hexagonal avatar with enhanced styling */}
          <div className="flex flex-col items-center justify-center py-8 mb-4">
            <div className="relative">
              {/* Enhanced glow effect for premium NFTs */}
              {amount >= 1000000 && (
                <div className="absolute -inset-2 blur-lg opacity-40 -z-10 rounded-full bg-gold-gradient"></div>
              )}
              
              <Avatar 
                shape="hexagon" 
                className={cn(
                  "h-32 w-32 border-2 border-wealth-gold/40 rotate-90 shadow-premium overflow-hidden", 
                  getGradient()
                )}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white -rotate-90 backdrop-blur-sm">
                  <span className="font-display text-2xl font-bold drop-shadow-md">{formattedAmount}</span>
                  <span className="text-xs">USDT</span>
                </div>
                
                {/* Add decorative corner elements */}
                <div className="absolute top-0 right-0 w-6 h-6 bg-white/10 rotate-45"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 bg-white/10 rotate-45"></div>
                
                {/* Diamond facet reflection for higher tier NFTs */}
                {amount >= 10000000 && (
                  <div className="absolute inset-0 diamond-facet"></div>
                )}
              </Avatar>
              
              {/* Premium badge for higher tier NFTs */}
              {amount >= 1000000 && (
                <div className="absolute -top-2 -right-2 bg-gold-gradient p-1 rounded-full shadow-premium diamond-facet">
                  {amount >= 10000000 ? 
                    <Diamond className="h-4 w-4 text-black" /> : 
                    <Crown className="h-4 w-4 text-black" />
                  }
                </div>
              )}
              
              {/* Additional luxury elements for highest tier */}
              {amount >= 100000000 && (
                <div className="absolute -inset-1 border border-dashed border-wealth-gold/40 rounded-full animate-spin-slow"></div>
              )}
            </div>
            
            {/* NFT name with enhanced styling */}
            <div className="mt-4 font-medium text-center">
              <div className={cn(
                "font-bold",
                amount >= 10000000 ? "bg-clip-text text-transparent bg-gold-gradient" : "text-wealth-gold"
              )}>
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
              <span className="font-bold bg-clip-text text-transparent bg-gold-gradient">{fullFormattedAmount} USDT</span>
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
