
import React from 'react';
import { motion } from "framer-motion";
import { 
  WalletIcon, 
  Package, 
  DollarSign, 
  ShieldCheck, 
  Link
} from "lucide-react";
import { fadeInUp, staggerContainer } from "@/utils/animation";

const Features = () => {
  const features = [
    {
      icon: <WalletIcon className="h-6 w-6" />,
      title: "Deposit & Mint",
      description: "Deposit your USDT and mint a corresponding Stable NFT that represents your wealth."
    },
    {
      icon: <Package className="h-6 w-6" />,
      title: "Verifiable NFTs",
      description: "Each NFT is verifiably backed by USDT deposits, providing proof of your wealth on-chain."
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Trade & Transfer",
      description: "Trade your Wealth NFTs on marketplaces or transfer them to showcase your financial status."
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Secure Storage",
      description: "Your funds are securely managed with industry-leading security practices."
    },
    {
      icon: <Link className="h-6 w-6" />,
      title: "Cross-Chain Future",
      description: "Expanding to TRON, TON, and Solana to provide multi-chain wealth verification."
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
            Key Features
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            The Ultimate Platform for <span className="bg-clip-text text-transparent bg-gold-gradient">Wealth Display</span>
          </h2>
          <p className="text-lg text-wealth-muted">
            Proof-of-Wealth combines the security of stable coins with the flexibility of NFTs 
            to create a premium wealth verification system.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
