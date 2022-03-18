import { useEffect } from "react";
import detectEthereumProvider from '@metamask/detect-provider'; // as recommended here: https://docs.metamask.io/guide/provider-migration.html#table-of-contents
import BigNumber from 'bignumber.js';
import { Contract } from '@ethersproject/contracts';
import { WeightedPoolFactory__factory } from '@balancer-labs/typechain';
import { ethers } from 'ethers';
/* 
  // not needed for now

  const network = 'mainnet';
  const infuraId = 'cd709467179a42d08da14769f353922e';
  const rpcUrl = `https://${network}.infura.io/v3/${infuraId}`
*/
function handleAccountsChanged(accounts) {
  // console.log('Calling HandleChanged')
  
  // if (accounts.length === 0) {
  //     console.log('Please connect to MetaMask.');
  //     $('#enableMetamask').html('Connect with Metamask')
  // } else if (accounts[0] !== currentAccount) {
  //     currentAccount = accounts[0];
  //     $('#enableMetamask').html(currentAccount)
  //     $('#status').html('')
      
  //     if(currentAccount != null) {
  //         // Set the button label
  //         $('#enableMetamask').html(currentAccount)
  //     }
  // }
  // console.log('WalletAddress in HandleAccountChanged ='+walletAddress)
}

const Web3 = require('web3');

export const connect = async (setAddress) => {
  let provider = await detectEthereumProvider(); // if Metamask is installed

  if (!provider || provider !== window.ethereum) { // provider !== window.ethereum means something is overwriting it, perhaps another wallet
    window.alert('Please install Metamask!');
    return;
  }
  
  const accounts = await window.ethereum.enable() // if Metamask is installed *but* locked
    .then(() => window.ethereum.request({ method: "eth_accounts", }))
    // .then(handleAccountsChanged)
    // .catch((err) => {
    //   if (err.code === 4001) {
    //       // EIP-1193 userRejectedRequest error
    //       // If this happens, the user rejected the connection request.
    //       console.log('Please connect to MetaMask.');
    //   } else {
    //       console.error(err);
    //   }
    // });

  if (accounts.length !== 0) {
    window.web3 = new Web3(window.ethereum);
    setAddress(accounts[0]);
  } else {
    window.alert('An account on Metamask is required!');
  }
}

export const useWeb3 = (ref, setAddress) => {
  
  useEffect(() => {
    (async () => {
      if (ref.current) {
        await connect(setAddress);
      }
      return () => {
        ref.current = false; // cleanup, removes hook dependency once/if user leaves component
      };                     // => shouldn't happen since hook is used in Header
    })();
  }, [ref, setAddress]);

  return { connect };
};

export const createWeightedPool = async (
  name,
  symbol,
  swapFee,
  tokens,
  owner
) => {
  console.log('tokens',
    tokens,
    );
  
  if (!owner.length) return Promise.reject('No pool owner specified');

  const weightedPoolFactoryAddress = "0x8E9aa87E45e92bad84D5F8DD1bff34Fb92637dE9" // KOVAN NETWORK weightedPoolFactory Address  
debugger
  const tokenAddresses = tokens.map((token) => {
      return token.tokenAddress;
  });

  const seedTokens = [
    new BigNumber(50).multipliedBy(1e16).toString(),
    new BigNumber(50).multipliedBy(1e16).toString()
  ];

  const params = [
      name,
      symbol,
      tokenAddresses,
      seedTokens,
      new BigNumber(0.5e18).toString(),
      owner
  ];

  return Transaction(
      weightedPoolFactoryAddress,
      WeightedPoolFactory__factory.abi,
      'create',
      params
  );
}

export const Transaction = async (
  contractAddress,
  abi,
  action,
  params
) => {
  console.log('ing transaction');
  console.log('Contract', contractAddress);
  console.log('Action', `"${action}"`);
  console.log('Params', params);
  
  const provider = new ethers.providers.Web3Provider(window.ethereum);

    console.log('provider: ', provider);
    const signer = provider.getSigner();
    console.log('signer: ', signer);

  const contract = new Contract(contractAddress, abi, provider);
  const contractWithSigner = contract.connect(signer);

  try {

   // [REMOVED] Gas fee estimation
   
    // CHECK  transaction here
    return await contractWithSigner[action](...params);
  } catch (e) {
    const error = e;

    // [REMOVED] Error handeling 

    return Promise.reject(error);
  }
};