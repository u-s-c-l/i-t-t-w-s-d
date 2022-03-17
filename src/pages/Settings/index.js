import React from "react";

const Settings = () => {
  return (
    <div className="settings-div">
      <a href="#" className="nav-link">
        <i className="far fa-user-circle"></i> Profile
      </a>
      <a href="#" className="nav-link">
        <i className="far fa-bell"></i> Account
      </a>
      <a href="#" className="nav-link">
        <i className="far fa-file-alt"></i> Privacy
      </a>
      <a href="#" className="nav-link">
        <i className="fas fa-cogs"></i> General
      </a>
      <a href="#" className="nav-link">
        <i className="fas fa-cogs"></i> Delete Account
      </a>
    </div>
  );
};

export default Settings;
