import React from 'react';
import Coin from './Coin';
import image from '../assets/image2.jpg';
import Corosal from './Corosal';

function LandingPage() {
  return (
    <div className='w-full h-fit  pt-[20%] pb-[10%] px-4 lg:py-8 bg-cover bg-center'  style={{ backgroundImage: `url(${image})` }}>
    <div
      className=" block lg:flex items-center justify-center  gap-3  my-[10%] "
     
    >
      <div className='hidden lg:flex items-center'>
        <Coin />
      </div>
      <div className='text-center'>
        {/* Content */}
        <div className='text-[2rem] lg:text-[2.5rem] mb-4'>
          The World’s Most Popular Way to Buy,
        </div>
        <div className='text-[2rem] lg:text-[2.5rem] mb-6'>
          Sell, and Trade <span className='bg-gradient-to-r from-[#00dbde] to-[#fc00ff] bg-clip-text text-transparent text-4xl font-bold'>CryptoCoin</span>
        </div>
        <p className='lg:text-xl'>
          Explore and learn more about everything from learning and
        </p>
        <p className='lg:text-xl'>
          global payments to scaling your team.
        </p>
      </div>
      <div className='hidden lg:flex items-center mb-8'>
        <Coin />
      </div>
    </div>
    <Corosal/>
    </div>
  );
}

export default LandingPage;
