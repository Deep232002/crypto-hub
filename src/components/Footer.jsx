import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import bank from '../assets/bank.webp'
import coinimage from '../assets/coinparse.webp'
function Footer() {
  return (
    <div className="container max-w-[90%] mx-auto flex justify-center sm:justify-between items-center mt-20 ">
    <div className='hidden sm:block'>
          <img src={bank} alt="image" width={300} />
      </div>
      <div className="">
      <div className="flex items-center justify-center gap-4 text-3xl mb-3">
          {/* icon */}
          <FaTwitter />
          <FaDiscord />
          <FaFacebookMessenger />
          <FaInstagram />
      </div>
       <div className="text-center">
          privecy, &nbsp; &nbsp; Term of Use
       </div>
      </div>
      <div className='hidden sm:block'>
          <img src={coinimage} alt="image" width={250} />
      </div>
    </div>
  )
}

export default Footer
