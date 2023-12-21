import {
  eUSD_ADDRESS,
  USDT_ADDRESS,
  USDC_ADDRESS,
  BTC_ADDRESS,
  ETH_ADDRESS,
} from "../../constants/addresses";
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

const FaucetTable = ({ loadingDrip, drip, loadingBalances, fetchBalances }) => {
  const [tokens, setTokens] = useState([]);

  const data = [
    {
      token: "XTZ",
      balance: 0,
      value: "$0.00",
      img: xtz,
      address: "",
    },

    {
      token: "eUSD",
      balance: 0,
      value: "$0.00",
      img: eusd,
      address: eUSD_ADDRESS,
    },
    {
      token: "USDC",
      balance: 0,
      value: "$0.00",
      img: usdc,
      address: USDC_ADDRESS,
    },

    {
      token: "USDT",
      balance: 0,
      value: "$0.00",
      img: usdt,
      address: USDT_ADDRESS,
    },

    {
      token: "BTC",
      balance: 0,
      value: "$0.00",
      img: bitcoin,
      address: BTC_ADDRESS,
    },
    {
      token: "ETH",
      balance: 0,
      value: "$0.00",
      img: eth,
      address: ETH_ADDRESS,
    },
  ];

  useEffect(() => {
    setTokens(data);
  }, []);

  const dripColumnTemplate = (rowData) => {
    return (
      <button
        onClick={() => drip(rowData.address)}
        className="bg-darkGreen hover:bg-darkGreen rounded-md px-6 py-2 flex items-center"
      >
        Drip
      </button>
    );
  };

  const tokenColumnTemplate = (rowData) => {
    return (
      <button className="rounded-md px-6 py-2 flex items-center">
        <Image
          src={rowData.img}
          width={10}
          alt={rowData.token}
          className="bg rounded-full h-8 w-8 px-1 py-1 mr-2"
        />
        {rowData.token}
      </button>
    );
  };

  return (
    <div className="card text-white max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mt-20 mb-3">Faucet</h2>
      {data && (
        <DataTable
          value={tokens}
          tableStyle={{ minWidth: "50rem" }}
          className="max-w-4xl rounded-md"
        >
          <Column
            field="token"
            header="Token"
            body={tokenColumnTemplate}
          ></Column>
          <Column field="balance" header="User balance"></Column>
          <Column field="drip" header="Drip" body={dripColumnTemplate}></Column>
        </DataTable>
      )}

      <button onClick={fetchBalances}>Fetch Balance</button>
    </div>
  );
};

export default FaucetTable;
