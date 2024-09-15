import React from "react";
import Coin from "./Coin";
import { SiTether } from "react-icons/si";


function Joindiscord() {
  return (
    <div className="container mx-auto max-w-[80%] my-10">
        <div>
      <div className="flex justify-center items-center gap-4">
        <div className="">
            <Coin wid={true}/>
        </div>
        <div className="flex flex-col justify-center items-center p-2">
            <div className="text-4xl sm:text-[4rem]  font-bold sm:p-3">JOIN US VIA</div>
            <div className="bg-gradient-to-r from-[#00dbde] to-[#fc00ff] bg-clip-text text-transparent text-4xl sm:text-[4rem]  font-extrabold sm:p-3">DISCORD</div>
        </div>
        <div>
        <Coin wid={true} icon={SiTether}/>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="p-5 sm:p-1 mb-8 sm:mb-10">
            invest and manage all your crypto at one place
        </div>
        <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[#00dbde] to-[#fc00ff] font-bold">Join Via Discord</span>
      </div>
      </div>
     
    </div>
  );
}

export default Joindiscord;
