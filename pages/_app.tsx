
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Web3ContextProvider from "../context/Web3Context";
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import "primereact/resources/themes/arya-green/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";

export default function App({ Component, pageProps }: AppProps) {
  const value = {
    cssTransition: false,
  };
  
  return (
    <PrimeReactProvider value={value}>
      <ChakraProvider>
        <Web3ContextProvider>
          <Component {...pageProps} />
        </Web3ContextProvider>
      </ChakraProvider>
    </PrimeReactProvider>
  );
}