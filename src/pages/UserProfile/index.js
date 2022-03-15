import React from "react";
import { Settings, Edit, Chat } from "../../components";

const UserProfile = () => {
  return (
    <>
      <div id="profile">
        {/* profile picture */}
        {/* profile bio */}
        <div id="profile_buttons">
          <Settings/>
          <Edit/>
          <Chat/>
        </div>
      </div>
    </>
  );
};

export default UserProfile;