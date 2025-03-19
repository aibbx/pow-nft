
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
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp()}
        >
          <span className="inline-block py-1 px-3 mb-4 text-xs font-medium tracking-wider uppercase bg-wealth-gold/10 text-wealth-gold rounded-full">
            Premium Display
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Your Social Media <span className="bg-clip-text text-transparent bg-gold-gradient">Status Symbol</span>
          </h2>
          <p className="text-lg text-wealth-muted">
            Show off your wealth with hexagonal profile pictures that display your verified financial status
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
              <PremiumNFTAvatar amount={amount} size="lg" />
              <div className="text-center">
                <p className="font-medium">{new Intl.NumberFormat('en-US').format(amount)} USDT</p>
                <p className="text-sm text-wealth-muted">Verified Wealth NFT</p>
              </div>
              <Button variant="ghost" size="sm" className="mt-2">
                <Download className="h-4 w-4 mr-1" />
                Download
              </Button>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="relative p-8 rounded-2xl bg-wealth-gold/5 border border-wealth-gold/20 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3 flex justify-center">
              <div className="relative">
                <PremiumNFTAvatar amount={10000000} size="xl" />
                <div className="absolute -top-4 -right-4 bg-wealth-gold/10 px-3 py-1 rounded-full text-xs font-medium text-wealth-gold">
                  Mythic
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <h3 className="text-2xl font-display font-bold mb-3">Stand Out On Any Platform</h3>
              <p className="text-wealth-muted mb-6">
                Our hexagonal Proof-of-Wealth avatars are designed to stand out on any social media platform. 
                The unique shape and premium gradient instantly signal your verified financial status.
              </p>
              <Button 
                onClick={onDeposit}
                className="bg-gold-gradient text-black font-medium hover:opacity-90 transition-opacity"
              >
                Create Your Premium Avatar
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileAvatarsSection;
