import React from "react";
import PropTypes from "prop-types";

const Name = ({ onChange, value }) => {
  return (
    <div className="field ">
      <label
        htmlFor="name"
        className="text-xl mr-20 font-light"
        aria-label="name-field"
      >
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
        className="peer border-b-2 border-tblack font-extralight p-1 mt-2 w-48 focus:outline-none focus:border-green-500 focus:invalid:border-tpink"
      />
    </div>
  );
};

Name.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.any
};
export default Name;
