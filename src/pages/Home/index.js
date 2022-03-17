import React from "react";
import UserProfile from "../../pages/UserProfile";

function Home() {
  return (
    <>
      <div id="welcome_div">
        <h1> Hello there stranger! </h1>
        <UserProfile />
      </div>
    </>
  );
}

export default Home;
