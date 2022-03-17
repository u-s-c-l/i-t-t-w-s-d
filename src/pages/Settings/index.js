import React, { useState } from "react";
import "./index.css";

const Settings = () => {
  const [show, setShow] = useState(true);

  return (
    <div className="settings-div">
      {/* <a href="#" className="nav-link">
        <i className="far fa-user-circle"></i> Profile
        <div className="dropdown">
          <div className="setting_name"> Lightmode/dark Mode </div>
        </div>
      </a> */}
      <a id="profile_btn" href="#">
        <i className="far fa-user-circle" onClick={() => setShow((s) => !s)}>
          Profile{" "}
        </i>{" "}
      </a>
      <div
        className="dropdown"
        style={{ visibility: show ? "visible" : "hidden" }}
      >
        <ul>
          <li>Chat Notifications</li>
          <div className="m-4">
            <div className="toggle colour">
              <input
                id="profile1"
                className="toggle-checkbox hidden"
                type="checkbox"
              ></input>
              <label
                htmlFor="profile1"
                className="toggle-label block w-12 h-6 rounded-full transition-color duration-150 ease-out"
              ></label>
            </div>
          </div>
          <li>Game Notifications</li>
          <div className="m-4">
            <div className="toggle colour">
              <input
                id="profile2"
                className="toggle-checkbox hidden"
                type="checkbox"
              ></input>
              <label
                htmlFor="profile2"
                className="toggle-label block w-12 h-6 rounded-full transition-color duration-150 ease-out"
              ></label>
            </div>
          </div>
          <li>Change Password</li>
          <div className="m-4">
            <div className="toggle colour">
              <input
                id="profile2"
                className="toggle-checkbox hidden"
                type="checkbox"
              ></input>
              <label
                htmlFor="profile2"
                className="toggle-label block w-12 h-6 rounded-full transition-color duration-150 ease-out"
              ></label>
            </div>
          </div>
          <li>Change Username</li>
          <div className="m-4">
            <div className="toggle colour">
              <input
                id="profile2"
                className="toggle-checkbox hidden"
                type="checkbox"
              ></input>
              <label
                htmlFor="profile2"
                className="toggle-label block w-12 h-6 rounded-full transition-color duration-150 ease-out"
              ></label>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Settings;
