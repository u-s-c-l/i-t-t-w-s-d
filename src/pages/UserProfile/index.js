import React from "react";
import { Settings, Edit, Chat, Login, Register } from "../../components";

const UserProfile = () => {
  return (
    <>
      <div id="profile">
        {/* profile picture */}
        {/* profile bio */}
        <div id="profile_buttons">
          <Login/>
          <Register/>

          <Settings />
          <Edit />
          <Chat />
        </div>
      </div>
    </>
  );
};

export default UserProfile;
