import { CoinbaseWalletSDK } from '@coinbase/wallet-sdk'
 
export const sdk = new CoinbaseWalletSDK({
  appName: 'Defile',
  appChainIds: [8453]
});