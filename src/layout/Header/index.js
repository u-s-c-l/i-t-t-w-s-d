import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="bg-indigo-500 w-full h-24">
        <NavLink exact to="/" activeClassName="active">Home</NavLink>
        <NavLink to="/about" activeClassName="active">About</NavLink>
        <NavLink to="/search" activeClassName="active">Search</NavLink>
      </nav>
      
    </>
  );
};

export default Header;