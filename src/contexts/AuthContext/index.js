import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import jwt_decode from "jwt-decode";
import axios from "axios";

const AuthContext = React.createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(getCurrentUser());

  function getCurrentUser() {
    let user;
    let token = localStorage.getItem("token");
    if (token) {
      user = jwt_decode(token);
    }
    return user;
  }

  const register = async (userData) => {
    try {
      const options = {
        headers: { "Content-Type": "application/json" }
      };
      const { data } = await axios.post(
        // eslint-disable-next-line no-undef
        `${process.env.REACT_APP_API_URL}auth/register`,
        userData,
        options
      );
      if (data.err) {
        throw Error(data.err);
      }
      await login(userData);
      return "Registration successful";
    } catch (err) {
      return err;
    }
  };

  const login = async (userData) => {
    try {
      const options = {
        headers: { "Content-Type": "application/json" }
      };
      const { data } = await axios.post(
        // eslint-disable-next-line no-undef
        `${process.env.REACT_APP_API_URL}auth/login`,
        userData,
        options
      );
      if (!data.success) {
        throw new Error("Login not authorised");
      }
      localStorage.setItem("token", data.token);
      const user = jwt_decode(data.token);
      setCurrentUser(user);
      return "successful";
    } catch (err) {
      return err.response.data;
    }
  };

  const logout = () => {
    localStorage.clear();
    setCurrentUser(null);
  };

  const auth = { register, login, logout, currentUser, getCurrentUser };

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.object.isRequired
};
