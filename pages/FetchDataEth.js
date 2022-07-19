import React from "react";
import { ethers } from "ethers";

const provider = new ethers.providers.JsonRpcProvider(
  `https://mainnet.infura.io/v3/7731b280b7ed4b8ebbd0a5df73efc86b`
);

const FetchDataEth = async () => {
  const contractAddress = "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599";

  const balance = await provider.getBalance(contractAddress);

  console.log(
    `\nETH Balance of ${contractAddress} --> ${ethers.utils.formatEther(
      balance
    )} ETH\n`
  );

  return <div>${balance}</div>;
};

export default FetchDataEth;