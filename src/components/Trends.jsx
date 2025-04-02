import React, { useContext, useEffect } from 'react';
import { useAppContext } from '../context/AppContext';
import { fetchMarketData } from '../api/fintechApi';

const Trends = () => {
  const { marketData, setMarketData, isLoading, setIsLoading } = useAppContext();

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchMarketData();
        setMarketData(data);
      } catch (error) {
        console.error('Error loading market data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadData();
  }, [setMarketData, setIsLoading]);

  const getTrendIcon = (change) => {
    if (change > 0) return '📈';
    if (change < 0) return '📉';
    return '➖';
  };

  return (
    <div className="market-section card">
      <h2>Market Trends</h2>
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="market-trends">
          <div className="trends-header">
            <span>Asset</span>
            <span>Price</span>
            <span>Change</span>
          </div>
          {marketData.map((item) => (
            <div key={item.id} className="trend-item">
              <div className="asset-info">
                <span className="asset-symbol">{item.symbol}</span>
                <span className="asset-name">{item.name}</span>
              </div>
              <div className="asset-price">${item.price.toLocaleString()}</div>
              <div className={`asset-change ${item.change >= 0 ? 'positive' : 'negative'}`}>
                {getTrendIcon(item.change)} {item.change >= 0 ? '+' : ''}{item.change}%
              </div>
            </div>
          ))}
          <button className="view-more-btn">View More Assets →</button>
        </div>
      )}
    </div>
  );
};

export default Trends;