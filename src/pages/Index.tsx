
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

export default Index;
