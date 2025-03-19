
import React from 'react';
import { motion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Verified, Sparkles, Diamond, Medal, Crown } from "lucide-react";
import { cn } from "@/lib/utils";

interface PremiumNFTAvatarProps {
  amount: number;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  animated?: boolean;
}

const PremiumNFTAvatar = ({ 
  amount, 
  size = "md", 
  className,
  animated = true 
}: PremiumNFTAvatarProps) => {
  // Format amount for display
  const formatAmount = (value: number) => {
    if (value >= 1000000000) {
      return `${(value / 1000000000).toFixed(0)}B`;
    }
    if (value >= 1000000) {
      return `${(value / 1000000).toFixed(0)}M`;
    }
    if (value >= 1000) {
      return `${(value / 1000).toFixed(0)}K`;
    }
    return value.toString();
  };
  
  const formattedAmount = formatAmount(amount);
  
  // Determine size classes
  const sizes = {
    sm: "h-16 w-16",
    md: "h-24 w-24",
    lg: "h-32 w-32",
    xl: "h-40 w-40"
  };
  
  const verifiedBadgeSizes = {
    sm: "h-5 w-5 -right-1 -top-1",
    md: "h-6 w-6 -right-1 -top-1",
    lg: "h-7 w-7 -right-1.5 -top-1.5",
    xl: "h-8 w-8 -right-2 -top-2"
  };
  
  const fontSizes = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl"
  };
  
  // Determine badge icon based on amount
  const getBadgeIcon = () => {
    if (amount >= 100000000) return <Diamond className="text-wealth-dark" />;
    if (amount >= 10000000) return <Crown className="text-wealth-dark" />;
    if (amount >= 1000000) return <Medal className="text-wealth-dark" />;
    if (amount >= 100000) return <Sparkles className="text-wealth-dark" />;
    return <Verified className="text-wealth-dark" />;
  };
  
  // Get tier label based on amount
  const getTierLabel = () => {
    if (amount >= 100000000) return "Tier A10";
    if (amount >= 10000000) return "Tier A9";
    if (amount >= 1000000) return "Tier A8";
    if (amount >= 100000) return "Tier A7";
    return "Tier A" + Math.floor(Math.log10(amount / 10000) + 6);
  };
  
  const MotionComponent = animated ? motion.div : "div";
  
  return (
    <MotionComponent
      className={cn("relative group", className)}
      whileHover={animated ? { scale: 1.05 } : undefined}
      transition={animated ? { type: "spring", stiffness: 400, damping: 10 } : undefined}
    >
      {/* More prominent glow effect */}
      <div className="absolute inset-0 blur-lg opacity-60 -z-10 rounded-full bg-yellow-100" />
      
      {/* Hexagonal avatar with enhanced styling */}
      <div className="relative">
        <Avatar 
          shape="hexagon"
          className={cn(
            sizes[size],
            "overflow-hidden shadow-premium bg-white hexagon",
            "border-2 border-wealth-gold" // Enhanced border
          )}
        >
          {/* Inner content with clean styling */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-white">
            <span className={cn(
              "font-bold", 
              fontSizes[size],
              "text-wealth-gold"
            )}>
              {formattedAmount}
            </span>
            <span className="text-xs text-wealth-gold/80">USDT</span>
          </div>
        </Avatar>
        
        {/* Enhanced badge icon */}
        <div className={cn(
          "absolute bg-white rounded-full p-0.5 shadow-premium",
          verifiedBadgeSizes[size],
          "border-2 border-wealth-gold", // Enhanced border
          "z-10"
        )}>
          <div className="rounded-full p-0.5 bg-wealth-gold/20">
            {getBadgeIcon()}
          </div>
        </div>
      </div>
    </MotionComponent>
  );
};

export default PremiumNFTAvatar;
