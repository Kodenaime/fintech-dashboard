import React from 'react';
import DashboardCards from '../components/DashboardCard.jsx';
import Investment from '../components/Investment.jsx';
import Transactions from '../components/Transactions.jsx';
import Savings from '../components/Savings.jsx';
import Trends from '../components/Trends.jsx';


const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <DashboardCards />
      <div className="dashboard-grid">
        <Investment />
        <Transactions />
        <Savings />
        <Trends />
      </div>
    </div>
  );
};

export default Dashboard;