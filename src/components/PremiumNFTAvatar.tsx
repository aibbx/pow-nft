
import React from 'react';
import { motion } from "framer-motion";
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
      {/* Hexagonal avatar with SVG for better visibility */}
      <div className={cn("relative", sizes[size])}>
        <svg 
          viewBox="0 0 100 100" 
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon 
            points="25,0 75,0 100,50 75,100 25,100 0,50" 
            fill="white"
            stroke="#E6B325"
            strokeWidth="5"
          />
        </svg>
        
        {/* Content positioned absolutely over the SVG */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={cn("font-bold", fontSizes[size], "text-[#E6B325]")}>
            {formattedAmount}
          </span>
          <span className="text-xs text-[#E6B325]">USDT</span>
        </div>
        
        {/* Badge icon */}
        <div className={cn(
          "absolute bg-white rounded-full p-0.5",
          verifiedBadgeSizes[size],
          "border-2 border-[#E6B325]",
          "z-10"
        )}>
          <div className="rounded-full p-0.5 bg-[#E6B325]/20">
            {getBadgeIcon()}
          </div>
        </div>
      </div>
    </MotionComponent>
  );
};

export default PremiumNFTAvatar;
