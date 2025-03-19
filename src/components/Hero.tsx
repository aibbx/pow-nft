
import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, DollarSign, ShieldCheck, Package } from "lucide-react";
import { fadeInUp, scaleIn, slideInFromRight } from "@/utils/animation";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-wealth-gold/5 to-transparent opacity-70" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-wealth-gold/5 to-transparent opacity-70" />
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
                BSC Stable NFT Protocol
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight tracking-tight">
                <span className="block">Showcase Your Wealth</span>
                <span className="bg-clip-text text-transparent bg-gold-gradient">
                  Verified On-Chain
                </span>
              </h1>
            </motion.div>
            
            <motion.p 
              className="text-lg md:text-xl text-wealth-muted max-w-xl"
              variants={fadeInUp(0.2)}
            >
              Proof-of-Wealth allows you to mint NFTs backed by your stable coin holdings. 
              Display your financial strength with verifiable on-chain assets.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={fadeInUp(0.3)}
            >
              <Button 
                size="lg" 
                className="bg-gold-gradient text-black font-medium hover:opacity-90 transition-opacity"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-wealth-gold/30 text-wealth-dark hover:bg-wealth-gold/5"
              >
                Learn More
              </Button>
            </motion.div>
          </div>
          
          {/* Feature Icons */}
          <motion.div 
            className="grid grid-cols-3 gap-4 mt-12 max-w-lg"
            variants={fadeInUp(0.4)}
          >
            {[
              { icon: <DollarSign className="h-5 w-5" />, text: "Backed by USDT" },
              { icon: <ShieldCheck className="h-5 w-5" />, text: "100% Secure" },
              { icon: <Package className="h-5 w-5" />, text: "Premium NFTs" },
            ].map((feature, i) => (
              <div 
                key={i} 
                className="flex flex-col items-center justify-center p-4 text-center glassmorphism rounded-xl"
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
      {/* Glow effect */}
      <div className="absolute -inset-4 bg-gold-gradient opacity-10 blur-xl rounded-2xl" />
      
      {/* Card frame */}
      <div className="relative rounded-2xl overflow-hidden shadow-premium">
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
                <div className="text-xl font-display font-bold">Premium NFT</div>
              </div>
              <div className="flex items-center bg-wealth-gold/10 px-3 py-1 rounded-full">
                <DollarSign className="h-3 w-3 mr-1 text-wealth-gold" />
                <span className="text-xs font-medium">BSC</span>
              </div>
            </div>
            
            {/* Main NFT Visual */}
            <div className="flex-1 flex items-center justify-center">
              <div className="relative w-full aspect-square max-w-xs bg-gold-gradient rounded-lg p-0.5">
                <div className="absolute inset-0 bg-white rounded-lg flex items-center justify-center p-6">
                  <div className="text-center">
                    <div className="font-display text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gold-gradient">
                      100K
                    </div>
                    <div className="text-sm font-medium mt-2">USDT</div>
                  </div>
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
                <span className="font-bold">100,000 USDT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <motion.div 
        className="absolute -bottom-6 -right-6 p-3 bg-white glassmorphism rounded-xl shadow-premium flex items-center"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
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
      >
        <div className="text-sm font-medium px-2 py-1 bg-wealth-gold/10 rounded-md text-wealth-gold">
          Premium
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
