
import React from 'react';
import { motion } from "framer-motion";
import { slideInFromRight } from "@/utils/animation";
import HeroLeftColumn from './HeroLeftColumn';
import BackgroundEffects from './BackgroundEffects';
import NFTCardVisualization from './NFTCardVisualization';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Luxury background elements */}
      <BackgroundEffects />
      
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 py-12">
        {/* Left Column - Text */}
        <HeroLeftColumn />
        
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

export default Hero;
