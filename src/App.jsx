import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';
import Dashboard from './pages/Dashboard.jsx'
import InvestmentPage from './pages/InvestmentPage.jsx'; 
import SavingsPage from './pages/SavingsPage.jsx';
import TransactionsPage from './pages/TransactionsPage.jsx';
import MarketTrends from './pages/MarketTrends.jsx';
import Settings from './pages/Settings.jsx';


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
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/investments" element={<InvestmentPage />} />
              <Route path="/savings" element={<SavingsPage />} />
              <Route path="/transactions" element={<TransactionsPage />} />
              <Route path="/market" element={<MarketTrends />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
    </AppProvider>
  );
};

export default App;