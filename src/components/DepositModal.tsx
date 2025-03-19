
import React, { useState } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { ArrowRight, AlertCircle, Wallet } from "lucide-react";
import { NFTCard } from "@/components/NFTCard";

interface DepositModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const PREDEFINED_AMOUNTS = [
  { value: 10000, label: "10K" },
  { value: 50000, label: "50K" },
  { value: 100000, label: "100K" },
  { value: 500000, label: "500K" },
  { value: 1000000, label: "1M" },
];

const DepositModal = ({ open, onOpenChange }: DepositModalProps) => {
  const [amount, setAmount] = useState(100000);
  const [step, setStep] = useState(1);
  
  const handleAmountChange = (value: number[]) => {
    setAmount(value[0]);
  };
  
  const handlePredefinedAmount = (value: number) => {
    setAmount(value);
  };
  
  const handleNextStep = () => {
    setStep(2);
  };
  
  const handlePreviousStep = () => {
    setStep(1);
  };
  
  const handleMint = () => {
    // Here would be the logic to interact with the smart contract
    console.log(`Minting NFT for ${amount} USDT`);
    onOpenChange(false);
    // Reset state when modal closes
    setTimeout(() => {
      setStep(1);
      setAmount(100000);
    }, 300);
  };
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md md:max-w-xl">
        {step === 1 && (
          <>
            <DialogHeader>
              <DialogTitle className="font-display text-2xl">Deposit USDT</DialogTitle>
              <DialogDescription>
                Choose the amount of USDT you want to deposit to mint your Proof-of-Wealth NFT.
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-6 py-4">
              {/* Amount input */}
              <div className="space-y-2">
                <Label htmlFor="amount">Amount (USDT)</Label>
                <div className="relative">
                  <Input
                    id="amount"
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="pr-16 font-medium text-lg"
                    min={1000}
                    max={10000000}
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-medium text-wealth-muted">
                    USDT
                  </div>
                </div>
              </div>
              
              {/* Quick selection buttons */}
              <div className="space-y-2">
                <Label>Quick Select</Label>
                <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
                  {PREDEFINED_AMOUNTS.map((option) => (
                    <Button
                      key={option.value}
                      type="button"
                      variant={amount === option.value ? "default" : "outline"}
                      className={amount === option.value ? "bg-gold-gradient text-black border-0" : "border-wealth-gold/30"}
                      onClick={() => handlePredefinedAmount(option.value)}
                    >
                      {option.label}
                    </Button>
                  ))}
                </div>
              </div>
              
              {/* Slider */}
              <div className="space-y-2 pt-2">
                <Label>Adjust Amount</Label>
                <Slider
                  defaultValue={[amount]}
                  max={1000000}
                  min={1000}
                  step={1000}
                  onValueChange={handleAmountChange}
                />
                <div className="flex justify-between text-xs text-wealth-muted">
                  <span>1K USDT</span>
                  <span>1M USDT</span>
                </div>
              </div>
              
              {/* Info box */}
              <div className="bg-wealth-gold/5 p-4 rounded-lg flex items-start space-x-3">
                <AlertCircle className="h-5 w-5 text-wealth-gold shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium mb-1">Your deposit will be used to mint an NFT</p>
                  <p className="text-wealth-muted">
                    Your USDT will be securely stored and can be withdrawn at any time by burning your NFT.
                  </p>
                </div>
              </div>
            </div>
            
            <DialogFooter>
              <Button 
                onClick={handleNextStep}
                className="w-full bg-gold-gradient text-black font-medium hover:opacity-90 transition-opacity"
              >
                Continue
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </DialogFooter>
          </>
        )}
        
        {step === 2 && (
          <>
            <DialogHeader>
              <DialogTitle className="font-display text-2xl">Confirm & Mint</DialogTitle>
              <DialogDescription>
                Review your Proof-of-Wealth NFT before minting.
              </DialogDescription>
            </DialogHeader>
            
            <div className="grid md:grid-cols-2 gap-6 py-4">
              {/* NFT preview */}
              <div className="flex justify-center">
                <NFTCard 
                  amount={amount} 
                  id="#POW00XX"
                  className="max-w-[240px]"
                />
              </div>
              
              {/* Details */}
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
                
                {/* Info box */}
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
              <Button 
                onClick={handleMint}
                className="sm:flex-1 bg-gold-gradient text-black font-medium hover:opacity-90 transition-opacity"
              >
                Mint NFT
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default DepositModal;
