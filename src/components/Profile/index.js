import React from "react";
import PropTypes from "prop-types";

const Profile = ({ onSubmit, name, status }) => {
  return (
    <div className="card p-4 flex flex-col items-center">
      <form
        onSubmit={onSubmit}
        aria-label="profile-form"
        className="p-4 flex flex-col items-center p-4 flex flex-col items-center border border-tblack font-extralight p-1 mt-4 w-full h-48 bg-slate-50 w-full flex justify-around rounded-tl-3xl rounded-tr-3xl max-w-sm"
      >
        <h1>Profile Card</h1>
        <label className="custom-file-upload fas"></label>
        <div className="name">{name}</div>
        <div className="status">{status}</div>
        <button type="submit" className="edit hover:font-bold">
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
