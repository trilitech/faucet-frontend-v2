import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/images/logo.webp";
import { shortenAddress } from "../../helpers";
import RightSidedMenu from "./RightSidedMenu";

const Menu = ({
  isConnected = true,
  walletAddress,
  connectWallet,
  disconnectWallet,
  isCorrectNetwork,
  resetConnectionToCorrectNetwork,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showWalletConnected, setWalletConnected] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setWalletConnected(!showWalletConnected);
  };

  return (
    <nav className="dark:bg-etherlink-bg bg-white ">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex md:grid md:grid-cols-3 items-center justify-between h-16 pt-8">
          <div className="flex items-center space-x-2 text-3xl font-medium text-gray-800 dark:text-white">
            <Link href={"/"}>
              <Image priority={true} src={Logo} alt="Etherlink logo" width={"32"} height={"30"} />
            </Link>
            <span className="dark: text-white font-medium">Etherlink</span>
          </div>
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-2">
              <button className="dark:text-gray-200 text-gray-900 font-normal hover:text-midGreen transition duration-150 ease-out hover:ease-in px-3 py-2 rounded-md text-sm font-medium">
                {/* Get your first XTZ */}
              </button>
            </div>
          </div>

          {/* NO WALLET CONNECTED STATE */}
          {!isConnected && (
            <RightSidedMenu>
              <button
                onClick={connectWallet}
                className={`flex items-center mt-2 px-4 py-2 transition duration-150 ease-out hover:ease-in bg-white text-black hover:bg-darkGreen hover:text-white rounded-md md:ml-5`}
              >
                <span>Connect wallet</span>
              </button>{" "}
            </RightSidedMenu>
          )}

          {/* WALLET CONNECTED STATE */}
          {isConnected && isCorrectNetwork ? (
            <div className="hidden md:flex items-center justify-end">
              <div className="">
                {" "}
                <span className="text-white flex items-center px-2 py-2 bg-gray-700 rounded-md font-medium">
                  <Image priority={true} src={Logo} alt="Etherlink logo" width={"20"} className="mr-1" />
                  {shortenAddress(walletAddress)}
                </span>
              </div>

              <button
                onClick={disconnectWallet}
                className="flex items-center px-2 py-2 text-white hover:text-white transition duration-150 ease-out hover:ease-in bg-red-500 hover:bg-red-800 rounded-md md:ml-2 font-medium"
              >
                <span>Disconnect wallet</span>
              </button>
            </div>
          ) : (
            isConnected &&
            !isCorrectNetwork && (
              <RightSidedMenu>
                <button
                  onClick={resetConnectionToCorrectNetwork}
                  className={`flex items-center mt-2 px-4 py-2 transition duration-150 ease-out hover:ease-in bg-red-700 text-white hover:bg-white hover:text-black rounded-md md:ml-5`}
                >
                  <span>Wrong Network</span>
                </button>
              </RightSidedMenu>
            )
          )}

          {/* MOBILE MENU */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-300 focus:ring-white"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* WALLET NOT CONNECTED STATE MOBILE */}
      {!isConnected && (
        <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-1 border flex flex-col">
            <button
              onClick={connectWallet}
              className="flex items-center px-4 py-3 text-black hover:bg-darkGreen hover:text-white transition duration-150 ease-out hover:ease-in bg-white rounded-md md:ml-5"
            >
              <span>Connect wallet</span>
            </button>
          </div>
        </div>
      )}

      {/* WALLET CONNECTED STATE MOBILE */}
      {isConnected && isCorrectNetwork ? (
        <div className={`${showWalletConnected ? "block" : "hidden"} md:hidden`}>
          <div className="pt-2 pb-3 space-y-1 sm:px-3 border-1 border flex flex-col">
            <button
              onClick={disconnectWallet}
              className="absolute z-10 mt-2 rounded-md shadow-lg flex flex-col w-full bg-red-500 text-white px-2 py-2"
            >
              Disconnect wallet
            </button>
          </div>
        </div>
      ) : (
        isConnected &&
        !isCorrectNetwork && (
          <button
            onClick={resetConnectionToCorrectNetwork}
            className="md:hidden absolute z-10 mt-2 rounded-md shadow-lg flex flex-col w-full bg-red-500 text-white px-2 py-2"
          >
            Wrong network
          </button>
        )
      )}
    </nav>
  );
};

export default Menu;
