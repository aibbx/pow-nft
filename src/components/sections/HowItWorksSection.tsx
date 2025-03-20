
import React from 'react';
import { motion } from "framer-motion";
import { Wallet, DollarSign, BarChart3, Link as LinkIcon } from "lucide-react";
import { fadeInUp, staggerContainer } from '@/utils/animation';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: <Wallet className="h-6 w-6" />,
      title: "Connect Your Wallet",
      description: "Simply connect your crypto wallet to our secure platform in just a few clicks."
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Make Your Deposit",
      description: "Deposit any amount of USDT to back your personalized NFT through our secure protocol."
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Receive Your NFT",
      description: "Instantly receive your unique Proof-of-Wealth NFT that visually represents your deposited value."
    },
    {
      icon: <LinkIcon className="h-6 w-6" />,
      title: "Showcase Your Status",
      description: "Display your wealth NFT across social platforms or utilize it within the growing DeFi ecosystem."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp()}
        >
          <span className="inline-block py-1 px-3 mb-4 text-xs font-medium tracking-wider uppercase bg-wealth-gold/10 text-wealth-gold rounded-full">
            Easy Process
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            How To Get Your <span className="bg-clip-text text-transparent bg-gold-gradient">Wealth NFT</span>
          </h2>
          <p className="text-lg text-wealth-muted">
            Creating your personalized Proof-of-Wealth NFT is simple and straightforward. 
            Follow these easy steps to join our exclusive community.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer(0.1, 0.2)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              variants={fadeInUp()}
              className="relative"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-gold-gradient flex items-center justify-center text-black font-bold text-sm">
                {index + 1}
              </div>
              
              {/* Step Card */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-wealth-gold/10 h-full card-hover">
                <div className="p-3 mb-4 inline-flex items-center justify-center rounded-lg bg-wealth-gold/10 text-wealth-gold">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-wealth-muted">{step.description}</p>
              </div>
              
              {/* Connector (not on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 w-8 h-0.5 bg-wealth-gold/30">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-wealth-gold rounded-full" />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
