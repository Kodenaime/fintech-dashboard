import React, { useContext } from 'react';
import { useAppContext } from '../context/AppContext';

const Settings = () => {
  const { user, darkMode, toggleDarkMode } = useAppContext();

  return (
    <div className="settings-page">
      <h1 className="page-title">Settings</h1>
      
      <div className="settings-section">
        <h2>Profile</h2>
        <div className="profile-info">
          <img src={user.avatar} alt="User" className="profile-avatar" />
          <div className="profile-details">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <button className="main-btn btn-blue">Edit Profile</button>
          </div>
        </div>
      </div>

      <div className="settings-section">
        <h2>Preferences</h2>
        <div className="preference-item">
          <span>Dark Mode</span>
          <label className="switch">
            <input 
              type="checkbox" 
              checked={darkMode} 
              onChange={toggleDarkMode} 
            />
            <span className="slider"></span>
          </label>
        </div>
        <div className="preference-item">
          <span>Notifications</span>
          <label className="switch">
            <input type="checkbox" defaultChecked />
            <span className="slider"></span>
          </label>
        </div>
      </div>

      <div className="settings-section">
        <h2>Account</h2>
        <button className="main-btn btn-blue">Change Password</button>
        <button className="main-btn btn-red">Delete Account</button>
      </div>
    </div>
  );
};

export default Settings;  