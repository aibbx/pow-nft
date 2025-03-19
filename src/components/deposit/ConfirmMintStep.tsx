
import React from 'react';
import { 
  DialogHeader, 
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";
import NFTCard from "@/components/NFTCard";
import { useWallet } from '@/contexts/WalletContext';
import WalletConnectButton from '@/components/WalletConnectButton';

interface ConfirmMintStepProps {
  amount: number;
  handlePreviousStep: () => void;
  handleMint: () => void;
}

const ConfirmMintStep = ({ amount, handlePreviousStep, handleMint }: ConfirmMintStepProps) => {
  const { isConnected } = useWallet();

  return (
    <>
      <DialogHeader>
        <DialogTitle className="font-display text-2xl">Confirm & Mint</DialogTitle>
        <DialogDescription>
          Review your Proof-of-Wealth NFT before minting.
        </DialogDescription>
      </DialogHeader>
      
      <div className="grid md:grid-cols-2 gap-6 py-4">
        <div className="flex justify-center">
          <NFTCard 
            amount={amount} 
            id="#POW00XX"
            className="max-w-[240px]"
          />
        </div>
        
        <div className="space-y-4">
          <h3 className="font-bold text-lg">Transaction Details</h3>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-wealth-muted">Deposit Amount</span>
              <span className="font-bold">{new Intl.NumberFormat('en-US').format(amount)} USDT</span>
            </div>
            
            <div className="flex justify-between text-sm">
              <span className="text-wealth-muted">Minting Fee</span>
              <span>0.5% ({(amount * 0.005).toFixed(2)} USDT)</span>
            </div>
            
            <div className="flex justify-between text-sm">
              <span className="text-wealth-muted">NFT Value</span>
              <span className="font-bold">{new Intl.NumberFormat('en-US').format(amount)} USDT</span>
            </div>
            
            <div className="border-t border-wealth-gold/20 my-2 pt-2"></div>
            
            <div className="flex justify-between text-sm">
              <span className="text-wealth-muted">Total Cost</span>
              <span className="font-bold">{new Intl.NumberFormat('en-US').format(amount * 1.005)} USDT</span>
            </div>
          </div>
          
          <div className="bg-wealth-gold/5 p-4 rounded-lg flex items-start space-x-3">
            <Wallet className="h-5 w-5 text-wealth-gold shrink-0 mt-0.5" />
            <div className="text-sm">
              <p className="font-medium mb-1">Wallet Connection Required</p>
              <p className="text-wealth-muted">
                Connect your wallet to approve this transaction and mint your NFT.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <DialogFooter className="flex-col sm:flex-row gap-2">
        <Button 
          variant="outline" 
          onClick={handlePreviousStep}
          className="sm:flex-1 border-wealth-gold/30"
        >
          Back
        </Button>
        
        {isConnected ? (
          <Button 
            onClick={handleMint}
            className="sm:flex-1 bg-gold-gradient text-black font-medium hover:opacity-90 transition-opacity"
          >
            Mint NFT
          </Button>
        ) : (
          <WalletConnectButton 
            variant="fancy"
            className="sm:flex-1"
          />
        )}
      </DialogFooter>
    </>
  );
};

export default ConfirmMintStep;
