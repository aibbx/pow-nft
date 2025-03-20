
import React from 'react';
import { motion } from "framer-motion";
import { 
  WalletIcon, 
  Package, 
  DollarSign, 
  ShieldCheck
} from "lucide-react";
import { fadeInUp, staggerContainer } from "@/utils/animation";

const Features = () => {
  const features = [
    {
      icon: <WalletIcon className="h-6 w-6" />,
      title: "Simple Minting Process",
      description: "Deposit your USDT and instantly receive a beautiful NFT that represents your verified wealth."
    },
    {
      icon: <Package className="h-6 w-6" />,
      title: "100% Backed Assets",
      description: "Every NFT is fully backed by your USDT deposits, creating transparent proof of your wealth on the blockchain."
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Flexible Ownership",
      description: "Freely trade, transfer, or showcase your Wealth NFTs across platforms to highlight your financial achievements."
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Enhanced Security",
      description: "Your assets are protected with state-of-the-art security measures, giving you complete peace of mind."
    }
  ];

  return (
    <section id="features" className="py-20 md:py-32 bg-gradient-to-b from-white to-wealth-cream/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp()}
        >
          <span className="inline-block py-1 px-3 mb-4 text-xs font-medium tracking-wider uppercase bg-wealth-gold/10 text-wealth-gold rounded-full">
            Premium Features
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            The Premier Platform for <span className="bg-clip-text text-transparent bg-gold-gradient">Wealth Visualization</span>
          </h2>
          <p className="text-lg text-wealth-muted">
            Our Proof-of-Wealth platform seamlessly combines the security of stablecoins with the uniqueness of NFTs, 
            creating a premium system for showcasing your financial achievements.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          variants={staggerContainer(0.1, 0.2)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={fadeInUp()}
              className="bg-white rounded-xl p-6 shadow-sm border border-wealth-gold/10 card-hover"
            >
              <div className="p-3 mb-4 inline-flex items-center justify-center rounded-lg bg-wealth-gold/10 text-wealth-gold">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-wealth-muted">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
