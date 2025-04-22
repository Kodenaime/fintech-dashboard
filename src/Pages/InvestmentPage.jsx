import React from 'react';
import Investment from '../components/Investment.jsx';

const InvestmentsPage = () => {
  return (
    <div className="investments-page">
      <h1 className="page-title">My Investments</h1>
      <Investment />
      <div className="investment-actions">
        <button className="main-btn">New Investment</button>
        <button className="main-btn">Performance History</button>
      </div>
    </div>
  );
};

export default InvestmentsPage;