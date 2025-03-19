
import React from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";
import PremiumNFTAvatar from '@/components/PremiumNFTAvatar';
import { fadeInUp, staggerContainer } from '@/utils/animation';

interface ProfileAvatarsSectionProps {
  onDeposit: () => void;
}

const ProfileAvatarsSection = ({ onDeposit }: ProfileAvatarsSectionProps) => {
  const avatarAmounts = [100000, 1000000, 10000000, 100000000];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-wealth-cream/20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp()}
        >
          <span className="inline-block py-1 px-3 mb-4 text-xs font-medium tracking-wider uppercase bg-[#E6B325]/10 text-[#E6B325] rounded-full">
            Premium Digital Asset
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Your Social Media <span className="text-[#E6B325]">Status Symbol</span>
          </h2>
          <p className="text-lg text-wealth-muted">
            Showcase your financial prominence with our exclusive hexagonal profile avatars - the digital equivalent of a luxury statement
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          variants={staggerContainer(0.1, 0.2)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          {avatarAmounts.map((amount, index) => (
            <motion.div 
              key={index}
              variants={fadeInUp()}
              className="flex flex-col items-center gap-3"
            >
              {/* Clean backdrop for hexagon */}
              <div className="p-6">
                <div className="relative">
                  <PremiumNFTAvatar amount={amount} size="lg" />
                </div>
              </div>
              <div className="text-center">
                <p className="font-medium text-lg">{new Intl.NumberFormat('en-US').format(amount)} USDT</p>
                <p className="text-sm text-wealth-muted">Verified Wealth NFT</p>
              </div>
              <Button variant="ghost" size="sm" className="mt-2 hover:bg-[#E6B325]/10 hover:text-[#E6B325]">
                <Download className="h-4 w-4 mr-1" />
                Download
              </Button>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="relative p-8 md:p-12 rounded-2xl bg-white border border-[#E6B325]/20 max-w-4xl mx-auto">
          {/* Premium corner accents for a sophisticated look */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-[#E6B325]/20 rounded-tl-xl"></div>
          <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-[#E6B325]/20 rounded-tr-xl"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-[#E6B325]/20 rounded-bl-xl"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-[#E6B325]/20 rounded-br-xl"></div>
          
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3 flex justify-center">
              <div className="relative">
                {/* Simplified premium display with SVG hexagon */}
                <div className="p-6">
                  <PremiumNFTAvatar amount={10000000} size="xl" />
                </div>
                
                {/* Clean tier badge */}
                <div className="absolute -top-2 -right-2 bg-[#E6B325] px-3 py-1 rounded-full text-xs font-bold text-wealth-dark border border-white">
                  Mythic
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-3 text-[#E6B325]">Elevate Your Digital Presence</h3>
              <p className="text-wealth-muted mb-6">
                Our exclusive hexagonal Proof-of-Wealth avatars are the digital equivalent of a luxury statement piece. 
                The clean, premium design instantly communicates your verified wealth status with sophisticated elegance.
              </p>
              <Button 
                onClick={onDeposit}
                className="bg-[#E6B325] text-wealth-dark font-bold hover:opacity-90 transition-opacity px-8 py-6"
              >
                Mint Your Premium Avatar
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileAvatarsSection;
