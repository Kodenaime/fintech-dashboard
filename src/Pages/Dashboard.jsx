import React from 'react';
import DashboardCards from '../components/DashboardCard';
import Investment from '../components/Investment';
import Transactions from '../components/Transactions';
import Savings from '../components/Savings';
import Trends from '../components/Trends';


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