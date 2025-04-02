// I created my own Mock API functions - to simulate actual API calls
export const fetchPortfolioData = async () => {
    // I Simulated API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    return [
      { id: 1, name: 'Tech Stocks', value: 12500, change: 4.2, type: 'stocks' },
      { id: 2, name: 'Bonds', value: 8500, change: 1.1, type: 'bonds' },
      { id: 3, name: 'Crypto', value: 3200, change: -2.4, type: 'crypto' },
      { id: 4, name: 'Real Estate', value: 21000, change: 3.7, type: 'real-estate' },
    ];
  };
  
  export const fetchTransactions = async () => {
    await new Promise(resolve => setTimeout(resolve, 600));
    
    return [
      { id: 1, date: '2023-05-15', description: 'Tech Stocks Purchase', amount: 1500, type: 'investment' },
      { id: 2, date: '2023-05-14', description: 'Monthly Savings', amount: 500, type: 'savings' },
      { id: 3, date: '2023-05-10', description: 'Dividend Payment', amount: 120, type: 'income' },
      { id: 4, date: '2023-05-05', description: 'Bonds Investment', amount: 1000, type: 'investment' },
      { id: 5, date: '2023-05-01', description: 'Withdrawal', amount: -300, type: 'withdrawal' },
    ];
  };
  
  export const fetchSavingsGoals = async () => {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return [
      { id: 1, name: 'Emergency Fund', target: 10000, current: 6500, deadline: '2023-12-31' },
      { id: 2, name: 'Vacation', target: 5000, current: 3200, deadline: '2023-08-15' },
      { id: 3, name: 'New Car', target: 25000, current: 8000, deadline: '2024-06-30' },
    ];
  };
  
  export const fetchMarketData = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return [
      { id: 1, symbol: 'SPX', name: 'S&P 500', price: 4125.47, change: 1.24 },
      { id: 2, symbol: 'NDX', name: 'NASDAQ 100', price: 13425.63, change: 2.15 },
      { id: 3, symbol: 'BTC', name: 'Bitcoin', price: 28345.21, change: -1.87 },
      { id: 4, symbol: 'GOLD', name: 'Gold', price: 1987.32, change: 0.45 },
    ];
  };