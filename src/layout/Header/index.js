import React from "react";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../../contexts";

const Header = () => {
  const { currentUser, logout } = useAuthContext();
  
    return (
      <>
        <nav className="bg-indigo-500 w-full h-24  ">
          <NavLink exact to="/" activeClassName="active">Home</NavLink>
          <NavLink to="/about" activeClassName="active">About</NavLink>
          {!currentUser ? 
            <>
              <NavLink activeClassName="current" to="/login">Login </NavLink>
              <NavLink activeClassName="current" to="/register">Register</NavLink>
            </>
            : 
            <>
              <NavLink to="/userprofile" activeClassName="active">Profile</NavLink>
              <button onClick={logout}>Logout</button>
            </>
          }
        </nav>
      </>
    );
};

export default Header;
