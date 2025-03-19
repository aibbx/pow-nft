
import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, DollarSign, ShieldCheck, Package, Crown, Diamond, Star } from "lucide-react";
import { fadeInUp, scaleIn, slideInFromRight } from "@/utils/animation";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Luxury background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-wealth-gold/10 to-transparent opacity-70" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-wealth-gold/10 to-transparent opacity-70" />
        <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-wealth-gold/5 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-20 h-20 bg-wealth-gold/5 rounded-full blur-xl animate-pulse delay-200" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 py-12">
        {/* Left Column - Text */}
        <motion.div 
          className="flex flex-col justify-center"
          initial="initial"
          animate="animate"
          variants={fadeInUp()}
        >
          <div className="space-y-8">
            <motion.div variants={fadeInUp(0.1)}>
              <span className="inline-block py-1 px-3 mb-4 text-xs font-medium tracking-wider uppercase bg-wealth-gold/10 text-wealth-gold rounded-full">
                Exclusive BSC Stable NFT Protocol
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight tracking-tight">
                <span className="block">Showcase Your Wealth</span>
                <span className="bg-clip-text text-transparent bg-gold-gradient">
                  With Elite Status NFTs
                </span>
              </h1>
            </motion.div>
            
            <motion.p 
              className="text-lg md:text-xl text-wealth-muted max-w-xl"
              variants={fadeInUp(0.2)}
            >
              Join the exclusive club of verified wealthy individuals. Our Proof-of-Wealth NFTs are the ultimate digital status symbol for those who want to make a statement.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={fadeInUp(0.3)}
            >
              <Button 
                size="lg" 
                className="bg-gold-gradient text-black font-bold hover:opacity-90 transition-opacity group"
              >
                Mint Your Elite NFT
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-wealth-gold/30 text-wealth-dark hover:bg-wealth-gold/5"
              >
                Explore Collection
              </Button>
            </motion.div>
          </div>
          
          {/* Exclusive Features */}
          <motion.div 
            className="grid grid-cols-3 gap-4 mt-12 max-w-lg"
            variants={fadeInUp(0.4)}
          >
            {[
              { icon: <Diamond className="h-5 w-5" />, text: "Verified Wealth" },
              { icon: <Crown className="h-5 w-5" />, text: "Elite Status" },
              { icon: <Star className="h-5 w-5" />, text: "Social Prestige" },
            ].map((feature, i) => (
              <div 
                key={i} 
                className="flex flex-col items-center justify-center p-4 text-center glassmorphism rounded-xl hover:shadow-premium hover:-translate-y-1 transition-all duration-300"
              >
                <div className="p-2 mb-2 rounded-full bg-wealth-gold/10 text-wealth-gold">
                  {feature.icon}
                </div>
                <span className="text-sm font-medium">{feature.text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
        
        {/* Right Column - NFT Card */}
        <motion.div 
          className="relative flex items-center justify-center"
          variants={slideInFromRight(0.3)}
          initial="initial"
          animate="animate"
        >
          <NFTCardVisualization />
        </motion.div>
      </div>
    </div>
  );
};

const NFTCardVisualization = () => {
  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Enhanced glow effect */}
      <div className="absolute -inset-4 bg-gold-gradient opacity-20 blur-xl rounded-2xl animate-pulse" />
      
      {/* Floating particles */}
      <motion.div 
        className="absolute -top-10 -right-10 h-5 w-5 rounded-full bg-wealth-gold/30 blur-sm"
        animate={{ y: [0, -10, 0], opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-10 -left-5 h-3 w-3 rounded-full bg-wealth-gold/30 blur-sm"
        animate={{ y: [0, 10, 0], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      
      {/* Card frame */}
      <motion.div 
        className="relative rounded-2xl overflow-hidden shadow-premium"
        whileHover={{ scale: 1.03, rotate: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        {/* Card background with slight gradient */}
        <div className="aspect-[3/4] bg-wealth-light p-6 border border-wealth-gold/30 relative">
          {/* Gold shimmer effect */}
          <div className="absolute inset-0 opacity-5 shimmer" />
          
          {/* NFT Content */}
          <div className="h-full flex flex-col">
            {/* Top Row */}
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="text-sm font-medium text-wealth-muted">PROOF OF WEALTH</div>
                <div className="text-xl font-display font-bold">Legendary NFT</div>
              </div>
              <div className="flex items-center bg-wealth-gold/10 px-3 py-1 rounded-full">
                <Diamond className="h-3 w-3 mr-1 text-wealth-gold" />
                <span className="text-xs font-medium">TIER 10</span>
              </div>
            </div>
            
            {/* Main NFT Visual */}
            <div className="flex-1 flex items-center justify-center">
              <div className="relative w-full aspect-square max-w-xs bg-gold-gradient rounded-lg p-0.5 shadow-xl">
                <div className="absolute inset-0 bg-white rounded-lg flex items-center justify-center p-6">
                  <div className="text-center">
                    <div className="font-display text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gold-gradient">
                      100M
                    </div>
                    <div className="text-sm font-medium mt-2">USDT</div>
                  </div>
                </div>
                
                {/* Luxury corner elements */}
                <div className="absolute -top-1 -right-1 p-1 bg-gold-gradient rounded-full">
                  <Diamond className="h-4 w-4 text-white" />
                </div>
                <div className="absolute -bottom-1 -left-1 p-1 bg-gold-gradient rounded-full">
                  <Crown className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>
            
            {/* Bottom Info */}
            <div className="mt-6">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-wealth-muted">NFT ID</span>
                <span className="font-medium">#POW0001</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-wealth-muted">Backed Value</span>
                <span className="font-bold">100,000,000 USDT</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Enhanced floating elements */}
      <motion.div 
        className="absolute -bottom-6 -right-6 p-3 bg-white glassmorphism rounded-xl shadow-premium flex items-center"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="p-1.5 bg-wealth-gold/10 rounded-full mr-3">
          <ShieldCheck className="h-4 w-4 text-wealth-gold" />
        </div>
        <div className="text-xs">
          <div className="font-medium">Verified Asset</div>
          <div className="text-wealth-muted">100% Backed</div>
        </div>
      </motion.div>
      
      <motion.div 
        className="absolute -top-4 -left-6 p-2 bg-white glassmorphism rounded-lg shadow-premium"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="text-sm font-bold px-2 py-1 bg-wealth-gold/10 rounded-md text-wealth-gold flex items-center">
          <Diamond className="h-3 w-3 mr-1" />
          Legendary Status
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
