
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { WalletIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useWallet } from '@/contexts/WalletContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface WalletConnectButtonProps {
  variant?: 'default' | 'fancy';
  className?: string;
}

const WalletConnectButton = ({ variant = 'default', className }: WalletConnectButtonProps) => {
  const { isConnected, walletAddress, connectWallet, disconnectWallet, isConnecting } = useWallet();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleConnect = async (type: 'metamask' | 'okx') => {
    await connectWallet(type);
    setIsDropdownOpen(false);
  };

  // Format address for display
  const formatAddress = (address: string) => {
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
  };

  const buttonClass = variant === 'fancy'
    ? "bg-gold-gradient text-black font-medium hover:opacity-90 transition-opacity"
    : "bg-wealth-gold text-black font-medium hover:bg-wealth-gold/90 transition-colors";

  if (isConnected && walletAddress) {
    return (
      <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
        <DropdownMenuTrigger asChild>
          <Button 
            className={cn(buttonClass, className)}
          >
            <WalletIcon className="mr-2 h-4 w-4" />
            {formatAddress(walletAddress)}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={disconnectWallet}>
            Disconnect Wallet
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
      <DropdownMenuTrigger asChild>
        <Button 
          className={cn(buttonClass, className)}
          disabled={isConnecting}
        >
          <WalletIcon className="mr-2 h-4 w-4" />
          {isConnecting ? "Connecting..." : "Connect Wallet"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleConnect('metamask')}>
          <img 
            src="/metamask-logo.svg" 
            alt="MetaMask" 
            className="w-5 h-5 mr-2"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
          Connect with MetaMask
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleConnect('okx')}>
          <img 
            src="/okx-logo.svg" 
            alt="OKX Wallet" 
            className="w-5 h-5 mr-2"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
          Connect with OKX Wallet
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default WalletConnectButton;
