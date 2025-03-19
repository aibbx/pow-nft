
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProfileAvatarsSection from '../components/sections/ProfileAvatarsSection';
import DepositModal from '../components/DepositModal';

const ProfileAvatars = () => {
  const [depositModalOpen, setDepositModalOpen] = useState(false);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <ProfileAvatarsSection onDeposit={() => setDepositModalOpen(true)} />
      </main>
      <Footer />
      
      <DepositModal 
        open={depositModalOpen}
        onOpenChange={setDepositModalOpen}
      />
    </div>
  );
};

export default ProfileAvatars;
