
import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Diamond, Crown, Star } from "lucide-react";
import { fadeInUp } from "@/utils/animation";

interface HeroLeftColumnProps {
  onDeposit: () => void;
}

const HeroLeftColumn: React.FC<HeroLeftColumnProps> = ({ onDeposit }) => {
  const handleBrowseCollection = () => {
    const nftCollectionSection = document.getElementById('nft-collection');
    if (nftCollectionSection) {
      window.scrollTo({
        top: nftCollectionSection.offsetTop - 80, // Offset for the fixed navbar
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.div 
      className="flex flex-col justify-center"
      initial="initial"
      animate="animate"
      variants={fadeInUp()}
    >
      <div className="space-y-8">
        <motion.div variants={fadeInUp(0.1)}>
          <span className="inline-block py-2 px-4 mb-4 text-sm font-semibold tracking-wider uppercase bg-wealth-gold/20 text-wealth-gold rounded-full border-2 border-wealth-gold/30 shadow-gold">
            Exclusive Proof of Wealth Protocol
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight tracking-tight">
            <span className="block">Elevate Your Digital Status</span>
            <span className="bg-clip-text text-transparent bg-gold-gradient drop-shadow-sm">
              With Premium Wealth NFTs
            </span>
          </h1>
        </motion.div>
        
        <motion.p 
          className="text-lg md:text-xl text-wealth-muted max-w-xl"
          variants={fadeInUp(0.2)}
        >
          Welcome to the exclusive community of verified wealthy individuals. Our Proof-of-Wealth NFTs represent a new standard of digital prestige for those who want to showcase their financial achievements.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4"
          variants={fadeInUp(0.3)}
        >
          <Button 
            size="lg" 
            className="bg-gold-gradient text-black font-bold hover:opacity-90 transition-opacity group shadow-premium"
            onClick={onDeposit}
          >
            Create Your Wealth Status NFT
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-wealth-gold/30 text-wealth-dark hover:bg-wealth-gold/5"
            onClick={handleBrowseCollection}
          >
            Browse Collection
          </Button>
        </motion.div>
      </div>
      
      <motion.div 
        className="grid grid-cols-3 gap-4 mt-12 max-w-lg"
        variants={fadeInUp(0.4)}
      >
        {[
          { icon: <Diamond className="h-5 w-5" />, text: "Verified Assets" },
          { icon: <Crown className="h-5 w-5" />, text: "Premium Status" },
          { icon: <Star className="h-5 w-5" />, text: "Digital Prestige" },
        ].map((feature, i) => (
          <div 
            key={i} 
            className="flex flex-col items-center justify-center p-4 text-center glassmorphism rounded-xl border border-wealth-gold/20 shadow-premium hover:-translate-y-1 transition-all duration-300"
          >
            <div className="p-2 mb-2 rounded-full bg-wealth-gold/10 text-wealth-gold diamond-facet">
              {feature.icon}
            </div>
            <span className="text-sm font-medium">{feature.text}</span>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default HeroLeftColumn;
