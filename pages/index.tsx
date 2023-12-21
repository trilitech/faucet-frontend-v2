import {
  eUSD_ADDRESS,
  USDT_ADDRESS,
  USDC_ADDRESS,
  BTC_ADDRESS,
  ETH_ADDRESS,
} from "../constants/addresses";
import { useMemo, useState } from "react";
import { Button, HStack, Icon } from "@chakra-ui/react";
import { IWeb3Context, useWeb3Context } from "../context/Web3Context";
import useDrip from "../hooks/useDrip";
import useFetchBalances from "../hooks/useFetchBalances";
import "primeicons/primeicons.css";
import { BiLogOut } from "react-icons/bi";
import Navbar from "../components/landing/Navbar";
import FaucetTable from "../components/landing/FaucetTable";
import Footer from "../components/landing/Footer";

import { Button as PrimeReactButton } from "primereact/button";

const chainId = 128123;

export default function Home() {
  const {
    connectWallet,
    disconnect,
    state: { isAuthenticated, address, currentChain },
  } = useWeb3Context() as IWeb3Context;

  const { drip, loading } = useDrip();
  const { fetchBalances, loadingBalances } = useFetchBalances();

  const [newMessage, setNewMessage] = useState<string>("");

  const correctNetwork = useMemo(() => {
    return currentChain === chainId;
  }, [currentChain]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (newMessage.trim() === "") return;

    drip(newMessage);
  };

  return (
    <div className="dark:bg-etherlink-bg min-h-screen">
      {/* START */}
      <div className="container max-w-7xl mx-auto">
        {/* START */}

        <Navbar
          walletAddress={address}
          isConnected={isAuthenticated}
          connectWallet={connectWallet}
          disconnectWallet={disconnect}
        />
        <FaucetTable
          loadingDrip={loading}
          drip={drip}
          loadingBalances={loadingBalances}
          fetchBalances={fetchBalances}
        />
        <div className="mt-5">
          <Footer />
        </div>
      </div>
      {/* END */}
    </div>
  );
}
