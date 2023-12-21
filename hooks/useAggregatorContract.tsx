import { Contract } from "ethers";
import { useMemo } from "react";
import { IWeb3Context, useWeb3Context } from "../context/Web3Context";
import ABI from "../constants/ABIs/aggregator/aggregatorContractAbi.json";
import { AGGREGATOR_ADDRESS } from "../constants/addresses";

const useFaucetContract = () => {
  const { state } = useWeb3Context() as IWeb3Context;

  return useMemo(
    () => state.signer && new Contract(AGGREGATOR_ADDRESS, ABI, state.signer),
    [state.signer]
  );
};

export default useFaucetContract;