import React, { useCallback, useEffect, useState } from 'react';
import { CoinbaseWalletSDK } from '@coinbase/wallet-sdk';
import { CoinbaseWalletLogo } from './CoinbaseWalletLogo';

const buttonStyles = {
  background: 'transparent',
  border: '1px solid transparent',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: 200,
  fontFamily: 'Arial, sans-serif',
  fontWeight: 'bold',
  fontSize: 18,
  backgroundColor: '#0052FF',
  paddingLeft: 15,
  paddingRight: 30,
  borderRadius: 10,
};

export function BlueCreateWalletButton({ handleSuccess, handleError }) {
  const [provider, setProvider] = useState(null);

  useEffect(() => {
    // Check if we're in a browser environment
    if (typeof window !== 'undefined') {
      const sdk = new CoinbaseWalletSDK({
        appName: 'My Dapp',
        appLogoUrl: 'https://example.com/logo.png',
        appChainIds: [84532],
      });
      const web3Provider = sdk.makeWeb3Provider();
      setProvider(web3Provider);
    }
  }, []);

  const createWallet = useCallback(async () => {
    if (!provider) {
      console.error('Provider is not initialized.');
      return;
    }
    
    try {
      const [address] = await provider.request({
        method: 'eth_requestAccounts',
      }) as string[]; // Type assertion added here
      handleSuccess(address);
    } catch (error) {
      handleError(error);
    }
  }, [handleSuccess, handleError, provider]);

  return (
    <button style={buttonStyles} onClick={createWallet}>
      <CoinbaseWalletLogo />
      Create Wallet
    </button>
  );
}
