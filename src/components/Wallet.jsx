import React from 'react';
import WalletContant from './WalletContant';
import image from '../assets/pngegg.png';
import { data } from './walletdata';


function Wallet() {
  return (
    <div className='w-full max-w-[90%] md:max-w-[70%] mx-auto p-4'>
      {/* Heading */}
      <div className='text-center bg-gradient-to-r from-[#00dbde] to-[#fc00ff] bg-clip-text text-transparent text-4xl font-extrabold my-10'>
        Why Choose Us
      </div>

      {/* Content */}
      <div className='flex flex-col md:flex-row justify-center items-center gap-8 sm:3'>

        {/* First set of WalletContant */}
        <div className='w-full sm:w-[30%] flex flex-col gap-4 justify-center items-center'>
  {
    data.slice(0, 3).map((item, index) => (
      <WalletContant key={index} data={item} />
    ))
  }
</div>


        {/* Responsive Image */}
        <img
          src={image}
          alt="crypto"
          className="w-full h-full max-w-[300px] md:max-w-[40%] object-contain" // Make the image responsive
        />

        {/* Second set of WalletContant */}
        <div className='w-full sm:w-[30%] flex flex-col gap-4 justify-center items-center'>
          {
            data.slice(3, 6).map((item, index) => (
              <WalletContant key={index} data={item} />
            ))
          }
        </div>

      </div>
    </div>
  );
}

export default Wallet;
