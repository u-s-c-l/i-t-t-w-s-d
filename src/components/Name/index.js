import React from "react";
import PropTypes from "prop-types";

const Name = ({ onChange, value }) => {
  return (
    <div className="field">
      <label htmlFor="name">name:</label>
      <input
        id="name"
        type="text"
        onChange={onChange}
        maxLength="25"
        value={value}
        placeholder="Name"
        required
      />
    </div>
  );
};

Name.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.object
};
export default Name;
