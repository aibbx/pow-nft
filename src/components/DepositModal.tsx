
import React, { useState } from 'react';
import { 
  Dialog, 
  DialogContent
} from "@/components/ui/dialog";
import DepositAmountStep from "@/components/deposit/DepositAmountStep";
import ConfirmMintStep from "@/components/deposit/ConfirmMintStep";

interface DepositModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const PREDEFINED_AMOUNTS = [
  { value: 10000, label: "10K" },
  { value: 100000, label: "100K" },
  { value: 1000000, label: "1M" },
  { value: 10000000, label: "10M" },
  { value: 100000000, label: "100M" },
];

const DepositModal = ({ open, onOpenChange }: DepositModalProps) => {
  const [amount, setAmount] = useState(10000);
  const [step, setStep] = useState(1);
  
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
    console.log(`Minting NFT for ${amount} USDT`);
    onOpenChange(false);
    setTimeout(() => {
      setStep(1);
      setAmount(10000);
    }, 300);
  };
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md md:max-w-xl">
        {step === 1 && (
          <DepositAmountStep 
            amount={amount}
            setAmount={setAmount}
            handlePredefinedAmount={handlePredefinedAmount}
            handleNextStep={handleNextStep}
            predefinedAmounts={PREDEFINED_AMOUNTS}
          />
        )}
        
        {step === 2 && (
          <ConfirmMintStep 
            amount={amount}
            handlePreviousStep={handlePreviousStep}
            handleMint={handleMint}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default DepositModal;
