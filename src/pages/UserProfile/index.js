import React from "react";
import { Settings, Edit, Chat  } from "../../components";

const UserProfile = () => {
  return (
    <>
      <div id="profile">
        {/* profile picture */}
        {/* profile bio */}
        <div id="profile_buttons">
  
          <Settings />
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
