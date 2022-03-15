import React from "react";
import { Settings  } from "../../components";
import Edit from "../../components/Edit";


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