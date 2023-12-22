import { useEffect, useMemo, useState } from "react";
import { IWeb3Context, useWeb3Context } from "../context/Web3Context";
import useDrip from "../hooks/useDrip";
import useFetchBalances from "../hooks/useFetchBalances";
import Navbar from "../components/landing/Navbar";
import FaucetTable from "../components/landing/FaucetTable";
import Footer from "../components/landing/Footer";
import LoadingModal from "../components/landing/LoadingModal";

const chainId = 128123;

export default function Home() {
  const {
    connectWallet,
    disconnect,
    state: { isAuthenticated, address, currentChain },
  } = useWeb3Context() as IWeb3Context;

  const { fetchBalances, loadingBalances, userBalances } = useFetchBalances();
  const [reloadBalance, setReloadBalance] = useState(false);
  const [selectedToken, setSelectedToken] = useState("");
  const { drip, loading } = useDrip(address, setReloadBalance);

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

      if (reloadBalance) {
        // console.log({ reloadBalance });
        fetchBalances(address);
        setReloadBalance(false);
      }
    }
    return () => (mounted = false);
  }, [address, reloadBalance]);

  return (
    <div className="dark:bg-etherlink-bg min-h-screen">
      <div className="container max-w-7xl mx-auto">
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
          userBalances={userBalances}
          setSelectedToken={setSelectedToken}
        />
        <Footer />
        <LoadingModal selectedToken={selectedToken} loading={loading} />
      </div>
    </div>
  );
}
