import React, { useState } from "react";
// import PropTypes from "prop-types";
import {
  Edit,
  Status,
  Name,
  Profile,
  SettingsBtn,
  Chat
} from "../../components";
import { useAuthContext } from "../../contexts";

const UserProfile = () => {
  const { currentUser } = useAuthContext();

  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [active, setActive] = useState("edit");

  const handleName = (e) => {
    const name = e.target.value;
    setName(name);
  };

  const handleStatus = (e) => {
    const status = e.target.value;
    setStatus(status);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let activeP = active === "edit" ? "profile" : "edit";
    setActive(activeP);
  };

  return (
    <>
      <form>
        <p>{!!currentUser && currentUser.username}</p>
        {active === "edit" ? (
          <Edit onSubmit={handleSubmit}>
            <Name onChange={handleName} value={name} />
            <Status onChange={handleStatus} value={status} />
          </Edit>
        ) : (
          <Profile onSubmit={handleSubmit} name={name} status={status} />
        )}
        <SettingsBtn />
        <Chat />
      </form>
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
