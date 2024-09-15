import React, { useContext, useEffect, useState } from "react";
import { DataContext } from '../context/DataContext';
import { Link } from "react-router-dom";


function Header() {
  const { setCurrency, currency } = useContext(DataContext);
  console.log(currency)
  const [bg, Setbg]=useState('bg-transparent')

  // useEffect(()=>{
  
  // },[])

  return (
    <header className={`w-full bg-[#0E1B21] py-4 px-6 flex justify-between items-center fixed z-50`}>
      {/* Logo */}
      <Link  to='/' className="text-white text-2xl font-bold cursor-pointer">
        CRYPTO-HUB
      </Link>

      {/* Currency Selector */}
      <div>
        <select
          className="bg-gray-700 text-white py-2 px-3 rounded focus:outline-none"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          <option value="USD">USD</option>
          <option value="INR">INR</option>
        </select>
      </div>
    </header>
  );
}

export default Header;
