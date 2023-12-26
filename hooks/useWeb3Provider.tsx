import { BrowserProvider, ethers, JsonRpcSigner } from "ethers";
import { useToast } from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import {
  BLOCK_EXPLORER_URL,
  ETHERLINK_CHAIN_ID,
  ETHERLINK_CHAIN_NAME,
  ETHERLINK_NAME,
  ETHERLINk_SYMBOL,
  ETHERLINK_TESTNET_URL,
} from "../constants/constants";

export interface IWeb3State {
  address: string | null;
  currentChain: number | null;
  signer: typeof JsonRpcSigner | null;
  provider: typeof BrowserProvider | null;
  isAuthenticated: boolean;
}

const useWeb3Provider = () => {
  const initialWeb3State = {
    address: null,
    currentChain: null,
    signer: null,
    provider: null,
    isAuthenticated: false,
  };

  const toast = useToast();
  const [state, setState] = useState<IWeb3State>(initialWeb3State);

  const connectWallet = useCallback(async () => {
    if (state.isAuthenticated) return;

    try {
      const { ethereum } = window;

      if (!ethereum) {
        return toast({
          status: "error",
          position: "top-right",
          title: "Error",
          description: "No ethereum wallet found",
        });
      }
      const provider = new ethers.BrowserProvider(ethereum);

      const accounts: string[] = await provider.send("eth_requestAccounts", []);

      if (accounts.length > 0) {
        const signer = await provider.getSigner();
        const chain = Number(await (await provider.getNetwork()).chainId);

        setState({
          ...state,
          address: accounts[0],
          signer,
          currentChain: chain,
          provider,
          isAuthenticated: true,
        });

        localStorage.setItem("isAuthenticated", "true");
      }
    } catch {}
  }, [state, toast]);

  const disconnect = () => {
    setState(initialWeb3State);
    localStorage.removeItem("isAuthenticated");
  };

  const resetConnectionToCorrectNetwork = () => {
    console.log("0x" + ETHERLINK_CHAIN_ID.toString(16));
    window.ethereum.request({
      method: "wallet_addEthereumChain",
      params: [
        {
          chainId: "0x" + ETHERLINK_CHAIN_ID.toString(16),
          rpcUrls: [ETHERLINK_TESTNET_URL],
          chainName: ETHERLINK_CHAIN_NAME,
          nativeCurrency: {
            name: ETHERLINK_NAME,
            symbol: ETHERLINk_SYMBOL,
            decimals: 18,
          },
          blockExplorerUrls: [BLOCK_EXPLORER_URL],
        },
      ],
    });
  };

  useEffect(() => {
    if (window == null) return;

    if (localStorage.hasOwnProperty("isAuthenticated")) {
      connectWallet();
    }
  }, [connectWallet, state.isAuthenticated]);

  useEffect(() => {
    if (typeof window.ethereum === "undefined") return;

    window.ethereum.on("accountsChanged", (accounts: string[]) => {
      setState({ ...state, address: accounts[0] });
    });

    window.ethereum.on("networkChanged", (network: string) => {
      setState({ ...state, currentChain: Number(network) });
    });

    return () => {
      window.ethereum.removeAllListeners();
    };
  }, [state]);

  return {
    connectWallet,
    disconnect,
    resetConnectionToCorrectNetwork,
    state,
  };
};

export default useWeb3Provider;
