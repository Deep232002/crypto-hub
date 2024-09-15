import React from 'react';
import { FaWallet } from "react-icons/fa";


function WalletContant({ data }) {
  const IconComponent = data.icon; // Dynamically set the icon component

  return (
    <div className='w-full flex gap-2 items-start justify-start sm:justify-center'>
      <span className="p-2 bg-gradient-to-r from-[#00dbde] to-[#fc00ff] rounded-lg">
        <IconComponent className="text-xl text-white" /> 
      </span>
      <div>
        <div className='text-2xl font-semibold mb-2'>{data.heading}</div>
        <p className='text-sm text-gray-500'>{data.para}</p>
      </div>
    </div>
  );
}

export default WalletContant;
