import React from "react";
// import PropTypes from "prop-types";
import { Edit, Status, Name, Profile } from "../../components";

const UserProfile = () => {
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

// UserProfile.propTypes = {
//   onChange: PropTypes.func,
//   onSubmit: PropTypes.func,
//   value: PropTypes.object,
//   name: PropTypes.any,
//   status: PropTypes.any,
//   children: PropTypes.object
// };

export default UserProfile;
