import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SingleCoin } from "../api/api";
import { DataContext } from "../context/DataContext";
import parse from "html-react-parser";
// import LinearProgressBar from "./ProgressBar";
import Coinchart from "./Coinchart";

function SingleData() {
  const [coin, setCoin] = useState({});
  const { id } = useParams();
  const { currency, symbol } = useContext(DataContext);
  //   console.log(currency)

  const fetchData = async () => {
    try {
      const { data } = await axios.get(SingleCoin(id));
      setCoin(data);
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id, currency]); // Add `id` to the dependency array

  if (!coin) {
    return <div>loading...</div>;
  }

  return (
    <div className="w-full lg:flex items-center mx-auto  p-4 pt-[100px] lg:pt-[70px] ">
      <div className="w-full lg:w-[30%] px-2 py-4 flex flex-col justify-center items-center lg:border-r border-white">
        {/* Coin Image */}
        <img src={coin?.image?.large} alt={coin?.id} className="h-[200px]" />

        {/* Coin Name */}
        <span className="my-4 text-4xl font-bold">{coin?.name}</span>

        {/* Coin Description */}
        <p>
          {coin?.description?.en
            ? parse(coin?.description?.en.split(".")[0])
            : "No description available"}
        </p>
       
        <div className="my-5 w-full self-start flex flex-col gap-3 sm:flex-col sm:items-center ">
            <div className=" text-xl font-bold">
              Rank: &nbsp;
              <span className="font-thin">{coin?.market_cap_rank}</span>
            </div>
            <div className=" text-xl font-bold">
              Current price: &nbsp;
              <span className="font-thin">
                {symbol}
                {coin?.market_data?.current_price[
                  currency.toLowerCase()
                ]?.toLocaleString(undefined, {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}
              </span>
            </div>
            <div className=" text-xl font-bold">
              Current price: &nbsp;
              <span className="font-thin">
                {symbol}
                {parseFloat(
                  (
                    coin?.market_data?.market_cap[currency.toLowerCase()] /
                    1_000_000
                  ).toFixed(0)
                ).toLocaleString(undefined, {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}
                M
              </span>
            </div>
          
        </div>
      </div>
     <Coinchart />
    </div>
  );
}

export default SingleData;
