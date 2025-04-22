import React from 'react';
import Trends from '../components/Trends.jsx';

const MarketTrendsPage = () => {
  return (
    <div className="market-page">
      <h1 className="page-title">Market Trends</h1>
      <div className="market-tabs">
        <button className="tab-active">Stocks</button>
        <button>Crypto</button>
        <button>Commodities</button>
        <button>Indices</button>
      </div>
      <Trends />
      <div className="market-news">
        <h2>Financial News</h2>
        <div className="news-item">
          <h3>Market Rally Continues Despite Economic Concerns</h3>
          <p>2 hours ago • Bloomberg</p>
        </div>
        <div className="news-item">
          <h3>Fed Announces 0.25% Rate Hike</h3>
          <p>5 hours ago • Financial Times</p>
        </div>
      </div>
    </div>
  );
};

export default MarketTrendsPage;
