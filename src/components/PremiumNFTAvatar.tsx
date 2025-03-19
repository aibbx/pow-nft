
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
  
  // Create gradient based on amount
  const getGradient = () => {
    if (amount >= 100000000) return "ultra-luxury-gradient"; // $100M+
    if (amount >= 10000000) return "luxury-gradient"; // $10M+
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
      {/* Enhanced multi-layer glow effect */}
      <div className={cn(
        "absolute inset-0 blur-md opacity-80 -z-10 rounded-full scale-110",
        getGradient()
      )} />
      
      {/* Ultra premium shimmering effect */}
      {animated && (
        <>
          <div className="absolute -inset-1 opacity-40 blur-sm bg-white rounded-full animate-pulse"></div>
          <div className="absolute -inset-4 opacity-30 blur-lg bg-white rounded-full animate-pulse delay-300"></div>
          <div className="absolute -inset-2 opacity-20 blur-md bg-gold-gradient rounded-full animate-pulse delay-500"></div>
          {amount >= 10000000 && (
            <div className="absolute -inset-6 opacity-10 blur-xl bg-gold-gradient rounded-full animate-pulse delay-700"></div>
          )}
        </>
      )}
      
      {/* Enhanced hexagonal avatar with ultra-premium styling */}
      <div className="relative">
        <div className={cn(
          "absolute -inset-1.5 rounded-full", 
          getGradient(),
          "opacity-60 blur-sm"
        )}></div>
        
        <Avatar 
          shape="hexagon"
          className={cn(
            sizes[size],
            "border-2 overflow-hidden rotate-0 shadow-premium-ultra",
            "border-white/50", // Enhanced white border for definition
            "hex-crisp" // Using custom hexagon class for better clarity
          )}
        >
          {/* Inner content with improved clarity */}
          <div className={cn(
            "absolute inset-0 flex flex-col items-center justify-center hex-content",
            "backdrop-blur-none bg-gradient-to-b from-white/90 to-white/70 border border-wealth-gold/30" // Removed blur for clarity
          )}>
            <span className={cn(
              "font-bold drop-shadow-md", // Enhanced text shadow
              fontSizes[size],
              "bg-clip-text text-transparent",
              getGradient()
            )}>
              {formattedAmount}
            </span>
            <span className="text-xs text-wealth-dark font-semibold">USDT</span>
          </div>
          
          {/* Enhanced premium decorative elements */}
          <div className="absolute top-0 left-1/2 w-12 h-1 -translate-x-1/2 bg-white/40"></div>
          <div className="absolute bottom-0 left-1/2 w-12 h-1 -translate-x-1/2 bg-white/40"></div>
          
          {/* Ultra-premium corner accents */}
          <div className="absolute top-[10%] right-[10%] w-2 h-2 bg-white/60 rounded-full"></div>
          <div className="absolute bottom-[10%] left-[10%] w-2 h-2 bg-white/60 rounded-full"></div>
          
          {/* Subtle pattern overlay */}
          {amount >= 10000000 && (
            <div className="absolute inset-0 opacity-10 pattern-luxury"></div>
          )}
          
          {/* Dynamic reflection effect */}
          <div className="absolute inset-0 diamond-reflection"></div>
        </Avatar>
        
        {/* Enhanced verification badge with premium styling */}
        <div className={cn(
          "absolute bg-white rounded-full p-0.5 shadow-premium-ultra",
          verifiedBadgeSizes[size],
          "ring-2 ring-wealth-gold/50 z-10" // Added golden ring and z-index
        )}>
          <div className={cn(
            "rounded-full p-0.5",
            getGradient(),
            "border border-white/80" // Enhanced border
          )}>
            {getBadgeIcon()}
          </div>
        </div>
        
        {/* Enhanced decorative elements for premium tiers */}
        {amount >= 10000000 && (
          <>
            <div className="absolute top-1/2 -left-2 w-3 h-3 rounded-full bg-gold-gradient shadow-premium-glow"></div>
            <div className="absolute top-1/2 -right-2 w-3 h-3 rounded-full bg-gold-gradient shadow-premium-glow"></div>
          </>
        )}
        
        {/* Enhanced premium animation effects */}
        {amount >= 100000000 && (
          <>
            <div className="absolute -inset-3 border-2 border-dashed border-wealth-gold/40 rounded-full animate-spin-slow"></div>
            <div className="absolute -inset-5 border border-wealth-gold/20 rounded-full animate-spin-reverse"></div>
          </>
        )}
      </div>
    </MotionComponent>
  );
};

export default PremiumNFTAvatar;
