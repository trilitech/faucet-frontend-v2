import { eUSD_ADDRESS, USDT_ADDRESS, USDC_ADDRESS, BTC_ADDRESS, ETH_ADDRESS } from "../constants/addresses";
import { useMemo, useState } from "react";
import Head from "next/head";
import {
  Box,
  Button,
  HStack,
  Icon,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { IWeb3Context, useWeb3Context } from "../context/Web3Context";
import { MdCheck, MdError } from "react-icons/md";
import etherlinkIcon from "../public/etherlink.svg";
import "primeicons/primeicons.css";
import { BiLogOut } from "react-icons/bi";
import useDrip from "../hooks/useDrip";

import { Button as PrimeReactButton } from 'primereact/button';


const chainId = 128123;

export default function Home() {
  const {
    connectWallet,
    disconnect,
    state: { isAuthenticated, address, currentChain },
  } = useWeb3Context() as IWeb3Context;

  const { drip, loading } = useDrip();

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
    <div>
      <Head>
        <title>Faucet for Etherlink Testnet</title>
      </Head>
      <HStack
        width="full"
        as="header"
        height="80px"
        px={4}
        alignItems="center"
        bg="gray.100"
      >
        <HStack as="nav" width="full" justifyContent="space-between">
          <HStack>
            {!isAuthenticated ? (
              // <PrimeReactButton icon={(options) =>
              //   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...options.iconProps}>
              //       <g id="chevron-down">
              //           <path d="M12,15.25a.74.74,0,0,1-.53-.22l-5-5A.75.75,0,0,1,7.53,9L12,13.44,16.47,9A.75.75,0,0,1,17.53,10l-5,5A.74.74,0,0,1,12,15.25Z"/>
              //       </g>
              //   </svg>}
              //   onClick={connectWallet}
              //   label="Connect wallet" />
              <Button
                onClick={connectWallet}
                variant="solid"
                bg="green.400"
                colorScheme="green"
                gap={2}
                color="white"
              >
                <i className="pi pi-wallet"></i>
                Connect wallet
              </Button>
            ) : (
              <Button
                onClick={disconnect}
                variant="solid"
                bg="red.400"
                colorScheme="red"
                color="white"
                gap={2}
              >
                <Icon as={BiLogOut} />
                Disconnect
              </Button>
            )}
          </HStack>
        </HStack>
      </HStack>
      <PrimeReactButton onClick={() => drip(eUSD_ADDRESS)} label="Get eUSD" raised rounded badge="10"></PrimeReactButton>
      <PrimeReactButton onClick={() => drip(USDT_ADDRESS)} label="Get USDT" raised rounded badge="10"></PrimeReactButton>
      <PrimeReactButton onClick={() => drip(USDC_ADDRESS)} label="Get USDC" raised rounded badge="10"></PrimeReactButton>
      <PrimeReactButton onClick={() => drip(BTC_ADDRESS)} label="Get BTC" raised rounded badge="0.001"></PrimeReactButton>
      <PrimeReactButton onClick={() => drip(ETH_ADDRESS)} label="Get ETH" raised rounded badge="0.01"></PrimeReactButton>

      {/* {isAuthenticated &&
        (correctNetwork ? (
          <VStack ml={4} mt={4} spacing={4} alignItems="flex-start">
            <Box
              onSubmit={handleSubmit}
              as="form"
              display="flex"
              flexDirection="column"
              gap={4}
            >
              <Input
                type="text"
                placeholder="Enter token address..."
                variant="flushed"
                colorScheme="blue"
                name="address"
                value={eUSD_ADDRESS}
                onChange={(e) => setNewMessage(e.target.value)}
              />
              <Button
                type="submit"
                variant="solid"
                bg="green.400"
                colorScheme="green"
                color="white"
                gap={2}
                isLoading={loading}
              >
                <Icon as={MdCheck} />
                Submit
              </Button>
            </Box>
          </VStack>
        ) : (
          <HStack spacing={2} ml={4} mt={4}>
            <Icon as={MdError} color="red.400" />
            <Text color="red.400">Please switch to Etherlink Testnet</Text>
          </HStack>
        ))} */}
    </div>
  );
}