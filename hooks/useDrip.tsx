import { useState } from "react";
import useFaucetContract from "./useFaucetContract";

const useDrip = () => {
  const contract = useFaucetContract();
  const [loading, setLoading] = useState(false);

  const drip = async (tokenAddress: string) => {
    if (!contract) return;

    setLoading(true);

    try {
      const transaction = await contract.requestTokens(tokenAddress);

      await transaction.wait();
    } catch {
    } finally {
      setLoading(false);
    }
  };

  return { drip, loading };
};

export default useDrip;