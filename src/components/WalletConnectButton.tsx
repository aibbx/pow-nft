
import React from 'react';
import { Button } from "@/components/ui/button";
import { WalletIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useWallet } from '@/contexts/WalletContext';

interface WalletConnectButtonProps {
  variant?: 'default' | 'fancy';
  className?: string;
}

const WalletConnectButton = ({ variant = 'default', className }: WalletConnectButtonProps) => {
  const { isConnected, walletAddress, connectWallet, disconnectWallet, isConnecting } = useWallet();

  // Format address for display
  const formatAddress = (address: string) => {
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
  };

  const buttonClass = variant === 'fancy'
    ? "bg-gold-gradient text-black font-medium hover:opacity-90 transition-opacity"
    : "bg-wealth-gold text-black font-medium hover:bg-wealth-gold/90 transition-colors";

  if (isConnected && walletAddress) {
    return (
      <Button 
        className={cn(buttonClass, className)}
        onClick={disconnectWallet}
      >
        <WalletIcon className="mr-2 h-4 w-4" />
        {formatAddress(walletAddress)}
      </Button>
    );
  }

  return (
    <Button 
      className={cn(buttonClass, className)}
      disabled={isConnecting}
      onClick={connectWallet}
    >
      <WalletIcon className="mr-2 h-4 w-4" />
      {isConnecting ? "Connecting..." : "Connect Wallet"}
    </Button>
  );
};

export default WalletConnectButton;
