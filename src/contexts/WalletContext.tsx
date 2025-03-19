
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { toast } from 'sonner';
import { connectMetaMask, connectOKXWallet, getAccount } from '@/utils/walletUtils';

type WalletType = 'metamask' | 'okx' | null;

interface WalletContextType {
  isConnected: boolean;
  walletAddress: string | null;
  walletType: WalletType;
  isConnecting: boolean;
  connectWallet: (type: 'metamask' | 'okx') => Promise<void>;
  disconnectWallet: () => void;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const WalletProvider = ({ children }: { children: ReactNode }) => {
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [walletType, setWalletType] = useState<WalletType>(null);
  const [isConnecting, setIsConnecting] = useState<boolean>(false);

  // Check for existing connection on mount
  useEffect(() => {
    const checkConnection = async () => {
      // Try MetaMask first
      const metamaskAccount = await getAccount('metamask');
      if (metamaskAccount) {
        setWalletAddress(metamaskAccount);
        setWalletType('metamask');
        setIsConnected(true);
        return;
      }
      
      // Then try OKX
      const okxAccount = await getAccount('okx');
      if (okxAccount) {
        setWalletAddress(okxAccount);
        setWalletType('okx');
        setIsConnected(true);
      }
    };
    
    checkConnection();
  }, []);

  const connectWallet = async (type: 'metamask' | 'okx') => {
    setIsConnecting(true);
    try {
      if (type === 'metamask') {
        await connectMetaMask();
        const account = await getAccount('metamask');
        if (account) {
          setWalletAddress(account);
          setWalletType('metamask');
          setIsConnected(true);
          toast.success('Successfully connected to MetaMask');
        }
      } else if (type === 'okx') {
        await connectOKXWallet();
        const account = await getAccount('okx');
        if (account) {
          setWalletAddress(account);
          setWalletType('okx');
          setIsConnected(true);
          toast.success('Successfully connected to OKX Wallet');
        }
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
    setWalletType(null);
    setIsConnected(false);
    toast.info('Wallet disconnected');
  };

  return (
    <WalletContext.Provider
      value={{
        isConnected,
        walletAddress,
        walletType,
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
