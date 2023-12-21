import { useState } from "react";
import useAggregatorContract from "./useAggregatorContract";

const useFetchBalances = () => {
  const contract = useAggregatorContract();
  const [loadingBalances, setLoading] = useState(false);
  const [userBalances, setUserBalances] = useState(null);

  const fetchBalances = async (userAddress: string) => {
    if (!contract) return;
    let finalResult = "";

    setLoading(true);

    try {
      const transaction = await contract.fetchBalances(userAddress);

      finalResult = await transaction.wait();
    } catch {
    } finally {
      console.log(finalResult);
      setLoading(false);
    }
  };

  return { fetchBalances, loadingBalances };
};

export default useFetchBalances;
