import { useState } from "react";
import useAggregatorContract from "./useAggregatorContract";
import { calculateReadableBal } from "../helpers";
import { SetStateAction } from "react";

const useFetchBalances = () => {
  const contract = useAggregatorContract();
  const [loadingBalances, setLoading] = useState(false);
  const [userBalances, setUserBalances] = useState<number[]>([]);

  const fetchBalances = async (userAddress: string) => {
    if (!contract) return;
    let finalResult: number[] = [];

    setLoading(true);

    try {
      const transaction = await contract.fetchBalances(userAddress);
      const result = Object.fromEntries(Object.entries(transaction));
      const resultArr = Object.keys(result).map((key) => result[key]);

      resultArr.map((result) => finalResult.push(calculateReadableBal(Number(result))));
      setUserBalances(finalResult);
    } catch {
    } finally {
      setLoading(false);
    }
  };

  return { fetchBalances, loadingBalances, userBalances };
};

export default useFetchBalances;
