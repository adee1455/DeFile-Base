'use client'

import { createWeb3Modal, defaultConfig } from '@web3modal/ethers5/react'

// Get projectId from WalletConnect Cloud
const projectId = '5d16e2c0f85cdb58d7408b89cd47bf24'

// Define chains
const mainnet = {
  chainId: 8453,
  name: 'Base',
  currency: 'ETH',
  explorerUrl: 'https://basescan.org',
  rpcUrl: 'https://mainnet.base.org',
}

const testnet = {
  chainId: 84532,
  name: 'Base Sepolia Testnet',
  currency: 'ETH',
  explorerUrl: 'https://sepolia.basescan.org',
  rpcUrl: 'https://sepolia.base.org',
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
  chains: [mainnet],
  projectId,
  enableOnramp: true,
  enableAnalytics: true // Enable analytics
})

export function Web3Modal({ children }) {
  return children
}

