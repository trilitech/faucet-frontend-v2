import { useEffect, useMemo, useState } from "react";
import { IWeb3Context, useWeb3Context } from "../context/Web3Context";
import useDrip from "../hooks/useDrip";
import useFetchBalances from "../hooks/useFetchBalances";
import Navbar from "../components/landing/Navbar";
import FaucetTable from "../components/landing/FaucetTable";
import Footer from "../components/landing/Footer";

const chainId = 128123;

export default function Home() {
  const {
    connectWallet,
    disconnect,
    state: { isAuthenticated, address, currentChain },
  } = useWeb3Context() as IWeb3Context;

  const { drip, loading } = useDrip();
  const { fetchBalances, loadingBalances, userBalances } = useFetchBalances();

  const [newMessage, setNewMessage] = useState<string>("");

  const correctNetwork = useMemo(() => {
    return currentChain === chainId;
  }, [currentChain]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (newMessage.trim() === "") return;

    drip(newMessage);
  };

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      if (address) {
        fetchBalances(address);
      }
    }
    return () => (mounted = false);
  }, [address, fetchBalances]);

  return (
    <div className="dark:bg-etherlink-bg min-h-screen">
      <div className="container max-w-7xl mx-auto">
        <Navbar
          walletAddress={address}
          isConnected={isAuthenticated}
          connectWallet={connectWallet}
          disconnectWallet={disconnect}
        />

        <FaucetTable loadingDrip={loading} drip={drip} loadingBalances={loadingBalances} userBalances={userBalances} />
        <div className="mt-5">
          <Footer />
        </div>
      </div>
      {/* END */}
    </div>
  );
}
