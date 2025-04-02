import React, { useState, useEffect } from 'react';
import { AppProvider } from './context/AppContext';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Investment from './components/Investment';
import Transactions from './components/Transactions';
import Savings from './components/Savings';
import Trends from './components/Trends';


const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <AppProvider>
      <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
        <Header 
          toggleSidebar={toggleSidebar} 
          toggleDarkMode={toggleDarkMode} 
          darkMode={darkMode}
        />
        <div className="main-content">
          <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
          <div className="content">
            <Dashboard />
            <div className="dashboard-grid">
              <Investment />
              <Transactions />
              <Savings />
              <Trends />
            </div>
          </div>
        </div>
      </div>
    </AppProvider>
  );
};

export default App;