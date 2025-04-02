import React, { useEffect, useContext } from 'react';
import { useAppContext } from '../context/AppContext';
import { fetchPortfolioData, fetchTransactions } from '../api/fintechApi';

const DashboardCard = () => {
  const { 
    portfolio, 
    setPortfolio, 
    transactions, 
    setTransactions, 
    isLoading, 
    setIsLoading 
  } = useAppContext();

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const [portfolioData, transactionData] = await Promise.all([
          fetchPortfolioData(),
          fetchTransactions()
        ]);
        setPortfolio(portfolioData);
        setTransactions(transactionData);
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadData();
  }, [setPortfolio, setTransactions, setIsLoading]);

  const totalPortfolioValue = portfolio.reduce((sum, item) => sum + item.value, 0);
  const monthlySavings = transactions
    .filter(t => t.type === 'savings')
    .reduce((sum, t) => sum + t.amount, 0);
  const investmentReturns = portfolio.reduce((sum, item) => sum + (item.value * item.change / 100), 0);

  return (
    <div className="dashboard-cards">
      <div className="card">
        <h3>Total Portfolio Value</h3>
        <p className="value">${totalPortfolioValue.toLocaleString()}</p>
        <p className="subtext">Across all investments</p>
      </div>
      
      <div className="card">
        <h3>Monthly Savings</h3>
        <p className="value">${monthlySavings.toLocaleString()}</p>
        <p className="subtext">Saved this month</p>
      </div>
      
      <div className="card">
        <h3>Investment Returns</h3>
        <p className={`value ${investmentReturns >= 0 ? 'positive' : 'negative'}`}>
          {investmentReturns >= 0 ? '+' : ''}{investmentReturns.toLocaleString()}
        </p>
        <p className="subtext">This year</p>
      </div>
      
      <div className="card">
        <h3>Savings Progress</h3>
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${Math.min(100, (monthlySavings / 2000) * 100)}%` }}
          ></div>
        </div>
        <p className="subtext">${monthlySavings} of $2,000 monthly goal</p>
      </div>
    </div>
  );
};

export default DashboardCard;