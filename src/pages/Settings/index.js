import React from "react";

const Settings = () => {
  return (
    <div className="settings-div">
      <a href="#" className="nav-link">
        <i className="far fa-user-circle"></i> Profile
        <div className="dropdown">
          <div className="setting_name"> Lightmode/dark Mode </div>
          <input
            type="checkbox"
            id="setting_name"
            name="setting_name"
            value=" "
          ></input>
          <div className="setting_name"> Changing Avatar</div>
          <input
            type="checkbox"
            id="setting_name"
            name="setting_name"
            value=" "
          ></input>
        </div>
      </a>
      <a href="#" className="nav-link">
        <i className="far fa-bell"></i> Account
        <div className="dropdown">
          <div className="setting_name"> Chat Notifications </div>
          <input
            type="checkbox"
            id="setting_name"
            name="setting_name"
            value=" "
          ></input>
          <div className="setting_name"> Game Notifications </div>
          <input
            type="checkbox"
            id="setting_name"
            name="setting_name"
            value=" "
          ></input>
          <div className="setting_name"> Change Password </div>
          <input
            type="checkbox"
            id="setting_name"
            name="setting_name"
            value=" "
          ></input>
          <div className="setting_name"> Change Username </div>
          <input
            type="checkbox"
            id="setting_name"
            name="setting_name"
            value=" "
          ></input>
          <div className="Dropdown_billInfo">
            <div className="setting_name"> bill information </div>
            {/* can be a dropdown form or link to a page where you can fill in billing information */}
          </div>
        </div>
      </a>
      <a href="#" className="nav-link">
        <i className="fa fa-lock"></i> Privacy
        <div className="dropdown">
          <div className="setting_name"> Aceept Chat requests </div>
          <input
            type="checkbox"
            id="setting_name"
            name="setting_name"
            value=" "
          ></input>
          <div className="setting_name"> Anonymous mode </div>
          <input
            type="checkbox"
            id="setting_name"
            name="setting_name"
            value=" "
          ></input>
        </div>
      </a>
      <a href="#" className="nav-link">
        <i className="fas fa-cogs"></i> General
        <div className="dropdown">
          <div className="setting_name"> Help </div>
          <input
            type="checkbox"
            id="setting_name"
            name="setting_name"
            value=" "
          ></input>
          <div className="setting_name"> Competition alerts </div>
          <input
            type="checkbox"
            id="setting_name"
            name="setting_name"
            value=" "
          ></input>
        </div>
      </a>
      {/* <a href="#" className="nav-link">
        <i className="fa fa-question"></i> Delete Account
        <button> delete </button>
      </a> */}
    </div>
  );
};

export default Settings;
