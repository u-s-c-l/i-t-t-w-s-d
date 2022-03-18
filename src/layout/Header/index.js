import React from "react";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

const Header = () => {
  const { currentUser, logout } = useAuthContext();
  const linkStyle = "py-4 px-5 text-lg hover:font-extrabold";
  return (
    <>
      <nav
        className={
          "bg-slate-50 fixed bottom-0 w-full flex justify-around rounded-tl-3xl rounded-tr-3xl max-w-sm"
        }
      >
        <NavLink
          className={({ isActive }) =>
            isActive ? `${linkStyle} font-extrabold` : linkStyle
          }
          to="/"
        >
          Home
        </NavLink>
        {!currentUser ? (
          <></>
        ) : (
          <>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${linkStyle} font-extrabold` : linkStyle
              }
              to="/userprofile"
            >
              Profile
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${linkStyle} font-extrabold` : linkStyle
              }
              to="/quiz"
            >
              Quiz
            </NavLink>
            <button className={linkStyle} onClick={logout}>
              Logout
            </button>
          </>
        )}
      </nav>
    </>
  );
};

export default Header;
