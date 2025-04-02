import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const navItems = [
    { path: '/dashboard', icon: '📊', label: 'Dashboard' },
    { path: '/investments', icon: '📈', label: 'Investments' },
    { path: '/savings', icon: '💰', label: 'Savings' },
    { path: '/transactions', icon: '💸', label: 'Transactions' },
    { path: '/market', icon: '🌐', label: 'Market Trends' },
    { path: '/settings', icon: '⚙️', label: 'Settings' },
  ];

  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <h2>FinTrack</h2>
        <button className="close-btn" onClick={toggleSidebar}>×</button>
      </div>
      <nav className="sidebar-nav">
        <ul>
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink 
                to={item.path} 
                className={({ isActive }) => isActive ? 'active' : ''}
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
            <p className="user-name">John Doe</p>
            <p className="user-email">john.doe@example.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;