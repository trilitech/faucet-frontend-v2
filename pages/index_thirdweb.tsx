import { ConnectWallet, useContract, useContractMetadata, useContractRead, useContractWrite, Web3Button } from '@thirdweb-dev/react';
import styles from '../styles/Home.module.css';
import { NextPage } from 'next';
import { FAUCET_ADDRESS, eUSD_ADDRESS } from '../constants/addresses';
import { Button } from 'primereact/button';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import faucetContractAbi from '../constants/ABIs/faucet/faucetContractAbi.json';

const Home: NextPage = () => {
  const { contract: faucetContract } = useContract(FAUCET_ADDRESS, faucetContractAbi);

  const { data: metadata, isLoading: loadingMetadata } = useContractMetadata(faucetContract);
  const { mutateAsync: requestTokens, isLoading, error } = useContractWrite(
    faucetContract,
    "requestTokens"
  );

  const { data: lockTime, isLoading: loadingLockTime } = useContractRead(
    faucetContract,
    "lockTime"
  );

  return (
    <main className={styles.main}>
      <div className="container">
        {!loadingLockTime &&
          <header className="heading">
            <div>
              <h1>{lockTime}</h1>
            </div>
          </header>
        }
      </div>
      <div className={styles.container}>
        <ConnectWallet />
        {/* <h1>Faucet App</h1> */}
        <Web3Button 
          contractAddress={FAUCET_ADDRESS}
          action={() => requestTokens({ args: ["0x1A71f491fb0Ef77F13F8f6d2a927dd4C969ECe4f"] })}
        >
          Drip Faucet for eUSD
        </Web3Button>
      </div>
    </main>
  );
};

export default Home;
