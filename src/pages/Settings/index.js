import React from "react";

const Settings = () => {
  return (
    <div className="settings-div">
      {/* <a href="#" className="nav-link">
        <i className="far fa-user-circle"></i> Profile
        <div className="dropdown">
          <div className="setting_name"> Lightmode/dark Mode </div>
        </div>
      </a> */}
      <a id="profile_btn" href="#">
        <i className="far fa-user-circle"></i> Profile
        <div className="dropdown">
          <ul>
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
            <li>Option 4</li>
          </ul>
        </div>
      </a>
    </div>
  );
};

export default Settings;
