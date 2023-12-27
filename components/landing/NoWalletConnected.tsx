const NoWalletConnected = ({ connectWallet }) => {
  return (
    <div className=" text-white rounded-md px-4 py-4 text-center font-medium text-xl mt-40 max-w-3xl mx-auto flex flex-col items-center">
      <h2 className="text-5xl font-bold">
        Get Free Testnet Tokens to Start Building on <span className="text-midGreen">Etherlink</span>.
      </h2>
      <p className="mt-4 text-gray-300">Connect your wallet to the Etherlink Testnet to get started.</p>
      <p className="text-xs font-normal text-gray-400">This faucet drips 0.1XTZ every 24hrs.</p>

      <div className="flex w-1/2 items-center justify-around mt-5">
        <button className="w-full  px-4 py-2 hover:text-white font-normal bg-lightGreen text-black transition duration-150 ease-out hover:ease-in hover:bg-darkGreen rounded-md">
          Get Test XTZ
        </button>
        <button
          onClick={connectWallet}
          className="w-full font-normal px-4 py-2 text-black hover:bg-darkGreen hover:text-white transition duration-150 ease-out hover:ease-in bg-white rounded-md ml-2"
        >
          Connect Wallet
        </button>
      </div>
    </div>
  );
};

export default NoWalletConnected;
