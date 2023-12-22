import { useEffect, useMemo, useState } from "react";
import { IWeb3Context, useWeb3Context } from "../context/Web3Context";
import useDrip from "../hooks/useDrip";
import useFetchBalances from "../hooks/useFetchBalances";
import Navbar from "../components/landing/Navbar";
import FaucetTable from "../components/landing/FaucetTable";
import Footer from "../components/landing/Footer";
import LoadingModal from "../components/landing/LoadingModal";
import NoWalletConnected from "../components/landing/NoWalletConnected";

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

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      if (address) {
        fetchBalances(address);
      }

      if (reloadBalance) {
        fetchBalances(address);
        setReloadBalance(false);
      }
    }
    return () => (mounted = false);
  }, [address, reloadBalance]);

  return (
    <div className="dark:bg-etherlink-bg min-h-screen mb-auto flex flex-col justify-between">
      <div className="container max-w-7xl mx-auto">
        <Navbar
          walletAddress={address}
          isConnected={isAuthenticated}
          connectWallet={connectWallet}
          disconnectWallet={disconnect}
        />
        {isAuthenticated ? (
          <FaucetTable
            loadingDrip={loading}
            drip={drip}
            loadingBalances={loadingBalances}
            userBalances={userBalances}
            setSelectedToken={setSelectedToken}
          />
        ) : (
          <NoWalletConnected />
        )}
        <LoadingModal selectedToken={selectedToken} loading={loading} />
      </div>
      <Footer />
    </div>
  );
}
