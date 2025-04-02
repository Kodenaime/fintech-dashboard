import React, { useContext, useEffect } from 'react';
import { useAppContext } from '../context/AppContext';
import { fetchSavingsGoals } from '../api/fintechApi';

const Savings = () => {
  const { savingsGoals, setSavingsGoals, isLoading, setIsLoading } = useAppContext();

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchSavingsGoals();
        setSavingsGoals(data);
      } catch (error) {
        console.error('Error loading savings goals:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadData();
  }, [setSavingsGoals, setIsLoading]);

  const calculateProgress = (current, target) => {
    return Math.min(100, (current / target) * 100);
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="savings-section card">
      <h2>Savings Goals</h2>
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="savings-goals">
          {savingsGoals.map((goal) => (
            <div key={goal.id} className="goal-item">
              <div className="goal-header">
                <h3>{goal.name}</h3>
                <p className="goal-deadline">Target: {formatDate(goal.deadline)}</p>
              </div>
              <div className="goal-progress">
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${calculateProgress(goal.current, goal.target)}%` }}
                  ></div>
                </div>
                <div className="goal-amounts">
                  <span>${goal.current.toLocaleString()}</span>
                  <span>${goal.target.toLocaleString()}</span>
                </div>
              </div>
            </div>
          ))}
          <button className="add-goal-btn">+ Add New Goal</button>
        </div>
      )}
    </div>
  );
};

export default Savings;