import {sdk} from "./setup";
 
// Create provider
const provider = sdk.makeWeb3Provider({options: 'smartWalletOnly'});
// Use provider
const addresses = provider.request({method: 'eth_requestAccounts'});