
// Define proper typings for Ethereum provider
interface EthereumProvider {
  request: (args: {method: string, params?: any[]}) => Promise<any>;
  on: (eventName: string, handler: (result: any) => void) => void;
  removeListener: (eventName: string, handler: (result: any) => void) => void;
}

// Properly extend the Window interface
interface WindowWithOKXWallet extends Window {
  okxwallet?: EthereumProvider;
}

// OKX Wallet detection functions
const isOKXWalletInstalled = (): boolean => {
  return (window as WindowWithOKXWallet).okxwallet !== undefined;
};

export const connectOKXWallet = async (): Promise<void> => {
  try {
    if (!isOKXWalletInstalled()) {
      throw new Error('OKX Wallet is not installed');
    }
    
    // Connect to OKX Wallet (uses EIP-1193 interface)
    await (window as WindowWithOKXWallet).okxwallet!.request({ method: 'eth_requestAccounts' });
    console.log('Connected to OKX Wallet');
  } catch (error) {
    console.error('Error connecting to OKX Wallet:', error);
    throw error;
  }
};

export const getAccount = async (): Promise<string | null> => {
  try {
    if (isOKXWalletInstalled()) {
      const accounts = await (window as WindowWithOKXWallet).okxwallet!.request({ method: 'eth_accounts' });
      return accounts[0] || null;
    }
    return null;
  } catch (error) {
    console.error('Error getting account:', error);
    return null;
  }
};

// Extend the Window interface globally using declaration merging
declare global {
  interface Window {
    okxwallet?: EthereumProvider;
  }
}
