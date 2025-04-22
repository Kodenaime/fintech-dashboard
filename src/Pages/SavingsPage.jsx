import React from 'react';
import Savings from '../components/Savings.jsx';

const SavingsPage = () => {
  return (
    <div className="savings-page">
      <h1 className="page-title">Savings Goals</h1>
      <Savings />
      <div className="savings-summary">
        <div className="summary-card">
          <h3>Total Saved</h3>
          <p>$12,450</p>
        </div>
        <div className="summary-card">
          <h3>Goals Achieved</h3>
          <p>2/5</p>
        </div>
      </div>
    </div>
  );
};

export default SavingsPage;