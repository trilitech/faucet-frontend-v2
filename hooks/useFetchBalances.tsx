import { useState } from "react";
import useAggregatorContract from "./useAggregatorContract";

const useFetchBalances = () => {
  const contract = useAggregatorContract();
  const [loadingBalances, setLoading] = useState(false);

  const fetchBalances = async (userAddress: string) => {
    if (!contract) return;

    setLoading(true);

    try {
      const transaction = await contract.fetchBalances(userAddress);

      await transaction.wait();
    } catch {
    } finally {
      setLoading(false);
    }
  };

  return { fetchBalances, loadingBalances };
};

export default useFetchBalances;