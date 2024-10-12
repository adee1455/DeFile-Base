import { Inter } from "next/font/google";
import "./globals.css";
import { Web3Modal } from '../context/web3modal'
import { Analytics } from "@vercel/analytics/react"
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DeFile",
  description: "Decentralized File Locker",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
    <meta name="google-site-verification" content="GjBpuDyiz1HLW_ZYqWWXRUqMFT7xzX5o3okR9xNs6zU" />
    </head>
      <body>
        <Web3Modal>{children}</Web3Modal>
      </body>
    </html>
  )
}
