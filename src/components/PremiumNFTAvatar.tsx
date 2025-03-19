
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
    if (amount >= 100000000) return <Diamond className="text-white" />;
    if (amount >= 10000000) return <Crown className="text-white" />;
    if (amount >= 1000000) return <Medal className="text-white" />;
    if (amount >= 100000) return <Sparkles className="text-white" />;
    return <Verified className="text-white" />;
  };
  
  // Create gradient based on amount
  const getGradient = () => {
    if (amount >= 100000000) return "premium-gradient-100m"; // $100M+
    if (amount >= 10000000) return "premium-gradient-10m"; // $10M+
    if (amount >= 1000000) return "premium-gradient-1m"; // $1M+
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
        "absolute inset-0 blur-md opacity-70 -z-10 rounded-full",
        getGradient()
      )} />
      
      {/* Animated sparkling effect */}
      {animated && (
        <>
          <div className="absolute -inset-1 opacity-20 blur-sm bg-white rounded-full animate-pulse"></div>
          <div className="absolute -inset-4 opacity-10 blur-md bg-white rounded-full animate-pulse delay-300"></div>
        </>
      )}
      
      {/* Hexagonal avatar */}
      <div className="relative">
        <Avatar 
          shape="hexagon"
          className={cn(
            sizes[size],
            "border-2 overflow-hidden hexagon-container rotate-90 shadow-xl",
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
              {formattedAmount}
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
            {getBadgeIcon()}
          </div>
        </div>
      </div>
    </MotionComponent>
  );
};

export default PremiumNFTAvatar;
