
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Wallet, 
  BarChart3, 
  DollarSign,
  Link as LinkIcon,
} from "lucide-react";
import NFTCard from '@/components/NFTCard';
import DepositModal from '@/components/DepositModal';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/utils/animation';

const Index = () => {
  const [depositModalOpen, setDepositModalOpen] = useState(false);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />
        
        {/* Features Section */}
        <Features />
        
        {/* How It Works Section */}
        <HowItWorksSection />
        
        {/* NFT Collection Section */}
        <NFTCollectionSection onDeposit={() => setDepositModalOpen(true)} />
        
        {/* CTA Section */}
        <CTASection onDeposit={() => setDepositModalOpen(true)} />
      </main>
      
      <Footer />
      
      {/* Deposit Modal */}
      <DepositModal open={depositModalOpen} onOpenChange={setDepositModalOpen} />
    </div>
  );
};

const HowItWorksSection = () => {
  const steps = [
    {
      icon: <Wallet className="h-6 w-6" />,
      title: "Connect Wallet",
      description: "Connect your cryptocurrency wallet to the Proof-of-Wealth platform."
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Deposit USDT",
      description: "Deposit your USDT into the smart contract to back your NFT."
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Mint NFT",
      description: "Mint your Proof-of-Wealth NFT that represents your deposited value."
    },
    {
      icon: <LinkIcon className="h-6 w-6" />,
      title: "Display & Utilize",
      description: "Showcase your wealth or use your NFT for various DeFi applications."
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
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            How Proof of Wealth <span className="bg-clip-text text-transparent bg-gold-gradient">Works</span>
          </h2>
          <p className="text-lg text-wealth-muted">
            With just a few simple steps, you can secure your Proof-of-Wealth NFT 
            and showcase your financial strength.
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

const NFTCollectionSection = ({ onDeposit }: { onDeposit: () => void }) => {
  const nfts = [
    { amount: 10000, id: "#POW001" },
    { amount: 50000, id: "#POW002" },
    { amount: 100000, id: "#POW003" },
    { amount: 500000, id: "#POW004" }
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
            Wealth Display
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Our <span className="bg-clip-text text-transparent bg-gold-gradient">Premium</span> NFT Collection
          </h2>
          <p className="text-lg text-wealth-muted">
            Each NFT represents a specific amount of deposited USDT, providing a verifiable proof of your wealth.
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
              <NFTCard amount={nft.amount} id={nft.id} />
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
            Deposit & Mint Your NFT
          </Button>
        </div>
      </div>
    </section>
  );
};

const CTASection = ({ onDeposit }: { onDeposit: () => void }) => {
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
              <span className="inline-block py-1 px-3 mb-4 text-xs font-medium tracking-wider uppercase bg-white/10 text-wealth-gold rounded-full">
                Get Started Today
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white">
                Ready to Display Your <span className="bg-clip-text text-transparent bg-gold-gradient">Wealth</span>?
              </h2>
              <p className="text-lg text-wealth-silver max-w-2xl mx-auto">
                Join the exclusive community of Proof-of-Wealth NFT holders and showcase 
                your financial status with verifiable on-chain assets.
              </p>
              <div className="pt-4">
                <Button 
                  onClick={onDeposit}
                  className="bg-gold-gradient text-black font-medium hover:opacity-90 transition-opacity"
                  size="lg"
                >
                  Mint Your Wealth NFT Now
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

export default Index;
