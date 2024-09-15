import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { CoinList } from "../api/api";
import { DataContext } from "../context/DataContext";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

function CryptoTable() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { currency, symbol } = useContext(DataContext);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const coinsPerPage = 10;
  const navigate=useNavigate()

  const fetchData = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(CoinList(currency));
      setData(data);
      setLoading(false);
      console.log(data)
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [currency]);

  // Pagination logic
  const filteredData = data.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  );
  const indexOfLastCoin = currentPage * coinsPerPage;
  const indexOfFirstCoin = indexOfLastCoin - coinsPerPage;
  const currentCoins = filteredData.slice(indexOfFirstCoin, indexOfLastCoin);

  // Total pages calculation
  const totalPages = Math.ceil(filteredData.length / coinsPerPage);

  // Determine the range of page numbers to display
  const getPageNumbers = () => {
    const start = Math.max(1, currentPage - 1);  // Start page range
    const end = Math.min(totalPages, start + 2);  // End page range
    return [...Array(end - start + 1).keys()].map((i) => i + start); // Generate range
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="container mx-auto max-w-4xl p-4 text-black">
      {/* Search input */}
      
      <input
        type="text"
        className="w-full mb-4 p-2 rounded border border-gray-300 text-white"
        placeholder="Search for a coin..."
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Responsive Table */}
      <h2 className="text-3xl text-white font-Oswald font-bold mb-3">Market Update</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg overflow-hidden text-sm md:text-base">
          <thead className="bg-gradient-to-r from-[#00dbde] to-[#fc00ff] ">
            <tr>
              {["Coin", "Price", "24h Change", "Market CAP"].map((head) => (
                <th
                  key={head}
                  className="px-2 py-1 md:px-4 md:py-2 text-left text-black font-semibold"
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="4" className="text-center py-4 bg-transparent">
                 <Loader/>
                  </td>
                 </tr>
            ) : (
              currentCoins.map((coin) => (
                <tr
                  key={coin.id}
                  className="border-b border-gray-200 hover:bg-gray-100"
                  onClick={() => navigate(`/coins/${coin.id}`)}
                >
                  <td className="block md:flex lg:flex-row justify-center items-center text-center px-2 py-1 md:px-4 md:py-2 w-fit gap-3 ">
                    <img src={coin?.image} alt={coin.name} width={50} />
                    <div className="flex flex-col">
                      <span className="lg:text-left">
                        {coin?.symbol?.toUpperCase()}
                      </span>
                      <span className="text-[10px] text-gray-400 lg:text-left">
                        {coin?.name?.toUpperCase()}
                      </span>
                    </div>
                  </td>

                  <td className="px-2 py-1 md:px-4 md:py-2">
                    {symbol}
                    {coin.current_price.toLocaleString()}
                  </td>
                  <td
                    className={`px-2 py-1 md:px-4 md:py-2 ${
                      coin.price_change_percentage_24h > 0
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </td>
                  <td className="px-2 py-1 md:px-4 md:py-2">
                    {symbol}
                    {(coin.market_cap / 1_000_000).toLocaleString()}M
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4 space-x-2">
        <button
          onClick={handlePrevious}
          className={`px-3 py-1 rounded ${currentPage === 1 ? "bg-gray-200" : "bg-gradient-to-r from-[#00dbde] to-[#fc00ff] text-white"} `}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        {getPageNumbers().map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => setCurrentPage(pageNumber)}
            className={`px-3 py-1 rounded-full ${
              currentPage === pageNumber ? "bg-gradient-to-r from-[#00dbde] to-[#fc00ff] text-white" : "text-gray-200"
            }`}
          >
            {pageNumber}
          </button>
        ))}
        <button
          onClick={handleNext}
          className={`px-3 py-1 rounded ${currentPage === totalPages ? "bg-gray-200" : "bg-gradient-to-r from-[#00dbde] to-[#fc00ff] text-white"} `}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default CryptoTable;
