import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Web3ContextProvider from "../context/Web3Context";
import Head from "next/head";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import "primereact/resources/primereact.css";
import "primeicons/primeicons.css";

export default function App({ Component, pageProps }: AppProps) {
  const value = {
    cssTransition: false,
  };
  return (
    <PrimeReactProvider value={value}>
      <ChakraProvider>
        <Web3ContextProvider>
          <Head>
            <title>Faucet for Etherlink Testnet</title>
            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href="/images/apple-touch-icon.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href="/images/favicon-32x32.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href="/images/favicon-16x16.png"
            />
            <link rel="manifest" href="/images/site.webmanifest" />
          </Head>
          <Component {...pageProps} />
        </Web3ContextProvider>
      </ChakraProvider>
    </PrimeReactProvider>
  );
}
