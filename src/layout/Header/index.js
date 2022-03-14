import React from "react";

const Header = () => {
  return (
    <>
      <nav>
        <NavLink exact to="/" activeClassName="active">Home</NavLink>
        <NavLink to="/about" activeClassName="active">About</NavLink>
        <NavLink to="/search" activeClassName="active">Search</NavLink>
      </nav>
      
    </>
  );
};

export default Header;