import { MdOutlineEditOff } from "react-icons/md";
import { GiElectric } from "react-icons/gi";
import { FaSatelliteDish } from "react-icons/fa6";
import { SiGooglemarketingplatform } from "react-icons/si";
import { BsCollectionFill } from "react-icons/bs";
import { FaWallet } from "react-icons/fa";

export const data = [
  {
    icon: FaWallet, // Pass the component reference
    heading: 'Connect Your Wallet',
    para: 'Use TrustWallet, MetaWallet, or connect to the app'
  },
  {
    icon: MdOutlineEditOff,
    heading: 'Select Your Quantity',
    para: 'Upload your crypto and add price, title, description'
  },
  {
    icon: GiElectric,
    heading: 'Confirm Transaction',
    para: 'Earn by setting your crypto on market price'
  },
  {
    icon: FaSatelliteDish,
    heading: 'Receive your own NFTs',
    para: 'Invest your crypto on one platform'
  },
  {
    icon: BsCollectionFill,
    heading: 'Drive Your Collection',
    para: 'We make it easy to discover and maintain'
  },
  {
    icon: SiGooglemarketingplatform,
    heading: 'Take a Market to Sell',
    para: 'Discover the right cryptocurrency to sell'
  },
];
