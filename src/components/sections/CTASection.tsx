
import React from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  onDeposit: () => void;
}

const CTASection = ({ onDeposit }: CTASectionProps) => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative overflow-hidden rounded-2xl bg-wealth-dark">
          {/* Gold gradient accents */}
          <div className="absolute top-0 left-1/4 w-40 h-40 bg-gold-gradient rounded-full mix-blend-overlay opacity-20 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-gold-gradient rounded-full mix-blend-overlay opacity-20 blur-3xl" />
          
          <div className="relative px-6 py-16 md:p-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto space-y-6"
            >
              <span className="inline-block py-1 px-3 mb-4 text-xs font-medium tracking-wider uppercase bg-wealth-gold/10 text-wealth-gold rounded-full">
                Join Us Today
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white">
                Ready to Showcase Your <span className="bg-clip-text text-transparent bg-gold-gradient">Financial Success</span>?
              </h2>
              <p className="text-lg text-wealth-silver max-w-2xl mx-auto">
                Join our growing community of Proof-of-Wealth NFT holders and display 
                your financial achievements with beautiful, verifiable NFTs backed by real assets.
              </p>
              <div className="pt-4">
                <Button 
                  onClick={onDeposit}
                  className="bg-gold-gradient text-wealth-dark font-bold hover:opacity-90 transition-opacity"
                  size="lg"
                >
                  Create Your PoW NFT Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
