import React from 'react'
import LandingPage from '../components/LandingPage'
import CryptoTable from '../components/CryptoTable'
import Wallet from '../components/Wallet'
import Joindiscord from '../components/Joindiscord'
import Footer from '../components/Footer'

function Home() {
  return (
   <div className='w-full'>
   <LandingPage/>
   <CryptoTable/>
   <Wallet/>
   <Joindiscord/>
   <Footer/>
   </div>
  )
}
export default Home;