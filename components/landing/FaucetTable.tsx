import { eUSD_ADDRESS, USDT_ADDRESS, USDC_ADDRESS, BTC_ADDRESS, ETH_ADDRESS } from "../../constants/addresses";
import { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/themes/viva-dark/theme.css";
import xtz from "../../public/images/token-icons/xtz.svg";
import usdc from "../../public/images/token-icons/usdc.svg";
import usdt from "../../public/images/token-icons/usdt.svg";
import eth from "../../public/images/token-icons/eth.svg";
import bitcoin from "../../public/images/token-icons/bitcoin.svg";
import eusd from "../../public/images/token-icons/eusd.svg";
import Image from "next/image";

const FaucetTable = ({ loadingDrip, drip, loadingBalances, userBalances, setSelectedToken }) => {
  const [tokens, setTokens] = useState([]);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      if (userBalances?.length > 0) {
        const data = [
          {
            token: "XTZ",
            balance: 0,
            img: xtz,
            address: "",
          },

          {
            token: "eUSD",
            balance: userBalances[0],
            img: eusd,
            address: eUSD_ADDRESS,
          },
          {
            token: "USDT",
            balance: userBalances[1],
            img: usdt,
            address: USDT_ADDRESS,
          },
          {
            token: "USDC",
            balance: userBalances[2],
            img: usdc,
            address: USDC_ADDRESS,
          },

          {
            token: "BTC",
            balance: userBalances[3],
            img: bitcoin,
            address: BTC_ADDRESS,
          },
          {
            token: "ETH",
            balance: userBalances[4],
            img: eth,
            address: ETH_ADDRESS,
          },
        ];
        setTokens(data);
      }
    }

    return () => (mounted = false);
  }, [userBalances]);

  const dripColumnTemplate = (rowData) => {
    if (rowData.token !== "XTZ") {
      return (
        <button
          onClick={() => {
            drip(rowData.address);
            setSelectedToken(rowData.token);
          }}
          className="bg-darkGreen hover:bg-gray-700 hover:font-medium shadow-md ease-in-out duration-200 rounded-md px-6 py-2 flex items-center w-40 flex items-center justify-center"
        >
          Drip
        </button>
      );
    } else {
      return (
        <button
          onClick={() => {
            console.log("Get XTZ from EOA");
          }}
          className="bg-darkGreen hover:bg-gray-700 hover:font-medium shadow-md ease-in-out duration-200 rounded-md px-6 py-2 flex items-center"
        >
          Start with XTZ
        </button>
      );
    }
  };

  const tokenColumnTemplate = (rowData) => {
    return (
      <button className="rounded-md px-6 py-2 flex items-center">
        <Image src={rowData.img} width={10} alt={rowData.token} className="bg rounded-full h-8 w-8 px-1 py-1 mr-2" />
        {rowData.token}
      </button>
    );
  };

  const balanceColumnTemplate = (rowData) => {
    return (
      <span className="font-bold">{userBalances.length < 1 ? "loading" : rowData.balance + " " + rowData.token}</span>
    );
  };

  return (
    <div className="card text-white max-w-4xl md:mx-auto mx-5">
      <h2 className="text-4xl font-bold mt-20 mb-3">Faucet</h2>
      {tokens && (
        <DataTable
          value={tokens}
          tableStyle={{ minWidth: "50rem" }}
          className="max-w-4xl rounded-md"
          emptyMessage="Connect your wallet to get Started."
        >
          <Column field="token" header="Token" body={tokenColumnTemplate}></Column>
          <Column field="balance" header="User balance" body={balanceColumnTemplate}></Column>
          <Column field="drip" header="Drip" body={dripColumnTemplate}></Column>
        </DataTable>
      )}
    </div>
  );
};

export default FaucetTable;
