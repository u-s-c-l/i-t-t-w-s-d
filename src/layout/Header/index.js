import React from "react";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../../contexts";

const Header = () => {
  const { currentUser, logout } = useAuthContext();

  return (
    <>
      <nav>
        <NavLink exact="true" to="/">
          Home
        </NavLink>
        <NavLink to="/about">About</NavLink>
        {!currentUser ? (
          <>
            <NavLink to="/about">Login </NavLink>
            <NavLink to="/about">Register</NavLink>
          </>
        ) : (
          <>
            <NavLink to="/userprofile">Profile</NavLink>
            <button onClick={logout}>Logout</button>
          </>
        )}
      </nav>
    </>
  );
};

export default Header;
