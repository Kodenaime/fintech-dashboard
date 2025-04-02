import React from 'react';
import Transactions from '../components/Transactions';

const TransactionsPage = () => {
  return (
    <div className="transactions-page">
      <h1 className="page-title">Transaction History</h1>
      <div className="transaction-filters">
        <select>
          <option>All Transactions</option>
          <option>Investments</option>
          <option>Savings</option>
          <option>Withdrawals</option>
        </select>
        <input type="date" />
        <button className="btn-primary">Filter</button>
      </div>
      <Transactions showAll={true} />
    </div>
  );
};

export default TransactionsPage;