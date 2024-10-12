import { CoinbaseWalletSDK } from '@coinbase/wallet-sdk'
 
const sdk = new CoinbaseWalletSDK({
  appName: 'Defile',
  appChainIds: [8453]
});