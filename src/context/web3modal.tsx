'use client'

import { createWeb3Modal, defaultConfig } from '@web3modal/ethers5/react'

// Get projectId from WalletConnect Cloud
const projectId = '5d16e2c0f85cdb58d7408b89cd47bf24'

// Define chains
const mainnet = {
  chainId: 1,
  name: 'Ethereum',
  currency: 'ETH',
  explorerUrl: 'https://etherscan.io',
  rpcUrl: 'https://cloudflare-eth.com',
}

const testnet = {
  chainId: 11155111,
  name: 'Sepolia',
  currency: 'SepoliaETH',
  explorerUrl: 'https://sepolia.etherscan.io/',
  rpcUrl: 'https://eth-sepolia.g.alchemy.com/v2/UEi3OlYcSdlnavJoB9mQWf6f2VQGAeBf',
}

// Metadata for your app
const metadata = {
  name: 'DeFile',
  description: 'Decentralized File Locker',
  url: 'https://defile.vercel.app', // Ensure this matches your domain
  icons: ['https://drive.google.com/uc?export=view&id=15E-Th6oVxc5iqNBNfHnkCCAy_6V858Tl']
}

// Create Ethers configuration with auth options
const ethersConfig = defaultConfig({
  metadata,
  auth:{
    email: true,
    socials:['google','x'],
    showWallets: true, // Show wallets  
    walletFeatures: true // Enable wallet features
  },
  enableEIP6963: true, // Enable EIP6963
  enableInjected: true, // Enable injected wallets
  enableCoinbase: true, // Enable Coinbase wallet
  rpcUrl: '...', // RPC URL for Coinbase SDK
  defaultChainId: 1 // Default chain ID for Coinbase SDK
})

// Create Web3Modal instance
createWeb3Modal({
  ethersConfig,
  chains: [testnet],
  projectId,
  enableOnramp: true,
  enableAnalytics: true // Enable analytics
})

export function Web3Modal({ children }) {
  return children
}

