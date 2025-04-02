import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiPieChart, FiTrendingUp, FiDollarSign, FiCreditCard, FiGlobe, FiSettings } from 'react-icons/fi';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  
  const navItems = [
    { path: '/', icon: <FiPieChart />, label: 'Dashboard' },
    { path: '/investments', icon: <FiTrendingUp />, label: 'Investments' },
    { path: '/savings', icon: <FiDollarSign />, label: 'Savings' },
    { path: '/transactions', icon: <FiCreditCard />, label: 'Transactions' },
    { path: '/market', icon: <FiGlobe />, label: 'Market Trends' },
    { path: '/settings', icon: <FiSettings />, label: 'Settings' },
  ];

  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <h2>KODEVEST</h2>
        <button className="close-btn" onClick={toggleSidebar}>×</button>
      </div>
      <nav className="sidebar-nav">
        <ul>
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink 
                to={item.path}
                className={({ isActive }) => 
                  isActive ? 'active' : ''
                }
                onClick={toggleSidebar}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="sidebar-footer">
        <div className="user-profile">
          <img 
            src="https://randomuser.me/api/portraits/men/1.jpg" 
            alt="User" 
            className="user-avatar" 
          />
          <div className="user-info">
            <p className="user-name">Naruto Uzumaki</p>
            <p className="user-email">uzumaki.n@gmail.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;