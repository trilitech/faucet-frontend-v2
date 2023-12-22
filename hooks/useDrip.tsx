import { useState } from "react";
import useFaucetContract from "./useFaucetContract";
import useFetchBalances from "./useFetchBalances";

const useDrip = (address, setReloadBalance) => {
  const contract = useFaucetContract();
  const [loading, setLoading] = useState(false);
  const { fetchBalances } = useFetchBalances();

  const drip = async (tokenAddress: string) => {
    if (!contract) return;

    setLoading(true);

    try {
      const transaction = await contract.requestTokens(tokenAddress);

      await transaction.wait();
      fetchBalances(address);
      setReloadBalance(true);
      // console.log("reloading balances....", address);
    } catch {
    } finally {
      fetchBalances(address);
      setLoading(false);
    }
  };

  return { drip, loading };
};

export default useDrip;
