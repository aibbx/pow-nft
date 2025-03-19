
import React from 'react';
import { 
  DialogHeader, 
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { ArrowRight, AlertCircle } from "lucide-react";

interface DepositAmountStepProps {
  amount: number;
  setAmount: (amount: number) => void;
  handlePredefinedAmount: (value: number) => void;
  handleNextStep: () => void;
  predefinedAmounts: Array<{ value: number; label: string }>;
}

const DepositAmountStep = ({ 
  amount, 
  setAmount, 
  handlePredefinedAmount, 
  handleNextStep,
  predefinedAmounts
}: DepositAmountStepProps) => {
  const handleAmountChange = (value: number[]) => {
    setAmount(value[0]);
  };
  
  return (
    <>
      <DialogHeader>
        <DialogTitle className="font-display text-2xl">Deposit USDT</DialogTitle>
        <DialogDescription>
          Choose the amount of USDT you want to deposit to mint your Proof-of-Wealth NFT.
        </DialogDescription>
      </DialogHeader>
      
      <div className="space-y-6 py-4">
        <div className="space-y-2">
          <Label htmlFor="amount">Amount (USDT)</Label>
          <div className="relative">
            <Input
              id="amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="pr-16 font-medium text-lg"
              min={10000}
              max={100000000}
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-medium text-wealth-muted">
              USDT
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <Label>Quick Select</Label>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
            {predefinedAmounts.map((option) => (
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
        
        <div className="space-y-2 pt-2">
          <Label>Adjust Amount</Label>
          <Slider
            defaultValue={[amount]}
            max={100000000}
            min={10000}
            step={10000}
            onValueChange={handleAmountChange}
          />
          <div className="flex justify-between text-xs text-wealth-muted">
            <span>10K USDT</span>
            <span>100M USDT</span>
          </div>
        </div>
        
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
  );
};

export default DepositAmountStep;
