import React from "react";
import PropTypes from "prop-types";

const Profile = ({ onSubmit, name, status }) => {
  return (
    <div className="card">
      <form onSubmit={onSubmit} aria-label="profile-form">
        <h1>Profile Card</h1>
        <label className="custom-file-upload fas"></label>
        <div className="name">{name}</div>
        <div className="status">{status}</div>
        <button type="submit" className="edit">
          Edit Profile{" "}
        </button>
      </form>
    </div>
  );
};

Profile.propTypes = {
  onSubmit: PropTypes.func,
  name: PropTypes.any,
  status: PropTypes.any
};
export default Profile;
