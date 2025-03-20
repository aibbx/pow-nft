
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
      whileHover={animated ? { scale: 1.05, y: -5 } : undefined}
      transition={animated ? { type: "spring", stiffness: 400, damping: 10 } : undefined}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 blur-xl bg-wealth-gold/20 rounded-full transform scale-110 -z-10" />
      
      {/* Hexagonal avatar with SVG for better visibility */}
      <div className={cn("relative", sizes[size])}>
        <svg 
          viewBox="0 0 100 100" 
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Black background */}
          <polygon 
            points="25,0 75,0 100,50 75,100 25,100 0,50" 
            fill="#10121A"
            stroke="#E6B325"
            strokeWidth="4"
          />
          
          {/* Inner layer */}
          <polygon 
            points="30,5 70,5 95,50 70,95 30,95 5,50" 
            fill="rgba(230, 179, 37, 0.05)"
            stroke="#E6B325"
            strokeWidth="1"
            strokeDasharray="1,1"
          />
          
          {/* Animated highlight */}
          <defs>
            <linearGradient id="avatarGoldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
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
            stroke="url(#avatarGoldGradient)"
            strokeWidth="1"
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
          "absolute rounded-full p-0.5",
          verifiedBadgeSizes[size],
          "bg-wealth-dark border-2 border-[#E6B325]",
          "z-10 diamond-facet"
        )}>
          <div className="rounded-full p-0.5 bg-[#E6B325]">
            {getBadgeIcon()}
          </div>
        </div>
        
        {/* Tier label - only visible on hover */}
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 px-2 py-0.5 bg-wealth-dark text-xs text-wealth-gold border border-wealth-gold/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
          {getTierLabel()}
        </div>
      </div>
    </MotionComponent>
  );
};

export default PremiumNFTAvatar;
