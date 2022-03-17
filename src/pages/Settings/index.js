import React from "react";

const Settings = () => {
  return (
    <div className="side-menu">
      <a href="#" className="nav-link">
        <i className="far fa-user-circle"></i> Profile
      </a>
      <a href="#" className="nav-link">
        <i className="far fa-bell"></i> Notifications
      </a>
      <a href="#" className="nav-link">
        <i className="far fa-file-alt"></i> Billing Info
      </a>
      <a href="#" className="nav-link">
        <i className="fas fa-cogs"></i> General
      </a>
    </div>
  );
};

export default Settings;
