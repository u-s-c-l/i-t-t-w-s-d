import React from "react";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../../contexts";

const Header = () => {
  const { currentUser, logout } = useAuthContext();

  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        {!currentUser ? (
          <></>
        ) : (
          <>
            <NavLink to="/userprofile">Profile</NavLink>
            <NavLink to="/quiz">Quiz</NavLink>
            <button onClick={logout}>Logout</button>
          </>
        )}
      </nav>
    </>
  );
};

export default Header;
