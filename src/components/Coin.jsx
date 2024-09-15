import React from 'react';
import { SiBitcoinsv } from "react-icons/si";



function Coin({ wid, icon }) {


  const RenderIcon = icon ? icon : SiBitcoinsv;

  return (
    <div className={`${ wid ? 'w-14' : ''} flex justify-center items-center h-fit`}>
      <div className="relative w-20 h-20 ">
        <RenderIcon  className={`w-full h-full object-cover rounded-full animate-bounce-slow ${icon? 'text-green-600':'text-yellow-300'}`}/>
      </div>
    </div>
  );
}

export default Coin;
