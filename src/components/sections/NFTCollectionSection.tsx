
import React from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";
import NFTCard from '@/components/NFTCard';
import { fadeInUp, staggerContainer } from '@/utils/animation';

interface NFTCollectionSectionProps {
  onDeposit: () => void;
}

const NFTCollectionSection = ({ onDeposit }: NFTCollectionSectionProps) => {
  const nfts = [
    { amount: 100000, id: "#POW001", tier: 7 },
    { amount: 1000000, id: "#POW002", tier: 8 },
    { amount: 10000000, id: "#POW003", tier: 9 },
    { amount: 100000000, id: "#POW004", tier: 10 }
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-wealth-cream/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp()}
        >
          <span className="inline-block py-1 px-3 mb-4 text-xs font-medium tracking-wider uppercase bg-wealth-gold/10 text-wealth-gold rounded-full">
            Luxury Collection
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Our <span className="bg-clip-text text-transparent bg-gold-gradient">Exclusive</span> NFT Collection
          </h2>
          <p className="text-lg text-wealth-muted">
            Each beautifully designed NFT represents a specific amount of your deposited USDT, providing a visual representation of your wealth that you can proudly display.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          variants={staggerContainer(0.1, 0.2)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          {nfts.map((nft, index) => (
            <motion.div 
              key={index}
              variants={fadeInUp()}
            >
              <NFTCard amount={nft.amount} id={nft.id} tier={nft.tier} />
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center">
          <Button 
            onClick={onDeposit}
            className="bg-gold-gradient text-black font-medium hover:opacity-90 transition-opacity"
            size="lg"
          >
            <Wallet className="mr-2 h-4 w-4" />
            Create Your PoW NFT Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NFTCollectionSection;
