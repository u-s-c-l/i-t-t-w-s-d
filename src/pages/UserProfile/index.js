import React from "react";
// import { Edit } from "../../components";
import PropTypes from "prop-types";
import { Edit, Status } from "../../components";

const UserProfile = () => {
  const Name = ({ onChange, value }) => (
    <div className="field">
      <label htmlFor="name">name:</label>
      <input
        id="name"
        type="text"
        onChange={onChange}
        maxLength="25"
        value={value}
        placeholder="Alexa"
        required
      />
    </div>
  );

  const Profile = ({ onSubmit, name, status }) => (
    <div className="card">
      <form onSubmit={onSubmit}>
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

  return (
    <>
      {onclick === "edit" ? (
        <Edit onSubmit={this.handleSubmit}>
          <Name onChange={this.editName} value={name} />
          <Status onChange={this.editStatus} value={status} />
        </Edit>
      ) : (
        <Profile onSubmit={this.handleSubmit} name={name} status={status} />
      )}
    </>
  );
};

UserProfile.propTypes = {
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  value: PropTypes.object,
  name: PropTypes.any,
  status: PropTypes.any,
  children: PropTypes.object
};

export default UserProfile;
