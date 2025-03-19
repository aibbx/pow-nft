
import { MetaMask } from '@web3-react/metamask';
import { Connector } from '@web3-react/types';

export interface WalletInfo {
  name: string;
  icon: string;
  connector: Connector;
}

const metamaskConnector = new MetaMask();

// OKX Wallet detection functions
const isOKXWalletInstalled = (): boolean => {
  return window.okxwallet !== undefined;
};

export const connectMetaMask = async (): Promise<void> => {
  try {
    await metamaskConnector.activate();
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
      if (metamaskConnector.provider) {
        const accounts = await metamaskConnector.provider.request({ method: 'eth_accounts' });
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
      connector: metamaskConnector,
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

// For TypeScript
declare global {
  interface Window {
    ethereum?: any;
    okxwallet?: any;
  }
}
