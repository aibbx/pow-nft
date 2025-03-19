
import React from 'react';
import { Card } from "@/components/ui/card";
import { DollarSign, ShieldCheck, Crown, Star, Gem } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Avatar } from "@/components/ui/avatar";

interface NFTCardProps {
  amount: number;
  id: string;
  className?: string;
}

const NFTCard = ({ amount, id, className }: NFTCardProps) => {
  // Format amount with commas
  const formattedAmount = new Intl.NumberFormat('en-US').format(amount);
  
  // Determine badge icon and colors based on amount
  const getBadgeDetails = () => {
    if (amount >= 500000) return { icon: <Crown className="h-3 w-3 mr-1 text-wealth-gold" />, label: "Elite" };
    if (amount >= 100000) return { icon: <Star className="h-3 w-3 mr-1 text-wealth-gold" />, label: "Premium" };
    return { icon: <Gem className="h-3 w-3 mr-1 text-wealth-gold" />, label: "Standard" };
  };
  
  // Get gradient class based on amount
  const getGradient = () => {
    if (amount >= 500000) return "bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600";
    if (amount >= 100000) return "bg-gradient-to-br from-amber-300 via-yellow-400 to-amber-500";
    return "bg-gradient-to-br from-amber-200 via-yellow-300 to-amber-400";
  };
  
  const badge = getBadgeDetails();
  
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={cn("", className)}
    >
      <Card className="overflow-hidden border-wealth-gold/30 shadow-md hover:shadow-premium group transition-all duration-300 bg-white">
        {/* Top gradient line */}
        <div className="h-1 w-full bg-gold-gradient" />
        
        <div className="p-6">
          {/* Top information */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <div className="text-sm font-medium text-wealth-muted">PROOF OF WEALTH</div>
              <div className="text-xl font-display font-bold">PoW NFT</div>
            </div>
            <div className="flex items-center bg-wealth-gold/10 px-3 py-1 rounded-full">
              {badge.icon}
              <span className="text-xs font-medium">{badge.label}</span>
            </div>
          </div>
          
          {/* Main amount display - now a hexagonal avatar */}
          <div className="flex flex-col items-center justify-center py-8 mb-4">
            <div className="relative">
              <Avatar 
                shape="hexagon" 
                className={cn("h-32 w-32 border-2 border-wealth-gold/30", getGradient())}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <span className="font-display text-2xl font-bold">{formattedAmount}</span>
                  <span className="text-xs">USDT</span>
                </div>
              </Avatar>
              
              {/* Premium badge for higher tier NFTs */}
              {amount >= 100000 && (
                <div className="absolute -top-2 -right-2 bg-gold-gradient p-1 rounded-full shadow-md">
                  <Crown className="h-4 w-4 text-black" />
                </div>
              )}
            </div>
            
            {/* NFT name */}
            <div className="mt-4 font-medium text-center">
              <div className="text-wealth-gold font-bold">Wealth Tier {Math.log10(amount).toFixed(0)}</div>
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
              <span className="font-bold">{formattedAmount} USDT</span>
            </div>
            <div className="flex items-center mt-3 justify-center w-full py-2 text-xs font-medium bg-wealth-gold/10 text-wealth-gold rounded-full">
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
