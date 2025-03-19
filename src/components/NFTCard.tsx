
import React from 'react';
import { Card } from "@/components/ui/card";
import { DollarSign, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface NFTCardProps {
  amount: number;
  id: string;
  className?: string;
}

const NFTCard = ({ amount, id, className }: NFTCardProps) => {
  // Format amount with commas
  const formattedAmount = new Intl.NumberFormat('en-US').format(amount);
  
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={cn("", className)}
    >
      <Card className="overflow-hidden border-wealth-gold/30 shadow-md hover:shadow-premium group transition-all duration-300">
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
              <DollarSign className="h-3 w-3 mr-1 text-wealth-gold" />
              <span className="text-xs font-medium">PoW</span>
            </div>
          </div>
          
          {/* Main amount display */}
          <div className="flex flex-col items-center justify-center py-8 mb-4 bg-wealth-gold/5 rounded-lg group-hover:bg-wealth-gold/10 transition-colors">
            <div className="font-display text-4xl font-bold bg-clip-text text-transparent bg-gold-gradient">
              {formattedAmount}
            </div>
            <div className="text-sm font-medium mt-2">USDT</div>
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
