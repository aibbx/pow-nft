
import { MetaMask } from '@web3-react/metamask';
import { Connector } from '@web3-react/types';
import { initializeConnector } from '@web3-react/core';

export interface WalletInfo {
  name: string;
  icon: string;
  connector: Connector;
}

// Initialize MetaMask connector properly with the required argument
const [metaMaskConnector] = initializeConnector<MetaMask>((actions) => new MetaMask({ actions }));

// OKX Wallet detection functions
const isOKXWalletInstalled = (): boolean => {
  return window.okxwallet !== undefined;
};

export const connectMetaMask = async (): Promise<void> => {
  try {
    await metaMaskConnector.activate();
    console.log('Connected to MetaMask');
  } catch (error) {
    console.error('Error connecting to MetaMask:', error);
    throw error;
  }
};

export const connectOKXWallet = async (): Promise<void> => {
  try {
    if (!isOKXWalletInstalled()) {
      throw new Error('OKX Wallet is not installed');
    }
    
    // Connect to OKX Wallet (uses EIP-1193 interface)
    await window.okxwallet.request({ method: 'eth_requestAccounts' });
    console.log('Connected to OKX Wallet');
  } catch (error) {
    console.error('Error connecting to OKX Wallet:', error);
    throw error;
  }
};

export const getAccount = async (wallet: 'metamask' | 'okx'): Promise<string | null> => {
  try {
    if (wallet === 'metamask') {
      if (metaMaskConnector.provider) {
        const accounts = await metaMaskConnector.provider.request({ method: 'eth_accounts' });
        return accounts[0] || null;
      }
    } else if (wallet === 'okx') {
      if (isOKXWalletInstalled()) {
        const accounts = await window.okxwallet.request({ method: 'eth_accounts' });
        return accounts[0] || null;
      }
    }
    return null;
  } catch (error) {
    console.error('Error getting account:', error);
    return null;
  }
};

export const getSupportedWallets = (): WalletInfo[] => {
  const wallets: WalletInfo[] = [
    {
      name: 'MetaMask',
      icon: 'metamask-logo',
      connector: metaMaskConnector,
    }
  ];
  
  // Add OKX wallet if detected
  if (typeof window !== 'undefined' && window.okxwallet) {
    wallets.push({
      name: 'OKX Wallet',
      icon: 'okx-logo',
      connector: {} as Connector, // OKX uses window.okxwallet directly
    });
  }
  
  return wallets;
};

// Define proper typings for Ethereum provider
interface EthereumProvider {
  request: (args: {method: string, params?: any[]}) => Promise<any>;
  on: (eventName: string, handler: (result: any) => void) => void;
  removeListener: (eventName: string, handler: (result: any) => void) => void;
}

// Combine the interface declarations into a single global declaration
declare global {
  interface Window {
    ethereum?: EthereumProvider;
    okxwallet?: EthereumProvider;
  }
}
