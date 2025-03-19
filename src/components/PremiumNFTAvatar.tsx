
import React from 'react';
import { motion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Verified } from "lucide-react";
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
  // Format amount with commas
  const formattedAmount = new Intl.NumberFormat('en-US').format(amount);
  
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
  
  // Create gradient based on amount
  const getGradient = () => {
    if (amount >= 1000000) return "premium-gradient-1m"; // $1M+
    if (amount >= 500000) return "premium-gradient-500k"; // $500K+
    if (amount >= 100000) return "premium-gradient-100k"; // $100K+
    return "premium-gradient-default"; // Default
  };
  
  const MotionComponent = animated ? motion.div : "div";
  
  return (
    <MotionComponent
      className={cn("relative group", className)}
      whileHover={animated ? { scale: 1.05 } : undefined}
      transition={animated ? { type: "spring", stiffness: 400, damping: 10 } : undefined}
    >
      {/* Glow effect behind avatar */}
      <div className={cn(
        "absolute inset-0 blur-md opacity-60 -z-10",
        getGradient()
      )} />
      
      {/* Hexagonal avatar */}
      <div className="relative">
        <Avatar 
          shape="hexagon"
          className={cn(
            sizes[size],
            "border-2 overflow-hidden hexagon-container rotate-90",
            getGradient()
          )}
        >
          {/* Inner content - showing the amount */}
          <div className={cn(
            "absolute inset-0 flex flex-col items-center justify-center font-display -rotate-90",
            "bg-wealth-light/95"
          )}>
            <span className={cn(
              "font-bold bg-clip-text text-transparent",
              fontSizes[size],
              getGradient()
            )}>
              {amount >= 1000000 ? `${(amount / 1000000).toFixed(1)}M` : `${formattedAmount.split(',')[0]}K`}
            </span>
            <span className="text-xs text-wealth-muted">USDT</span>
          </div>
        </Avatar>
        
        {/* Verification badge */}
        <div className={cn(
          "absolute bg-white rounded-full p-0.5 shadow-md",
          verifiedBadgeSizes[size]
        )}>
          <div className={cn("rounded-full", getGradient())}>
            <Verified className="text-white" />
          </div>
        </div>
      </div>
    </MotionComponent>
  );
};

export default PremiumNFTAvatar;
