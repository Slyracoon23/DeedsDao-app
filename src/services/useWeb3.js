import { useEffect, useRef, useState, useCallback } from "react";
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

const checkChain = (chainId) => {
  if (chainId && chainId !== '1' && chainId !== '0x1') {
    window.alert(`Wrong network ${chainId}! Please change to Ethereum mainnet.`);
  }
}

export const useWeb3 = () => {
  const isComponentMounted = useRef(true);
  const isConnectCalled = useRef(false);
  const isConnected = useRef(false);
  const [ accounts, setAccounts ] = useState([]);
  const [ chain, setChain ] = useState('');
  const [ currentAddress, setCurrentAddress ] = useState('');
  const [ provider ] = useState(window.ethereum);

  const getAccounts = useCallback(async () => {
    if (!isConnected.current) return [];

    // in case MetaMask is locked, it won't popup unless we're using the deprecated method enable(), no workaround yet found to prevent using it
    await window.ethereum.enable() 
      .then(() => provider.request({ method: "eth_accounts", }))
      .then(setAccounts);

    provider.on("accountsChanged", (accounts) => {
      setAccounts(accounts);
    });
  }, [provider]);

  const getChain = useCallback(async () => {
    const chainId = await provider.request({ method: "net_version", params: [] })
      .then(setChain);

    checkChain(chainId);
    provider.on("chainChanged", (chainId) => {
      checkChain(chainId);
    });
  }, [provider]);

  const connect = useCallback(async () => {
    console.log('connect', isConnectCalled.current);

    if (isConnectCalled.current) return;

    isConnectCalled.current = true;

    // is Metamask installed?
    const detectedProvider = await detectEthereumProvider(); 
  
    // detectedProvider !== window.ethereum means something is overwriting it, perhaps another wallet
    if (!detectedProvider || detectedProvider !== window.ethereum) { 
      window.alert('Please install Metamask!');
      return;
    }

    isConnected.current = true;

    await getAccounts();
    await getChain();
  }, [getAccounts, getChain]);

  useEffect(() => {
    if (accounts.length > 0) {
      setCurrentAddress(accounts[0]);
    }
  }, [accounts]);

  useEffect(() => {
    (async () => {
      if (isComponentMounted.current) {
        connect();
      }
      return () => {
        // cleanup, removes hook dependency if not used anymore aka user leaves that component
        // => shouldn't happen since hook is used in Header (always present)
        isComponentMounted.current = false; 
      };                     
    })();
  }, [connect, isComponentMounted]);

  return { 
    connect, 
    isConnected: isConnected.current, 
    accounts, 
    currentAddress, 
    currentChain: chain 
  };
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