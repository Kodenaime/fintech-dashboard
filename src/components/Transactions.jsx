import React, { useContext, useEffect } from 'react';
import { useAppContext } from '../context/AppContext';
import { fetchTransactions } from '../api/fintechApi';

const Transactions = () => {
  const { transactions, setTransactions, isLoading, setIsLoading } = useAppContext();

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchTransactions();
        setTransactions(data);
      } catch (error) {
        console.error('Error loading transactions:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadData();
  }, [setTransactions, setIsLoading]);

  const getTypeIcon = (type) => {
    switch(type) {
      case 'investment': return '📈';
      case 'savings': return '💰';
      case 'income': return '💵';
      case 'withdrawal': return '💸';
      default: return '🔹';
    }
  };

  return (
    <div className="transactions-section card">
      <h2>Recent Transactions</h2>
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="transactions-list">
          {transactions.slice(0, 5).map((transaction) => (
            <div key={transaction.id} className="transaction-item">
              <div className="transaction-icon">
                {getTypeIcon(transaction.type)}
              </div>
              <div className="transaction-details">
                <h3>{transaction.description}</h3>
                <p className="transaction-date">{transaction.date}</p>
              </div>
              <div className="transaction-amount">
                <p className={`amount ${transaction.amount >= 0 ? 'positive' : 'negative'}`}>
                  {transaction.amount >= 0 ? '+' : ''}{transaction.amount.toLocaleString()}
                </p>
              </div>
            </div>
          ))}
          <button className="view-all-btn">View All Transactions →</button>
        </div>
      )}
    </div>
  );
};

export default Transactions;