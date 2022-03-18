import React, { useState } from "react";
import "./index.css";

const Settings = () => {
  const [profile, setProfile] = useState(true);
  const [privacy, setPrivacy] = useState(true);
  const [general, setGeneral] = useState(true);
  return (
    <div className="settings-div flex flex-col">
      <div className="profile_section">
        <a id="profile_btn" href="#">
          <i
            className="far fa-user-circle"
            onClick={() => setProfile((s) => !s)}
          >
            Profile{" "}
          </i>{" "}
        </a>
        <div className={profile ? "hidden" : "block"}>
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
                  id="profile3"
                  className="toggle-checkbox hidden"
                  type="checkbox"
                ></input>
                <label
                  htmlFor="profile3"
                  className="toggle-label block w-12 h-6 rounded-full transition-color duration-150 ease-out"
                ></label>
              </div>
            </div>
            <li>Change Username</li>
            <div className="m-4">
              <div className="toggle colour">
                <input
                  id="profile4"
                  className="toggle-checkbox hidden"
                  type="checkbox"
                ></input>
                <label
                  htmlFor="profile4"
                  className="toggle-label block w-12 h-6 rounded-full transition-color duration-150 ease-out"
                ></label>
              </div>
            </div>
          </ul>
        </div>
      </div>
      <a id="privacy_btn" href="#">
        <i className="fa fa-lock" onClick={() => setPrivacy((s) => !s)}>
          Privacy{" "}
        </i>{" "}
      </a>
      <div className={privacy ? "hidden" : "block"}>
        <ul>
          <li>Accept Chat Requests</li>
          <div className="m-4">
            <div className="toggle colour">
              <input
                id="privacy1"
                className="toggle-checkbox hidden"
                type="checkbox"
              ></input>
              <label
                htmlFor="privacy1"
                className="toggle-label block w-12 h-6 rounded-full transition-color duration-150 ease-out"
              ></label>
            </div>
          </div>
          <li>Anonymous mode </li>
          <div className="m-4">
            <div className="toggle colour">
              <input
                id="privacy2"
                className="toggle-checkbox hidden"
                type="checkbox"
              ></input>
              <label
                htmlFor="privacy2"
                className="toggle-label block w-12 h-6 rounded-full transition-color duration-150 ease-out"
              ></label>
            </div>
          </div>
          <li>Billing info</li>
          <div className="m-4">
            <div className="toggle colour">
              <input
                id="privacy3"
                className="toggle-checkbox hidden"
                type="checkbox"
              ></input>
              <label
                htmlFor="privacy3"
                className="toggle-label block w-12 h-6 rounded-full transition-color duration-150 ease-out"
              ></label>
            </div>
          </div>
        </ul>
      </div>
      <a id="general_btn" href="#">
        <i className="fas fa-cogs" onClick={() => setGeneral((s) => !s)}>
          general{" "}
        </i>{" "}
      </a>
      <div className={general ? "hidden" : "block"}>
        <ul>
          <li>Help</li>
          <div className="m-4">
            <div className="toggle colour">
              <input
                id="general1"
                className="toggle-checkbox hidden"
                type="checkbox"
              ></input>
              <label
                htmlFor="general1"
                className="toggle-label block w-12 h-6 rounded-full transition-color duration-150 ease-out"
              ></label>
            </div>
          </div>
          <li> Compeition Alerts </li>
          <div className="m-4">
            <div className="toggle colour">
              <input
                id="general2"
                className="toggle-checkbox hidden"
                type="checkbox"
              ></input>
              <label
                htmlFor="general2"
                className="toggle-label block w-12 h-6 rounded-full transition-color duration-150 ease-out"
              ></label>
            </div>
          </div>
        </ul>
      </div>
      <button className=" bg-red-700 text-slate-50"> Delete Account </button>
    </div>
  );
};

export default Settings;
