import React from "react";
import PropTypes from "prop-types";

const Name = ({ onChange, value }) => {
  return (
    <div className="field">
      <label htmlFor="name" aria-label="name-field">
        name:
      </label>
      <input
        aria-label="name-field-input"
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
};

Name.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.any
};
export default Name;
