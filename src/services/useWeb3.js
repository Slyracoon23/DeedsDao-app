import { useEffect } from "react";
import detectEthereumProvider from '@metamask/detect-provider'; // as recommended here: https://docs.metamask.io/guide/provider-migration.html#table-of-contents

/* 
  // not needed for now

  const network = 'mainnet';
  const infuraId = 'cd709467179a42d08da14769f353922e';
  const rpcUrl = `https://${network}.infura.io/v3/${infuraId}`
*/

export const connect = async (setAddress) => {
  let provider = await detectEthereumProvider(); // if Metamask is installed

  if (!provider || provider !== window.ethereum) { // provider !== window.ethereum means something is overwriting it, perhaps another wallet
    window.alert('Please install Metamask!');
    return;
  }
  
  const accounts = await window.ethereum.enable() // if Metamask is installed *but* locked
    .then(() => window.ethereum.request({ method: "eth_accounts", }));

  if (accounts.length !== 0) {
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