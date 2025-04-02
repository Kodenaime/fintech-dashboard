import React, { useContext, useEffect } from 'react';
import { useAppContext } from '../context/AppContext';
import { fetchPortfolioData } from '../api/fintechApi';

const Investment = () => {
  const { portfolio, setPortfolio, isLoading, setIsLoading } = useAppContext();

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchPortfolioData();
        setPortfolio(data);
      } catch (error) {
        console.error('Error loading portfolio data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadData();
  }, [setPortfolio, setIsLoading]);

  const getTypeIcon = (type) => {
    switch(type) {
      case 'stocks': return '📊';
      case 'bonds': return '📉';
      case 'crypto': return '🪙';
      case 'real-estate': return '🏠';
      default: return '💼';
    }
  };

  return (
    <div className="portfolio-section card">
      <h2>Investment Portfolio</h2>
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="portfolio-items">
          {portfolio.map((item) => (
            <div key={item.id} className="portfolio-item">
              <div className="item-icon">{getTypeIcon(item.type)}</div>
              <div className="item-details">
                <h3>{item.name}</h3>
                <p className="item-type">{item.type}</p>
              </div>
              <div className="item-values">
                <p className="item-value">${item.value.toLocaleString()}</p>
                <p className={`item-change ${item.change >= 0 ? 'positive' : 'negative'}`}>
                  {item.change >= 0 ? '+' : ''}{item.change}%
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Investment;