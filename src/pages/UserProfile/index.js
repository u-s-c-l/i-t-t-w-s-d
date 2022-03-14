import React from "react";
import { Settings } from "../../components";


const UserProfile = () => {
  return (
    <>
      <div id="profile">
        {/* profile picture */}
        {/* profile bio */}
        <div id="profile_buttons">
          <Settings/>
        </div>
      </div>
    </>
  );
};

export default UserProfile;