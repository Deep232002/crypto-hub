import { createContext, useEffect, useState } from "react";

// Create the context
const DataContext = createContext();

// Context provider component
export function ContextProvider({ children }) {
  const [currency, setCurrency] = useState('INR');
  const [symbol, setSymbol] = useState('₹');

  useEffect(() => {
    if (currency === 'USD') {
      setSymbol('$')
     
    } else if(currency === 'INR') {
      setSymbol('₹')
     
    }
    console.log(`Currency ${currency}:`, symbol);
   
  }, [currency, symbol]);

  return (
    <DataContext.Provider value={{ currency, setCurrency, symbol }}>
      {children}
    </DataContext.Provider>
  );
}

// Export the context for use in other components
export { DataContext };
