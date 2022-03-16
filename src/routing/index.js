// import React from "react";
// import PropTypes from "prop-types";
// import { Route, Navigate } from "react-router-dom";
// import { useAuthContext } from "../contexts/index";

// export const LoggedOutRoute = ({ children }) => {
//   const { currentUser } = useAuthContext();

//   return (
//     <Route> {!currentUser ? children : <Navigate to="/userprofile" />}</Route>
//   );
// };

// export const PrivateRoute = ({ children }) => {
//   const { currentUser } = useAuthContext();

//   return <Route> {currentUser ? children : <Navigate to="/login" />}</Route>;
// };

// LoggedOutRoute.propTypes = {
//   children: PropTypes.object.isRequired
// };

// PrivateRoute.propTypes = {
//   children: PropTypes.object.isRequired
// };
