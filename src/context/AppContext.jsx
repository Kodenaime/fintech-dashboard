import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: 'Naruto Uzumaki',
    email: 'Naruto.uzumaki@gmail+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------.com',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
  });
  
  const [portfolio, setPortfolio] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [savingsGoals, setSavingsGoals] = useState([]);
  const [marketData, setMarketData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <AppContext.Provider value={{
      user,
      setUser,
      portfolio,
      setPortfolio,
      transactions,
      setTransactions,
      savingsGoals,
      setSavingsGoals,
      marketData,
      setMarketData,
      isLoading,
      setIsLoading
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);