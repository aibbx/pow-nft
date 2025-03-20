
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { toast } from 'sonner';
import { connectOKXWallet, getAccount } from '@/utils/walletUtils';

interface WalletContextType {
  isConnected: boolean;
  walletAddress: string | null;
  isConnecting: boolean;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const WalletProvider = ({ children }: { children: ReactNode }) => {
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState<boolean>(false);

  // Check for existing connection on mount
  useEffect(() => {
    const checkConnection = async () => {
      const account = await getAccount();
      if (account) {
        setWalletAddress(account);
        setIsConnected(true);
      }
    };
    
    checkConnection();
  }, []);

  const connectWallet = async () => {
    setIsConnecting(true);
    try {
      await connectOKXWallet();
      const account = await getAccount();
      if (account) {
        setWalletAddress(account);
        setIsConnected(true);
        toast.success('Successfully connected to OKX Wallet');
      }
    } catch (error) {
      console.error('Wallet connection error:', error);
      toast.error(`Failed to connect: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsConnecting(false);
    }
  };

  const disconnectWallet = () => {
    setWalletAddress(null);
    setIsConnected(false);
    toast.info('Wallet disconnected');
  };

  return (
    <WalletContext.Provider
      value={{
        isConnected,
        walletAddress,
        isConnecting,
        connectWallet,
        disconnectWallet,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
};
