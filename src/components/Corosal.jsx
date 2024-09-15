import axios from 'axios';
import React, { useContext, useState, useEffect } from 'react';
import { TrendingCoins } from '../api/api';
import { DataContext } from '../context/DataContext';
import AliceCarousel from 'react-alice-carousel';
import { Link } from 'react-router-dom';

function Corosal() {
  const [trending, setTrending] = useState([]);
  const { currency } = useContext(DataContext);
  const {symbol}=useContext(DataContext)

  const fetchdata = async () => {
    try {
      const { data } = await axios.get(TrendingCoins(currency));
      // console.log(data);
      setTrending(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, [currency]);

  const responsive = {
    0: {
      items: 2, // Reduced items for mobile
    },
    512: {
      items: 4, // For larger screens
    },
  };

  const items = trending.map((coin) => {
    const profit=coin?.price_change_percentage_24h>=0
    return(
    <Link to={`/coins/${coin.id}`} className='w-[50%] flex items-center justify-center flex-col '>
      <img src={coin?.image} alt={coin.name} height='40' className='mb-1'/>
      <span>{coin?.symbol?.toUpperCase()}
      &nbsp;
      <span className={`${profit ? 'text-green-400':'text-red-500'}`}>
        {profit ? '+' :'-'}{coin?.price_change_percentage_24h?.toFixed(2)}%
      </span>
      </span>
      <span>{symbol}{Number(coin?.current_price)?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>

    </Link>
    )
});

  return (
    <div className='w-[90%] mx-auto'>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlay
        autoPlayInterval={1000} // Autoplay every 1 second
        animationDuration={1500} // Smooth animation over 1.5 seconds
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        items={items}

      />
    </div>
  );
}

export default Corosal;
