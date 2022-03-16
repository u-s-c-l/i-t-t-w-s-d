import React from "react";
import { SettingsBtn, Edit, Chat } from "../../components";

const UserProfile = () => {
  return (
    <>
      <div id="profile">
        {/* profile picture */}
        {/* profile bio */}
        <div id="profile_buttons">
          <SettingsBtn />
          <Edit />
          <Chat />
          {/* Scoreboard div */}
          {/*  scores */}
          {/* premium button with div that has another button */}
        </div>
      </div>
    </>
  );
};

export default UserProfile;
