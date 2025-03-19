
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
          <span className="inline-block py-1 px-3 mb-4 text-xs font-medium tracking-wider uppercase bg-wealth-gold/10 text-wealth-gold rounded-full">
            Luxury Digital Asset
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Your Social Media <span className="bg-clip-text text-transparent ultra-luxury-gradient">Status Symbol</span>
          </h2>
          <p className="text-lg text-wealth-muted">
            Showcase your financial prominence with our exclusive hexagonal profile avatars - the digital equivalent of a luxury timepiece
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
              {/* Enhanced elevation with premium shadow and backdrop */}
              <div className="p-6 rounded-full shadow-premium-ultra bg-wealth-cream/10 backdrop-blur-sm">
                <div className="relative">
                  {/* Enhanced ambient glow for premium tiers */}
                  <div className={`absolute inset-0 rounded-full blur-xl opacity-30 ${
                    amount >= 10000000 ? "luxury-gradient" : 
                    amount >= 1000000 ? "premium-gradient-1m" : 
                    "premium-gradient-100k"
                  }`}></div>
                  
                  <PremiumNFTAvatar amount={amount} size="lg" />
                </div>
              </div>
              <div className="text-center">
                <p className="font-medium text-lg">{new Intl.NumberFormat('en-US').format(amount)} USDT</p>
                <p className="text-sm text-wealth-muted">Verified Wealth NFT</p>
              </div>
              <Button variant="ghost" size="sm" className="mt-2 hover:bg-wealth-gold/10 hover:text-wealth-gold">
                <Download className="h-4 w-4 mr-1" />
                Download
              </Button>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="relative p-8 md:p-12 rounded-2xl bg-gradient-to-br from-wealth-cream/20 to-white border border-wealth-gold/30 max-w-4xl mx-auto shadow-premium-ultra">
          {/* Premium corner accents */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-wealth-gold/30 rounded-tl-xl"></div>
          <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-wealth-gold/30 rounded-tr-xl"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-wealth-gold/30 rounded-bl-xl"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-wealth-gold/30 rounded-br-xl"></div>
          
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3 flex justify-center">
              <div className="relative">
                {/* Enhanced multi-layered glow effect */}
                <div className="absolute -inset-6 rounded-full blur-2xl opacity-30 luxury-gradient"></div>
                <div className="absolute -inset-3 rounded-full blur-md opacity-40 luxury-gradient"></div>
                
                {/* Premium container with crystalline effect */}
                <div className="p-8 rounded-full bg-gradient-to-br from-white/90 to-white/60 shadow-premium-ultra border border-wealth-gold/30">
                  <PremiumNFTAvatar amount={10000000} size="xl" />
                </div>
                
                {/* Luxury tier badge */}
                <div className="absolute -top-4 -right-4 bg-wealth-gold px-3 py-1 rounded-full text-xs font-bold text-wealth-dark border-2 border-white shadow-premium">
                  Mythic
                </div>
                
                {/* Animated luxury indicator */}
                <div className="absolute -bottom-2 -right-2 h-6 w-6 rounded-full bg-wealth-gold animate-pulse shadow-premium-glow"></div>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-3 bg-clip-text text-transparent luxury-gradient">Elevate Your Digital Presence</h3>
              <p className="text-wealth-muted mb-6">
                Our exclusive hexagonal Proof-of-Wealth avatars are the digital equivalent of a luxury watch or supercar. 
                The unique crystalline design and premium finish instantly communicate your verified wealth status across all platforms.
              </p>
              <Button 
                onClick={onDeposit}
                className="bg-gold-gradient text-wealth-dark font-bold hover:opacity-90 transition-opacity shadow-premium-ultra px-8 py-6"
              >
                Mint Your Luxury Avatar
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
