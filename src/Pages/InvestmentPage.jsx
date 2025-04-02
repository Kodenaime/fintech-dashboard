import React from 'react';
import Investment from '../components/Investment';

const InvestmentsPage = () => {
  return (
    <div className="investments-page">
      <h1 className="page-title">My Investments</h1>
      <Investment />
      <div className="investment-actions">
        <button className="btn-primary">Add New Investment</button>
        <button className="btn-outline">View Performance History</button>
      </div>
    </div>
  );
};

export default InvestmentsPage;