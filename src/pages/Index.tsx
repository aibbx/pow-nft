
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/hero';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import NFTCollectionSection from '@/components/sections/NFTCollectionSection';
import CTASection from '@/components/sections/CTASection';
import DepositModal from '@/components/DepositModal';

const Index = () => {
  const [depositModalOpen, setDepositModalOpen] = useState(false);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onDeposit={() => setDepositModalOpen(true)} />
        
        {/* About Section - We'll use the hero section as the about section */}
        <div id="about">
          {/* This empty div serves as an anchor for the about section */}
        </div>
        
        {/* Features Section */}
        <div id="features">
          <Features />
        </div>
        
        {/* How It Works Section */}
        <div id="how-it-works">
          <HowItWorksSection />
        </div>
        
        {/* NFT Collection Section */}
        <div id="nft-collection">
          <NFTCollectionSection onDeposit={() => setDepositModalOpen(true)} />
        </div>
        
        {/* CTA Section */}
        <CTASection onDeposit={() => setDepositModalOpen(true)} />
      </main>
      
      <Footer />
      
      {/* Deposit Modal */}
      <DepositModal open={depositModalOpen} onOpenChange={setDepositModalOpen} />
    </div>
  );
};

export default Index;
