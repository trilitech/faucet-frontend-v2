import { eUSD_ADDRESS } from "../constants/addresses";
import { useMemo, useState } from "react";
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
import useDrip from "../hooks/useDrip";
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
    <div className="dark:bg-etherlink-bg min-h-screen">
      <div className="container max-w-7xl mx-auto">
        {/* START */}

        <Navbar
          walletAddress={address}
          isConnected={isAuthenticated}
          connectWallet={connectWallet}
          disconnectWallet={disconnect}
        />
        <FaucetTable loadingDrip={loading} drip={drip} />

        <div className="mt-5">
          <Footer />
        </div>
        {/* END */}

        <Button onClick={() => drip(eUSD_ADDRESS)}>Drip</Button>
        {isAuthenticated &&
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
          ))}
      </div>
    </div>
  );
}
