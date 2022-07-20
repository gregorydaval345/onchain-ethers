import React from "react";
import { ethers } from "ethers";
import abi from "../utils/abi.json";

const provider = new ethers.providers.JsonRpcProvider(
  `https://mainnet.infura.io/v3/7731b280b7ed4b8ebbd0a5df73efc86b`
);

function fetchMint() {}

function fetchBurn() {}

const FetchDataEth = async () => {
  const contractAddress = "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599";

  const balance = await provider.getBalance(contractAddress);

  const tokenContract = new ethers.Contract(contractAddress, abi, provider);

  let filter = tokenContract.filters.Mint();

  let eventsQueryData = await tokenContract.queryFilter(filter, -150000);

  console.log(eventsQueryData);

  return <div>{eventsQueryData}</div>;
};

export default FetchDataEth;
